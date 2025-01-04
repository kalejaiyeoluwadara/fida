import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

function Menu({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div className="fixed top-0 left-0 z-50">
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={() => setIsMenuOpen(false)} // Close when clicking outside
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white w-3/4 max-w-sm rounded-lg shadow-lg p-6 space-y-4 text-center relative"
              onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                className="absolute text-black top-4 right-4 text-2xl"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close Menu"
              >
                ✖
              </button>

              {/* Navigation Links */}
              <nav className="space-y-4">
                <Link href="#about" className="link text-lg block">
                  About
                </Link>
                <Link href="#services" className="link text-lg block">
                  Services
                </Link>
                <Link href="#pricing" className="link text-lg block">
                  Pricing
                </Link>
                <Link href="#contact" className="link text-lg block">
                  Contact
                </Link>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Menu;
