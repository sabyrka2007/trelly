type TaskStatus = 0 | 1 | 2 | 3

type TaskPriority = 0 | 1 | 2 | 3 | 4

interface GlobalTaskListItemDto {
  title: string
  status: TaskStatus
  priority: TaskPriority
  addedAt: string
  boardId: string
}

export interface GlobalTaskListItemJsonApiData {
  id: string
  attributes: GlobalTaskListItemDto
}

interface TaskDetailsDto {
  title: string
  boardTitle: string
  description: string
}

export interface TaskDetailsData {
  id: string
  attributes: TaskDetailsDto
}
