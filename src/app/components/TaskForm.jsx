"use client";

import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");

  async function addTask(e) {
    e.preventDefault();

    if (!title.trim()) return;

    const res = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });

    const newTask = await res.json();

    onAdd(newTask); 
    setTitle("");
  }

  return (
    <form onSubmit={addTask} className="flex gap-2 mb-4 ">
      <input
        className="bg-gray-300 rounded p-2 flex-1 text-gray-700"
        placeholder="Add New Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="bg-gray-700 rounded-md text-white px-6 py-2">
        Add
      </button>
    </form>
  );
}
