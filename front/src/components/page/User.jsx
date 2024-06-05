import React from "react";
import Account from "../Account/Account";
import accountData from "../Account/accountData.json";

const User = () => {
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      {accountData.map((element) => (
        <Account element={element} key={element.accountTitle} />
      ))}
    </main>
  );
};

export default User;
