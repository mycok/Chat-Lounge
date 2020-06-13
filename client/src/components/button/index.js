import React from 'react';
import { Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        marginRight: theme.spacing(1),
        border: '1px solid #ffa500'
    },
    icon: {
        margin: '0.3em'
    }
}));

const Button = ({ title, handler, Icon }) => {
    const buttonStyles = useStyles()
    return (
            <Fab
                variant="extended"
                size="small"
                className={buttonStyles.button}
                onClick={handler}
            >
                <Icon fontSize="small" className={buttonStyles.icon}/>
                {title}
            </Fab>
    )
}

export default Button;
