import React, { useState } from 'react';

import { TextField, InputAdornment } from '@material-ui/core';
import MessageIcon from '@material-ui/icons/KeyboardArrowRightSharp';

import Button from '../button';

const Input = ({ sendMessage, sendLocation }) => {
    const [message, setMessage] = useState('');
    const handleOnChange = (event) => {
        const { target: { value } } = event;
        setMessage(value);
    }

    const handleSendMessage = () => {
        sendMessage(message);
        setMessage('');
    }

    return (
        <>
            <div style={{ position: 'absolute', bottom: '0.5em', width: '65%', border: '1px solid orange', borderRadius: '25px', marginLeft: '0.5em' }}>
                <TextField
                    name='message'
                    id='message'
                    autoFocus={true}
                    fullWidth={true}
                    multiline={true}
                    placeholder='start typing......'
                    size='medium'
                    value={message}
                    variant='standard'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <MessageIcon fontSize='large' />
                            </InputAdornment>
                        ),
                        disableUnderline: true
                    }}
                    onChange={handleOnChange}
                />
            </div>
            <div style={{ position: 'absolute', bottom: '0.5em', right: 0 }}>
                <Button title='Send' handler={handleSendMessage} />
                <Button title='Send Location' handler={sendLocation} />
            </div>
        </>
    )
}

export default Input;
