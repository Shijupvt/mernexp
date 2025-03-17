import React, { useState } from "react";
import "./style.css";

function OnlineCourseManagementForm() {
  const [courseName, setCourseName] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [courses, setCourses] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCourse = { courseName, price, duration };
    setCourses([...courses, newCourse]);
    setCourseName("");
    setPrice("");
    setDuration("");
  };

  const handleDelete = (index) => {
    const newCourses = courses.filter((_, i) => i !== index);
    setCourses(newCourses);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Add Online Course</h3>
        <div>
          <label>Course Name</label>
          <input
            onChange={(e) => setCourseName(e.target.value)}
            value={courseName}
          ></input>
        </div>
        <div>
          <label>Price</label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          ></input>
        </div>
        <div>
          <label>Duration</label>
          <input
            onChange={(e) => setDuration(e.target.value)}
            value={duration}
          ></input>
        </div>
        <div>
          <button type="submit">Add Course</button>
        </div>
      </form>
      <div>
        <h3>Online Courses</h3>
        <table>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Price</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td>{course.courseName}</td>
                <td>{course.price}</td>
                <td>{course.duration}</td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OnlineCourseManagementForm;