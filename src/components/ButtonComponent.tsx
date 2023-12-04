// ButtonComponent.tsx
import React from "react";
import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

interface ButtonProps {
  onClick: () => void;
}

const ButtonComponent: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <div>
      <button
        type="submit"
        style={{
          position: "fixed",
          bottom: "13px",
          right: "25px",
        }}
        title="Submit"
        onClick={onClick}
        className="email_btn btn-primary btn-lg"
        data-bs-toggle="modal"
        data-bs-target="#modalId"
      >
        <FontAwesomeIcon className="i" icon={faEnvelope} />
      </button>

      <div
        className="modal fade"
        id="modalId"
        tabIndex={-1}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalTitleId">
                Send Us a Message
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form action="">
                <input
                  className="w-100 mb-3"
                  type="text"
                  name="Name"
                  id=""
                  placeholder="Name"
                  required
                />
                <input
                  className="w-100"
                  type="email"
                  name="Name"
                  id=""
                  placeholder="Message"
                  required
                />
                <div className="modal-footer">
                  <button type="submit" className="modal_button w-100">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <script>
        const myModal = new bootstrap.Modal(document.getElementById('modalId'),
        options)
      </script>
    </div>
  );
};

export default ButtonComponent;