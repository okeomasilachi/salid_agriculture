import Link from "next/link";
import { FiBox, FiHome, FiInfo, FiPhone } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-green-700">
            Salid Agriculture
          </Link>
          <div className="hidden md:flex space-x-6">
            {["Home", "About Us", "Products", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="text-gray-600 hover:text-green-700 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16 text-center">
        {/* Error Message */}
        <div className="mb-12">
          <h1 className="text-6xl font-bold text-green-800 mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-xl text-gray-600">
            Looks like you&apos;re lost in the fields. The page you&apos;re looking for
            doesn&apos;t exist or has been moved.
          </p>
        </div>

        {/* Helpful Links */}
        <div className="">
          <h2 className="text-xl font-semibold text-gray-700 mb-6">
            Here are some helpful links:
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: FiHome, text: "Home", href: "/" },
              { icon: FiInfo, text: "About Us", href: "/about" },
              { icon: FiBox, text: "Blog", href: "/blog" },
              { icon: FiPhone, text: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.text}
                href={link.href}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white hover:bg-green-50 border border-gray-200 transition-colors"
              >
                <link.icon className="text-green-600" />
                <span className="text-gray-700">{link.text}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Visual Element */}
        <div className="relative h-64 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/farm-background.jpg')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-xl text-gray-600 max-w-md">
              Let&apos;s get you back to growing success with Salid Agriculture
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
