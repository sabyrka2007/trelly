import { useEffect, useState } from 'react'
import type { GlobalTaskListItemJsonApiData, TaskDetailsData } from '../types'
import { getTaskDetails, getTracks } from '../dal/api'

export const useTasks = () => {
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

  return {
    tasks,
    priorities,
    selectedTask,
    selectedTaskId,
    setBoardId,
    setSelectedTaskId,
    handleResetSelection,
  }
}