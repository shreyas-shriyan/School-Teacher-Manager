import React from 'react'

export default function ClassesCard(props) {
    return (
        <div style={{ border: "1px solid orange", width: '300px', borderRadius: "5px", margin: '20px auto' }}>
            <h4>{`Grade : ${props.data.grade}`}</h4>
            <h4>{`Subject : ${props.data.subject}`}</h4>
            <h4>{`Section : ${props.data.section}`}</h4>
            <div style={{ backgroundColor: "blue", padding: "6px", color: "white", width: "100px", margin: "auto", borderRadius: "5px", marginBottom: "10px" }}>
                Edit
            </div>

        </div>
    )
}
