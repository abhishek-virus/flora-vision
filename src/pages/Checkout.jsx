import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  CheckCircle2,
  MapPin,
  Package,
  ShoppingBag
} from 'lucide-react'

import { useCart } from '../context/CartContext'

const formatPrice = (price) =>
  `₹${Number(price).toLocaleString('en-IN')}`

export default function Checkout() {
  const { cartItems, cartTotal, clearCart } = useCart()
  const navigate = useNavigate()

  const [paymentMethod, setPaymentMethod] = useState('cod')
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [orderDetails, setOrderDetails] = useState(null)

  const [customer, setCustomer] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  })

  function handleChange(event) {
    const { name, value } = event.target

    setCustomer((previous) => ({
      ...previous,
      [name]: value
    }))
  }

  function handlePlaceOrder(event) {
    event.preventDefault()

    if (cartItems.length === 0) {
      return
    }

    // Keep a copy before clearing the cart.
    const items = cartItems.map((item) => ({ ...item }))
    const total = cartTotal

    const order = {
      orderId: `FV${Date.now().toString().slice(-8)}`,
      customer: { ...customer },
      items,
      total,
      paymentMethod,
      date: new Date().toLocaleDateString('en-IN')
    }

    setOrderDetails(order)
    setOrderPlaced(true)

    // Frontend-only demo: clear the in-memory cart.
    clearCart()
  }

  // Order confirmation screen
  if (orderPlaced && orderDetails) {
    return (
      <main className="min-h-screen bg-[#101B10] px-4 py-12 text-white">
        <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-2xl sm:p-10">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-400/15">
            <CheckCircle2 className="h-12 w-12 text-green-400" />
          </div>

          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-green-300">
            FloraVision
          </p>

          <h1 className="mb-4 text-3xl font-bold sm:text-4xl">
            Order Confirmed!
          </h1>

          <p className="mb-8 leading-7 text-white/70">
            Thank you for choosing FloraVision. Your demo order has been
            placed successfully.
          </p>

          <div className="mb-8 rounded-2xl border border-white/10 bg-black/20 p-5 text-left">
            <div className="mb-4 flex items-center justify-between gap-4">
              <span className="text-white/60">Order ID</span>
              <span className="font-semibold text-green-300">
                {orderDetails.orderId}
              </span>
            </div>

            <div className="mb-4 flex items-center justify-between gap-4">
              <span className="text-white/60">Order Date</span>
              <span>{orderDetails.date}</span>
            </div>

            <div className="mb-4 flex items-center justify-between gap-4">
              <span className="text-white/60">Payment Method</span>
              <span>
                {orderDetails.paymentMethod === 'cod'
                  ? 'Cash on Delivery'
                  : orderDetails.paymentMethod === 'upi'
                    ? 'UPI (Demo)'
                    : 'Card (Demo)'}
              </span>
            </div>

            <div className="mb-4 border-t border-white/10 pt-4">
              <p className="mb-3 font-semibold">Items Ordered</p>

              {orderDetails.items.map((item) => (
                <div
                  key={item.id}
                  className="mb-3 flex items-center justify-between gap-4 text-sm"
                >
                  <span className="text-white/70">
                    {item.title} × {item.quantity}
                  </span>

                  <span>
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-white/10 pt-4">
              <span className="font-semibold">Total Amount</span>
              <span className="text-xl font-bold text-green-300">
                {formatPrice(orderDetails.total)}
              </span>
            </div>
          </div>

          <div className="mb-8 rounded-2xl bg-white/5 p-5 text-left">
            <div className="mb-3 flex items-center gap-2">
              <MapPin size={20} className="text-green-300" />
              <h2 className="font-semibold">Delivery Address</h2>
            </div>

            <p className="leading-7 text-white/70">
              {orderDetails.customer.fullName}
              <br />
              {orderDetails.customer.address}
              <br />
              {orderDetails.customer.city},{' '}
              {orderDetails.customer.state} -{' '}
              {orderDetails.customer.pincode}
              <br />
              Phone: {orderDetails.customer.phone}
            </p>
          </div>

          <p className="mb-6 text-sm leading-6 text-white/50">
            This is a frontend demonstration. No real payment was processed,
            and the order has not been sent to a server.
          </p>

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-green-400 px-8 py-3 font-semibold text-black transition hover:bg-green-300"
          >
            <ShoppingBag size={20} />
            Continue Shopping
          </Link>
        </div>
      </main>
    )
  }

  // Empty cart
  if (cartItems.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#101B10] px-4 text-white">
        <div className="max-w-md text-center">
          <ShoppingBag className="mx-auto mb-5 h-16 w-16 text-green-300" />

          <h1 className="mb-3 text-3xl font-bold">
            Your cart is empty
          </h1>

          <p className="mb-7 text-white/60">
            Add some beautiful plants before proceeding to checkout.
          </p>

          <Link
            to="/"
            className="inline-flex rounded-full bg-green-400 px-7 py-3 font-semibold text-black hover:bg-green-300"
          >
            Explore Plants
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#101B10] px-4 py-10 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <Link
          to="/cart"
          className="mb-8 inline-flex items-center gap-2 text-white/70 transition hover:text-green-300"
        >
          <ArrowLeft size={20} />
          Back to Cart
        </Link>

        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-green-300">
            FloraVision
          </p>

          <h1 className="text-3xl font-bold sm:text-5xl">
            Checkout
          </h1>

          <p className="mt-3 text-white/60">
            Complete your delivery details and review your order.
          </p>
        </div>

        <form
          onSubmit={handlePlaceOrder}
          className="grid items-start gap-8 lg:grid-cols-[1fr_400px]"
        >
          {/* Customer Details */}
          <div className="space-y-8">
            <section className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8">
              <div className="mb-7 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-400/10">
                  <MapPin className="text-green-300" />
                </div>

                <div>
                  <h2 className="text-xl font-semibold">
                    Delivery Information
                  </h2>
                  <p className="mt-1 text-sm text-white/50">
                    Where should we deliver your plants?
                  </p>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {/* Full Name */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm text-white/70"
                  >
                    Full Name *
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    value={customer.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    maxLength={100}
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none transition placeholder:text-white/30 focus:border-green-400"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm text-white/70"
                  >
                    Phone Number *
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="numeric"
                    pattern="[0-9]{10}"
                    title="Enter a valid 10-digit phone number"
                    value={customer.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none transition placeholder:text-white/30 focus:border-green-400"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm text-white/70"
                  >
                    Email Address *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={customer.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none transition placeholder:text-white/30 focus:border-green-400"
                  />
                </div>

                {/* Address */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="address"
                    className="mb-2 block text-sm text-white/70"
                  >
                    House No. / Street Address *
                  </label>

                  <textarea
                    id="address"
                    name="address"
                    autoComplete="street-address"
                    value={customer.address}
                    onChange={handleChange}
                    placeholder="Enter your complete delivery address"
                    rows={3}
                    maxLength={300}
                    required
                    className="w-full resize-y rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none transition placeholder:text-white/30 focus:border-green-400"
                  />
                </div>

                {/* City */}
                <div>
                  <label
                    htmlFor="city"
                    className="mb-2 block text-sm text-white/70"
                  >
                    City *
                  </label>

                  <input
                    id="city"
                    name="city"
                    type="text"
                    autoComplete="address-level2"
                    value={customer.city}
                    onChange={handleChange}
                    placeholder="Enter city"
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none transition placeholder:text-white/30 focus:border-green-400"
                  />
                </div>

                {/* State */}
                <div>
                  <label
                    htmlFor="state"
                    className="mb-2 block text-sm text-white/70"
                  >
                    State *
                  </label>

                  <input
                    id="state"
                    name="state"
                    type="text"
                    autoComplete="address-level1"
                    value={customer.state}
                    onChange={handleChange}
                    placeholder="Enter state"
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none transition placeholder:text-white/30 focus:border-green-400"
                  />
                </div>

                {/* PIN Code */}
                <div>
                  <label
                    htmlFor="pincode"
                    className="mb-2 block text-sm text-white/70"
                  >
                    PIN Code *
                  </label>

                  <input
                    id="pincode"
                    name="pincode"
                    type="text"
                    autoComplete="postal-code"
                    inputMode="numeric"
                    pattern="[0-9]{6}"
                    title="Enter a valid 6-digit PIN code"
                    value={customer.pincode}
                    onChange={handleChange}
                    placeholder="6-digit PIN code"
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 outline-none transition placeholder:text-white/30 focus:border-green-400"
                  />
                </div>
              </div>
            </section>

            {/* Payment Method */}
            <section className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8">
              <h2 className="mb-2 text-xl font-semibold">
                Payment Method
              </h2>

              <p className="mb-6 text-sm text-white/50">
                Choose a demo payment option.
              </p>

              <div className="space-y-3">
                {[
                  {
                    id: 'cod',
                    title: 'Cash on Delivery',
                    description: 'Pay when your order arrives.'
                  },
                  {
                    id: 'upi',
                    title: 'UPI',
                    description: 'Demo option only. No payment will be made.'
                  },
                  {
                    id: 'card',
                    title: 'Credit / Debit Card',
                    description: 'Demo option only. No card details required.'
                  }
                ].map((method) => (
                  <label
                    key={method.id}
                    className={`flex cursor-pointer items-start gap-4 rounded-2xl border p-4 transition ${
                      paymentMethod === method.id
                        ? 'border-green-400 bg-green-400/10'
                        : 'border-white/10 bg-black/10 hover:border-white/30'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method.id}
                      checked={paymentMethod === method.id}
                      onChange={(event) =>
                        setPaymentMethod(event.target.value)
                      }
                      className="mt-1 accent-green-400"
                    />

                    <span>
                      <span className="block font-semibold">
                        {method.title}
                      </span>

                      <span className="mt-1 block text-sm text-white/50">
                        {method.description}
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            </section>
          </div>

          {/* Order Summary */}
          <aside className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-7 lg:sticky lg:top-8">
            <div className="mb-6 flex items-center gap-3">
              <Package className="text-green-300" size={25} />

              <h2 className="text-xl font-semibold">
                Order Summary
              </h2>
            </div>

            <p className="mb-5 text-sm text-white/50">
              {cartItems.reduce(
                (total, item) => total + item.quantity,
                0
              )}{' '}
              plant(s) in your order
            </p>

            <div className="mb-6 space-y-5">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-20 w-20 rounded-xl bg-white/5 object-cover"
                  />

                  <div className="min-w-0 flex-1">
                    <h3 className="font-medium">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-white/50">
                      Quantity: {item.quantity}
                    </p>

                    <p className="mt-2 font-semibold text-green-300">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 border-t border-white/10 pt-5">
              <div className="flex justify-between gap-4 text-white/60">
                <span>Subtotal</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>

              <div className="flex justify-between gap-4 text-white/60">
                <span>Delivery</span>
                <span className="text-green-300">Free</span>
              </div>

              <div className="flex justify-between gap-4 border-t border-white/10 pt-4 text-lg font-bold">
                <span>Total</span>
                <span className="text-green-300">
                  {formatPrice(cartTotal)}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-green-400 px-6 py-4 font-bold text-black transition hover:bg-green-300"
            >
              <CheckCircle2 size={20} />
              Place Demo Order
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-white/40">
              No real payment will be processed. This is a frontend demo.
            </p>
          </aside>
        </form>
      </div>
    </main>
  )
}