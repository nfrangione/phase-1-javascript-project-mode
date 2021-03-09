
function buildDrinkInstructions(name) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then(res => res.json())
    .then(drink => console.log(drink))
    .catch(error => console.log(error))
}
