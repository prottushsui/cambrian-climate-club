import { Header } from '@/components/ui/21st-navbar';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/21st-navbar';
import { ChevronLeft, Users, Award, GraduationCap } from 'lucide-react';

// Reuse the leadership data from the homepage
const leadershipData = [
  {
    id: 1,
    name: "Md. Motammim Bin Arif",
    designation: "President",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Maria Anamika Bairagee",
    designation: "Vice President",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "H.M. Towfiquzzaman",
    designation: "General Secretary",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Kazi Tasfia Priota",
    designation: "Office Secretary",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Maryam Jannati Tisha",
    designation: "Organizing Secretary",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Md. Mottakin Bin Arif",
    designation: "Publicity Secretary",
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
  {
    id: 7,
    name: "Kishore Shutradhar",
    designation: "Treasurer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
];

// Advisory Committee Data
const advisoryData = [
  {
    id: 1,
    name: "Rumana Khanam",
    designation: "Chief Advisor (Vice Principal, Cambrian School and College)",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80", // Example image
  },
  {
    id: 2,
    name: "Dr. H.C. Sarkar",
    designation: "Advisor",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80", // Example image
  },
  {
    id: 3,
    name: "Md. Kamruzzaman",
    designation: "Advisor",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80", // Example image
  },
  {
    id: 4,
    name: "Md. Monirul Islam",
    designation: "Advisor",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80", // Example image
  },
  {
    id: 5,
    name: "Md. SH Khokon Miah",
    designation: "Coordinator",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80", // Example image
  },
];

export default function LeadershipPage() {
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
              Leadership Team
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
              Meet the dedicated individuals driving the Cambrian Climate Club forward.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
              <Users className="h-8 w-8 text-green-600" />
              Student Committee
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <AnimatedTooltip items={leadershipData} />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-blue-500" />
              Advisory Committee
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {advisoryData.map((member) => (
                <Card key={member.id} className="bg-white dark:bg-gray-800 shadow-lg overflow-hidden">
                  <CardHeader className="flex flex-row items-center gap-4 p-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg text-gray-900 dark:text-white">{member.name}</CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-400">{member.designation}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    {/* Add any specific details about the advisor if needed */}
                  </CardContent>
                </Card>
              ))}
            </div>
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
                <Users className="h-6 w-6" />
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
