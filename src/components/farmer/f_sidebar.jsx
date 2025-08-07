import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { House, ListCheck, CreditCard, Bell, Envelope, Person } from "react-bootstrap-icons";

function Sidebar({ setPage }) {
  return (
    <div>
      <h4 className="mb-4 text-center text-white">Farmer Panel</h4>
      <ListGroup variant="flush">
        <ListGroup.Item className="bg-success border-0 p-0 mb-2">
          <Button variant="light" className="w-100 d-flex align-items-center justify-content-start gap-2" onClick={() => setPage("dashboard")}>
            <House /> Dashboard
          </Button>
        </ListGroup.Item>
        <ListGroup.Item className="bg-success border-0 p-0 mb-2">
          <Button variant="light" className="w-100 d-flex align-items-center justify-content-start gap-2" onClick={() => setPage("tasks")}>
            <ListCheck /> Assigned Tasks
          </Button>
        </ListGroup.Item>
        <ListGroup.Item className="bg-success border-0 p-0 mb-2">
          <Button variant="light" className="w-100 d-flex align-items-center justify-content-start gap-2" onClick={() => setPage("payments")}>
            <CreditCard /> Payment Status
          </Button>
        </ListGroup.Item>
        <ListGroup.Item className="bg-success border-0 p-0 mb-2">
          <Button variant="light" className="w-100 d-flex align-items-center justify-content-start gap-2" onClick={() => setPage("notifications")}>
            <Bell /> Notifications
          </Button>
        </ListGroup.Item>
        <ListGroup.Item className="bg-success border-0 p-0 mb-2">
          <Button variant="light" className="w-100 d-flex align-items-center justify-content-start gap-2" onClick={() => setPage("contact")}>
            <Envelope /> Contact Admin
          </Button>
        </ListGroup.Item>
        <ListGroup.Item className="bg-success border-0 p-0">
          <Button variant="light" className="w-100 d-flex align-items-center justify-content-start gap-2" onClick={() => setPage("profile")}>
            <Person /> Profile
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default Sidebar;