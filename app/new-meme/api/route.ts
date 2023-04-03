import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();

  const client = await MongoClient.connect(process.env.MONGO_URL);
  const db = client.db();

  const memesCollection = db.collection('randomemes');

  const result = await memesCollection.insertOne(body);

  console.log(result);

  client.close();

  return NextResponse.json({ result });
}
