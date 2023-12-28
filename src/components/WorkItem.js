import React from 'react'
import { useNavigate } from 'react-router-dom'

function WorkItem({ id, title}) {
    const navigate = useNavigate();
    return(
        <div
            className="workItem"
            onClick={() => {
                navigate("/work/" + id);
            }}
        >
            {title}
        </div>
    )
}

export default WorkItem