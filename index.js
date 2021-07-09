require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const fetch = require("node-fetch");

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`App Started: Listening on port ${port}`);
});

const api_key = process.env.API_KEY;
console.log(api_key);

// Get Dino Name
app.get("/dinoname", async (request, response) => {
  const fetchApi = await fetch(
    "https://alexnormand-dino-ipsum.p.rapidapi.com/?paragraphs=1&words=2&format=json",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": api_key,
        "x-rapidapi-host": "alexnormand-dino-ipsum.p.rapidapi.com",
      },
    }
  );

  const dinoNameResponse = await fetchApi.json();
  response.json(dinoNameResponse);
});

// Get Dino Image
app.get("/dinoimage", async (request, response) => {
  const fetchApi = await fetch(
    "https://bing-image-search1.p.rapidapi.com/images/search?q=dinosaur&count=10",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": api_key,
        "x-rapidapi-host": "bing-image-search1.p.rapidapi.com",
      },
    }
  );

  const dinoImageResponse = await fetchApi.json();
  response.json(dinoImageResponse);
});
