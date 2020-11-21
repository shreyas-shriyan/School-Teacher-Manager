import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import teacher from "../teacher"
import TeacherCard from './TeacherCard';
import { v4 as uuidv4 } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import styles from "./Home.module.css"

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
    const [filter, setfilter] = useState("default")
    const [sort, setsort] = useState("default")

    return (
        <div>
            <div className={styles.flex} style={{ marginTop: "20px" }}>
                <h4>Search</h4>
                <input style={{ height: "30px", marginLeft: "10px" }} value={input} onChange={(e) => setinput(e.target.value)} placeholder="type here to search"></input>
            </div>

            <div className={styles.flex}>
                <div className={styles.flex}>
                    <div>Gender</div>
                    <select value={filter} onChange={(e) => setfilter(e.target.value)} className={styles.select}>
                        {["default", "male", "female"].map((item) => <option>{item}</option>)}
                    </select>
                </div>

                <div className={styles.flex} >
                    <div style={{ marginLeft: "30px" }}>Sort By</div>
                    <select value={sort} onChange={(e) => setsort(e.target.value)} className={styles.select}>
                        {["default", "age_ascending", "age_descending"].map((item) => <option>{item}</option>)}
                    </select>
                </div>
            </div>

            <div className={classes.root} style={{ margin: " 30px 10%" }}>
                <Grid container spacing={2} style={{ width: "100%" }}>
                    {
                        teacher.filter((item) => {
                            if (filter === "default") {
                                return true
                            }
                            else if (filter === "male" && item.gender === "male") {
                                return true;
                            }
                            else if (filter === "female" && item.gender === "female") {
                                return true;
                            }

                        }).filter((item) => item.name.toLowerCase().includes(input.toLowerCase())).sort((a, b) => {
                            if (sort === "age_descending") {
                                return b.age - a.age
                            }
                            else if (sort === "age_ascending") {
                                return a.age - b.age
                            }
                        }).map((item) => <TeacherCard key={uuidv4()} data={item} {...props}></TeacherCard>)
                    }
                </Grid>
            </div>

            <div className={styles.flex}>
                <Pagination count={2} color="primary" />
            </div>
        </div >
    )
}
