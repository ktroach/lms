import React from "react";
import "./Profile.css";
import { Col, Row, Container } from "../../components/Grid";

const Profile = () => (
  <div className="ProfileBucket">
    <div className="notifications"></div>
    <div className="userPic">
      <img src="https://www.pngitem.com/pimgs/m/517-5177724_vector-transparent-stock-icon-svg-profile-user-profile.png" />
      <h2>Sample User</h2>
    </div>
    <div className="userInfo">
      <div className="userProgress">
        <h3>YOUR PROGRESS</h3>
        <ul className="progressBlock">
          <li><span className="userGrade progLeft">B+</span><span className="userGradeText progRight" style={{marginLeft: 10}}>Academic Average</span></li>
          <li><span className="userCompletion progLeft">50%</span><span className="userCompletionText progRight" style={{marginLeft: 10}}>Academic Average</span></li>
          {/* <li><span className="userOverdue progLeft">0</span><span className="userOverdueText progRight">Academic Average</span></li> */}
        </ul>
      </div>
      {/* <div className="userAttendance">
        <h3>YOUR ATTENDANCE</h3>
        <ul className="progressBlock">
          <li><span className="userEarly progLeft">15</span><span className="userEarlyDigit progRight">Early</span></li>
          <li><span className="userPresent progLeft">15</span><span className="userPresentText progRight">Present</span></li>
          <li><span className="userLate progLeft">1</span><span className="userLateText progRight">Late</span></li>
          <li><span className="userExcused progLeft">1</span><span className="userExcusedText progRight">Excused</span></li>
          <li><span className="userAbsent progLeft">1</span><span className="userAbsentText progRight">Absent</span></li>
        </ul>
      </div> */}
    </div>
  </div>
);


export default Profile;
