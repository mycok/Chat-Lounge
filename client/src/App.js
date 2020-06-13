import React, { useState, useEffect, useRef, useCallback } from 'react';
import socketIOClient from 'socket.io-client';
import { Grid } from '@material-ui/core';

import Sidebar from './components/sidebar';
import Input from './components/input';
import Messages from './components/message/Messages';
// import Message from './components/message/Message';

const people = [
    {
        name: '@myckol',
        status: 'offline',
        messages: [
            {
                from: '@user2',
                text: 'Hi, man',
                recieved: true
            },
            {
                from: '@user2',
                text: 'whats up???',
                recieved: true
            },
            {
                from: '@user2',
                text: `Hi Aude, Please keep my file open. I unfortunately can’t give you an exact date of when I will be in position to finalize my subscription since am dealing with a very big business setback at the moment. Am doing everything I can to fix it and will contact you was soon as everything is running smoothly again.`,
                recieved: true
            },
            {
                from: '@myckol',
                text: 'We need a new implementation of the nav bar',
                recieved: false
            },
            {
                from: '@myckol',
                text: 'i think material-ui library will work better',
                recieved: false
            },
            {
                from: '@myckol',
                text: 'i think material-ui library will work better',
                recieved: false
            },
        ]
    },
    {
        name: 'user2',
        status: 'online',
        messages: [],
    },
    {
        name: 'user3',
        status: 'offline',
        messages: []
    },
    {
        name: 'user4',
        status: 'online',
        messages: []
    }
];
const socket = socketIOClient('http://localhost:4000' || 'https://chat-lounge-api.herokuapp.com/');
// TODO
// - display created messages with Message component each time a user hits send
// - store that new message somewhere such that that same component can be used to display another new message
// - find a way to display a list of all created messages may be by appending to a state new messages array
const App = () => {
    const [active, setActive] = useState(false);
    const [peopleList, setPeopleList] = useState(people);
    const [selectedPerson, setSelectedPerson] = useState(people[0]);
    const [messageList, setMessageList] = useState([...people[0].messages]);
    const [message, setMessage] = useState({ from: '', text: '' });
    const divRef = useRef();

    const connections = useCallback(() => {
        socket.on('newConnection', (message) => {
            console.log('new user joined');
            const serverMessage = { ...message, recieved: true }
            const messages = [...messageList];
            messages.push(serverMessage);
            setMessageList(messages);
        })
    }, [messageList])

    const recieveNewMessage = useCallback(() => {
        // listen to a newMessage event from the server and perform further actions based on the recieved data
        socket.on('newMessage', (message) => {
            console.log('Yeaahhh, just recieved a new message!!!!', message);
            // setMessage(message);
            const messages = [...messageList];
            messages.push(message);
            setMessageList(messages);
        });
    }, [messageList])

    const displayMessageList = (name) => {
        const selPerson = peopleList.filter((person) => person.name === name);
        setSelectedPerson(selPerson[0]);
        setMessageList(selPerson[0].messages);
    }

    const sendMessage = (message) => {
        // emit a createMessage event and data to the a specific active socket on the server
        // pass a function as a third argument to the emit function
        // to read the ackwoledgement data from the server and act accordingly
        socket.emit('createMessage', {
            from: '@myckol',
            text: message,
        }, (serverAckwoledgement) => {
            console.log('Got it!!!', serverAckwoledgement);
        });
    }

    const sendLocation = () => {
        if (!navigator.geolocation) {
            return alert('Geolocation not supported by your browser');
        }
        navigator.geolocation.getCurrentPosition((position) => {
            const { coords: { latitude, longitude } } = position;

            socket.emit('shareLocation', { latitude, longitude });
        }, (error) => {
            alert('We need your permission to share your location')
        });
    }

    useEffect(() => {
        const scrollElement = divRef.current;
        scrollElement.scrollTop = scrollElement.scrollHeight;
    });

    useEffect(() => {
        socket.on('connect', () => {
            setActive(true);
        });
        socket.on('disconnect', () => {
            console.log('Disconnected from the server!');
        });

        connections();
        recieveNewMessage();

        return () => {
            socket.off('newConnection');
            socket.off('newMessage');
        }
    }, [connections, recieveNewMessage]);

    return (
        <Grid container>
            <Grid item xs={2}>
                <Sidebar
                    peopleList={peopleList}
                    selectedPerson={selectedPerson}
                    displayMessageList={displayMessageList}
                />
            </Grid>
            <Grid item xs={10}>
                <div ref={divRef} style={{ height: '90vh', overflowY: 'auto' }}>
                    <Messages messageList={messageList} selectedPerson={selectedPerson} />
                    {/* {
                        message.text && <Message message={message} selectedPerson={selectedPerson} />
                    } */}
                </div>
                <Input
                    sendMessage={sendMessage}
                    sendLocation={sendLocation}
                />
            </Grid>
        </Grid>
    )
}

export default App;
