import React, { Component, memo } from 'react';
import socketIOClient from 'socket.io-client';
import { Grid } from '@material-ui/core';

import Sidebar from './components/sidebar';
import Input from './components/input';
import Messages from './components/message/Messages';
import Message from './components/message/Message';

const people = [
    {
        name: '@awesomeme155rttyu',
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
            }
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
class App extends Component {
    constructor() {
        super();
        this.state = {
            socket: socketIOClient('https://chat-lounge-api.herokuapp.com/'),
            active: false,
            peopleList: people,
            selectedPerson: people[0],
            messageList: [people[0].messages],
            message: {
                from: '',
                text: ''
            },
        };
    }

    componentDidMount() {
        const { socket } = this.state;
        socket.on('connect', () => {
            this.setState({ active: true });

        });
        socket.on('disconnect', () => {
            console.log('Disconnected from the server!');
        });

        this.connections();
        this.recieveNewMessage();
    }

    connections = () => {
        const { socket } = this.state;
        socket.on('newConnection', (message) => {
            console.log('new user joined');
            this.setState({ message: message })

        })
    }

    recieveNewMessage = () => {
        const { socket } = this.state;
        // listen to a newMessage event from thee server and perform further actions based on the recieved data
        socket.on('createMessage', (newMessage) => {
            console.log('Yeaahhh, just recieved a new message!!!!', newMessage);
            this.setState({ message: newMessage });
        });
    }

    displayMessageList = (name) => {
        const { peopleList } = this.state;
        const selPerson = peopleList.filter((person) => person.name === name);

        this.setState({ selectedPerson: selPerson[0], messageList: selPerson[0].messages });
    }

    sendMessage = (message) => {
        const { socket } = this.state;
        // emit a createMessage event and data to the a specific active socket on the server
        // pass a function as a third argument to the emit function
        // to read the ackwoledgement data from the server and act accordingly
        socket.emit('createMessage', {
            from: '@myckie',
            text: message,
        }, (serverAckwoledgement) => {
            console.log('Got it!!!', serverAckwoledgement);
        });
    }

    sendLocation = () => {

    }

    render() {
        const { message, messageList, active, peopleList, selectedPerson } = this.state;
        active && console.log('Connected to server!');
        return (
            <Grid container>
                <Grid item xs={2}>
                    <Sidebar
                        peopleList={peopleList}
                        selectedPerson={selectedPerson}
                        displayMessageList={this.displayMessageList}
                    />
                </Grid>
                <Grid item xs={10}>
                <div>
                    <Messages  messageList={messageList} />
                    {
                        message.text && <Message message={message} />
                    }
                </div>
                    <Input
                        sendMessage={this.sendMessage}
                        sendLocation={this.sendLocation}
                    />
                </Grid>
            </Grid>
        )
    }
}

export default memo(App);
