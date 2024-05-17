"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function PostCreate() {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const addPost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !body) {
      setError("Title and content are required");
      return;
    }

    const formData = {
      title: title,
      content: body,
    };

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const content = await response.json();

      if (response.ok) {
        router.push("/post");
      } else {
        setError(content.message || "Failed to add post");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="w-full" onSubmit={addPost}>
      <span className="font-bold text-yellow-500 py-2 block underline text-2xl">Form Add</span>
      {error && <div className="text-red-500 py-2">{error}</div>}
      <div className="w-full py-2">
        <label htmlFor="title" className="text-sm font-bold py-2 block">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          className="w-full border-[1px] border-gray-200 p-2 rounded-sm"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="w-full py-2">
        <label htmlFor="content" className="text-sm font-bold py-2 block">Content</label>
        <textarea
          name="content"
          id="content"
          className="w-full border-[1px] border-gray-200 p-2 rounded-sm"
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <div className="w-full py-2">
        <button
          type="submit"
          className="w-20 p-2 text-white border-gray-200 border-[1px] rounded-sm bg-green-400"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
}
