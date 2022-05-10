document.addEventListener('readystatechange', event => { 

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    if (event.target.readyState === "complete") {
       
        const appUrl = "https://script.google.com/macros/s/AKfycby8Cc77YPc4NfxcGTUz7Ba6n0gdBA_s7JkvdeJ8LPU_646M-LGcaVia1LozCFcUTqAhrQ/exec"
        const urls = [
        "1lxySWEQc6tJvYyo6QTAFQPITPrXQM3P7TcmGnQ3wWZA",
        "1kp0dTRHKZnh0LzYeva5mT_t5MJyKdcSnEhE4gHgF-xw",
        "1yQGImLqvVfIMNavpVHEBpZhxMqjiOHsMLs-yjlggscQ"
        ]
        
        urls.forEach(function(sheetUrl, index) {
            const url = appUrl + "?id=" + sheetUrl 

            if(sheetUrl != ""){
                fetch(url)
                .then(data => { return data.json()})
                .then(res => { document.getElementById("pp" + (index + 1)).innerHTML = res })
                .catch(error => { console.log(error) })
            }

        })
    }
});
