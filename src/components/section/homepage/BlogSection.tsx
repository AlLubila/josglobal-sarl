'use client'

import React, { useEffect, useState } from 'react';
import styles from '@/styles/section/homepage/blogSection.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { getImgProps } from '@/utils/getImgProps'; // Import the getImgProps function

interface Blog {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
}

async function fetchBlogs(): Promise<Blog[]> {
  const res = await fetch('/api/blogs', { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch blogs');
  }

  return res.json();
}

export default function BlogSection() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  
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
  
  // Sort blogs by _id in descending order and slice the last three
  const sortedBlogs = blogs.sort((a, b) => b._id.localeCompare(a._id));
  const lastThreeBlogs = sortedBlogs.slice(0, 3);

  if (lastThreeBlogs.length === 0) {
    return null; // No blogs, render nothing
  }

  return (
    <>
      <section className={styles.blogSection}>
        <h1>Our Recent Blogs</h1>
        <div className={styles.blogsContainer}>
          {lastThreeBlogs.map((blog) => {
            const imgProps = getImgProps(blog.imageUrl); // Get image properties
            return (
              <div className={styles.blog} key={blog._id}>
                <Link href={`/blog/${blog._id}`} className={styles.link}>
                  <Image
                    src={imgProps.src}
                    alt={`Image of ${blog.title}`}
                    width={imgProps.width}
                    height={imgProps.height}
                  />
                  <h1>{blog.title}</h1>
                  <p>{blog.description}</p>
                  <div className={styles.readMore}>
                    <button>Read More</button>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section> 
    </>
  );
}
