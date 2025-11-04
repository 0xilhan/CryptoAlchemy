import React from 'react';
import { useCart } from '../contexts/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2 } from 'lucide-react';

const CartModal: React.FC = () => {
  const { isCartOpen, closeCart, cartItems, cartCount, cartTotal, removeFromCart, updateQuantity, openCheckout } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-end z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-full max-w-md h-full bg-[#111111] text-white flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <header className="p-6 flex justify-between items-center border-b border-gray-700 flex-shrink-0">
              <h2 className="font-space-grotesk text-2xl font-bold">
                Your Cart ({cartCount})
              </h2>
              <button onClick={closeCart} className="text-gray-400 hover:text-white" data-cursor-hover>
                <X className="w-6 h-6" />
              </button>
            </header>
            
            <main className="flex-grow p-6 overflow-y-auto">
              {cartItems.length === 0 ? (
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-400">Your cart is empty.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex items-center gap-4">
                      <div className="flex-grow">
                        <h3 className="font-bold">{item.name}</h3>
                        <p className="text-sm text-gray-400">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center gap-2 border border-gray-700 rounded-md p-1">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} data-cursor-hover><Minus className="w-4 h-4" /></button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} data-cursor-hover><Plus className="w-4 h-4" /></button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-gray-500 hover:text-red-500" data-cursor-hover>
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </main>
            
            {cartItems.length > 0 && (
              <footer className="p-6 border-t border-gray-700 flex-shrink-0">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg text-gray-400">Subtotal</span>
                  <span className="font-bold text-xl">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={openCheckout}
                  className="w-full bg-[#C7A94A] text-[#0D0D0D] font-bold py-3 rounded-md hover:bg-yellow-500 transition-colors"
                  data-cursor-hover
                >
                  Proceed to Checkout
                </button>
              </footer>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartModal;
