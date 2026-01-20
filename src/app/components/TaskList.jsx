"use client";

import { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import TaskForm from "./TaskForm";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  useEffect(() => {
    fetch("/api/tasks")
      .then((res) => res.json())
      .then(setTasks);
  }, []);


  function handleAdd(task) {
    setTasks((prev) => [task, ...prev]);
  }

  async function deleteTask(id) {
    await fetch(`/api/tasks/${id}`, { method: "DELETE" });
    setTasks((prev) => prev.filter((task) => task._id !== id));
  }

  function startEdit(task) {
    setEditingId(task._id);
    setEditTitle(task.title);
  }

  async function updateTask(id) {
    const res = await fetch(`/api/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: editTitle }),
    });

    const updated = await res.json();

    setTasks((prev) =>
      prev.map((task) => (task._id === id ? updated : task))
    );

    setEditingId(null);
  }

  return (
    <>
      
      <TaskForm onAdd={handleAdd} />

      <ul className="space-y-3">
        {tasks.map((task) => (
          <li
            key={task._id}
            className="flex justify-between items-center bg-gray-400 text-gray-900 p-3 rounded shadow"
          >
            {editingId === task._id ? (
              <input
                className="border p-1 flex-1 mr-2"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
            ) : (
              <span>{task.title}</span>
            )}

            <div className="flex gap-3 text-xl">
              {editingId === task._id ? (
                <FaCheck
                  className="text-gray-800 cursor-pointer"
                  onClick={() => updateTask(task._id)}
                />
              ) : (
                <FaEdit
                  className="text-gray-600 cursor-pointer"
                  onClick={() => startEdit(task)}
                />
              )}

              <FaTrash
                className="text-gray-600 cursor-pointer"
                onClick={() => deleteTask(task._id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
