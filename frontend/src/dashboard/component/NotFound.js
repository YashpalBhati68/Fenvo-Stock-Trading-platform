import React from "react";
import "../dashboard.css";
function NotFound() {
    return (
        <div className="container p-5 mb-5">
            <div className="dashboard-row text-center">
                <h1 className="mt-5">404 Not Found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
            </div>
        </div>
    );
}

export default NotFound;