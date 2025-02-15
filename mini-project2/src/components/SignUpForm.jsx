import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import auth context

const SignUpForm = () => {
  const { login } = useAuth(); // Get login function from AuthContext
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    username: "",
    role: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.email.includes("@")) newErrors.email = "Invalid email";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.role) newErrors.role = "Role selection is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const userData = {
        name: formData.fullName,
        email: formData.email,
        role: formData.role,
      };
      login(userData); // Store user data globally
      navigate("/dashboard"); // Redirect after successful signup
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        {errors.email && <p className="error">{errors.email}</p>}

        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        {errors.password && <p className="error">{errors.password}</p>}

        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
        {errors.fullName && <p className="error">{errors.fullName}</p>}

        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
        {errors.username && <p className="error">{errors.username}</p>}

        <select name="role" value={formData.role} onChange={handleChange} required>
          <option value="" disabled>Select Role</option>
          <option value="player">Player</option>
          <option value="coach">Coach</option>
          <option value="fan">Fan</option>
        </select>
        {errors.role && <p className="error">{errors.role}</p>}

        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;

