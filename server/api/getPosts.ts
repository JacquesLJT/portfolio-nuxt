import { connectToDatabase } from '~/server/api/dbconnection';
import mongoose from 'mongoose';
import { defineEventHandler, getQuery } from 'h3';

// Get the Comment model registered in the connection file
const Comment = mongoose.models.Comment;

export default defineEventHandler(async (event) => {
  try {
    // Ensure the database connection is established
    await connectToDatabase();

    const query = getQuery(event);
    console.log('Received query parameters:', query);
    const limit = Number(query.limit) || 3;
    const page = Number(query.page) || 1;
    const skip = (page - 1) * limit;
    console.log(`Fetching comments with limit=${limit}, page=${page}, skip=${skip}`);

    // Query paginated documents from the 'comments' collection
    const comments = await Comment.find({}).skip(skip).limit(limit);
    console.log('Number of comments fetched:', comments.length);
    return comments;
  } catch (error) {
    console.error('Error fetching comments:', error);
    return { error: 'Error fetching comments' };
  }
});
