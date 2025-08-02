import React from 'react';

const CourseDetails = () => {
  const courses = [
    { id: 101, name: 'React', duration: '2 months' },
    { id: 102, name: 'Node.js', duration: '1.5 months' },
  ];

  return (
    <div>
      <h2>Course Details</h2>
      {courses.map(course => (
        <p key={course.id}>
          {course.name} - {course.duration}
        </p>
      ))}
    </div>
  );
};

export default CourseDetails;
