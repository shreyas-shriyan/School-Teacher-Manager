import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
    subHeading: {
    }
}));

export default function TeacherCard(props) {
    let { data } = props;
    const classes = useStyles();

    return (

        <Grid item xs={12} sm={6} style={{ padding: "7px" }}>
            <Paper className={classes.paper} style={{ justifyContent: "center" }}>
                <img src={data.profile} alt="profile" />
                <h1 >{data.name}</h1>
                <h3 className={classes.subHeading}>{data.gender}</h3>
                <h3 className={classes.subHeading}>{data.age}</h3>
                <h2 >classes : {data.classes.length}</h2>
                <div style={{ padding: "10px", borderRadius: "5px", backgroundColor: "blue", textDecoration: "none", color: "white", marginBottom: "10px", width: "200px", margin: "auto" }}>
                    <Link style={{ textDecoration: "none", color: "white" }} to={`classes/${data.name}`}>Details</Link >
                </div>
            </Paper>
        </Grid>

    )
}
