"use client";

import { useState } from "react";
import TaskCard from "@/components/TaskCard";

type Task = {
  id: number;
  title: string;
  done: boolean;
};

export default function DashboardPage() {
  const [taskTitle, setTaskTitle] = useState("");
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Create landing page", done: false },
    { id: 2, title: "Add pricing section", done: true }
  ]);

  const addTask = () => {
    if (!taskTitle.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      title: taskTitle,
      done: false
    };

    setTasks([newTask, ...tasks]);
    setTaskTitle("");
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task)));
  };

  const completed = tasks.filter((task) => task.done).length;
}
