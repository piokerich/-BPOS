// Comprehensive Kenyan Menu Data
const categories = [
    { id: 'all', name: 'All Dishes', icon: 'layout-grid', count: 26 },
    { id: 'swahili', name: 'Swahili Bites', icon: 'cookie', count: 5 },
    { id: 'mains', name: 'Main Platters', icon: 'utensils', count: 6 },
    { id: 'grill', name: 'Nyama Choma', icon: 'flame', count: 5 },
    { id: 'sides', name: 'Sides', icon: 'wheat', count: 5 },
    { id: 'drinks', name: 'Beverages', icon: 'cup-soda', count: 5 }
];

const products = [
    // Swahili Bites
    { id: 1, name: "Beef Samosas (Pair)", price: 150.00, category: "swahili", image: "https://images.unsplash.com/photo-1601050638917-3f80bc61d419?w=500&h=500&fit=crop", type: "Non Veg", discount: "Hot" },
    { id: 2, name: "Coconut Mahamri (4pcs)", price: 100.00, category: "swahili", image: "https://images.unsplash.com/photo-1541544335338-79fc74511dcb?w=500&h=500&fit=crop", type: "Veg" },
    { id: 3, name: "Viazi Karai with Chutney", price: 120.00, category: "swahili", image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?w=500&h=500&fit=crop", type: "Veg" },
    { id: 19, name: "Mini Beef Sausages (3pcs)", price: 180.00, category: "swahili", image: "https://images.unsplash.com/photo-1541529086526-db283c563270?w=500&h=500&fit=crop", type: "Non Veg" },
    { id: 20, name: "Spicy Cassava Crisps", price: 80.00, category: "swahili", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&h=500&fit=crop", type: "Veg" },

    // Grill (Nyama Choma)
    { id: 4, name: "Mbuzi Choma (Full Rack)", price: 1800.00, category: "grill", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&h=500&fit=crop", type: "Non Veg", discount: "Special" },
    { id: 5, name: "Grilled Kuku wa Kupaka", price: 850.00, category: "grill", image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=500&h=500&fit=crop", type: "Non Veg" },
    { id: 6, name: "Beef Mshikaki Skewers", price: 450.00, category: "grill", image: "https://images.unsplash.com/photo-1529193591184-b1d58b3fffc9?w=500&h=500&fit=crop", type: "Non Veg" },
    { id: 21, name: "Pork Ribs BBQ (500g)", price: 950.00, category: "grill", image: "https://images.unsplash.com/photo-1529193591184-b1d58b3fffc9?w=500&h=500&fit=crop", type: "Non Veg" },
    { id: 22, name: "Grilled T-Bone Steak", price: 1200.00, category: "grill", image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=500&h=500&fit=crop", type: "Non Veg" },

    // Main Platters
    { id: 7, name: "Swahili Beef Pilau", price: 550.00, category: "mains", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&h=500&fit=crop", type: "Non Veg", discount: "Bestseller" },
    { id: 8, name: "Tilapia Fry with Ugali", price: 750.00, category: "mains", image: "https://images.unsplash.com/photo-1598144214539-75ec916f6b5f?w=500&h=500&fit=crop", type: "Non Veg" },
    { id: 9, name: "Special Githeri wa Mix", price: 350.00, category: "mains", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop", type: "Veg" },
    { id: 10, name: "Chicken Biryani Platter", price: 650.00, category: "mains", image: "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?w=500&h=500&fit=crop", type: "Non Veg" },
    { id: 23, name: "Beef Stew with Rice", price: 450.00, category: "mains", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=500&fit=crop", type: "Non Veg" },
    { id: 24, name: "Kamande (Lentils) Stew", price: 300.00, category: "mains", image: "https://images.unsplash.com/photo-1505575967455-40e256f7377c?w=500&h=500&fit=crop", type: "Veg" },

    // Sides
    { id: 11, name: "Ugali (Brown/White)", price: 80.00, category: "sides", image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=500&h=500&fit=crop", type: "Veg" },
    { id: 12, name: "Buttery Chapati (2pcs)", price: 100.00, category: "sides", image: "https://images.unsplash.com/photo-1574894709051-51253013ba0c?w=500&h=500&fit=crop", type: "Veg" },
    { id: 13, name: "Sautéed Sukuma Wiki", price: 120.00, category: "sides", image: "https://images.unsplash.com/photo-1540333033578-1200bc506306?w=500&h=500&fit=crop", type: "Veg" },
    { id: 14, name: "Fresh Kachumbari", price: 80.00, category: "sides", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=500&fit=crop", type: "Veg" },
    { id: 25, name: "Fried Plantains", price: 150.00, category: "sides", image: "https://images.unsplash.com/photo-1594212699903-ec8a3ecc50f6?w=500&h=500&fit=crop", type: "Veg" },

    // Drinks
    { id: 15, name: "Kenyan Masala Chai", price: 250.00, category: "drinks", image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=500&h=500&fit=crop", type: "Veg" },
    { id: 16, name: "Fresh Tree Tomato Juice", price: 200.00, category: "drinks", image: "https://images.unsplash.com/photo-1485025756734-d07f3521fd73?w=500&h=500&fit=crop", type: "Veg" },
    { id: 17, name: "Iced Hibiscus Tea", price: 180.00, category: "drinks", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&h=500&fit=crop", type: "Veg" },
    { id: 18, name: "Keringet Water (1L)", price: 150.00, category: "drinks", image: "https://images.unsplash.com/photo-1559839914-17aae19cea9e?w=500&h=500&fit=crop", type: "Veg" },
    { id: 26, name: "Stoney Tangawizi", price: 120.00, category: "drinks", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&h=500&fit=crop", type: "Veg" }
];

let cart = [];
let currentCategory = 'all';
let currentOrderMode = 'DINE IN';
let currentPaymentMode = 'CASH';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    lucide.createIcons();
    renderCategories();
    renderProducts();
    updateCartUI();

    // Responsive initial state
    if (window.innerWidth >= 1025) {
        const sidebar = document.getElementById('main-sidebar');
        const orderPanel = document.getElementById('order-panel');
        if (sidebar) sidebar.classList.remove('sidebar-closed');
        if (orderPanel) orderPanel.classList.remove('cart-closed');
    }
});

function checkAuth() {
    const isAuth = localStorage.getItem('berkley_auth');
    const user = localStorage.getItem('berkley_user');

    console.log('--- Berkley POS Security ---');
    console.log('Current Protocol:', window.location.protocol);
    console.log('Session Status:', isAuth ? 'AUTHENTICATED' : 'MISSING');

    // Check if running on file:// protocol
    if (window.location.protocol === 'file:') {
        console.warn('Note: LocalStorage might be inconsistent on "file://". Please use a local server or host on GitHub Pages.');
    }

    if (isAuth !== 'true') {
        console.warn('No active session found. Redirecting to login...');
        // Only redirect if we are NOT already on the login page
        if (!window.location.pathname.includes('login.html')) {
            window.location.replace('login.html');
        }
    } else {
        console.log('Welcome back,', user || 'User');
    }
}

function logout() {
    console.log('Logging out...');
    localStorage.removeItem('berkley_auth');
    localStorage.removeItem('berkley_user');
    window.location.replace('login.html');
}

// UI Interaction Functions
function toggleSidebar() {
    const sidebar = document.getElementById('main-sidebar');
    const orderPanel = document.getElementById('order-panel');
    if (!sidebar) return;

    if (window.innerWidth < 1025) {
        if (sidebar.classList.contains('sidebar-closed') && !orderPanel.classList.contains('cart-closed')) {
            orderPanel.classList.add('cart-closed');
        }
    }

    sidebar.classList.toggle('sidebar-closed');
    updateOverlay();
}

function toggleCart() {
    const orderPanel = document.getElementById('order-panel');
    const sidebar = document.getElementById('main-sidebar');
    if (!orderPanel) return;

    if (window.innerWidth < 1025) {
        if (orderPanel.classList.contains('cart-closed') && !sidebar.classList.contains('sidebar-closed')) {
            sidebar.classList.add('sidebar-closed');
        }
    }

    orderPanel.classList.toggle('cart-closed');
    updateOverlay();
}

function closeAllSidebars() {
    const sidebar = document.getElementById('main-sidebar');
    const orderPanel = document.getElementById('order-panel');
    if (sidebar) sidebar.classList.add('sidebar-closed');
    if (orderPanel) orderPanel.classList.add('cart-closed');
    updateOverlay();
}

function updateOverlay() {
    const overlay = document.getElementById('sidebar-overlay');
    const sidebar = document.getElementById('main-sidebar');
    const orderPanel = document.getElementById('order-panel');
    if (!overlay || !sidebar || !orderPanel) return;

    if (window.innerWidth < 1025) {
        const isOpen = !sidebar.classList.contains('sidebar-closed') || !orderPanel.classList.contains('cart-closed');
        overlay.classList.toggle('hidden', !isOpen);
    } else {
        overlay.classList.add('hidden');
    }
}

function setOrderMode(mode) {
    currentOrderMode = mode;
    const btns = document.querySelectorAll('.order-mode-btn');
    btns.forEach(btn => {
        if (btn.dataset.mode === mode) {
            btn.classList.add('bg-white', 'shadow-sm');
            btn.classList.remove('text-gray-400', 'hover:text-gray-600');
        } else {
            btn.classList.remove('bg-white', 'shadow-sm');
            btn.classList.add('text-gray-400', 'hover:text-gray-600');
        }
    });
}

function setPaymentMode(mode) {
    currentPaymentMode = mode;
    const btns = document.querySelectorAll('.payment-mode-btn');
    btns.forEach(btn => {
        const icon = btn.querySelector('i');
        const span = btn.querySelector('span');
        if (btn.dataset.pay === mode) {
            btn.classList.add('bg-primary-light', 'border-primary');
            btn.classList.remove('bg-gray-50', 'border-gray-50', 'hover:border-gray-200');
            if (icon) icon.classList.add('text-primary');
            if (icon) icon.classList.remove('text-gray-400');
            if (span) span.classList.add('text-primary');
            if (span) span.classList.remove('text-gray-400');
        } else {
            btn.classList.remove('bg-primary-light', 'border-primary');
            btn.classList.add('bg-gray-50', 'border-gray-50', 'hover:border-gray-200');
            if (icon) icon.classList.remove('text-primary');
            if (icon) icon.classList.add('text-gray-400');
            if (span) span.classList.remove('text-primary');
            if (span) span.classList.add('text-gray-400');
        }
    });
}

function placeOrder() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const subTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subTotal * 0.16;
    const total = subTotal + tax;
    const orderId = Math.floor(1000 + Math.random() * 9000);
    const date = new Date().toLocaleString();

    const receiptHtml = `
        <div class="text-center mb-4 border-b border-dashed border-gray-200 pb-4">
            <div class="flex items-center justify-center gap-2 mb-1">
                <div class="bg-primary text-white w-7 h-7 rounded-lg flex items-center justify-center">
                    <i data-lucide="utensils" class="w-4 h-4"></i>
                </div>
                <span class="text-lg font-black tracking-tighter uppercase text-gray-800">BERKLEY</span>
            </div>
            <p class="text-[9px] text-gray-500 font-medium uppercase tracking-[0.2em]">Premium Hotel & Restaurant</p>
            <p class="text-[8px] text-gray-400 mt-0.5">Nairobi, Kenya • +254 700 000 000</p>
        </div>

        <div class="grid grid-cols-2 gap-y-2 mb-4 bg-gray-50/50 p-3 rounded-xl border border-gray-100">
            <div>
                <p class="text-[8px] text-gray-400 uppercase font-bold tracking-wider">Receipt ID</p>
                <p class="text-[10px] font-bold text-gray-700">#BK-${orderId}</p>
            </div>
            <div class="text-right">
                <p class="text-[8px] text-gray-400 uppercase font-bold tracking-wider">Table</p>
                <p class="text-[10px] font-bold text-gray-700">TABLE 04</p>
            </div>
            <div>
                <p class="text-[8px] text-gray-400 uppercase font-bold tracking-wider">Date & Time</p>
                <p class="text-[10px] font-bold text-gray-700">${date}</p>
            </div>
            <div class="text-right">
                <p class="text-[8px] text-gray-400 uppercase font-bold tracking-wider">Served By</p>
                <p class="text-[10px] font-bold text-gray-700">Pio Kerich</p>
            </div>
            <div>
                <p class="text-[8px] text-gray-400 uppercase font-bold tracking-wider">Order Mode</p>
                <span class="inline-block px-1.5 py-0.5 bg-primary/10 text-primary text-[8px] font-black rounded uppercase">${currentOrderMode}</span>
            </div>
            <div class="text-right">
                <p class="text-[8px] text-gray-400 uppercase font-bold tracking-wider">Payment</p>
                <p class="text-[10px] font-bold text-gray-700">${currentPaymentMode}</p>
            </div>
        </div>

        <div class="mb-4">
            <div class="flex items-center gap-2 mb-3">
                <div class="h-px flex-1 bg-gray-100"></div>
                <p class="text-[8px] font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">Order Summary</p>
                <div class="h-px flex-1 bg-gray-100"></div>
            </div>
            <div class="space-y-3">
                ${cart.map(item => `
                    <div class="flex justify-between items-start gap-4">
                        <div class="flex-1">
                            <p class="text-[11px] font-bold text-gray-800 line-clamp-1">${item.name}</p>
                            <p class="text-[9px] text-gray-400">${item.quantity} x KSh ${item.price.toLocaleString()}</p>
                        </div>
                        <p class="text-[11px] font-black text-gray-800">KSh ${(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="bg-gray-900 rounded-xl p-4 text-white shadow-xl shadow-gray-200">
            <div class="flex justify-between text-[10px] mb-1 opacity-80">
                <span class="font-medium">Subtotal</span>
                <span class="font-bold">KSh ${subTotal.toLocaleString()}</span>
            </div>
            <div class="flex justify-between text-[10px] mb-3 opacity-80">
                <span class="font-medium">VAT (16%)</span>
                <span class="font-bold">KSh ${tax.toLocaleString()}</span>
            </div>
            <div class="h-px bg-white/20 mb-3 border-dashed border-t"></div>
            <div class="flex justify-between items-end">
                <div>
                    <p class="text-[9px] opacity-60 uppercase font-bold tracking-widest mb-0.5">Total Amount</p>
                    <p class="text-xl font-black">KSh ${total.toLocaleString()}</p>
                </div>
                <i data-lucide="award" class="w-6 h-6 opacity-20"></i>
            </div>
        </div>
        
        <div class="mt-6 text-center">
            <p class="text-[11px] font-bold text-gray-800">Thank You for Visiting Berkley!</p>
            <p class="text-[8px] text-gray-400 mt-0.5 italic">Please come again soon</p>
            <div class="flex justify-center gap-1 mt-3">
                ${Array(8).fill('<div class="w-1 h-1 rounded-full bg-gray-100"></div>').join('')}
            </div>
        </div>
    `;

    document.getElementById('receipt-content').innerHTML = receiptHtml;
    document.getElementById('receipt-modal').classList.remove('hidden');
    lucide.createIcons();

    // Clear cart and reset UI
    cart = [];
    renderProducts();
    updateCartUI();
}

function closeReceipt() {
    document.getElementById('receipt-modal').classList.add('hidden');
}

function renderCategories() {
    const bar = document.getElementById('category-bar');
    if (!bar) return;

    bar.innerHTML = categories.map(cat => `
        <div onclick="filterCategory('${cat.id}')" 
             class="${currentCategory === cat.id ? 'bg-primary border-primary text-white shadow-lg shadow-emerald-200' : 'bg-white border-gray-100 text-gray-500 hover:border-primary-light'} 
                    border px-4 py-3 rounded-2xl flex items-center gap-3 min-w-[140px] cursor-pointer transition-all duration-300 group category-item">
            <div class="w-10 h-10 rounded-xl ${currentCategory === cat.id ? 'bg-white/20 text-white' : 'bg-gray-50 text-gray-400 group-hover:bg-primary-light group-hover:text-primary'} flex items-center justify-center transition-colors">
                <i data-lucide="${cat.icon}" class="w-5 h-5"></i>
            </div>
            <div class="flex-1">
                <p class="font-bold text-[13px] leading-tight mb-0.5">${cat.name}</p>
                <p class="text-[10px] ${currentCategory === cat.id ? 'text-white/80' : 'text-gray-400'} font-medium">${cat.count} Dishes</p>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

function filterCategory(id) {
    currentCategory = id;
    renderCategories();
    renderProducts();
}

function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    const filteredProducts = currentCategory === 'all'
        ? products
        : products.filter(p => p.category === currentCategory);

    grid.innerHTML = filteredProducts.map(product => {
        const cartItem = cart.find(item => item.id === product.id);
        const borderClass = cartItem ? 'border-primary ring-2 ring-primary/20' : 'border-gray-100';

        return `
            <div class="bg-white rounded-2xl border ${borderClass} relative transition-all duration-300 hover:shadow-xl group flex flex-col animate-fade-in" data-id="${product.id}">
                ${product.discount ? `<div class="absolute top-3 left-3 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-md z-10 shadow-lg">${product.discount}</div>` : ''}
                
                <div class="product-image-container rounded-t-2xl">
                    <img src="${product.image}" alt="${product.name}" class="group-hover:scale-105">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div class="p-4 flex flex-col flex-1">
                    <div class="mb-2">
                        <div class="flex items-center gap-1.5 mb-1">
                            <span class="inline-block w-1.5 h-1.5 rounded-full ${product.type === 'Veg' ? 'bg-emerald-500' : 'bg-rose-500'}"></span>
                            <span class="text-[9px] font-bold uppercase tracking-wider text-gray-400">${product.type}</span>
                        </div>
                        <h3 class="font-bold text-sm leading-snug text-gray-800 line-clamp-2 h-10 mb-1">${product.name}</h3>
                        <p class="font-black text-primary text-base">KSh ${product.price.toLocaleString()}</p>
                    </div>

                    ${cartItem ? `
                        <div class="mt-auto flex items-center justify-between gap-1 bg-primary-light p-1 rounded-xl border border-primary/20">
                            <button class="w-8 h-8 rounded-lg bg-white text-gray-400 flex items-center justify-center hover:bg-gray-100 hover:text-gray-600 shadow-sm" onclick="event.stopPropagation(); updateQty(${product.id}, -1)">
                                <i data-lucide="minus" class="w-4"></i>
                            </button>
                            <span class="font-bold text-sm text-primary px-2">${cartItem.quantity}</span>
                            <button class="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center hover:bg-emerald-600 shadow-sm" onclick="event.stopPropagation(); updateQty(${product.id}, 1)">
                                <i data-lucide="plus" class="w-4"></i>
                            </button>
                        </div>
                    ` : `
                        <button class="mt-auto w-full py-3 bg-gray-50 hover:bg-primary group-hover:bg-primary text-gray-600 group-hover:text-white text-[10px] font-bold rounded-xl transition-all flex items-center justify-center gap-2 uppercase tracking-widest shadow-sm" onclick="addToCart(${product.id})">
                            <i data-lucide="plus-circle" class="w-4"></i>
                            Add to Dish
                        </button>
                    `}
                </div>
            </div>
        `;
    }).join('');
    lucide.createIcons();
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    // Simple add to cart logic
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    renderProducts();
    updateCartUI();
}

function updateQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== id);
        }
    }
    renderProducts();
    updateCartUI();
}

function updateCartUI() {
    const cartList = document.getElementById('cart-items');
    if (!cartList) return;

    cartList.innerHTML = cart.map(item => `
        <div class="flex gap-3 items-center animate-fade-in group">
            <div class="w-9 h-9 overflow-hidden rounded-lg bg-gray-100">
                <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
            </div>
            <div class="flex-1 min-w-0">
                <h4 class="text-[11px] font-bold leading-tight mb-0.5 truncate">${item.name}</h4>
                <div class="flex justify-between items-center text-[10px]">
                    <span class="text-gray-400 font-mono font-medium">${item.quantity} × ${item.price}</span>
                    <span class="text-primary font-bold font-mono">KSh ${(item.price * item.quantity).toLocaleString()}</span>
                </div>
            </div>
        </div>
    `).join('');

    const subTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const tax = subTotal * 0.16; // 16% VAT
    const total = subTotal + tax;

    // Update Mobile Badge
    const badge = document.getElementById('cart-badge');
    if (badge) {
        badge.innerText = totalItems;
        badge.classList.toggle('hidden', totalItems === 0);
    }

    if (document.getElementById('sub-total')) document.getElementById('sub-total').innerText = `KSh ${subTotal.toLocaleString()}`;
    if (document.getElementById('tax-amount')) document.getElementById('tax-amount').innerText = `KSh ${tax.toLocaleString()}`;
    if (document.getElementById('total-amount')) document.getElementById('total-amount').innerText = `KSh ${total.toLocaleString()}`;
}
