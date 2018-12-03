
function  cantidadActiva(gods,players){
    let cant = gods.length;     
    if (players===2){
        cant=4;
    }else {
        if ((players-1) - cant<0) {
        cant = cant + (players - cant) - 1;
        } 
    }
    return cant;
}
function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
}
