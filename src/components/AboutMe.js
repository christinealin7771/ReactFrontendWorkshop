import React from 'react'

import './../App.css';
import pic from './../friends.jpg'

const AboutMe = () => {

  return (
    <div className="aboutMe">
        <h1>About Me</h1>
        <div className="details">
            <p>Name: Christine Lin</p>
            <p>Major: Computer Science</p>
            <p>Favorite Show: Friends</p>
            <img src={pic}></img>
        </div>
    </div>
  )
}

export default AboutMe