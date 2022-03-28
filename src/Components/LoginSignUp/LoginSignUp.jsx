import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../../Redux/Login/action";

export const LoginSignUp = () => {
  const dispatch = useDispatch();
  const initState = {
    name: "",
    password: "",
    location: "",
    interests: ["technology", "food", "movies", "culture", "art", "drama"],
    image: "",
  };
  const [data, setData] = useState(initState);

  const handleChange = (e) => {
    let { className, value, type, checked } = e.target;

    value = type == "checkbox" ? checked : value;

    setData({ ...data, [className]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    PostReq();
  };

  const PostReq = () => {
    axios
      .post("http://localhost:8090/users", {
        data,
      })
      .then(function ({ data }) {
        console.log(data.data);
        localStorage.setItem("userLoginDetails", data.data.name);
        dispatch(userLogin(data.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [text, setText] = useState("");
  return (
    <div className="loginSignUp">
      <form className="signUp" onSubmit={handleSubmit}>
        <h1>SignUp</h1>
        <label>name</label>
        <input type="text" className="name" onChange={handleChange} required />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          onChange={handleChange}
          required
        />
        <br />
        <select value={""} className="location" onChange={handleChange}>
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <label>Interests</label>
        <br />
        <label>technology</label>
        <input type="checkbox" className="technology" onChange={handleChange} />
        <br />
        <label>food</label>
        <input type="checkbox" className="food" onChange={handleChange} />
        <br />
        <label>movies</label>
        <input type="checkbox" className="movies" onChange={handleChange} />
        <br />
        <label>culture</label>
        <input type="checkbox" className="culture" onChange={handleChange} />
        <br />
        <label>art</label>
        <input type="checkbox" className="art" onChange={handleChange} />
        <br />
        <label>drama</label>
        <input type="checkbox" className="drama" onChange={handleChange} />
        <br />
        <label>image</label>
        <input type="text" className="image" onChange={handleChange} required />
        <br />
        <input type="submit" className="submitSignUpForm" />
      </form>

      <form className="login" onSubmit={(e) => {}}>
        <h1>Login</h1>
        <label>name</label>
        <input type="text" className="name" onChange={(event) => {}} required />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          onChange={(event) => {}}
          required
        />
        <br />
        <input type="submit" className="submitLoginForm" />
      </form>
    </div>
  );
};
