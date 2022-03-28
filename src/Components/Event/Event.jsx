// This is an event details page which has its own route

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export const Event = () => {
  const [status, setStatus] = useState(false);

  const { id } = useParams();
  const [meet, setMeet] = useState({});

  useEffect(() => {
    getReq();
  }, []);

  const getReq = () => {
    axios.get(`http://localhost:8080/meetups/${id}`).then(({ data }) => {
      setMeet(data);
    });
  };
  console.log(meet);
  const onSubs = () => {
    axios
      .patch(`http://localhost:8090/users/${id}`, { subscribed: [`${id}`] })
      .then((data) => {
        console.log("data", data);
      });
    setStatus(!status);
    console.log(status);
  };

  const unSub = () => {
    axios
      .patch(`http://localhost:8090/users/${id}`, {
        subscribed: [],
      })
      .then((data) => {
        console.log("data", data);
      });
    setStatus(!status);
    console.log(status);
  };

  return (
    //     {id: 1, title: 'Saunter Strech', location: 'bangalore', date: '2022-03-25', time: '23:59', …}
    // date: "2022-03-25"
    // description: "Random Event"
    // id: 1
    // image: "https://secure-content.meetupstatic.com/images/classic-events/502596286/333x188.webp"
    // location: "bangalore"
    // theme: "technology"
    // time: "23:59"
    // title: "Saunter Strech"
    <div className="eventContainer">
      <div>
        <h1>{meet.title} </h1>
        <h2>{meet.location}</h2>
        <img src={meet.image} alt="" />
        <p>{meet.date}</p>
        <p>{meet.time}</p>
        <p>{meet.description}</p>
        <p>{meet.theme}</p>
      </div>
      {/* add your children here (divs)
      ex : title, theme, description, date, time, location, image(optional)
      the classNames should be also : title, theme, description, date, time, location, image(optional)
      */}

      {/* only one of the buttons should be visible depending on the status of subcription
      Hint : use conditional rendering */}

      {status ? (
        <button
          className="unsubscribe"
          onClick={() => {
            unSub();
            setStatus(!status);
          }}
        >
          Unsubscribe
        </button>
      ) : (
        <button
          className="subscribe"
          onClick={() => {
            onSubs();
          }}
        >
          Subscribe
        </button>
      )}
    </div>
  );
};
