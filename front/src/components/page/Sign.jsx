import { Link } from "react-router-dom";

const Sign = () => {
  return (
    <div className="body-sign-in">
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="input-remember">
              <div className="input-remember-check">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <Link className="sign-in-button" to="./Account" type="submit">
                Sign In
              </Link>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Sign;
