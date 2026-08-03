import { Link } from 'react-router-dom';

export const OrderSuccess = ({ orderId, items, total, paymentMethod }) => {
  const generateOrderId = () => {
    return `ORD-${Date.now().toString().slice(-6).toUpperCase()}-${Math.random().toString(36).substr(2, 5).toUpperCase()}`;
  };

  const order = {
    id: orderId || generateOrderId(),
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
    status: 'Confirmed',
    paymentStatus: 'Pending',
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#07111d',
      padding: '60px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        maxWidth: '600px',
        width: '100%',
        background: 'rgba(0, 174, 239, 0.08)',
        borderRadius: '20px',
        padding: '40px',
        border: '1px solid rgba(0, 174, 239, 0.3)',
        textAlign: 'center',
      }}>
        {/* Success Icon */}
        <div style={{
          width: '80px',
          height: '80px',
          background: 'rgba(0, 200, 100, 0.2)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 30px',
          border: '2px solid #00C864',
        }}>
          <span style={{ fontSize: '40px' }}>✓</span>
        </div>

        <h1 style={{
          color: '#00AEEF',
          fontSize: '32px',
          marginBottom: '10px',
        }}>
          Order Confirmed!
        </h1>

        <p style={{
          color: '#C8D6E5',
          marginBottom: '30px',
          fontSize: '16px',
        }}>
          Thank you for your order. We've received your purchase and will process it soon.
        </p>

        {/* Order Details */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '30px',
          textAlign: 'left',
          border: '1px solid rgba(0, 174, 239, 0.2)',
        }}>
          <div style={{ display: 'grid', gap: '12px' }}>
            <div>
              <p style={{ color: '#C8D6E5', fontSize: '12px', margin: '0 0 4px 0' }}>Order ID</p>
              <p style={{ color: '#00AEEF', fontWeight: '700', margin: 0, fontSize: '16px' }}>{order.id}</p>
            </div>
            <div>
              <p style={{ color: '#C8D6E5', fontSize: '12px', margin: '0 0 4px 0' }}>Order Date & Time</p>
              <p style={{ color: '#fff', margin: 0 }}>{order.date} at {order.time}</p>
            </div>
            <div>
              <p style={{ color: '#C8D6E5', fontSize: '12px', margin: '0 0 4px 0' }}>Order Status</p>
              <p style={{ color: '#00C864', fontWeight: '600', margin: 0 }}>{order.status}</p>
            </div>
            <div>
              <p style={{ color: '#C8D6E5', fontSize: '12px', margin: '0 0 4px 0' }}>Payment Status</p>
              <p style={{ color: '#FF9500', fontWeight: '600', margin: 0 }}>{order.paymentStatus}</p>
            </div>
            <div>
              <p style={{ color: '#C8D6E5', fontSize: '12px', margin: '0 0 4px 0' }}>Payment Method</p>
              <p style={{ color: '#fff', margin: 0, textTransform: 'capitalize' }}>{paymentMethod?.replace('-', ' ') || 'Not specified'}</p>
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '30px',
          textAlign: 'left',
          border: '1px solid rgba(0, 174, 239, 0.2)',
        }}>
          <h3 style={{ color: '#00AEEF', marginTop: 0, marginBottom: '16px' }}>Order Items</h3>
          {items && items.map((item) => (
            <div key={item.id} style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingBottom: '12px',
              borderBottom: '1px solid rgba(0, 174, 239, 0.2)',
              marginBottom: '12px',
            }}>
              <div>
                <p style={{ color: '#fff', fontWeight: '500', margin: 0 }}>{item.title}</p>
                <p style={{ color: '#C8D6E5', fontSize: '12px', margin: '4px 0 0 0' }}>Qty: {item.quantity}</p>
              </div>
              <p style={{ color: '#00AEEF', fontWeight: '600', margin: 0 }}>
                $ {(parseFloat(item.price.split(' ')[1] || '0') * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '16px',
            borderTop: '2px solid #00AEEF',
            paddingTop: '12px',
          }}>
            <span style={{ color: '#00AEEF', fontWeight: '700', fontSize: '16px' }}>Total:</span>
            <span style={{ color: '#00AEEF', fontWeight: '700', fontSize: '18px' }}>
              $ {total?.toFixed(2) || '0.00'}
            </span>
          </div>
        </div>

        {/* Information */}
        <div style={{
          background: 'rgba(0, 174, 239, 0.1)',
          borderRadius: '12px',
          padding: '16px',
          marginBottom: '30px',
          border: '1px solid rgba(0, 174, 239, 0.3)',
        }}>
          <p style={{ color: '#C8D6E5', margin: 0, fontSize: '14px' }}>
            A confirmation email has been sent to your registered email address. You can track your order status anytime.
          </p>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'grid',
          gap: '12px',
          gridTemplateColumns: '1fr 1fr',
        }}>
          <Link
            to="/"
            style={{
              padding: '12px 20px',
              background: 'transparent',
              border: '2px solid #00AEEF',
              color: '#00AEEF',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0, 174, 239, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            Back to Home
          </Link>

          <Link
            to="/dry-ice-blocks"
            style={{
              padding: '12px 20px',
              background: '#00AEEF',
              border: '2px solid #00AEEF',
              color: '#07111d',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.9';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};
