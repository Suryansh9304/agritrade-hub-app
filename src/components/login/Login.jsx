import React from "react";
import "./Login.css";

function Login() {
    return (
        <React.Fragment>
            <div className="login-background
            ">
                <div className="login-container">
                    <h2>AgriTrade Hub Login</h2>
                    <form>
                        <label>Name</label>
                        <input type="text" required />

                        <label>Email</label>
                        <input type="email" required />

                        <label>Phone Number</label>
                        <input type="tel" pattern="[0-9]{10}" required />

                        <label>Age</label>
                        <input type="number" min="18" required />

                        <label>Verfication Code</label>
                        <input type="text" required />

                        <label>User Type</label>
                        <select required>
                            <option value="">-- Select User Type --</option>
                            <option value="farmer">Farmer</option>
                            <option value="merchant">Merchant</option>
                            <option value="admin">Admin</option>
                        </select>

                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Login;
