// DOM Elements

let cc_exp_date_el = document.querySelector('#card_exp_date').textContent;



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







