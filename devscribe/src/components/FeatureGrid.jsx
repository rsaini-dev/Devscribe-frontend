import { PencilLine, Eye, Sun, Lock, BarChart3, Users } from 'lucide-react'

const features = [
  {
    icon: <PencilLine className="h-6 w-6 text-indigo-600" />,
    title: 'Rich Text Editor',
    description: 'Create beautifully formatted posts with markdown, images, and code blocks.',
  },
  {
    icon: <Eye className="h-6 w-6 text-indigo-600" />,
    title: 'Reading Mode',
    description: 'A distraction-free interface focused purely on reading experience.',
  },
  {
    icon: <Sun className="h-6 w-6 text-indigo-600" />,
    title: 'Dark Mode',
    description: 'Switch to a soothing dark theme anytime with a single click.',
  },
  {
    icon: <Lock className="h-6 w-6 text-indigo-600" />,
    title: 'Secure Auth',
    description: 'JWT-based login with options for OAuth providers like Google.',
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-indigo-600" />,
    title: 'Post Analytics',
    description: 'Track views, likes, and engagement metrics for each blog.',
  },
  {
    icon: <Users className="h-6 w-6 text-indigo-600" />,
    title: 'User Roles',
    description: 'Admin, Editor, and Blogger roles to manage platform efficiently.',
  },
]

const FeatureGrid = () => {
  return (
    <section className="bg-white dark:bg-zinc-900 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-12">
          Powerful Features for Writers & Readers
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-6 bg-zinc-100 dark:bg-zinc-800 rounded-lg shadow-sm hover:shadow-md hover:scale-110 transition-transform duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureGrid
