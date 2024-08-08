let start = 0;
let end = 10;

const pagination_increase = async ()=>{
     let data = await fetch('https://jsonplaceholder.typicode.com/photos');
     let response = await data.json();

     let len = response.length;
     console.log(response);
     console.log(len)
     if(start<len){
        let page = response.filter((e,index)=>{return index < end && index >=start});
        start +=10;
        end +=10;
        // console.log(page);
       document.querySelector('#output').innerHTML =  page.map(e=>`
             <tr>
                <td>${e.albumId}</td>
                <td>${e.id}</td>
                <td>${e.title}</td>
                <td>${e.url}</td>
             </tr>
            `).join(" ")
     }
} 

const pagination_decrease = async ()=>{
    let data = await fetch('https://jsonplaceholder.typicode.com/photos');
    let response = await data.json();

    let len = response.length;
    console.log(response);
    console.log(len)
    start -=10;
        end -=10;
    if(end>0){
        
       let page = response.filter((e,index)=>{return index < end && index >=start});
       
       // console.log(page);
      document.querySelector('#output').innerHTML =  page.map(e=>`
            <tr>
               <td>${e.albumId}</td>
               <td>${e.id}</td>
               <td>${e.title}</td>
               <td>${e.url}</td>
            </tr>
           `).join(" ")
    }
} 