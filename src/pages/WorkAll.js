import React from 'react';
import WorkItem from '../components/WorkItem';
import { WorkList } from '../helper/WorkList';

function WorkAll() {
  return (
    <div className="workAll">
        <div className="workList">
            {Object.keys(WorkList).map((keyName, i) => {
                return (
                    <WorkItem id={keyName} title={WorkList[keyName].title}/>
                );
            })}
        </div>
    </div>
  );
}

export default WorkAll;