document.addEventListener('readystatechange', event => { 

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    if (event.target.readyState === "complete") {
       
        const appUrl = ""
        const urls = [
        ]
        
        urls.forEach(function(sheetUrl, index) {
            const url = appUrl + "?id=" + sheetUrl 

            if(sheetUrl != ""){
                console.log(sheetUrl + " " + index)
                fetch(url)
                .then(data => { return data.json()})
                .then(res => { document.getElementById("pp" + (index + 1)).innerHTML = res })
                .catch(error => { console.log(error) })
            }

        })
    }
});
