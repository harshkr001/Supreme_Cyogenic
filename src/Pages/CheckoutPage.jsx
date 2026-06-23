import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import { PaymentMethods } from '../Components/PaymentMethods';
import { OrderSummary } from '../Components/OrderSummary';

export const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart, setCheckout, getCheckoutData } = useCart();
  const checkoutData = getCheckoutData();
  const items = checkoutData?.items || cartItems;

  const [loading, setLoading] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('');
  const user = JSON.parse(localStorage.getItem("user"));

  const savedDetails = JSON.parse(
    localStorage.getItem("customerDetails")
  );

  const [formData, setFormData] = useState(
    savedDetails || {
    fullName: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    company: user?.company || "",
    address: user?.address || "",
    city: user?.city || "",
    state: user?.state || "",
    country: user?.country || "",
    postalCode: user?.postalCode || "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) newErrors.phone = 'Valid 10-digit phone is required';
    if (!formData.billingAddress.trim()) newErrors.billingAddress = 'Billing address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.postalCode.trim()) newErrors.postalCode = 'Postal code is required';
    if (!selectedPayment) newErrors.payment = 'Payment method is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) return;

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const orderId = `ORD-${Date.now().toString().slice(-6).toUpperCase()}-${Math.random().toString(36).substr(2, 5).toUpperCase()}`;

      // Calculate total
      const subtotal = items.reduce((sum, item) => {
        const price = parseFloat(item.price.split(' ')[1] || '0');
        return sum + price * item.quantity;
      }, 0);
      const total = subtotal * 1.18;

      localStorage.setItem(
        "customerDetails" ,
        JSON.stringify(formData)
      );

      setCheckout({
        orderId,
        items,
        total,
        paymentMethod: selectedPayment,
        customerData: formData,
      });

      clearCart();
      setLoading(false);
      navigate('/order-success', {
        state: {
          orderId,
          items,
          total,
          paymentMethod: selectedPayment,
        },
      });
    }, 2000);
  };

  if (!items || items.length === 0) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#07111d',
        padding: '120px 50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ color: '#00AEEF', fontSize: '32px', marginBottom: '20px' }}>Cart is Empty</h1>
          <p style={{ color: '#C8D6E5', marginBottom: '30px' }}>Please add items before checkout</p>
          <button
            onClick={() => navigate('/')}
            style={{
              padding: '12px 30px',
              background: '#00AEEF',
              color: '#07111d',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Back to Shopping
          </button>
        </div>
      </div>
    );
  }

  const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '12px',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(0, 174, 239, 0.3)',
    borderRadius: '8px',
    color: '#fff',
    fontSize: '14px',
    fontFamily: 'inherit',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    color: '#C8D6E5',
    fontSize: '14px',
    fontWeight: '500',
  };

  const errorStyle = {
    color: '#FF6B6B',
    fontSize: '12px',
    marginTop: '-10px',
    marginBottom: '10px',
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#07111d',
      padding: '120px 50px',
      color: '#fff',
    }}>
      <h1 style={{ textAlign: 'center', color: '#00AEEF', marginBottom: '50px', fontSize: '40px' }}>
        Checkout
      </h1>

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 420px',
        gap: '40px',
      }}>
        {/* Main Checkout Form */}
        <div>
          {/* Customer Details */}
          <div style={{
            background: 'rgba(0, 174, 239, 0.08)',
            borderRadius: '16px',
            padding: '30px',
            border: '1px solid rgba(0, 174, 239, 0.2)',
            marginBottom: '30px',
          }}>
            <h2 style={{ marginTop: 0, color: '#00AEEF', fontSize: '20px', marginBottom: '20px' }}>
              Customer Details
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label style={labelStyle}>Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  style={{
                    ...inputStyle,
                    borderColor: errors.fullName ? '#FF6B6B' : 'rgba(0, 174, 239, 0.3)',
                  }}
                />
                {errors.fullName && <p style={errorStyle}>{errors.fullName}</p>}
              </div>

              <div>
                <label style={labelStyle}>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  style={{
                    ...inputStyle,
                    borderColor: errors.email ? '#FF6B6B' : 'rgba(0, 174, 239, 0.3)',
                  }}
                />
                {errors.email && <p style={errorStyle}>{errors.email}</p>}
              </div>

              <div>
                <label style={labelStyle}>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 123-4567"
                  style={{
                    ...inputStyle,
                    borderColor: errors.phone ? '#FF6B6B' : 'rgba(0, 174, 239, 0.3)',
                  }}
                />
                {errors.phone && <p style={errorStyle}>{errors.phone}</p>}
              </div>

              <div>
                <label style={labelStyle}>Company Name (Optional)</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your Company"
                  style={inputStyle}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Billing Address *</label>
              <input
                type="text"
                name="billingAddress"
                value={formData.billingAddress}
                onChange={handleInputChange}
                placeholder="123 Main Street, Apt 4B"
                style={{
                  ...inputStyle,
                  borderColor: errors.billingAddress ? '#FF6B6B' : 'rgba(0, 174, 239, 0.3)',
                }}
              />
              {errors.billingAddress && <p style={errorStyle}>{errors.billingAddress}</p>}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
              <div>
                <label style={labelStyle}>City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="New York"
                  style={{
                    ...inputStyle,
                    borderColor: errors.city ? '#FF6B6B' : 'rgba(0, 174, 239, 0.3)',
                  }}
                />
                {errors.city && <p style={errorStyle}>{errors.city}</p>}
              </div>

              <div>
                <label style={labelStyle}>State *</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  placeholder="NY"
                  style={{
                    ...inputStyle,
                    borderColor: errors.state ? '#FF6B6B' : 'rgba(0, 174, 239, 0.3)',
                  }}
                />
                {errors.state && <p style={errorStyle}>{errors.state}</p>}
              </div>

              <div>
                <label style={labelStyle}>Country *</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  placeholder="United States"
                  style={{
                    ...inputStyle,
                    borderColor: errors.country ? '#FF6B6B' : 'rgba(0, 174, 239, 0.3)',
                  }}
                />
                {errors.country && <p style={errorStyle}>{errors.country}</p>}
              </div>

              <div>
                <label style={labelStyle}>Postal Code *</label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  placeholder="10001"
                  style={{
                    ...inputStyle,
                    borderColor: errors.postalCode ? '#FF6B6B' : 'rgba(0, 174, 239, 0.3)',
                  }}
                />
                {errors.postalCode && <p style={errorStyle}>{errors.postalCode}</p>}
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div style={{
            background: 'rgba(0, 174, 239, 0.08)',
            borderRadius: '16px',
            padding: '30px',
            border: '1px solid rgba(0, 174, 239, 0.2)',
            marginBottom: '30px',
          }}>
            <PaymentMethods selectedMethod={selectedPayment} onMethodChange={setSelectedPayment} />
            {errors.payment && <p style={errorStyle}>{errors.payment}</p>}
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <button
              onClick={() => navigate('/dry-ice-blocks')}
              style={{
                padding: '14px 20px',
                background: 'transparent',
                border: '2px solid #00AEEF',
                color: '#00AEEF',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0, 174, 239, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              Continue Shopping
            </button>

            <button
              onClick={handlePlaceOrder}
              disabled={loading}
              style={{
                padding: '14px 20px',
                background: loading ? 'rgba(0, 174, 239, 0.4)' : '#00AEEF',
                border: '2px solid #00AEEF',
                color: loading ? 'rgba(255, 255, 255, 0.6)' : '#07111d',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '16px',
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                if (!loading) e.currentTarget.style.opacity = '0.9';
              }}
              onMouseLeave={(e) => {
                if (!loading) e.currentTarget.style.opacity = '1';
              }}
            >
              {loading ? 'Processing...' : 'Place Order'}
            </button>
          </div>
        </div>

        {/* Order Summary Sidebar */}
        <OrderSummary items={items} paymentMethod={selectedPayment} />
      </div>
    </div>
  );
};
