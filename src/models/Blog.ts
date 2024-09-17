import mongoose, { Document, Schema } from 'mongoose';

interface IBlog extends Document {
    title: string;
    description: string;
    content: string;
}

const BlogSchema: Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  }
});

export default mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);
