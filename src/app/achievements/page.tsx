import { Header } from '@/components/ui/21st-navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/21st-navbar';
import { ChevronLeft, Award, Users, Target, CalendarCheck } from 'lucide-react';

export default function AchievementsPage() {
  const achievements = [
    {
      id: 1,
      title: "NCCA 2024 Recognition",
      description: "Successfully represented the club and gained national recognition.",
      icon: <Award className="h-6 w-6 text-yellow-500" />,
      date: "2024",
    },
    {
      id: 2,
      title: "Sustainability Ambassadors",
      description: "Six members recognized as Sustainability Ambassadors by SPSC UK.",
      icon: <Users className="h-6 w-6 text-green-500" />,
      date: "2024",
    },
    {
      id: 3,
      title: "Climate Education Initiative Launched",
      description: "Started the initiative to make climate science accessible in Bengali.",
      icon: <Target className="h-6 w-6 text-blue-500" />,
      date: "2024",
    },
    {
      id: 4,
      title: "Campus Greening Success",
      description: "Significant progress in beautification and environmental awareness.",
      icon: <Award className="h-6 w-6 text-emerald-500" />,
      date: "Ongoing",
    },
    {
      id: 5,
      title: "International Children's Olympiad 2024",
      description: "Participated and showcased environmental projects.",
      icon: <CalendarCheck className="h-6 w-6 text-indigo-500" />,
      date: "2024",
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
              Our Achievements
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
              Celebrating the milestones and recognition earned by the Cambrian Climate Club.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement) => (
              <Card key={achievement.id} className="bg-white dark:bg-gray-800 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
                      {achievement.icon}
                    </div>
                    <div>
                      <CardTitle className="text-gray-900 dark:text-white">{achievement.title}</CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-400">{achievement.date}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300">{achievement.description}</p>
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
                <Award className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Users className="h-6 w-6" />
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
