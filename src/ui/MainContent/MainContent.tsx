import { ResetButton } from '../ResetButton'
import { TaskList } from '../TaskList'
import { TaskDetails } from '../TaskDetails'

export const MainContent = () => {
  return (
    <div>
      <ResetButton />
      <TaskList />
      <TaskDetails />
    </div>
  )
}