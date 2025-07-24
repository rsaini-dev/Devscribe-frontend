import {
  Facebook,
  Twitter,
  Github,
  Linkedin,
  Mail
} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900 text-gray-800 dark:text-gray-200 border-t border-zinc-300 dark:border-zinc-700 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold mb-2 text-indigo-600 dark:text-indigo-400">
            DevScribe
          </h2>
          <p className="text-sm">
            Share your thoughts, code, and creativity with the world.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold mb-1">Quick Links</h3>
          <a href="#" className="hover:text-indigo-600 transition">Home</a>
          <a href="#" className="hover:text-indigo-600 transition">Explore</a>
          <a href="#" className="hover:text-indigo-600 transition">Write</a>
          <a href="#" className="hover:text-indigo-600 transition">Profile</a>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Connect with us</h3>
          <div className="flex space-x-4">
            <a href="#"><Facebook className="w-5 h-5 hover:text-indigo-500" /></a>
            <a href="#"><Twitter className="w-5 h-5 hover:text-indigo-500" /></a>
            <a href="#"><Github className="w-5 h-5 hover:text-indigo-500" /></a>
            <a href="#"><Linkedin className="w-5 h-5 hover:text-indigo-500" /></a>
            <a href="#"><Mail className="w-5 h-5 hover:text-indigo-500" /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-4 text-sm bg-zinc-200 dark:bg-zinc-800">
        © {new Date().getFullYear()} DevScribe. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
