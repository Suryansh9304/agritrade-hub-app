import React from 'react';
import { Card, Row, Col, Image, Table, Badge } from 'react-bootstrap';
import "../css/Merchant.css"

function MerchantDashboard() {
  const stats = {
    name: "Rajesh Kumar",
    totalOrders: 24,
    orderCategories: {
      "Wheat": 8,
      "Rice": 6,
      "Maize": 4,
      "Vegetables": 6
    },
    pendingOrders: 5,
    completedOrders: 19,
    totalSpent: 125000,
    monthlyBudget: 200000
  };

  const recentOrders = [
    {
      id: "ORD001",
      farmer: "Amit Singh",
      product: "Wheat",
      quantity: "100 kg",
      price: "₹2,500",
      status: "Pending",
      date: "2024-01-15"
    },
    {
      id: "ORD002",
      farmer: "Suresh Patel",
      product: "Rice",
      quantity: "80 kg",
      price: "₹3,200",
      status: "Completed",
      date: "2024-01-14"
    },
    {
      id: "ORD003",
      farmer: "Mohan Das",
      product: "Maize",
      quantity: "120 kg",
      price: "₹1,800",
      status: "In Transit",
      date: "2024-01-13"
    }
  ];

  const getStatusBadge = (status) => {
    const statusColors = {
      'Pending': 'warning',
      'Completed': 'success',
      'In Transit': 'info',
      'Cancelled': 'danger'
    };
    return <Badge bg={statusColors[status] || 'secondary'}>{status}</Badge>;
  };

  return (
    <div className="dashboard-gradient">
      <div className="mt-4 px-3">
        {/* Profile Card */}
        <Card className="mb-4 shadow-sm border-0 d-flex flex-row align-items-center p-3 merchant-stats-card">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
            roundedCircle
            width={70}
            height={70}
            className="me-3"
          />
          <div>
            <h4 className="mb-1 text-black">Welcome, {stats.name}</h4>
            <p className="mb-0 text-black">Here's your trading summary & updates</p>
          </div>
        </Card>
  
        {/* Dashboard Stats */}
        <h5 className="text-white mb-3">Merchant Dashboard Overview</h5>
        <Row className="g-4">
          <Col md={3}>
            <Card className="shadow-sm border-0 text-center card-hover">
              <Card.Body>
                <h6>Total Orders</h6>
                <h2 className="text-primary">{stats.totalOrders}</h2>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow-sm border-0 text-center card-hover">
              <Card.Body>
                <h6>Pending Orders</h6>
                <h2 className="text-warning">{stats.pendingOrders}</h2>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow-sm border-0 text-center card-hover">
              <Card.Body>
                <h6>Completed Orders</h6>
                <h2 className="text-success">{stats.completedOrders}</h2>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="shadow-sm border-0 text-center card-hover">
              <Card.Body>
                <h6>Total Spent</h6>
                <h2 className="text-info">₹{stats.totalSpent.toLocaleString()}</h2>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Budget Progress */}
        <Row className="mt-4">
          <Col md={6}>
            <Card className="shadow-sm border-0 merchant-stats-card">
              <Card.Body>
                <h6 className="text-white">Monthly Budget Progress</h6>
                <div className="progress mt-2" style={{height: '25px'}}>
                  <div 
                    className="progress-bar bg-success" 
                    style={{width: `${(stats.totalSpent / stats.monthlyBudget) * 100}%`}}
                  >
                    {Math.round((stats.totalSpent / stats.monthlyBudget) * 100)}%
                  </div>
                </div>
                <small className="text-white">
                  ₹{stats.totalSpent.toLocaleString()} / ₹{stats.monthlyBudget.toLocaleString()}
                </small>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="shadow-sm border-0 merchant-stats-card">
              <Card.Body>
                <h6 className="text-white">Available Budget</h6>
                <h3 className="text-success">
                  ₹{(stats.monthlyBudget - stats.totalSpent).toLocaleString()}
                </h3>
                <small className="text-white">Remaining for this month</small>
              </Card.Body>
            </Card>
          </Col>
        </Row>
  
        {/* Product Categories */}
        <hr className="my-4 border-light" />
        <h5 className="text-white mb-3">Product Categories Ordered</h5>
        <Row className="g-3">
          {Object.entries(stats.orderCategories).map(([product, count]) => (
            <Col md={3} key={product}>
              <Card className="border-0 shadow-sm text-center card-hover">
                <Card.Body>
                  <h6>{product}</h6>
                  <h3 className="text-info">{count}</h3>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Recent Orders */}
        <hr className="my-4 border-light" />
        <h5 className="text-white mb-3">Recent Orders</h5>
        <Card className="border-0 shadow-sm">
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
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.farmer}</td>
                    <td>{order.product}</td>
                    <td>{order.quantity}</td>
                    <td>{order.price}</td>
                    <td>{getStatusBadge(order.status)}</td>
                    <td>{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default MerchantDashboard;
