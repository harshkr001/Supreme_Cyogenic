export const OrderSummary = ({ items, paymentMethod }) => {
  if (!items || items.length === 0) {
    return (
      <div style={{
        background: 'rgba(0, 174, 239, 0.08)',
        borderRadius: '16px',
        padding: '20px',
        border: '1px solid rgba(0, 174, 239, 0.2)',
      }}>
        <p style={{ color: '#C8D6E5', textAlign: 'center' }}>No items in order</p>
      </div>
    );
  }

  // Calculate totals
  const subtotal = items.reduce((sum, item) => {
    const price = parseFloat(item.price.split(' ')[1] || '0');
    return sum + price * item.quantity;
  }, 0);

  const taxRate = 0.18; // 18% tax
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <div style={{
      background: 'rgba(0, 174, 239, 0.08)',
      borderRadius: '16px',
      padding: '20px',
      border: '1px solid rgba(0, 174, 239, 0.2)',
      height: 'fit-content',
      position: 'sticky',
      top: '100px',
    }}>
      <h3 style={{ 
        marginBottom: '20px', 
        color: '#00AEEF', 
        fontSize: '18px',
        borderBottom: '1px solid rgba(0, 174, 239, 0.3)',
        paddingBottom: '12px',
      }}>
        Order Summary
      </h3>

      <div style={{ marginBottom: '20px' }}>
        {items.map((item) => {
          const price = parseFloat(item.price.split(' ')[1] || '0');
          const itemTotal = price * item.quantity;
          return (
            <div key={item.id} style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ color: '#fff', fontWeight: '500' }}>{item.title}</span>
                <span style={{ color: '#C8D6E5', fontSize: '14px' }}>x{item.quantity}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#C8D6E5', fontSize: '14px' }}>LKR {price.toFixed(2)}</span>
                <span style={{ color: '#00AEEF', fontWeight: '600' }}>LKR {itemTotal.toFixed(2)}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{
        borderTop: '1px solid rgba(0, 174, 239, 0.3)',
        paddingTop: '12px',
        marginBottom: '12px',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ color: '#C8D6E5' }}>Subtotal</span>
          <span style={{ color: '#fff' }}>LKR {subtotal.toFixed(2)}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
          <span style={{ color: '#C8D6E5' }}>Tax (18%)</span>
          <span style={{ color: '#fff' }}>LKR {tax.toFixed(2)}</span>
        </div>
      </div>

      <div style={{
        borderTop: '2px solid #00AEEF',
        paddingTop: '12px',
        marginBottom: '16px',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#00AEEF', fontWeight: '700', fontSize: '16px' }}>Total</span>
          <span style={{ color: '#00AEEF', fontWeight: '700', fontSize: '18px' }}>LKR {total.toFixed(2)}</span>
        </div>
      </div>

      {paymentMethod && (
        <div style={{
          background: 'rgba(0, 174, 239, 0.15)',
          padding: '12px',
          borderRadius: '8px',
          borderLeft: '3px solid #00AEEF',
        }}>
          <p style={{ color: '#C8D6E5', fontSize: '12px', margin: '0 0 6px 0' }}>Payment Method</p>
          <p style={{ color: '#00AEEF', fontWeight: '600', margin: 0, textTransform: 'capitalize' }}>
            {paymentMethod.replace('-', ' ')}
          </p>
        </div>
      )}
    </div>
  );
};
