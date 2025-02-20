(function() {
  // Prevent duplicate UI injection
  if (document.getElementById("github-ui-container")) return;

  // Create the container element
  var container = document.createElement("div");
  container.id = "github-ui-container";
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
    <h3 style="margin-top: 0;">My UI Panel</h3>
    <p>This UI was loaded from GitHub.</p>
    <button id="close-github-ui" style="padding: 5px 10px; cursor: pointer;">Close</button>
  `;

  // Append the container to the body of the document
  document.body.appendChild(container);

  // Attach an event listener to the close button to remove the UI when clicked
  document.getElementById("close-github-ui").addEventListener("click", function() {
    container.parentNode.removeChild(container);
  });
})();
