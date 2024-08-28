import React from 'react';

const Cart = ({ cart }) => {
    const totalPrice = cart.reduce((sum, course) => sum + course.price, 0).toFixed(2);

    return (
        <div className="cart-container text-center bg-dark text-warning p-3">
            <h2 className="cart-title text-warning">Cart</h2>
            <hr className="divider bg-danger" />
            
            <h5 className="enrolled-courses">
                Enrolled Courses: <span className="text-white">{cart.length}</span>
            </h5>
            
            {cart.map((course, index) => (
                <div key={index} className="course-item d-flex justify-content-between p-2">
                    <p className="course-title text-warning">{course.title}</p>
                    <h6 className="course-price text-white">${course.price.toFixed(2)}</h6>
                </div>
            ))}

            <hr className="divider bg-danger" />
            
            <div className="total d-flex justify-content-between p-2">
                <h4 className="total-label text-warning">Total:</h4>
                <h6 className="total-amount text-white">${totalPrice}</h6>
            </div>
        </div>
    );
};

export default Cart;
