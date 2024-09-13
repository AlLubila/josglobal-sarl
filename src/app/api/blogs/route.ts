import { NextRequest, NextResponse } from 'next/server';
import { uploadImage } from '@/lib/cloudinary';
import { connectToDatabase } from '@/lib/mongoose';
import Blog from '@/models/Blog';

// Create a new blog post
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const imageFile = formData.get('image') as File;
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const content = formData.get('content') as string;

    // Convert image to a buffer
    const buffer = await imageFile.arrayBuffer();
    const uploadResponse = await uploadImage(Buffer.from(buffer));

    // Extract the image URL from Cloudinary response
    const imageUrl = (uploadResponse as any).secure_url;

    // Connect to MongoDB
    await connectToDatabase();

    // Save the new blog
    const newBlog = new Blog({
      title,
      description,
      content,
      imageUrl,
    });

    await newBlog.save();

    return NextResponse.json({ message: 'Blog created successfully!' }, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ message: 'An unknown error occurred' }, { status: 500 });
    }
  }
}

// Fetch all blog posts
export async function GET() {
  try {
    await connectToDatabase();
    const blogs = await Blog.find().exec();
    return NextResponse.json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ message: 'Error fetching blogs' }, { status: 500 });
  }
}
