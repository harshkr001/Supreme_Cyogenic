export function getCart() {
  try {
    const raw = localStorage.getItem("supreme_cart");
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  try {
    localStorage.setItem("supreme_cart", JSON.stringify(cart));
  } catch (e) {
    // ignore
  }
}

export function addToCart(item, quantity = 1) {
  const cart = getCart();
  const idx = cart.findIndex((c) => c.id === item.id);
  if (idx > -1) {
    cart[idx].quantity += quantity;
  } else {
    cart.push({ ...item, quantity });
  }
  saveCart(cart);
  return cart;
}

export function clearCart() {
  try {
    localStorage.removeItem("supreme_cart");
  } catch (e) {}
}

export function getCartCount() {
  return getCart().reduce((s, i) => s + (i.quantity || 0), 0);
}
