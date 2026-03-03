document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('Login attempt:', username);

    // Support both sets of credentials
    if ((username === 'floyd_miles' && password === 'admin') || (username === 'pio' && password === 'kenya')) {
        console.log('Credentials valid, setting localStorage...');

        // Ensure we set the values before redirecting
        localStorage.setItem('berkley_auth', 'true');
        localStorage.setItem('berkley_user', 'Pio Kerich');

        console.log('Auth set confirmed:', localStorage.getItem('berkley_auth'));

        const btn = e.target.querySelector('button');
        if (btn) {
            btn.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Authenticating...';
            if (window.lucide) lucide.createIcons();
        }

        // Short delay to ensure localStorage is flushed/ready
        setTimeout(() => {
            console.log('Redirecting to index.html...');
            window.location.replace('index.html');
        }, 500);
    } else {
        console.log('Login failed: Invalid credentials');
        alert('Invalid credentials. Hint: use pio / kenya');
    }
});
