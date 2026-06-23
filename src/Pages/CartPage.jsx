import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import { useState } from 'react';

export const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const [showNotification, setShowNotification] = useState('');

  const handleQuantityChange = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity);
  };

  const handleRemove = (productId) => {
    removeFromCart(productId);
    setShowNotification('Item removed from cart');
    setTimeout(() => setShowNotification(''), 2000);
  };

  const handleProceedToCheckout = () => {
    if (cartItems.length === 0) return;

    const total = getTotalPrice() * 1.18; // Including 18% tax
    navigate('/checkout', { state: { items: cartItems, total } });
  };

  if (cartItems.length === 0) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#07111d',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
      }}>
        <div style={{
          textAlign: 'center',
          maxWidth: '500px',
        }}>
          <div style={{
            fontSize: '80px',
            marginBottom: '20px',
          }}>
            🛒
          </div>
          <h1 style={{
            color: '#00AEEF',
            fontSize: '32px',
            marginBottom: '15px',
          }}>
            Your Cart is Empty
          </h1>
          <p style={{
            color: '#C8D6E5',
            fontSize: '16px',
            marginBottom: '30px',
            lineHeight: '1.6',
          }}>
            Looks like you haven't added anything to your cart yet. Browse our products and find what you need!
          </p>
          <Link
            to="/dry-ice-blocks"
            style={{
              display: 'inline-block',
              padding: '12px 30px',
              background: '#00AEEF',
              color: '#07111d',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  const subtotal = getTotalPrice();
  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  return (
    <div style={{
      minHeight: '100vh',
      background: '#07111d',
      padding: '120px 50px',
      color: '#fff',
    }}>
      {showNotification && (
        <div style={{
          position: 'fixed',
          top: '100px',
          right: '20px',
          background: '#00C864',
          color: '#07111d',
          padding: '12px 20px',
          borderRadius: '8px',
          fontWeight: '600',
          zIndex: 1000,
          animation: 'slideIn 0.3s ease',
        }}>
          {showNotification}
        </div>
      )}

      <h1 style={{
        textAlign: 'center',
        color: '#00AEEF',
        fontSize: '40px',
        marginBottom: '50px',
      }}>
        Shopping Cart
      </h1>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 350px',
        gap: '40px',
      }}>
        {/* Cart Items */}
        <div>
          <div style={{
            marginBottom: '20px',
            color: '#C8D6E5',
            fontSize: '14px',
          }}>
            {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in cart
          </div>

          {cartItems.map((item) => {
            const price = parseFloat(item.price.split(' ')[1] || '0');
            const itemTotal = price * item.quantity;

            return (
              <div
                key={item.id}
                style={{
                  background: 'rgba(0, 174, 239, 0.08)',
                  borderRadius: '12px',
                  padding: '20px',
                  marginBottom: '16px',
                  border: '1px solid rgba(0, 174, 239, 0.2)',
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr',
                  gap: '20px',
                  alignItems: 'start',
                }}
              >
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '8px',
                    objectFit: 'cover',
                  }}
                />

                {/* Product Details */}
                <div>
                  <h3 style={{
                    margin: '0 0 12px 0',
                    color: '#fff',
                    fontSize: '16px',
                    fontWeight: '600',
                  }}>
                    {item.title}
                  </h3>

                  <p style={{
                    margin: '0 0 16px 0',
                    color: '#C8D6E5',
                    fontSize: '14px',
                  }}>
                    Price: <span style={{ color: '#00AEEF', fontWeight: '600' }}>$ {price.toFixed(2)}</span>
                  </p>

                  {/* Quantity Controls */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '16px',
                  }}>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      style={{
                        width: '32px',
                        height: '32px',
                        background: 'rgba(0, 174, 239, 0.2)',
                        border: '1px solid #00AEEF',
                        color: '#00AEEF',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#00AEEF';
                        e.currentTarget.style.color = '#07111d';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(0, 174, 239, 0.2)';
                        e.currentTarget.style.color = '#00AEEF';
                      }}
                    >
                      −
                    </button>
                    <span style={{
                      width: '40px',
                      textAlign: 'center',
                      fontWeight: '600',
                    }}>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      style={{
                        width: '32px',
                        height: '32px',
                        background: 'rgba(0, 174, 239, 0.2)',
                        border: '1px solid #00AEEF',
                        color: '#00AEEF',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#00AEEF';
                        e.currentTarget.style.color = '#07111d';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(0, 174, 239, 0.2)';
                        e.currentTarget.style.color = '#00AEEF';
                      }}
                    >
                      +
                    </button>
                  </div>

                  {/* Subtotal and Remove */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                    <div>
                      <p style={{
                        margin: '0 0 8px 0',
                        color: '#C8D6E5',
                        fontSize: '12px',
                      }}>
                        Subtotal
                      </p>
                      <p style={{
                        margin: 0,
                        color: '#00AEEF',
                        fontWeight: '700',
                        fontSize: '16px',
                      }}>
                        $ {itemTotal.toFixed(2)}
                      </p>
                    </div>

                    <button
                      onClick={() => handleRemove(item.id)}
                      style={{
                        padding: '8px 16px',
                        background: 'rgba(255, 107, 107, 0.2)',
                        border: '1px solid #FF6B6B',
                        color: '#FF6B6B',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '12px',
                        fontWeight: '600',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#FF6B6B';
                        e.currentTarget.style.color = '#07111d';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 107, 107, 0.2)';
                        e.currentTarget.style.color = '#FF6B6B';
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Order Summary Sidebar */}
        <div style={{
          background: 'rgba(0, 174, 239, 0.08)',
          borderRadius: '12px',
          padding: '24px',
          border: '1px solid rgba(0, 174, 239, 0.2)',
          height: 'fit-content',
          position: 'sticky',
          top: '120px',
        }}>
          <h2 style={{
            margin: '0 0 24px 0',
            color: '#00AEEF',
            fontSize: '18px',
            borderBottom: '1px solid rgba(0, 174, 239, 0.3)',
            paddingBottom: '12px',
          }}>
            Order Summary
          </h2>

          <div style={{ marginBottom: '20px' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '12px',
            }}>
              <span style={{ color: '#C8D6E5' }}>Subtotal</span>
              <span style={{ color: '#fff', fontWeight: '600' }}>$ {subtotal.toFixed(2)}</span>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingBottom: '12px',
              borderBottom: '1px solid rgba(0, 174, 239, 0.3)',
            }}>
              <span style={{ color: '#C8D6E5' }}>Tax (18%)</span>
              <span style={{ color: '#fff', fontWeight: '600' }}>$ {tax.toFixed(2)}</span>
            </div>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '24px',
            borderTop: '2px solid #00AEEF',
            paddingTop: '12px',
          }}>
            <span style={{ color: '#00AEEF', fontWeight: '700', fontSize: '16px' }}>Total</span>
            <span style={{ color: '#00AEEF', fontWeight: '700', fontSize: '18px' }}>$ {total.toFixed(2)}</span>
          </div>

          <div style={{ display: 'grid', gap: '12px' }}>
            <button
              onClick={() => navigate('/dry-ice-blocks')}
              style={{
                padding: '12px 16px',
                background: 'transparent',
                border: '2px solid #00AEEF',
                color: '#00AEEF',
                borderRadius: '8px',
                fontWeight: '600',
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
              onClick={handleProceedToCheckout}
              style={{
                padding: '12px 16px',
                background: '#00AEEF',
                border: '2px solid #00AEEF',
                color: '#07111d',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};
