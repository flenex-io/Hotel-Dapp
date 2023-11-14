// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract Hotel {
    uint public constant maxRooms = 5;
    uint roomsAvailable = maxRooms;
    address payable owner = payable(0xF3bA650f3BB16dc176aa30fa2EB07Ec0cb7E1B26);

    mapping(address => bool) hasBooking;

    modifier roomsAvailableCheck() {
        require(roomsAvailable > 0, "All rooms are occupied");
        _;
    }

    function book() public payable roomsAvailableCheck {
        owner.transfer(msg.value);
        hasBooking[msg.sender] = true;
        roomsAvailable--;
    }

    function room() public view returns (uint) {
        return roomsAvailable;
    }

    function hasBooked() public view returns (string memory) {
        if (hasBooking[msg.sender]) {
            return "You have a booking";
        } else {
            return "You do not have a booking";
        }
    }

    function checkOut() public roomsAvailableCheck returns (string memory) {
        require(hasBooking[msg.sender], "You don't have any booking");
        roomsAvailable++;
        hasBooking[msg.sender] = false;
        return "Check Out Successfully";
    }
}
