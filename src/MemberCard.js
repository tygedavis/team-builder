import React from "react";

const MemberCard = props => {
    console.log("Props on MemberCard", props)
  return (
    <div className="teamList">
      {props.team.map( member => (
        <div className='teamInfo' key={member.id}>
          <h2>{member.name}</h2>
          <p>Email: {member.email}</p>
          <p>Position: {member.role}</p>
        </div>
      ))}
    </div>
  );
 };

export default MemberCard;