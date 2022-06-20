
const answer = document.getElementById('answer');
let convertType = "miles";
let heading = document.querySelector('h1');
let intro = document.querySelector('p');
let form = document.getElementById('convert');


//const answer = document.getElementById('answer');

document.addEventListener('keydown',function(event){
        let key = event.code; //get key
        if(key === 'KeyK'){

            convertType = 'kilometers'; //change value of convertType
            heading.innerHTML = 'Kilometers to Miles Converter'; //change the header
            intro.innerHTML = 'Type in a number of kilometers and click the button to convert the distance to miles'; //change intro
            
        }else if(key == 'KeyM'){
            convertType = 'miles'; //change value of convertType
            heading.innerHTML = 'Miles to Miles Converter'; //change the header
            intro.innerHTML = 'Type in a number of miles and click the button to convert the distance to kilometers'; //change intro
        }

});


form.addEventListener('submit',function(event){
    event.preventDefault();
    let distance = parseFloat(document.getElementById('distance').value); //input is string and we want to convert and take only numbers
    if( distance ){
        //convert M to K 1.609344
        //convert K to M 0.621371192
        if(convertType == 'miles'){
            let converted = (distance * 1.609344).toFixed(3);
            answer.innerHTML = `<h2>${distance} miles converts to ${converted} kilometrs</h2>`;
        }
        else{
            let converted = (distance * 0.621371192).toFixed(3);
            answer.innerHTML = `<h2>${distance} kilometers converts to ${converted} miles</h2>`;
        }
    }
    else{
        //error message
        answer.innerHTML = '<h2>please provide a number</h2>';
    }  
});