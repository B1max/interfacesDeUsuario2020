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

    async function main (url){
        try{
            const download = await downloadFallbackData(url);
            await processedDataInWorker(download);
        }catch (e){
            console.log(e);
        }
    }

let url = "www.google.com.ar";
main(url);