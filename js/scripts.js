
const generaBtn = document.getElementById('genera');
const annullaBtn = document.getElementById('annulla');

generaBtn.addEventListener('click',

    function(){

        document.getElementById('box-bottom').style.display = 'block';

        const nomeInput = document.getElementById('nome');
        console.log('nome cliente: ', nomeInput.value)
        document.getElementById('nome-cliente').innerHTML = nomeInput.value;
        document.getElementById('nome-cliente').style.textTransform = 'capitalize';

        const kmInput = document.getElementById('km');
        console.log('km da percorrere: ', kmInput.value)
        
        const etaInput = document.getElementById('età');
        console.log('età del cliente: ', etaInput.value)
        
        const prezzo = (kmInput.value * 0.21).toFixed(2);
        console.log('€', prezzo)

        if(etaInput.value == 'minorenne'){
            alert('avrai uno sconto del 20%');

            document.getElementById('ticket').innerHTML = 'Biglietto Baby';

            const postoRandom = Math.random();
            document.getElementById('posto').innerHTML = Math.floor(postoRandom * 10) + 1;

            const codiceRandom = Math.random();
            document.getElementById('codice').innerHTML = Math.floor(codiceRandom * 9000) + 90000;

            let sconto = ((prezzo / 100) * 20).toFixed(2);
            console.log('sconto 20%: €', sconto);

            let totale = (prezzo - sconto).toFixed(2);
            console.log('prezzo finale: €', totale);

            document.getElementById('prezzo').innerHTML = totale + '€';

            
        }
        else if(etaInput.value == 'over 65'){
            alert('avrai uno sconto del 40%')

            document.getElementById('ticket').innerHTML = 'Biglietto Silver';

            const postoRandom = Math.random();
            document.getElementById('posto').innerHTML = Math.floor(postoRandom * 10) + 1;

            const codiceRandom = Math.random();
            document.getElementById('codice').innerHTML = Math.floor(codiceRandom * 9000) + 90000;

            sconto = ((prezzo / 100) * 40).toFixed(2);
            console.log('sconto 20%: € ', sconto);

            totale = (prezzo - sconto).toFixed(2);
            console.log('prezzo finale: €', totale);

            document.getElementById('prezzo').innerHTML = totale + '€';

        }
        else{
            document.getElementById('ticket').innerHTML = 'Biglietto Standard';

            const postoRandom = Math.random();
            document.getElementById('posto').innerHTML = Math.floor(postoRandom * 10) + 1;

            const codiceRandom = Math.random();
            document.getElementById('codice').innerHTML = Math.floor(codiceRandom * 9000) + 90000;

            document.getElementById('prezzo').innerHTML = prezzo + '€';

        }
    
    }
 )
 annullaBtn.addEventListener('click',

    function(){
        document.getElementById('box-bottom').style.display = 'none';
    }
 )



