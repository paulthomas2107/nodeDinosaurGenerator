const express = require("express");
const app = express();
const port = 3000;
const fetch = require("node-fetch");

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`App Started: Listening on port ${port}`);
});

// Get Dino Name
app.get("/dinoname", async (request, response) => {
  const fetchApi = await fetch(
    "https://alexnormand-dino-ipsum.p.rapidapi.com/?paragraphs=1&words=2&format=json",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "e7b118db4bmshe2c07f49b82bd4fp1870dcjsn2edda42bd3aa",
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
    "https://bing-image-search1.p.rapidapi.com/images/search?q=dinosaur&count=5",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "e7b118db4bmshe2c07f49b82bd4fp1870dcjsn2edda42bd3aa",
        "x-rapidapi-host": "bing-image-search1.p.rapidapi.com",
      },
    }
  );

  const dinoImageResponse = await fetchApi.json();
  response.json(dinoImageResponse);
});
