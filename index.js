
fetch('https://dev.io-academy.uk/resources/bond.php').then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
    
    for(const d of data.data) {
        document.querySelector('.output1').innerHTML += `<li>${d.name} (${d.release_date})</li>`
    }
});