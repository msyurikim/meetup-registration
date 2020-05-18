import React, { Component } from "react";

const AttendeeList = (props) => {
  //   console.log("attendee list props: ", props);
  const beginner = [];
  const intermediate = [];
  const expert = [];

  props.attendees.filter((each) => {
    if (each.skillLevel === "beginner") {
      beginner.push(each);
    } else if (each.skillLevel === "intermediate") {
      intermediate.push(each);
    } else {
      expert.push(each);
    }
  });

  console.log("beginners: ", beginner);
  console.log("intermediates: ", intermediate);
  console.log("experts: ", expert);

  return (
    <div className="attendees">
      <h2>Attendees</h2>
      <h3>Beginner</h3>
      {beginner.map((each, item) => {
        return (
          <p key={item}>
            {each.firstName} {each.lastName}
          </p>
        );
      })}
      <h3>Intermediate</h3>
      {intermediate.map((each, item) => {
        return (
          <p key={item}>
            {each.firstName} {each.lastName}
          </p>
        );
      })}
      <h3>Expert</h3>
      {expert.map((each, item) => {
        return (
          <p key={item}>
            {each.firstName} {each.lastName}
          </p>
        );
      })}
    </div>
  );
};

export default AttendeeList;
