import { MongoClient, ServerApiVersion } from 'mongodb';

export const collectionNameObj = {
    servicesCollection: 'test-services',
    userCollection: 'test-user',
    bookingCollection: 'test-booking',
}

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PUSS}@cluster0.9njqe.mongodb.net/?appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

export default function dbConnect (collectionName){
    const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      });
      return client.db('car-doctor').collection(collectionName)
}
