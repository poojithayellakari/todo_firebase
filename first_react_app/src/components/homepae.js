import React from "react";
import Header from "./header";
import SearchComp from "./searchComp";
import { useState } from "react";
import { useEffect } from "react";
import Task from "./taskComp";
import styles from './homepage.module.css'
import Tags from "./tags";

function Homepae() {
  const [tasks, change] = useState([]);
  const fetchData = async () => {
    const raw = JSON.stringify({
      uid: localStorage.getItem("uid"),
    });
    const requestOptions = {
      method: "POST",
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://us-central1-linkedin-react-93d32.cloudfunctions.net/api3/gettodos",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => change(result))
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={styles.container}>
       <Header />
    <div className={styles.form}>
      <SearchComp set={change} task={tasks}/>
      <div className={styles.subform}>
        <Tags />
        {tasks.length<=0?(<p>No Tasks Added</p>):<p></p>}
        <div className={styles.task}>{tasks.map(a=><Task task={a} data={fetchData} change={change} all={tasks}/>)}</div>
      </div>
      
    </div>
    </div>
  );
}

export default Homepae;
