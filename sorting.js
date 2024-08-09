const sorting = async ()=>{
    let data = await fetch('https://jsonplaceholder.typicode.com/photos');
    let response = await data.json();
    function compareStrings(a, b) {
        // Assuming you want case-insensitive comparison
        a = a.toLowerCase();
        b = b.toLowerCase();
        return (a < b) ? -1 : (a > b) ? 1 : 0;
      }
    let s = response.sort(function(a, b) {
        return compareStrings(a.title, b.title);
      });

      console.log(s)
}
sorting()