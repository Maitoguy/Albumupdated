import React, { useEffect } from 'react';
import Carousel from './Carousel';
import './component.css';

function Home({ album, setAlbum, createdAlbum }) {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setAlbum(json);
      });
  }, []);

  function renderElements() {
    const elements = [];

    for (let i = 0; i < album.length; i += 10) {
      const group = album.slice(i, i + 10);
      elements.push(<Carousel group={group} key={group[0].userId} album={album} setAlbum={setAlbum} />);
    }

    return elements;
  }

  function renderNewElements() {
    return (
      <div className='created-album'>
        {createdAlbum.map((createdAlbumItem) => (
          <div key={createdAlbumItem.id}>
            <h1>Album {createdAlbumItem.userId}</h1>
            <h2>{createdAlbumItem.title}</h2>
            <p>{createdAlbumItem.body}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className='home'>
      {renderElements()}
      {renderNewElements()}
    </div>
  );
}

export default Home;
