import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold text-dark mb-6">About Us</h2>
      <div className="bg-white rounded-xl shadow-md p-8">
        <p className="text-gray-600 mb-4">
          Welcome to Modern Blog, a platform where writers and readers connect to share ideas,
          stories, and knowledge. Our mission is to create a community of passionate individuals
          who believe in the power of words to inspire, educate, and transform.
        </p>
        <p className="text-gray-600 mb-4">
          Founded in 2023, we've grown to become a trusted source for quality content across
          various topics including technology, lifestyle, health, and personal development.
        </p>
        <p className="text-gray-600">
          Our team of dedicated writers and editors work tirelessly to bring you content that
          matters - content that makes a difference in your daily life and broadens your
          perspective on the world.
        </p>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl font-bold">50+</span>
            </div>
            <h3 className="font-semibold">Writers</h3>
          </div>
          <div className="text-center">
            <div className="bg-green-100 text-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl font-bold">500+</span>
            </div>
            <h3 className="font-semibold">Articles</h3>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 text-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl font-bold">10K+</span>
            </div>
            <h3 className="font-semibold">Readers</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;