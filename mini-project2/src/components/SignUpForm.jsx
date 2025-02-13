const SignUpForm = () => {
    return (
      <div className="login-form">
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="text" placeholder="Full Name" required />
          <input type="text" placeholder="Username" required />
  
          {/* Dropdown for role selection */}
          <select required>
            <option value="" disabled selected>Select Role</option>
            <option value="player">Player</option>
            <option value="coach">Coach</option>
            <option value="fan">Fan</option>
          </select>
  
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
      </div>
    );
  };
  
  export default SignUpForm;
  