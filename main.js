const tasks = [
  { title: 'Купить продукты на неделю', isDone: false },
  { title: 'Полить цветы', isDone: true },
  { title: 'Сходить на тренировку', isDone: false },
]

const rootElement = document.getElementById('root')

const pageTitleElement = document.createElement('h1')
const taskListElement = document.createElement('ul')

pageTitleElement.textContent = 'MusicFun Player'

tasks.forEach((task) => {
  const taskItemElement = document.createElement('li')
  const taskItemLabelElement = document.createElement('div')
  const taskItemStatusElement = document.createElement('input')

  taskItemLabelElement.textContent = task.title

  taskItemStatusElement.type = 'checkbox'
  taskItemStatusElement.checked = task.isDone

  taskItemElement.append(taskItemLabelElement, taskItemStatusElement)

  taskListElement.append(taskItemElement)
})

rootElement.append(pageTitleElement, taskListElement)
