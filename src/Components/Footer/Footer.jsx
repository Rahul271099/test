import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div>
      <main className="footer_wrapper">
        <section className="footer_upper">
          <section className="first_section">
            <h3>WORKSPACES</h3>
            <div className="footer_list">
              <ul>
                <li>Popular Fullstack </li>
                <li> Frontend Backend</li>
                <li>Fullstack</li>
                <li>Vite</li>
                <li>Docs, Blogs & Slides</li>
                <li>Vanilla</li>
              </ul>
            </div>
          </section>
          <section className="first_section">
            <h3>START A NEW PROJECT</h3>
            <div className="footer_list">
              <ul>
                <li>From a Workspace </li>
                <li>From a GitHub Repo</li>
                <li>From your computer</li>
              </ul>
            </div>
          </section>
          <section className="first_section">
            <h3>PRODUCT</h3>
            <div className="footer_list">
              <ul>
                <li>Docs</li>
                <li>Enterprise</li>
                <li>Integrations</li>
                <li>Pricing</li>
                <li>Case Studies</li>
              </ul>
            </div>
          </section>
          <section className="first_section">
            <h3> COMPANY</h3>
            <div className="footer_list">
              <ul>
                <li>Blog</li>
                <li>Careers</li>
                <li>Community</li>
                <li>Enterprise Sales</li>
                <li>Privacy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </section>
          <section className="first_section">
            <h3>CONNECT</h3>
            <div className="footer_list">
              <ul>
                <li>GitHub</li>
                <li>Twitter</li>
                <li>Discord</li>
              </ul>
            </div>
          </section>
        </section>
        <section className="footer_bottom">
          <p>© 2023 StackBlitz, Inc.</p>
          <p>
            StackBlitz Codeflow and the Infinite Pull Request logo are
            trademarks of StackBlitz, Inc.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Footer;
