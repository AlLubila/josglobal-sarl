'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import DOMPurify from 'dompurify';
import 'react-quill/dist/quill.snow.css';
import styles from '@/styles/SingleBlog.module.css';
import Loading from '@/components/Loading';
import ErrorPage from '@/components/ErrorPage';

interface Blog {
  _id: string;
  title: string;
  description: string;
  content: string;
}

async function fetchBlog(id: string): Promise<Blog | null> {
  try {
    const res = await fetch(`/api/blogs/${id}`, { cache: 'no-store' });

    if (!res.ok) {
      throw new Error('Failed to fetch blog');
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  } 
} 

export default function SinglePost() {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const getBlog = async () => {
        try {
          const fetchedBlog = await fetchBlog(id as string);
          if (fetchedBlog) {
            setBlog(fetchedBlog);
          } else {
            setError('Blog not found');
          }
        } catch (error) {
          setError('Failed to fetch blog');
        } finally {
          setLoading(false);
        }
      };

      getBlog();
    } else {
      setError('No blog ID provided');
      setLoading(false);
    }
  }, [id]);

  if (loading) return <div><Loading /></div>;

  if (error) return <div><ErrorPage /></div>;

  if (!blog) return <div className={styles.notFound}>Article introuvable</div>;

  // Sanitize the blog content to ensure safe HTML rendering
  const sanitizedContent = DOMPurify.sanitize(blog.content, {
    ALLOWED_TAGS: [
      'b', 'i', 'em', 'strong', 'a', 'p', 'ul', 'ol', 'li', 'u',
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'img', 'video', 'iframe',
      'blockquote', 'pre', 'code', 'br'
    ],
    ALLOWED_ATTR: [
      'href', 'target', 'rel', 'style', 'src', 'alt', 'controls', 
      'class', 'width', 'height', 'frameborder', 'allow', 'allowfullscreen'
    ],
  });
  
  

  return (
    <div className={styles.container}>
      <div className="relative p-4">
        <div className="max-w-7xl mx-auto">
          <div className="mt-3 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div>
              <h1 className="text-white font-bold text-4xl mb-11">{blog.title}</h1>
              <hr />
              <div
                className={`${styles.blogContent} text-base leading-8 my-5`}
                dangerouslySetInnerHTML={{ __html: sanitizedContent }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
