import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check } from 'lucide-react';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 30 }
  },
  exit: { opacity: 0, y: -50, scale: 0.9 },
};

const addresses = [
  { name: 'Bitcoin (BTC)', address: 'bc1qgr9z4n2hrpwn9t94w5tzf9snyy074k3p36p67d' },
  { name: 'Ethereum (ETH, ERC20)', address: '0x384a2A2d775839F0042d74a38E316A795a128A41' },
  { name: 'Solana (SOL)', address: 'SoL7dAbxmtm5s7Jb7dYyYXNodgJz8iLz7f8qTfVpGzK' }
];

const CopyButton: React.FC<{ textToCopy: string }> = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
      aria-label="Copy address"
      data-cursor-hover
    >
      {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
    </button>
  );
};


const DonateModal: React.FC<DonateModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="relative bg-[#111111] border border-gray-700 rounded-2xl shadow-2xl p-8 w-full max-w-md text-white"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
              aria-label="Close modal"
              data-cursor-hover
            >
              <X className="w-6 h-6" />
            </button>
            
            <h2 className="font-space-grotesk text-3xl font-bold text-center text-[#C7A94A] mb-4">
              ❤️ Support The Craft
            </h2>
            <p className="text-center text-gray-400 mb-8">
              Your support fuels this journey of turning chaos into clarity. Every contribution, big or small, is deeply appreciated.
            </p>

            <div className="space-y-4">
              {addresses.map((item) => (
                <div key={item.name}>
                  <p className="text-sm text-gray-400 mb-2">{item.name}</p>
                  <div className="relative">
                    <div 
                      className="bg-gray-800 p-3 pr-10 rounded-md text-left font-mono break-all text-sm"
                    >
                      {item.address}
                    </div>
                    <CopyButton textToCopy={item.address} />
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-xs text-center text-gray-500 mt-8 italic">
              Thank you for being part of the circle.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DonateModal;