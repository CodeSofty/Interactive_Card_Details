

// Form Input

let cc_number_input = document.querySelector('#card_number_input').value;
let cc_exp_month_input = document.querySelector('#card_exp_month_input').value;
let cc_exp_year_input = document.querySelector('#card_exp_year_input').value;
let cc_cvc_input = document.querySelector('#card_cvc_input').value;


// DOM Elements

let cc_number_el = document.querySelector('#card_number').textContent;
let cc_exp_date_el = document.querySelector('#card_exp_date').textContent;
let cc_cvc_el = document.querySelector('#card_cvc').textContent;



function updateElementText(str){
    document.querySelector('#cardholder_name').textContent = str;
}







