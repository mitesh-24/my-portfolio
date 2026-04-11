function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="pf-footer">
      <div className="pf-container pf-footer__inner">
        <p className="pf-footer__copy">© {year} Mitesh Kulkarni. Built with React.</p>
        <div className="pf-footer__links">
          <a href="#home">Back to top</a>
          <a href="#contact">Get in touch</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
