
fetch('https://dev.io-academy.uk/resources/bond.php').then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
});