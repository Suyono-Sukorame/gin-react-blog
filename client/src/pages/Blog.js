// client/src/pages/Blog.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get('http://localhost:8080/posts');
      setPosts(res.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const createPost = async (postData) => {
    try {
      const res = await axios.post('http://localhost:8080/posts', {
        title: postData.title,
        body: postData.body
      });
      // Gunakan data dari backend, termasuk ID auto-increment
      setPosts(prevPosts => [...prevPosts, res.data]);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/posts/${id}`);
      setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-semibold text-dark">Blog Dashboard</h2>
        <a 
          href="/" 
          className="text-primary hover:text-blue-700 flex items-center transition-colors"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to Home
        </a>
      </div>
      
      <PostForm onSubmit={createPost} />
      
      <h2 className="text-2xl font-semibold text-dark mb-6">Your Posts</h2>
      
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No posts yet. Create your first post!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <PostCard 
              key={post.id} 
              post={post} 
              onDelete={deletePost}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
