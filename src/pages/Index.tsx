
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Eye, Target, Flag, Zap, BarChart, LineChart, Users, FileText } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FeatureCard from '@/components/FeatureCard';
import ProcessSteps from '@/components/ProcessSteps';
import FeatureSlider from '@/components/FeatureSlider';

const Index = () => {
  // Function to handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      
      animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);
        
        if (isVisible) {
          element.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:py-40 bg-gradient-to-b from-soccerix-gray to-white relative overflow-hidden">
        <div className="content-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-soccerix-teal/10 text-soccerix-teal text-sm font-medium mb-4 animate-fade-in">
                AI-Powered Soccer Analysis
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                Transform Your Soccer Analysis with <span className="teal-gradient-text">AI</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 animate-fade-in">
                Soccerix is an AI-powered post-match soccer tactical analysis tool that automates team-level analysis, object detection and tracking, and event detection using advanced artificial intelligence and computer vision techniques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
                <Link to="/dashboard" className="btn-primary">
                  <span className="flex items-center justify-center gap-2">
                    Start Analysis
                    <ChevronRight size={18} />
                  </span>
                </Link>
                <a href="#features" className="btn-secondary">
                  Explore Features
                </a>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg gradient-border">
                <img 
                  src="/placeholder.svg" 
                  alt="Soccer Analysis Interface" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                <div className="text-soccerix-teal w-12 h-12 flex items-center justify-center animate-pulse-soft">
                  <Target size={28} />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card p-3 rounded-lg flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-full bg-soccerix-teal flex items-center justify-center text-white">
                  <Flag size={18} />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Event Detected</div>
                  <div className="text-sm font-semibold">Goal - 58:24</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-soccerix-teal/5 rounded-bl-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-soccerix-green/5 rounded-tr-full blur-3xl"></div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="section-padding">
        <div className="content-container">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-soccerix-teal/10 text-soccerix-teal text-sm font-medium mb-4 animate-on-scroll">
              Key Features
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
              Comprehensive Soccer Analysis
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              Soccerix offers a suite of powerful features designed to deliver deep insights into match performance and team tactics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={Eye} 
              title="Object Detection & Tracking" 
              description="Identify and track players, referees, goalkeepers, and the ball throughout the match."
              delay={0}
            />
            <FeatureCard 
              icon={Target} 
              title="Bird's Eye View" 
              description="Convert match footage into tactical top-down perspective for comprehensive analysis."
              delay={100}
            />
            <FeatureCard 
              icon={Flag} 
              title="Event Detection" 
              description="Automatically identify key events such as goals, free kicks, and corners with timestamps."
              delay={200}
            />
            <FeatureCard 
              icon={Users} 
              title="Team Classification" 
              description="Distinguish between teams and analyze team-specific formations and strategies."
              delay={300}
            />
            <FeatureCard 
              icon={LineChart} 
              title="Heat Maps" 
              description="Visualize player and ball movement patterns across the field during the match."
              delay={400}
            />
            <FeatureCard 
              icon={FileText} 
              title="Report Generation" 
              description="Create comprehensive match reports with visualizations and statistical insights."
              delay={500}
            />
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="section-padding bg-soccerix-gray/30">
        <div className="content-container">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-soccerix-teal/10 text-soccerix-teal text-sm font-medium mb-4 animate-on-scroll">
              Simple Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
              How Soccerix Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              Get powerful match insights in just a few simple steps.
            </p>
          </div>
          
          <ProcessSteps />
          
          <div className="mt-10 text-center animate-on-scroll">
            <Link to="/dashboard" className="btn-primary">
              <span className="flex items-center justify-center gap-2">
                Start Your Analysis
                <Zap size={18} />
              </span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Feature Showcase Section */}
      <section className="section-padding">
        <div className="content-container">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-soccerix-teal/10 text-soccerix-teal text-sm font-medium mb-4 animate-on-scroll">
              Feature Showcase
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
              See Soccerix in Action
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              Explore our key features and visualizations that provide deep match insights.
            </p>
          </div>
          
          <div className="animate-on-scroll">
            <FeatureSlider />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-teal-gradient text-white">
        <div className="content-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
              Ready to Transform Your Soccer Analysis?
            </h2>
            <p className="text-lg mb-8 opacity-90 animate-on-scroll">
              Start using Soccerix today to unlock powerful insights from your match footage.
            </p>
            <div className="animate-on-scroll">
              <Link to="/dashboard" className="bg-white text-soccerix-teal rounded-lg px-8 py-4 font-medium hover:shadow-lg transition-all duration-300 inline-block">
                <span className="flex items-center gap-2">
                  Start Your Analysis Now
                  <ChevronRight size={18} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-white py-10 border-t border-gray-100">
        <div className="content-container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-9 h-9 bg-soccerix-teal rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-lg font-bold text-soccerix-teal">Soccerix</span>
            </div>
            <div className="flex gap-8">
              <a href="#features" className="text-gray-600 hover:text-soccerix-teal transition-colors">Features</a>
              <Link to="/dashboard" className="text-gray-600 hover:text-soccerix-teal transition-colors">Dashboard</Link>
              <Link to="/report" className="text-gray-600 hover:text-soccerix-teal transition-colors">Report</Link>
            </div>
            <div className="mt-4 md:mt-0 text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Soccerix. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
