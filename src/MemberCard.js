import React from "react";

const MemberCard = props => {
    console.log("Props on MemberCard", props)
  return (
    <div className="team-list">
      {props.team.map( member => (
        <div key={member.id}>
          <h2>{member.name}</h2>
          <p>{member.email}</p>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  );
 };

export default MemberCard;