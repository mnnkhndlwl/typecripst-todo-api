import { MongoClient } from 'mongodb';
import dotenv from "dotenv";

dotenv.config();

var { MongoURI='' } = process.env;

export const client = new MongoClient(MongoURI);
export const db = client.db();
