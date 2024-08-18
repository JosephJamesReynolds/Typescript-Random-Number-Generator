import React from "react";

interface Props {
  connectWallet: () => void;
}

const Login: React.FC<Props> = ({ connectWallet }) => {
  return (
    <div className="login-container">
      <h1>Welcome to Sepolia Testnet: Random Number Generator</h1>
      <button onClick={connectWallet}>Login Metamask</button>
    </div>
  );
};

export default Login;
