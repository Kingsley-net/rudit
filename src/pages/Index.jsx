import { ArrowRight, Zap, Shield, Clock,HeartIcon, Users, BarChart3, CheckCircle, X, FileText, CreditCard, Globe, AlertCircle } from "lucide-react";
import { useState } from 'react';
import rud from '../components/images/rudit-logo.png'
import RuditLoadingScreen from './loading'
export default function RuditWithWaitlist() {
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  const [formData, setFormData] = useState({
    schoolName: '',
    yourName: '',
    email: '',
    phone: '',
    numStudents: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLoading, setisloading] = useState(true)
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 const handleLoading =()=>{
  setisloading(false)
} 
  const handleSubmit = async () => {
    setLoading(true);
    
    // Replace with your Formspree endpoint
    try {
      const response = await fetch('https://formspree.io/f/xgvboynb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setShowWaitlistModal(false);
          setSubmitted(false);
          setFormData({
            schoolName: '',
            yourName: '',
            email: '',
            phone: '',
            numStudents: ''
          });
        }, 3000);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (isLoading ?(<RuditLoadingScreen onComplete={handleLoading}/>):
    (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Waitlist Modal */}
      {showWaitlistModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
  <div className="relative w-full max-w-lg bg-slate-800 rounded-2xl shadow-2xl border border-cyan-500/30 p-8 my-8 max-h-[90vh] overflow-y-auto animate-in">
   {/* Close button */}
            <button
              onClick={() => setShowWaitlistModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition"
            >
              <X className="w-6 h-6" />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">You're on the list!</h3>
                <p className="text-slate-300">Check your email for next steps. We'll be in touch soon.</p>
              </div>
            ) : (
              <>
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-4">
                    <Zap className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-cyan-400 font-semibold">Launching January 2026</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Join the Waitlist</h3>
                  <p className="text-slate-400">Be among the first 50 schools. Get 50% off for 6 months.</p>
                </div>

                <div className="space-y-4">
                  {/* School Name */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      School Name *
                    </label>
                    <input
                      type="text"
                      name="schoolName"
                      value={formData.schoolName}
                      onChange={handleChange}
                      placeholder="e.g., Bright Future Academy"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-900 border-2 border-slate-700 focus:border-cyan-500 focus:outline-none transition text-white placeholder-slate-500"
                    />
                  </div>

                  {/* Your Name */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="yourName"
                      value={formData.yourName}
                      onChange={handleChange}
                      placeholder="e.g., Mr. Chinedu Okafor"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-900 border-2 border-slate-700 focus:border-cyan-500 focus:outline-none transition text-white placeholder-slate-500"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="school@example.com"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-900 border-2 border-slate-700 focus:border-cyan-500 focus:outline-none transition text-white placeholder-slate-500"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0803 XXX XXXX"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-900 border-2 border-slate-700 focus:border-cyan-500 focus:outline-none transition text-white placeholder-slate-500"
                    />
                  </div>

                  {/* Number of Students */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Number of Students *
                    </label>
                    <select
                      name="numStudents"
                      value={formData.numStudents}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-900 border-2 border-slate-700 focus:border-cyan-500 focus:outline-none transition text-white"
                    >
                      <option value="">Select range</option>
                      <option value="under-100">Under 100 students</option>
                      <option value="100-300">100 - 300 students</option>
                      <option value="300-500">300 - 500 students</option>
                      <option value="500+">500+ students</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Submitting...' : 'Join Waitlist'}
                    {!loading && <ArrowRight className="w-5 h-5" />}
                  </button>

                  <p className="text-sm text-slate-400 text-center">
                    No spam. Unsubscribe anytime. We respect your privacy.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 backdrop-blur-md bg-slate-900/80 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
                <img src={rud} className="h-20 w-auto"/>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm hover:text-cyan-400 transition">Features</a>
            <a href="#benefits" className="text-sm hover:text-cyan-400 transition">Benefits</a>
            <a href="#cta" className="text-sm hover:text-cyan-400 transition">Get Started</a>
          </div>
          <button 
            onClick={() => setShowWaitlistModal(true)}
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-semibold text-sm transition transform hover:scale-105"
          >
            Join Waitlist
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Gradient orbs background */}
          <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-radial from-cyan-500/20 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-96 left-0 w-80 h-80 bg-gradient-radial from-teal-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-slate-800 border border-cyan-500/30">
              <p className="text-sm text-cyan-400 font-semibold flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Launching January 2026
              </p>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Launch Your School's Complete System in{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
                10 Minutes
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Rudit gives Nigerian schools everything: professional websites, online fee collection, 
              digital results, automated attendance - all set up instantly. No technical skills needed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={() => setShowWaitlistModal(true)}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-bold text-lg transition transform hover:scale-105 shadow-lg"
              >
                Join Waitlist - Get 50% Off
              </button>
              <button className="px-8 py-4 rounded-xl border border-cyan-500/30 text-cyan-400 hover:bg-slate-800 transition font-semibold flex items-center justify-center gap-2">
                Watch Demo <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span>10-minute setup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span>First 10 schools get 50% off</span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex justify-center gap-16 mt-16 pt-16 border-t border-slate-700">
              <div>
                <p className="text-3xl font-bold text-cyan-400">10min</p>
                <p className="text-slate-400 text-sm mt-2">Setup Time</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan-400">47</p>
                <p className="text-slate-400 text-sm mt-2">Schools Waiting</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan-400">50%</p>
                <p className="text-slate-400 text-sm mt-2">OFF Early Bird</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Is Your School Still Doing This?
            </h2>
            <p className="text-xl text-slate-400">
              You're not alone. Most Nigerian schools struggle with outdated manual processes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="w-12 h-12" />,
                title: "Manual Processes",
                description: "Spreadsheets for student records. Paper-based attendance. Hours spent on data entry every week."
              },
              {
                icon: <CreditCard className="w-12 h-12" />,
                title: "Payment Chaos",
                description: "Chasing parents for school fees. Manual receipts. No clear records of who's paid and who hasn't."
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: "No Online Presence",
                description: "Parents can't find you on Google. You look outdated compared to competitors. Losing students."
              }
            ].map((problem, idx) => (
              <div key={idx} className="bg-slate-900 p-8 rounded-2xl border-2 border-red-500/20 hover:border-red-500/40 transition group">
                <div className="text-red-400 mb-4 group-hover:scale-110 transition-transform">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                <p className="text-slate-400 leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything Your School Needs in One Platform
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Stop juggling multiple tools. Rudit brings everything together in one simple system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Professional School Website",
                description: "Beautiful templates. Your logo and colors. Live in minutes. Mobile-friendly and modern."
              },
              {
                icon: <CreditCard className="w-8 h-8" />,
                title: "Online Fee Collection",
                description: "Parents pay with cards or bank transfer. Instant verification. Automatic receipts."
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Digital Results Portal",
                description: "Publish results online. Parents check anytime. No more printing or queues."
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Automated Attendance",
                description: "Digital attendance tracking. Generate reports instantly. SMS alerts to parents."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Parent Portal",
                description: "Parents see fees, results, attendance in one place. Better engagement."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Secure & Reliable",
                description: "Bank-level encryption. Daily backups. You own your data, always."
              }
            ].map((feature, idx) => (
              <div key={idx} className="group bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1">
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 px-6 bg-gradient-to-br from-cyan-900/20 via-slate-800 to-teal-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-semibold">Limited Time Offer</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your School?
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Join forward-thinking schools that are going digital. Be among the first to launch 
            in January 2025 and get exclusive early access benefits.
          </p>

          <button 
            onClick={() => setShowWaitlistModal(true)}
            className="px-10 py-5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-bold text-xl transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
          >
            Join Waitlist Now
            <ArrowRight className="w-6 h-6" />
          </button>

          <p className="text-sm text-slate-400 mt-6">
            First 10 schools get 50% off for 6 months â¢ No credit card required â¢ Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col jusify-center items-center">
          <img src={rud} className="h-20 w-auto"/>
            
            <p className="text-slate-400">Smart School Management for Nigeria</p>
            <div className="mt-4 text-slate-400 flex flex-col jusify-center items-center">
              <p className="font-semibold text-white">ruditnigeria@gmail.com</p>
              <p className="font-semibold text-white">+234 907 339 1780</p>
              <p className="mt-2">Rivers, Nigeria</p>
            </div>
          </div>
          
          <div className="border-t flex items-center flex-col justify-center border-slate-700 pt-8 text-center text-slate-400">
            <p>© 2026 Rudit. All rights reserved. Built with </p> <p></p><span className="text-center"><HeartIcon className="text-red-500"/></span><p> for Nigerian schools.</p>
          </div>
        </div>
      </footer>
    </div> ))};
          