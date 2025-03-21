
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { useSearch } from '../hooks/useSearch';
import { libraryItems, allTags, allMediaTypes } from '../data/library';
import ExternalLink from '../components/ExternalLink';
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableHead,
  TableRow,
  TableCell
} from '../components/ui/table';

const Library = () => {
  const [mounted, setMounted] = useState(false);
  
  const {
    searchQuery,
    setSearchQuery,
    selectedTags,
    selectedTypes,
    filteredItems,
    toggleTag,
    toggleType,
    clearFilters
  } = useSearch({ initialItems: libraryItems });

  useEffect(() => {
    setMounted(true);
  }, []);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Library</h1>
      
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title, author, or year..."
            className="w-full pl-10 pr-4 py-2 glass-morphism border border-white/10 rounded-md focus:outline-none focus:ring-1 focus:ring-white/20 text-sm bg-transparent"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      <div className="overflow-x-auto pb-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Year</TableHead>
              <TableHead className="text-right">Link</TableHead>
            </TableRow>
          </TableHeader>
          {/* Instead of using as={motion.tbody}, we'll use a regular TableBody with motion children */}
          <TableBody>
            {mounted && filteredItems.length > 0 ? (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="contents" // This makes the div behave like its children in terms of display
              >
                {filteredItems.map((item) => (
                  <motion.tr
                    key={item.id}
                    variants={itemVariants}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors dark:hover:bg-white/5 hover:bg-slate-100"
                  >
                    <TableCell className="py-4 pr-4">
                      <div className="font-medium">{item.title}</div>
                    </TableCell>
                    <TableCell className="py-4 pr-4 text-sm">{item.author}</TableCell>
                    <TableCell className="py-4 pr-4 text-sm">{item.publishedYear}</TableCell>
                    <TableCell className="py-4 text-right">
                      <ExternalLink href={item.link} className="text-sm">
                        <span className="sr-only">Visit link for {item.title}</span>
                      </ExternalLink>
                    </TableCell>
                  </motion.tr>
                ))}
              </motion.div>
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="py-8 text-center text-muted-foreground">
                  No items found matching your search.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Library;
