// import React from 'react';
import propTypes from 'prop-types';

const position = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
}
const customStyle = {
    fontFamily: "Sacramento, cursive",
    fontSize: "5rem",
    color: "pink",
    textAlign: "center",
    margin: "1%"
}
const bioAndprofession = {
    color: "white",
    lineHeight: "1.7",
    fontSize: "1.3rem",
    fontWeight: "normal",
    textAlign: "center"
}



const Profile = ({fullName, bio, profession,handleName,children}) => {
  return (
    <div style={position}>
      {handleName(fullName)}
      {children}     
      <div>
        <h1 style={customStyle}>{fullName}</h1>
        <h2 style={bioAndprofession}>{bio}</h2>
        <p style={bioAndprofession}>{profession}</p>
      </div>
    </div>
  )
}

Profile.defaultProps={
    fullName: "Tell us your Name",
    bio: "Tell us your Bio",
    profession:"Tell us your Profession",
    handleName:"undefind alert"
}
Profile.propTypes={
    fullName: propTypes.string,
    bio: propTypes.string,
    profession: propTypes.string,
    handleName:propTypes.func
}

export default Profile;
