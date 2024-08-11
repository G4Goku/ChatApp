import React, { useEffect, useState } from 'react';
import {io} from 'socket.io-client';

const Home = () => {
    const socket = io('http://localhost:5000')
    socket.on('connection', "onConnect");
    return (
        <React.Fragment>
            <h1>Socket connection</h1>
            {/* Add other UI elements or components that utilize the socket connection */}
        </React.Fragment>
    );
};

export default Home;
