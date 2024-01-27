import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function Seat({ bookingDetails, setBookingDetails, id }) {
  // State variables for managing component state
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
  });

  // Event handler to update form field values
  const handleSetFormValue = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  // Event handlers for opening and closing the booking dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, firstname, lastname, gender } = formData;

    // Create a new booking object and update the booking details state
    const newBooking = {
      id: id,
      name: `${firstname} ${lastname}`,
      email: email,
      seatNumber: 123, // Placeholder seat number, update as needed
      dateOfBooking: new Date(),
      gender: gender,
    };

    setBookingDetails([...bookingDetails, newBooking]);
    handleClose(); // Close the booking dialog after successful submission
  };

  // Retrieve booking information for the current seat
  const bookingObj = bookingDetails.find((o) => o.id === id);
  const seatColor = bookingObj?.gender === "female" ? "pink" : "lightGrey";

  return (
    <>
      {/* Seat display with conditional styling based on booking status */}
      <div
        className="seat"
        style={{
          backgroundColor: bookingObj ? seatColor : "white",
        }}
        onClick={bookingObj ? () => {} : handleClickOpen}
      >
        <div className="pillow"></div>
      </div>

      {/* Booking dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>
          Book Ticket for seat number <b>{id}</b>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To book this ticket please fill in the details below.
          </DialogContentText>

          {/* Input fields for user details */}
          <TextField
            autoFocus
            required
            margin="dense"
            id="firstname"
            name="firstname"
            label="First Name"
            type="name"
            fullWidth
            variant="standard"
            value={formData.firstname}
            onChange={handleSetFormValue("firstname")}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="lastname"
            name="lastname"
            label="Last name"
            type="name"
            fullWidth
            variant="standard"
            value={formData.lastname}
            onChange={handleSetFormValue("lastname")}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={formData.email}
            onChange={handleSetFormValue("email")}
          />

          {/* Dropdown for selecting gender */}
          <InputLabel>Gender</InputLabel>
          <Select
            required
            margin="dense"
            id="gender"
            name="gender"
            label="Gender"
            value={formData.gender}
            fullWidth
            onChange={handleSetFormValue("gender")}
            variant="standard"
          >
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="male">Male</MenuItem>
          </Select>
        </DialogContent>

        {/* Dialog actions for canceling or submitting the booking */}
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Book</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Seat;