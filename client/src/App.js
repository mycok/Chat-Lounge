import React, { useState, useEffect } from 'react';

import socketIOClient from 'socket.io-client';


const App = () => {
    useEffect(() => {
        socketIOClient('http://localhost:4000');
    })

    return (
        <p>Here we are</p>
    );
}

export default App;
