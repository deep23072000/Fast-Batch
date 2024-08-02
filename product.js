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
        </tr>`).join("")
})()