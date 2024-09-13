'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Blog.module.css";
import Loading from "@/components/Loading";

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

export default function Blog() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);  // New loading state
  
  useEffect(() => {
    const getBlogs = async () => {
      try {
        const fetchedBlogs = await fetchBlogs();
        setBlogs(fetchedBlogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);  // Set loading to false after fetch
      }
    };

    getBlogs();
  }, []);

  return (
    <>
      <div className={styles.blogSection}>
        <h1>Our Blogs</h1>
        {loading ? (
          <div>
            <Loading/>
          </div>
        ) : blogs.length === 0 ? (
          <div className={styles.noBlogs}>
            <p>No blogs available</p>  {/* Changed message here */}
          </div>
        ) : (
          <div className={styles.blogsContainer}>
            {blogs.map((blog) => (
              <article key={blog._id} className={styles.blog}>
                <Link href={`/blog/${blog._id}`} passHref className={styles.link}>
                  
                    <Image
                      src={blog.imageUrl}
                      alt={`Image of ${blog.title}`}
                      width={300}
                      height={300}
                      layout="responsive"
                    />
                    <h1>{blog.title}</h1>
                    <p>{blog.description}</p>
                    <div className={styles.readMore}>
                      <button>Read More</button>
                    </div>
                  
                </Link>
              </article>
            ))}
         
          </div>
        )}
      </div>
    </>
  );
}
