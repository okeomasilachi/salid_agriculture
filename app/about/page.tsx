"use client";

import Image from "next/image";

// Hero Section Component
const Hero = () => (
  <div className="relative h-[600px] w-full">
    <Image
      src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Add your image path
      alt="Farm landscape"
      fill
      className="object-cover"
    />
    <div className="absolute inset-0 bg-black/40" />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
      <h1 className="text-5xl font-bold mb-4">Growing the Future, Naturally</h1>
      <p className="text-xl mb-8 max-w-2xl text-center">
        For over a decade, we&apos;ve been committed to sustainable agriculture
        and delivering the best to your table.
      </p>
      <button className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-full">
        Learn More About Our Mission
      </button>
    </div>
  </div>
);

// Our Story Component
const Story = () => (
  <section className="py-20 px-4 max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="relative h-[400px]">
        <Image
          src="/sn.webp" // Add your image path
          alt="Our story"
          fill
          priority
          className="object-cover rounded-lg"
        />
      </div>
      <div>
        <h2 className="text-4xl font-bold mb-6">Our Story</h2>
        <p className="text-gray-600">
          Founded in 2010, our journey began with a small family farm and a big
          vision..., Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Temporibus tenetur illum perferendis sed voluptate. Sint tempora
          mollitia, sit quisquam eius distinctio totam facilis necessitatibus
          doloribus sequi dignissimos error nemo tenetur et, suscipit
          temporibus. Quos hic itaque eius, vero non et. Fugiat saepe dolor
          corrupti pariatur laboriosam, voluptatum illo consequuntur deserunt ab
          porro, nihil facere aliquid, ipsam rerum. A porro quia consectetur
          cumque alias repudiandae, corporis nesciunt eaque saepe quibusdam
          voluptatum soluta nobis reprehenderit officiis ab quam ducimus veniam
          hic ipsum aliquid possimus deserunt iste in. Deleniti porro pariatur
          nam nisi maiores? Ab natus non soluta repudiandae inventore magni
          quasi autem?
        </p>
      </div>
    </div>
  </section>
);

// Values Component
const Values = () => {
  const values = [
    {
      icon: "🌱",
      title: "Sustainability",
      desc: "Committed to eco-friendly farming",
    },
    { icon: "⭐", title: "Quality", desc: "Excellence in every harvest" },
    { icon: "🤝", title: "Community", desc: "Supporting local farmers" },
    // Add more values
  ];

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Mission & Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-sm"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Team Component
const Team = () => {
  const team = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399", // Add team member images
      bio: "20+ years of farming experience",
    },
    // Add more team members
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <p className="text-sm text-gray-500 mt-2">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main About Page Component
export default function AboutPage() {
  return (
    <main>
      <Hero />
      <Story />
      <Values />
      <Team />
      {/* Video Tour Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Take a Tour</h2>
          <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
            <video
              controls
              className="w-full h-full"
              poster="/video-thumbnail.jpg"
            >
              <source
                src="https://salidagriculture.com/wp-content/uploads/2023/03/VID-20230310-WA0005.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      <section className="bg-green-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Us in Growing the Future
          </h2>
          <p className="mb-8">
            Whether you&apos;re a farmer, partner, or customer, we&apos;d love
            to hear from you.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-full">
              Contact Us
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full">
              Explore Our Products
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
