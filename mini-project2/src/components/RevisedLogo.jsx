import React from 'react';
import revisedLogoImage from '../assets/revised-2.png'; // Rename the import to avoid the conflict

const RevisedLogo = () => { // Rename the component to 'RevisedLogo'
  return (
    <div className="logo-container">
      <img src={revisedLogoImage} alt="Logo" className="RevisedLogo2" />
    </div>
  );
};

export default RevisedLogo;
