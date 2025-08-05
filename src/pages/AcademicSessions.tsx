import React from 'react';
import { GraduationCap, Clock, Users, BookOpen, Presentation, Award } from 'lucide-react';

const AcademicSessions = () => {
  const sessions = [
    {
      id: 1,
      title: 'Ancient Indian Coinage: New Archaeological Discoveries',
      presenter: 'Dr. Meera Patel',
      affiliation: 'Archaeological Survey of India',
      time: '10:00 AM - 10:45 AM',
      day: 'Day 1 - 20th February',
      description: 'Recent excavations have revealed fascinating insights into ancient Indian monetary systems. This presentation covers new coin finds and their historical significance.',
      topics: ['Mauryan period coins', 'Indo-Greek influences', 'Archaeological context', 'Dating methodologies'],
      audience: 'Researchers, Collectors, Students'
    },
    {
      id: 2,
      title: 'The Evolution of Indian Paper Currency: From Company Rule to Independence',
      presenter: 'Prof. Rajesh Kumar',
      affiliation: 'Jawaharlal Nehru University',
      time: '11:00 AM - 11:45 AM',
      day: 'Day 1 - 20th February',
      description: 'A comprehensive study of how Indian paper currency evolved from the East India Company notes to post-independence designs.',
      topics: ['Company era banknotes', 'Government of India issues', 'Design evolution', 'Security features'],
      audience: 'Currency specialists, Historians'
    },
    {
      id: 3,
      title: 'Digital Cataloguing of Numismatic Collections',
      presenter: 'Dr. Sarah Chen',
      affiliation: 'British Museum',
      time: '2:00 PM - 2:45 PM',
      day: 'Day 1 - 20th February',
      description: 'Modern approaches to cataloguing and preserving numismatic collections using digital technologies and databases.',
      topics: ['Digital photography techniques', 'Database management', 'Online accessibility', 'Preservation methods'],
      audience: 'Museum professionals, Collectors'
    },
    {
      id: 4,
      title: 'Forgery Detection in Historical Coins and Notes',
      presenter: 'Mr. Andreas Mueller',
      affiliation: 'German Numismatic Society',
      time: '10:00 AM - 10:45 AM',
      day: 'Day 2 - 21st February',
      description: 'Advanced techniques for identifying forgeries and reproductions in historical numismatic items.',
      topics: ['Authentication methods', 'Common forgery techniques', 'Scientific analysis', 'Legal implications'],
      audience: 'Dealers, Collectors, Appraisers'
    },
    {
      id: 5,
      title: 'Philatelic Treasures of the Raj: Postal History Research',
      presenter: 'Mrs. Elizabeth Taylor',
      affiliation: 'Royal Philatelic Society London',
      time: '11:00 AM - 11:45 AM',
      day: 'Day 2 - 21st February',
      description: 'Exploring the rich postal history of British India through stamps, covers, and postal markings.',
      topics: ['Colonial postal system', 'Rare stamps and covers', 'Postal routes', 'Historical context'],
      audience: 'Philatelists, Postal historians'
    },
    {
      id: 6,
      title: 'The Future of Collecting: Blockchain and NFTs in Numismatics',
      presenter: 'Dr. James Wilson',
      affiliation: 'Coinbase Research',
      time: '3:00 PM - 3:45 PM',
      day: 'Day 2 - 21st February',
      description: 'How emerging technologies are reshaping the collecting landscape and what it means for traditional numismatics.',
      topics: ['Blockchain verification', 'Digital collectibles', 'Market implications', 'Future trends'],
      audience: 'Technology enthusiasts, Investors'
    },
    {
      id: 7,
      title: 'Conservation Techniques for Paper Money',
      presenter: 'Ms. Linda Rodriguez',
      affiliation: 'Smithsonian Institution',
      time: '10:00 AM - 10:45 AM',
      day: 'Day 3 - 22nd February',
      description: 'Professional conservation methods for preserving banknotes and paper-based numismatic items.',
      topics: ['Assessment techniques', 'Cleaning methods', 'Storage solutions', 'Environmental factors'],
      audience: 'Conservators, Serious collectors'
    },
    {
      id: 8,
      title: 'Regional Coin Studies: South Indian Temple Tokens',
      presenter: 'Dr. Venkat Krishnan',
      affiliation: 'University of Madras',
      time: '11:00 AM - 11:45 AM',
      day: 'Day 3 - 22nd February',
      description: 'An in-depth study of temple tokens from South India, their religious significance, and economic role.',
      topics: ['Temple economies', 'Token typology', 'Religious symbolism', 'Regional variations'],
      audience: 'Indian numismatics specialists'
    }
  ];

  const workshops = [
    {
      title: 'Hands-on Coin Photography Workshop',
      instructor: 'Professional Photography Team',
      duration: '2 hours',
      description: 'Learn professional techniques for photographing coins and notes for documentation and online sales.'
    },
    {
      title: 'Basic Authentication Workshop',
      instructor: 'Certified Grading Specialists',
      duration: '90 minutes',
      description: 'Practical training on identifying genuine items and spotting common fakes and reproductions.'
    },
    {
      title: 'Building Your First Collection',
      instructor: 'Experienced Collectors Panel',
      duration: '1 hour',
      description: 'Guidance for new collectors on starting and building a focused numismatic collection.'
    }
  ];

  const getDayColor = (day: string) => {
    if (day.includes('Day 1')) return 'bg-red-100 text-red-800';
    if (day.includes('Day 2')) return 'bg-yellow-100 text-yellow-800';
    return 'bg-green-100 text-green-800';
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-red-900 mb-6">Academic Sessions</h1>
          <p className="text-xl text-red-700 max-w-3xl mx-auto">
            Join leading experts and researchers for presentations on cutting-edge numismatic and philatelic research
          </p>
          <div className="mt-6 inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
            <GraduationCap className="h-5 w-5" />
            <span className="font-medium">Open to all exhibition attendees</span>
          </div>
        </div>

        {/* Sessions Overview */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-red-900 mb-4">Research Presentations</h2>
            <p className="text-lg text-red-700">Eight expert presentations across three days</p>
          </div>
          
          <div className="space-y-6">
            {sessions.map((session) => (
              <div key={session.id} className="bg-white rounded-xl shadow-lg border border-amber-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDayColor(session.day)}`}>
                          {session.day}
                        </span>
                        <div className="flex items-center space-x-1 text-red-600">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm font-medium">{session.time}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-red-900 mb-2">{session.title}</h3>
                      <div className="text-red-700 mb-3">
                        <span className="font-medium">{session.presenter}</span>
                        <span className="text-red-600"> • {session.affiliation}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-red-700 mb-4">{session.description}</p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-red-900 mb-2 flex items-center">
                        <BookOpen className="h-4 w-4 mr-1" />
                        Key Topics
                      </h4>
                      <ul className="text-sm text-red-700 space-y-1">
                        {session.topics.map((topic, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <h4 className="font-semibold text-red-900 mb-2 flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        Target Audience
                      </h4>
                      <p className="text-sm text-red-700">{session.audience}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Workshops Section */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg border border-amber-100 p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-red-900 mb-4">Interactive Workshops</h2>
            <p className="text-lg text-red-700">Hands-on learning experiences for practical skills</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workshops.map((workshop, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-amber-50 rounded-xl border border-red-100 p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-900 to-red-800 rounded-lg flex items-center justify-center mb-4">
                  <Presentation className="h-6 w-6 text-yellow-400" />
                </div>
                <h3 className="text-lg font-bold text-red-900 mb-2">{workshop.title}</h3>
                <p className="text-sm text-red-700 mb-3">{workshop.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-red-600" />
                    <span className="text-red-800">{workshop.instructor}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-red-600" />
                    <span className="text-red-800">{workshop.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-red-700 mb-4">Workshop spaces are limited. Registration required.</p>
            <button className="bg-gradient-to-r from-red-900 to-red-800 text-white px-6 py-3 rounded-lg font-bold hover:from-red-800 hover:to-red-700 transition-all duration-300">
              Register for Workshops
            </button>
          </div>
        </section>

        {/* Session Guidelines */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-6">
            <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
              <Award className="h-6 w-6 text-blue-600 mr-2" />
              For Presenters
            </h3>
            <ul className="space-y-2 text-red-700 text-sm">
              <li>• Presentations limited to 40 minutes + 5 minutes Q&A</li>
              <li>• AV equipment and technical support provided</li>
              <li>• Proceedings will be published post-conference</li>
              <li>• Certificates of participation provided</li>
              <li>• Networking opportunities with international experts</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 p-6">
            <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
              <Users className="h-6 w-6 text-green-600 mr-2" />
              For Attendees
            </h3>
            <ul className="space-y-2 text-red-700 text-sm">
              <li>• All sessions included with exhibition ticket</li>
              <li>• Simultaneous translation available for international speakers</li>
              <li>• Session materials available for download</li>
              <li>• Q&A sessions encouraged</li>
              <li>• Networking breaks between sessions</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AcademicSessions;