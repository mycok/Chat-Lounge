import React from 'react';

import Message from './Message';

const Messages = ({ messageList, selectedPerson }) => (
        messageList.map((message) => {
                const { from } = message;
                return (
                        <Message key={`${from}${Math.floor(Math.random() * 1000000)}`}message={message} selectedPerson={selectedPerson} />
                )
        })
)

export default Messages;
