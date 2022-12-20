

// let kilometri = parseInt(prompt('quanti kilometri vuoi percorrere?'));
// console.log('km: ', kilometri)

// const età = parseInt(prompt('quanti anni hai?'));
// console.log('età: ', età);

// let prezzokm = (kilometri * 0.21).toFixed(2);
// console.log('prezzo ticket: ', prezzokm + '€');

// if(età < 18){
//     alert('avrai uno sconto del 20%');
    
//     let calcUno = ((prezzokm / 100) * 20).toFixed(2);
//     console.log('sconto 20%: ', calcUno + '€');

//     let totaleUno = (prezzokm - calcUno).toFixed(2);
//     console.log('prezzo finale: ', totaleUno + '€')
    
//     document.getElementById('prezzo').innerHTML = totaleUno + '€';

// }
// else if(età >= 65){
//     alert ('avrai uno sconto del 40%');
    
//     let calcDue = ((prezzokm / 100) * 40).toFixed(2);
//     console.log('sconto 40%: ', calcDue + '€'); 

//     let totaleDue = (prezzokm - calcDue).toFixed(2);
//     console.log('prezzo finale: ', totaleDue + '€')

//     document.getElementById('prezzo').innerHTML = totaleDue + '€'; 
// }
// else{
//     document.getElementById('prezzo').innerHTML = prezzokm + '€';
// }

const generaBtn = document.getElementById('genera');

generaBtn.addEventListener('click',

    function(){

        document.getElementById('box-bottom').style.display = 'block';

        const nomeInput = document.getElementById('nome');
        console.log('nome cliente: ', nomeInput.value,)
        document.getElementById('nome-cliente').innerHTML = nomeInput.value;

        const kmInput = document.getElementById('km');
        console.log('km da percorrere: ', kmInput.value)
        
        const etaInput = document.getElementById('età');
        console.log('età del cliente: ', etaInput.value)
        
        const prezzo = (kmInput.value * 0.21).toFixed(2);
        console.log('€', prezzo)

        if(etaInput.value == 'minnorenne'){
            alert('avrai uno sconto del 20%');

            document.getElementById('ticket').innerHTML = 'Biglietto 1';

            const postoRandom = Math.random();
            document.getElementById('posto').innerHTML = Math.floor(postoRandom * 100);

            const codiceRandom = Math.random();
            document.getElementById('codice').innerHTML = Math.floor(codiceRandom * 10000);

            let sconto = ((prezzo / 100) * 20).toFixed(2);
            console.log('sconto 20%: ', sconto);

            let totale = (prezzo - sconto).toFixed(2);
            console.log('prezzo finale: ', totale);

            document.getElementById('prezzo').innerHTML = totale + '€';

            
        }
        else if(etaInput.value == 'over 65'){
            alert('avrai uno sconto del 40%')

            document.getElementById('ticket').innerHTML = 'Biglietto 2';

            const postoRandom = Math.random();
            document.getElementById('posto').innerHTML = Math.floor(postoRandom * 100);

            const codiceRandom = Math.random();
            document.getElementById('codice').innerHTML = Math.floor(codiceRandom * 10000);

            sconto = ((prezzo / 100) * 40).toFixed(2);
            console.log('sconto 20%: ', sconto);

            totale = (prezzo - sconto).toFixed(2);
            console.log('prezzo finale: ', totale);

            document.getElementById('prezzo').innerHTML = totale + '€';

        }
        else{
            document.getElementById('ticket').innerHTML = 'Biglietto Standard';

            const postoRandom = Math.random();
            document.getElementById('posto').innerHTML = Math.floor(postoRandom * 100);

            const codiceRandom = Math.random();
            document.getElementById('codice').innerHTML = Math.floor(codiceRandom * 10000);

            document.getElementById('prezzo').innerHTML = prezzo + '€';

        }
    
    }
 )



