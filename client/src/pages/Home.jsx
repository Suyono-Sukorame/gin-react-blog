import React, { useState } from 'react';

const Home = () => {
  // State untuk simulasi data artikel
  const [articles, setArticles] = useState(Array.from({ length: 55 }, (_, i) => ({
    id: i + 1,
    title: `Judul Artikel ${i + 1} yang Menarik dan Informatif`,
    excerpt: 'Ini adalah ringkasan singkat dari artikel yang akan memberikan gambaran kepada pembaca tentang isi artikel tersebut...',
    category: i % 5 === 0 ? 'Teknologi' : i % 5 === 1 ? 'Desain' : i % 5 === 2 ? 'Marketing' : i % 5 === 3 ? 'Kehidupan' : 'Tutorial',
    date: `2023-${(i % 12) + 1}-${(i % 28) + 1}`,
    readTime: `${(i % 10) + 5} min read`,
    image: `https://picsum.photos/600/400?random=${i + 1}`
  })));

  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  // Filter state
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const categories = ['Semua', 'Teknologi', 'Desain', 'Marketing', 'Kehidupan', 'Tutorial'];

  // Filter artikel berdasarkan kategori
  const filteredArticles = selectedCategory === 'Semua' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  // Artikel untuk halaman saat ini
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  // Fungsi untuk mengganti halaman
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 mb-12 rounded-xl">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Modern Blog</h1>
          <p className="text-xl">Discover amazing content and share your thoughts with the world</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-12">
        {/* Filter Kategori */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">Kategori Artikel</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Artikel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentArticles.map((article) => (
            <div key={article.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-blue-600">{article.category}</span>
                  <span className="text-sm text-gray-500">{article.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                  <a href={`/article/${article.id}`} className="text-blue-500 hover:text-blue-700 font-medium">
                    Baca Selengkapnya →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mb-12">
            <nav className="flex items-center space-x-2">
              <button
                onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded-md bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                &laquo; Prev
              </button>
              
              {/* Tampilkan beberapa halaman di sekitar halaman aktif */}
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter(page => 
                  page === 1 || 
                  page === totalPages || 
                  (page >= currentPage - 1 && page <= currentPage + 1)
                )
                .map((page, index, array) => {
                  const showEllipsis = index > 0 && page - array[index - 1] > 1;
                  return (
                    <React.Fragment key={page}>
                      {showEllipsis && <span className="px-2">...</span>}
                      <button
                        onClick={() => paginate(page)}
                        className={`px-3 py-1 rounded-md ${
                          currentPage === page
                            ? 'bg-blue-500 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {page}
                      </button>
                    </React.Fragment>
                  );
                })}
              
              <button
                onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded-md bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next &raquo;
              </button>
            </nav>
          </div>
        )}

        {/* Featured/Popular Articles Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Artikel Populer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.slice(0, 4).map((article) => (
              <div key={`featured-${article.id}`} className="bg-white rounded-xl shadow-md overflow-hidden flex">
                <img src={article.image} alt={article.title} className="w-1/3 object-cover" />
                <div className="p-4 flex-1">
                  <span className="text-sm font-medium text-blue-600">{article.category}</span>
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">{article.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{article.date}</span>
                    <a href={`/article/${article.id}`} className="text-blue-500 hover:text-blue-700 text-sm">
                      Baca →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="bg-gray-100 py-12 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">Berlangganan Newsletter</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Dapatkan update artikel terbaru langsung ke inbox Anda. Tidak spam, promise!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Alamat email Anda"
              className="px-4 py-3 rounded-lg mb-2 sm:mb-0 sm:mr-2 flex-grow border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
              Berlangganan
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto text-center my-16">
        <h2 className="text-3xl font-semibold text-dark mb-6">Ready to Start Blogging?</h2>
        <p className="text-gray-600 mb-8">
          Join our community of writers and share your thoughts with the world. 
          Create, publish, and manage your blog posts with our easy-to-use platform.
        </p>
        <a 
          href="/blog" 
          className="btn-primary inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Go to Blog Dashboard
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Home;