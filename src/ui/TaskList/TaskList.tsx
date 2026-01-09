import type { GlobalTaskListItemJsonApiData } from '../../types'
import { Task } from '../Task'

interface Props {
  tasks: GlobalTaskListItemJsonApiData[] | null
  taskId: string | null
  setTaskId: (id: string) => void
  setBoardId: (id: string) => void
  priorities: string[]
}

export const TaskList = ({ tasks, taskId, setTaskId, setBoardId, priorities }: Props) => {
  return (
    <ul>
      {tasks?.map((task) => (
        <Task
          key={task.id}
          task={task}
          priorities={priorities}
          taskId={taskId}
          setTaskId={setTaskId}
          setBoardId={setBoardId}
        />
      ))}
    </ul>
  )
}