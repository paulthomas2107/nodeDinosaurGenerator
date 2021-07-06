const express = require("express");
const app = express();
const port = 3000;
const fetch = require("node-fetch");

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`App Started: Listening on port ${port}`);
});

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
  console.log(dinoNameResponse);
  response.json(dinoNameResponse);
});
