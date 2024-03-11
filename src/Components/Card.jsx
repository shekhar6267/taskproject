
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 

const CardView = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://child.onrender.com/api/sciencefiction');
      const data = await response.json();
      setStories(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return ( 
    <div className="card-container"> 
      <h1>Science Fiction Stories</h1>
      {stories.map(story => (
        <Link to={`/story-details/${story.id}`} key={story.id}>
          <div className="card" style={{ maxWidth: '100px', float: 'left', marginRight: '60px',marginTop:'20px' }}>
            <h2>{story.title}</h2> 
            <img src={`https://ik.imagekit.io/dev24/${story.Image}`}  style={{ width: '100%' }} /> 
            <button className='btn btn-success' style={{fontSize:"20px"}}>New</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardView;

