import React from 'react';

import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

const Message = ({ message, selectedPerson }) => {
    const classes = useStyles()
    const { text, from, recieved } = message;
    // const { name } = selectedPerson;

    return (
        <>
            <div style={{ width: '70%', marginLeft: (recieved) ? '6em' : '12em', marginTop: '1.5em' }}>
                <List className={classes.root}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="" />
                        </ListItemAvatar>
                        <ListItemText
                            primary={from}
                            secondary={
                                <React.Fragment>
                                <span style={{ display: 'block' }}>Wed April 22 2020, 02:45 AM</span>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                    >
                                        {text}
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </div>
        </>
    )
}

export default Message;
