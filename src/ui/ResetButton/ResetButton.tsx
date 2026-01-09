import styles from './ResetButton.module.scss'

interface Props {
  onResetSelection: () => void
}

export const ResetButton = ({ onResetSelection }: Props) => {
  return (
    <button
      type="button"
      onClick={onResetSelection}
      className={styles.button}
    >
      Reset selection
    </button>
  )
}