const age = parseInt(prompt("How old are you?"));
if(isNaN(age) || age <= 0) {
    console.log("Please write a number");
}
else if(age >= 18){
    console.log("You can drink beer");
}
else if(age > 50) {
    console.log("You need exercise");
}
