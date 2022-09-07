// DOM Elements


const form = document.getElementById('userSubmissionForm');


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

        case 'exp_month':
            document.querySelector('#card_exp_month').textContent = str;
            break;

        case 'exp_year':
            document.querySelector('#card_exp_year').textContent = str;
            break;
    }
}

// Form Validation

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();

});

// DOM Elements
    const cardholder_name = document.getElementById('cardholder_name_input');
    const card_number = document.getElementById('card_number_input');
    const card_exp_month = document.getElementById('card_exp_month_input');
    const card_exp_year = document.getElementById('card_exp_year_input');
    const card_cvc = document.getElementById('card_cvc_input');

function checkInputs() {
// Input Values

    const cardholder_name_value = document.getElementById('cardholder_name_input').value.trim();
    const card_number_value = document.getElementById('card_number_input').value.trim();
    const card_exp_month_value = document.getElementById('card_exp_month_input').value.trim();
    const card_exp_year_value = document.getElementById('card_exp_year_input').value.trim();
    const card_cvc_value = document.getElementById('card_cvc_input').value.trim();


    checkForErrors(cardholder_name_value, card_number_value, card_exp_month_value, card_exp_year_value, card_cvc_value);

}


function checkForErrors(cardholder_name_value, card_number_value, card_exp_month_value, card_exp_year_value, card_cvc_value) {

    const primaryNum_regex = /([0-9]+( [0-9]+)+)/;
    const secondaryNum_regex = /[0-9]+.*[0-9]+/;

    if(cardholder_name_value === '') {
        // Show Error 
        setErrorFor(cardholder_name, "Can't be blank");
    }

    if(card_number_value  === '') {
        // Show Error 
        setErrorFor(card_number, "Can't be blank");
    } else if(primaryNum_regex.test(card_number_value)) {
        console.log('card number entered successfully');
    } else {
        setErrorFor(card_number, "Wrong format, numbers only");
    }

    if(card_exp_month_value  === '') {
        // Show Error 
        setErrorFor(card_exp_month, "Can't be blank");
    } else if(secondaryNum_regex.test(card_exp_month_value)) {
        console.log('expiraton month entered successfully');
    } else {
        setErrorFor(card_exp_month, "Wrong format, numbers only");
        console.log('incorrect format');
    }

    if(card_exp_year_value  === '') {
        // Show Error 
        setErrorFor(card_exp_year, "Can't be blank");
    } else if(secondaryNum_regex.test(card_exp_year_value)) {
        console.log('expiration year entered successfully');
    } else {
        setErrorFor(card_exp_year, "Wrong format, numbers only");
        console.log('incorrect format');
    }

    if(card_cvc_value  === '') {
        // Show Error 
        setErrorFor(card_cvc, "Can't be blank");
    } else if(secondaryNum_regex.test(card_cvc_value)) {
        console.log('cvc entered successfully');
    } else {
        setErrorFor(card_cvc, "Wrong format, numbers only");
        console.log('incorrect format');
    }
}




function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector('span');

    // Add error message inside span
    errorMessage.textContent = message;

    // Add error class

    input.classList.add("form_error");

}


// - Receive error messages when the form is submitted if:
//   - The card number, expiry date, or CVC fields are in the wrong format ([0-9]+( [0-9]+)+)
// - See hover, active, and focus states for interactive elements on the page

