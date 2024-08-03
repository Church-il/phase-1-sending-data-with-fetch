// Add your code here

// Define the submitData function
function submitData(name, email) {
  // Construct the data object to be sent in the body of the POST request
  const formData = {
    name: name,
    email: email,
  };

  // Create the configuration object for the fetch request
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData),
  };

  // Send the fetch request and return the fetch chain
  return fetch("http://localhost:3000/users", configurationObject)
    .then(response => {
      return response.json(); // Convert the response body to JSON
    })
    .then(object => {
      // Append the new ID to the DOM
      const newId = document.createElement("p");
      newId.textContent = `ID: ${object.id}`;
      document.body.appendChild(newId);
    })
    .catch(error => {
      // Handle errors by appending the error message to the DOM
      const errorMessage = document.createElement("p");
      errorMessage.textContent = `Error: ${error.message}`;
      document.body.appendChild(errorMessage);
    });
}
