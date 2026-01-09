import type { TaskDetailsData } from '../../types'
import styles from './TaskDetails.module.scss'

interface Props {
  task: TaskDetailsData | null
  taskId: string | null
}

export const TaskDetails = ({ task, taskId }: Props) => {
  return (
    <section className={styles.details}>
      <h2 className={styles.title}>Task details</h2>

      {taskId === null && (
        <p className={styles.state}>Task is not selected</p>
      )}

      {taskId !== null && (!task || task.id !== taskId) && (
        <p className={styles.state}>Loading...</p>
      )}

      {task &&
        taskId !== null &&
        task.id === taskId && (
          <ul className={styles.list}>
            <li>
              <span className={styles.label}>Title</span>
              <span className={styles.value}>{task.attributes.title}</span>
            </li>
            <li>
              <span className={styles.label}>Board</span>
              <span className={styles.value}>{task.attributes.boardTitle}</span>
            </li>
            <li>
              <span className={styles.label}>Description</span>
              <span className={styles.value}>
                {task.attributes.description || 'No description'}
              </span>
            </li>
          </ul>
        )}
    </section>
  )
}