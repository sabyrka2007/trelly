import type { GlobalTaskListItemJsonApiData } from '../../types'

interface Props {
  task: GlobalTaskListItemJsonApiData
  taskId: string | null
  setTaskId: (id: string) => void
  setBoardId: (id: string) => void
  priorities: string[]
}

export const Task = ({ task, taskId, setTaskId, setBoardId, priorities }: Props) => {
  return (
    <li
      key={task.id}
      style={{
        backgroundColor: priorities[task.attributes.priority],
        border: `1px solid ${task.id === taskId ? 'blue' : 'black'}`,
      }}
      onClick={() => {
        setTaskId(task.id)
        setBoardId(task.attributes.boardId)
      }}
    >
      <div>
        <b>Заголовок: </b>
        <span style={{ textDecoration: task.attributes.status === 2 ? 'line-through' : 'none' }}>{task.attributes.title}</span>
      </div>
      <div>
        <b>Статус: </b>
        <input
          type="checkbox"
          checked={task.attributes.status === 2}
          readOnly
        />
      </div>
      <div>
        <b>Дата создания задачи: </b>
        <span>{new Date(task.attributes.addedAt).toLocaleDateString()}</span>
      </div>
    </li>
  )
}