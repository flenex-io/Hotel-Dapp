import React, { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import abi from "./contracts/Hotel.json";
const ethers = require("ethers");

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  const [walletConnected, setWalletConnected] = useState(false);

  const connectWallet = async () => {
    const contractAddress = "0xD29B761A405805fB502f8Aa0B829CaC3D2DB6679";
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
        <Main state={state} />
      ) : (
        <div className="App">
          <button onClick={connectWallet}>Connect Wallet</button>
        </div>
      )}
    </div>
  );
}

export default App;
