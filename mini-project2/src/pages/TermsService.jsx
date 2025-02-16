import React from "react";
import "../styles/TermsService.css"; // Import the CSS file
import HomeButton from "../components/HomeButton";
import LogoutButton from "../components/LogoutButton";

const TermsService = () => {
  return (
    <div className="terms-service-page">
      <HomeButton />
      <LogoutButton />
      <h1>Terms of Service</h1>
      <p>
        Welcome to ShePlays: Football! By accessing or using our website and
        services, you agree to the following terms:
      </p>

      <h2 className="section-heading">1. Use of Our Services</h2>
      <p>
        You must be at least 13 years old (or have permission from a legal
        guardian) to use our services. You agree not to use our services for any
        illegal or unauthorized purposes.
      </p>

      <h2 className="section-heading">2. Accounts & Security</h2>
      <p>
        You are responsible for maintaining the confidentiality of your account
        and password. Any activity under your account is your responsibility.
      </p>

      <h2 className="section-heading">3. Content Ownership</h2>
      <p>
        All content on this site, including text, graphics, and logos, belongs
        to ShePlays: Football or its licensors. You may not copy, distribute,
        or modify any content without permission.
      </p>

      <h2 className="section-heading">4. Limitation of Liability</h2>
      <p>
        We are not responsible for any damages or losses resulting from your use
        of our services. Use our services at your own risk.
      </p>

      <h2 className="section-heading">5. Changes to Terms</h2>
      <p>
        We may update these terms at any time. Continued use of our services
        means you accept any updates.
      </p>

      <h2 className="section-heading">6. Contact Us</h2>
      <p>
        If you have any questions, contact us at{" "}
        <a href="mailto:contact@sheplaysfootball.com">sheplaysfootball@gmail.com</a>.
      </p>
    </div>
  );
};

export default TermsService;
