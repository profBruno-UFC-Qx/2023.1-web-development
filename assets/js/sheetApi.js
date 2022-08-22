document.addEventListener('readystatechange', event => { 

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    if (event.target.readyState === "complete") {
       
        const appUrl = "https://script.google.com/macros/s/AKfycby8Cc77YPc4NfxcGTUz7Ba6n0gdBA_s7JkvdeJ8LPU_646M-LGcaVia1LozCFcUTqAhrQ/exec"
        const urls = [
        "1k4qKFapetGcd2atOJ8LPW8sSyidMVw9sOEAkCWMKyyM",
        "1_ntPIfCFqubZq77J9IcY5M4a0EUW2fsbO2B7WJJlp3k",
        "1pjdrc5yjoJOI7cI8h4-9232cnG0h0axZW1xsIMrKW9s",
        "1uUYS3Rff2360dZYoADXTXsY4SKrKhDlJD1GD-gEcxAI",
        "1VCasjXUmCVIy3WteBc-wX4h1NAz_PHkAYnPP8MpE4hM",
        "1P6O2RxpEUzSpL6L9r0QqbKVYaF_5b0ujOQYXqRuzXNc"
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
