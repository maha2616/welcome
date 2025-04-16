function showPaymentFields() {
    const method = document.getElementById("paymentMethod").value;
    const container = document.getElementById("paymentDetails");
  
    let html = "";
  
    if (method === "upi") {
      html = `
        <label for="upi_id">Enter your UPI ID</label>
        <input type="text" id="upi_id" placeholder="example@upi" required>
      `;
    } else if (method === "card" || method === "Credit/Debit Card") {
      html = `
        <label for="card_number">Card Number</label>
        <input type="text" id="card_number" required>
  
        <label for="expiry_date">Expiry Date</label>
        <input type="month" id="expiry_date" required>
  
        <label for="cvv">CVV</label>
        <input type="password" id="cvv" required>
      `;
    } else if (method === "cod") {
      html = <p>No additional details required for COD.</p>;
    }
  
    container.innerHTML = html;
  }
  