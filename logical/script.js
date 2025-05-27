const temp = -1;

if(temp > 80){
    console.log('hot outside');
}else if(temp <= 70 && temp >= 50){
    console.log('it is nice outside');
}else if(temp <= 50 && temp >= 32){
    console.log('it is cold outside');
}else if(temp <= 32 && temp >= 0){
    console.log('it is very cold outside');
}else{
    console.log('it is freezing outside');
}