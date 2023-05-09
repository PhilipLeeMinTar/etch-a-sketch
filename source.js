const btn = document.querySelector('button')
const container = document.querySelector('.container');

const createGrid = (size) => {
    for (let i=0;i<size;i++) {
        const column = document.createElement('div');
        for (let i=0;i<size;i++){
            const square_div = document.createElement('div');
            square_div.setAttribute('style', 'width: 9.5px; height:9.5px;');
            square_div.style.backgroundColor = 'blue';
            square_div.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = "orange";
            });
            
            square_div.addEventListener('mouseout', (event) => {
                event.target.style.backgroundColor = "blue";
            });
            column.appendChild(square_div);
        }
        container.appendChild(column);
    }
}

createGrid(16);

btn.addEventListener('click', () => {
    let side = parseInt(prompt("Put a number less than 100"));
    if (side > 100) {
        alert("Number is not less than 100");
        return;
    } else {
        container.textContent = "";
        createGrid(side);
    }

})
