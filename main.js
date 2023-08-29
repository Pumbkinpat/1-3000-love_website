var count = 0; 
function myLovecount() {
    var id = setInterval(myFunction,0);
    function myFunction() {    
            count++;
            document.write( "  "+ "i love you" + " " + count + "  " )
        if (count == 3000) clearInterval(id); 
    }
}


