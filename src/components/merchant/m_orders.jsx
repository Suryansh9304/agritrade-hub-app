import React, { useState } from 'react';
import { Card, Table, Badge, Button, Row, Col, Form, Modal } from 'react-bootstrap';
import "../css/Merchant.css"

function MerchantOrders() {
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const orders = [
    {
      id: "ORD001",
      farmer: "Amit Singh",
      product: "Wheat",
      quantity: "100 kg",
      price: "₹2,500",
      status: "Pending",
      date: "2024-01-15",
      deliveryDate: "2024-01-20"
    },
    {
      id: "ORD002",
      farmer: "Suresh Patel",
      product: "Rice",
      quantity: "80 kg",
      price: "₹3,200",
      status: "Completed",
      date: "2024-01-14",
      deliveryDate: "2024-01-18"
    },
    {
      id: "ORD003",
      farmer: "Mohan Das",
      product: "Maize",
      quantity: "120 kg",
      price: "₹1,800",
      status: "In Transit",
      date: "2024-01-13",
      deliveryDate: "2024-01-19"
    },
    {
      id: "ORD004",
      farmer: "Ramesh Kumar",
      product: "Vegetables",
      quantity: "50 kg",
      price: "₹1,500",
      status: "Pending",
      date: "2024-01-16",
      deliveryDate: "2024-01-22"
    }
  ];

  const getStatusBadge = (status) => {
    const statusColors = {
      'Pending': 'warning',
      'Completed': 'success',
      'In Transit': 'info',
      'Cancelled': 'danger',
      'Delivered': 'success'
    };
    return <Badge bg={statusColors[status] || 'secondary'}>{status}</Badge>;
  };

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
    setShowOrderModal(true);
  };

  const handleCloseModal = () => {
    setShowOrderModal(false);
    setSelectedOrder(null);
  };

  return (
    <div className="dashboard-gradient">
      <div className="mt-4 px-3">
        <h4 className="text-white mb-4">📦 Order Management</h4>
        
        {/* Order Statistics */}
        <Row className="g-3 mb-4">
          <Col md={3}>
            <Card className="border-0 shadow-sm text-center card-hover">
              <Card.Body>
                <h6>Total Orders</h6>
                <h3 className="text-primary">{orders.length}</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="border-0 shadow-sm text-center card-hover">
              <Card.Body>
                <h6>Pending</h6>
                <h3 className="text-warning">{orders.filter(o => o.status === 'Pending').length}</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="border-0 shadow-sm text-center card-hover">
              <Card.Body>
                <h6>In Transit</h6>
                <h3 className="text-info">{orders.filter(o => o.status === 'In Transit').length}</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="border-0 shadow-sm text-center card-hover">
              <Card.Body>
                <h6>Completed</h6>
                <h3 className="text-success">{orders.filter(o => o.status === 'Completed').length}</h3>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Orders Table */}
        <Card className="border-0 shadow-sm">
          <Card.Header className="bg-transparent">
            <h5 className="mb-0 text-white">Recent Orders</h5>
          </Card.Header>
          <Card.Body className="p-0">
            <Table responsive className="orders-table mb-0">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Farmer</th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Order Date</th>
                  <th>Expected Delivery</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} style={{cursor: 'pointer'}} onClick={() => handleOrderClick(order)}>
                    <td>{order.id}</td>
                    <td>{order.farmer}</td>
                    <td>{order.product}</td>
                    <td>{order.quantity}</td>
                    <td>{order.price}</td>
                    <td>{getStatusBadge(order.status)}</td>
                    <td>{order.date}</td>
                    <td>{order.deliveryDate}</td>
                    <td>
                      <Button size="sm" variant="outline-primary">View</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>

        {/* Order Details Modal */}
        <Modal show={showOrderModal} onHide={handleCloseModal} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Order Details - {selectedOrder?.id}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedOrder && (
              <div>
                <Row>
                  <Col md={6}>
                    <h6>Order Information</h6>
                    <p><strong>Order ID:</strong> {selectedOrder.id}</p>
                    <p><strong>Order Date:</strong> {selectedOrder.date}</p>
                    <p><strong>Expected Delivery:</strong> {selectedOrder.deliveryDate}</p>
                    <p><strong>Status:</strong> {getStatusBadge(selectedOrder.status)}</p>
                  </Col>
                  <Col md={6}>
                    <h6>Product Details</h6>
                    <p><strong>Product:</strong> {selectedOrder.product}</p>
                    <p><strong>Quantity:</strong> {selectedOrder.quantity}</p>
                    <p><strong>Price:</strong> {selectedOrder.price}</p>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col md={12}>
                    <h6>Farmer Information</h6>
                    <p><strong>Name:</strong> {selectedOrder.farmer}</p>
                    <p><strong>Contact:</strong> +91 98765 43210</p>
                    <p><strong>Address:</strong> Village Road, District, State</p>
                  </Col>
                </Row>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary">Track Order</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default MerchantOrders;
