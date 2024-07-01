// HINTS:
// 1. Import express and axios
import express from "express";
import axios from "axios";

// 2. Create an express app and set the port number.
const app = express();
const port = 3000;

// 3. Use the public folder for static files.
app.use(express.static("public"));

// 4. When the user goes to the home page it should render the index.ejs file.
app.get("/", async (req, res) => {
    try{
        const result = await axios.get("https://secrets-api.appbrewery.com/random");
        res.render("index.ejs", {secret:result.data.secret, user:result.data.username});
    } catch(error){
        console.log(error.response.data);
        res.status(500)
    }
  });

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.
/*app.post("/get-secret", async (req, res) => {
    const searchId = req.body.id;
    try {
      const result = await axios.get(API_URL + "/secrets/" + searchId, config);
      res.render("index.ejs", { content: JSON.stringify(result.data) });
    } catch (error) {
      res.render("index.ejs", { content: JSON.stringify(error.response.data) });
    }
  });
  
  app.post("/post-secret", async (req, res) => {
    try {
      const result = await axios.post(API_URL + "/secrets", req.body, config);
      res.render("index.ejs", { content: JSON.stringify(result.data) });
    } catch (error) {
      res.render("index.ejs", { content: JSON.stringify(error.response.data) });
    }
  });*/

// 6. Listen on your predefined port and start the server.
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });