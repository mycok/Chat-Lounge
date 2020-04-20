import React from 'react';

import {
    Avatar,
    Badge,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from '@material-ui/core';

const Person = ({ person, selectedPerson, handlePersonSelection }) => {
    const { name, status } = person;
    
    return (
        <ListItem
            button
            key={name}
            selected={selectedPerson === name}
            style={{ borderLeft: selectedPerson.name === name ? '6px solid orange' : 'none', borderRight: selectedPerson.name === name ? '6px solid orange' : 'none' }}
            onClick={() => handlePersonSelection(name)}
        >
            <ListItemAvatar>
                <Avatar src="" alt="KM" style={{ width: 22, height: 22, border: '1px solid #ffa500' }}/>
            </ListItemAvatar>
            <ListItemText primary={name} />
            <Badge variant="dot" color={status === 'online' ? 'secondary' : 'error'} />
        </ListItem>
    );
}

export default Person;
