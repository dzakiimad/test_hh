
export const handleLogin = async (email, password, showSuccessNotification, checkLoginStatus) => {

    try {
        const response = await fetch('https://test-hh-pi.vercel.app/users/login', {
            method: 'POST',
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const prod = await response.json()
        localStorage.setItem('access_token', prod.accessToken)
        checkLoginStatus()
        if (!response.ok) {
            showSuccessNotification({
                status: true,
                message: 'Email atau password salah!',
                color: 'red'
            })
        }
    } catch (error) {
        showSuccessNotification({
            status: true,
            message: 'Terjadi kesalahan',
            color: 'red'
        })
    }
}
