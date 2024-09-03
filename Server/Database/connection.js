import { MongoClient, ServerApiVersion } from "mongodb";
import axios from "axios";
import { json } from "express";

//const randomid = Math.trunc((Math.random() * 1000) + 1);

// const api_key = process.env.API_KEY ||'';
 const steam_url = `http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=3058380&count=3&maxlength=300&format=json`;

 const steam_app_url = `https://api.steampowered.com/ISteamApps/GetAppList/v2/`


const uri = process.env.ATLAS_URI || "";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});


try {
  // Connect the client to the server
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log(
   "Pinged your deployment. You successfully connected to MongoDB!"
  );
} catch(err) {
  console.error(err);
}

let db = client.db("overnout");

(async() =>{
  try{
    const gameData = db.collection('gamedata');
    let gameDocument = [];

    const response = await axios.get(steam_app_url);
    const applists = response.data.applist.apps;

    for(let i = 0; i < applists.length && gameDocument.length < 150; i++){
      const app = applists[i];
        gameDocument.push({
          "appId": app.appid,
          "name": app.name
        });
    }

    if(gameDocument.length === 0 ){
      const p = await gameData.insertMany(gameDocument);
      console.log(`${p.insertedCount} documents were inserted`)
    }else{
      console.log(`no documents to insert, skipping insertMany`)
    }
  } catch(err){
    console.log(err.message);
  }
})();



export default db;