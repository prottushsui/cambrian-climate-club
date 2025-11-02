import { Header } from '@/components/ui/21st-navbar'; // Adjust path if you move it
import { Typewriter } from '@/components/ui/typewriter-text';
import { TextCursorProximity } from '@/components/ui/text-cursor-proximity';
import { CircularRevealHeading } from '@/components/ui/circular-reveal-heading';
import { BentoGrid } from '@/components/ui/bento-grid';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import { Timeline } from '@/components/ui/timeline';
import { Vortex } from '@/components/ui/vortex';
import { GlowEffect } from '@/components/ui/glow-effect';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { AvatarCircles } from '@/components/ui/avatar-circles';
import { Button } from '@/components/ui/21st-navbar'; // Using the button from navbar component
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'; // Assuming you have a card component or will add one from shadcn
import { AlertBadge } from '@/components/ui/alert-badge';
import { FilterBadge } from '@/components/ui/filter-badge';
import { MenuBar } from '@/components/ui/menu-bar';
import { useMousePositionRef } from '@/hooks/use-mouse-position-ref';
import { useRef } from 'react';
import { ChevronDown, Users, Award, Leaf, Calendar, Mail, MapPin, ChevronRight } from 'lucide-react';

// --- Data for Components ---
// Example data for the AnimatedTooltip (Leadership)
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

// Example data for Bento Grid (Projects/Achievements)
const bentoItems = [
  {
    title: "Campus Greening",
    description: "Tree planting and beautification drives.",
    icon: <Leaf className="w-4 h-4 text-green-500" />,
    status: "Active",
    tags: ["Environment", "Initiative"],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: "NCCA 2024",
    description: "Represented and achieved recognition.",
    icon: <Award className="w-4 h-4 text-yellow-500" />,
    status: "Achieved",
    tags: ["Award", "Recognition"],
  },
  {
    title: "Sustainability Ambassadors",
    description: "6 members recognized by SPSC UK.",
    icon: <Users className="w-4 h-4 text-blue-500" />,
    tags: ["Leadership", "Global"],
    colSpan: 2,
  },
  {
    title: "Training Sessions",
    description: "Capacity building workshops.",
    icon: <Calendar className="w-4 h-4 text-purple-500" />,
    status: "Ongoing",
    tags: ["Education", "Workshop"],
  },
];

// Example data for Timeline
const timelineData = [
  {
    title: "2024",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Achieved recognition in NCCA 2024. Launched Climate Education Initiative.
        </p>
        <div className="flex flex-wrap gap-2">
          <AlertBadge variant="success" label="NCCA 2024" />
          <AlertBadge variant="info" label="Climate Education Launch" />
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Founded the Cambrian Climate Club. Started Campus Greening project.
        </p>
        <div className="flex flex-wrap gap-2">
          <AlertBadge variant="info" label="Club Founded" />
          <AlertBadge variant="success" label="Campus Greening Started" />
        </div>
      </div>
    ),
  },
];

// Example data for Circular Reveal Heading (Mission/Vision)
const circularItems = [
  {
    text: "SUSTAINABILITY",
    image: "/images/projects/greening.jpg", // Replace with actual image path in public folder
  },
  {
    text: "ACTION",
    image: "/images/projects/event.jpg", // Replace with actual image path
  },
  {
    text: "FUTURE",
    image: "/images/projects/tree.jpg", // Replace with actual image path
  },
  {
    text: "CLIMATE",
    image: "/images/projects/climate.jpg", // Replace with actual image path
  },
];

// Example data for Avatar Circles (Members)
const memberAvatars = [
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
];

// --- End Data ---

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePositionRef = useMousePositionRef(containerRef);

  return (
    <div ref={containerRef} className="min-h-screen w-full bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
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
            <Mail className="mr-2 h-4 w-4" />
            Join Us
          </Button>
        }
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <GlowEffect
            colors={['#10B981', '#3B82F6', '#8B5CF6']} // Green, Blue, Purple
            mode='rotate'
            blur='strong'
            scale={1.5}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
            <Typewriter
              text={["Sustainable Climate Club", "Success, Challenges, and Future"]}
              speed={50}
              loop={true}
              className="text-3xl md:text-5xl lg:text-6xl"
            />
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Join us in making climate science accessible and driving impactful environmental action.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="default" className="bg-green-600 hover:bg-green-700 text-white">
              Learn More <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-gray-800">
              Get Involved
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="animate-bounce text-gray-500 dark:text-gray-400" />
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Leadership Team
          </h2>
          <div className="flex justify-center">
            <AnimatedTooltip items={leadershipData} />
          </div>
        </div>
      </section>

      {/* Circular Reveal Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Mission
          </h2>
          <div className="flex justify-center">
            <CircularRevealHeading
              items={circularItems}
              centerText={
                <div className="text-xl font-bold text-[#444444] dark:text-white">
                  Climate Action
                </div>
              }
              size="md"
            />
          </div>
        </div>
      </section>

      {/* Projects/Achievements Bento Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Projects & Achievements
          </h2>
          <BentoGrid items={bentoItems} />
        </div>
      </section>

      {/* Membership/Community Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Be part of a growing network of climate advocates.
          </p>
          <AvatarCircles numPeople={50} avatarUrls={memberAvatars} />
          <div className="mt-8">
            <Button variant="default" className="bg-green-600 hover:bg-green-700 text-white">
              Become a Member
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Journey
          </h2>
          <Timeline data={timelineData} />
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How can I join the Cambrian Climate Club?</AccordionTrigger>
              <AccordionContent>
                You can join by filling out our membership form on the "Get Involved" page or contacting us directly via email.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What kind of projects does the club work on?</AccordionTrigger>
              <AccordionContent>
                We focus on projects like campus greening, environmental education, awareness campaigns, and community outreach related to climate change.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How often are events held?</AccordionTrigger>
              <AccordionContent>
                We organize events regularly, including workshops, seminars, and community activities. Check our events calendar for updates.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer Placeholder */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold">Cambrian Climate Club</h3>
              <p className="mt-2 text-gray-400">Building a sustainable future.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Mail className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <MapPin className="h-6 w-6" />
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
