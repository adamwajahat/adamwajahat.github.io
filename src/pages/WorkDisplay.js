import React from 'react'
import { useParams } from 'react-router-dom'
import { WorkList } from '../helper/WorkList'

function WorkDisplay() {
    const { id } = useParams();
    const project = WorkList[id]
    return (
        <div>{project.component()}</div>
    )
}

export default WorkDisplay