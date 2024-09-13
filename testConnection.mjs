import { connect } from 'mongoose';
import { config } from 'dotenv';

config(); // Load environment variables from .env file

const uri = process.env.MONGODB_URI || '';

console.log('MongoDB URI:', uri); // Log the MongoDB URI to check if it's loaded correctly

async function testConnection() {
  try {
    await connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connection successful');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

testConnection();
