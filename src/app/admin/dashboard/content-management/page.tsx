'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { isAdminLoggedIn } from '@/utils/auth';
import { FaEdit, FaTrashAlt } from 'react-icons/fa'; // FontAwesome Icons for edit/delete

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
    return await res.json();
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

async function deleteBlog(id: string): Promise<boolean> {
  try {
    const res = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });
    return res.ok;
  } catch (error) {
    console.error('Error deleting blog:', error);
    return false;
  }
}

interface FormData {
  title: string;
  description: string;
  content: string;
  image: File | null;
}

const DESCRIPTION_MAX_LENGTH = 200;

export default function ContentManagement() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    content: '',
    image: null,
  });
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [descriptionLength, setDescriptionLength] = useState(0);
  const [editBlogId, setEditBlogId] = useState<string | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!isAdminLoggedIn()) {
      router.push('/unauthorized');
    }
  }, [router]);

  useEffect(() => {
    const getBlogs = async () => {
      const fetchedBlogs = await fetchBlogs();
      setBlogs(fetchedBlogs);
    };
    getBlogs();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.image && !editBlogId) {
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
      if (formData.image) {
        form.append('image', formData.image);
      }
      const response = await fetch(`/api/blogs/${editBlogId || ''}`, {
        method: editBlogId ? 'PUT' : 'POST',
        body: form,
      });
      const result = await response.json();

      if (response.ok) {
        setMessage(editBlogId ? 'Blog updated successfully!' : 'Blog created successfully!');
        setFormData({ title: '', description: '', content: '', image: null });
        setDescriptionLength(0);
        setEditBlogId(null);
        const fetchedBlogs = await fetchBlogs();
        setBlogs(fetchedBlogs);
      } else {
        setMessage(result.message || 'Something went wrong.');
      }
    } catch (error) {
      setMessage('Error submitting the form.');
    }
    setIsSubmitting(false);

    // Hide message after 3 seconds
    setTimeout(() => setMessage(''), 3000);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const description = e.target.value;
    if (description.length <= DESCRIPTION_MAX_LENGTH) {
      setFormData({ ...formData, description });
      setDescriptionLength(description.length);
    }
  };

  const handleEdit = (blog: Blog) => {
    setFormData({
      title: blog.title,
      description: blog.description,
      content: blog.content,
      image: null,
    });
    setEditBlogId(blog._id);
  };

  const handleDelete = (id: string) => {
    setBlogToDelete(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (blogToDelete) {
      const success = await deleteBlog(blogToDelete);
      if (success) {
        setBlogs(blogs.filter((blog) => blog._id !== blogToDelete));
        setMessage('Blog deleted successfully!');
      } else {
        setMessage('Error deleting blog.');
      }
      setShowDeleteModal(false);
      setBlogToDelete(null);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold my-6 text-center text-white">Content Management</h1>
      <div className="min-h-screen flex flex-col items-center bg-[#021526] text-white py-10 px-4">
        {/* Create or Update Blog Section */}
        <section className="w-full max-w-2xl bg-gray-800 p-8 rounded-lg shadow-lg mb-10">
          <h2 className="text-2xl font-bold mb-4 text-center">{editBlogId ? 'Edit Blog' : 'Create Blog'}</h2>
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
                rows={5}
                placeholder="Enter the description (Max 200 characters)"
                value={formData.description}
                onChange={handleDescriptionChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-blue-500 focus:ring-2 focus:outline-none resize-none"
                required
              />
              <div className="text-sm text-gray-400 mt-1 text-right">
                {descriptionLength}/{DESCRIPTION_MAX_LENGTH} characters
              </div>
            </div>

            <div>
              <label htmlFor="content" className="block text-sm font-semibold mb-2">Content</label>
              <textarea
                id="content"
                rows={8}
                placeholder="Enter the content"
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
              className="w-full bg-blue-600 hover:bg-blue-700 focus:ring focus:ring-blue-500 text-white py-3 rounded-lg font-bold transition duration-300"
            >
              {isSubmitting ? 'Submitting...' : editBlogId ? 'Update Post' : 'Create Post'}
            </button>
            {message && <p className="text-center mt-4 text-yellow-400">{message}</p>}
          </form>
        </section>

        {/* Blog Post List for Edit/Delete */}
        <section className="w-full max-w-4xl bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-6 text-center text-white">Existing Posts</h2>
          <div className="overflow-x-auto">
            {blogs.length > 0 ? (
              <table className="table-auto w-full text-left text-gray-300">
                <thead className="bg-gray-700 text-gray-400">
                  <tr>
                    <th className="px-4 py-3">#</th>
                    <th className="px-4 py-3">Title</th>
                    <th className="px-4 py-3">Description</th>
                    <th className="px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {blogs.map((blog, index) => (
                    <tr key={blog._id} className="border-b border-gray-600 hover:bg-gray-700 transition duration-300">
                      <td className="px-4 py-4 text-center">{index + 1}</td>
                      <td className="px-4 py-4 font-semibold text-blue-400">{blog.title}</td>
                      <td className="px-4 py-4 text-gray-400">{blog.description}</td>
                      <td className="px-4 py-4 flex justify-center space-x-4">
                        <button
                          onClick={() => handleEdit(blog)}
                          className="text-green-500 hover:text-green-400 transition duration-300"
                        >
                          <FaEdit size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(blog._id)}
                          className="text-red-500 hover:text-red-400 transition duration-300"
                        >
                          <FaTrashAlt size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-center text-gray-400">No posts available.</p>
            )}
          </div>
        </section>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-center">Confirm Delete</h3>
            <p className="text-gray-600 text-center mb-6">Are you sure you want to delete this blog post?</p>
            <div className="flex justify-around">
              <button
                onClick={confirmDelete}
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition"
              >
                Confirm
              </button>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


