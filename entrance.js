var backend = 'http://localhost:4000'

document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await fetch(backend + '/login', {
      method: 'POST',
      body: formData,
    });
    console.log(response.status, response.statusText);
    if (response.ok) {
        const data = await response.json();
        const token = data.data.token;
        localStorage.setItem('token', token);
        window.location.href = 'personalAcc.html'
    } else {
        alert('Неверный логин и(или) пароль');
    }
  });
