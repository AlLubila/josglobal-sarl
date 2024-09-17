import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongoose';
import Blog from '@/models/Blog';

// Fetch a blog post by ID
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const blog = await Blog.findById(params.id).exec();
    
    if (!blog) {
      return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json({ message: 'Error fetching blog' }, { status: 500 });
  }
}

// Update a blog post by ID
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const formData = await req.formData();
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const content = formData.get('content') as string;

    await connectToDatabase();
    const updatedBlog = await Blog.findByIdAndUpdate(params.id, {
      title,
      description,
      content,
    }, { new: true });

    if (!updatedBlog) {
      return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Blog updated successfully!', updatedBlog });
  } catch (error) {
    console.error('Error updating blog:', error);
    return NextResponse.json({ message: 'Error updating blog' }, { status: 500 });
  }
}

// Delete a blog post by ID
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectToDatabase();
    const deletedBlog = await Blog.findByIdAndDelete(params.id);

    if (!deletedBlog) {
      return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Blog deleted successfully!' });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json({ message: 'Error deleting blog' }, { status: 500 });
  }
}
