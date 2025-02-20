(async function() {
  // Prevent duplicate UI injection
  if (document.getElementById("blooket-api-container")) return;

  // Create the container element
  var container = document.createElement("div");
  container.id = "blooket-api-container";
  container.style.position = "fixed";
  container.style.top = "10%";
  container.style.right = "10%";
  container.style.width = "300px";
  container.style.height = "400px";
  container.style.backgroundColor = "#fff";
  container.style.border = "1px solid #ccc";
  container.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
  container.style.zIndex = "9999";
  container.style.padding = "20px";
  container.style.fontFamily = "Arial, sans-serif";

  // Set the inner HTML of the container
  container.innerHTML = `
    <h3 style="margin-top: 0;">Blooket API Hack</h3>
    <p>Click the button to buy a blook.</p>
    <button id="buy-blook-btn" style="padding: 5px 10px; cursor: pointer;">Buy Blook</button>
    <p id="status-msg"></p>
  `;

  // Append the container to the body of the document
  document.body.appendChild(container);
  async function getName() {
      const response = await fetch('https://api.blooket.com/api/users/verify-token', {
          method: "GET",
          headers: {
              "accept": "application/json, text/plain, */*",
              "accept-language": "en-US,en;q=0.9,ru;q=0.8",
          },
          credentials: "include"
      });
      const data = await response.json();
  
      return data.name;
  };

  let token = getName();

  console.log(token);
  // Function to buy a blook using the Blooket API
  async function buyBlook() {
    const statusMsg = document.getElementById("status-msg");
    try {
      const response = await fetch('https://api.blooket.com/api/users/buy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${your_api_token}` // Replace with your actual API token
        },
        body: JSON.stringify({ blookId: 'some-blook-id' }) // Replace with actual blook ID
      });
      const data = await response.json();
      if (data.success) {
        statusMsg.innerText = 'Blook purchased successfully!';
      } else {
        statusMsg.innerText = 'Failed to purchase blook.';
      }
    } catch (error) {
      statusMsg.innerText = 'Error: ' + error.message;
    }
  }

  // Attach an event listener to the buy button to trigger the buyBlook function
  document.getElementById("buy-blook-btn").addEventListener("click", buyBlook);

  // Attach an event listener to remove the UI when clicked outside
  window.addEventListener("click", function(event) {
    if (event.target == container) {
      container.parentNode.removeChild(container);
    }
  });
})();
