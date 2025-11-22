import { ArrowRight, Zap, Shield, Clock, Users, BarChart3, Sparkles, TruckElectric } from "lucide-react";
import rudit from "../components/images/rudit-logo.png";
import './App.css'
import LoadingScreen from './loading';
import { useState } from 'react'; 

export default function Index() {
  const [isLoading, setIsLoading] = useState(true); // Add this line
  
  return (<>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      {!isLoading && (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-border">
  <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
    <div className="flex items-center gap-2">
      <img src={rudit} alt="Rudit Logo" className="h-14 w-auto object-contain" />
    </div>
    <div className="hidden md:flex items-center gap-8">
      <a href="#features" className="text-sm hover:text-accent transition">Features</a>
      <a href="#benefits" className="text-sm hover:text-accent transition">Benefits</a>
      <a href="#cta" className="text-sm hover:text-accent transition">Get Started</a>
    </div>
    <button className="px-6 py-2 rounded-lg bg-blue-500 text-background font-semibold text-sm hover:shadow-glow transition">
      Start Free Trial
    </button>
  </div>
</nav>
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Gradient orbs background */}
          <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-radial from-cyan-bright/20 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-96 left-0 w-80 h-80 bg-gradient-radial from-teal/15 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-card border border-accent/20">
              <p className="text-sm text-accent font-semibold flex items-center gap-2">
                <Zap className="w-4 h-4" />
                The Complete School Platform
              </p>
            </div>

            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6">
              Your School's 
             <span class="bg-gradient-to-r pr-2 from-cyan-500 via-teal-400 to-teal-600 bg-clip-text text-transparent">
   Complete Digital Home
</span>

            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Create your entire online presence and admin system in minutes. Website, enrollment, scheduling, communications—everything your school needs in one powerful platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 rounded-xl bg-blue-500 text-background font-heading font-bold text-lg hover:shadow-glow-lg transition transform hover:scale-105">
                Start Building Now
              </button>
              <button className="px-8 py-4 rounded-xl border  border-accent/30 text-accent hover:bg-card transition font-semibold flex items-center justify-center gap-2">
                Watch Demo <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Stats */}
            <div className="flex justify-around mt-16 pt-16 border-t border-border">

              <div>
                <p className="text-3xl font-heading font-bold text-accent">10min</p>
                <p className="text-muted-foreground text-sm mt-2">Setup Time</p>
              </div>
              <div>
                <p className="text-3xl font-heading font-bold text-accent">99.9%</p>
                <p className="text-muted-foreground text-sm mt-2">Uptime SLA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Everything Your School Needs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From student enrollment to staff management, all in one platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Feature Card 1 */}
          <div className="p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition hover:shadow-glow hover:scale-105 transform duration-300">
  <div className="w-12 h-12 rounded-xl bg-gradient-teal flex items-center justify-center mb-6 animate-pulse shadow-lg hover:animate-none">
    <Users className="w-6 h-6 text-background" />


              </div>
              <h3 className="text-2xl font-heading font-bold mb-3">Student Management</h3>
              <p className="text-muted-foreground leading-relaxed">
                Centralized enrollment, attendance tracking, grades, and communications all in one place. Parents and students access what they need instantly.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition hover:shadow-glow hover:scale-105 transform duration-300">
  <div className="w-12 h-12 rounded-xl bg-gradient-teal flex items-center justify-center mb-6 animate-pulse shadow-lg hover:animate-none">
    <Clock className="w-6 h-6 text-background" />


              </div>
              <h3 className="text-2xl font-heading font-bold mb-3">Smart Scheduling</h3>
              <p className="text-muted-foreground leading-relaxed">
                Class scheduling, staff assignments, and resource management. Automatic conflict detection saves hours of manual planning.
              </p>
            </div>

            {/* Feature Card 3 */}
              <div className="p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition hover:shadow-glow hover:scale-105 transform duration-300">
  <div className="w-12 h-12 rounded-xl bg-gradient-teal flex items-center justify-center mb-6 animate-pulse shadow-lg hover:animate-none">
   <BarChart3 className="w-6 h-6 text-background" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-3">Rich Analytics</h3>
              <p className="text-muted-foreground leading-relaxed">
                Real-time dashboards showing enrollment trends, attendance patterns, and performance metrics to inform decisions.
              </p>
            </div>

            {/* Feature Card 4 */}
             <div className="p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition hover:shadow-glow hover:scale-105 transform duration-300">
  <div className="w-12 h-12 rounded-xl bg-gradient-teal flex items-center justify-center mb-6 animate-pulse shadow-lg hover:animate-none">
     <Shield className="w-6 h-6 text-background" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-3">Enterprise Security</h3>
              <p className="text-muted-foreground leading-relaxed">
                Bank-level encryption, FERPA compliance, and automated backups. Your data is always protected and accessible.
              </p>
            </div>
          </div>

          {/* Additional Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-border">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">



<svg
  className="w-7 h-7"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
   
    <linearGradient id="flashGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00f6ff">
        <animate
          attributeName="offset"
          values="-0.2; 1.2"
          dur="1s"
          repeatCount="indefinite"
        />
      </stop>

      <stop offset="50%" stop-color="#00ffc6">
        <animate
          attributeName="offset"
          values="0; 1"
          dur="1s"
          repeatCount="indefinite"
        />
      </stop>

      <stop offset="100%" stop-color="#00f6ff">
        <animate
          attributeName="offset"
          values="0.2; 1.4"
          dur="1s"
          repeatCount="indefinite"
        />
      </stop>
    </linearGradient>

    
    <filter id="electricGlow">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>


  <path
    d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"
    fill="url(#flashGradient)"
    filter="url(#electricGlow)"
  />
</svg>




    </div>
              <div>
                <h4 className="font-bold mb-2">Online Presence</h4>
                <p className="text-sm text-muted-foreground">Beautiful website with no coding required</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
               



<svg
  className="w-7 h-7"
  viewBox="0 0 24 24"
  fill="url(#usersGradient)"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <linearGradient id="usersGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="hsl(var(--cyan-bright))" />
      <stop offset="100%" stop-color="hsl(var(--teal-light))" />
    </linearGradient>
  </defs>

 
  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
  <circle cx="9" cy="7" r="4" />
  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
</svg>




              </div>
              <div>
                <h4 className="font-bold mb-2">Parent Portal</h4>
                <p className="text-sm text-muted-foreground">24/7 access to student progress and updates</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
               



<svg
  className="w-7 h-7"
  viewBox="0 0 24 24"
  fill="url(#shieldGradient)"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="hsl(var(--cyan-bright))" />
      <stop offset="100%" stop-color="hsl(var(--teal-light))" />
    </linearGradient>
  </defs>
 
  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
</svg>



            

              </div>
              <div>
                <h4 className="font-bold mb-2">Compliance Ready</h4>
                <p className="text-sm text-muted-foreground">Built with education standards in mind</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 px-6 relative">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-teal/15 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Why Schools Choose Rudit
              </h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">No Technical Experience Needed</h4>
                    <p className="text-muted-foreground">Intuitive interface anyone can use from day one</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Complete in Minutes</h4>
                    <p className="text-muted-foreground">Go from signup to live in under 10 minutes</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">24/7 Support</h4>
                    <p className="text-muted-foreground">Dedicated team ready to help anytime</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Flexible Pricing</h4>
                    <p className="text-muted-foreground">Pay only for what you use, no hidden fees</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-card border border-border/50">
                <Zap className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-bold mb-2">Lightning Fast</h4>
                <p className="text-sm text-muted-foreground">Load times under 1 second</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border/50">
                <Users className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-bold mb-2">Built for Teams</h4>
                <p className="text-sm text-muted-foreground">Unlimited staff accounts</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border/50">
                <Shield className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-bold mb-2">FERPA Certified</h4>
                <p className="text-sm text-muted-foreground">Education grade security</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border/50">
                <BarChart3 className="w-8 h-8 text-accent mb-4" />
                <h4 className="font-bold mb-2">Real Analytics</h4>
                <p className="text-sm text-muted-foreground">Deep insights in one dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-radial from-cyan-bright/20 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready to Transform Your School?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Join 500+ schools already running their operations on Rudit. Start free, no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 rounded-xl bg-gradient-teal text-background font-heading font-bold text-lg hover:shadow-glow-lg transition transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-10 py-4 rounded-xl border border-accent/30 text-accent hover:bg-card transition font-semibold">
              Schedule Demo
            </button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            No credit card required. 30-day free trial. Full access to all features.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition">Features</a></li>
                <li><a href="#" className="hover:text-accent transition">Pricing</a></li>
                <li><a href="#" className="hover:text-accent transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition">About</a></li>
                <li><a href="#" className="hover:text-accent transition">Blog</a></li>
                <li><a href="#" className="hover:text-accent transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition">Help Center</a></li>
                <li><a href="#" className="hover:text-accent transition">Contact</a></li>
                <li><a href="#" className="hover:text-accent transition">Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition">Privacy</a></li>
                <li><a href="#" className="hover:text-accent transition">Terms</a></li>
                <li><a href="#" className="hover:text-accent transition">FERPA</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <img src={rudit} className='h-20'></img>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              © 2026 Rudit. All rights reserved. Made for educators, by educators.
            </p>
          </div>
        </div>
      </footer>
    </div>  )}
    </>
      );
}
