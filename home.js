let info = localStorage.getItem('login_information');
let final_information = JSON.parse(info);

let select_logo = document.querySelector('#logo');
select_logo.src = final_information.image

function logout(){
    window.localStorage.removeItem('login_information')
    window.location.href = "index.html";
}