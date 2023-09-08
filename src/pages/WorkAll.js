import React from 'react';
import WorkItem from '../components/WorkItem';
import { WorkList } from '../helper/WorkList';

function WorkAll() {
  return (
    <div className="workAll">
        <div className="workList">
            {WorkList.map((work) => {
                return (
                    <WorkItem id={work.id} title={work.title}/>
                );
            })}
        </div>
    </div>
  );
}

export default WorkAll;