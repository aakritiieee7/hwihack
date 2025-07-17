// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Zap, Target, Brain, Recycle } from 'lucide-react';
// import DoughnutChart from '../Charts/DoughnutChart';
// import FeatureCard from '../UI/FeatureCard';
// import { api } from '../../utils/api';
// import { MaterialDistribution } from '../../types';
// import { Upload, Cpu, Lightbulb } from 'lucide-react';

// const HowItWorks = () => {
//   const steps = [
//     {
//       icon: <Upload className="w-8 h-8 text-green-600" />,
//       title: 'Upload Product Image',
//       description: 'Simply drop or select your product’s packaging image.',
//     },
//     {
//       icon: <Cpu className="w-8 h-8 text-green-600" />,
//       title: 'AI Predicts Material & Impact',
//       description: 'Our AI analyzes material type and sustainability impact in seconds.',
//     },
//     {
//       icon: <Lightbulb className="w-8 h-8 text-green-600" />,
//       title: 'Get Actionable Suggestions',
//       description: 'Discover eco-friendly alternatives and reduce your environmental footprint.',
//     },
//   ];

//   return (
//     <section className="bg-white py-16 px-4">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-6 text-gray-800">How It Works</h2>
//         <p className="text-gray-500 mb-12 max-w-xl mx-auto">
//           From upload to actionable insights in just three simple steps.
//         </p>

//         <div className="grid md:grid-cols-3 gap-8">
//           {steps.map((step, index) => (
//             <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-200">
//               <div className="mb-4 flex justify-center">{step.icon}</div>
//               <h3 className="text-xl font-semibold text-gray-700 mb-2">{step.title}</h3>
//               <p className="text-gray-500 text-sm">{step.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;

// const HomePage: React.FC = () => {
//   const [materialData, setMaterialData] = useState<MaterialDistribution | null>(null);
//   const [currentPage, setCurrentPage] = useState('home');

//   useEffect(() => {
//     api.getMaterialDistribution().then(setMaterialData);
//   }, []);

//   const features = [
//     {
//       icon: Brain,
//       title: 'Smart Recognition',
//       description: 'AI instantly identifies packaging materials and analyzes their environmental impact.',
//       metric: '94%',
//     },
//     {
//       icon: Target,
//       title: 'Planet Score',
//       description: 'Get clear A-F ratings for your packaging sustainability performance.',
//       metric: 'A-F',
//     },
//     {
//       icon: Zap,
//       title: 'Smart Suggestions',
//       description: 'Receive personalized recommendations for more sustainable packaging choices.',
//       metric: '∞',
//     },
//     {
//       icon: Recycle,
//       title: 'Progress Tracking',
//       description: 'Track your packaging improvements and environmental impact over time.',
//       metric: '100%',
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <section className="bg-#f9f2d9 py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             {/* Left Content */}
//             <div className="text-left">

// <motion.h1
//   initial={{ opacity: 1, y: 20 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.6 }}
//   className="text-4xl md:text-6xl font-bold text-black mb-6"
// >
//   Is your pack
//   <motion.span
//     initial={{ opacity: 0, x: -20 }} // Start slightly to the left and invisible
//     animate={{ opacity: 1, x: 0 }}   // Animate to full opacity and original position
//     transition={{ duration: 0.5, delay: 0.4 }} // Delay to animate after the main heading
//     className="block mt-2 sm:mt-4 bg-gradient-to-r from-[#00EB88] to-[#60efb7] text-transparent bg-clip-text" // Gradient classes
//   >
//     PLANET-SMART?
//   </motion.span>
// </motion.h1>
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 className="text-xl text-gray-800 mb-8 max-w-lg"
//               >
//                 Scan, Analyze, Sustain, Solutions, At Your Fingertips.
//               </motion.p>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.4 }}
//                 className="flex flex-col sm:flex-row gap-4"
//               >
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-[#b3ffb3] text-black px-20 py-4 rounded-full font-semibold text-lg hover:bg-darkgreen-300 transition-colors duration-200"
//                 >
//                   Try Now
//                 </motion.button>                
//               </motion.div>
//             </div>

//             {/* Right Illustration */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               className="relative"
//             >
//               <div className="relative w-full max-w-lg mx-auto">
//                 <img
//                   src="https://cdn.dribbble.com/userupload/9127097/file/original-5945d7ec45073513b5117215cd5a48ce.png?resize=752x&vertical=center"
//                   alt="Kids recycling and being eco-friendly"
//                   className="w-full h-auto rounded-2xl shadow-lg"
//                 />
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
// <section className="py-16 bg-gray-50">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      
//       {/* Stat 1 */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-center"
//       >
//         <h3 className="text-4xl font-bold text-[#00EB88] mb-2">8M+</h3>
//         <p className="text-gray-600">Tons of plastic waste enter oceans annually</p>
//       </motion.div>

//       {/* Stat 2 */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//         className="text-center"
//       >
//         <h3 className="text-4xl font-bold text-[#00EB88] mb-2">94%</h3>
//         <p className="text-gray-600">AI accuracy in material detection</p>
//       </motion.div>

//       {/* Stat 3 */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//         className="text-center"
//       >
//         <h3 className="text-4xl font-bold text-[#00EB88] mb-2">A-F</h3>
//         <p className="text-gray-600">Clear sustainability scoring system</p>
//       </motion.div>
      
//     </div>
//   </div>
// </section>

//       {/* Material Distribution Chart */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">
//               Packaging Material Analysis
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               AI-powered insights into packaging materials and their environmental impact
//             </p>
//           </div>
//           <div className="max-w-2xl mx-auto">
//             {materialData ? (
//               <DoughnutChart data={materialData} />
//             ) : (
//               <div className="h-80 flex items-center justify-center">
//                 <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00EB88]"></div>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">
//               Why Choose PackedRight?
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Advanced AI technology to help you make smarter packaging decisions
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {features.map((feature, index) => (
//               <FeatureCard
//                 key={feature.title}
//                 icon={feature.icon}
//                 title={feature.title}
//                 description={feature.description}
//                 metric={feature.metric}
//                 index={index}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-16 bg-[#99ff99]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold text-black mb-4">
//             Ready to PackedRight?
//           </h2>
//           <p className="text-black text-lg mb-8 max-w-2xl mx-auto opacity-80">
//             Start analyzing your packaging and make planet-smart choices today
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors duration-200"
//           >
//             Try PackedRight Now
//           </motion.button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;



import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Brain, Recycle, Upload, Cpu, Lightbulb } from 'lucide-react';
import DoughnutChart from '../Charts/DoughnutChart';
import FeatureCard from '../UI/FeatureCard';
import { api } from '../../utils/api';
import { MaterialDistribution } from '../../types';

// ✅ HowItWorks Section Component
const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Upload className="w-10 h-10 text-green-500" />,
      title: 'Upload Product Image',
      description: 'Drop or select your packaging image to start analysis.',
    },
    {
      icon: <Cpu className="w-10 h-10 text-green-500" />,
      title: 'AI Predicts Material & Impact',
      description: 'AI analyzes packaging type and sustainability instantly.',
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-green-500" />,
      title: 'Get Eco-Friendly Suggestions',
      description: 'Get actionable recommendations to improve sustainability.',
    },
  ];

  return (
    <section className="bg-white py-20 px-4 scroll-mt-20" id="how-it-works">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">How It Works</h2>
        <p className="text-gray-500 mb-12 max-w-xl mx-auto">
          From upload to actionable insights in just three simple steps.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-200">
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ✅ HomePage Component
const HomePage: React.FC = () => {
  const [materialData, setMaterialData] = useState<MaterialDistribution | null>(null);

  useEffect(() => {
    api.getMaterialDistribution().then(setMaterialData);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'Smart Recognition',
      description: 'AI instantly identifies packaging materials and analyzes environmental impact.',
      metric: '94%',
    },
    {
      icon: Target,
      title: 'Planet Score',
      description: 'Get clear A-F ratings for your packaging sustainability performance.',
      metric: 'A-F',
    },
    {
      icon: Zap,
      title: 'Smart Suggestions',
      description: 'Receive personalized recommendations for more sustainable packaging choices.',
      metric: '∞',
    },
    {
      icon: Recycle,
      title: 'Progress Tracking',
      description: 'Track your packaging improvements and environmental impact over time.',
      metric: '100%',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-[#f9f2d9] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div className="text-left">
              <motion.h1
                initial={{ opacity: 1, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold text-black mb-6"
              >
                Is your pack
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="block mt-2 bg-gradient-to-r from-[#00EB88] to-[#60efb7] text-transparent bg-clip-text"
                >
                  PLANET-SMART?
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-gray-800 mb-8 max-w-lg"
              >
                Scan, Analyze, Sustain. Solutions, at your fingertips.
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#b3ffb3] text-black px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#a4f9a4] transition duration-200"
              >
                Try Now
              </motion.button>
            </div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <img
                src="https://cdn.dribbble.com/userupload/9127097/file/original-5945d7ec45073513b5117215cd5a48ce.png?resize=752x&vertical=center"
                alt="Kids recycling"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Doughnut Chart Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Packaging Material Analysis
          </h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-12">
            AI-powered insights into your packaging materials and their environmental impact.
          </p>

          <div className="max-w-md mx-auto">
            {materialData ? (
              <DoughnutChart data={materialData} />
            ) : (
              <div className="h-80 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00EB88]"></div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Why Choose PackedRight?
          </h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-12">
            Advanced AI technology to help you make smarter packaging decisions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                metric={feature.metric}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 bg-[#99ff99] text-center">
        <h2 className="text-3xl font-bold text-black mb-4">
          Ready to PackedRight?
        </h2>
        <p className="text-black text-lg mb-8 opacity-80 max-w-xl mx-auto">
          Start analyzing your packaging and make planet-smart choices today.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition"
        >
          Try PackedRight Now
        </motion.button>
      </section>
    </div>
  );
};

export default HomePage;
