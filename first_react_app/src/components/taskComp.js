import React from "react";
import del from "../delete.jpg";
import styles from "./taskComp.module.scss";

function Task(props) {
  async function deleteFromDb(id) {
    const uid = localStorage.getItem("uid");
    for (let i = 0; i < props.all.length; i++) {
      if (props.all[i]["id"] == id) {
        props.all.splice(i, 1);
      }
    }
    props.change([...props.all]);

    const raw = JSON.stringify({
      uid: uid,
      todos: props.all,
    });

    const requestOptions = {
      method: "POST",
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://us-central1-linkedin-react-93d32.cloudfunctions.net/api3/deletetodo",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }
  async function updateDb(id, status) {
    const newStatus =
      status === "Pending"
        ? "In-Progress"
        : status === "In-Progress"
        ? "Completed"
        : "Pending";
    const uid = localStorage.getItem("uid");
    for (let i = 0; i < props.all.length; i++) {
      if (props.all[i]["id"] == id) {
        props.all[i].status = newStatus;
      }
    }
    props.change([...props.all]);
    console.log(props);

    const raw = JSON.stringify({
      uid: uid,
      todos: props.all,
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
  }
  return (
    
    <div className={styles.newFlex}>
  
      <div className={styles.each}>
        <div className={styles.box}>{props.task.task}</div>
        <div
          onClick={() => {
            updateDb(props.task.id, props.task.status);
          }}
        >
          {props.task.status === "Completed" ? (
            <div className={styles.completed}>{props.task.status}</div>
          ) : props.task.status === "Pending" ? (
            <div className={styles.pending}>{props.task.status}</div>
          ) : (
            <div className={styles.progress}>{props.task.status}</div>
          )}
        </div>
      </div>
      <img
        src={del}
        className={styles.image}
        alt="delete"
        onClick={() => {
          deleteFromDb(props.task.id);
        }}
      ></img>
    </div>
  );
}

export default Task;
