// src/components/pages/farmmer/Tasks.jsx
import React from "react";

function Tasks() {
  // Example list of tasks
  const tasks = [
    { id: 1, title: "Deliver 10kg Wheat", status: "Pending", date: "2025-08-08" },
    { id: 2, title: "Collect Seeds from Admin", status: "Completed", date: "2025-08-06" },
    { id: 3, title: "Attend Training Session", status: "Pending", date: "2025-08-09" },
  ];

  return (
    <div>
      <h2 className="mb-4">Assigned Tasks</h2>
      <table className="table table-bordered table-striped">
        <thead className="table-success">
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>Status</th>
            <th>Date Assigned</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, idx) => (
            <tr key={task.id}>
              <td>{idx + 1}</td>
              <td>{task.title}</td>
              <td>{task.status}</td>
              <td>{task.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tasks;