import clsx from "clsx";
import { useState } from "react";
import { FormNewTask, Logo, Task, TaskInfo, TaskList } from "./components";
import styles from "./App.module.css";

import "./global.css";

type ID = number; // timestamp

type Task = {
  isDone: boolean;
  task: string;
  id: ID;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const tasksDone = tasks.reduce(
    (acc, task) => (task.isDone ? acc + 1 : acc),
    0
  );

  const addNewTask = ({ newTask }: { newTask: string }) => {
    setTasks((prev) => [
      ...prev,
      { task: newTask, id: Date.now(), isDone: false },
    ]);
  };

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTask = (taskId: number) => {
    setTasks((prev) => {
      const idx = prev.findIndex((task) => task.id === taskId);

      const draft = [...prev];

      if (draft[idx].isDone) {
        draft[idx] = { ...prev[idx], isDone: false };
      } else {
        draft[idx] = { ...prev[idx], isDone: true };
      }

      return draft;
    });
  };

  return (
    <>
      <header className={styles.header}>
        <Logo />
      </header>

      <FormNewTask
        className={clsx(styles.form, styles.container)}
        onSubmit={addNewTask}
      />

      <TaskInfo
        className={clsx(styles.taskInfo, styles.container)}
        totalTasks={tasks.length}
        totalTasksDone={tasksDone}
      />

      <TaskList className={clsx(styles.taskList, styles.container)}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            {...task}
            onToggleTask={toggleTask}
            onTaskDelete={deleteTask}
          />
        ))}
      </TaskList>
    </>
  );
}

export default App;
