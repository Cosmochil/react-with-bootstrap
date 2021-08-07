import React from 'react'


function Intro() {
    return (
      <div class="container-lg text-light py-5">
        <div class="row justify-content-center">
          <div class="col-md-5 text-center text-md-start">
            <h1 class="display-2 text-warning">Bootstrap 5</h1>
            <h2 class="display-5">The Practice</h2>
            <p class="lead text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <a href="#pricing" class="btn btn-lg btn-warning rounded-pill">
              To Pricing
            </a>
            <a
              href="#sidebar"
              class="btn btn-lg btn-outline-warning rounded-pill mx-2"
              data-bs-toggle="offcanvas"
              role="button"
              aria-controls="sidebar"
            >
              Open offcanvas sidebar
            </a>
          </div>
          <div class="col-md-5 text-center d-none d-md-block">
            <span
              class="tip"
              data-bs-placement="bottom"
              title="Tool Tip - Image"
            >
              <img src="src/assets/ebook.png" alt="Ebook" class="img-fluid" />
            </span>
          </div>
        </div>
      </div>
    );
}

export default Intro
