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
  const handleaddtask = () => {
    setshowaddmodal(true);
  };

  function closeModal() {
    setshowaddmodal(false);
  }

  function Addtasktolist(task) {
    console.log(task);
    setTasks([...tasks, task]);
  }

  return (
    <>
      <section className="mb-20" id="tasks">
        {showaddmodal && (
          <AddTaskModal closeModal = {closeModal} Addtasktolist={Addtasktolist}></AddTaskModal>
        )}
        <div className="container">
          {/* Search Box */}
          <SearchTask></SearchTask>
          {/* Search Box Ends */}
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction handleaddtask={handleaddtask}></TaskAction>
            <TaskList tasks={tasks}></TaskList>
          </div>
        </div>
      </section>
    </>
  );
}
