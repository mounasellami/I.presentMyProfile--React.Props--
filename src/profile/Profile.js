import React from 'react';
import ProfilePhoto from '../res/ProfilePhoto.jpg';
import propTypes from 'prop-types';

const position = {
    float:"right",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
}
const customStyle = {
    fontFamily: "Sacramento, cursive",
    fontSize: "5rem",
    color: "pink",
    textAlign: "center"
}
const bioAndprofession = {
    color: "black",
    lineHeight: "1.7",
    fontSize: "1.3rem",
    fontWeight: "normal",
    textAlign: "center"
}
const positionimg = {
    margin:"3%",
    width:"50%",
    borderRadius: "50%",
    justifyContent: "spacebettween",
}  

const Profile = ({fullName, bio, profession}) => {
  return (
    <div style={position}>
       <div>      
         <img style={positionimg} src={ProfilePhoto} alt='My Profile Photo'/>
       </div>
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
