import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './component.css'

function Update({ album, setAlbum }) {
  const { albumId } = useParams();
  const [body, setBody] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const albumIdNum = parseInt(albumId, 10);
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${albumIdNum}`, {
      method: 'PUT',
      body: JSON.stringify({
        body: body,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    
    const responseJSON = await response.json();
    console.log(responseJSON);
    const modifiedData = album.map(element => {
      if (element.id === responseJSON.id) {
        return { ...element, body: body };
      } else {
        return element;
      }
    });
    setAlbum(modifiedData);
  }

  return (
    <div className='update-album'>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label>Body</label>
          <input value={body} onChange={(e) => setBody(e.target.value)} required />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Update;
