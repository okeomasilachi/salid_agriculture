import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
      <main className="container py-12 space-y-20">
        {/* About Us */}
        <section id="about" className="py-10">
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
              <Link
                href="/about"
                className={`${buttonVariants({
                  variant: "default",
                  size: "lg",
                })} mt-6`}
              >
                Learn More About Our Story
              </Link>
            </div>
            <div className="relative overflow-hidden">
              <Image
                src="/logo.png"
                alt="Farmers working"
                width={500}
                height={300}
                className="object-cover rounded-lg shadow size-full"
              />
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="py-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Products
            </h2>
            <p className="text-xl text-gray-600">
              Fresh from the Farm to Your Table
            </p>
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
              <Card
                key={index}
                className="flex flex-col h-[400px] transition-transform duration-300 hover:scale-110"
              >
                <CardHeader className="relative h-48 p-0 pb-4">
                  <Image
                    src={product.image}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg "
                  />
                </CardHeader>
                <CardContent className="flex-1 mt-5">
                  <CardTitle className="mb-2">{product.title}</CardTitle>
                  <p className="line-clamp-3">{product.description}</p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button size="lg" className="w-full transition duration-300">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Quality Control */}
        <section id="quality" className="py-10">
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
            <Button size="lg" className="transition duration-300">
              Learn More About Our Standards
            </Button>
          </div>
        </section>

        {/* What Our Partners Say */}
        <section id="partners" className="py-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Partners Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear from our valued partners about their experiences working with
              us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "John Doe",
                role: "CEO, Green Farms Co.",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
                quote:
                  "Working with Salid Agriculture has transformed our farming operations. Their commitment to sustainability is unmatched.",
                rating: 5,
              },
              {
                name: "Sarah Wilson",
                role: "Director, Agro Alliance",
                image:
                  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
                quote:
                  "The quality of their products and technical support has helped us achieve remarkable growth.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "Operations Manager, Global Harvest",
                image:
                  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
                quote:
                  "A reliable partner that consistently delivers excellence in agricultural solutions.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-xl transition-shadow"
              >
                <div className="mb-4 relative w-24 h-24 mx-auto">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    layout="fill"
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">
                &quot;{testimonial.quote}&quot;
                </p>
                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                <p className="text-green-600">{testimonial.role}</p>
              </Card>
            ))}
          </div>

          <div className="text-center bg-green-50 rounded-xl p-12">
            <h3 className="text-2xl font-bold mb-4">Become a Partner</h3>
            <p className="text-gray-600 mb-8">
              Partner with us to grow your business and make a positive impact
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Contact Us
            </Button>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="py-10">
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
            <Link
              href="/career"
              className={`${buttonVariants({
                variant: "default",
                size: "lg",
              })}`}
            >
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
            </Link>
          </div>
        </section>

        {/* Latest News */}
        <section id="news" className="py-10">
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
                <Link
                  href="/blog"
                  className={`${buttonVariants({
                    variant: "default",
                    size: "lg",
                  })}`}
                >
                  Learn More
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
                transform transition duration-300 hover:-translate-y-2 flex flex-col h-[500px]"
              >
                <div className="relative h-48 flex-shrink-0">
                  <Image
                    src={news.image}
                    alt={news.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex-1"></div>
                  <span className="text-sm text-green-600 font-medium">
                    {news.date}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mt-2">
                    {news.title}
                  </h3>
                  <p className="mt-2 text-gray-600 line-clamp-3">
                    {news.excerpt}
                  </p>
                </div>
                <div className="mt-4  mb-4 p-6">
                  <Link
                    href="/blog"
                    className={`${buttonVariants({
                      variant: "default",
                      size: "lg",
                    })} w-full`}
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
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className={`${buttonVariants({
                variant: "secondary",
                size: "lg",
              })} transition duration-300 shadow-md hover:shadow-lg`}
            >
              View All News
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our products, services, and
              more.
            </p>
          </div>

          <div className="mb-8">
            <div className="relative max-w-xl mx-auto">
              <Input
                type="search"
                className="w-full p-4 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Search for answers..."
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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              "General Questions",
              "Products",
              "Orders & Shipping",
              "Sustainability",
            ].map((category, index) => (
              <Button
                size="lg"
                variant="secondary"
                key={index}
                className="shadow-md hover:shadow-lg transition-shadow duration-300 font-semibold"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <Accordion type="single" collapsible>
              {[
                {
                  question: "How do I place an order?",
                  answer:
                    "You can place an order through our website or by contacting our sales team directly. We accept various payment methods and offer bulk ordering options.",
                },
                {
                  question: "What payment methods do you accept?",
                  answer:
                    "We accept credit cards, PayPal, and bank transfers. For large orders, we also offer flexible payment plans.",
                },
                {
                  question: "Do you offer international shipping?",
                  answer:
                    "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location.",
                },
                {
                  question: "What is your quality control process?",
                  answer:
                    "Our products undergo rigorous quality control checks at every stage of production, from soil testing to final packaging.",
                },
              ].map((faq, index) => (
                <AccordionItem value={faq.question} key={index}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="relative py-10 rounded-xl">
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
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg bg-white/80 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    {/* Subscribe Button */}
                    <Button
                      type="submit"
                      className="w-full font-semibold transition duration-300 shadow-lg hover:shadow-xl"
                    >
                      Subscribe Now
                    </Button>
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
