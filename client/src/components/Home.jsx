import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import teacher from "../teacher"
import TeacherCard from './TeacherCard';
import { v4 as uuidv4 } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Home(props) {
    document.title = "Home"
    const classes = useStyles();
    const [input, setinput] = useState("")

    return (
        <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20px" }}>
                <h4>Search :</h4>
                <input style={{ height: "30px", paddingleft: "20px" }} value={input} onChange={(e) => setinput(e.target.value)} placeholder="type here to search"></input>
            </div>
            <div className={classes.root} style={{ margin: " 30px 10%" }}>
                <Grid container spacing={2} style={{ width: "100%" }}>
                    {
                        teacher.filter((item) => item.name.toLowerCase().includes(input.toLowerCase())).map((item) => <TeacherCard key={uuidv4()} data={item} {...props}></TeacherCard>)
                    }
                </Grid>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Pagination count={2} color="primary" />
            </div>

        </div>
    )
}
