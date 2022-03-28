import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
export const Home = () => {
  let [meetList, setMeetList] = useState([]);
  useEffect(() => {
    getReq();
  }, []);

  const getReq = () => {
    axios.get("http://localhost:8080/meetups").then(({ data }) => {
      setMeetList(data);
    });
  };
  console.log(meetList);
  return (
    <div className="homeContainer">
      {[]
        .filter((el) => {}) // Filter on the basis of Users interests and location (both true)
        .map((el) => {
          return (
            <Link to={`add route here`} className="events">
              {/* add your children here (divs)
              ex : title, theme, description, date, time, location, image(optional)
              the classNames should be also : title, theme, description, date, time, location, image(optional)
             */}
            </Link>
          );
        })}

      <div className="subscribedData">
        <div>
          <select
            value={"add your value here"} // add value here
            onChange={(e) => {}}
          >
            <option value="">------</option>
            <option value="bangalore">Bangalore</option>
            <option value="kolkata">Kolkata</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
          </select>
        </div>
        <Link to={`add your route here`}> Add Meetup</Link>
        <h1>Subscribed Events</h1>
        <div className="subscribedEvents">
          {/* All user subcribed events should be displayed here in an ascending order of date */}

          {meetList.map((el) => {
            return (
              <Link to={`add route here`} className="events">
                {/* Each event should have these elements/children (divs):
                    ex : title, theme, description, date, time, location, image(optional)
                    the classNames should be also : title, theme, description, date, time, location, image(optional) */}
                <div key={el.id}>
                  <h1>{el.title}</h1>
                  <img src={el.image} alt="" />
                  <p>{el.id}</p>
                  <p>{el.location}</p>
                  <p>{el.theme}</p>
                  <p>{el.time}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
