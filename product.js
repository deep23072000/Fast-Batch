(async function(){
    let url = 'http://localhost:4000/product';
    let data = await fetch(url);
    let response =   await data.json();

    
    document.querySelector('#productdata').innerHTML = response.map(e=>`
        <tr>
           <td> ${e.id}</td>
           <td> ${e.pname}</td>
           <td> ${e.pprice}</td>
           <td><img height="50px" src="${e.pimage}" alt="not found"></td>
           <td> ${e.pbrand}</td>
           <td onclick="del(${e.id})"><i class="fa-solid fa-trash"></i></td>
           <td onclick="update(${e.id})"><i class="fa-regular fa-pen-to-square"></i></td>
        </tr>`).join("")
})()

function del(arg){
    fetch(`http://localhost:4000/product/${arg}`,{
        method:"DELETE"
    });
}

function update(arg){
    
}

function add_product_form(){
    let form_design = `<form>
    <div><input type="text" id="pname" placeholder="Enter name"></div>
    <div><input type="text" id="pprice" placeholder="Enter Product price"></div>
    <div><input type="text" id="pimage" placeholder="Enter product image"></div>
    <div><input type="text" id="pbrand" placeholder="Enter product brand"></div>
    <div><button onclick="add()"> Add </button></div>
</form>`;
let store = document.querySelector('#showform');
store.innerHTML = form_design;
}


function add(){
    
}