document.getElementById('convert').addEventListener('submit',function(event){
    event.preventDefault();
    let distance = document.getElementById('distance').value;
    distance = parseFloat(distance); //input is string and we want to convert and take only numbers
    const answer = document.getElementById('answer');
    if( distance ){
        //convert
        //display
        const conversion = distance * 1.609344;
        const roundedConversion = (Math.round(conversion * 1000))/1000; //conversion.toFixed(3); 
        
        answer.innerHTML = `<h2>${distance} miles converts to ${roundedConversion} kilometrs</h2>`;
    }
    else{
        // error message
        answer.innerHTML = '<h2>please provide a number</h2>';
    }
});