import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route }  from "react-router-dom";
import Login from './pages/Login'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
      <Route index element={<h1>the bankers</h1>} />
        <Route path='/login' element={<Login/>}/>
        <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);