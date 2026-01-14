        const loginForm = document.getElementById('loginForm');
        const loginError = document.getElementById('loginError');

        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();

            if (email === "admin@profly.com" && password === "12345") {
                localStorage.setItem('isLoggedIn', 'true');
                window.location.href = '../dash/overview.html';
            } else {
                loginError.textContent = "❌ Invalid email or password";
            }
        });