import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './component.css'

const Carousel = ({ group , album , setAlbum }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % group.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + group.length) % group.length);
  };

  const currentGroupItem = group[currentIndex];

  async function deleteFetched(id){
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    });

    const responseJSON = await response.json();
    if (responseJSON) {
      console.log(response);
    }
    const newArray = album.filter(albumItem => albumItem.id !== id);
    setAlbum(newArray);

  }

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevSlide}>
        Previous
      </button>
      <div className="carousel-inner">
        <div className={`carousel-slide active`}>
          <div className='album'>
            <div className='photos'>
              <h1>Album {currentGroupItem.userId}</h1>
              <h3>Photo {currentGroupItem.id}</h3>
              <h3>{currentGroupItem.body}</h3>
              <button onClick={() => {deleteFetched(currentGroupItem.id)}}> Delete </button>
              <Link to={{pathname: `/update-album/${currentGroupItem.id}`}}>
                <button>Update</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-button next" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default Carousel;

