'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Blog.module.css";
import Loading from "@/components/Loading";
import { useRouter } from "next/navigation";

interface Blog {
  _id: string;
  title: string;
  description: string;
  content: string;
}

async function fetchBlogs(): Promise<Blog[]> {
  try {
    const res = await fetch('/api/blogs', { cache: 'no-store' });
    if (!res.ok) {
      throw new Error('Échec de la récupération des blogs');
    }
    return await res.json(); // Retourne les données JSON analysées
  } catch (error) {
    console.error('Erreur lors de la récupération des blogs:', error);
    return [];
  }
}

export default function Blog() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);  // Nouvel état de chargement
  
  useEffect(() => {
    const getBlogs = async () => {
      try {
        const fetchedBlogs = await fetchBlogs();
        setBlogs(fetchedBlogs);
      } catch (error) {
        console.error('Erreur lors de la récupération des blogs:', error);
      } finally {
        setLoading(false);  // Mettre le chargement à false après la récupération
      }
    };

    getBlogs();
  }, []);

  return (
    <>
      <div className={styles.blogSection}>
        <h1 style={{marginTop: '100px', textAlign:'center'}}>Nos Blogs</h1>
        {loading ? (
          <div>
            <Loading/>
          </div>
        ) : blogs.length === 0 ? (
          <div className={styles.noBlogs}>
            <p style={{textAlign:'center'}}>Aucun blog disponible</p>
          </div>
        ) : (
          <div className={styles.blogsContainer}>
            {blogs.map((blog) => {
              return (
                <div key={blog._id} className="flex flex-col p-5 lg:px-48 lg:py-11">
                  <div className="bg-gray-700 p-5 mb-10 rounded-lg shadow-lg">
                    <h1 className="font-bold text-2xl mb-0 text-white">{blog.title}</h1>
                    <p className="mt-1 mb-6 text-gray-300">{blog.description}</p>
                    {/* Lien vers la page dynamique du blog */}
                    <Link href={`/blog/${blog._id}`}>
                      <button className="text-white font-semibold bg-blue-500 hover:bg-blue-600 p-2 rounded">
                        Lire la suite...
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
