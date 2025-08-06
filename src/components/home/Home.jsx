import React from "react";
import logo from "../../assets/logo.png"; // Adjust the path if needed


function Home() {
    return (
        <React.Fragment>
            {/* Bootstrap Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-success sticky-top">
                <div className="container">
                <a className="navbar-brand fw-bold d-flex align-items-center" href="#">
                <img src={logo} alt="AgriTrade Logo" height="60" className="me-2"/> AgriTrade Hub</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#storage">Storage Facilities</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Login / Sign Up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="bg-light text-center py-5">
                <h1 className="display-5 fw-bold text-success">
                    Secure. Smart. Scalable Agricultural Storage.
                </h1>
                <p className="lead">
                    Optimize your farm produce storage with real-time inventory tracking, temperature control, and booking tools.
                </p>
                <div className="d-flex justify-content-center gap-3 mt-3">
                    <button className="btn btn-success">Register Storage</button>
                    <button className="btn btn-outline-success">Explore Storage Options</button>
                </div>
            </section>

            {/* About Us */}
            <section id="about" className="container py-5">
                <h2 className="text-success">About Us</h2>
                <p>
                    AgriStore Hub empowers farmers and merchants with reliable, government-compliant agricultural storage solutions.
                </p>
            </section>

            {/* Services */}
            <section id="services" className="container py-5">
                <h2 className="text-success">Key Features</h2>
                <ul>
                    <li><strong>Digital Inventory Management:</strong> Track crops with quantity, quality, and location details.</li>
                    <li><strong>Climate Monitoring:</strong> Monitor temperature and humidity in real time.</li>
                    <li><strong>Slot Booking System:</strong> Pre-book storage space easily.</li>
                    <li><strong>GPS-Based Locator:</strong> Find nearby facilities.</li>
                    <li><strong>Analytics Dashboard:</strong> Get usage and space insights.</li>
                </ul>
            </section>

            {/* Storage Facilities */}
            <section id="storage" className="container py-5">
                <h2 className="text-success">Available Storage Types</h2>
                <ul>
                    <li>Cold Storage</li>
                    <li>Dry Warehouses</li>
                    <li>Silo Storage</li>
                    <li>Organic Produce Storage</li>
                    <li>Refrigerated Units</li>
                </ul>
                <button className="btn btn-success mt-3">View All Facilities</button>
            </section>

            {/* Why Choose Us */}
            <section className="bg-light py-5">
                <div className="container">
                    <h2 className="text-success">Why Choose Us?</h2>
                    <ul>
                        <li>24/7 Support</li>
                        <li>Government Compliant Storage</li>
                        <li>Real-Time Alerts & Notifications</li>
                        <li>Multilingual Interface</li>
                    </ul>
                </div>
            </section>

            {/* Testimonials */}
            <section id="contact" className="container py-5">
                <h2 className="text-success">Testimonials</h2>
                <blockquote className="blockquote">
                    <p>"AgriStore Hub helped me manage my grains and reduced post-harvest losses."</p>
                    <footer className="blockquote-footer">Rajesh, Farmer from Punjab</footer>
                </blockquote>
                <blockquote className="blockquote">
                    <p>"Easy to track and monitor fruits stored in our cold units."</p>
                    <footer className="blockquote-footer">Suman Agro Pvt. Ltd.</footer>
                </blockquote>
            </section>

            {/* Get the App */}
            <section className="bg-success text-white text-center py-5">
                <h2>Get the App</h2>
                <p> All right Reserved to Softpro India.
                <br/>
                &copy; Softpro India {new Date().getFullYear()} 
                </p>
                <p>Download the AgriStore Hub app for Android and iOS.</p>
                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-light">Google Play</button>
                    <button className="btn btn-light">App Store</button>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Home;
