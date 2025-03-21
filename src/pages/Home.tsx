
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
