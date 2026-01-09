import type { GlobalTaskListItemJsonApiData } from '../../dal/types'
import styles from './Task.module.scss'

interface Props {
  task: GlobalTaskListItemJsonApiData
  taskId: string | null
  setTaskId: (id: string) => void
  setBoardId: (id: string) => void
  priorities: string[]
}

export const Task = ({ task, taskId, setTaskId, setBoardId, priorities }: Props) => {
  const isActive = task.id === taskId
  const isDone = task.attributes.status === 2

  return (
    <li
      className={`${styles.task} ${isActive ? styles.active : ''}`}
      style={{ borderLeftColor: priorities[task.attributes.priority] }}
      onClick={() => {
        setTaskId(task.id)
        setBoardId(task.attributes.boardId)
      }}
    >
      <div className={styles.header}>
        <span className={`${styles.title} ${isDone ? styles.done : ''}`}>
          {task.attributes.title}
        </span>

        <input
          type="checkbox"
          checked={isDone}
          readOnly
        />
      </div>

      <div className={styles.meta}>
        Created at: {new Date(task.attributes.addedAt).toLocaleDateString()}
      </div>
    </li>
  )
}
