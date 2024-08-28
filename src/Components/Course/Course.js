import React from 'react';
import './App.css';

function CourseCard({ image, title, instructor, duration, rating, reviews }) {
  return (
    <div className="course-card">
      <img src={image} alt={title} className="course-image" />
      <div className="course-content">
        <h3>{title}</h3>
        <p>{instructor}</p>
        <p>Duration: {duration}</p>
        <p>Rating: {rating} ({reviews} reviews)</p>
      </div>
    </div>
  );
}

export default CourseCard;
