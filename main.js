var count = 0; 
function myLovecount() {
    var id = setInterval(myFunction,0);
    function myFunction() {    
            count++;
            document.write( "  "+ "i    love   you   " + " " + count )
            document.write("</br>")
        if (count == 3000) clearInterval(id), document.write("Chúc mọi người ngủ ngon"); 
    }
}
