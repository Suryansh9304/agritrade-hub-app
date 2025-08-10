import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import "../css/Merchant.css"

function MerchantSidebar() {
  return (
    <div className="sidebar-gradient">
      <div className="p-3">
        <h4 className="text-center mb-4">Merchant Panel</h4>
        
        <ListGroup className="mb-4">
          <ListGroup.Item action href="#dashboard" className="text-white">
            📊 Dashboard
          </ListGroup.Item>
          <ListGroup.Item action href="#orders" className="text-white">
            📦 Orders
          </ListGroup.Item>
          <ListGroup.Item action href="#inventory" className="text-white">
            🏪 Browse Products
          </ListGroup.Item>
          <ListGroup.Item action href="#payments" className="text-white">
            💳 Payments
          </ListGroup.Item>
          <ListGroup.Item action href="#profile" className="text-white">
            👤 Profile
          </ListGroup.Item>
          <ListGroup.Item action href="#notifications" className="text-white">
            🔔 Notifications
          </ListGroup.Item>
          <ListGroup.Item action href="#contact-admin" className="text-white">
            📞 Contact Admin
          </ListGroup.Item>
        </ListGroup>

        <div className="text-center">
          <Button variant="light" size="sm" className="w-100 mb-2">
            📊 Reports
          </Button>
          <Button variant="light" size="sm" className="w-100 mb-2">
            ⚙️ Settings
          </Button>
          <Button variant="outline-light" size="sm" className="w-100">
            🚪 Logout
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MerchantSidebar;
