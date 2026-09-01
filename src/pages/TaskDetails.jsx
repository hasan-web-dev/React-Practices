import React from 'react'
import { useParams } from 'react-router-dom'

const TaskDetails = () => {
    const { taskId } = useParams();
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900">
        Task Details
      </h1>

      <div className="mt-6 rounded-xl bg-white p-6 shadow-sm">
        <p className="text-slate-600">
          Task ID
        </p>

        <p className="mt-1 text-xl font-semibold text-slate-900">
          {taskId}
        </p>
      </div>
    </div>
  )
}

export default TaskDetails
