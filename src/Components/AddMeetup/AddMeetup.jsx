// User should be able to add/create new meetups

import { useState } from "react";
import axios from "axios";
export const AddMeetup = () => {
  const initState = {
    title: "",
    location: "",
    date: "",
    time: "",
    theme: "",
    description: "",
    image: "",
  };
  const [data, setData] = useState(initState);
  const handleChange = (e) => {
    let { className, value, type } = e.target;

    setData({ ...data, [className]: value });
  };
  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    PostReq();
  };

  const PostReq = () => {
    axios
      .post("http://localhost:8080/meetups", {
        data,
      })
      .then(function ({ data }) {
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="addMeetupContainer">
      <form onSubmit={handleSubmit}>
        <h1>Add Meetup</h1>
        <label>title</label>
        <input type="text" className="title" onChange={handleChange} required />
        <label>Location</label>
        <select value={""} className="location" onChange={handleChange}>
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <br />
        <label>date</label>
        <input
          type="text"
          className="date"
          onChange={handleChange}
          placeholder="format YYYY-MM-DD"
          required
        />
        <br />
        <label>time</label>
        <input
          type="text"
          className="time"
          onChange={handleChange}
          placeholder="format HH:MM"
          required
        />
        <br />
        <label>Theme</label>
        <select value={""} className="theme" onChange={handleChange}>
          <option value="">-----------</option>
          <option value="technology">Technology</option>
          <option value="food">Food</option>
          <option value="movies">Movies</option>
          <option value="culture">Culture</option>
          <option value="art">Art</option>
          <option value="drama">Drama</option>
        </select>
        <label>description</label>
        <input
          type="text"
          className="description"
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <br />
        <label>Image</label>
        <input type="text" className="image" onChange={handleChange} required />
        <br />
        <input className="submitMeetupForm" type="submit" />
      </form>
    </div>
  );
};
