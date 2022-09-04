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
    checkInputs();

});

const cardholder_name = document.getElementById('cardholder_name_input');
const card_number = document.getElementById('card_number_input');
const card_exp_month = document.getElementById('card_exp_month_input');
const card_exp_year = document.getElementById('card_exp_year_input');
const card_cvc = document.getElementById('card_cvc_input');

function checkInputs() {
    const cardholder_name_value = document.getElementById('cardholder_name_input').value.trim();
    const card_number_value = document.getElementById('card_number_input').value.trim();
    const card_exp_month_value = document.getElementById('card_exp_month_input').value.trim();
    const card_exp_year_value = document.getElementById('card_exp_year_input').value.trim();
    const card_cvc_value = document.getElementById('card_cvc_input').value.trim();


    if(cardholder_name_value === '') {
        // Show Error 
        setErrorFor(cardholder_name, 'Cardholder name cannot be blank');
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector('span');


    // Add error message inside span

    errorMessage.textContent = message;

}


// - Receive error messages when the form is submitted if:
//   - Any input field is empty
//   - The card number, expiry date, or CVC fields are in the wrong format
// - See hover, active, and focus states for interactive elements on the page

