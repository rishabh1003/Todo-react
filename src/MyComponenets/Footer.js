import React from "react";

const Footer = () => {
  let footerStyle = {
    postion: "relative",
    top: "100vh",
    width: "100%",
    border: "2px solid red",
  };
  return (
    <footer footer className="bg-dark text-light py-3" style={footerStyle}>
      <p className="text-center">Copyright &copy; MyTodosList.com</p>
    </footer>
  );
};

export default Footer;
