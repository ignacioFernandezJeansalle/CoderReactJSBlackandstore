import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer__container">
      <p>Copyright &copy; {year} by Ignacio Fernández Jeansalle - Coderhouse React JS</p>
    </div>
  );
};

export default Footer;
