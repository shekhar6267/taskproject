import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const StoryDetails = () => {
  const { id } = useParams();
  const [story, setStory] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://child.onrender.com/api/sciencefiction/${id}`);
      const data = await response.json();
      setStory(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="story-details">
      {story && (
        <div>
          <h2>{story.title}</h2>
          <p>Author: {story.author}</p>
          <p>{story.content}</p>
        </div>
      )}
    </div>
  );
};

export default StoryDetails;
