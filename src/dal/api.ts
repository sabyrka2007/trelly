import { API_KEY } from './env'
import type { GlobalTaskListItemJsonApiData } from './types'

const BASE_URL = 'https://trelly.it-incubator.app/api/1.0'

export const getTracks = () => {
  const promise: Promise<{ data: GlobalTaskListItemJsonApiData[] }> = fetch(`${BASE_URL}/boards/tasks`, {
    headers: {
      'api-key': API_KEY,
    },
  }).then(res => res.json())

  return promise
}

export const getTaskDetails = (boardId: string, taskId: string) => {
  const promise: Promise<{ data: any }> = fetch(`${BASE_URL}/boards/${boardId}/tasks/${taskId}`, {
    headers: {
      'api-key': API_KEY,
    },
  }).then(res => res.json())

  return promise
}
