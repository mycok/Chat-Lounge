import React from 'react';

import { TextField, InputAdornment, Avatar } from '@material-ui/core';

const Message = ({ message }) => {
    const { text, recieved } = message;
    return (
        <>
            <div style={{ left: recieved && '0.5em', float: !recieved && 'right', width: '50%', border: '1px solid gray', borderRadius: recieved ? '0px 25px 25px' : '25px 25px 0px', margin: '0.5em' }}>
                <TextField
                    name='recieved-message'
                    id='recieved-message'
                    fullWidth={true}
                    multiline={true}
                    size='medium'
                    value={text}
                    variant='standard'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start" style={{ marginLeft: '0.3em', marginRight: '0.8em' }}>
                                <Avatar src="" alt="KM" style={{ width: 22, height: 22, border: '1px solid #ffa500' }} />
                            </InputAdornment>
                        ),
                        disableUnderline: true
                    }}
                />
            </div>
        </>
    )
}

export default Message;
