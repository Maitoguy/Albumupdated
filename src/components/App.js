import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import CreateAlbum from './CreateAlbum';
import Home from './Home';
import Update from './Update';
import './component.css'

function App() {
    const [album, setAlbum] = useState([]);
    const [createdAlbum, setCreatedAlbum] = useState([]); 
    
    return (
        <div className="App">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Album</title>
                <link rel="icon" type="image" href="https://img.icons8.com/?size=1x&id=wegGCtbstEd0&format=png" />
            </Helmet>

            <Navbar />

            <Routes>
                <Route path="/" element={<Home album={album} setAlbum={setAlbum} createdAlbum={createdAlbum} setCreatedAlbum={setCreatedAlbum} />} />
                <Route path="/create-album" element={<CreateAlbum album={album} setAlbum={setAlbum} createdAlbum={createdAlbum} setCreatedAlbum={setCreatedAlbum} />} />
                <Route path="/update-album/:albumId" element={<Update album={album} setAlbum={setAlbum} />} />
                
            </Routes>
        </div>
    );
}

export default App;
