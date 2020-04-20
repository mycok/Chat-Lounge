import React from 'react';

import { List } from '@material-ui/core';

import Person from './Person';

const People = ({ peopleList, selectedPerson, handlePersonSelection }) => (
    <List>
        {peopleList.map((person) => {
            return (
                <Person
                    key={person.name}
                    person={person}
                    selectedPerson={selectedPerson}
                    handlePersonSelection={handlePersonSelection}
                />
            );
        })}
    </List>
);

export default People;
