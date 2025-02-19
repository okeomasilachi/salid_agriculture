import { FC } from "react";
import Image from "next/image";

// Hero Section Component
const HeroSection: FC = () => (
  <div className="relative w-full h-[500px]">
    <Image
      src="https://images.unsplash.com/photo-1721959525992-d9da99585c89?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Farm landscape"
      fill
      className="object-cover"
    />
    <div className="absolute inset-0 bg-black/40">
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-5xl font-bold mb-4">
          Insights & Stories from the Field
        </h1>
        <p className="text-xl mb-8">
          Explore the latest trends, tips, and updates in agriculture.
        </p>
        <div className="w-full max-w-xl">
          <input
            type="search"
            placeholder="Search blog posts..."
            className="w-full px-6 py-3 rounded-full text-gray-800"
          />
        </div>
      </div>
    </div>
  </div>
);

// Blog Categories Component
const BlogCategories: FC = () => {
  const categories = [
    { name: "Sustainable Farming", icon: "🌱" },
    { name: "Crop Tips", icon: "🌾" },
    { name: "Industry News", icon: "📰" },
    { name: "Success Stories", icon: "🏆" },
    { name: "Innovations", icon: "💡" },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Explore by Category
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {categories.map((category) => (
            <button
              key={category.name}
              className="flex-shrink-0 px-6 py-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

// Featured Posts Component
const FeaturedPosts: FC = () => (
  <section className="py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">Featured Posts</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((post) => (
          <div
            key={post}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src={`https://images.unsplash.com/photo-1621460249485-4e4f92c9de5d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                alt={`Featured post ${post}`}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                5 Sustainable Farming Practices for 2023
              </h3>
              <p className="text-gray-600 mb-4">
                Learn about the latest sustainable farming practices that are
                revolutionizing agriculture...
              </p>
              <button className="text-green-600 font-semibold hover:text-green-700">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Blog Grid Component
const BlogGrid: FC = () => (
  <section className="py-12 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Latest Posts</h2>
        <select className="px-4 py-2 rounded-md border">
          <option>Latest</option>
          <option>Popular</option>
          <option>Category</option>
        </select>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Blog post cards */}
      </div>
    </div>
  </section>
);

// Newsletter Section Component
const NewsletterSection: FC = () => (
  <section className="py-12 bg-green-50">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
      <p className="mb-8">
        Subscribe to our newsletter for the latest news and insights.
      </p>
      <form className="max-w-xl mx-auto flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Your name"
          className="flex-1 px-4 py-2 rounded-md"
        />
        <input
          type="email"
          placeholder="Your email"
          className="flex-1 px-4 py-2 rounded-md"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-8 py-2 rounded-md hover:bg-green-700"
        >
          Subscribe
        </button>
      </form>
    </div>
  </section>
);

// Main Blog Page Component
const BlogPage: FC = () => {
  return (
    <main>
      <HeroSection />
      <BlogCategories />
      <FeaturedPosts />
      <BlogGrid />
      <NewsletterSection />
    </main>
  );
};

export default BlogPage;
