import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Get navigation parameters + ability to navigate programmatically
import './SuccessPage.css'; // Styles for the success page

const SuccessPage = () => {
  const location = useLocation(); // Used to retrieve state passed via navigation
  const navigate = useNavigate(); // Enables navigation within the app
  const orderId = location.state?.orderId; // Extract order ID from navigation state, if exists

  return (
    <div className="success-container">
      <h2>תודה על ההזמנה</h2>
      <p>ההזמנה התקבלה בהצלחה</p>

      {/* Display order number if it exists */}
      {orderId && (
        <p>
          מספר הזמנה - 
          <span style={{
            direction: 'ltr',
            unicodeBidi: 'bidi-override',
            fontWeight: 'bold',
            marginRight: '6px'
          }}>
            {orderId}
          </span>
        </p>
      )}

      {/* Button to navigate back to the homepage */}
      <button className="back-btn" onClick={() => navigate('/')}>
        חזרה לחנות
      </button>
    </div>
  );
};

export default SuccessPage;
