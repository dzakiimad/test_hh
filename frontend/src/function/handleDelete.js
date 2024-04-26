export const handleDelete = async (id, fetchDataActivity) => {
    const response = await fetch(`http://localhost:3000/activities`, {
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