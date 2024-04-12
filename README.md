# Movie Catalog

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to use and start project 
In the project directory, you can run:
### `in terminal`
### `npm install -g json-server` (db.json allready in your project)
### `json-server --watch db.json --port 3005`
### `open another terminal`
### `npm i`
### `npm start`

### :)

### !!! Vercel deploy don't work correct - I'm working on it

fetchClient/fetchClient.ts
const isLocal = true;
const vercelServerAPI = "https://json-server-vercel-dun.vercel.app/"; // don't work correct
const localServerAPI = "http://localhost:3005/"; // use: $json-server --watch db.json --port 3005


