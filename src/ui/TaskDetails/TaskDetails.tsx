import type { TaskDetailsData } from '../../types'

interface Props {
  task: TaskDetailsData | null
  taskId: string | null
}

export const TaskDetails = ({ task, taskId }: Props) => {
  return (
    <div>
      <h2>Task details</h2>

      {taskId === null && <p>Task is not selected</p>}

      {taskId !== null &&
        (!task || task.id !== taskId) && (
          <p>Loading...</p>
        )}

      {task &&
        taskId !== null &&
        task.id === taskId && (
          <ul>
            <li>title - {task.attributes.title}</li>
            <li>boardTitle - {task.attributes.boardTitle}</li>
            <li>description - {task.attributes.description || 'no description'}</li>
          </ul>
        )}
    </div>
  )
}