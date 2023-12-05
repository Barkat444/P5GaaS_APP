import React from "react";
import "../Styles/support-comp.css"; // Import the CSS file

function Support() {
  return (
    <div className="support-container">
      <h1 className="support-heading">Support</h1>
      <p className="support-paragraph">
        Please reach out to{" "}
        <a
          className="support-email-link"
          href="mailto:mcbu-5g-ivt@cisco.com"
        >
          mcbu-5g-ivt@cisco.com
        </a>{" "}
        or{" "}
        <a className="support-email-link" href="mailto:sbarkatu@cisco.com">
          sbarkatu@cisco.com
        </a>{" "}
        for any queries and complaints. We're here to assist you, and you can expect a response within the next 24 hours.
      </p>
    </div>
  );
}

export default Support;
