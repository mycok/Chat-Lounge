import React from 'react';

import Message from './Message';

const Messages = ({ messageList }) => (
        messageList.map((message) => {
                return (
                        <Message message={message} />
                )
        })
)

export default Messages;
