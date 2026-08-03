import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import { OrderSuccess } from '../Components/OrderSuccess';

export const OrderSuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { getCheckoutData } = useCart();

  const state = location.state;
  const checkoutData = getCheckoutData();

  const orderId = state?.orderId || checkoutData?.orderId;
  const items = state?.items || checkoutData?.items || [];
  const total = state?.total || checkoutData?.total || 0;
  const paymentMethod = state?.paymentMethod || checkoutData?.paymentMethod || '';

  // If no order data, redirect to home
  if (!orderId) {
    setTimeout(() => navigate('/'), 1000);
  }

  return <OrderSuccess orderId={orderId} items={items} total={total} paymentMethod={paymentMethod} />;
};
