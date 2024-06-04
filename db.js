import { config } from 'dotenv';
import { MongoClient } from 'mongodb';
import crypto from 'crypto';
config();

export default function database() {

	const uri = process.env.LOCAL_URI;
	let collection;

	async function connectToCluster() {

		console.log(uri);

		let mongoClient;

		try {

			mongoClient = new MongoClient(uri);
			await mongoClient.connect();
			console.log("connected to cluster");
			return mongoClient;

		} catch (err) {

			console.error('Connection to MongoDB Atlas failed!', err);
			//process.exit();

		}

	}

    return{

        connectToCluster
    }

}