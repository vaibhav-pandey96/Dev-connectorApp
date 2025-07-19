import React, { useState } from "react";
import Modal from "./Modal";

const Footer = ({ footer1 }) => {
  // One piece of state to track which modal is open: 'privacy', 'terms', etc
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="w-full flex justify-evenly h-[3.5rem] bg-black">
      <button className="text-white" onClick={() => setActiveModal("privacy")}>
        {footer1}
      </button>
      <button className="text-white" onClick={() => setActiveModal("terms")}>
        Terms of Service
      </button>
      <button className="text-white" onClick={() => setActiveModal("contact")}>
        Contact
      </button>

      {/* Privacy Policy Modal */}
      <Modal
        show={activeModal === "privacy"}
        onClose={() => setActiveModal(null)}
        name="Privacy Policy"
        description="We care about your privacy. Your data is never sold or shared. This is a developer network, not a data trap."
      />

      {/* Terms of Service Modal */}
      <Modal
        show={activeModal === "terms"}
        onClose={() => setActiveModal(null)}
        name="Terms of Service"
        description="Terms of service will be updated Soon !!"
      />
      <Modal
        show={activeModal === "contact"}
        onClose={() => setActiveModal(null)}
        name="Contact"
        description="Contact us on: 'example@gmail.com' For any query"
      />
    </div>
  );
};

export default Footer;
