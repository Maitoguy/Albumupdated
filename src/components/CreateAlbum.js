import React, { useState } from 'react';
import './component.css'

function CreateAlbum({ album, setAlbum , createdAlbum , setCreatedAlbum }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [id, setId] = useState(100); 

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const responseJSON = await response.json();
        console.log(responseJSON);

    const newAlbum = {
      title: title,
      body: body,
      id: id,
      userId: Math.ceil(id / 10)
    };
    setId(id + 1); 
    setCreatedAlbum([...createdAlbum , newAlbum]);
  }

  return (
    <div className="create-album">
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label>Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>

        <div className="form-input">
          <label>Body</label>
          <input value={body} onChange={(e) => setBody(e.target.value)} required />
        </div>

        <button className="form-btn">Create Album</button>
      </form>
    </div>
  );
}

export default CreateAlbum;