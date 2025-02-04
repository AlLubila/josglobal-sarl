"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAdminLoggedIn } from "@/utils/auth";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface Blog {
  _id: string;
  title: string;
  description: string;
  content: string;
}

async function fetchBlogs(): Promise<Blog[]> {
  try {
    const res = await fetch("/api/blogs", { cache: "no-store" });
    if (!res.ok) {
      throw new Error("Échec du chargement des blogs");
    }
    return await res.json();
  } catch (error) {
    console.error("Erreur lors du chargement des blogs:", error);
    return [];
  }
}

async function deleteBlog(id: string): Promise<boolean> {
  try {
    const res = await fetch(`/api/blogs/${id}`, {
      method: "DELETE",
    });
    return res.ok;
  } catch (error) {
    console.error("Erreur lors de la suppression du blog:", error);
    return false;
  }
}

interface FormData {
  title: string;
  description: string;
  content: string;
}

const DESCRIPTION_MAX_LENGTH = 200;

export default function ContentManagement() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    content: "",
  });
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [descriptionLength, setDescriptionLength] = useState(0);
  const [editBlogId, setEditBlogId] = useState<string | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!isAdminLoggedIn()) {
      router.push("/unauthorized");
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
    setIsSubmitting(true);
    setMessage("");

    try {
      const form = new FormData();
      form.append("title", formData.title);
      form.append("description", formData.description);
      form.append("content", formData.content);

      const response = await fetch(`/api/blogs/${editBlogId || ""}`, {
        method: editBlogId ? "PUT" : "POST",
        body: form,
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(
          editBlogId ? "Blog mis à jour avec succès!" : "Blog créé avec succès!"
        );
        setFormData({ title: "", description: "", content: "" });
        setDescriptionLength(0);
        setEditBlogId(null);
        const fetchedBlogs = await fetchBlogs();
        setBlogs(fetchedBlogs);
      } else {
        setMessage(result.message || "Quelque chose s'est mal passé.");
      }
    } catch (error) {
      setMessage("Erreur lors de la soumission du formulaire.");
    }
    setIsSubmitting(false);

    // Masquer le message après 3 secondes
    setTimeout(() => setMessage(""), 3000);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const description = e.target.value;
    if (description.length <= DESCRIPTION_MAX_LENGTH) {
      setFormData({ ...formData, description });
      setDescriptionLength(description.length);
    }
  };

  const handleContentChange = (value: string) => {
    setFormData({ ...formData, content: value });
  };

  const handleEdit = (blog: Blog) => {
    setFormData({
      title: blog.title,
      description: blog.description,
      content: blog.content,
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
        setMessage("Blog supprimé avec succès!");
      } else {
        setMessage("Erreur lors de la suppression du blog.");
      }
      setShowDeleteModal(false);
      setBlogToDelete(null);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold my-6 text-center text-white">
        Gestion de contenu
      </h1>
      <div className="min-h-screen flex flex-col items-center bg-[#021526] text-white py-10 px-4">
        {/* Section Créer ou Mettre à jour un blog */}
        <section className="w-full max-w-2xl bg-gray-800 p-8 rounded-lg shadow-lg mb-10">
          <h2 className="text-2xl font-bold mb-4 text-center">
            {editBlogId ? "Modifier le blog" : "Créer un blog"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-semibold mb-2"
              >
                Titre
              </label>
              <input
                id="title"
                type="text"
                placeholder="Entrez le titre"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-blue-500 focus:ring-2 focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-semibold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                rows={5}
                placeholder="Entrez la description (Max 200 caractères)"
                value={formData.description}
                onChange={handleDescriptionChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-blue-500 focus:ring-2 focus:outline-none resize-none"
                required
              />
              <div className="text-sm text-gray-400 mt-1 text-right">
                {descriptionLength}/{DESCRIPTION_MAX_LENGTH} caractères
              </div>
            </div>
            <div>
              <label
                htmlFor="content"
                className="block text-sm font-semibold mb-2"
              >
                Contenu
              </label>
              <ReactQuill
                value={formData.content}
                onChange={handleContentChange}
                modules={{
                  toolbar: [
                    // Ligne 1 : boutons de mise en forme
                    ['bold', 'italic', 'underline'],
                    // Ligne 2 : couleurs du texte et de fond
                    [{ color: [] }, { background: [] }],
                    // Ligne 3 : insertion de lien
                    ['link'],
                  ],
                }}
                // On limite les formats disponibles afin que seuls ceux-ci soient utilisés
                formats={['bold', 'italic', 'underline', 'color', 'background', 'link']}
                className="text-white rounded-lg"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 focus:ring focus:ring-blue-500 text-white py-3 rounded-lg font-bold transition duration-300"
            >
              {isSubmitting
                ? "Envoi en cours..."
                : editBlogId
                ? "Mettre à jour l'article"
                : "Créer l'article"}
            </button>
            {message && (
              <p className="text-center mt-4 text-yellow-400">{message}</p>
            )}
          </form>
        </section>

        {/* Liste des articles de blog pour modifier/supprimer */}
        <section className="w-full max-w-4xl bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-6 text-center text-white">
            Articles existants
          </h2>
          <div className="overflow-x-auto">
            {blogs.length > 0 ? (
              <table className="table-auto w-full text-left text-gray-300">
                <thead className="bg-gray-700 text-gray-400">
                  <tr>
                    <th className="px-4 py-3">#</th>
                    <th className="px-4 py-3">Titre</th>
                    <th className="px-4 py-3">Description</th>
                    <th className="px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {blogs.map((blog, index) => (
                    <tr
                      key={blog._id}
                      className="border-b border-gray-600 hover:bg-gray-700 transition duration-300"
                    >
                      <td className="px-4 py-4 text-center">{index + 1}</td>
                      <td className="px-4 py-4 font-semibold text-blue-400">
                        {blog.title}
                      </td>
                      <td className="px-4 py-4 text-gray-400">
                        {blog.description}
                      </td>
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
              <p className="text-center text-gray-400">
                Aucun article disponible.
              </p>
            )}
          </div>
        </section>
      </div>

      {/* Modal de confirmation de suppression */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-center">
              Confirmer la suppression
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Êtes-vous sûr de vouloir supprimer cet article de blog?
            </p>
            <div className="flex justify-around">
              <button
                onClick={confirmDelete}
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition"
              >
                Confirmer
              </button>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Styles personnalisés pour l'éditeur Quill */}
      <style jsx global>{`
        .ql-editor {
          min-height: 300px;
          padding: 20px;
          font-size: 16px;
        
        }
          .ql-toolbar {
          display: flex;
          justify-content: center;
  }
      `}</style>
    </>
  );
}
