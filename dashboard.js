
    // Function to close modal
    function closeModal() {
      var modal = document.getElementById("myModal");
      var bootstrapModal = new bootstrap.Modal(modal); // Create a new Bootstrap modal instance
      bootstrapModal.hide(); // Hide the modal
    }
  
    // Function to open modal for card information
    function openModal(cardNumber) {
      var modal = document.getElementById("myModal");
      var bootstrapModal = new bootstrap.Modal(modal); // Create a new Bootstrap modal instance
      bootstrapModal.show(); // Show the modal
  
      // If the card is not for adding a new card, populate modal fields with card details
      if (cardNumber !== 'add') {
        // Example: Pre-fill card details for card number 1
        document.getElementById("firstName").value = "John";
        document.getElementById("lastName").value = "Doe";
        document.getElementById("cardNumber").value = "1234567890123456";
        document.getElementById("expiryDate").value = "12/25";
        document.getElementById("cvv").value = "123";
      }
    }
  
    // Function to add card
function addCard() {
    // Frontend validation
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var cardNumber = document.getElementById("cardNumber").value;
    var expiryDate = document.getElementById("expiryDate").value;
    var cvv = document.getElementById("cvv").value;
  
    var validationErrors = "";
  
    if (firstName.length < 3) {
      validationErrors += "First Name must be at least 3 characters long.<br>";
    }
    if (lastName.length < 3) {
      validationErrors += "Last Name must be at least 3 characters long.<br>";
    }
    if (!cardNumber.match(/^\d{16}$/)) {
      validationErrors += "Card Number must be 16 digits long.<br>";
    }
    if (!expiryDate.match(/^(0[1-9]|1[0-2])\/([2-9][0-9])$/)) {
      validationErrors += "Expiry Date must be in the format MM/YY.<br>";
    }
    if (!cvv.match(/^\d{3}$/)) {
      validationErrors += "CVV must be 3 digits long.<br>";
    }
  
    document.getElementById("validationErrors").innerHTML = validationErrors;
  
    if (validationErrors === "") {
      // card information on Card 1
      var cardContent = `<h3>${firstName} ${lastName}</h3>`;
      cardContent += `<p>${cardNumber.slice(0, 4)} ${cardNumber.slice(4, 8)} ${cardNumber.slice(8, 12)} ${cardNumber.slice(12)}</p>`;
      cardContent += `<p>Expiry Date: ${expiryDate}</p>`;
      cardContent += `<p>CVV: ${cvv}</p>`;
  
      document.querySelector(".card").innerHTML = cardContent;
  
      // Close modal after adding the card
      var modal = document.getElementById("myModal");
    //   var bootstrapModal = new bootstrap.Modal(modal); // Create a new Bootstrap modal instance
      bootstrapModal.hide(); // Hide the modal
    }
  }

//   // Display card information on Card 1
// var cardNameDiv = document.querySelector(".card-name");
// var cardNumberDiv = document.querySelector(".card-number");
// var expiryDateDiv = document.querySelector(".expiry-date");
// var cvvDiv = document.querySelector(".cvv");

// cardNameDiv.innerHTML = `<strong>${firstName} ${lastName}</strong>`;
// cardNumberDiv.innerHTML = `${cardNumber.slice(0, 4)} ${cardNumber.slice(4, 8)} ${cardNumber.slice(8, 12)} ${cardNumber.slice(12)}`;
// expiryDateDiv.innerHTML = `Expiry Date: ${expiryDate}`;
// cvvDiv.innerHTML = `CVV: ${cvv}`;

  