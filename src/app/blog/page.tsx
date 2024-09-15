'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Blog.module.css";
import Loading from "@/components/Loading";
import { getImgProps } from '@/utils/getImgProps';

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
        <h1 style={{marginTop: '100px'}}>Our Blogs</h1>
        {/* {loading ? (
          <div>
            <Loading/>
          </div>
        ) : blogs.length === 0 ? (
          <div className={styles.noBlogs}>
            <p>No blogs available</p>
          </div>
        ) : (
          <div className={styles.blogsContainer}>
            {blogs.map((blog) => {
              const imgProps = getImgProps(blog.imageUrl); // Get image properties
              return (
                <article key={blog._id} className={styles.blog}>
                  <Link href={`/blog/${blog._id}`} passHref className={styles.link}>
                    <Image
                      src={imgProps.src}
                      alt={`Image of ${blog.title}`}
                      width={imgProps.width}
                      height={imgProps.height}
                      layout="responsive"
                    />
                    <h1>{blog.title}</h1>
                    <p>{blog.description}</p>
                    <div className={styles.readMore}>
                      <button>Read More</button>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        )} */}

      <div className={styles.blogsContainer}>
      <div className="flex flex-col p-5 lg:px-48 lg:py-11">
    <div className="bg-gray-700 p-5 mb-10 rounded-lg shadow-lg">
        <h1 className="font-bold text-2xl mb-0 text-white">Tailwind Rocks!</h1>
        <p className="mt-1 mb-6 text-gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius eaque a ipsam aliquid omnis,
            beatae possimus recusandae illum rem. Minima sequi voluptas repudiandae id? Quae, facere quam suscipit sed,
            aperiam sapiente pariatur soluta enim perferendis illum veniam excepturi doloribus ducimus voluptatibus
            numquam officiis expedita culpa hic sequi quasi reprehenderit iste obcaecati nostrum. Consequuntur aliquam,
            assumenda architecto animi veniam dolore dolor?</p>
        <button className="text-white font-semibold bg-blue-500 hover:bg-blue-600 p-2 rounded">Read More...</button>
    </div>
    <div className="bg-gray-700 p-5 mb-10 rounded-lg shadow-lg">
        <h1 className="font-bold text-2xl mb-0 text-white">Tailwind Rocks!</h1>
        <p className="mt-1 mb-6 text-gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius eaque a ipsam aliquid omnis,
            beatae possimus recusandae illum rem. Minima sequi voluptas repudiandae id? Quae, facere quam suscipit sed,
            aperiam sapiente pariatur soluta enim perferendis illum veniam excepturi doloribus ducimus voluptatibus
            numquam officiis expedita culpa hic sequi quasi reprehenderit iste obcaecati nostrum. Consequuntur aliquam,
            assumenda architecto animi veniam dolore dolor?</p>
        <button className="text-white font-semibold bg-blue-500 hover:bg-blue-600 p-2 rounded">Read More...</button>
    </div>
    <div className="bg-gray-700 p-5 mb-10 rounded-lg shadow-lg">
        <h1 className="font-bold text-2xl mb-0 text-white">Tailwind Rocks!</h1>
        <p className="mt-1 mb-6 text-gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius eaque a ipsam aliquid omnis,
            beatae possimus recusandae illum rem. Minima sequi voluptas repudiandae id? Quae, facere quam suscipit sed,
            aperiam sapiente pariatur soluta enim perferendis illum veniam excepturi doloribus ducimus voluptatibus
            numquam officiis expedita culpa hic sequi quasi reprehenderit iste obcaecati nostrum. Consequuntur aliquam,
            assumenda architecto animi veniam dolore dolor?</p>
        <button className="text-white font-semibold bg-blue-500 hover:bg-blue-600 p-2 rounded">Read More...</button>
    </div>
</div>


      </div>  
      </div>
    </>
  );
}
