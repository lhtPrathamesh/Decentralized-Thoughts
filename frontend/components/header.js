import React from "react";
import { login, logout } from "../assets/js/near/utils";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  const navigate = useNavigate();
  const handleLogin = () => {
    login();
  };
  const handleLogout = () => {
    logout();
  };
  return (
    <div className="header">
      <div className="leftContainer">
        <div className="headerImgContainer">
          <img
            className="headerImg"
            src="https://www.speshcreatives.com/wp-content/uploads/2021/03/heroimg.png"
            alt=""
            onClick={() => navigate("/")}
          />
        </div>
        <span className="headerMainText" onClick={() => navigate("/")}>
          Decentralized Thoughts
        </span>
      </div>
      <div>
        {window.walletConnection.isSignedIn() ? (
          <>
            <div className="headerItems">
              <span
                className="headerItem"
                onClick={() => navigate("/my-articles")}
              >
                My Articles
              </span>
              <span className="headerItem" onClick={() => navigate("/")}>
                Create Article
              </span>
              <span
                className="headerItem"
                onClick={() =>
                  window.open("https://explorer.testnet.near.org/", "_blank")
                }
              >
                NEAR Explorer
              </span>
              <span className="headerItemUser">{window.accountId}</span>
              <span className="headerItemLogin" onClick={() => handleLogout()}>
                Logout
              </span>
            </div>
            <div className="menuIcon">
              <MenuIcon />
            </div>
          </>
        ) : (
          <span className="headerItemLogin" onClick={() => handleLogin()}>
            LOGIN WITH NEAR
          </span>
        )}
      </div>
    </div>
  );
}

export default Header;
