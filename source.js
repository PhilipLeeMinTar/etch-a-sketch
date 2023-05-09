const btn = document.querySelector('button')

const container = document.querySelector('.container');

for (let i=0;i<16;i++) {
    const column = document.createElement('div');
    for (let i=0;i<16;i++){
        const square_div = document.createElement('div');
        square_div.setAttribute('style', 'width: 50px; height: 50px; margin: 10px;');
        // square_div.style.backgroundColor = 'blue';
        square_div.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = "orange";
        });
        
        square_div.addEventListener('mouseout', (event) => {
            event.target.style.backgroundColor = "";
        });
        column.appendChild(square_div);
    }
    container.appendChild(column);
}

btn.addEventListener('click', () => {
    let side = parseInt(prompt("Put a number less than 100"));
})

console.log("hihi")
// container.textContent = "what is this";
console.log("ajkgej")