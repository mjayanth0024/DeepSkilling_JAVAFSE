import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [view, setView] = useState('book');

  const renderComponent = () => {
    if (view === 'book') return <BookDetails />;
    else if (view === 'blog') return <BlogDetails />;
    else if (view === 'course') return <CourseDetails />;
    else return <div>Select a valid option</div>;
  };

  return (
    <div>
      <h1>Conditional Rendering Example</h1>
      <button onClick={() => setView('book')}>Book Details</button>
      <button onClick={() => setView('blog')}>Blog Details</button>
      <button onClick={() => setView('course')}>Course Details</button>
      {renderComponent()}
    </div>
  );
}

export default App;
