import React from 'react';
import { Trophy, Users, Award, Calendar } from 'lucide-react';

const About = () => {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-red-900 mb-6">About the Exhibition</h1>
          <p className="text-xl text-red-700 max-w-3xl mx-auto leading-relaxed">
            The National Numismatic Exhibition stands as Asia's premier gathering for collectors, dealers, and enthusiasts of coins, banknotes, and stamps.
          </p>
        </div>
      </section>

      {/* About NNE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-red-900">17th National Numismatic Exhibition</h2>
            <p className="text-lg text-red-700 leading-relaxed">
              Since its inception, the National Numismatic Exhibition has grown to become one of the most significant events in the numismatic calendar. This year marks our 17th edition, bringing together the finest collections, most respected dealers, and passionate collectors from across Asia and beyond.
            </p>
            <p className="text-lg text-red-700 leading-relaxed">
              The exhibition showcases rare and historical coins, banknotes, stamps, and related artifacts, providing a unique opportunity for education, networking, and acquisition of exceptional pieces.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-md border border-amber-100">
                <div className="text-2xl font-bold text-red-900">17th</div>
                <div className="text-red-700">Edition</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md border border-amber-100">
                <div className="text-2xl font-bold text-red-900">3</div>
                <div className="text-red-700">Days</div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-amber-100">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Calendar className="h-6 w-6 text-yellow-600 mt-1" />
                <div>
                  <h3 className="font-bold text-red-900">When</h3>
                  <p className="text-red-700">20th - 22nd February 2026</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Trophy className="h-6 w-6 text-yellow-600 mt-1" />
                <div>
                  <h3 className="font-bold text-red-900">What</h3>
                  <p className="text-red-700">Exhibitions, Live Auctions, Academic Sessions, Awards</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="h-6 w-6 text-yellow-600 mt-1" />
                <div>
                  <h3 className="font-bold text-red-900">Who</h3>
                  <p className="text-red-700">Collectors, Dealers, Scholars, Enthusiasts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Marudhar Arts */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-4">About the Organiser</h2>
            <p className="text-lg text-red-700">Meet the team behind Asia's premier numismatic exhibition</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-red-50 to-amber-50 p-8 rounded-xl border border-red-100">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-900 to-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-10 w-10 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-900">Marudhar Arts</h3>
                  <p className="text-red-700 font-medium">India's Leading Auction House</p>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-white rounded-lg">
                    <div className="text-xl font-bold text-red-900">1966</div>
                    <div className="text-sm text-red-700">Founded</div>
                  </div>
                  <div className="p-3 bg-white rounded-lg">
                    <div className="text-xl font-bold text-red-900">3</div>
                    <div className="text-sm text-red-700">Generations</div>
                  </div>
                  <div className="p-3 bg-white rounded-lg">
                    <div className="text-xl font-bold text-red-900">58+</div>
                    <div className="text-sm text-red-700">Years</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-red-900">Three Generations of Excellence</h3>
              <p className="text-lg text-red-700 leading-relaxed">
                Established in 1966, Marudhar Arts has been at the forefront of India's numismatic and philatelic scene for nearly six decades. As India's leading auction house specialising in coins, banknotes, and stamps, we have built an unparalleled reputation for expertise, integrity, and service.
              </p>
              <p className="text-lg text-red-700 leading-relaxed">
                With three generations of the founding family actively involved in the business, Marudhar Arts combines traditional knowledge with modern auction techniques, serving collectors and institutions worldwide.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                  <span className="text-red-800">Expert authentication and grading services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                  <span className="text-red-800">Regular auctions and private sales</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                  <span className="text-red-800">Educational programmes and exhibitions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                  <span className="text-red-800">International dealer network</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exhibition Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-4">What Makes NNE Special</h2>
          <p className="text-lg text-red-700">Discover why collectors and experts choose the National Numismatic Exhibition</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-red-900 to-red-800 rounded-lg flex items-center justify-center mb-4">
              <Trophy className="h-6 w-6 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold text-red-900 mb-3">Rare Collections</h3>
            <p className="text-red-700">
              View extraordinary collections of coins, banknotes, and stamps from private collectors and institutions, many displayed publicly for the first time.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-red-900 to-red-800 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold text-red-900 mb-3">Expert Network</h3>
            <p className="text-red-700">
              Connect with leading dealers, collectors, and scholars from across Asia. Build relationships that last beyond the exhibition.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-red-900 to-red-800 rounded-lg flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold text-red-900 mb-3">Educational Value</h3>
            <p className="text-red-700">
              Attend academic sessions, research presentations, and expert talks that advance knowledge in numismatics and philately.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;