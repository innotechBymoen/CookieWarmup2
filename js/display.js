let counter_json = Cookies.get(`click_count`);
let counter_container = document.querySelector(`#counter_container`);

if(counter_json === undefined) {
    counter_container.insertAdjacentHTML(`afterbegin`, `<h3>There is an error!</h3>`);
} else {
    counter_object = JSON.parse(counter_json);
    counter_container.insertAdjacentHTML(`afterbegin`, `<h3>Counter One: ${counter_object[`button_one_clicks`]}</h3>`);
    counter_container.insertAdjacentHTML(`afterbegin`, `<h3>Counter Two: ${counter_object[`button_two_clicks`]}</h3>`);
    counter_container.insertAdjacentHTML(`afterbegin`, `<h3>Counter Three: ${counter_object[`button_three_clicks`]}</h3>`);
}