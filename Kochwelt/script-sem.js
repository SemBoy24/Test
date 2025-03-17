let recipes = {
    test: {
        ingredient: ["test"],
        amount: ["890"],
    },
    kisirIngredients: {
        ingredient: ["Bulgur, feiner (köftelik)", "Wasser, kochendes", "Frühlingszwiebel(n), in dünne Ringe geschnittene", "große(r) Zwiebel(n), in kleine Würfel gehackte", "Tomatenmark", "Paprikamark, optional, kann durch weiterees Tomatenmark ersetzt werden", "Salz", "Zitronensaft", "Granatapfelsirup", "Öl", "Petersilie", "Pfeffer"],
        amount: ["85", "150", "1", "1", "20", "3", "1", "4", "4", "18", "1", "1"], 
        unit: ["g", "ml", "ganze", "ganze", "g", "g", "TL", "ml", "ml", "ml", "Handvoll", "TL"],
    },
};

function showIngredients(recipe) {
    let ingredientData = recipes[recipe];
    let portion = document.getElementById("ingredient-table");
    let portionSize = document.getElementById("amount").value;
    portion.innerHTML = "";

    for (let i = 0; i < ingredientData["ingredient"].length; i++) {
        const ingredient = ingredientData["ingredient"][i];
        const amount = ingredientData["amount"][i];
        const unit = ingredientData["unit"][i];

        let newAmount = Math.round(amount * portionSize);
        portion.innerHTML += `
                <tr>
                    <td>${newAmount} ${unit} ${ingredient}</td>
                </tr>
        `;
    }

}
// include template
async function includeHTML() {
    let includeElements = document.querySelectorAll("[w3-include-html]");
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = "Page not found";
        }
    }
}
