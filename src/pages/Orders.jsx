// MyOrders.jsx
import React from "react";
// NOTE: The styles object has been removed.

const MyOrdersPage = () => {
    // SIMULATED ORDER DATA
    const orders = [
        {
            id: 'ORD-1004',
            date: '2025-11-20',
            item: 'Tiered Blush Wedding Cake',
            total: 350.00,
            status: 'Delivered',
        },
        {
            id: 'ORD-1005',
            date: '2025-11-23',
            item: 'Custom Birthday Cupcakes (4 doz)',
            total: 120.00,
            status: 'Processing',
        },
        {
            id: 'ORD-1006',
            date: '2025-11-25',
            item: 'Holiday Cookie Box',
            total: 65.00,
            status: 'Shipped',
        },
    ];

    const getStatusClass = (status) => {
        switch (status) {
            case 'Delivered':
                return 'status-delivered';
            case 'Processing':
                return 'status-processing';
            case 'Shipped':
                return 'status-shipped';
            default:
                return '';
        }
    };

    const handleViewDetails = (orderId) => {
        alert(`Viewing details for Order ID: ${orderId}`);
        // In a real application, this would navigate to a detailed order page
    };

    return (
        // Uses the main page wrapper class
        <div className="page-wrapper">
            
            <div className="page-wrapper">
                {/* Uses the main content box class */}
                <div className="content-box">
                    
                    {/* Uses the global page title and description classes */}
                    <h2 className="page-title">MY ORDERS</h2>
                    <p className="page-description">
                        Track your recent custom cake and dessert orders.
                    </p>

                    {orders.length === 0 ? (
                        <p>You have no recent orders.</p>
                    ) : (
                        <div className="table-container">
                            {/* Uses the table class defined in index.css */}
                            <table className="order-table">
                                <thead>
                                    <tr className="table-header-row">
                                        <th>Order ID</th>
                                        <th>Date</th>
                                        <th>Item Description</th>
                                        <th>Total</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order) => (
                                        <tr key={order.id}>
                                            <td>{order.id}</td>
                                            <td>{order.date}</td>
                                            <td>{order.item}</td>
                                            <td>${order.total.toFixed(2)}</td>
                                            <td>
                                                {/* Uses two classes: one for base badge style, one for color */}
                                                <span className={`status-badge ${getStatusClass(order.status)}`}>
                                                    {order.status}
                                                </span>
                                            </td>
                                            <td>
                                                <button 
                                                    onClick={() => handleViewDetails(order.id)}
                                                    className="view-details-btn"
                                                >
                                                    View Details
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
            
            {/* Footer component (using global classes) */}
            <div className="footer-container">
                <p className="footer-text">© 2025 SNS Cakebakery. All the Reserved.</p>
            </div>
        </div>
    );
};

export default MyOrdersPage;