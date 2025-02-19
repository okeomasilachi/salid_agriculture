import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="https://th.bing.com/th/id/R.2bc9986f96ecf484d6e4bb53a9b27964?rik=JgYs5SGXf1zKJA&pid=ImgRaw&r=0"
          alt="Agricultural Landscape"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center container">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
            Welcome to Salid Agriculture Nigeria Limited
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* About Us */}
        <section id="about" className="container py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                About Us
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                At Salid Agriculture Nigeria Limited, we are dedicated to
                transforming agriculture with cutting-edge practices and
                unparalleled quality. Our commitment to excellence has set us
                apart as leaders in the agricultural market.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to sustainably grow and provide high-quality
                produce while supporting local communities and promoting
                environmental stewardship.
              </p>
              <Link href="/about">
                <button className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none">
                  Learn More About Our Story
                </button>
              </Link>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow">
              <Image
                src="https://th.bing.com/th/id/R.2bc9986f96ecf484d6e4bb53a9b27964?rik=JgYs5SGXf1zKJA&pid=ImgRaw&r=0"
                alt="Farmers working"
                width={500}
                height={300}
                className="object-cover rounded-lg shadow size-full"
              />
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="container my-10 py-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Products
            </h2>
            <p className="text-xl text-gray-600">
              Fresh from the Farm to Your Table
            </p>
          </div>

          <div className="mb-8">
            <div className="relative max-w-xl mx-auto">
              <input
                type="search"
                className="w-full p-4 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Search products..."
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Organic Wheat",
                description:
                  "Premium quality wheat grown using sustainable farming practices",
                image:
                  "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
              },
              {
                title: "Fresh Vegetables",
                description:
                  "Locally sourced, pesticide-free vegetables harvested daily",
                image:
                  "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
              },
              {
                title: "Premium Rice",
                description:
                  "High-grade rice cultivated with precision and care",
                image:
                  "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quality Control */}
        <section id="quality" className="container my-10 py-10">
          <div className="relative rounded-xl overflow-hidden mb-12">
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399"
                alt="Quality Control"
                layout="fill"
                objectFit="cover"
                className="brightness-50"
              />
            </div>
            <div className="relative py-16 px-8">
              <h2 className="text-4xl font-bold text-white text-center mb-4">
                Our Commitment to Quality
              </h2>
              <p className="text-xl text-white text-center max-w-3xl mx-auto">
                Every step of our process is carefully monitored to ensure the
                highest quality standards
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "Step 1: Soil Testing",
                description:
                  "Comprehensive soil analysis for optimal growing conditions",
                icon: "🌱",
              },
              {
                step: "Step 2: Organic Fertilization",
                description:
                  "Using only certified organic fertilizers for sustainable farming",
                icon: "🌿",
              },
              {
                step: "Step 3: Growth Monitoring",
                description: "Daily inspection of crop health and development",
                icon: "📈",
              },
              {
                step: "Step 4: Quality Testing",
                description:
                  "Rigorous testing of harvest for safety and quality",
                icon: "🔍",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start mb-8">
                <div className="flex-shrink-0 bg-green-100 rounded-full p-4 mr-4">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.step}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition duration-300">
              Learn More About Our Standards
            </button>
          </div>

          <div className="mt-16 bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">
              What Our Partners Say
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote:
                    "The quality of produce from Salid Agriculture is consistently exceptional.",
                  author: "John Doe",
                  role: "CEO, Global Foods",
                },
                {
                  quote:
                    "Their commitment to quality control is unmatched in the industry.",
                  author: "Jane Smith",
                  role: "Director, AgriTech Solutions",
                },
              ].map((testimonial, index) => (
                <blockquote
                  key={index}
                  className="bg-white p-6 rounded-lg shadow"
                >
                  <p className="text-gray-600 italic mb-4">
                    {testimonial.quote}
                  </p>
                  <footer>
                    <strong className="text-gray-900">
                      {testimonial.author}
                    </strong>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="container py-16 my-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The passionate people behind Salid Agriculture
            </p>
          </div>

          {/* Team Group Photo */}
          <div className="relative h-[400px] mb-16 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
              alt="Our Team"
              layout="fill"
              objectFit="cover"
              className="brightness-90"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Jane Doe",
                role: "CEO & Founder",
                image:
                  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
                bio: "20+ years experience in sustainable agriculture, passionate about empowering local farmers",
              },
              {
                name: "John Smith",
                role: "Chief Operating Officer",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
                bio: "Expert in agricultural operations with a focus on innovation and efficiency",
              },
              {
                name: "Robert Brown",
                role: "Export Manager",
                image:
                  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
                bio: "Specializes in international trade relations and quality control standards",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-green-600 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/career">
              <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition duration-300">
                Join Our Team
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </section>

        {/* Latest News */}
        <section id="news" className="container my-10 py-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest News
            </h2>
            <p className="text-xl text-gray-600">
              Stay Informed About Agriculture Trends and Our Journey
            </p>
          </div>

          {/* Featured News */}
          <div className="relative h-[400px] rounded-xl overflow-hidden mb-12 group">
            <Image
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449"
              alt="Featured News"
              layout="fill"
              objectFit="cover"
              className="brightness-75 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div className="absolute bottom-0 p-8 text-white">
                <span className="bg-green-600 text-sm px-3 py-1 rounded-full">
                  Featured
                </span>
                <h3 className="text-3xl font-bold mt-4 mb-2">
                  Revolutionizing Organic Farming: Our New Initiative
                </h3>
                <p className="text-lg mb-4">
                  Discover how we&apos;re leading the way in sustainable
                  agriculture.
                </p>
                <Link href="/blog">
                  <button
                    className="bg-white text-green-600 px-6 py-2 rounded-lg font-medium 
            hover:bg-green-600 hover:text-white transition duration-300"
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1560493676-04071c5f467b",
                date: "March 15, 2024",
                title: "Sustainable Farming Techniques",
                excerpt:
                  "Learn how we implemented eco-friendly methods to increase yield while reducing environmental impact.",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?q=80&w=1285&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                date: "March 10, 2024",
                title: "Community Training Program Launch",
                excerpt:
                  "Our new program empowers local farmers with modern agricultural knowledge and techniques.",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1606041008023-472dfb5e530f",
                date: "March 5, 2024",
                title: "Export Excellence Award 2024",
                excerpt:
                  "Salid Agriculture receives recognition for outstanding contribution to Nigerian exports.",
              },
            ].map((news, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden 
          transform transition duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48">
                  <Image
                    src={news.image}
                    alt={news.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-green-600 font-medium">
                    {news.date}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mt-2">
                    {news.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{news.excerpt}</p>
                  <button
                    className="mt-4 text-green-600 hover:text-green-800 font-medium 
              inline-flex items-center"
                  >
                    Read more
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              className="bg-green-600 text-white px-8 py-3 rounded-lg 
              hover:bg-green-700 transition duration-300"
            >
              View All News
            </button>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="relative py-10 my-10 rounded-xl conatiner">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 w-full rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1594489428504-5c0c480a15fd"
              alt="Agriculture Background"
              layout="fill"
              objectFit="cover"
              className="brightness-50 rounded-xl"
            />
          </div>

          {/* Content Container */}
          <div className="relative mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              {/* Main Heading */}
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join Us in Growing the Future
              </h2>

              {/* Subheading */}
              <p className="text-xl text-gray-200 mb-10">
                Stay connected with the latest innovations in sustainable
                agriculture and exclusive updates from Salid Agriculture.
              </p>

              {/* Newsletter Form */}
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email Input */}
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg bg-white/80 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    {/* Subscribe Button */}
                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300 shadow-lg hover:shadow-xl"
                    >
                      Subscribe Now
                    </button>
                  </div>
                </form>

                {/* Social Proof */}
                <p className="text-sm text-gray-200 mt-6">
                  Join over 10,000+ agricultural professionals who trust our
                  insights
                </p>

                {/* Additional CTAs */}
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                  <button className="inline-flex items-center px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition duration-300">
                    <span className="mr-2">Explore Products</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                  <button className="inline-flex items-center px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition duration-300">
                    <span className="mr-2">Contact Sales</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
