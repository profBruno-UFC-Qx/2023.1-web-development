document.addEventListener('readystatechange', event => { 

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    if (event.target.readyState === "complete") {
        const appUrl = "https://script.google.com/macros/s/AKfycbwXBxdWUbJt0sv1sF3bTCEi9KlIqneh_ITsPBZ5QS-iAXkwxJIJtqdwP1bH13L4yzRrQA/exec";
        const sheetUrl = "1IwXgNz0wdZGjVqnUhr4vUU3r9TVmUgFBE_-Y8Mbk3uk";

        if(sheetUrl != ""){
            const url = appUrl + "?id=" + sheetUrl ;
            const table = document.getElementById("aprovados");

            fetch(url)
            .then(data => {console.log(data); return data.clone().json();})
            .then(res =>  { 
                const descriptions = res['descriptions'];
                for(let i in descriptions) {
                    
                    const row = table.insertRow(-1);
                    const number = row.insertCell(0);
                    const desc = row.insertCell(1);
                    number.appendChild(document.createTextNode(parseInt(i) + 1));
                    desc.appendChild(document.createTextNode(descriptions[i]));

                }
            })
            .catch(error => { console.log(error); });
        }
    }
});
