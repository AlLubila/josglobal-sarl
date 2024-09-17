'use client'

import React, { useEffect, useState } from 'react';
import styles from '@/styles/section/homepage/blogSection.module.css';
import Link from 'next/link';
import Image from 'next/image';


interface Blog {
  _id: string;
  title: string;
  description: string;
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

  // if (lastThreeBlogs.length === 0) {
  //   return null; 
  // }

  return (
    <>
    {
      blogs.length > 0 && (
        <section className={styles.blogSection}>
        <h1>Our Recent Blogs</h1>
        <div className={styles.blogsContainer}>
          {lastThreeBlogs.map((blog) => {
            return (
              <section className="flex flex-col justify-center max-w-7xl px-4 py-10 mx-auto sm:px-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-1">
                  <div className="p-4 flex flex-col justify-between gap-2 border rounded-lg shadow-md bg-white dark:bg-gray-700 dark:border-gray-400/40">
                      <p className="text-xl font-semibold text-blue-700 hover:underline two-lines dark:text-blue-100">
                          {blog.title}
                      </p>
      
                      <p className="text-gray-800 two-lines dark:text-gray-300">
                         {blog.description}
                      </p>
                      <div className="flex items-center justify-between text-sm">
      
                          <Link href={`/blog/${blog._id}`} className="text-blue-700 hover:underline dark:text-white">
                              Read more
                          </Link>
                      </div>
                  </div>          
              </div>
          </section>
            );
          })}

        </div>
      </section> 
      )
    }
    </>
  );
}
