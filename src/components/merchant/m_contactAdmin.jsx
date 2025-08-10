import React, { useState } from 'react';
import { Card, Form, Button, Row, Col, Alert, ListGroup, Badge } from 'react-bootstrap';
import "../css/Merchant.css"

function MerchantContactAdmin() {
  const [formData, setFormData] = useState({
    subject: '',
    category: 'general',
    priority: 'medium',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [tickets, setTickets] = useState([
    {
      id: "TKT001",
      subject: "Payment Gateway Issue",
      category: "technical",
      priority: "high",
      status: "Open",
      message: "Unable to process payments through UPI gateway. Getting error message.",
      timestamp: "2024-01-15 10:30",
      adminResponse: null
    },
    {
      id: "TKT002",
      subject: "Order Cancellation Request",
      category: "order",
      priority: "medium",
      status: "In Progress",
      message: "Need to cancel order ORD003 due to quality issues with the product.",
      timestamp: "2024-01-14 15:45",
      adminResponse: "We are investigating the quality issue. Will update you within 24 hours."
    },
    {
      id: "TKT003",
      subject: "Account Verification Query",
      category: "account",
      priority: "low",
      status: "Resolved",
      message: "When will my merchant account verification be completed?",
      timestamp: "2024-01-13 09:20",
      adminResponse: "Your account has been verified successfully. You can now access all features."
    }
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create new ticket
    const newTicket = {
      id: `TKT${String(tickets.length + 1).padStart(3, '0')}`,
      subject: formData.subject,
      category: formData.category,
      priority: formData.priority,
      status: "Open",
      message: formData.message,
      timestamp: new Date().toLocaleString(),
      adminResponse: null
    };

    setTickets(prev => [newTicket, ...prev]);
    
    // Reset form
    setFormData({
      subject: '',
      category: 'general',
      priority: 'medium',
      message: ''
    });

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const getPriorityBadge = (priority) => {
    const colors = {
      'low': 'success',
      'medium': 'warning',
      'high': 'danger'
    };
    return <Badge bg={colors[priority]}>{priority.toUpperCase()}</Badge>;
  };

  const getStatusBadge = (status) => {
    const colors = {
      'Open': 'danger',
      'In Progress': 'warning',
      'Resolved': 'success',
      'Closed': 'secondary'
    };
    return <Badge bg={colors[status]}>{status}</Badge>;
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'general': '📢',
      'technical': '🔧',
      'order': '📦',
      'payment': '💳',
      'account': '👤',
      'billing': '💰'
    };
    return icons[category] || '📢';
  };

  const openTickets = tickets.filter(t => t.status === 'Open').length;
  const inProgressTickets = tickets.filter(t => t.status === 'In Progress').length;
  const resolvedTickets = tickets.filter(t => t.status === 'Resolved').length;

  return (
    <div className="dashboard-gradient">
      <div className="mt-4 px-3">
        <h4 className="text-white mb-4">📞 Contact Admin</h4>
        
        {showSuccess && (
          <Alert variant="success" dismissible onClose={() => setShowSuccess(false)}>
            Support ticket created successfully! We'll get back to you soon.
          </Alert>
        )}

        {/* Ticket Statistics */}
        <Row className="g-3 mb-4">
          <Col md={3}>
            <Card className="border-0 shadow-sm text-center card-hover">
              <Card.Body>
                <h6>Total Tickets</h6>
                <h3 className="text-primary">{tickets.length}</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="border-0 shadow-sm text-center card-hover">
              <Card.Body>
                <h6>Open</h6>
                <h3 className="text-danger">{openTickets}</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="border-0 shadow-sm text-center card-hover">
              <Card.Body>
                <h6>In Progress</h6>
                <h3 className="text-warning">{inProgressTickets}</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="border-0 shadow-sm text-center card-hover">
              <Card.Body>
                <h6>Resolved</h6>
                <h3 className="text-success">{resolvedTickets}</h3>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="g-4">
          {/* Create New Ticket */}
          <Col md={5}>
            <Card className="border-0 shadow-sm contact-admin-card">
              <Card.Header className="bg-transparent">
                <h5 className="mb-0 text-white">Create Support Ticket</h5>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-white">Subject</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Brief description of your issue"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-white">Category</Form.Label>
                    <Form.Select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                    >
                      <option value="general">General Inquiry</option>
                      <option value="technical">Technical Issue</option>
                      <option value="order">Order Related</option>
                      <option value="payment">Payment Issue</option>
                      <option value="account">Account Issue</option>
                      <option value="billing">Billing Query</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-white">Priority</Form.Label>
                    <Form.Select
                      name="priority"
                      value={formData.priority}
                      onChange={handleInputChange}
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-white">Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your issue in detail..."
                      required
                    />
                  </Form.Group>

                  <Button 
                    type="submit" 
                    variant="light" 
                    className="w-100"
                    disabled={!formData.subject || !formData.message}
                  >
                    📤 Submit Ticket
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Ticket History */}
          <Col md={7}>
            <Card className="border-0 shadow-sm">
              <Card.Header className="bg-transparent">
                <h5 className="mb-0 text-white">Support Ticket History</h5>
              </Card.Header>
              <Card.Body className="p-0">
                <ListGroup variant="flush">
                  {tickets.map((ticket) => (
                    <ListGroup.Item key={ticket.id} className="p-3">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <div className="d-flex align-items-center">
                          <span className="me-2 fs-5">{getCategoryIcon(ticket.category)}</span>
                          <h6 className="mb-0">{ticket.subject}</h6>
                        </div>
                        <div className="d-flex gap-2">
                          {getPriorityBadge(ticket.priority)}
                          {getStatusBadge(ticket.status)}
                        </div>
                      </div>
                      
                      <p className="text-muted mb-2">{ticket.message}</p>
                      
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <small className="text-muted">
                          Ticket ID: {ticket.id} | Created: {ticket.timestamp}
                        </small>
                      </div>

                      {ticket.adminResponse && (
                        <div className="bg-light p-3 rounded">
                          <h6 className="text-primary mb-2">Admin Response:</h6>
                          <p className="mb-0">{ticket.adminResponse}</p>
                        </div>
                      )}

                      {ticket.status === 'Open' && (
                        <div className="mt-2">
                          <Button size="sm" variant="outline-primary" className="me-2">
                            📝 Update Ticket
                          </Button>
                          <Button size="sm" variant="outline-secondary">
                            🔒 Close Ticket
                          </Button>
                        </div>
                      )}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Contact Information */}
        <Card className="border-0 shadow-sm mt-4 merchant-stats-card">
          <Card.Header className="bg-transparent">
            <h5 className="mb-0 text-white">Additional Contact Information</h5>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={4}>
                <div className="text-center">
                  <h6 className="text-white">📧 Email Support</h6>
                  <p className="text-white">support@agritradehub.com</p>
                  <small className="text-white">Response within 24 hours</small>
                </div>
              </Col>
              <Col md={4}>
                <div className="text-center">
                  <h6 className="text-white">📞 Phone Support</h6>
                  <p className="text-white">+91 1800-123-4567</p>
                  <small className="text-white">Mon-Fri, 9 AM - 6 PM</small>
                </div>
              </Col>
              <Col md={4}>
                <div className="text-center">
                  <h6 className="text-white">💬 Live Chat</h6>
                  <p className="text-white">Available on website</p>
                  <small className="text-white">Real-time support</small>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default MerchantContactAdmin;
