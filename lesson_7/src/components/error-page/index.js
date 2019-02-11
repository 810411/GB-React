import React from 'react';
import './error-page.css';
import {Link} from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="error-page">
      <h2>Error</h2>
      <p>
        Something went wrong. We already start think about how to fix it.
      </p>
      <Link to="/">
        Return on main page
      </Link>
    </section>
  )
};

export default ErrorPage