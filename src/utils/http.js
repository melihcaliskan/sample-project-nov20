export const loginRequest = (body) => {
  const data = {
    "name": "...",
    "email": "...",
    "phonenumber": "000000000000",
    "country_code": "TR",
    "text": "..."
  }

  console.log("Prepared data:", data);

  fetch('https://example.com/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', },
    body: JSON.stringify(data),
  }).then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

}