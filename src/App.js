import React from 'react';
import logo from "./logo.jpg";
import './App.css';
import CourseInfo from './Components/CourseInfo/CourseInfo'; // If it's inside a "components" folder


function App() {
  return (
    <div className="container-fluid">
      <img src = {logo} className="text-center bg-info p-3 "></img>
      {/* <h1 className="text-center bg-info p-3">Online Courses</h1> */}
      <CourseInfo></CourseInfo>
    </div>
  );
}

export default App;
