// import React, { useState } from 'react';
import { Bot, Code2, Search, Globe, CheckCircle2, ArrowRight } from 'lucide-react';


function App() {
  // Function to open Typeform popup
  const openTypeform = () => {
    const typeformURL = "https://ci9mpt2p06v.typeform.com/to/LW7Rt3v0";
    window.open(typeformURL, "_blank");

    /*
    typeformEmbed.innerHTML = `
      <div data-tf-live="01JH619FTB80FXD6NRFVF61KXV"></div>
      <script src="//embed.typeform.com/next/embed.js"></script>
    `;
    document.body.appendChild(typeformEmbed);

    <div data-tf-live="01JH62MT8HK55EJWRTZ8V0KM8Q"></div><script src="//embed.typeform.com/next/embed.js"></script>
    */
  };
  
  /*
  const [email, setEmail] = useState('');
  const [footerEmail, setFooterEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [footerSubmitted, setFooterSubmitted] = useState(false);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      try {
        const response = await fetch('/api/waitlist', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {
          setSubmitted(true);
          setEmail('');
        } else {
          console.error('Failed to send email notification');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const handleFooterWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (footerEmail) {
      try {
        const response = await fetch('/api/waitlist', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: footerEmail }),
        });

        if (response.ok) {
          setFooterSubmitted(true);
          setFooterEmail('');
        } else {
          console.error('Failed to send email notification');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };
  */

  const features = [
    { 
      icon: <Search className="w-6 h-6" />, 
      title: 'Smart Search', 
      description: 'Instantly searches developer forums, tech documentation for similar and accurate solutions.' 
    },
    { 
      icon: <Code2 className="w-6 h-6" />, 
      title: 'Code-Aware', 
      description: 'Understands code snippets and errors to provide contextual debugging assistance.' 
    },
    { 
      icon: <Globe className="w-6 h-6" />, 
      title: 'Vast Knowledge', 
      description: 'Leverages data from StackOverflow, GitHub, and the broader internet for comprehensive tech support.' 
    },
  ];

  const pricingTiers = [
    {
      name: 'Free Trial',
      price: '$0',
      duration: '14 days',
      features: ['100 queries/month', 'Basic code analysis', 'Community support'],
    },
    {
      name: 'Hobby',
      price: '$11',
      duration: 'per month',
      features: ['1,000 queries/month', 'Advanced debugging', 'Priority support'],
    }/*
    {
      name: 'Business',
      price: '$30',
      duration: 'per month',
      features: ['Unlimited queries', 'Team collaboration', 'Custom knowledge base', 'Dedicated support'],
    },*/
  ];

  

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900 text-gray-100">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-x"/>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(49,49,82,0.5),transparent)]"/>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center relative">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Tech Support, <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Automated</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            AI-powered tech support assistant that helps you solve all kinds of programming challenges.
          </p>
          
          {/* Waitlist Form */}
          <div className="max-w-md mx-auto mb-8">
          <button
                onClick={openTypeform}
                className="px-6 py-3 bg-blue-600 w-1/2 text-xl font-bold text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Join Waitlist
          </button>

          {/* <div data-tf-live="01JH619FTB80FXD6NRFVF61KXV"></div><script src="//embed.typeform.com/next/embed.js"></script> 
            <form onSubmit={handleWaitlistSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
                required
              />
              
            </form>
            {submitted && (
              <p className="mt-2 text-green-400 flex items-center justify-center gap-1">    
                <CheckCircle2 className="w-4 h-4" /> You're on the list!
              </p>
            )}*/}

          </div>

          {/* Chatbot Preview */}
          <div className="max-w-4xl mx-auto mb-16 pt-8">
            <img 
              src="mockup2.png"
              alt="Tech Support Chatbot Interface"
              className="rounded-lg shadow-2xl border border-gray-700/50 w-full"
            />
          </div>

          {/* Trust Badges */}
          <div className="max-w-full ">
            <p className="text-2xl text-black font-medium mb-6">Trusted By:</p>
            <br/>
            <div className="flex flex-col gap-4 grid md:grid-cols-5 gap-2 items-center justify-items-center">
              <img src="https://ph-static.imgix.net/ph-logo-1.png" alt="Product Hunt" className="h-32 hover:opacity-100 transition-opacity" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Y_Combinator_logo.svg" alt="Y-Combinator" className="h-16 hover:opacity-100 transition-opacity"/>
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="h-16 hover:opacity-100 transition-opacity" />
              <img src="https://www.svgrepo.com/show/354512/vercel.svg" alt="Vercel" className="h-32 hover:opacity-100 transition-opacity"  />
              <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/stackoverflow_logo_icon_170707.png" alt="StackOverflow" className="w-32 hover:opacity-100 transition-opacity"  />
              
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Powered by Developer Knowledge</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Access the collective wisdom of the developer community through our intelligent assistant.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800/50 to-transparent"/>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Simple, Developer-Friendly Pricing</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Scale your support as your needs grow
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8 hover:border-blue-500 transition-colors">
                <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-gray-400">/{tier.duration}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  Get Started <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      

      {/* Waitlist Section */}
      <div className="py-20 bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Instant Support. Anytime. Anywhere – Powered by AI.</h2>
          <h3 className="text-gray-400 mb-8">Be the first to gain access to the future of tech support.</h3>
          <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white w-1/3 text-xl font-bold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Join Waitlist
            </button>

          {/* 
          <form onSubmit={handleFooterWaitlistSubmit} className="flex gap-2 justify-center">
            <input
              type="email"
              value={footerEmail}
              onChange={(e) => setFooterEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-100"
              required
            />
            
            <div data-tf-live="01JH619FTB80FXD6NRFVF61KXV"></div><script src="//embed.typeform.com/next/embed.js"></script>
          </form>
          {footerSubmitted && (
            <p className="mt-2 text-green-400 flex items-center justify-center gap-1">
              <CheckCircle2 className="w-4 h-4" /> You're on the list!
            </p>
          )} */}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex items-center gap-2">
              <Bot className="w-6 h-6 text-blue-500" />
              <span className="font-semibold text-xl">TechSupportChatbot</span>
            </div>
            
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;