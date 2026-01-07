const tasks = [
  {
    id: 1,
    title: 'Купить продукты на неделю',
    isDone: false,
    addedAt: '1 сентября',
  },
  {
    id: 2,
    title: 'Полить цветы',
    isDone: true,
    addedAt: '2 сентября',
  },
  {
    id: 3,
    title: 'Сходить на тренировку',
    isDone: false,
    addedAt: '3 сентября',
  },
]

export const App = () => {
  return (
    <>
      <h1>Список дел</h1>
      {tasks === null && <p>Загрузка...</p>}
      {tasks.length === 0 && <p>Задачи отсутствуют</p>}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div>
              <b>Заголовок: </b>
              <span style={{ textDecoration: `${task.isDone ? 'line-through' : 'none'}` }}>{task.title}</span>
            </div>
            <div>
              <b>Статус: </b>
              <input
                type="checkbox"
                checked={task.isDone}
                readOnly
              />
            </div>
            <div>
              <b>Дата создания задачи: </b>
              <span>{task.addedAt}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
