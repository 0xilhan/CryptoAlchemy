import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Loader } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 30 }
  },
  exit: { opacity: 0, scale: 0.9 },
};

const CheckoutModal: React.FC = () => {
  const { isCheckoutOpen, closeCheckout, cartTotal, clearCart } = useCart();
  const [status, setStatus] = useState<'idle' | 'processing' | 'success'>('idle');

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('processing');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        clearCart();
        closeCheckout();
        setStatus('idle');
      }, 2000);
    }, 1500);
  };
  
  const handleClose = () => {
      if(status === 'processing') return;
      closeCheckout();
      setStatus('idle');
  }

  return (
    <AnimatePresence>
      {isCheckoutOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-[60] p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={handleClose}
        >
          <motion.div
            className="relative bg-[#111111] border border-gray-700 rounded-2xl shadow-2xl p-8 w-full max-w-md text-white"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors disabled:opacity-50"
              aria-label="Close modal"
              data-cursor-hover
              disabled={status === 'processing'}
            >
              <X className="w-6 h-6" />
            </button>
            
            {status === 'success' ? (
                <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h2 className="font-space-grotesk text-2xl font-bold">Payment Successful!</h2>
                    <p className="text-gray-400 mt-2">Thank you for your purchase.</p>
                </div>
            ) : (
                <>
                  <h2 className="font-space-grotesk text-3xl font-bold text-center text-[#4BD0FF] mb-6">
                    Checkout
                  </h2>
                  <form onSubmit={handlePayment}>
                    <div className="space-y-4 mb-6">
                        <div>
                            <label htmlFor="email" className="text-sm text-gray-400">Email Address</label>
                            <input type="email" id="email" required className="w-full bg-gray-800 p-2 rounded-md mt-1 border border-gray-700 focus:ring-2 focus:ring-[#4BD0FF] focus:outline-none" placeholder="you@example.com" />
                        </div>
                        <div>
                            <label className="text-sm text-gray-400">Card Information</label>
                            <div className="bg-gray-800 p-2 rounded-md mt-1 border border-gray-700 text-gray-500">
                                Simulated Card Details
                            </div>
                        </div>
                    </div>
                    <button 
                      type="submit"
                      disabled={status === 'processing'}
                      className="w-full bg-[#4BD0FF] text-[#0D0D0D] font-bold py-3 rounded-md hover:bg-cyan-300 transition-colors flex items-center justify-center disabled:bg-gray-600"
                      data-cursor-hover
                    >
                      {status === 'processing' ? <Loader className="w-6 h-6 animate-spin" /> : `Pay $${cartTotal.toFixed(2)}`}
                    </button>
                  </form>
                </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CheckoutModal;
