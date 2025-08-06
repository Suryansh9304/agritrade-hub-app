import React from "react";

function Login() {
    return (
        <React.Fragment>
            <div className="container py-5 d-flex justify-content-center align-items-center min-vh-100 bg-light">
                <div className="col-md-6 bg-white p-4 shadow rounded">
                    <h2 className="text-center text-success mb-4">AgriTrade Hub Login</h2>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Phone Number</label>
                            <input type="tel" className="form-control" pattern="[0-9]{10}" required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Age</label>
                            <input type="number" className="form-control" min="18" required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Verification Code</label>
                            <input type="text" className="form-control" required />
                        </div>

                        <div className="mb-4">
                            <label className="form-label">User Type</label>
                            <select className="form-select" required>
                                <option value="">-- Select User Type --</option>
                                <option value="farmer">Farmer</option>
                                <option value="merchant">Merchant</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>

                        <button type="submit" className="btn btn-success w-100">Login</button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Login;
