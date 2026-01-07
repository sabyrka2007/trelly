import { useEffect, useState } from 'react'

type TaskStatus = 0 | 1 | 2 | 3

const TaskStatus = {
  New: 0,
  InProgress: 1,
  Done: 2,
  Archived: 3,
} as const

type TaskPriority = 0 | 1 | 2 | 3 | 4

interface GlobalTaskListItemDto {
  title: string
  status: TaskStatus
  priority: TaskPriority
  addedAt: string
}

interface GlobalTaskListItemJsonApiData {
  id: number
  attributes: GlobalTaskListItemDto
}

export const App = () => {
  const API_KEY = import.meta.env.VITE_API_KEY

  const [tasks, setTasks] = useState<GlobalTaskListItemJsonApiData[] | null>(null)
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null)

  const priorities = ['#fff', '#ffd7b5', '#ffb38a', '#ff9248', '#ff6700']

  useEffect(() => {
    fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
      headers: {
        'api-key': API_KEY,
      },
    }).then(res => res.json())
      .then(json => setTasks(json.data))
  }, [])

  return (
    <>
      <h1>Список дел</h1>

      {tasks === null && <p>Загрузка...</p>}

      {tasks?.length === 0 && <p>Задачи отсутствуют</p>}

      <button onClick={() => setSelectedTaskId(null)}>Сбросить выделение</button>

      <ul>
        {tasks?.map((task) => (
          <li
            key={task.id}
            style={{
              backgroundColor: priorities[task.attributes.priority],
              border: `1px solid ${task.id === selectedTaskId ? 'blue' : 'black'}`,
            }}
            onClick={() => setSelectedTaskId(task.id)}
          >
            <div>
              <b>Заголовок: </b>
              <span style={{ textDecoration: task.attributes.status === TaskStatus.Done ? 'line-through' : 'none' }}>{task.attributes.title}</span>
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
    </>
  )
}
