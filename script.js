// Cart functionality
let cart = JSON.parse(localStorage.getItem('aparteCart')) || [];

function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (badge) badge.textContent = cart.length;
}

function addToCart(itemId) {
  cart.push({ id: itemId, qty: 1, time: Date.now() });
  localStorage.setItem('aparteCart', JSON.stringify(cart));
  updateCartBadge();
  alert('장바구니에 추가되었습니다!');
}

// Today's Offer Timer
function startOfferTimer() {
  const products = [
    { name: '레깅스', orig: 38000, sale: 35000 },
    { name: 'LIFTBALM', orig: 13000, sale: 9900 },
    { name: 'BARDYMIST', orig: 28000, sale: 24900 },
    { name: 'FRABELL', orig: 33500, sale: 33500 },
    { name: '티셔츠', orig: 30000, sale: 27000 },
    { name: '후디', orig: 63000, sale: 59000 },
    { name: 'CREATINE', orig: 39900, sale: 39900 }
  ];
  
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  const todayProduct = products[dayOfYear % products.length];
  
  const nameEl = document.getElementById('offerName');
  const origEl = document.getElementById('offerOrig');
  const priceEl = document.getElementById('offerPrice');
  
  if (nameEl) nameEl.textContent = todayProduct.name;
  if (origEl) origEl.textContent = '₩' + todayProduct.orig.toLocaleString();
  if (priceEl) priceEl.textContent = '₩' + todayProduct.sale.toLocaleString();
  
  function updateTimer() {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    const diff = midnight - now;
    
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    
    const hEl = document.getElementById('tH');
    const mEl = document.getElementById('tM');
    const sEl = document.getElementById('tS');
    
    if (hEl) hEl.textContent = String(h).padStart(2, '0');
    if (mEl) mEl.textContent = String(m).padStart(2, '0');
    if (sEl) sEl.textContent = String(s).padStart(2, '0');
  }
  
  updateTimer();
  setInterval(updateTimer, 1000);
}

// Modal functions
function openModal(type) {
  const modal = document.getElementById('modal' + type.charAt(0).toUpperCase() + type.slice(1));
  if (modal) modal.classList.add('active');
}

function closeModal(type) {
  const modal = document.getElementById('modal' + type.charAt(0).toUpperCase() + type.slice(1));
  if (modal) modal.classList.remove('active');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  if (document.querySelector('.today-offer')) startOfferTimer();
});
