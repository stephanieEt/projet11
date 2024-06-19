import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUserProfile } from "../redux/UserProfileSlice";
import UsernameModal from "../components/UsernameModal";
import Account from "../components/Account";

const User = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userProfile.user);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/SignIn");
    } else if (!user) {
      dispatch(fetchUserProfile());
    }
  }, [dispatch, user, navigate]);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="body-user">
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {user?.firstName} {user?.lastName}
          </h1>
          <button className="edit-button" onClick={handleEditClick}>
            Edit Name
          </button>
        </div>
        <UsernameModal
          isOpen={isModalOpen}
          user={user}
          onClose={handleCloseModal}
        />
        <h2 className="sr-only">Accounts</h2>
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </main>
    </div>
  );
};

export default User;
