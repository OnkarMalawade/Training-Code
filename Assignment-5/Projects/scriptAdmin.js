function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'admin' && password === '12345') {
        localStorage.setItem('admin', 'true');
        alert('Login successful! Redirecting...');
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password.');
    }
}
