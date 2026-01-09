import { ResetButton } from '../ResetButton'
import { TaskList } from '../TaskList'
import { TaskDetails } from '../TaskDetails'
import styles from './MainContent.module.scss'
import { useTasks } from '../../bll/useTasks'

export const MainContent = () => {
  const {
    tasks,
    priorities,
    selectedTask,
    selectedTaskId,
    setBoardId,
    setSelectedTaskId,
    handleResetSelection,
  } = useTasks()

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