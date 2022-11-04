
        for(let i = 0;i <= 10;i++){
            document.write(i)
        }
        
        document.write('<hr>')

        for(let i = 10; i >= 1; i--){
            document.write(i)
        }

        document.write('<hr>');


        //for ed array

        let animali = ['gatto','cane','anatra','orso'];

        for(let i = 0; i < animali.lenght; i++){
            document.write( animali[i] + ' - ')
        }

        let numeri = [0,1,2,3,4,5,6,7,8,9]
        let somma = 0;
        for(let i = 0; i < numeri.length; i++){
            somma += numeri[i];
            document.write('somma attuale:' + somma + '<br>')
        }
        document.write('somma; '+ somma)

       //console.log( numeri.reduce((c,p)=> c + p)) somma con metodo degli array

