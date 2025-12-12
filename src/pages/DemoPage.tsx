import { AnimatedFolder } from "@/components/ui/3d-folder"
import ParticleEffectForHero from "@/components/ui/particle-effect-for-hero"
import GlowingShadowDemo from "@/components/ui/demo"

const portfolioData = [
  {
    title: "Branding",
    projects: [
      { id: "1", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Lumnia" },
      { id: "2", image: "https://images.unsplash.com/photo-1494972308805-463bc619d3ab?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Prism" },
      { id: "3", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Vertex" },
    ]
  },
  {
    title: "Web Design",
    projects: [
      { id: "4", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Nexus" },
      { id: "5", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Flux" },
      { id: "6", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Pulse" },
    ]
  },
  {
    title: "Mobile Apps",
    projects: [
      { id: "7", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Horizon" },
      { id: "8", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Quantum" },
      { id: "9", image: "https://images.unsplash.com/photo-1517423568366-8b83523034fd?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Echo" },
    ]
  }
]

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center w-full p-4">
      {/* Particle Effect Hero Section */}
      <div className="fixed top-0 left-0 w-full h-1/2 z-0">
        <ParticleEffectForHero />
      </div>
      
      {/* Main content */}
      <section className="max-w-6xl mx-auto px-6 py-16 mt-64 z-10 relative">
        <h1 className="text-4xl font-bold text-center mb-12 text-white">Interactive Demos</h1>
        
        {/* Glowing Shadow Component */}
        <div className="mb-20">
          <GlowingShadowDemo />
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-8 w-full">
          {portfolioData.map((folder) => (
            <AnimatedFolder 
              key={folder.title} 
              title={folder.title} 
              projects={folder.projects} 
              className="w-72"
            />
          ))}
        </div>
      </section>

    </main>
  )
}