function Starter(){
    var a,
        b,
        c;

    var service = {
        doStuff: doStuff
    };
    return service;

    function doStuff(){
        try{
            console.log("Doing stuff");
        }catch(e){
            console.error("Error doing stuff", e);
        }
        return true;
    }
}