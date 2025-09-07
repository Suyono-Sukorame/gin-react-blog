import React from 'react';

const Home = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 mb-12 rounded-xl">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Modern Blog</h1>
          <p className="text-xl">Discover amazing content and share your thoughts with the world</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto text-center my-16">
        <h2 className="text-3xl font-semibold text-dark mb-6">Ready to Start Blogging?</h2>
        <p className="text-gray-600 mb-8">
          Join our community of writers and share your thoughts with the world. 
          Create, publish, and manage your blog posts with our easy-to-use platform.
        </p>
        <a 
          href="/blog" 
          className="btn-primary inline-flex items-center"
        >
          Go to Blog Dashboard
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
      {/* Konten blog akan ditambahkan di sini nanti */}
    </div>
  );
};

export default Home;