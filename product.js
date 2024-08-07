let response = null;

(async function(){
    let url = 'http://localhost:4000/product';
    let data = await fetch(url);
    response =   await data.json();

    
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
    let updatefilterdata  = response.filter(e =>e.id == arg);
    console.log(updatefilterdata)

    let form_design = `<form >
    <div><input type="text" id="update_product_name" placeholder="Enter name" value="${updatefilterdata[0].pname}"></div>

    <div><input type="text" id="update_product_price" placeholder="Enter Product price" value="${updatefilterdata[0].pprice}"></div>

    <div><input type="text" id="update_product_image" placeholder="Enter product image" value="${updatefilterdata[0].pimage}"></div>

    <div><input type="text" id="update_product_brand" placeholder="Enter product brand" value="${updatefilterdata[0].pbrand}"></div>

    <div><button onclick="submitupdatedata(${updatefilterdata[0].id})"> Update </button></div>
</form>`;

let store = document.querySelector('#showform');
store.innerHTML = form_design;
    
}

function submitupdatedata(arg){
    let update_product_name = document.querySelector('#update_product_name').value;
    let update_product_price = document.querySelector('#update_product_price').value;
    let update_product_brand = document.querySelector('#update_product_brand').value;
    let update_product_image = document.querySelector('#update_product_image').value;
    
    let update_data_obj = {
      "pname": update_product_name,
      "pprice": update_product_price,
      "pbrand": update_product_brand,
      "pimage": update_product_image
    }

    console.log(update_data_obj)

     let url = `http://localhost:4000/product/${arg}`;
     let method = {
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(update_data_obj)
     }
     fetch(url,method);
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




function under(arg){
    let s = null;
    // let val = document.querySelector(`${arg}`).value;
    console.log(arg);
    if(arg === 500){
        s = response.filter(e=> e.pprice > 0 && e.pprice <arg);

    console.log(s)
    }
    else if(arg === 1000){
        s = response.filter(e=> e.pprice > 500 && e.pprice <arg);
        

    console.log(s)
    }
    else if(arg === 2000){
        s = response.filter(e=> e.pprice > 1000 && e.pprice <arg);

    console.log(s)
    }
    else if(arg === 3000){
        s = response.filter(e=> e.pprice > 2000 && e.pprice <arg);

    console.log(s)
    };
    
    
    document.querySelector('#productdata').innerHTML = s.map(e=>`
        <tr>
           <td> ${e.id}</td>
           <td> ${e.pname}</td>
           <td> ${e.pprice}</td>
           <td><img height="50px" src="${e.pimage}" alt="not found"></td>
           <td> ${e.pbrand}</td>
           <td onclick="del(${e.id})"><i class="fa-solid fa-trash"></i></td>
           <td onclick="update(${e.id})"><i class="fa-regular fa-pen-to-square"></i></td>
        </tr>`).join("")
   
}