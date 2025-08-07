// src/components/pages/farmmer/Notifications.jsx
import React from "react";

function Notifications() {
  // Dummy notifications for example
  const notifications = [
    { id: 1, message: "New task assigned by Admin.", date: "2025-08-06" },
    { id: 2, message: "Your payment for July has been processed.", date: "2025-08-05" },
    { id: 3, message: "System maintenance on 2025-08-10.", date: "2025-08-04" },
  ];

  return (
    <div>
      <h2 className="mb-4">Notifications</h2>
      {notifications.length === 0 ? (
        <p>No new notifications.</p>
      ) : (
        <ul className="list-group">
          {notifications.map((note) => (
            <li key={note.id} className="list-group-item d-flex justify-content-between align-items-center">
              {note.message}
              <span className="badge bg-secondary">{note.date}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Notifications;