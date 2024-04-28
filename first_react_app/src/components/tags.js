import React from 'react'
import styles from './tags.module.css'
function Tags() {
  return (
    <div className={styles.tags}>
        <label>Tasks</label>
        <label>Progress</label>
        <label>Remove Task</label>
    </div>
  )
}

export default Tags