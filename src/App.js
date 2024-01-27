import "./App.css";
import NavBar from "./component/NavBar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Booking from "./component/Booking";
import { useState } from "react";

/**
 * The main App component serving as the entry point for the application.
 *
 * @function
 * @returns {JSX.Element} - The JSX element representing the App component.
 */
function App() {
  // This state will be the single source of truth for all the bookings made
  const [bookingDetails, setBookingDetails] = useState([]);

  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              bookingDetails={bookingDetails}
              setBookingDetails={setBookingDetails}
            />
          }
        />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              bookingDetails={bookingDetails}
              setBookingDetails={setBookingDetails}
            />
          }
        />
        <Route
          path="/booking"
          element={
            <Booking
              bookingDetails={bookingDetails}
              setBookingDetails={setBookingDetails}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
