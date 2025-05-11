import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
export default function Fulltable() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description: "I want to learn React Js With the help of Learn with Sumit",
    tags: ["web", "Javascript", " Node"],
    priority: "High",
    isFavorite: true,
  };

  const [tasks, setTasks] = useState([defaultTask]);
  const [showaddmodal, setshowaddmodal] = useState(false);
  const [TasktoUpdate, settasktoupdate] = useState(null);
  const handleaddtask = () => {
    setshowaddmodal(true);
  };

  function Addtasktolist(newTask, isAdd) {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }

    setshowaddmodal(false);
  }

  function handleEditTask(task) {
    settasktoupdate(task);
    setshowaddmodal(true);
  }

  function oncloseClick() {
    setshowaddmodal(false);
    settasktoupdate(null);
  }

  function handleDeleteTask(taskid) {
    const taskafterdelete = tasks.filter((task) => task.id !== taskid);
    setTasks(taskafterdelete);
  }

  function handleDeleteAll() {
    console.log("Delete All");
    tasks.length = 0;
    setTasks([...tasks]);
  }

  function handleFav(taskid) {
    console.log("handle Fev", taskid);
    const taskIndex = tasks.findIndex((task) => task.id === taskid);
    console.log(taskIndex);
  }
  return (
    <>
      <section className="mb-20" id="tasks">
        {showaddmodal && (
          <AddTaskModal
            oncloseClick={oncloseClick}
            TasktoUpdate={TasktoUpdate}
            Addtasktolist={Addtasktolist}
          ></AddTaskModal>
        )}
        <div className="container">
          {/* Search Box */}
          <SearchTask></SearchTask>
          {/* Search Box Ends */}
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction
              onDeleteaAllClick={handleDeleteAll}
              handleaddtask={handleaddtask}
            ></TaskAction>
            <TaskList
              onFav={handleFav}
              onDelete={handleDeleteTask}
              onEdit={handleEditTask}
              tasks={tasks}
            ></TaskList>
          </div>
        </div>
      </section>
    </>
  );
}
