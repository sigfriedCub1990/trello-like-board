const data = {
  tasks: {
    "task-1": { id: "task-1", content: "Monty Python and the Holy Grail" },
    "task-2": { id: "task-2", content: "Monty Python Flying Circus" },
    "task-3": {
      id: "task-3",
      content: "And now, for something completely different"
    },
    "task-4": { id: "task-4", content: "Monty Python: Life of Bryan" },
    "task-5": { id: "task-5", content: "Monty Python: The meaning of life" }
  },
  columns: {
    "to-see": {
      id: "to-see",
      title: "To see",
      tasksIds: ["task-1", "task-2", "task-3"]
    },
    seen: {
      id: "seen",
      title: "Seen",
      tasksIds: ["task-4", "task-5"]
    }
  },
  columnOrder: ["to-see", "seen"]
};

export default data;
