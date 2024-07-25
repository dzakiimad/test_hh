export const handleDelete = async (id, fetchDataActivity) => {
    const response = await fetch(`https://test-hh-pi.vercel.app/activities`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem('access_token')
        },
        cache: 'no-store',
        body: JSON.stringify({ id })
    })
    const prod = await response.json()
    fetchDataActivity()
}