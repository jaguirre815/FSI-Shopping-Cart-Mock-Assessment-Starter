//the plus and minus buttons respond to a click event

// The quantity shows 1 minimum
let rockQty = 1

//access the buttons

let addBtn = document.querySelector('#quantity-up')
let minusBtn = document.querySelector('#quantity-down')
let qtyDisplay = document.querySelector('.total-quantity')


//add a click event to each button
addBtn.addEventListener('click', function(e) {
    rockQty++
    qtyDisplay.textContent = 'Quantity: ${rockQty}'
})

minusBtn.addEventListener('click', function(e) {
    if (rockQty > 0) {
    rockQty--
    qtyDisplay.textContent ='Quantity: ${rockQty}'
    }
})



