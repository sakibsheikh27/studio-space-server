import 'dotenv/config'

import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';

const app = express();
const port = 5000;


app.use(cors());
app.use(express.json());



const client = new MongoClient('mongodb://studio-space:eRKyXLQaSMR4hpIq@ac-ks6jwq5-shard-00-00.9iv6qrh.mongodb.net:27017,ac-ks6jwq5-shard-00-01.9iv6qrh.mongodb.net:27017,ac-ks6jwq5-shard-00-02.9iv6qrh.mongodb.net:27017/?ssl=true&replicaSet=atlas-88vlb8-shard-0&authSource=admin');
export async function connectToMongoDB() {
    try {
        await client.connect();
        console.log("You successfully connected to MongoDB!");
        return client;
    } catch (err) {
        console.dir(err);
    }
}

const mongoclient = await connectToMongoDB();


app.get('/', (req, res) => {
    res.send({ message: 'server is running fine!' })
})


app.listen(port, () => {
    console.log(`server is running at ${port}`)
})