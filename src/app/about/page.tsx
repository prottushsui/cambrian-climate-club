import { Header } from '@/components/ui/21st-navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge'; // Assuming you have a standard badge component or will add one from shadcn
import { Button } from '@/components/ui/21st-navbar';
import { ChevronLeft, Target, Lightbulb, Users, Award } from 'lucide-react';

export default function AboutPage() {
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
              About Cambrian Climate Club
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
              Learn about our mission, vision, and the impact we are making in the fight against climate change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-white dark:bg-gray-800 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                  <Target className="h-6 w-6 text-green-600" />
                  Our Mission
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Driving sustainable action and awareness.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  The Cambrian Climate Club is dedicated to promoting sustainability and combating climate change within our school and the broader community. We achieve this through education, hands-on projects, and advocacy, empowering students to become leaders in environmental stewardship.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                  <Lightbulb className="h-6 w-6 text-yellow-500" />
                  Our Vision
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  A sustainable future for all.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  We envision a world where environmental consciousness is integrated into everyday life, where our generation leads the way in creating innovative solutions to environmental challenges, and where Cambrian School and College becomes a beacon of sustainability.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Our Core Values</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg py-2 px-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                Sustainability
              </Badge>
              <Badge variant="secondary" className="text-lg py-2 px-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                Innovation
              </Badge>
              <Badge variant="secondary" className="text-lg py-2 px-4 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100">
                Community
              </Badge>
              <Badge variant="secondary" className="text-lg py-2 px-4 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">
                Leadership
              </Badge>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Our Story</h2>
            <Card className="bg-white dark:bg-gray-800 shadow-lg">
              <CardContent className="pt-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Founded in 2023, the Cambrian Climate Club emerged from a shared concern among students about the pressing environmental challenges facing our planet. What started as a small group of passionate individuals has grown into a vibrant community of young leaders committed to making a real difference.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Our journey has been marked by significant milestones, including our participation in the National Climate Change Awards (NCCA) 2024 and the recognition of six of our members as Sustainability Ambassadors by the Social and Peace Studies Centre (SPSC) UK. We continue to expand our reach and impact, focusing on initiatives like the Climate Education Initiative, which aims to make climate science accessible to students across Bangladesh.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button variant="default" className="bg-green-600 hover:bg-green-700 text-white">
              Get Involved
            </Button>
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
