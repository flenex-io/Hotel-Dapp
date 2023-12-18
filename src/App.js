import React, { useState } from "react";
import "./App.css";
import abi from "./contracts/Hotel.json";
import Main from "./components/Main";
const ethers = require("ethers");

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  const [walletConnected, setWalletConnected] = useState(false);

  const connectWallet = async () => {
    const contractAddress = "0xAD3B61ea3f432c4B5BAFDBa8E903eFC44428Fa53";
    const contractABI = abi.abi;
    try {
      const { ethereum } = window;

      if (ethereum) {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log("Accounts Connected", accounts[0]);

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        setState({ provider, signer, contract });
        setWalletConnected(true);
      } else {
        alert("Please install MetaMask");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      {walletConnected ? (
        <>
          <Main state={state}/>
        </>
      ) : (
        <div className="App">
          <button onClick={connectWallet}>Connect Wallet</button>
        </div>
      )}
    </div>
  );
}

export default App;
