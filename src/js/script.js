// DOM Elements


const form = document.getElementById('userSubmissionForm');
let cc_exp_date_el = document.querySelector('#card_exp_date').textContent;


// Update UI Elements in Real-Time

function updateElementText(str, element_name){
    switch(element_name) {
        case 'cc_name':
            document.querySelector('#cardholder_name').textContent = str;
            break;

        case 'cc_number':
            document.querySelector('#card_number').textContent = str;
            break;

        case 'cc_cvc':
            document.querySelector('#card_cvc').textContent = str;
            break;
    }
}

// Form Validation

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let messages = [];
    console.log(messages);
});





// - Receive error messages when the form is submitted if:
//   - Any input field is empty
//   - The card number, expiry date, or CVC fields are in the wrong format
// - See hover, active, and focus states for interactive elements on the page

