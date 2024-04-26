export const handleAddActivity = async (input,showSuccessNotification, fetchDataActivity) => {
    try {
        let obj = {
            method: 'POST',
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + localStorage.getItem('access_token')
            },
            body: JSON.stringify(input)
        }
        const response = await fetch('http://localhost:3000/activities', obj);
        const prod = await response.json()
        fetchDataActivity()
        document.getElementById('my_modal_1').close()
        if (!!response.ok) {
            showSuccessNotification({
                status: true,
                message: 'Berhasil menambah kegiatan!',
            })
        }
    } catch (error) {
        if (error.name == "SyntaxError") {
            showSuccessNotification({
                status: true,
                message: 'Masukkan data dengan benar!',
                color: 'red'
            })
        }
    }
}
