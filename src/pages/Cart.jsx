import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const {
    cartItems,
    cartCount,
    cartTotal,
    removeFromCart,
    updateQuantity
  } = useCart();

  const navigate = useNavigate();

  const formatPrice = (price) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2
    }).format(price);

  return (
    <div className="min-h-screen bg-[#071d16] text-white px-5 md:px-12 py-10">

      {/* Header */}
      <div className="max-w-6xl mx-auto">

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors"
        >
          <ArrowLeft size={18} />
          Continue Shopping
        </Link>

        <div className="flex flex-wrap items-center justify-between gap-4 mt-8 mb-10">
          <div>
            <p className="text-green-400 text-sm uppercase tracking-[0.25em] mb-2">
              Your Collection
            </p>

            <h1 className="text-4xl md:text-5xl font-bold">
              Shopping Cart
            </h1>
          </div>

          <div className="flex items-center gap-2 text-gray-300">
            <ShoppingBag size={20} />
            <span>
              {cartCount} {cartCount === 1 ? 'item' : 'items'}
            </span>
          </div>
        </div>

        {/* Empty Cart */}
        {cartItems.length === 0 ? (
          <div className="text-center py-20 px-6 rounded-3xl border border-white/10 bg-white/5">

            <ShoppingBag
              size={56}
              className="mx-auto text-green-400 mb-6"
            />

            <h2 className="text-2xl font-semibold mb-3">
              Your cart is empty
            </h2>

            <p className="text-gray-400 mb-8">
              Discover beautiful plants and add your favourites to your cart.
            </p>

            <Link
              to="/"
              className="inline-flex rounded-full bg-green-600 px-7 py-3 font-medium hover:bg-green-500 transition-colors"
            >
              Explore Plants
            </Link>

          </div>
        ) : (

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row gap-5 rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5"
                >

                  {/* Plant Image */}
                  <img
                    src={item.image}
                    alt={item.title || item.name}
                    className="w-full sm:w-36 h-48 sm:h-36 object-cover rounded-xl"
                  />

                  {/* Plant Details */}
                  <div className="flex-1 flex flex-col justify-between gap-4">

                    <div>
                      <h2 className="text-xl font-semibold">
                        {item.title || item.name}
                      </h2>

                      <p className="text-green-400 mt-2">
                        {formatPrice(item.price)}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4">

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-4 border border-white/10 rounded-full px-3 py-2">

                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          aria-label="Decrease quantity"
                          className="hover:text-green-400"
                        >
                          <Minus size={16} />
                        </button>

                        <span className="min-w-4 text-center">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          aria-label="Increase quantity"
                          className="hover:text-green-400"
                        >
                          <Plus size={16} />
                        </button>

                      </div>

                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="flex items-center gap-2 text-sm text-red-300 hover:text-red-400 transition-colors"
                      >
                        <Trash2 size={16} />
                        Remove
                      </button>

                    </div>

                    <p className="text-sm text-gray-400">
                      Subtotal: {formatPrice(item.price * item.quantity)}
                    </p>

                  </div>

                </div>
              ))}

            </div>

            {/* Order Summary */}
            <aside className="h-fit rounded-2xl border border-white/10 bg-white/5 p-6">

              <h2 className="text-xl font-semibold mb-6">
                Order Summary
              </h2>

              <div className="flex justify-between gap-4 text-gray-300 mb-4">
                <span>Total items</span>
                <span>{cartCount}</span>
              </div>

              <div className="flex justify-between gap-4 text-gray-300 mb-4">
                <span>Subtotal</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>

              <div className="flex justify-between gap-4 text-gray-300 mb-5">
                <span>Delivery</span>
                <span className="text-green-400">Free</span>
              </div>

              <div className="border-t border-white/10 pt-5 flex justify-between gap-4 text-lg font-bold">
                <span>Total</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>

              <button
                type="button"
                onClick={() => navigate('/checkout')}
                className="w-full mt-7 rounded-xl bg-green-600 py-3 font-semibold hover:bg-green-500 transition-colors"
              >
                Buy Now
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                Demo checkout · No real payment will be processed.
              </p>

            </aside>

          </div>

        )}

      </div>

    </div>
  );
}