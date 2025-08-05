import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Trophy, Users, Gavel, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isPosterOpen, setIsPosterOpen] = React.useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <motion.section 
        className="relative bg-gradient-to-r from-red-900 via-red-800 to-red-700 text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <motion.div 
              className="text-center lg:text-left space-y-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
            <motion.div 
              className="inline-flex items-center space-x-2 bg-yellow-500/20 backdrop-blur-sm rounded-full px-6 py-2 text-yellow-300 font-medium"
              variants={fadeInUp}
            >
              <Trophy className="h-5 w-5" />
              <span>Asia's Largest Numismatic Exhibition</span>
            </motion.div>
            
            <motion.h1 
              className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
              variants={fadeInUp}
            >
              17th National<br />
              <span className="text-yellow-400">Numismatic Exhibition</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-red-100 leading-relaxed"
              variants={fadeInUp}
            >
              Join us for three extraordinary days showcasing rare coins, banknotes, stamps, and live auctions in the heart of Bengaluru.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-6 text-base"
              variants={fadeInUp}
            >
              <div className="flex items-center space-x-2">
                <Calendar className="h-6 w-6 text-yellow-400" />
                <span className="font-semibold">20th-22nd February 2026</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-yellow-400 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-6 w-6 text-yellow-400" />
                <span className="font-semibold">Shikshak Sadan, Bengaluru</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center"
              variants={fadeInUp}
            >
              <Link
                to="/tickets"
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-red-900 font-bold rounded-lg hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
              >
                Book Tickets
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/stalls"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold rounded-lg hover:bg-yellow-400 hover:text-red-900 transition-all duration-300 hover:scale-105"
              >
                Book Stalls
              </Link>
            </motion.div>
            </motion.div>
            
            {/* Right side - Exhibition poster */}
            <motion.div 
              className="flex justify-center lg:justify-end"
              variants={scaleIn}
              initial="initial"
              animate="animate"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 rounded-2xl blur-xl transform rotate-3"></div>
                <motion.img
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0zNIf3vsPpgNcL0-R_UZ9j0km_gy_puDF2nuO7hOn7K_zM-vIpLT719wSo1rMRM13vu7BHG9Y1fSV-DyQq0gJefykAxZUPP5t0jinWJjVuLKIls6APDxLOlvNIIwvsJAKn7lByswanMPGrMFLawSPTnu6Vye_PaIwBiRqm9kQ0foly2rRslRDYFqmenA/s1600/16th%20NNE%202025.jpg"
                  alt="17th National Numismatic Exhibition Poster"
                  className="relative w-full max-w-md h-auto rounded-2xl shadow-2xl border-4 border-yellow-400/30 transform hover:scale-105 transition-all duration-300 cursor-pointer"
                  onClick={() => setIsPosterOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Poster Modal */}
      <AnimatePresence>
        {isPosterOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPosterOpen(false)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0zNIf3vsPpgNcL0-R_UZ9j0km_gy_puDF2nuO7hOn7K_zM-vIpLT719wSo1rMRM13vu7BHG9Y1fSV-DyQq0gJefykAxZUPP5t0jinWJjVuLKIls6APDxLOlvNIIwvsJAKn7lByswanMPGrMFLawSPTnu6Vye_PaIwBiRqm9kQ0foly2rRslRDYFqmenA/s1600/16th%20NNE%202025.jpg"
                alt="17th National Numismatic Exhibition Poster - Full Size"
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setIsPosterOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Key Highlights */}
      <motion.section 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-4">Event Highlights</h2>
          <p className="text-lg text-red-700 max-w-2xl mx-auto">
            Experience the finest collection of numismatic treasures and engage with leading experts from across Asia.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100 hover:-translate-y-2"
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-red-900 to-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="h-8 w-8 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold text-red-900 mb-2">Rare Collections</h3>
            <p className="text-red-700">Discover extraordinary coins, banknotes, and stamps from across the world.</p>
          </motion.div>
          
          <motion.div 
            className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100 hover:-translate-y-2"
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-red-900 to-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gavel className="h-8 w-8 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold text-red-900 mb-2">Live Auction</h3>
            <p className="text-red-700">Join our floor and real-time live auction on 22nd February at 11:30 AM.</p>
          </motion.div>
          
          <motion.div 
            className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100 hover:-translate-y-2"
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-red-900 to-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="h-8 w-8 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold text-red-900 mb-2">Academic Sessions</h3>
            <p className="text-red-700">Attend research presentations and scholarly discussions by experts.</p>
          </motion.div>
          
          <motion.div 
            className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100 hover:-translate-y-2"
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-red-900 to-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold text-red-900 mb-2">NNAP Awards</h3>
            <p className="text-red-700">Celebrate excellence in numismatics, philately, and scholarly research.</p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Schedule Overview */}
      <motion.section 
        className="bg-white py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-4">Three Days of Excellence</h2>
            <p className="text-lg text-red-700">A carefully curated programme of exhibitions, auctions, and academic discourse.</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-gradient-to-br from-red-50 to-amber-50 p-8 rounded-xl border border-red-100 hover:shadow-lg transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="text-center mb-4">
                <div className="inline-block bg-red-900 text-white px-4 py-2 rounded-full font-bold">Day 1</div>
                <h3 className="text-2xl font-bold text-red-900 mt-2">20th February</h3>
              </div>
              <ul className="space-y-2 text-red-800">
                <li>• Exhibition Opening Ceremony</li>
                <li>• Dealer Stalls Open</li>
                <li>• Collection Displays</li>
                <li>• Welcome Reception</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-xl border border-yellow-200 hover:shadow-lg transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="text-center mb-4">
                <div className="inline-block bg-yellow-600 text-white px-4 py-2 rounded-full font-bold">Day 2</div>
                <h3 className="text-2xl font-bold text-red-900 mt-2">21st February</h3>
              </div>
              <ul className="space-y-2 text-red-800">
                <li>• <strong>Live Auction (11:30 AM)</strong></li>
                <li>• Academic Presentations</li>
                <li>• 8th NNAP Awards Ceremony</li>
                <li>• Networking Events</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-red-50 to-amber-50 p-8 rounded-xl border border-red-100 hover:shadow-lg transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="text-center mb-4">
                <div className="inline-block bg-red-900 text-white px-4 py-2 rounded-full font-bold">Day 3</div>
                <h3 className="text-2xl font-bold text-red-900 mt-2">22nd February</h3>
              </div>
              <ul className="space-y-2 text-red-800">
                <li>• Final Exhibition Day</li>
                <li>• Closing Presentations</li>
                <li>• Special Collections View</li>
                <li>• Farewell Gathering</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="bg-gradient-to-r from-red-900 to-red-800 text-white py-16 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Decorative separator */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400"></div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Join Us?
          </motion.h2>
          <motion.p 
            className="text-xl text-red-100 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Secure your place at Asia's premier numismatic exhibition. Limited spaces available.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/tickets"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-red-900 font-bold rounded-lg hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Book Your Tickets Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold rounded-lg hover:bg-yellow-400 hover:text-red-900 transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;