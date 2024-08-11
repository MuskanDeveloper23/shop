const  box = document.querySelectorAll(".box");
const body = document.querySelector("body");

box.forEach(function (box) {
    console.log(box);
    box.addEventListener('click', function (e){
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'gray'){
        body.style.background = e.target.id;
    }

    if(e.target.id === 'red'){
        body.style.background = e.target.id;
    }


    if(e.target.id === 'pink'){
        body.style.background = e.target.id;
    }



    if(e.target.id === 'yellow'){
        body.style.background = e.target.id;
    }


    
    if(e.target.id === 'black'){
        body.style.background = e.target.id;
    }
    })
}); 


/******/


const form = document.querySelector('form');


form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results')

        if(height === ' ' || height < 0 || isNaN(height)){
         results.innerHTML = `Please give a valid height ${height}`;
        }
        if(weight === ' ' || weight < 0 || isNaN(weight)){
            results.innerHTML = `Please give a valid height ${weight}`;
           }
       
});

/*const height = parseInt(document.querySelector('#height').value);
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const width = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');


    if(height === '' || height < 0 || isNAN(height)){
        results.innerHTML = "Please give a valid number";
    }
}); */