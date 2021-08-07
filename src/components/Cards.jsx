import React from "react";

function Cards({ cardId, cardTitle, cardSub, cardPrice, cardText }) {
  return (
    <div class="col-8 col-lg-4 col-xl-3">
      {
        (cardId === "picCard" ? (
          <div class="card border-warning bg-dark">
            <div class="card-body text-center py-4">
              <h4 class="card-title">{cardTitle}</h4>
              <img
                src="src/assets/card.png"
                alt="Card"
                class="card-img-top py-3"
              />

              <p class="lead card-subtitle">{cardSub}</p>
              <p class="display-5 my-0 text-warning fw-bold">{cardPrice}</p>
              <div class="card-text mx-1 text-muted d-none d-lg-block">
                {cardText}
              </div>
              <a href="" class="btn btn-warning btn-lg mt-3">
                Button
              </a>
            </div>
          </div>
        ) : cardId === "headerCard" ? (
            <div class="card border-secondary bg-dark">
              <div class="card-header text-muted">Card Header</div>
              <div class="card-body text-center py-4">
                <h4 class="card-title">{cardTitle}</h4>
                <p class="lead card-subtitle text-end">{cardSub}</p>
                <p class="display-5 my-5 text-warning fw-bold">{cardPrice}</p>
                <div class="card-text mx-5 text-muted d-none d-lg-block">
                  {cardText}
                </div>
                <a
                  href=""
                  class="btn btn-outline-secondary text-warning btn-lg mt-3"
                >
                  Button
                </a>
              </div>
            </div>
        ) : (
            <div class="card border-secondary bg-dark">
              <div class="card-body text-center py-4">
                <h4 class="card-title my-3">Plain Card</h4>
                <p class="lead card-subtitle text-start my-1">Left Subtitle</p>
                <p class="display-5 my-5 text-warning fw-bold">12.99</p>
                <div class="card-text my-1 mx-5 text-muted d-none d-lg-block">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <a
                  href=""
                  class="btn btn-outline-secondary text-warning btn-lg mt-3"
                >
                  Button
                </a>
              </div>
            </div>
        ))
        
      }
    </div>
  );
}

export default Cards;
