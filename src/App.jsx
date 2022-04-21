import React from 'react';
import { Outlet, Link } from 'react-router-dom';


function Header() {
  return (
      <div class="bg-dark text-light">
          <nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
              <div class="container-fluid">
                  <Link class="navbar-brand" to="/">Home</Link>
                  {/*
                  <ul class="navbar-nav">
                      <li class="nav-item">
                          <Link to="/about" class="nav-link">About</Link>
                      </li>
                  </ul>
                */}
                  <Link to="/Login" class="nav-link">Login</Link>
              </div>
          </nav>
      </div>
)
}


function Footer() {
  return (
  <footer class="footer mt-lg-2 py-3 bg-dark">
    <div class="container">
        <span class="text-muted">GNU General Public License v3.0 +
        <a href="https://github.com/scotus-1/bankers"> source</a></span>
    </div>
  </footer>
  )
}


export default function App() {
  return (
    <div>
      <Header/>
        <Outlet/>
      <Footer/>
    </div>
  );
}