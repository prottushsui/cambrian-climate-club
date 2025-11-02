import { Header } from '@/components/ui/21st-navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/21st-navbar';
import { ChevronLeft, Leaf, BookOpen, Users, Calendar, Award } from 'lucide-react';

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Campus Greening",
      description: "Tree planting, waste segregation, and beautification drives across the campus.",
      icon: <Leaf className="h-6 w-6 text-green-600" />,
      status: "Active",
      tags: ["Environment", "Initiative"],
    },
    {
      id: 2,
      title: "Cleaning Activities",
      description: "Organized periodic campus cleanup campaigns for environmental awareness.",
      icon: <Leaf className="h-6 w-6 text-blue-500" />,
      status: "Ongoing",
      tags: ["Awareness", "Community"],
    },
    {
      id: 3,
      title: "Certificate Programs",
      description: "Workshops and capacity-building sessions on sustainability and climate leadership.",
      icon: <BookOpen className="h-6 w-6 text-yellow-500" />,
      status: "Active",
      tags: ["Education", "Workshop"],
    },
    {
      id: 4,
      title: "Climate Education Initiative",
      description: "Making climate science understandable and accessible in Bengali.",
      icon: <BookOpen className="h-6 w-6 text-purple-500" />,
      status: "Ongoing",
      tags: ["Education", "Outreach"],
    },
    {
      id: 5,
      title: "GCFIL Book Writing Project 2025",
      description: "Participating in a collaborative book writing initiative.",
      icon: <BookOpen className="h-6 w-6 text-indigo-500" />,
      status: "Upcoming",
      tags: ["Writing", "Collaboration"],
    },
    {
      id: 6,
      title: "International Children's Olympiad 2024",
      description: "Participation in the event focused on environmental themes.",
      icon: <Users className="h-6 w-6 text-cyan-500" />,
      status: "Completed",
      tags: ["Competition", "Global"],
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Header
        logo={<span className="text-xl font-bold text-black dark:text-white">Cambrian Climate Club</span>}
        menuItems={[
          { text: "Home", to: "/" },
          { text: "About", to: "/about" },
          { text: "Leadership", to: "/leadership" },
          { text: "Projects", to: "/projects" },
          { text: "Achievements", to: "/achievements" },
          { text: "Contact", to: "/contact" },
        ]}
        rightContent={
          <Button variant="default" className="text-white bg-green-600 hover:bg-green-700">
            <span>Join Us</span>
          </Button>
        }
      />

      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <Button variant="outline" className="mb-6" onClick={() => window.history.back()}>
              <ChevronLeft className="mr-2 h-4 w-4" /> Back
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Projects
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
              Explore the impactful initiatives led by the Cambrian Climate Club.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="bg-white dark:bg-gray-800 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-gray-900 dark:text-white">{project.title}</CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-400">{project.status}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold">Cambrian Climate Club</h3>
              <p className="mt-2 text-gray-400">Building a sustainable future.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Leaf className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Award className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Cambrian Climate Club. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
