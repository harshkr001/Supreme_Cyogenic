import { useState } from 'react';

export const PaymentMethods = ({ selectedMethod, onMethodChange }) => {
  const methods = [
    { id: 'credit-card', label: 'Credit Card', icon: '💳' },
    { id: 'debit-card', label: 'Debit Card', icon: '💳' },
    { id: 'upi', label: 'UPI', icon: '📱' },
    { id: 'net-banking', label: 'Net Banking', icon: '🏦' },
    { id: 'paypal', label: 'PayPal', icon: '🅿️' },
    { id: 'bank-transfer', label: 'Bank Transfer', icon: '🏧' },
    { id: 'cod', label: 'Cash on Delivery', icon: '🚚' },
  ];

  const renderPaymentForm = (method) => {
    const formStyle = {
      marginTop: '20px',
      padding: '20px',
      background: 'rgba(0, 174, 239, 0.08)',
      borderRadius: '12px',
      border: '1px solid rgba(0, 174, 239, 0.2)',
    };

    const inputStyle = {
      width: '100%',
      padding: '12px',
      marginBottom: '12px',
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(0, 174, 239, 0.3)',
      borderRadius: '8px',
      color: '#fff',
      fontSize: '14px',
    };

    const rowStyle = {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '12px',
    };

    switch (method) {
      case 'credit-card':
      case 'debit-card':
        return (
          <div style={formStyle}>
            <input placeholder="Card Holder Name" style={inputStyle} />
            <input placeholder="1234 5678 9012 3456" style={inputStyle} />
            <div style={rowStyle}>
              <input placeholder="MM/YY" style={inputStyle} />
              <input placeholder="CVV" type="password" style={inputStyle} />
            </div>
          </div>
        );
      case 'upi':
        return (
          <div style={formStyle}>
            <input placeholder="UPI ID (username@bank)" style={inputStyle} />
          </div>
        );
      case 'net-banking':
        return (
          <div style={formStyle}>
            <select style={{ ...inputStyle, appearance: 'none' }}>
              <option value="">Select Your Bank</option>
              <option value="sbi">State Bank of India</option>
              <option value="hdfc">HDFC Bank</option>
              <option value="icici">ICICI Bank</option>
              <option value="axis">Axis Bank</option>
              <option value="boi">Bank of India</option>
            </select>
          </div>
        );
      case 'paypal':
        return (
          <div style={formStyle}>
            <input placeholder="PayPal Email" type="email" style={inputStyle} />
          </div>
        );
      case 'bank-transfer':
        return (
          <div style={formStyle}>
            <p style={{ color: '#C8D6E5', marginBottom: '12px' }}>
              Bank Transfer Details (Read-Only):
            </p>
            <input value="Supreme Cryogenic Ltd." disabled style={inputStyle} />
            <input value="Account: 1234567890" disabled style={inputStyle} />
            <input value="IFSC: SUPR0001234" disabled style={inputStyle} />
          </div>
        );
      case 'cod':
        return (
          <div style={formStyle}>
            <p style={{ color: '#C8D6E5' }}>
              Pay when you receive your order. Please keep your delivery address ready.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h3 style={{ marginBottom: '20px', color: '#00AEEF', fontSize: '18px' }}>
        Select Payment Method
      </h3>

      <div style={{ display: 'grid', gap: '12px' }}>
        {methods.map((method) => (
          <label
            key={method.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px',
              background: selectedMethod === method.id 
                ? 'rgba(0, 174, 239, 0.15)' 
                : 'rgba(255, 255, 255, 0.05)',
              border: selectedMethod === method.id 
                ? '2px solid #00AEEF' 
                : '1px solid rgba(0, 174, 239, 0.2)',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              if (selectedMethod !== method.id) {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedMethod !== method.id) {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              }
            }}
          >
            <input
              type="radio"
              name="payment-method"
              value={method.id}
              checked={selectedMethod === method.id}
              onChange={(e) => onMethodChange(e.target.value)}
              style={{ cursor: 'pointer' }}
            />
            <span style={{ fontSize: '20px' }}>{method.icon}</span>
            <span style={{ color: '#fff', fontWeight: '500' }}>{method.label}</span>
          </label>
        ))}
      </div>

      {selectedMethod && renderPaymentForm(selectedMethod)}
    </div>
  );
};
