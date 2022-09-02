import React from 'react';
import Button from 'react-bootstrap/Button';

export default function LogIn() {
    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form>
                <label>
                    <p>Email Address</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" />
                </label>
                <div className="submit">
                    <Button variant="primary">Submit</Button>
                </div>
            </form>
        </div>
    );
}
