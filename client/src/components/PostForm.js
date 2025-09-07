import React, { useState } from 'react';

const PostForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && body) {
      onSubmit({ title, body }); // kirim ke parent (Blog.js)
      setTitle('');
      setBody('');
    }
  };

  return (
    <div className="card mb-8 bg-white shadow-md rounded-md p-6">
      <h2 className="text-2xl font-semibold text-dark mb-4">Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-field border rounded w-full px-3 py-2"
            placeholder="Enter post title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Content</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="input-field border rounded w-full px-3 py-2"
            rows="4"
            placeholder="Write your post content"
          ></textarea>
        </div>
        <button type="submit" className="btn-primary bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Publish Post
        </button>
      </form>
    </div>
  );
};

export default PostForm;
