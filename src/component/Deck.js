import React from "react";
import Seat from "./Seat";  // Importing the Seat component
import DriverWheel from "./assets/DriverWheel.svg";

function Deck({ seats, bookingDetails, setBookingDetails, type }) {
  // Array to store JSX elements for Seat components
  const seatsArray = [];

  // Loop to generate Seat components based on the number of seats
  for (let i = 0; i < seats; i++) {
    seatsArray.push(
      <Seat
        id={type + (i + 1)}  // Generating a unique id for each Seat
        key={i}  // Providing a unique key for React rendering optimization
        bookingDetails={bookingDetails}  // Prop to pass booking details
        setBookingDetails={setBookingDetails}  // Prop to pass state updater function
      />
    );
  }

  // JSX structure representing a deck with seats and optional driver's wheel
  return (
    <>
      <br />
      {type}  {/* Displaying the type of deck (e.g., Upper or Lower) */}
      <div className="deckContainer">
        <div>
          {type === "Lower" && (  // Conditionally rendering the driver's wheel for Lower deck
            <div className="driver">
              <img src={DriverWheel} alt="wheel" />
            </div>
          )}
        </div>
        <div className="mainseat">{seatsArray}</div>  {/* Rendering the Seat components */}
      </div>
    </>
  );
}

export default Deck;