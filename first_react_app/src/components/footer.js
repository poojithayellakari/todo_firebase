import React from 'react'
import styles from './footer.module.css'

function Footer() {
  return (
    <div className={styles.footer}>
        <button>All</button>
        <button>Completed</button>
        <button>In-Progress</button>
        <button>Pending</button>
    </div>
  )
}

export default Footer