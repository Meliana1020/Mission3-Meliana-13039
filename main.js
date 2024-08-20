function togglePasswordVisibility() {
    const passwordInput = document.getElementById('katasandi');
    const eyeIcon = document.getElementById('eyeIcon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.172 3.172a4.992 4.992 0 011.415 1.415M12 5c1.657 0 3.156.672 4.243 1.758l1.414 1.414C17.156 6.672 15.657 6 14 6c-4.478 0-8.269 2.943-9.542 7-1.273 4.057 1.858 6.5 3.732 6.5.654 0 1.296-.09 1.916-.26m1.54-7.542L21 21"/>';
    } else {
        passwordInput.type = 'password';
        eyeIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>';
    }
}
