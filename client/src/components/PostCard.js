import React from 'react';
import { motion } from 'framer-motion';

const PostCard = ({ post, onDelete }) => {
  return (
    <motion.div
      className="card bg-white shadow-md rounded-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6">
        {/* Judul */}
        <h3 className="text-xl font-semibold text-dark mb-2">{post.title}</h3>
        {/* Isi post */}
        <p className="text-gray-600 mb-4">{post.body}</p>

        {/* Footer dengan tanggal dari backend dan tombol delete */}
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {post.CreatedAt ? new Date(post.CreatedAt).toLocaleDateString() : '-'}
          </span>
          <button 
            onClick={() => onDelete(post.id)}
            className="btn-danger text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PostCard;
