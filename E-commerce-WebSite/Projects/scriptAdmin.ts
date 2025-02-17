function handleLogin(event: Event): void {
//function handleLogin(event: Event): Never{
    event.preventDefault();
    
    const usernameInput = document.getElementById('username') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    
    if (!usernameInput || !passwordInput) {
        alert('Username or password field not found.');
        return;
    }
    
    const username: string = usernameInput.value;
    const password: string = passwordInput.value;
    
    if (username === 'admin' && password === '12345') {
        localStorage.setItem('admin', 'true');
        alert('Login successful! Redirecting...');
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password.');
    }
}
