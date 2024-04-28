import React, { useRef } from "react";
import styles from "./searchComp.module.css";

function SearchComp(props) {
  const task = useRef();
  async function addToDb() {
    {
      const newTask = task.current.value;
      if (newTask.trim() != "") {
        try {
          const uid = localStorage.getItem("uid");
          const tasks = [
            ...props.task,
            {
              id: props.task.length + 1,
              task: newTask,
              status: "Pending",
              docId: uid,
            },
          ];
          props.set(tasks);

          const raw = JSON.stringify({
            uid: uid,
            todos: tasks,
          });

          const requestOptions = {
            method: "POST",
            body: raw,
            redirect: "follow",
          };

          fetch(
            "https://us-central1-linkedin-react-93d32.cloudfunctions.net/api3/addtodo",
            requestOptions
          )
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
    }
  }
  return (
    <div className={styles.Additems}>
      <input type="text" ref={task} placeholder="Add task" className={styles.text}></input>
      <button className={styles.button} onClick={addToDb}>
        Add Task
      </button>
    </div>
  );
}

export default SearchComp;
