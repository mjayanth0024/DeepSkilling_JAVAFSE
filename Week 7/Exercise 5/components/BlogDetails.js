import React from 'react';

const BlogDetails = () => {
  const blogs = [
    { id: 1, title: 'React Basics' },
    { id: 2, title: 'Hooks in Depth' },
  ];

  return (
    <div>
      <h2>Blog Details</h2>
      {blogs.map(blog => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default BlogDetails;
