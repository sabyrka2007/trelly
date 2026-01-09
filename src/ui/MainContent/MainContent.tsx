import { ResetButton } from '../ResetButton'
import { TaskList } from '../TaskList'
import { TaskDetails } from '../TaskDetails'
import styles from './MainContent.module.scss'
import { useEffect, useState } from 'react'
import type { GlobalTaskListItemJsonApiData, TaskDetailsData } from '../../types'
import { getTaskDetails, getTracks } from '../../dal/api'

export const MainContent = () => {
  const [tasks, setTasks] = useState<GlobalTaskListItemJsonApiData[] | null>(null)
  const [selectedTask, setSelectedTask] = useState<TaskDetailsData | null>(null)
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null)
  const [boardId, setBoardId] = useState<string | null>(null)


  const priorities = ['#fff', '#ffd7b5', '#ffb38a', '#ff9248', '#ff6700']

  useEffect(() => {
    getTracks().then(json => setTasks(json.data))
  }, [])

  useEffect(() => {
    if (!boardId || !selectedTaskId) return

    getTaskDetails(boardId, selectedTaskId).then(json => setSelectedTask(json.data))
  }, [boardId, selectedTaskId])

  const handleResetSelection = () => {
    setSelectedTask(null)
    setSelectedTaskId(null)
  }

  return (
    <section className={styles.mainContent}>
      {tasks === null && <p>Загрузка...</p>}

      {tasks?.length === 0 && <p>Задачи отсутствуют</p>}

      {tasks && (
        <>
          <div className={styles.header}>
            <ResetButton onResetSelection={handleResetSelection} />
          </div>

          <div className={styles.wrapper}>
            <div className={styles.playlist}>
              <TaskList
                tasks={tasks}
                taskId={selectedTaskId}
                setTaskId={setSelectedTaskId}
                setBoardId={setBoardId}
                priorities={priorities}
              />
            </div>

            <div className={styles.details}>
              <TaskDetails
                task={selectedTask}
                taskId={selectedTaskId}
              />
            </div>
          </div>
        </>
      )}
    </section>
  )
}