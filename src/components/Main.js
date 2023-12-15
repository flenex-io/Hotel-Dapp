import React, { useState } from "react";
import "./Main.css";
const ethers = require("ethers");

const Main = ({ state }) => {
  const { ethereum } = window;
  const [roomCount, setRoomCount] = useState(null);
  const [booked, setBooked] = useState(false);
  const [showRoomCount, setShowRoomCount] = useState(false);

  const handleBookingError = (error) => {
    alert("Error booking");
  };

  const book = async () => {
    if (!ethereum) {
      alert("You do not have Web3 installed");
      return;
    }

    const { contract } = state;
    const value = ethers.utils.parseEther("1");

    try {
      const transaction = await contract.book({ value });
      await transaction.wait();
      alert("Room booked successfully");
    } catch (error) {
      handleBookingError(error);
    }
  };

  const fetchRoomCount = async () => {
    try {
      const { contract } = state;
      const roomCount = await contract.room();
      setRoomCount(roomCount.toNumber());
    } catch (error) {}
  };

  const checkBookedRoom = async () => {
    try {
      const { contract } = state;
      const hasBooking = await contract.hasBooked();
      setBooked(hasBooking);
    } catch (error) {}
  };

  const checkOut = async () => {
    if (!booked) {
      alert("No rooms booked");
      return;
    }

    const { contract } = state;

    try {
      const checkingOut = await contract.checkOut();
      await checkingOut.wait();
      alert("Checked Out Successfully");
    } catch (error) {
      alert("No rooms booked");
    }
  };

  const handleFetchRoomCount = () => {
    setShowRoomCount(true);
    fetchRoomCount();
  };

  return (
    <>
      <nav className="nav-bar">
        <h3>ETH ROOMS</h3>
        <div className="nav-buttons">
          <button className="nav-button" onClick={book}>
            Book Now
          </button>
          <button className="nav-button" onClick={handleFetchRoomCount}>
            Check Room Availability
          </button>
          <button className="nav-button" onClick={checkBookedRoom}>
            Check Booked Room
          </button>
          <button className="nav-button" onClick={checkOut}>
            Check Out
          </button>
        </div>
      </nav>

      {showRoomCount &&
        roomCount !== null &&
        alert(`${roomCount} rooms available`)}
      <p className="booked-status">{booked}</p>

      <main className="main-content">
        <div className="container">
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="section">
              <h4>Section Title</h4>
              <p>This is a section of content within your layout.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2023 ETH ROOMS. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Main;
