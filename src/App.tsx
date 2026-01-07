import { useEffect, useState } from 'react'
import { type GlobalTaskListItemJsonApiData, type TaskDetailsData } from './types'

export const App = () => {
  const API_KEY = import.meta.env.VITE_API_KEY

  const [tasks, setTasks] = useState<GlobalTaskListItemJsonApiData[] | null>(null)
  const [selectedTask, setSelectedTask] = useState<TaskDetailsData | null>(null)
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null)
  const [boardId, setBoardId] = useState<string | null>(null)

  const priorities = ['#fff', '#ffd7b5', '#ffb38a', '#ff9248', '#ff6700']

  useEffect(() => {
    fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
      headers: {
        'api-key': API_KEY,
      },
    }).then(res => res.json())
      .then(json => setTasks(json.data))
  }, [])

  useEffect(() => {
    if (!boardId || !selectedTaskId) return

    fetch(`https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${selectedTaskId}`, {
      headers: {
        'api-key': API_KEY,
      },
    }).then(res => res.json())
      .then(json => setSelectedTask(json.data))
  }, [boardId, selectedTaskId])

  return (
    <>
      <h1>Список дел</h1>

      {tasks === null && <p>Загрузка...</p>}

      {tasks?.length === 0 && <p>Задачи отсутствуют</p>}

      <button
        onClick={() => {
          setSelectedTask(null)
          setSelectedTaskId(null)
        }}
      >Сбросить выделение
      </button>

      <div style={{ display: 'flex', columnGap: '30px' }}>
        <ul>
          {tasks?.map((task) => (
            <li
              key={task.id}
              style={{
                backgroundColor: priorities[task.attributes.priority],
                border: `1px solid ${task.id === selectedTaskId ? 'blue' : 'black'}`,
              }}
              onClick={() => {
                setSelectedTaskId(task.id)
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
          ))}
        </ul>
        <div>
          <h2>Task details</h2>

          {selectedTaskId === null && <p>Task is not selected</p>}

          {selectedTaskId !== null &&
            (!selectedTask || selectedTask.id !== selectedTaskId) && (
              <p>Loading...</p>
            )}

          {selectedTask &&
            selectedTaskId !== null &&
            selectedTask.id === selectedTaskId && (
              <ul>
                <li>title - {selectedTask.attributes.title}</li>
                <li>boardTitle - {selectedTask.attributes.boardTitle}</li>
                <li>description - {selectedTask.attributes.description || 'no description'}</li>
              </ul>
            )}
        </div>
      </div>
    </>
  )
}
