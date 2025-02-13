import revisedLogo from '../assets/revised-2.png'

const Heading = () => {
  return (
    <div className="heading-container">
      <img src={revisedLogo} alt="ShePlays Logo" className="revisedLogo" />
      <p className="form-subtext">
        For the love of the game. Connect with players worldwide.
      </p>
    </div>
  );
};

export default Heading;
