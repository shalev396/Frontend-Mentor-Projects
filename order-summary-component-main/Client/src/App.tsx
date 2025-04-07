import { useState } from "react";

export default function App() {
  const [screenSize] = useState(screen.width);
  return (
    <div className="font-Red-Hat-Display bg-pale-blue w-screen h-screen text-sizex flex justify-center items-center">
      {screenSize > 400 ? (
        <>
          <img
            className="absolute z-0 "
            src="./assets/images/pattern-background-mobile.svg"
          />
        </>
      ) : (
        <img
          className="absolute z-0"
          src="./assets/images/pattern-background-desktop.svg"
        />
      )}
      <img
        className="absolute z-0"
        src="./assets/images/pattern-background-mobile.svg"
      />
      <div className="bg-white rounded my-10 mx-5 overflow-hidden text-center flex flex-col max-w-96 z-10">
        <img src="./assets/images/illustration-hero.svg" />
        <h1 className="my-5  text-2xl font-bold text-dark-blue">
          Order Summary
        </h1>
        <p className="px-9 text-dark-blue">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className="bg-very-pale-blue mx-9 flex rounded">
          <img className="m-4" src="./assets/images/icon-music.svg" />
          <div className="flex flex-col my-auto">
            <span className="font-bold text-dark-blue">Annual Plan</span>
            <p className="text-dark-blue">$59.99/year</p>
          </div>
          <a
            className="my-auto ml-7 text-bright-blue font-bold underline"
            href="#"
          >
            Change
          </a>
        </div>
        <button className="my-3 bg-bright-blue mx-9 rounded text-white font-bold py-2 hover:bg-desaturated-blue">
          Proceed to Payment
        </button>
        <button className="py-4 mb-4 text-dark-blue font-bold">
          Cancel Order
        </button>
      </div>
    </div>
  );
}
