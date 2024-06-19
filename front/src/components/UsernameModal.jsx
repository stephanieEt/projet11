import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUserName } from "../redux/UpdateUserProfileSlice";
import { fetchUserProfile } from "../redux/UserProfileSlice";
import PropTypes from "prop-types";

const UsernameModal = ({ isOpen, user, onClose }) => {
  const dispatch = useDispatch();
  const [newUserName, setNewUserName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      setNewUserName("");
      setError("");
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setNewUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUserName.trim() === "") {
      setError("Remplissez le champ Username");
      return;
    }
    dispatch(updateUserName(newUserName)).then(() => {
      dispatch(fetchUserProfile());
      onClose();
    });
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <form className="modal-form" onSubmit={handleSubmit}>
          <label>
            New Username:
            <input type="text" value={newUserName} onChange={handleChange} />
          </label>
          <label>
            First name:
            <input type="text" value={user.firstName} disabled />
          </label>
          <label>
            Last name:
            <input type="text" value={user.lastName} disabled />
          </label>
          <div className="modal-btn">
            <button type="submit">Save</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
          {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}{" "}
        </form>
      </div>
    </div>
  );
};
UsernameModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default UsernameModal;
