import React, { useState } from "react";
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
    const value = ethers.utils.parseEther("0.001");

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
      const parsedRoomCount = roomCount.toNumber();
      setRoomCount(parsedRoomCount);

      if (parsedRoomCount !== null) {
        setShowRoomCount(true);
        alert(`${parsedRoomCount} rooms available`);
      }
    } catch (error) {
      console.error("Error fetching room count:", error);
    }
  };


  const checkBookedRoom = async () => {
    try {
      const { contract } = state;
      const hasBooking = await contract.hasBooked();
      setBooked(hasBooking);
      if (hasBooking) {
        alert("You have a booking.");
      } else {
        alert("You do not have a booking.");
      }

    } catch (error) { }
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
    <>
      <div
        className="sc-aXZVg gEUfPn flex flex-column"
        style={{
          margin: "0px",
          padding: "0px",
          boxSizing: "border-box",
          flex: "1 1 0%",
          display: "flex",
          flexDirection: "column",
          fontFamily: "__Inter_afabb0",
        }}
      >
        <div
          id="headerWrapper"
          className="sc-aXZVg bNlrDm z-100 p-sticky t-0"
          style={{
            margin: "0px",
            padding: "0px",
            boxSizing: "border-box",
            zIndex: 100,
            position: "sticky",
            top: "0px",
            fontFamily: "__Inter_afabb0",
          }}
        >
          <div
            className="sc-aXZVg igRBjS base-container page-v-padding"
            style={{
              margin: "0px",
              boxSizing: "border-box",
              padding: "0px 72px",
              maxWidth: "1366px",
              marginLeft: "auto",
              marginRight: "auto",
              width: "100%",
              fontFamily: "__Inter_afabb0",
            }}
          >
            <div
              className="sc-aXZVg cHgRjS p-sticky t-0 w-100p z-50 base-container"
              style={{
                margin: "0px",
                padding: "0px",
                boxSizing: "border-box",
                maxWidth: "1366px",
                marginLeft: "auto",
                marginRight: "auto",
                width: "100%",
                zIndex: 50,
                position: "sticky",
                top: "0px",
                fontFamily: "__Inter_afabb0",
              }}
            >
              <div
                className="sc-aXZVg izzTAy component-stacked-slots"
                style={{
                  margin: "0px",
                  padding: "0px",
                  boxSizing: "border-box",
                  fontFamily: "__Inter_afabb0",
                }}
              >
                <div
                  className="sc-aXZVg cYXIwq"
                  style={{
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                    fontFamily: "__Inter_afabb0",
                  }}
                >
                  <div
                    className="sc-aXZVg cXJouG sc-79ea546e-0 kjyHbe flex flex-middle bg-neutral-100 details-header p-relative"
                    style={{
                      margin: "0px",
                      padding: "0px",
                      boxSizing: "border-box",
                      height: "72px",
                      backgroundColor: "rgb(244, 244,  244)",
                      display: "flex",
                      alignItems: "center",
                      position: "relative",
                      fontFamily: "__Inter_afabb0",
                    }}
                  >
                    <div
                      className="sc-aXZVg htGkyx componentVisible w-100p"
                      style={{
                        margin: "0px",
                        padding: "0px",
                        boxSizing: "border-box",
                        transition: "opacity 0.3s ease 0s",
                        opacity: 1,
                        visibility: "visible",
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "100%",
                        fontFamily: "__Inter_afabb0",
                      }}
                    >
                      <div
                        className="sc-aXZVg izvuHD flex flex-middle flex-between m-auto base-container bg-white"
                        height="72px"
                        style={{
                          padding: "0px",
                          boxSizing: "border-box",
                          backgroundColor: "rgb(244, 244,  244)",
                          maxWidth: "1366px",
                          width: "100%",
                          height: "72px",
                          margin: "auto",
                          marginRight: "auto",
                          marginLeft: "auto",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          fontFamily: "__Inter_afabb0",
                        }}
                      >
                        <div
                          className="sc-aXZVg OpXNK"
                          display="flex"
                          style={{
                            margin: "0px",
                            padding: "0px",
                            boxSizing: "border-box",
                            WebkitBoxAlign: "center",
                            alignItems: "center",
                            display: "flex",
                            columnGap: "24px",
                            fontFamily: "__Inter_afabb0",
                          }}
                        >
                          <h2><b>FLX ROOMS</b></h2>
                          <div
                            className="sc-aXZVg"
                            style={{
                              margin: "0px",
                              padding: "0px",
                              boxSizing: "border-box",
                              fontFamily: "__Inter_afabb0",
                            }}
                          />
                        </div>

                        <div
                          className="sc-aXZVg cYXIwq"
                          style={{
                            margin: "0px",
                            padding: "0px",
                            boxSizing: "border-box",
                            fontFamily: "__Inter_afabb0",
                          }}
                        >
                          <button
                            className="sc-jEACwC ckzdEc"
                            style={{
                              margin: "0px",
                              border: "1px solid rgb(26, 26, 26)",
                              textDecoration: "none",
                              padding: "8px 12px",
                              borderRadius: "8px",
                              display: "flex",
                              WebkitBoxPack: "center",
                              justifyContent: "center",
                              WebkitBoxAlign: "center",
                              alignItems: "center",
                              boxSizing: "border-box",
                              position: "relative",
                              userSelect: "none",
                              cursor: "pointer",
                              backgroundColor: "rgb(244, 244,  244)",
                              height: "40px",
                              minWidth: "auto",
                            }}
                            onClick={checkBookedRoom}
                          >
                            <div
                              className="sc-aXZVg bMRyuJ"
                              style={{
                                margin: "0px",
                                padding: "0px",
                                boxSizing: "border-box",
                                paddingLeft: "4px",
                                paddingRight: "4px",
                                fontFamily: "__Inter_afabb0",
                              }}
                            >
                              <h4
                                className="sc-gEvEer zbwru"
                                color="#1A1A1A"
                                cursor="pointer"
                                fontSize="14px"
                                fontStyle="none"
                                fontWeight="600"
                                textDecoration="none"
                                style={{
                                  margin: "0px",
                                  padding: "0px",
                                  boxSizing: "border-box",
                                  textDecoration: "none",
                                  fontSize: "14px",
                                  fontWeight: 600,
                                  lineHeight: "20px",
                                  color: "rgb(26, 26, 26)",
                                  cursor: "pointer",
                                  fontFamily: "__Inter_afabb0",
                                }}
                              >
                                <div
                                  className="sc-aXZVg ecQSyo"
                                  style={{
                                    margin: "0px",
                                    padding: "0px",
                                    boxSizing: "border-box",
                                    fontFamily: "__Inter_afabb0",
                                  }}
                                >
                                  <p
                                    className="sc-gEvEer zbwru"
                                    color="#1A1A1A"
                                    cursor="pointer"
                                    fontSize="14px"
                                    fontStyle="none"
                                    fontWeight="600"
                                    textDecoration="none"
                                    style={{
                                      margin: "0px",
                                      padding: "0px",
                                      boxSizing: "border-box",
                                      textDecoration: "none",
                                      fontSize: "14px",
                                      fontWeight: 600,
                                      lineHeight: "20px",
                                      color: "rgb(26, 26, 26)",
                                      cursor: "pointer",
                                      fontFamily: "__Inter_afabb0",
                                    }}
                                  >
                                    Check Availability
                                  </p>
                                </div>
                              </h4>
                            </div>
                          </button>
                        </div>
                        <div
                          className="sc-aXZVg cYXIwq"
                          style={{
                            margin: "0px",
                            padding: "0px",
                            boxSizing: "border-box",
                            fontFamily: "__Inter_afabb0",
                          }}
                        >
                          <button
                            className="sc-jEACwC ckzdEc"
                            style={{
                              margin: "0px",
                              border: "1px solid rgb(26, 26, 26)",
                              textDecoration: "none",
                              padding: "8px 12px",
                              borderRadius: "8px",
                              display: "flex",
                              WebkitBoxPack: "center",
                              justifyContent: "center",
                              WebkitBoxAlign: "center",
                              alignItems: "center",
                              boxSizing: "border-box",
                              position: "relative",
                              userSelect: "none",
                              cursor: "pointer",
                              backgroundColor: "rgb(244, 244,  244)",
                              height: "40px",
                              minWidth: "auto",
                            }}
                            onClick={checkOut}
                          >
                            <div
                              className="sc-aXZVg bMRyuJ"
                              style={{
                                margin: "0px",
                                padding: "0px",
                                boxSizing: "border-box",
                                paddingLeft: "4px",
                                paddingRight: "4px",
                                fontFamily: "__Inter_afabb0",
                              }}
                            >
                              <h4
                                className="sc-gEvEer zbwru"
                                color="#1A1A1A"
                                cursor="pointer"
                                fontSize="14px"
                                fontStyle="none"
                                fontWeight="600"
                                textDecoration="none"
                                style={{
                                  margin: "0px",
                                  padding: "0px",
                                  boxSizing: "border-box",
                                  textDecoration: "none",
                                  fontSize: "14px",
                                  fontWeight: 600,
                                  lineHeight: "20px",
                                  color: "rgb(26, 26, 26)",
                                  cursor: "pointer",
                                  fontFamily: "__Inter_afabb0",
                                }}
                              >
                                <div
                                  className="sc-aXZVg ecQSyo"
                                  style={{
                                    margin: "0px",
                                    padding: "0px",
                                    boxSizing: "border-box",
                                    fontFamily: "__Inter_afabb0",
                                  }}
                                >
                                  <p
                                    className="sc-gEvEer zbwru"
                                    color="#1A1A1A"
                                    cursor="pointer"
                                    fontSize="14px"
                                    fontStyle="none"
                                    fontWeight="600"
                                    textDecoration="none"
                                    style={{
                                      margin: "0px",
                                      padding: "0px",
                                      boxSizing: "border-box",
                                      textDecoration: "none",
                                      fontSize: "14px",
                                      fontWeight: 600,
                                      lineHeight: "20px",
                                      color: "rgb(26, 26, 26)",
                                      cursor: "pointer",
                                      fontFamily: "__Inter_afabb0",
                                    }}
                                  >
                                    Check Out
                                  </p>
                                </div>
                              </h4>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div
                      className="sc-aXZVg gksDya componentInvisible w-100p"
                      style={{
                        margin: "0px",
                        padding: "0px",
                        boxSizing: "border-box",
                        transition: "opacity 0.3s ease 0s",
                        opacity: 0,
                        visibility: "hidden",
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "100%",
                        fontFamily: "__Inter_afabb0",
                      }}
                    >
                      <div
                        className="sc-aXZVg eDQhLE base-container"
                        style={{
                          margin: "0px",
                          padding: "0px",
                          boxSizing: "border-box",
                          maxWidth: "1366px",
                          marginLeft: "auto",
                          marginRight: "auto",
                          width: "100%",
                          fontFamily: "__Inter_afabb0",
                        }}
                      >
                        <div
                          className="sc-aXZVg JeNdt flex flex-middle flex-cg-4"
                          height="72px"
                          style={{
                            margin: "0px",
                            padding: "0px",
                            boxSizing: "border-box",
                            height: "72px",
                            display: "flex",
                            alignItems: "center",
                            columnGap: "16px",
                            fontFamily: "__Inter_afabb0",
                          }}
                        >
                          <img
                            className="br-4 image-fit-cover"
                            height={48}
                            width={48}
                            alt="Resorte XYZ"
                            src="https://fastui.cltpstatic.com/image/upload/w_300,h_300,fl_progressive,e_sharpen:80,c_fill/hotels/places/hotels/cms/4205/42054/images/image_42054_d1a5538b-e076-48d9-a4e4-2491f88fb11b.jpeg"
                            style={{
                              margin: "0px",
                              padding: "0px",
                              boxSizing: "border-box",
                              objectFit: "cover",
                              borderRadius: "4px",
                              color: "transparent",
                              fontFamily: "__Inter_afabb0",
                            }}
                          />{" "}
                          <div
                            className="sc-aXZVg fleBUA"
                            style={{
                              margin: "0px",
                              padding: "0px",
                              boxSizing: "border-box",
                              fontFamily: "__Inter_afabb0",
                            }}
                          >
                            <p
                              className="sc-gEvEer kdZUgb"
                              color="#1A1A1A"
                              cursor="auto"
                              fontSize="16px"
                              fontStyle="none"
                              fontWeight="500"
                              textDecoration="none"
                              style={{
                                margin: "0px",
                                padding: "0px",
                                boxSizing: "border-box",
                                textDecoration: "none",
                                fontSize: "16px",
                                fontWeight: 500,
                                lineHeight: "24px",
                                color: "rgb(26, 26, 26)",
                                cursor: "auto",
                                fontFamily: "__Inter_afabb0",
                              }}
                            >
                              {" "}
                              Resorte XYZ
                            </p>
                            <p
                              className="sc-gEvEer igvQEp"
                              color="#808080"
                              cursor="auto"
                              fontSize="14px"
                              fontStyle="none"
                              fontWeight="500"
                              textDecoration="none"
                              style={{
                                margin: "0px",
                                padding: "0px",
                                boxSizing: "border-box",
                                textDecoration: "none",
                                fontSize: "14px",
                                fontWeight: 500,
                                lineHeight: "20px",
                                color: "rgb(128, 128, 128)",
                                cursor: "auto",
                                fontFamily: "__Inter_afabb0",
                              }}
                            >
                              Arpora, Goa | Sat, 16 Dec - Sun, 17 Dec | 1 Room,
                              2 Adults
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
        <div
          className="sc-aXZVg bPeBuo base-container p-relative m-auto page-v-padding h-100p"
          style={{
            boxSizing: "border-box",
            padding: "0px 72px",
            maxWidth: "1366px",
            width: "100%",
            margin: "auto",
            marginRight: "auto",
            marginLeft: "auto",
            height: "100%",
            position: "relative",
            fontFamily: "__Inter_afabb0",
          }}
        >
          <div
            id="sticky_price_parent_widget"
            className="sc-aXZVg gVmxtx base-container"
            style={{
              margin: "0px",
              padding: "0px",
              boxSizing: "border-box",
              maxWidth: "1366px",
              marginLeft: "auto",
              marginRight: "auto",
              width: "100%",
              fontFamily: "__Inter_afabb0",
            }}
          >
            <div
              className="sc-aXZVg kxQjEf row"
              style={{
                margin: "0px",
                padding: "0px",
                flex: "0 1 auto",
                flexFlow: "wrap",
                boxSizing: "border-box",
                display: "flex",
                fontFamily: "__Inter_afabb0",
              }}
            >
              <div
                className="sc-aXZVg DmbIl col-12"
                style={{
                  margin: "0px",
                  padding: "0px",
                  flex: "0 0 auto",
                  boxSizing: "border-box",
                  flexBasis: "50%",
                  maxWidth: "50%",
                  fontFamily: "__Inter_afabb0",
                }}
              >
                <div
                  className="sc-aXZVg jGXTMO component-stacked-slots"
                  style={{
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                    fontFamily: "__Inter_afabb0",
                  }}
                >
                  <div
                    className="sc-aXZVg cYXIwq"
                    style={{
                      margin: "0px",
                      padding: "0px",
                      boxSizing: "border-box",
                      fontFamily: "__Inter_afabb0",
                    }}
                  >
                    <div
                      id="details_general"
                      style={{
                        margin: "0px",
                        padding: "0px",
                        boxSizing: "border-box",
                        scrollMarginTop: "152px",
                        fontFamily: "__Inter_afabb0",
                      }}
                    >
                      <div
                        className="sc-aXZVg dAyMmj mr-3 pt-6"
                        style={{
                          margin: "0px",
                          padding: "0px",
                          boxSizing: "border-box",
                          paddingTop: "24px",
                          marginRight: "12px",
                          fontFamily: "__Inter_afabb0",
                        }}
                      >
                        <div
                          className="sc-aXZVg kwRPhS"
                          style={{
                            margin: "0px",
                            padding: "0px",
                            boxSizing: "border-box",
                            fontFamily: "__Inter_afabb0",
                          }}
                        >
                          <h3
                            className="sc-gEvEer hZNzNt"
                            color="#1A1A1A"
                            cursor="auto"
                            display="-webkit-box"
                            fontSize="32px"
                            fontStyle="none"
                            fontWeight="600"
                            overflow="hidden"
                            textDecoration="none"
                            style={{
                              margin: "0px",
                              padding: "0px",
                              boxSizing: "border-box",
                              textDecoration: "none",
                              overflow: "hidden",
                              fontSize: "32px",
                              fontWeight: 600,
                              lineHeight: "40px",
                              color: "rgb(26, 26, 26)",
                              display: "-webkit-box",
                              WebkitLineClamp: "2",
                              WebkitBoxOrient: "vertical",
                              cursor: "auto",
                              fontFamily: "__Inter_afabb0",
                            }}
                          >
                            Resorte XYZ
                          </h3>
                          <div
                            className="sc-eldPxv py-1"
                            style={{
                              margin: "0px",
                              padding: "0px",
                              boxSizing: "border-box",
                              paddingBottom: "4px",
                              paddingTop: "4px",
                              fontFamily: "__Inter_afabb0",
                            }}
                          />
                          <p
                            className="sc-gEvEer oRsVv"
                            color="#808080"
                            cursor="auto"
                            fontSize="16px"
                            fontStyle="none"
                            fontWeight="500"
                            textDecoration="none"
                            style={{
                              margin: "0px",
                              padding: "0px",
                              boxSizing: "border-box",
                              textDecoration: "none",
                              fontSize: "16px",
                              fontWeight: 500,
                              lineHeight: "24px",
                              color: "rgb(128, 128, 128)",
                              cursor: "auto",
                              fontFamily: "__Inter_afabb0",
                            }}
                          >
                            3-star Hotel · Arpora, Goa
                          </p>
                        </div>
                        <div
                          className="sc-eldPxv py-2"
                          style={{
                            margin: "0px",
                            padding: "0px",
                            boxSizing: "border-box",
                            paddingBottom: "8px",
                            paddingTop: "8px",
                            fontFamily: "__Inter_afabb0",
                          }}
                        />
                        <div
                          className="sc-aXZVg iYTQQL flex flex-middle"
                          style={{
                            margin: "0px",
                            padding: "0px",
                            boxSizing: "border-box",
                            display: "flex",
                            alignItems: "center",
                            fontFamily: "__Inter_afabb0",
                          }}
                        >
                          <h2
                            className="sc-gEvEer dAbDZN"
                            color="#1A1A1A"
                            cursor="auto"
                            fontSize="20px"
                            fontStyle="none"
                            fontWeight="600"
                            textDecoration="none"
                            style={{
                              margin: "0px",
                              padding: "0px",
                              boxSizing: "border-box",
                              textDecoration: "none",
                              fontSize: "20px",
                              fontWeight: 600,
                              lineHeight: "28px",
                              color: "rgb(26, 26, 26)",
                              cursor: "auto",
                              fontFamily: "__Inter_afabb0",
                            }}
                          >
                            4.0/5
                          </h2>
                          <div
                            className="pl-4"
                            style={{
                              margin: "0px",
                              padding: "0px",
                              boxSizing: "border-box",
                              paddingLeft: "16px",
                              fontFamily: "__Inter_afabb0",
                            }}
                          >
                            <div
                              className="sc-aXZVg eiaJgu flex flex-middle"
                              style={{
                                margin: "0px",
                                padding: "0px",
                                boxSizing: "border-box",
                                display: "flex",
                                alignItems: "center",
                                fontFamily: "__Inter_afabb0",
                              }}
                            >

                              <div
                                className="sc-eldPxv ml-1"
                                style={{
                                  margin: "0px",
                                  padding: "0px",
                                  boxSizing: "border-box",
                                  marginLeft: "4px",
                                  fontFamily: "__Inter_afabb0",
                                }}
                              />
                              <svg
                                className="m-R-1"
                                height="16"
                                width="16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{
                                  margin: "0px",
                                  padding: "0px",
                                  boxSizing: "border-box",
                                  marginRight: "1px",
                                  fontFamily: "__Inter_afabb0",
                                }}
                              >
                                <circle
                                  cx="8"
                                  cy="8"
                                  fill="#00AA6C"
                                  r="8"
                                  style={{
                                    margin: "0px",
                                    padding: "0px",
                                    boxSizing: "border-box",
                                    fontFamily: "__Inter_afabb0",
                                  }}
                                />
                              </svg>
                              <svg
                                className="m-R-1"
                                height="16"
                                width="16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{
                                  margin: "0px",
                                  padding: "0px",
                                  boxSizing: "border-box",
                                  marginRight: "1px",
                                  fontFamily: "__Inter_afabb0",
                                }}
                              >
                                <circle
                                  cx="8"
                                  cy="8"
                                  fill="#00AA6C"
                                  r="8"
                                  style={{
                                    margin: "0px",
                                    padding: "0px",
                                    boxSizing: "border-box",
                                    fontFamily: "__Inter_afabb0",
                                  }}
                                />
                              </svg>
                              <svg
                                className="m-R-1"
                                height="16"
                                width="16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{
                                  margin: "0px",
                                  padding: "0px",
                                  boxSizing: "border-box",
                                  marginRight: "1px",
                                  fontFamily: "__Inter_afabb0",
                                }}
                              >
                                <circle
                                  cx="8"
                                  cy="8"
                                  fill="#00AA6C"
                                  r="8"
                                  style={{
                                    margin: "0px",
                                    padding: "0px",
                                    boxSizing: "border-box",
                                    fontFamily: "__Inter_afabb0",
                                  }}
                                />
                              </svg>
                              <svg
                                className="m-R-1"
                                height="16"
                                width="16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{
                                  margin: "0px",
                                  padding: "0px",
                                  boxSizing: "border-box",
                                  marginRight: "1px",
                                  fontFamily: "__Inter_afabb0",
                                }}
                              >
                                <circle
                                  cx="8"
                                  cy="8"
                                  fill="#00AA6C"
                                  r="8"
                                  style={{
                                    margin: "0px",
                                    padding: "0px",
                                    boxSizing: "border-box",
                                    fontFamily: "__Inter_afabb0",
                                  }}
                                />
                              </svg>
                              <svg
                                className="m-R-1"
                                height="16"
                                width="16"
                                fill="none"
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{
                                  margin: "0px",
                                  padding: "0px",
                                  boxSizing: "border-box",
                                  marginRight: "1px",
                                  fontFamily: "__Inter_afabb0",
                                }}
                              >
                                <circle
                                  cx="8"
                                  cy="8"
                                  r="7.5"
                                  stroke="#00AA6C"
                                  style={{
                                    margin: "0px",
                                    padding: "0px",
                                    boxSizing: "border-box",
                                    fontFamily: "__Inter_afabb0",
                                  }}
                                />
                              </svg>
                            </div>
                          </div>
                          <div
                            className="sc-aXZVg fJImnN flex flex-center flex-middle c-pointer"
                            style={{
                              margin: "0px",
                              padding: "0px",
                              boxSizing: "border-box",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                              fontFamily: "__Inter_afabb0",
                            }}
                          >
                            <p
                              className="sc-gEvEer fnSGpU pl-4"
                              color="#1A1A1A"
                              cursor="auto"
                              fontSize="16px"
                              fontStyle="none"
                              fontWeight="600"
                              textDecoration="none"
                              style={{
                                margin: "0px",
                                padding: "0px",
                                boxSizing: "border-box",
                                textDecoration: "none",
                                fontSize: "16px",
                                fontWeight: 600,
                                lineHeight: "24px",
                                color: "rgb(26, 26, 26)",
                                cursor: "auto",
                                paddingLeft: "16px",
                                fontFamily: "__Inter_afabb0",
                              }}
                            >
                              (500+ reviews)
                            </p>

                          </div>
                        </div>
                        <div
                          className="sc-eldPxv py-3"
                          style={{
                            margin: "0px",
                            padding: "0px",
                            boxSizing: "border-box",
                            paddingBottom: "12px",
                            paddingTop: "12px",
                            fontFamily: "__Inter_afabb0",
                          }}
                        />
                        <div
                          className="sc-aXZVg ljvTQU flex flex-row flex-gap-6 row flex-top"
                          style={{
                            margin: "0px",
                            padding: "0px",
                            flex: "0 1 auto",
                            flexFlow: "wrap",
                            boxSizing: "border-box",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            gap: "24px",
                            fontFamily: "__Inter_afabb0",
                          }}
                        >
                          <div
                            className="sc-aXZVg bXsbIA flex flex-top"
                            width="268px"
                            style={{
                              margin: "0px",
                              padding: "0px",
                              boxSizing: "border-box",
                              width: "268px",
                              display: "flex",
                              alignItems: "flex-start",
                              fontFamily: "__Inter_afabb0",
                            }}
                          >
                            <div
                              className="sc-aXZVg hZyHz flex flex-middle"
                              style={{
                                margin: "0px",
                                padding: "0px",
                                boxSizing: "border-box",
                                display: "flex",
                                alignItems: "center",
                                fontFamily: "__Inter_afabb0",
                              }}
                            >

                            </div>
                            <div
                              className="sc-aXZVg bmofbV ml-2 flex flex-column flex-center"
                              style={{
                                margin: "0px",
                                padding: "0px",
                                boxSizing: "border-box",
                                marginLeft: "8px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                fontFamily: "__Inter_afabb0",
                              }}
                            >
                              <p
                                className="sc-gEvEer kdZUgb"
                                color="#1A1A1A"
                                cursor="auto"
                                fontSize="16px"
                                fontStyle="none"
                                fontWeight="500"
                                textDecoration="none"
                                style={{
                                  margin: "0px",
                                  padding: "0px",
                                  boxSizing: "border-box",
                                  textDecoration: "none",
                                  fontSize: "16px",
                                  fontWeight: 500,
                                  lineHeight: "24px",
                                  color: "rgb(26, 26, 26)",
                                  cursor: "auto",
                                  fontFamily: "__Inter_afabb0",
                                }}
                              >
                                Great location
                              </p>
                              <div
                                className="sc-eldPxv mb-1"
                                style={{
                                  margin: "0px",
                                  padding: "0px",
                                  boxSizing: "border-box",
                                  marginBottom: "4px",
                                  fontFamily: "__Inter_afabb0",
                                }}
                              />
                              <p
                                className="sc-gEvEer gqkGso"
                                color="#808080"
                                cursor="auto"
                                display="-webkit-box"
                                fontSize="14px"
                                fontStyle="none"
                                fontWeight="500"
                                overflow="hidden"
                                textDecoration="none"
                                style={{
                                  margin: "0px",
                                  padding: "0px",
                                  boxSizing: "border-box",
                                  textDecoration: "none",
                                  overflow: "hidden",
                                  fontSize: "14px",
                                  fontWeight: 500,
                                  lineHeight: "20px",
                                  color: "rgb(128, 128, 128)",
                                  display: "-webkit-box",
                                  WebkitLineClamp: "2",
                                  WebkitBoxOrient: "vertical",
                                  cursor: "auto",
                                  fontFamily: "__Inter_afabb0",
                                }}
                              >
                                Good lake view
                              </p>
                            </div>
                          </div>
                          <div
                            className="sc-aXZVg bXsbIA flex flex-top"
                            width="268px"
                            style={{
                              margin: "0px",
                              padding: "0px",
                              boxSizing: "border-box",
                              width: "268px",
                              display: "flex",
                              alignItems: "flex-start",
                              fontFamily: "__Inter_afabb0",
                            }}
                          >
                            <div
                              className="sc-aXZVg hZyHz flex flex-middle"
                              style={{
                                margin: "0px",
                                padding: "0px",
                                boxSizing: "border-box",
                                display: "flex",
                                alignItems: "center",
                                fontFamily: "__Inter_afabb0",
                              }}
                            >

                            </div>
                            <div
                              className="sc-aXZVg bmofbV ml-2 flex flex-column flex-center"
                              style={{
                                margin: "0px",
                                padding: "0px",
                                boxSizing: "border-box",
                                marginLeft: "8px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                fontFamily: "__Inter_afabb0",
                              }}
                            >
                              <p
                                className="sc-gEvEer kdZUgb"
                                color="#1A1A1A"
                                cursor="auto"
                                fontSize="16px"
                                fontStyle="none"
                                fontWeight="500"
                                textDecoration="none"
                                style={{
                                  margin: "0px",
                                  padding: "0px",
                                  boxSizing: "border-box",
                                  textDecoration: "none",
                                  fontSize: "16px",
                                  fontWeight: 500,
                                  lineHeight: "24px",
                                  color: "rgb(26, 26, 26)",
                                  cursor: "auto",
                                  fontFamily: "__Inter_afabb0",
                                }}
                              >
                                Free breakfast on select plans
                              </p>
                              <div
                                className="sc-eldPxv mb-1"
                                style={{
                                  margin: "0px",
                                  padding: "0px",
                                  boxSizing: "border-box",
                                  marginBottom: "4px",
                                  fontFamily: "__Inter_afabb0",
                                }}
                              />
                              <p
                                className="sc-gEvEer gqkGso"
                                color="#808080"
                                cursor="auto"
                                display="-webkit-box"
                                fontSize="14px"
                                fontStyle="none"
                                fontWeight="500"
                                overflow="hidden"
                                textDecoration="none"
                                style={{
                                  margin: "0px",
                                  padding: "0px",
                                  boxSizing: "border-box",
                                  textDecoration: "none",
                                  overflow: "hidden",
                                  fontSize: "14px",
                                  fontWeight: 500,
                                  lineHeight: "20px",
                                  color: "rgb(128, 128, 128)",
                                  display: "-webkit-box",
                                  WebkitLineClamp: "2",
                                  WebkitBoxOrient: "vertical",
                                  cursor: "auto",
                                  fontFamily: "__Inter_afabb0",
                                }}
                              >
                                Some plans include free breakfast
                              </p>
                            </div>
                          </div>
                          <div
                            className="sc-aXZVg bXsbIA flex flex-top"
                            width="268px"
                            style={{
                              margin: "0px",
                              padding: "0px",
                              boxSizing: "border-box",
                              width: "268px",
                              display: "flex",
                              alignItems: "flex-start",
                              fontFamily: "__Inter_afabb0",
                            }}
                          >
                            <div
                              className="sc-aXZVg hZyHz flex flex-middle"
                              style={{
                                margin: "0px",
                                padding: "0px",
                                boxSizing: "border-box",
                                display: "flex",
                                alignItems: "center",
                                fontFamily: "__Inter_afabb0",
                              }}
                            >

                            </div>

                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div
                    className="sc-aXZVg cYXIwq"
                    style={{
                      margin: "0px",
                      padding: "0px",
                      boxSizing: "border-box",
                      fontFamily: "__Inter_afabb0",
                    }}
                  >
                    <div
                      id="details_amenities"
                      style={{
                        margin: "0px",
                        padding: "0px",
                        boxSizing: "border-box",
                        scrollMarginTop: "152px",
                        fontFamily: "__Inter_afabb0",
                      }}
                    >
                      <div
                        className="sc-aXZVg gLPTAo mr-3"
                        style={{
                          margin: "0px",
                          padding: "0px",
                          boxSizing: "border-box",
                          marginRight: "12px",
                          fontFamily: "__Inter_afabb0",
                        }}
                      >
                        <h1
                          className="sc-gEvEer gWQWmS"
                          color="#1A1A1A"
                          cursor="auto"
                          fontSize="24px"
                          fontStyle="none"
                          fontWeight="600"
                          textDecoration="none"
                          style={{
                            margin: "0px",
                            padding: "0px",
                            boxSizing: "border-box",
                            textDecoration: "none",
                            fontSize: "24px",
                            fontWeight: 600,
                            lineHeight: "32px",
                            color: "rgb(26, 26, 26)",
                            cursor: "auto",
                            fontFamily: "__Inter_afabb0",
                          }}
                        >
                          Amenities
                        </h1>
                        <div
                          className="sc-eldPxv mb-6"
                          style={{
                            margin: "0px",
                            padding: "0px",
                            boxSizing: "border-box",
                            marginBottom: "24px",
                            fontFamily: "__Inter_afabb0",
                          }}
                        />
                        <div
                          className="sc-aXZVg hxiECp flex flex-wrap flex-between flex-rg-6"
                          style={{
                            margin: "0px",
                            padding: "0px",
                            boxSizing: "border-box",
                            columnGap: "10px",
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                            rowGap: "24px",
                            fontFamily: "__Inter_afabb0",
                          }}
                        >
                          <div
                            className="sc-aXZVg hBeJqk flex flex-middle"
                            width="288px"
                            style={{
                              margin: "0px",
                              padding: "0px",
                              boxSizing: "border-box",
                              width: "288px",
                              display: "flex",
                              alignItems: "center",
                              fontFamily: "__Inter_afabb0",
                            }}
                          >

                            <p
                              className="sc-gEvEer kdZUgb pl-3"
                              color="#1A1A1A"
                              cursor="auto"
                              fontSize="16px"
                              fontStyle="none"
                              fontWeight="500"
                              textDecoration="none"
                              style={{
                                margin: "0px",
                                padding: "0px",
                                boxSizing: "border-box",
                                textDecoration: "none",
                                fontSize: "16px",
                                fontWeight: 500,
                                lineHeight: "24px",
                                color: "rgb(26, 26, 26)",
                                cursor: "auto",
                                paddingLeft: "12px",
                                fontFamily: "__Inter_afabb0",
                              }}
                            >
                              Parking
                            </p>
                          </div>
                          <div
                            className="sc-aXZVg hBeJqk flex flex-middle"
                            width="288px"
                            style={{
                              margin: "0px",
                              padding: "0px",
                              boxSizing: "border-box",
                              width: "288px",
                              display: "flex",
                              alignItems: "center",
                              fontFamily: "__Inter_afabb0",
                            }}
                          >

                            <p
                              className="sc-gEvEer kdZUgb pl-3"
                              color="#1A1A1A"
                              cursor="auto"
                              fontSize="16px"
                              fontStyle="none"
                              fontWeight="500"
                              textDecoration="none"
                              style={{
                                margin: "0px",
                                padding: "0px",
                                boxSizing: "border-box",
                                textDecoration: "none",
                                fontSize: "16px",
                                fontWeight: 500,
                                lineHeight: "24px",
                                color: "rgb(26, 26, 26)",
                                cursor: "auto",
                                paddingLeft: "12px",
                                fontFamily: "__Inter_afabb0",
                              }}
                            >
                              Restaurant
                            </p>
                          </div>
                          <div
                            className="sc-aXZVg hBeJqk flex flex-middle"
                            width="288px"
                            style={{
                              margin: "0px",
                              padding: "0px",
                              boxSizing: "border-box",
                              width: "288px",
                              display: "flex",
                              alignItems: "center",
                              fontFamily: "__Inter_afabb0",
                            }}
                          >

                            <p
                              className="sc-gEvEer kdZUgb pl-3"
                              color="#1A1A1A"
                              cursor="auto"
                              fontSize="16px"
                              fontStyle="none"
                              fontWeight="500"
                              textDecoration="none"
                              style={{
                                margin: "0px",
                                padding: "0px",
                                boxSizing: "border-box",
                                textDecoration: "none",
                                fontSize: "16px",
                                fontWeight: 500,
                                lineHeight: "24px",
                                color: "rgb(26, 26, 26)",
                                cursor: "auto",
                                paddingLeft: "12px",
                                fontFamily: "__Inter_afabb0",
                              }}
                            >
                              24-hour security
                            </p>
                          </div>
                          <div
                            className="sc-aXZVg hBeJqk flex flex-middle"
                            width="288px"
                            style={{
                              margin: "0px",
                              padding: "0px",
                              boxSizing: "border-box",
                              width: "288px",
                              display: "flex",
                              alignItems: "center",
                              fontFamily: "__Inter_afabb0",
                            }}
                          >

                            <p
                              className="sc-gEvEer kdZUgb pl-3"
                              color="#1A1A1A"
                              cursor="auto"
                              fontSize="16px"
                              fontStyle="none"
                              fontWeight="500"
                              textDecoration="none"
                              style={{
                                margin: "0px",
                                padding: "0px",
                                boxSizing: "border-box",
                                textDecoration: "none",
                                fontSize: "16px",
                                fontWeight: 500,
                                lineHeight: "24px",
                                color: "rgb(26, 26, 26)",
                                cursor: "auto",
                                paddingLeft: "12px",
                                fontFamily: "__Inter_afabb0",
                              }}
                            >
                              Air conditioning
                            </p>
                          </div>
                          <div
                            className="sc-aXZVg hBeJqk flex flex-middle"
                            width="288px"
                            style={{
                              margin: "0px",
                              padding: "0px",
                              boxSizing: "border-box",
                              width: "288px",
                              display: "flex",
                              alignItems: "center",
                              fontFamily: "__Inter_afabb0",
                            }}
                          >

                            <p
                              className="sc-gEvEer kdZUgb pl-3"
                              color="#1A1A1A"
                              cursor="auto"
                              fontSize="16px"
                              fontStyle="none"
                              fontWeight="500"
                              textDecoration="none"
                              style={{
                                margin: "0px",
                                padding: "0px",
                                boxSizing: "border-box",
                                textDecoration: "none",
                                fontSize: "16px",
                                fontWeight: 500,
                                lineHeight: "24px",
                                color: "rgb(26, 26, 26)",
                                cursor: "auto",
                                paddingLeft: "12px",
                                fontFamily: "__Inter_afabb0",
                              }}
                            >
                              Bathroom
                            </p>
                          </div>
                          <div
                            className="sc-aXZVg hBeJqk flex flex-middle"
                            width="288px"
                            style={{
                              margin: "0px",
                              padding: "0px",
                              boxSizing: "border-box",
                              width: "288px",
                              display: "flex",
                              alignItems: "center",
                              fontFamily: "__Inter_afabb0",
                            }}
                          >

                            <p
                              className="sc-gEvEer kdZUgb pl-3"
                              color="#1A1A1A"
                              cursor="auto"
                              fontSize="16px"
                              fontStyle="none"
                              fontWeight="500"
                              textDecoration="none"
                              style={{
                                margin: "0px",
                                padding: "0px",
                                boxSizing: "border-box",
                                textDecoration: "none",
                                fontSize: "16px",
                                fontWeight: 500,
                                lineHeight: "24px",
                                color: "rgb(26, 26, 26)",
                                cursor: "auto",
                                paddingLeft: "12px",
                                fontFamily: "__Inter_afabb0",
                              }}
                            >
                              CCTV
                            </p>
                          </div>
                        </div>
                        <div
                          className="sc-eldPxv pb-6"
                          style={{
                            margin: "0px",
                            padding: "0px",
                            boxSizing: "border-box",
                            paddingBottom: "24px",
                            fontFamily: "__Inter_afabb0",
                          }}
                        />
                        <button
                          className="sc-jEACwC eSvKVY"
                          style={{
                            margin: "0px",
                            border: "1px solid rgb(26, 26, 26)",
                            textDecoration: "none",
                            padding: "8px 12px",
                            borderRadius: "8px",
                            display: "flex",
                            WebkitBoxPack: "center",
                            justifyContent: "center",
                            WebkitBoxAlign: "center",
                            alignItems: "center",
                            boxSizing: "border-box",
                            position: "relative",
                            userSelect: "none",
                            cursor: "pointer",
                            backgroundColor: "rgb(244, 244,  244)",
                            height: "40px",
                            minWidth: "300px",
                            fontFamily: "__Inter_afabb0",
                          }}
                          onClick={fetchRoomCount}
                        >
                          <div
                            className="sc-aXZVg bMRyuJ"
                            style={{
                              margin: "0px",
                              padding: "0px",
                              boxSizing: "border-box",
                              paddingLeft: "4px",
                              paddingRight: "4px",
                              fontFamily: "__Inter_afabb0",
                            }}
                          >
                            <h4
                              className="sc-gEvEer zbwru"
                              color="#1A1A1A"
                              cursor="pointer"
                              fontSize="14px"
                              fontStyle="none"
                              fontWeight="600"
                              textDecoration="none"
                              style={{
                                margin: "0px",
                                padding: "0px",
                                boxSizing: "border-box",
                                textDecoration: "none",
                                fontSize: "14px",
                                fontWeight: 600,
                                lineHeight: "20px",
                                color: "rgb(26, 26, 26)",
                                cursor: "pointer",
                                fontFamily: "__Inter_afabb0",
                              }}
                            >
                              Check Room Availability
                            </h4>
                          </div>
                        </button>
                        <div
                          className="sc-cPiKLX xlTWr my-8"
                          style={{
                            margin: "0px",
                            padding: "0px",
                            boxSizing: "border-box",
                            borderBottom: "1px solid rgb(243, 243, 243)",
                            width: "100%",
                            marginBottom: "32px",
                            marginTop: "32px",
                            fontFamily: "__Inter_afabb0",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="sc-aXZVg cYXIwq"
                    style={{
                      margin: "0px",
                      padding: "0px",
                      boxSizing: "border-box",
                      fontFamily: "__Inter_afabb0",
                    }}
                  >
                    <div
                      id="details_rules"
                      style={{
                        margin: "0px",
                        padding: "0px",
                        boxSizing: "border-box",
                        scrollMarginTop: "152px",
                        fontFamily: "__Inter_afabb0",
                      }}
                    >
                      <div
                        className="sc-aXZVg gLPTAo mr-3"
                        style={{
                          margin: "0px",
                          padding: "0px",
                          boxSizing: "border-box",
                          marginRight: "12px",
                          fontFamily: "__Inter_afabb0",
                        }}
                      >
                        <h1
                          className="sc-gEvEer gWQWmS"
                          color="#1A1A1A"
                          cursor="auto"
                          fontSize="24px"
                          fontStyle="none"
                          fontWeight="600"
                          textDecoration="none"
                          style={{
                            margin: "0px",
                            padding: "0px",
                            boxSizing: "border-box",
                            textDecoration: "none",
                            fontSize: "24px",
                            fontWeight: 600,
                            lineHeight: "32px",
                            color: "rgb(26, 26, 26)",
                            cursor: "auto",
                            fontFamily: "__Inter_afabb0",
                          }}
                        >
                          Property rules
                        </h1>
                        <div
                          className="sc-eldPxv mb-6"
                          style={{
                            margin: "0px",
                            padding: "0px",
                            boxSizing: "border-box",
                            marginBottom: "24px",
                            fontFamily: "__Inter_afabb0",
                          }}
                        />
                        <div
                          className="sc-aXZVg kewzas flex flex-rg-6 flex-column"
                          style={{
                            margin: "0px",
                            padding: "0px",
                            boxSizing: "border-box",
                            display: "flex",
                            flexDirection: "column",
                            rowGap: "24px",
                            fontFamily: "__Inter_afabb0",
                          }}
                        >
                          <div
                            className="sc-aXZVg lodvXD flex flex-top"
                            style={{
                              margin: "0px",
                              padding: "0px",
                              boxSizing: "border-box",
                              display: "flex",
                              alignItems: "flex-start",
                              fontFamily: "__Inter_afabb0",
                            }}
                          >

                            <p
                              className="sc-gEvEer kdZUgb pl-3"
                              color="#1A1A1A"
                              cursor="auto"
                              fontSize="16px"
                              fontStyle="none"
                              fontWeight="500"
                              textDecoration="none"
                              style={{
                                margin: "0px",
                                padding: "0px",
                                boxSizing: "border-box",
                                textDecoration: "none",
                                fontSize: "16px",
                                fontWeight: 500,
                                lineHeight: "24px",
                                color: "rgb(26, 26, 26)",
                                cursor: "auto",
                                paddingLeft: "12px",
                                fontFamily: "__Inter_afabb0",
                              }}
                            >
                              Check-in: After 02:00 PM, Check-out: 11:00 AM
                            </p>
                          </div>
                          <div
                            className="sc-aXZVg lodvXD flex flex-top"
                            style={{
                              margin: "0px",
                              padding: "0px",
                              boxSizing: "border-box",
                              display: "flex",
                              alignItems: "flex-start",
                              fontFamily: "__Inter_afabb0",
                            }}
                          >

                            <p
                              className="sc-gEvEer kdZUgb pl-3"
                              color="#1A1A1A"
                              cursor="auto"
                              fontSize="16px"
                              fontStyle="none"
                              fontWeight="500"
                              textDecoration="none"
                              style={{
                                margin: "0px",
                                padding: "0px",
                                boxSizing: "border-box",
                                textDecoration: "none",
                                fontSize: "16px",
                                fontWeight: 500,
                                lineHeight: "24px",
                                color: "rgb(26, 26, 26)",
                                cursor: "auto",
                                paddingLeft: "12px",
                                fontFamily: "__Inter_afabb0",
                              }}
                            >
                              Guests below 18 years of age allowed
                            </p>
                          </div>
                          <div
                            className="sc-aXZVg lodvXD flex flex-top"
                            style={{
                              margin: "0px",
                              padding: "0px",
                              boxSizing: "border-box",
                              display: "flex",
                              alignItems: "flex-start",
                              fontFamily: "__Inter_afabb0",
                            }}
                          >

                            <p
                              className="sc-gEvEer kdZUgb pl-3"
                              color="#1A1A1A"
                              cursor="auto"
                              fontSize="16px"
                              fontStyle="none"
                              fontWeight="500"
                              textDecoration="none"
                              style={{
                                margin: "0px",
                                padding: "0px",
                                boxSizing: "border-box",
                                textDecoration: "none",
                                fontSize: "16px",
                                fontWeight: 500,
                                lineHeight: "24px",
                                color: "rgb(26, 26, 26)",
                                cursor: "auto",
                                paddingLeft: "12px",
                                fontFamily: "__Inter_afabb0",
                              }}
                            >
                              Pets NOT allowed within the premises
                            </p>
                          </div>
                          <div
                            className="sc-aXZVg lodvXD flex flex-top"
                            style={{
                              margin: "0px",
                              padding: "0px",
                              boxSizing: "border-box",
                              display: "flex",
                              alignItems: "flex-start",
                              fontFamily: "__Inter_afabb0",
                            }}
                          >

                            <p
                              className="sc-gEvEer kdZUgb pl-3"
                              color="#1A1A1A"
                              cursor="auto"
                              fontSize="16px"
                              fontStyle="none"
                              fontWeight="500"
                              textDecoration="none"
                              style={{
                                margin: "0px",
                                padding: "0px",
                                boxSizing: "border-box",
                                textDecoration: "none",
                                fontSize: "16px",
                                fontWeight: 500,
                                lineHeight: "24px",
                                color: "rgb(26, 26, 26)",
                                cursor: "auto",
                                paddingLeft: "12px",
                                fontFamily: "__Inter_afabb0",
                              }}
                            >
                              Guests can pay by Debit/ Credit Card (VISA &
                              Mastercard)
                            </p>
                          </div>
                          <div
                            className="sc-aXZVg lodvXD flex flex-top"
                            style={{
                              margin: "0px",
                              padding: "0px",
                              boxSizing: "border-box",
                              display: "flex",
                              alignItems: "flex-start",
                              fontFamily: "__Inter_afabb0",
                            }}
                          >

                            <p
                              className="sc-gEvEer kdZUgb pl-3"
                              color="#1A1A1A"
                              cursor="auto"
                              fontSize="16px"
                              fontStyle="none"
                              fontWeight="500"
                              textDecoration="none"
                              style={{
                                margin: "0px",
                                padding: "0px",
                                boxSizing: "border-box",
                                textDecoration: "none",
                                fontSize: "16px",
                                fontWeight: 500,
                                lineHeight: "24px",
                                color: "rgb(26, 26, 26)",
                                cursor: "auto",
                                paddingLeft: "12px",
                                fontFamily: "__Inter_afabb0",
                              }}
                            >
                            </p>
                          </div>
                        </div>
                        <div
                          className="sc-eldPxv pb-6"
                          style={{
                            margin: "0px",
                            padding: "0px",
                            boxSizing: "border-box",
                            paddingBottom: "24px",
                            fontFamily: "__Inter_afabb0",
                          }}
                        />
                        <button
                          className="sc-jEACwC eSvKVY"
                          style={{
                            margin: "0px",
                            border: "1px solid rgb(26, 26, 26)",
                            textDecoration: "none",
                            padding: "8px 12px",
                            borderRadius: "8px",
                            display: "flex",
                            WebkitBoxPack: "center",
                            justifyContent: "center",
                            WebkitBoxAlign: "center",
                            alignItems: "center",
                            boxSizing: "border-box",
                            position: "relative",
                            userSelect: "none",
                            cursor: "pointer",
                            backgroundColor: "rgb(244, 244,  244)",
                            height: "40px",
                            minWidth: "300px",
                            fontFamily: "__Inter_afabb0",
                          }}
                        >
                          <div
                            className="sc-aXZVg bMRyuJ"
                            style={{
                              margin: "0px",
                              padding: "0px",
                              boxSizing: "border-box",
                              paddingLeft: "4px",
                              paddingRight: "4px",
                              fontFamily: "__Inter_afabb0",
                            }}
                          >
                            <h4
                              className="sc-gEvEer zbwru"
                              color="#1A1A1A"
                              cursor="pointer"
                              fontSize="14px"
                              fontStyle="none"
                              fontWeight="600"
                              textDecoration="none"
                              style={{
                                margin: "0px",
                                padding: "0px",
                                boxSizing: "border-box",
                                textDecoration: "none",
                                fontSize: "14px",
                                fontWeight: 600,
                                lineHeight: "20px",
                                color: "rgb(26, 26, 26)",
                                cursor: "pointer",
                                fontFamily: "__Inter_afabb0",
                              }}
                            >
                              See all rules
                            </h4>
                          </div>
                        </button>
                        <div
                          className="sc-cPiKLX xlTWr my-8"
                          style={{
                            margin: "0px",
                            padding: "0px",
                            boxSizing: "border-box",
                            borderBottom: "1px solid rgb(243, 243, 243)",
                            width: "100%",
                            marginBottom: "32px",
                            marginTop: "32px",
                            fontFamily: "__Inter_afabb0",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="sc-aXZVg DmbIl col-12"
                style={{
                  margin: "0px",
                  padding: "0px",
                  flex: "0 0 auto",
                  boxSizing: "border-box",
                  flexBasis: "50%",
                  maxWidth: "50%",
                  fontFamily: "__Inter_afabb0",
                }}
              >
                <div
                  className="p-sticky z-50 bg-white mb-6"
                  style={{
                    margin: "0px",
                    padding: "0px",
                    boxSizing: "border-box",
                    backgroundColor: "rgb(244, 244,  244)",
                    marginBottom: "24px",
                    zIndex: 50,
                    position: "sticky",
                    scrollMarginTop: "152px",
                    top: "127.5px",
                    fontFamily: "__Inter_afabb0",
                  }}
                >
                  <div
                    className="sc-aXZVg izzTAy component-stacked-slots"
                    style={{
                      margin: "0px",
                      padding: "0px",
                      boxSizing: "border-box",
                      fontFamily: "__Inter_afabb0",
                    }}
                  >
                    <div
                      className="sc-aXZVg cYXIwq"
                      style={{
                        margin: "0px",
                        padding: "0px",
                        boxSizing: "border-box",
                        fontFamily: "__Inter_afabb0",
                      }}
                    >
                      <div
                        style={{
                          margin: "0px",
                          padding: "0px",
                          boxSizing: "border-box",
                          scrollMarginTop: "152px",
                          fontFamily: "__Inter_afabb0",
                        }}
                      >
                        <div
                          className="sc-aXZVg efygfU pt-6"
                          style={{
                            margin: "0px",
                            padding: "0px",
                            boxSizing: "border-box",
                            paddingTop: "24px",
                            fontFamily: "__Inter_afabb0",
                          }}
                        >
                          <div
                            className="sc-aXZVg bNMuJS sc-ebb1780f-0 hNBCPc br-12 o-hidden image-slider p-relative ml-3"
                            style={{
                              margin: "0px",
                              padding: "0px",
                              boxSizing: "border-box",
                              maxWidth: "683px",
                              maxHeight: "408px",
                              borderRadius: "12px",
                              marginLeft: "12px",
                              position: "relative",
                              overflow: "hidden",
                              fontFamily: "__Inter_afabb0",
                            }}
                          >
                            <div
                              className="sc-aXZVg hWNzLj p-absolute h-8 w-8 bg-white z-10 br-50p flex flex-middle flex-center vertically-centre image-slider__leftChevron-hidden t-50"
                              style={{
                                margin: "0px",
                                padding: "0px",
                                boxSizing: "border-box",
                                transition: "opacity 0.5s ease-out 0s",
                                left: "16px",
                                opacity: 0,
                                backgroundColor: "rgb(244, 244,  244)",
                                top: "50%",
                                transform: "translateY(-50%)",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "32px",
                                height: "32px",
                                zIndex: 10,
                                position: "absolute",
                                fontFamily: "__Inter_afabb0",
                              }}
                            >

                            </div>
                            <div
                              className="slick-slider slick-initialized"
                              dir="ltr"
                              style={{
                                margin: "0px",
                                padding: "0px",
                                boxSizing: "border-box",
                                userSelect: "none",
                                touchAction: "pan-y",
                                WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                                position: "relative",
                                display: "block",
                                fontFamily: "__Inter_afabb0",
                              }}
                            >
                              <div
                                className="slick-list"
                                style={{
                                  boxSizing: "border-box",
                                  position: "relative",
                                  display: "block",
                                  overflow: "hidden",
                                  margin: "0px",
                                  padding: "0px",
                                  transform: "translateZ(0px)",
                                  fontFamily: "__Inter_afabb0",
                                }}
                              >
                                <div
                                  className="slick-track"
                                  style={{
                                    margin: "0px",
                                    padding: "0px",
                                    boxSizing: "border-box",
                                    position: "relative",
                                    top: "0px",
                                    display: "block",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    transform: "translateZ(0px)",
                                    width: "6589px",
                                    left: "-599px",
                                    opacity: 1,
                                    fontFamily: "__Inter_afabb0",
                                  }}
                                >
                                  <div
                                    className="slick-slide slick-cloned"
                                    aria-hidden="true"
                                    tabIndex="-1"
                                    style={{
                                      margin: "0px",
                                      padding: "0px",
                                      boxSizing: "border-box",
                                      cssFloat: "left",
                                      height: "100%",
                                      minHeight: "1px",
                                      display: "block",
                                      width: "599px",
                                      fontFamily: "__Inter_afabb0",
                                    }}
                                  >
                                    <div
                                      style={{
                                        margin: "0px",
                                        padding: "0px",
                                        boxSizing: "border-box",
                                        outline: "none",
                                        fontFamily: "__Inter_afabb0",
                                      }}
                                    >
                                      <div
                                        className="Stencil has-shimmer"
                                        style={{
                                          margin: "0px",
                                          padding: "0px",
                                          boxSizing: "border-box",
                                          outline: "none",
                                          background:
                                            "linear-gradient(90deg, rgb(246, 247, 248) 0px, rgb(237, 238, 241) 20%, rgb(246, 247, 248) 40%, rgb(246, 247, 248)) 0% 0% / 1200px 1200px",
                                          animationDuration: "1s",
                                          animationFillMode: "forwards",
                                          animationIterationCount: "infinite",
                                          animationName: "shimmer",
                                          animationTimingFunction: "linear",
                                          position: "relative",
                                          width: "600px",
                                          height: "408px",
                                          fontFamily: "__Inter_afabb0",
                                        }}
                                      >
                                        <img
                                          className="image-fit-cover c-pointer"
                                          height={408}
                                          width={600}
                                          src="https://fastui.cltpstatic.com/image/upload/w_600,h_408,fl_progressive,e_sharpen:80,c_fill/hotels/places/hotels/cms/4205/42054/images/image_42054_4b83bc8f-a6a5-44a6-8384-9a4cda215d87.jpeg"
                                          tabIndex="-1"
                                          style={{
                                            margin: "0px",
                                            padding: "0px",
                                            boxSizing: "border-box",
                                            objectFit: "cover",
                                            cursor: "pointer",
                                            color: "transparent",
                                            width: "100%",
                                            display: "inline-block",
                                            fontFamily: "__Inter_afabb0",
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="slick-slide slick-active slick-current"
                                    aria-hidden="false"
                                    tabIndex="-1"
                                    style={{
                                      margin: "0px",
                                      padding: "0px",
                                      boxSizing: "border-box",
                                      cssFloat: "left",
                                      height: "100%",
                                      minHeight: "1px",
                                      display: "block",
                                      outline: "none",
                                      width: "599px",
                                      fontFamily: "__Inter_afabb0",
                                    }}
                                  >
                                    <div
                                      style={{
                                        margin: "0px",
                                        padding: "0px",
                                        boxSizing: "border-box",
                                        outline: "none",
                                        fontFamily: "__Inter_afabb0",
                                      }}
                                    >
                                      <div
                                        className="Stencil has-shimmer"
                                        style={{
                                          margin: "0px",
                                          padding: "0px",
                                          boxSizing: "border-box",
                                          outline: "none",
                                          background:
                                            "linear-gradient(90deg, rgb(246, 247, 248) 0px, rgb(237, 238, 241) 20%, rgb(246, 247, 248) 40%, rgb(246, 247, 248)) 0% 0% / 1200px 1200px",
                                          animationDuration: "1s",
                                          animationFillMode: "forwards",
                                          animationIterationCount: "infinite",
                                          animationName: "shimmer",
                                          animationTimingFunction: "linear",
                                          position: "relative",
                                          width: "600px",
                                          height: "408px",
                                          fontFamily: "__Inter_afabb0",
                                        }}
                                      >
                                        <img
                                          className="image-fit-cover c-pointer"
                                          height={408}
                                          width={600}
                                          src="https://fastui.cltpstatic.com/image/upload/w_600,h_408,fl_progressive,e_sharpen:80,c_fill/hotels/places/hotels/cms/4205/42054/images/image_42054_d1a5538b-e076-48d9-a4e4-2491f88fb11b.jpeg"
                                          tabIndex="-1"
                                          style={{
                                            margin: "0px",
                                            padding: "0px",
                                            boxSizing: "border-box",
                                            objectFit: "cover",
                                            cursor: "pointer",
                                            color: "transparent",
                                            width: "100%",
                                            display: "inline-block",
                                            fontFamily: "__Inter_afabb0",
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="slick-slide"
                                    aria-hidden="true"
                                    tabIndex="-1"
                                    style={{
                                      margin: "0px",
                                      padding: "0px",
                                      boxSizing: "border-box",
                                      cssFloat: "left",
                                      height: "100%",
                                      minHeight: "1px",
                                      display: "block",
                                      outline: "none",
                                      width: "599px",
                                      fontFamily: "__Inter_afabb0",
                                    }}
                                  >
                                    <div
                                      style={{
                                        margin: "0px",
                                        padding: "0px",
                                        boxSizing: "border-box",
                                        outline: "none",
                                        fontFamily: "__Inter_afabb0",
                                      }}
                                    >
                                      <div
                                        className="Stencil has-shimmer"
                                        style={{
                                          margin: "0px",
                                          padding: "0px",
                                          boxSizing: "border-box",
                                          outline: "none",
                                          background:
                                            "linear-gradient(90deg, rgb(246, 247, 248) 0px, rgb(237, 238, 241) 20%, rgb(246, 247, 248) 40%, rgb(246, 247, 248)) 0% 0% / 1200px 1200px",
                                          animationDuration: "1s",
                                          animationFillMode: "forwards",
                                          animationIterationCount: "infinite",
                                          animationName: "shimmer",
                                          animationTimingFunction: "linear",
                                          position: "relative",
                                          width: "600px",
                                          height: "408px",
                                          fontFamily: "__Inter_afabb0",
                                        }}
                                      >
                                        <img
                                          className="image-fit-cover c-pointer"
                                          height={408}
                                          width={600}
                                          src="https://fastui.cltpstatic.com/image/upload/w_600,h_408,fl_progressive,e_sharpen:80,c_fill/hotels/places/hotels/cms/4205/42054/images/image_42054_50f54360-13c8-4c70-b703-619987a266e1.jpeg"
                                          tabIndex="-1"
                                          style={{
                                            margin: "0px",
                                            padding: "0px",
                                            boxSizing: "border-box",
                                            objectFit: "cover",
                                            cursor: "pointer",
                                            color: "transparent",
                                            width: "100%",
                                            display: "inline-block",
                                            fontFamily: "__Inter_afabb0",
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="slick-slide"
                                    aria-hidden="true"
                                    tabIndex="-1"
                                    style={{
                                      margin: "0px",
                                      padding: "0px",
                                      boxSizing: "border-box",
                                      cssFloat: "left",
                                      height: "100%",
                                      minHeight: "1px",
                                      display: "block",
                                      outline: "none",
                                      width: "599px",
                                      fontFamily: "__Inter_afabb0",
                                    }}
                                  >
                                    <div
                                      style={{
                                        margin: "0px",
                                        padding: "0px",
                                        boxSizing: "border-box",
                                        outline: "none",
                                        fontFamily: "__Inter_afabb0",
                                      }}
                                    >
                                      <div
                                        className="Stencil has-shimmer"
                                        style={{
                                          margin: "0px",
                                          padding: "0px",
                                          boxSizing: "border-box",
                                          outline: "none",
                                          background:
                                            "linear-gradient(90deg, rgb(246, 247, 248) 0px, rgb(237, 238, 241) 20%, rgb(246, 247, 248) 40%, rgb(246, 247, 248)) 0% 0% / 1200px 1200px",
                                          animationDuration: "1s",
                                          animationFillMode: "forwards",
                                          animationIterationCount: "infinite",
                                          animationName: "shimmer",
                                          animationTimingFunction: "linear",
                                          position: "relative",
                                          width: "600px",
                                          height: "408px",
                                          fontFamily: "__Inter_afabb0",
                                        }}
                                      >
                                        <img
                                          className="image-fit-cover c-pointer"
                                          height={408}
                                          width={600}
                                          src="https://fastui.cltpstatic.com/image/upload/w_600,h_408,fl_progressive,e_sharpen:80,c_fill/hotels/places/hotels/cms/4205/42054/images/image_42054_b89af96b-0e86-42e0-b7ef-1d8cd806573f.jpeg"
                                          tabIndex="-1"
                                          style={{
                                            margin: "0px",
                                            padding: "0px",
                                            boxSizing: "border-box",
                                            objectFit: "cover",
                                            cursor: "pointer",
                                            color: "transparent",
                                            width: "100%",
                                            display: "inline-block",
                                            fontFamily: "__Inter_afabb0",
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="slick-slide"
                                    aria-hidden="true"
                                    tabIndex="-1"
                                    style={{
                                      margin: "0px",
                                      padding: "0px",
                                      boxSizing: "border-box",
                                      cssFloat: "left",
                                      height: "100%",
                                      minHeight: "1px",
                                      display: "block",
                                      outline: "none",
                                      width: "599px",
                                      fontFamily: "__Inter_afabb0",
                                    }}
                                  >
                                    <div
                                      style={{
                                        margin: "0px",
                                        padding: "0px",
                                        boxSizing: "border-box",
                                        outline: "none",
                                        fontFamily: "__Inter_afabb0",
                                      }}
                                    >
                                      <div
                                        className="Stencil has-shimmer"
                                        style={{
                                          margin: "0px",
                                          padding: "0px",
                                          boxSizing: "border-box",
                                          outline: "none",
                                          background:
                                            "linear-gradient(90deg, rgb(246, 247, 248) 0px, rgb(237, 238, 241) 20%, rgb(246, 247, 248) 40%, rgb(246, 247, 248)) 0% 0% / 1200px 1200px",
                                          animationDuration: "1s",
                                          animationFillMode: "forwards",
                                          animationIterationCount: "infinite",
                                          animationName: "shimmer",
                                          animationTimingFunction: "linear",
                                          position: "relative",
                                          width: "600px",
                                          height: "408px",
                                          fontFamily: "__Inter_afabb0",
                                        }}
                                      >
                                        <img
                                          className="image-fit-cover c-pointer"
                                          height={408}
                                          width={600}
                                          src="https://fastui.cltpstatic.com/image/upload/w_600,h_408,fl_progressive,e_sharpen:80,c_fill/hotels/places/hotels/cms/4205/42054/images/image_42054_81fb0e55-a2de-4a66-82d5-e3dc7a8bd06d.jpeg"
                                          tabIndex="-1"
                                          style={{
                                            margin: "0px",
                                            padding: "0px",
                                            boxSizing: "border-box",
                                            objectFit: "cover",
                                            cursor: "pointer",
                                            color: "transparent",
                                            width: "100%",
                                            display: "inline-block",
                                            fontFamily: "__Inter_afabb0",
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="slick-slide"
                                    aria-hidden="true"
                                    tabIndex="-1"
                                    style={{
                                      margin: "0px",
                                      padding: "0px",
                                      boxSizing: "border-box",
                                      cssFloat: "left",
                                      height: "100%",
                                      minHeight: "1px",
                                      display: "block",
                                      outline: "none",
                                      width: "599px",
                                      fontFamily: "__Inter_afabb0",
                                    }}
                                  >
                                    <div
                                      style={{
                                        margin: "0px",
                                        padding: "0px",
                                        boxSizing: "border-box",
                                        outline: "none",
                                        fontFamily: "__Inter_afabb0",
                                      }}
                                    >
                                      <div
                                        className="Stencil has-shimmer"
                                        style={{
                                          margin: "0px",
                                          padding: "0px",
                                          boxSizing: "border-box",
                                          outline: "none",
                                          background:
                                            "linear-gradient(90deg, rgb(246, 247, 248) 0px, rgb(237, 238, 241) 20%, rgb(246, 247, 248) 40%, rgb(246, 247, 248)) 0% 0% / 1200px 1200px",
                                          animationDuration: "1s",
                                          animationFillMode: "forwards",
                                          animationIterationCount: "infinite",
                                          animationName: "shimmer",
                                          animationTimingFunction: "linear",
                                          position: "relative",
                                          width: "600px",
                                          height: "408px",
                                          fontFamily: "__Inter_afabb0",
                                        }}
                                      >
                                        <img
                                          className="image-fit-cover c-pointer"
                                          height={408}
                                          width={600}
                                          src="https://fastui.cltpstatic.com/image/upload/w_600,h_408,fl_progressive,e_sharpen:80,c_fill/hotels/places/hotels/cms/4205/42054/images/image_42054_4b83bc8f-a6a5-44a6-8384-9a4cda215d87.jpeg"
                                          tabIndex="-1"
                                          style={{
                                            margin: "0px",
                                            padding: "0px",
                                            boxSizing: "border-box",
                                            objectFit: "cover",
                                            cursor: "pointer",
                                            color: "transparent",
                                            width: "100%",
                                            display: "inline-block",
                                            fontFamily: "__Inter_afabb0",
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="slick-slide slick-cloned"
                                    aria-hidden="true"
                                    tabIndex="-1"
                                    style={{
                                      margin: "0px",
                                      padding: "0px",
                                      boxSizing: "border-box",
                                      cssFloat: "left",
                                      height: "100%",
                                      minHeight: "1px",
                                      display: "block",
                                      width: "599px",
                                      fontFamily: "__Inter_afabb0",
                                    }}
                                  >
                                    <div
                                      style={{
                                        margin: "0px",
                                        padding: "0px",
                                        boxSizing: "border-box",
                                        outline: "none",
                                        fontFamily: "__Inter_afabb0",
                                      }}
                                    >
                                      <div
                                        className="Stencil has-shimmer"
                                        style={{
                                          margin: "0px",
                                          padding: "0px",
                                          boxSizing: "border-box",
                                          outline: "none",
                                          background:
                                            "linear-gradient(90deg, rgb(246, 247, 248) 0px, rgb(237, 238, 241) 20%, rgb(246, 247, 248) 40%, rgb(246, 247, 248)) 0% 0% / 1200px 1200px",
                                          animationDuration: "1s",
                                          animationFillMode: "forwards",
                                          animationIterationCount: "infinite",
                                          animationName: "shimmer",
                                          animationTimingFunction: "linear",
                                          position: "relative",
                                          width: "600px",
                                          height: "408px",
                                          fontFamily: "__Inter_afabb0",
                                        }}
                                      >
                                        <img
                                          className="image-fit-cover c-pointer"
                                          height={408}
                                          width={600}
                                          src="https://fastui.cltpstatic.com/image/upload/w_600,h_408,fl_progressive,e_sharpen:80,c_fill/hotels/places/hotels/cms/4205/42054/images/image_42054_d1a5538b-e076-48d9-a4e4-2491f88fb11b.jpeg"
                                          tabIndex="-1"
                                          style={{
                                            margin: "0px",
                                            padding: "0px",
                                            boxSizing: "border-box",
                                            objectFit: "cover",
                                            cursor: "pointer",
                                            color: "transparent",
                                            width: "100%",
                                            display: "inline-block",
                                            fontFamily: "__Inter_afabb0",
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="slick-slide slick-cloned"
                                    aria-hidden="true"
                                    tabIndex="-1"
                                    style={{
                                      margin: "0px",
                                      padding: "0px",
                                      boxSizing: "border-box",
                                      cssFloat: "left",
                                      height: "100%",
                                      minHeight: "1px",
                                      display: "block",
                                      width: "599px",
                                      fontFamily: "__Inter_afabb0",
                                    }}
                                  >
                                    <div
                                      style={{
                                        margin: "0px",
                                        padding: "0px",
                                        boxSizing: "border-box",
                                        outline: "none",
                                        fontFamily: "__Inter_afabb0",
                                      }}
                                    >
                                      <div
                                        className="Stencil has-shimmer"
                                        style={{
                                          margin: "0px",
                                          padding: "0px",
                                          boxSizing: "border-box",
                                          outline: "none",
                                          background:
                                            "linear-gradient(90deg, rgb(246, 247, 248) 0px, rgb(237, 238, 241) 20%, rgb(246, 247, 248) 40%, rgb(246, 247, 248)) 0% 0% / 1200px 1200px",
                                          animationDuration: "1s",
                                          animationFillMode: "forwards",
                                          animationIterationCount: "infinite",
                                          animationName: "shimmer",
                                          animationTimingFunction: "linear",
                                          position: "relative",
                                          width: "600px",
                                          height: "408px",
                                          fontFamily: "__Inter_afabb0",
                                        }}
                                      >
                                        <img
                                          className="image-fit-cover c-pointer"
                                          height={408}
                                          width={600}
                                          src="https://fastui.cltpstatic.com/image/upload/w_600,h_408,fl_progressive,e_sharpen:80,c_fill/hotels/places/hotels/cms/4205/42054/images/image_42054_50f54360-13c8-4c70-b703-619987a266e1.jpeg"
                                          tabIndex="-1"
                                          style={{
                                            margin: "0px",
                                            padding: "0px",
                                            boxSizing: "border-box",
                                            objectFit: "cover",
                                            cursor: "pointer",
                                            color: "transparent",
                                            width: "100%",
                                            display: "inline-block",
                                            fontFamily: "__Inter_afabb0",
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="slick-slide slick-cloned"
                                    aria-hidden="true"
                                    tabIndex="-1"
                                    style={{
                                      margin: "0px",
                                      padding: "0px",
                                      boxSizing: "border-box",
                                      cssFloat: "left",
                                      height: "100%",
                                      minHeight: "1px",
                                      display: "block",
                                      width: "599px",
                                      fontFamily: "__Inter_afabb0",
                                    }}
                                  >
                                    <div
                                      style={{
                                        margin: "0px",
                                        padding: "0px",
                                        boxSizing: "border-box",
                                        outline: "none",
                                        fontFamily: "__Inter_afabb0",
                                      }}
                                    >
                                      <div
                                        className="Stencil has-shimmer"
                                        style={{
                                          margin: "0px",
                                          padding: "0px",
                                          boxSizing: "border-box",
                                          outline: "none",
                                          background:
                                            "linear-gradient(90deg, rgb(246, 247, 248) 0px, rgb(237, 238, 241) 20%, rgb(246, 247, 248) 40%, rgb(246, 247, 248)) 0% 0% / 1200px 1200px",
                                          animationDuration: "1s",
                                          animationFillMode: "forwards",
                                          animationIterationCount: "infinite",
                                          animationName: "shimmer",
                                          animationTimingFunction: "linear",
                                          position: "relative",
                                          width: "600px",
                                          height: "408px",
                                          fontFamily: "__Inter_afabb0",
                                        }}
                                      >
                                        <img
                                          className="image-fit-cover c-pointer"
                                          height={408}
                                          width={600}
                                          src="https://fastui.cltpstatic.com/image/upload/w_600,h_408,fl_progressive,e_sharpen:80,c_fill/hotels/places/hotels/cms/4205/42054/images/image_42054_b89af96b-0e86-42e0-b7ef-1d8cd806573f.jpeg"
                                          tabIndex="-1"
                                          style={{
                                            margin: "0px",
                                            padding: "0px",
                                            boxSizing: "border-box",
                                            objectFit: "cover",
                                            cursor: "pointer",
                                            color: "transparent",
                                            width: "100%",
                                            display: "inline-block",
                                            fontFamily: "__Inter_afabb0",
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="slick-slide slick-cloned"
                                    aria-hidden="true"
                                    tabIndex="-1"
                                    style={{
                                      margin: "0px",
                                      padding: "0px",
                                      boxSizing: "border-box",
                                      cssFloat: "left",
                                      height: "100%",
                                      minHeight: "1px",
                                      display: "block",
                                      width: "599px",
                                      fontFamily: "__Inter_afabb0",
                                    }}
                                  >
                                    <div
                                      style={{
                                        margin: "0px",
                                        padding: "0px",
                                        boxSizing: "border-box",
                                        outline: "none",
                                        fontFamily: "__Inter_afabb0",
                                      }}
                                    >
                                      <div
                                        className="Stencil has-shimmer"
                                        style={{
                                          margin: "0px",
                                          padding: "0px",
                                          boxSizing: "border-box",
                                          outline: "none",
                                          background:
                                            "linear-gradient(90deg, rgb(246, 247, 248) 0px, rgb(237, 238, 241) 20%, rgb(246, 247, 248) 40%, rgb(246, 247, 248)) 0% 0% / 1200px 1200px",
                                          animationDuration: "1s",
                                          animationFillMode: "forwards",
                                          animationIterationCount: "infinite",
                                          animationName: "shimmer",
                                          animationTimingFunction: "linear",
                                          position: "relative",
                                          width: "600px",
                                          height: "408px",
                                          fontFamily: "__Inter_afabb0",
                                        }}
                                      >
                                        <img
                                          className="image-fit-cover c-pointer"
                                          height={408}
                                          width={600}
                                          src="https://fastui.cltpstatic.com/image/upload/w_600,h_408,fl_progressive,e_sharpen:80,c_fill/hotels/places/hotels/cms/4205/42054/images/image_42054_81fb0e55-a2de-4a66-82d5-e3dc7a8bd06d.jpeg"
                                          tabIndex="-1"
                                          style={{
                                            margin: "0px",
                                            padding: "0px",
                                            boxSizing: "border-box",
                                            objectFit: "cover",
                                            cursor: "pointer",
                                            color: "transparent",
                                            width: "100%",
                                            display: "inline-block",
                                            fontFamily: "__Inter_afabb0",
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="slick-slide slick-cloned"
                                    aria-hidden="true"
                                    tabIndex="-1"
                                    style={{
                                      margin: "0px",
                                      padding: "0px",
                                      boxSizing: "border-box",
                                      cssFloat: "left",
                                      height: "100%",
                                      minHeight: "1px",
                                      display: "block",
                                      width: "599px",
                                      fontFamily: "__Inter_afabb0",
                                    }}
                                  >
                                    <div
                                      style={{
                                        margin: "0px",
                                        padding: "0px",
                                        boxSizing: "border-box",
                                        outline: "none",
                                        fontFamily: "__Inter_afabb0",
                                      }}
                                    >
                                      <div
                                        className="Stencil has-shimmer"
                                        style={{
                                          margin: "0px",
                                          padding: "0px",
                                          boxSizing: "border-box",
                                          outline: "none",
                                          background:
                                            "linear-gradient(90deg, rgb(246, 247, 248) 0px, rgb(237, 238, 241) 20%, rgb(246, 247, 248) 40%, rgb(246, 247, 248)) 0% 0% / 1200px 1200px",
                                          animationDuration: "1s",
                                          animationFillMode: "forwards",
                                          animationIterationCount: "infinite",
                                          animationName: "shimmer",
                                          animationTimingFunction: "linear",
                                          position: "relative",
                                          width: "600px",
                                          height: "408px",
                                          fontFamily: "__Inter_afabb0",
                                        }}
                                      >
                                        <img
                                          className="image-fit-cover c-pointer"
                                          height={408}
                                          width={600}
                                          src="https://fastui.cltpstatic.com/image/upload/w_600,h_408,fl_progressive,e_sharpen:80,c_fill/hotels/places/hotels/cms/4205/42054/images/image_42054_4b83bc8f-a6a5-44a6-8384-9a4cda215d87.jpeg"
                                          tabIndex="-1"
                                          style={{
                                            margin: "0px",
                                            padding: "0px",
                                            boxSizing: "border-box",
                                            objectFit: "cover",
                                            cursor: "pointer",
                                            color: "transparent",
                                            width: "100%",
                                            display: "inline-block",
                                            fontFamily: "__Inter_afabb0",
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="sc-aXZVg jQdGrY p-absolute h-8 w-8 bg-white z-10 br-50p flex flex-middle flex-center vertically-centre image-slider__rightChevron-hidden t-50"
                              style={{
                                margin: "0px",
                                padding: "0px",
                                boxSizing: "border-box",
                                transition: "opacity 0.5s ease-out 0s",
                                right: "16px",
                                opacity: 0,
                                backgroundColor: "rgb(244, 244,  244)",
                                top: "50%",
                                transform: "translateY(-50%)",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "32px",
                                height: "32px",
                                zIndex: 10,
                                position: "absolute",
                                fontFamily: "__Inter_afabb0",
                              }}
                            >

                            </div>
                            <div
                              className="p-absolute image-slider__shadow b-0 w-100p h-8"
                              style={{
                                margin: "0px",
                                padding: "0px",
                                boxSizing: "border-box",
                                background:
                                  "linear-gradient(transparent 9.72%, rgba(0, 0, 0, 0.5))",
                                width: "100%",
                                height: "32px",
                                position: "absolute",
                                bottom: "0px",
                                fontFamily: "__Inter_afabb0",
                              }}
                            />
                            <div
                              className="sc-aXZVg bjNuwb p-absolute b-0 bg-white br-8 flex-center flex-middle flex m-6 r-0 c-pointer"
                              height="32px"
                              width="160px"
                              style={{
                                padding: "0px",
                                boxSizing: "border-box",
                                backgroundColor: "rgb(244, 244,  244)",
                                width: "160px",
                                height: "32px",
                                borderRadius: "8px",
                                margin: "24px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                position: "absolute",
                                bottom: "0px",
                                right: "0px",
                                fontFamily: "__Inter_afabb0",
                              }}
                            >
                              <p
                                className="sc-gEvEer lmJiPO"
                                color="#1A1A1A"
                                cursor="auto"
                                fontSize="14px"
                                fontStyle="none"
                                fontWeight="600"
                                textDecoration="none"
                                style={{
                                  margin: "0px",
                                  padding: "0px",
                                  boxSizing: "border-box",
                                  textDecoration: "none",
                                  fontSize: "14px",
                                  fontWeight: 600,
                                  lineHeight: "20px",
                                  color: "rgb(26, 26, 26)",
                                  cursor: "auto",
                                  fontFamily: "__Inter_afabb0",
                                }}
                              >
                                See all photos
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="sc-aXZVg cYXIwq"
                      style={{
                        margin: "0px",
                        padding: "0px",
                        boxSizing: "border-box",
                        fontFamily: "__Inter_afabb0",
                      }}
                    >
                      <div
                        id="selectRoomHighlights"
                        className="sc-aXZVg iQkgNe inclusionCardWrapper mt-6 px-6 py-6 ml-3 pb-4"
                        width="600px"
                        style={{
                          margin: "0px",
                          padding: "0px",
                          boxSizing: "border-box",
                          border: "1px solid rgb(231, 231, 231)",
                          borderRadius: "8px",
                          width: "600px",
                          paddingLeft: "24px",
                          paddingRight: "24px",
                          paddingTop: "24px",
                          paddingBottom: "16px",
                          marginLeft: "12px",
                          marginTop: "24px",
                          fontFamily: "__Inter_afabb0",
                        }}
                      >
                        <div
                          className="sc-aXZVg dyGYdu flex"
                          style={{
                            margin: "0px",
                            padding: "0px",
                            boxSizing: "border-box",
                            display: "flex",
                            fontFamily: "__Inter_afabb0",
                          }}
                        >
                          <div
                            className="sc-aXZVg iceHeh flex flex-column flex-center"
                            style={{
                              margin: "0px",
                              padding: "0px",
                              boxSizing: "border-box",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              fontFamily: "__Inter_afabb0",
                            }}
                          >

                            <div
                              className="sc-aXZVg eatCYZ flex flex-baseline"
                              style={{
                                margin: "0px",
                                padding: "0px",
                                boxSizing: "border-box",
                                alignItems: "baseline",
                                display: "flex",
                                fontFamily: "__Inter_afabb0",
                              }}
                            >
                              <h4
                                className="sc-gEvEer dAbDZN mr-1"
                                color="#1A1A1A"
                                cursor="auto"
                                fontStyle="none"
                                textDecoration="none"
                                style={{
                                  margin: "0px",
                                  padding: "0px",
                                  boxSizing: "border-box",
                                  textDecoration: "none",
                                  lineHeight: "28px",
                                  color: "rgb(26, 26, 26)",
                                  cursor: "auto",
                                  marginRight: "4px",
                                  fontFamily: "__Inter_afabb0",
                                }}
                              >
                                0.001 ETH
                              </h4>

                              <h4
                                className="sc-gEvEer dAbDZN mr-1"
                                color="#1A1A1A"
                                cursor="auto"
                                fontStyle="none"
                                textDecoration="none"
                                style={{
                                  margin: "0px",
                                  padding: "0px",
                                  boxSizing: "border-box",
                                  textDecoration: "none",
                                  lineHeight: "28px",
                                  color: "rgb(26, 26, 26)",
                                  cursor: "auto",
                                  marginRight: "4px",
                                  fontFamily: "__Inter_afabb0",
                                }}
                              >
                                / night
                              </h4>
                            </div>
                            <div
                              className="sc-aXZVg fCMBSO flex flex-middle mt-1"
                              style={{
                                margin: "0px",
                                padding: "0px",
                                boxSizing: "border-box",
                                marginTop: "4px",
                                display: "flex",
                                alignItems: "center",
                                fontFamily: "__Inter_afabb0",
                              }}
                            >
                              <p
                                className="sc-gEvEer kVKLTG mr-1"
                                color="#808080"
                                cursor="auto"
                                fontSize="14px"
                                fontStyle="none"
                                fontWeight="400"
                                textDecoration="line-through"
                                style={{
                                  margin: "0px",
                                  padding: "0px",
                                  boxSizing: "border-box",
                                  textDecoration: "line-through",
                                  fontSize: "14px",
                                  fontWeight: 400,
                                  lineHeight: "20px",
                                  color: "rgb(128, 128, 128)",
                                  cursor: "auto",
                                  marginRight: "4px",
                                  fontFamily: "__Inter_afabb0",
                                }}
                              >
                                0.002 ETH
                              </p>
                              <p
                                className="sc-gEvEer jcpauU mr-1"
                                color="#11A670"
                                cursor="auto"
                                fontSize="14px"
                                fontStyle="none"
                                fontWeight="400"
                                textDecoration="none"
                                style={{
                                  margin: "0px",
                                  padding: "0px",
                                  boxSizing: "border-box",
                                  textDecoration: "none",
                                  fontSize: "14px",
                                  fontWeight: 400,
                                  lineHeight: "20px",
                                  color: "rgb(17, 166, 112)",
                                  cursor: "auto",
                                  marginRight: "4px",
                                  fontFamily: "__Inter_afabb0",
                                }}
                              >
                                50% off
                              </p>
                            </div>
                          </div>
                          <div
                            className="sc-aXZVg hzokaA flex flex-1 flex-end flex-baseline h-100p mt-auto"
                            style={{
                              margin: "0px",
                              padding: "0px",
                              boxSizing: "border-box",
                              alignItems: "baseline",
                              marginTop: "auto",
                              display: "flex",
                              flex: "1 1 0%",
                              justifyContent: "flex-end",
                              height: "100%",
                              fontFamily: "__Inter_afabb0",
                            }}
                          >
                            <button
                              className="sc-jEACwC wDaYf ml-4 px-2"
                              style={{
                                margin: "0px",
                                border: "0px none",
                                textDecoration: "none",
                                padding: "8px 12px",
                                borderRadius: "8px",
                                display: "flex",
                                WebkitBoxPack: "center",
                                justifyContent: "center",
                                WebkitBoxAlign: "center",
                                alignItems: "center",
                                boxSizing: "border-box",
                                position: "relative",
                                userSelect: "none",
                                cursor: "pointer",
                                backgroundColor: "rgb(255, 79, 23)",
                                minWidth: "160px",
                                paddingLeft: "8px",
                                paddingRight: "8px",
                                marginLeft: "16px",
                                height: "48px",
                                fontFamily: "__Inter_afabb0",
                              }}
                              onClick={book}
                            >
                              <div
                                className="sc-aXZVg bMRyuJ"
                                style={{
                                  margin: "0px",
                                  padding: "0px",
                                  boxSizing: "border-box",
                                  paddingLeft: "4px",
                                  paddingRight: "4px",
                                  fontFamily: "__Inter_afabb0",
                                }}
                              >
                                <h4
                                  className="sc-gEvEer cmEgze"
                                  color="#f4f4f4"
                                  cursor="pointer"
                                  fontSize="14px"
                                  fontStyle="none"
                                  fontWeight="600"
                                  textDecoration="none"
                                  style={{
                                    margin: "0px",
                                    padding: "0px",
                                    boxSizing: "border-box",
                                    textDecoration: "none",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    lineHeight: "20px",
                                    color: "rgb(244, 244,  244)",
                                    cursor: "pointer",
                                    fontFamily: "__Inter_afabb0",
                                  }}
                                >
                                  Book Room
                                </h4>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
