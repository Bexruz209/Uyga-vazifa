classname = prompt("Son kiriting:")

if(classname > 0 && classname % 2 == 0){
    console.log("Musbat, juft");
}else if (classname > 0 && classname % 2 == 1){
    console.log("Musbat, to'q");
}else if (classname < 0 && classname % 2 == 0){
    console.log("Manfiy, juft");
}else if (classname < 0 && classname % 2 == -1){
    console.log("Manfiy, to'q");
}else {
    console.log("Nol");
}