document.addEventListener('readystatechange', event => { 

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    if (event.target.readyState === "complete") {
       
        const appUrl = "https://script.google.com/macros/s/AKfycby8Cc77YPc4NfxcGTUz7Ba6n0gdBA_s7JkvdeJ8LPU_646M-LGcaVia1LozCFcUTqAhrQ/exec"
        const urls = [
        "10NrNj2BWTUxd8fNMSEzAuzHobY6bqYPDBHmSENAR4OA",
        "1VrRAEmWQRBKnv6iB3zlyxqEn6g2tgy88xKc8-7O2zkw",
        "16eAPfz-gNs7ngHwfPObsGzMaDSJYeSuQh7ECyAIGaSc",
        "1KmNKlgxCPHZnKi_W5rl5-rqgAVOcIR0x3Gv2hPj0xg4",
        "1AGKK6CupJhq6-ZbHitScC4iMG4t4reuiR-hNDlgz6Zw",
        "1XqEEhMNmpnHaZ31hQVWMDAu-L3rDZ42yn1_y4DBwbl8",
        "1NcCdhPsaw4IVSd6MBfQkxAjfbX39Q0a8NscVlnsMkdw",
        "1x3wcZeqeNTxhW_Kta1iLQZ7Klu47dhGXlVOGIRhjCE4"
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
