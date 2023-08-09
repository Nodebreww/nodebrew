import React from 'react'

export default function Navbar() {
  return (
    <nav class="navbar-container">
        <div class="logo-container">
            <a href="index.html">Logo</a>
        </div>

        <div class="bars">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>

        <ul class="nav-items">
            <li class="nav-link"><a href="/">About</a></li>
            <li class="nav-link"><a href="/">Sponsor</a></li>
            <li class="nav-link"><a href="/">Contact</a></li>
            <div class="login-register">
                <a href="/" class="button">Register</a>
            </div>
        </ul>
    </nav>
  )
}
