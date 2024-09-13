'use client'

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import styles from '@/styles/SingleBlog.module.css';
import Loading from '@/components/Loading';
import ErrorPage from '@/components/ErrorPage';

interface Blog {
  _id: string;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
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
    return null; // Return null on error
  }
}

export default function SinglePost() {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true); // New loading state
  const [error, setError] = useState<string | null>(null); // Error state
  const { id } = useParams();  // Access the route parameter using useParams

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
          setLoading(false);  // Set loading to false after fetch
        }
      };

      getBlog();
    } else {
      setError('No blog ID provided');
      setLoading(false);
    }
  }, [id]);

  if (loading) return <div><Loading/></div>;

  if (error) return <div> <ErrorPage/> </div>;

  if (!blog) return <div className={styles.notFound}>Blog not found</div>;

  return (
    <>
    <div className={styles.container}>
      <div className={styles.imgContainer}>
      <Image
        src={blog.imageUrl}
        alt={`Image of ${blog.title}`}
        width={600}
        height={400}
        className={styles.image}
        layout="responsive"
      />
      </div>
      <div className={styles.textContainer}>
      <h1 className={styles.title}>{blog.title}</h1>
      <div className={styles.content}>{blog.content}</div>
      </div>
      </div>
      </>
  );
}
