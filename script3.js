document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ambil data dari form
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessageDiv = document.getElementById('errorMessage');

    // Reset pesan kesalahan
    errorMessageDiv.innerText = '';

    // Validasi input
    if (!username || !password) {
        errorMessageDiv.innerText = 'Semua input harus diisi!';
        return; // Hentikan eksekusi jika ada input yang kosong
    }

    // Logika untuk memeriksa kredensial (contoh sederhana)
    if (username === 'admin' && password === 'password') {
        alert('Login berhasil!');
        // Redirect atau lakukan tindakan lain setelah login berhasil
    } else {
        errorMessageDiv.innerText = 'Nama pengguna atau kata sandi salah!';
    }
});
