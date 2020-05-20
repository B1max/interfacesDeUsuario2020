    function downloadFallbackData(url){
        let resultado = "downloadFallbackData: downloading fallBackData from " +url;
        // console.log(resultado)
        return resultado;
    }

    function processedDataInWorker(v){
        let resultado = "processedDataInWorker:  processing "+v;
        console.log(resultado);
        return resultado;
    }
    
    (async()=>{
        let url = "www.google.com.ar";
        const download = downloadFallbackData(url);
        return worker = processedDataInWorker(download);
    })()
