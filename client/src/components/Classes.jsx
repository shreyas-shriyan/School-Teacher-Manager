import React, { useEffect, useState } from 'react'
import teacher from "../teacher"
import ClassesCard from "./ClassesCard"

export default function Classes(props) {
    const [classes, setclasses] = useState([])
    useEffect(() => {
        let classes = teacher.filter((item) => item.name === props.match.params.id)[0].classes
        setclasses(classes)
    }, [])

    return (
        <div>
            <h1>Classes</h1>
            <div>
                {
                    classes.map((item) => <ClassesCard key={item.name} data={item}></ClassesCard>)
                }
            </div>
        </div>
    )
}
