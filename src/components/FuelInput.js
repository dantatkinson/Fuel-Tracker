import React, { useState } from "react";

function FuelInput() {
  const [amount, setAmount] = useState("");
  const [amountSubmitted, setAmountSubmitted]     = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setAmount('');

    // alert(`The name you entered was: ${amount}`);
  }

  // const displayAmount() => {
  //   amountSubmitted = event.target.value;
  // }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter amount of fuel..."
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
      />
      <input type="submit" />
      <h3>Amount: {amountSubmitted}</h3>
    </form>
  );
}

export default FuelInput;
