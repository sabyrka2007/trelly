const tasks = [
  {
    id: 1,
    title: 'Купить продукты на неделю',
    isDone: false,
    addedAt: '1 сентября',
    priority: 2,
  },
  {
    id: 2,
    title: 'Полить цветы',
    isDone: true,
    addedAt: '2 сентября',
    priority: 0,
  },
  {
    id: 3,
    title: 'Сходить на тренировку',
    isDone: false,
    addedAt: '3 сентября',
    priority: 1,
  },
  {
    id: 4,
    title: 'Срочно отправить рабочий отчет',
    isDone: false,
    addedAt: '4 сентября',
    priority: 4,
  },
  {
    id: 5,
    title: 'Заплатить за коммунальные услуги',
    isDone: false,
    addedAt: '3 сентября',
    priority: 3,
  },
]

const priorities = ['#fff', '#ffd7b5', '#ffb38a', '#ff9248', '#ff6700']

export const App = () => {
  return (
    <>
      <h1>Список дел</h1>
      {tasks === null && <p>Загрузка...</p>}
      {tasks.length === 0 && <p>Задачи отсутствуют</p>}
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{ backgroundColor: priorities[task.priority] }}
            onClick={() => alert(task.id)}
          >
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
