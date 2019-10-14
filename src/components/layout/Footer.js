import React from "react";
import styles from "../../Styles/Footer.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <h4 className={styles.text}>
        © Marcin Magdoń, 2019
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/MarMMcin"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/marcin-magdoń-255707193/"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </h4>
    </div>
  );
}

export default Footer;
