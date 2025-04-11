import mongoose from 'mongoose';
import { defineEventHandler } from 'h3';

// Retrieve and validate environment variables
const dbUrl = process.env.DATABASE_URL;
const dbName = process.env.DATABASE_NAME;

if (!dbUrl) {
  throw new Error('DATABASE_URL not defined in environment variables.');
}

if (!dbName) {
  throw new Error('DATABASE_NAME not defined in environment variables.');
}

// Define a schema for the comments collection
const CommentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  movie_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  text: { type: String, required: true },
  date: { type: Date, required: true }
});

// Avoid model recompilation errors by reusing the existing model if available
const Comment = mongoose.models.Comment || mongoose.model('Comment', CommentSchema, 'comments');

// Cache the connection promise to avoid multiple connection attempts
let connectionPromise: Promise<typeof mongoose> | null = null;

async function connectToDatabase() {
  // If already connected, return immediately
  if (mongoose.connection.readyState === 1) {
    return;
  }
  // If there's no connection promise, start a new connection
  if (!connectionPromise) {
    console.log('Connecting to MongoDB...');
    connectionPromise = mongoose.connect(dbUrl!, { dbName: dbName! });

    // Set up event listeners for better monitoring
    mongoose.connection.on('connected', () => console.log('MongoDB connected.'));
    mongoose.connection.on('error', (err) => console.error('MongoDB connection error:', err));
    mongoose.connection.on('disconnected', () => console.log('MongoDB disconnected.'));
  }
  await connectionPromise;
}

export default defineEventHandler(async (event) => {
  try {
    // Ensure database connection is established
    await connectToDatabase();

    // Query all documents from the 'comments' collection
    const comments = await Comment.find({});
    console.log('Fetched comments count:', comments.length);
    return comments;
  } catch (error) {
    console.error('Error fetching comments:', error);
    return { error: 'Error fetching comments' };
  }
});

export { connectToDatabase, Comment };
