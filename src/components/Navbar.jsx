import React from 'react'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div class="container-xxl">
            <a
              href="#intro"
              class="
                d-flex
                align-items-center
                fw-bold
                fs-3
                my-2 my-lg-0
                me-lg-auto
                text-warning text-decoration-none
              "
            >
              <i class="bi bi-bootstrap-fill"></i>
              ootstrap Practice
            </a>
            
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#main-nav"
              aria-controls="main-nav"
              aria-expanded="false"
              aria-label="toggle-navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div
              class="
                collapse
                navbar-collapse
                justify-content-end
                align-center
                text-warning
              "
              id="main-nav"
            >
              <ul class="navbar-nav text-light">
                <li class="nav-item">
                  <a href="#topics" class="nav-link">Topics</a>
                </li>
                <li class="nav-item">
                  <a href="#reviews" class="nav-link">Reviews</a>
                </li>
                <li class="nav-item">
                  <a href="#contact" class="nav-link">Contact</a>
                </li>
                <li class="nav-item">
                  <a href="#pricing" class="nav-link text-warning">Pricing</a>
                </li>
                <li class="nav-item">
                  <a href="#other" class="nav-link">Other</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    )
}

export default Navbar
