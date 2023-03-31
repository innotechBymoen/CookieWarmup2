let counter_json = Cookies.get(`click_count`);
let counter_object = {
    button_one_clicks: 0,
    button_two_clicks: 0,
    button_three_clicks: 0,
}

if(!(counter_json === undefined)){ 
    counter_object = JSON.parse(counter_json);
}

function add_count(details) {
    counter_object[details[`target`].getAttribute(`key_name`)] += 1;
    counter_json = JSON.stringify(counter_object);
    Cookies.set(`click_count`, counter_json);
}

let counter_buttons = document.querySelectorAll(`.button_counter`);
for(let i=0; i<counter_buttons.length; i++) {
    counter_buttons[i].addEventListener(`click`, add_count);
}