// function createParagraph() {
//     const para = document.createElement("p");
//     para.textContent = "You clicked the button!";
//     document.body.appendChild(para);
// }

function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "Filthy button clicker!";
    para.classList.add("new-paragraph"); // Add the class "new-paragraph" to the new paragraph
    const container = document.querySelector(".container"); // Select the container div
    container.appendChild(para); // Append the new paragraph to the container
}

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
    button.addEventListener("click", createParagraph);
}
