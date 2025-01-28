function clickBtn(){
    const inputfield = document.getElementById('inputId');
    const ageText = inputfield.value;
    const errorTag = document.getElementById('error')
    try{
       const age = parseInt(ageText);
       if (isNaN(age)) {
        throw "pleas enter the number"
       }
       else if(age < 18) {
        throw "Baccja kaccha not allow"
       }
       else if(age > 35){
        throw "Murrobi is not allow"
       }
       errorTag.innerHTML = " "
    }
    catch(error){
        console.log('error', error); 
        errorTag.innerHTML = 'Something wrong' + ' ' + error;   
    }
    finally{
        console.log('All done in the line');
        
    }
    console.log(1111);
}