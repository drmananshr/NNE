import React from 'react';
import { Trophy, Award, Star, GraduationCap, FileText, Heart } from 'lucide-react';

const Awards = () => {
  const awardCategories = [
    {
      id: 'numismatics',
      name: 'Numismatics',
      description: 'Excellence in coin collecting, research, and presentation',
      icon: Trophy,
      criteria: [
        'Outstanding coin collection display',
        'Historical significance and rarity',
        'Quality of research and documentation',
        'Educational value to the community'
      ],
      color: 'from-yellow-400 to-amber-500'
    },
    {
      id: 'philately',
      name: 'Philately',
      description: 'Recognition for exceptional stamp collections and philatelic research',
      icon: FileText,
      criteria: [
        'Exceptional stamp collection',
        'Thematic coherence and completeness',
        'Philatelic research contribution',
        'Presentation and documentation quality'
      ],
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 'notaphilist',
      name: 'Notaphilist',
      description: 'Honouring excellence in banknote collecting and currency studies',
      icon: Award,
      criteria: [
        'Outstanding banknote collection',
        'Historical and monetary significance',
        'Condition and rarity of specimens',
        'Research and educational contribution'
      ],
      color: 'from-green-400 to-green-600'
    },
    {
      id: 'scholars',
      name: 'Scholars',
      description: 'Academic excellence in numismatic and philatelic research',
      icon: GraduationCap,
      criteria: [
        'Original research contribution',
        'Academic rigour and methodology',
        'Publication and peer recognition',
        'Impact on the field of study'
      ],
      color: 'from-purple-400 to-purple-600'
    },
    {
      id: 'autograph',
      name: 'Autograph Collection',
      description: 'Recognition for exceptional autograph and manuscript collections',
      icon: Star,
      criteria: [
        'Historical significance of autographs',
        'Authentication and provenance',
        'Collection diversity and rarity',
        'Preservation and presentation'
      ],
      color: 'from-pink-400 to-pink-600'
    },
    {
      id: 'lifetime',
      name: 'Lifetime Achievement',
      description: 'Honouring a lifetime of dedication to numismatics and philately',
      icon: Heart,
      criteria: [
        'Lifetime contribution to the field',
        'Mentorship and community building',
        'Advancement of hobby/profession',
        'Recognition by peers and institutions'
      ],
      color: 'from-red-400 to-red-600'
    }
  ];

  const previousWinners = [
    { year: 2024, name: 'Dr. Rajesh Kumar', category: 'Numismatics', achievement: 'Mughal Coinage Research' },
    { year: 2024, name: 'Mrs. Priya Sharma', category: 'Philately', achievement: 'Indian Independence Stamps' },
    { year: 2023, name: 'Prof. Anil Gupta', category: 'Scholars', achievement: 'Ancient Indian Currency Systems' },
    { year: 2023, name: 'Mr. Vikram Singh', category: 'Lifetime Achievement', achievement: '40 Years of Numismatic Service' }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-red-900 mb-6">8th NNAP Awards</h1>
          <p className="text-xl text-red-700 max-w-3xl mx-auto">
            Celebrating excellence in numismatics, philately, and scholarly research
          </p>
          <div className="mt-6 inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">
            <Trophy className="h-5 w-5" />
            <span className="font-medium">Awards Ceremony: 21st February 2026</span>
          </div>
        </div>

        {/* Award Categories */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-4">Award Categories</h2>
            <p className="text-lg text-red-700">Six prestigious categories recognising different aspects of excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awardCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.id}
                  className="bg-white rounded-xl shadow-lg border border-amber-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-red-900">{category.name}</h3>
                      </div>
                    </div>
                    
                    <p className="text-red-700 mb-4">{category.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-red-900 text-sm">Judging Criteria:</h4>
                      {category.criteria.map((criterion, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-red-700">{criterion}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Nomination Process */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg border border-amber-100 p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-red-900 mb-4">Nomination Process</h2>
            <p className="text-lg text-red-700">How to nominate yourself or others for the NNAP Awards</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-900 to-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="font-bold text-red-900 mb-2">Submit Application</h3>
              <p className="text-sm text-red-700">Complete the nomination form with detailed information about the candidate or collection.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-900 to-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="font-bold text-red-900 mb-2">Documentation</h3>
              <p className="text-sm text-red-700">Provide supporting documents, photographs, and research materials as evidence.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-900 to-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="font-bold text-red-900 mb-2">Expert Review</h3>
              <p className="text-sm text-red-700">A panel of experts evaluates each nomination based on established criteria.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-900 to-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="font-bold text-red-900 mb-2">Awards Ceremony</h3>
              <p className="text-sm text-red-700">Winners are announced and honoured at the prestigious awards ceremony.</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <button className="bg-gradient-to-r from-red-900 to-red-800 text-white px-8 py-3 rounded-lg font-bold hover:from-red-800 hover:to-red-700 transition-all duration-300">
              Download Nomination Form
            </button>
            <p className="text-sm text-red-600 mt-2">Nominations close: 31st January 2026</p>
          </div>
        </section>

        {/* Previous Winners */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-red-900 mb-4">Previous Award Winners</h2>
            <p className="text-lg text-red-700">Celebrating past recipients of the NNAP Awards</p>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-200 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {previousWinners.map((winner, index) => (
                <div key={index} className="bg-white rounded-lg border border-amber-100 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-red-900">{winner.name}</h3>
                      <p className="text-sm text-red-700">{winner.category}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-yellow-700">{winner.year}</div>
                    </div>
                  </div>
                  <p className="text-sm text-red-600 italic">"{winner.achievement}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Timeline */}
        <section className="bg-white rounded-2xl shadow-lg border border-amber-100 p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-red-900 mb-4">Awards Timeline</h2>
            <p className="text-lg text-red-700">Important dates for the 8th NNAP Awards</p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-red-50 to-amber-50 rounded-lg border border-red-100">
              <div className="w-4 h-4 bg-red-600 rounded-full"></div>
              <div>
                <div className="font-bold text-red-900">31st January 2026</div>
                <div className="text-red-700">Nomination deadline</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-red-50 to-amber-50 rounded-lg border border-red-100">
              <div className="w-4 h-4 bg-yellow-600 rounded-full"></div>
              <div>
                <div className="font-bold text-red-900">1st - 15th February 2026</div>
                <div className="text-red-700">Expert panel review and judging</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg border border-yellow-200">
              <div className="w-4 h-4 bg-green-600 rounded-full"></div>
              <div>
                <div className="font-bold text-red-900">21st February 2026, 5:00 PM</div>
                <div className="text-red-700">Awards ceremony at NNE 2026</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Awards;