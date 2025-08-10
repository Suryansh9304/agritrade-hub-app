import React, { useState } from 'react';
import { Card, Row, Col, Table, Badge, Button, Modal, Form } from 'react-bootstrap';
import "../css/Merchant.css"

function MerchantPayments() {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);

  const payments = [
    {
      id: "PAY001",
      orderId: "ORD001",
      farmer: "Amit Singh",
      product: "Wheat",
      amount: "₹2,500",
      status: "Completed",
      date: "2024-01-15",
      paymentMethod: "UPI",
      transactionId: "TXN123456789"
    },
    {
      id: "PAY002",
      orderId: "ORD002",
      farmer: "Suresh Patel",
      product: "Rice",
      amount: "₹3,200",
      status: "Completed",
      date: "2024-01-14",
      paymentMethod: "Bank Transfer",
      transactionId: "TXN987654321"
    },
    {
      id: "PAY003",
      orderId: "ORD003",
      farmer: "Mohan Das",
      product: "Maize",
      amount: "₹1,800",
      status: "Pending",
      date: "2024-01-13",
      paymentMethod: "UPI",
      transactionId: "TXN456789123"
    },
    {
      id: "PAY004",
      orderId: "ORD004",
      farmer: "Ramesh Kumar",
      product: "Vegetables",
      amount: "₹1,500",
      status: "Failed",
      date: "2024-01-16",
      paymentMethod: "Credit Card",
      transactionId: "TXN789123456"
    }
  ];

  const getStatusBadge = (status) => {
    const statusColors = {
      'Completed': 'success',
      'Pending': 'warning',
      'Failed': 'danger',
      'Processing': 'info'
    };
    return <Badge bg={statusColors[status] || 'secondary'}>{status}</Badge>;
  };

  const handlePaymentClick = (payment) => {
    setSelectedPayment(payment);
    setShowPaymentModal(true);
  };

  const handleCloseModal = () => {
    setShowPaymentModal(false);
    setSelectedPayment(null);
  };

  const handleRetryPayment = () => {
    alert('Payment retry initiated for ' + selectedPayment.orderId);
    handleCloseModal();
  };

  const totalSpent = payments
    .filter(p => p.status === 'Completed')
    .reduce((sum, p) => sum + parseInt(p.amount.replace('₹', '').replace(',', '')), 0);

  const pendingPayments = payments.filter(p => p.status === 'Pending').length;
  const failedPayments = payments.filter(p => p.status === 'Failed').length;

  return (
    <div className="dashboard-gradient">
      <div className="mt-4 px-3">
        <h4 className="text-white mb-4">💳 Payment Management</h4>
        
        {/* Payment Statistics */}
        <Row className="g-3 mb-4">
          <Col md={3}>
            <Card className="border-0 shadow-sm text-center card-hover">
              <Card.Body>
                <h6>Total Spent</h6>
                <h3 className="text-primary">₹{totalSpent.toLocaleString()}</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="border-0 shadow-sm text-center card-hover">
              <Card.Body>
                <h6>Total Payments</h6>
                <h3 className="text-info">{payments.length}</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="border-0 shadow-sm text-center card-hover">
              <Card.Body>
                <h6>Pending</h6>
                <h3 className="text-warning">{pendingPayments}</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="border-0 shadow-sm text-center card-hover">
              <Card.Body>
                <h6>Failed</h6>
                <h3 className="text-danger">{failedPayments}</h3>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Payment Methods Summary */}
        <Row className="mb-4">
          <Col md={6}>
            <Card className="border-0 shadow-sm merchant-stats-card">
              <Card.Body>
                <h6 className="text-white">Payment Methods Used</h6>
                <div className="mt-3">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-white">UPI</span>
                    <span className="text-white">2 payments</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-white">Bank Transfer</span>
                    <span className="text-white">1 payment</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="text-white">Credit Card</span>
                    <span className="text-white">1 payment</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="border-0 shadow-sm merchant-stats-card">
              <Card.Body>
                <h6 className="text-white">Monthly Spending Trend</h6>
                <div className="mt-3">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-white">January 2024</span>
                    <span className="text-success">₹9,000</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-white">December 2023</span>
                    <span className="text-success">₹7,500</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="text-white">November 2023</span>
                    <span className="text-success">₹6,200</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Payments Table */}
        <Card className="border-0 shadow-sm">
          <Card.Header className="bg-transparent">
            <h5 className="mb-0 text-white">Payment History</h5>
          </Card.Header>
          <Card.Body className="p-0">
            <Table responsive className="orders-table mb-0">
              <thead>
                <tr>
                  <th>Payment ID</th>
                  <th>Order ID</th>
                  <th>Farmer</th>
                  <th>Product</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Method</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment) => (
                  <tr key={payment.id} style={{cursor: 'pointer'}} onClick={() => handlePaymentClick(payment)}>
                    <td>{payment.id}</td>
                    <td>{payment.orderId}</td>
                    <td>{payment.farmer}</td>
                    <td>{payment.product}</td>
                    <td>{payment.amount}</td>
                    <td>{getStatusBadge(payment.status)}</td>
                    <td>{payment.date}</td>
                    <td>{payment.paymentMethod}</td>
                    <td>
                      {payment.status === 'Failed' && (
                        <Button size="sm" variant="outline-danger">Retry</Button>
                      )}
                      {payment.status === 'Pending' && (
                        <Button size="sm" variant="outline-warning">View</Button>
                      )}
                      {payment.status === 'Completed' && (
                        <Button size="sm" variant="outline-success">Receipt</Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>

        {/* Payment Details Modal */}
        <Modal show={showPaymentModal} onHide={handleCloseModal} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Payment Details - {selectedPayment?.id}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedPayment && (
              <div>
                <Row>
                  <Col md={6}>
                    <h6>Payment Information</h6>
                    <p><strong>Payment ID:</strong> {selectedPayment.id}</p>
                    <p><strong>Order ID:</strong> {selectedPayment.orderId}</p>
                    <p><strong>Amount:</strong> {selectedPayment.amount}</p>
                    <p><strong>Status:</strong> {getStatusBadge(selectedPayment.status)}</p>
                    <p><strong>Date:</strong> {selectedPayment.date}</p>
                  </Col>
                  <Col md={6}>
                    <h6>Transaction Details</h6>
                    <p><strong>Payment Method:</strong> {selectedPayment.paymentMethod}</p>
                    <p><strong>Transaction ID:</strong> {selectedPayment.transactionId}</p>
                    <p><strong>Farmer:</strong> {selectedPayment.farmer}</p>
                    <p><strong>Product:</strong> {selectedPayment.product}</p>
                  </Col>
                </Row>
                {selectedPayment.status === 'Failed' && (
                  <>
                    <hr />
                    <div className="alert alert-danger">
                      <strong>Payment Failed:</strong> This payment could not be processed. 
                      Please check your payment method and try again.
                    </div>
                  </>
                )}
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            {selectedPayment?.status === 'Failed' && (
              <Button variant="danger" onClick={handleRetryPayment}>
                🔄 Retry Payment
              </Button>
            )}
            <Button variant="primary">Download Receipt</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default MerchantPayments;
