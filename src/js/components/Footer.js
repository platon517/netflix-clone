import React from 'react';

export function Footer () {
  return(
    <footer>
      <a>Questions? Contact us.</a>
      <section>
        <div>
          <a>FAQ</a>
          <a>Investor Relations</a>
          <a>Privacy</a>
          <a>Speed Test</a>
        </div>
        <div>
          <a>Help Center</a>
          <a>Jobs</a>
          <a>Cookie Preferences</a>
          <a>Legal Notices</a>
        </div>
        <div>
          <a>Account</a>
          <a>Ways to Watch</a>
          <a>Corporate Information</a>
          <a>Netflix Originals</a>
        </div>
        <div>
          <a>Media Center</a>
          <a>Terms of Use</a>
          <a>Contact Us</a>
        </div>
      </section>
      <a className="a_disabled">Netflix Russia</a>
    </footer>
  );
}