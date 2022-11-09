document.querySelector('#push').onclick = //onclick e la funzione che fa il click su un elemento e restutisce un'azione
function() {

    if(document.querySelector('#newtask input').value.length == 0){//queryselecotr restituisce il primo o l'unico elemento selzionato
        alert('Ripassa bene JavaScript');
    }
    else{
        document.querySelector('#tasks').innerHTML += `<div class="task"> <span id="taskname">
            ${document.querySelector('#newtask input').value}</span><button class="delete">X</button></div>`;

            var current_tasks = document.querySelectorAll('.delete');//quertselectorall restituisce una collezione di elementi

            for(var i = 0; i < current_tasks.length; i++){
                current_tasks[i].onclick = function(){
                    this.parentNode.remove();//restituisce il nodo genitore all'elemento corrente
                }
                
            }                   
            
            var tasks = document.querySelectorAll('#taskname');

            for(var i = 0; i < tasks.length; i++){
                tasks[i].onclick = function(){
                    this.classList.toggle('completed');//restituisce il nome della classe dell'elemento
                }
                
            }  
            
            
            document.querySelector('#newtask input').value = "";
    }
}