import React from 'react';
import revisedLogoImage from '../assets/revised-2.png'; // Rename the import to avoid the conflict

const RevisedLogo = ({ size = "medium" }) => { // Default size is medium
  return (
    <div className={`logo-container2 ${size}`}>
      <img src={revisedLogoImage} alt="Logo" className={`revisedLogo2 ${size}`} />
    </div>
  );
};

export default RevisedLogo;
