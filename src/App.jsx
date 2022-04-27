import React, { useContext, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';


function Header() {
  const [user] = useContext(UserContext);
  return (
      <div class="bg-dark text-light">
          <nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
              <div class="container-fluid">
                  <Link class="navbar-brand" to="/">Home</Link>
                  {user &&
                  <ul class="navbar-nav">
                    <li class="nav-item">
                          <Link to="/balance" class="nav-link">Balance</Link>
                      </li>
                      <li class="nav-item">
                          <Link to="/transactions" class="nav-link">Transactions</Link>
                      </li>
                  </ul>
                  }
                  <Link to="/login" class="nav-link">Login</Link>
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


export const UserContext = React.createContext(null);

export default function App() {
  const [user, setUser] = useState(null);
  
  return (
    <div>
      <UserContext.Provider value={[user, setUser]}>
        <Header/>
          <Outlet/>
        <Footer/>
      </UserContext.Provider>
      
    </div>
  );
}