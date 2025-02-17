"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handleLogin(event) {
    //function handleLogin(event: Event): Never{
    event.preventDefault();
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
    if (!usernameInput || !passwordInput) {
        alert('Username or password field not found.');
        return;
    }
    var username = usernameInput.value;
    var password = passwordInput.value;
    if (username === 'admin' && password === '12345') {
        localStorage.setItem('admin', 'true');
        alert('Login successful! Redirecting...');
        window.location.href = 'dashboard.html';
    }
    else {
        alert('Invalid username or password.');
    }
}
