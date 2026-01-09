import { PageTitle } from '../PageTitle'
import { MainContent } from '../MainContent'
import styles from './MainPage.module.scss'

export const MainPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <PageTitle />
        <MainContent />
      </div>
    </main>
  )
}