
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EssayCard from '../components/EssayCard';
import { essays } from '../data/essays';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  return (
    <div className="page-container">
      <motion.div
        initial="hidden"
        animate={mounted ? "visible" : "hidden"}
        variants={containerVariants}
        className="space-y-16"
      >
        {/* About Me Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">About Me</h2>
          <div className="glass-morphism p-6 rounded-lg">
            <p className="mb-4">
              Hi, I'm an independent thinker and writer exploring the intersection of technology, 
              philosophy, and culture. Through my essays, I attempt to understand complex systems 
              and share these insights in an accessible way.
            </p>
            <p>
              My background spans across various disciplines, giving me a unique perspective 
              on contemporary issues. I believe in the power of rational discourse and continuous 
              learning to improve both individual lives and society at large.
            </p>
            <div className="mt-6">
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Learn more about me
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
        
        {essays.map((essay, index) => (
          <EssayCard key={essay.id} essay={essay} index={index} />
        ))}
        
        <div className="w-full flex justify-end pt-4">
          <Link 
            to="/library" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Explore my library
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
