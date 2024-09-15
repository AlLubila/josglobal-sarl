'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { isAdminLoggedIn } from '@/utils/auth';
import { off } from 'process';
import { log } from 'console';


interface Blog {
  _id: string;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
}

async function fetchBlogs(): Promise<Blog[]> {
  try {
    const res = await fetch('/api/blogs', { cache: 'no-store' });

    if (!res.ok) {
      throw new Error('Failed to fetch blogs');
    }

    return await res.json(); // Return the parsed JSON data
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

interface FormData {
  title: string;
  description: string;
  content: string;
  image: File | null;
}

const DESCRIPTION_MAX_LENGTH = 200; // Set character limit for description

export default function ContentManagement() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    content: '',
    image: null,
  });
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [descriptionLength, setDescriptionLength] = useState(0);

  // Redirect to unauthorized page if not logged in
  useEffect(() => {
    if (!isAdminLoggedIn()) {
      router.push('/unauthorized');
    }
  }, [router]);

  // Fetch existing blogs
  useEffect(() => {
    const getBlogs = async () => {
      try {
        const fetchedBlogs = await fetchBlogs();
        setBlogs(fetchedBlogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    getBlogs();
  }, []);
  console.log(blogs);
  

  // Handle form submit (create or update)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate file size
    if (formData.image) {
      const maxFileSizeMB = 10; // 10 MB
      const maxFileSizeBytes = maxFileSizeMB * 1024 * 1024;
      const fileSize = formData.image.size;

      if (fileSize > maxFileSizeBytes) {
        const fileSizeMB = (fileSize / (1024 * 1024)).toFixed(2);
        setMessage(`File size too large. Got ${fileSizeMB} MB. Maximum is ${maxFileSizeMB / (1024 * 1024)} MB.`);
        return;
      }
    }

    if (!formData.image) {
      setMessage('Please upload an image.');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    try {
      const form = new FormData();
      form.append('title', formData.title);
      form.append('description', formData.description);
      form.append('content', formData.content);
      form.append('image', formData.image);

      const response = await fetch('/api/blogs', {
        method: 'POST',
        body: form,
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('Blog created successfully!');
        setFormData({ title: '', description: '', content: '', image: null });
        setDescriptionLength(0); // Reset the description length
      } else {
        setMessage(result.message || 'Something went wrong.');
      }
    } catch (error) {
      setMessage('Error submitting the form.');
    }

    setIsSubmitting(false);
  };

  // Handle description change and limit the number of characters
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const description = e.target.value;
    if (description.length <= DESCRIPTION_MAX_LENGTH) {
      setFormData({ ...formData, description });
      setDescriptionLength(description.length);
    }
  };

  return (
    <>
          <h1 className="text-3xl font-bold my-6 text-center">Content Management</h1>
    <div className="min-h-screen flex flex-col items-center bg-[#021526] text-white py-10 px-4">

      {/* Create or Update Blog Section */}
      <section className="w-full max-w-2xl bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Create Blog</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-semibold mb-2">Title</label>
            <input
              id="title"
              type="text"
              placeholder="Enter the title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-blue-500 focus:ring-2 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-semibold mb-2">Description</label>
            <textarea
              id="description"
              rows={6}
              placeholder="Enter the description (Max 200 characters)"
              value={formData.description}
              onChange={handleDescriptionChange}
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-blue-500 focus:ring-2 focus:outline-none resize-none"
              required
              
            />
            {/* Character count display */}
            <div className="text-sm text-gray-400 mt-1 text-right">
              {descriptionLength}/{DESCRIPTION_MAX_LENGTH} characters
            </div>
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-semibold mb-2">Content</label>
            <textarea
              id="content"
              placeholder="Enter the content"
              rows={11}
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-blue-500 focus:ring-2 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-semibold mb-2">Upload Image</label>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                setFormData({ ...formData, image: file });
              }}
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-blue-500 focus:ring-2 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 hover:bg-blue-600 focus:ring focus:ring-blue-500 text-white py-3 rounded-lg font-bold transition"
          >
            {isSubmitting ? 'Submitting...' : 'Create Post'}
          </button>
          {message && <p className="text-center mt-4 text-yellow-400">{message}</p>}
        </form>
      </section>

      {/* Blog Post List for Edit/Delete */}
     {/* Blog Post List for Edit/Delete */}
{/* Blog Post List for Edit/Delete */}
<section className="w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg">
  <h2 className="text-xl font-bold mb-4 text-center">Existing Posts</h2>
  <div className="overflow-x-auto">
    {
      blogs.length > 0 ? (
        <table className="table-auto w-full text-left text-gray-300">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => (
              <tr key={blog._id} className="border-b border-gray-600 hover:bg-gray-700">
                <td className="px-4 py-4 text-center">{index + 1}</td>
                <td className="px-4 py-4 text-blue-400 font-semibold">{blog.title}</td> {/* Title column with blue text */}
                <td className="px-4 py-4 text-gray-400">{blog.description}</td> {/* Description column with gray text */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-400">No posts available.</p>
      )
    }
  </div>
</section>


    </div>
    </>
  );
}
