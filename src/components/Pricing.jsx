import React from "react";
import Cards from "./Cards";

function Pricing() {
  return (
    <section id="pricing" class="mt-4">
      <div class="container-lg">
        <div class="text-center">
          <h2 class="text-warning">Pricing</h2>
          <p class="lead text-muted">Example of Cards Component</p>
        </div>
        <div class="row mb-3 align-items-center justify-content-center g-4">
          <Cards
            cardId="plainCard"
            cardTitle="Plain Card"
            cardSub="Left Subtitle"
            cardPrice="19.99"
            cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          ></Cards>
          <Cards
            cardId="picCard"
            cardTitle="Card with Image"
            cardSub="Center Subtitle"
            cardPrice="20.99"
            cardText="Sample text"
          ></Cards>
          <Cards
            cardId="headerCard"
            cardTitle="Card With Header"
            cardSub="Right Subtitle"
            cardPrice="29.99"
            cardText="You thought it's going to be lorem ipsum but no"
          ></Cards>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
