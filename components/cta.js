import React from "react";
import Container from "./container";

export default function Cta() {

  function simulateClickElementWithId() {
    let button = document.getElementById("bottom-right-button");
    let event = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    button?.dispatchEvent(event);
  }

  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-xl font-medium lg:text-2xl">
            Cela n'as pas répondu a votre question?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-lg">
            Vous pouvez me la poser en cliquant ici
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <button
              onClick={simulateClickElementWithId}
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5">
            Posez votre question
          </button>
        </div>
      </div>
    </Container>
  );
}
