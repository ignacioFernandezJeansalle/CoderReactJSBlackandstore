import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer__container">
      <p>
        Copyright &copy; {year} by Ignacio Fernández Jeansalle{" "}
        <a href="https://www.instagram.com/nacho.fj/" target="_blank">
          [ Nacho FJ ]
        </a>{" "}
        Coderhouse React JS
      </p>
    </div>
  );
};

export default Footer;
