import React, { useState, useEffect } from "react";
import "./Main.css";
const ethers = require("ethers");

const Main = ({ state }) => {
  const { ethereum } = window;
  const [roomCount, setRoomCount] = useState(null);
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    fetchRoomCount();
    checkBookedRoom();
  }, []);

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

  return (
    <div className="main-container">
      <nav className="nav-bar">
        <h3>ETH ROOMS</h3>
        <div className="nav-buttons">
          <button className="nav-button" onClick={book}>
            Book Now
          </button>
          <button className="nav-button" onClick={fetchRoomCount}>
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
      {roomCount !== null && (
        <p className="room-count">Room Count: {roomCount} available</p>
      )}
      <p className="booked-status">{booked}</p>
      <p>
        Aute ea veniam consectetur tempor sunt do sint culpa adipisicing
        occaecat mollit minim elit. Sunt sint proident tempor <br />
        sit veniam dolor. Adipisicing aliqua reprehenderit adipisicing ex tempor
        qui esse eiusmod elit eu esse ad est. Nostrud ex ipsum velit id occaecat{" "}
        <br /> mollit esse adipisicing velit culpa. Eiusmod fugiat Lorem
        proident do esse laboris sit incididunt est ipsum nulla exercitation.
        Duis exercitation ex id duis qui esse. <br />
        Proident excepteur laborum exercitation sint consectetur irure
        adipisicing incididunt tempor.
      </p>
    </div>
  );
};

export default Main;
