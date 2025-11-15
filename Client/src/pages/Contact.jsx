import React from 'react'; // Import React for component creation
import './Contact.css'; // Import CSS specific to the contact page

// Static Contact page – shows business contact info
const Contact = () => {
  return (
    <div className="contact-container"> {/* Main container for contact content */}
      <h1>פרטי יצירת קשר</h1>

      {/* Phone number */}
      <div className="contact-item">
        <strong>טלפון:</strong> 052-538-1648
      </div>

      {/* Email address */}
      <div className="contact-item">
        <strong>אימייל:</strong> info@ourcosmetics.com
      </div>

      {/* Physical address */}
      <div className="contact-item">
        <strong>כתובת:</strong> מכללת ספיר - מ.א שער הנגב
      </div>

      {/* Working hours */}
      <div className="contact-item">
        <strong>שעות פעילות:</strong> א'-ה' 09:00-18:00
      </div>
    </div>
  );
};

export default Contact; // Export the component for routing
