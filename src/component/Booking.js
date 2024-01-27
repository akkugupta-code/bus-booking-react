import { Container, CssBaseline } from "@mui/material";
import Deck from "./Deck.js";

/**
 * Booking component representing the main dashboard with Lower and Upper decks.
 */
function Booking({ bookingDetails, setBookingDetails }) {
  return (
    <div className="dashboard">
      <Container>
        <Deck
          type="Lower"
          seats={20}
          bookingDetails={bookingDetails}
          setBookingDetails={setBookingDetails}
        />
        <Deck
          type="Upper"
          seats={20}
          bookingDetails={bookingDetails}
          setBookingDetails={setBookingDetails}
        />
      </Container>
    </div>
  );
}

export default Booking;
