
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import StoryDetails from './StoryDetails';

const CardView = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://child.onrender.com/api/sciencefiction');
      const data = await response.json(); 
      console.log(data)
      setStories(data); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };  
  console.log(stories)

  return ( 

    <>  
    <h1>Science Fiction Stories</h1>
 {stories.map((v, index) => (
   <StoryDetails key={index} 
   title={v.Title} img={v.Image}/>
 ))}
</>
  )
};

export default CardView; 



