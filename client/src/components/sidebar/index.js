import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Drawer, CssBaseline } from '@material-ui/core';

import People from '../people/People';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex'
    },
    drawer: {
        flexShrink: 0,
    },
    drawerPaper: {
        width: 280
    },
    toolbar: {
        marginTop: '2.5em',
        marginLeft: '1em',
        marginBottom: '0.8em',
    }
}));

const Sidebar = ({ peopleList, selectedPerson, displayMessageList }) => {
    const classes = useStyles();

    const handlePersonSelection = (name) => {
        return displayMessageList(name);
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <>
                    <div className={classes.toolbar} />
                    <People
                        peopleList={peopleList}
                        selectedPerson={selectedPerson}
                        handlePersonSelection={handlePersonSelection}
                    />
                </>
            </Drawer>
        </div>
    );
};

export default Sidebar;
