let age = prompt("Please enter your age below:");

if (age >= 14 && age <= 90) {
    alert('Thanks!');
} else if (age < 14) {
    alert('Sorry kid, you are too young :-(');
}else if (age > 90) {
    alert('Sorry, it seems you are too old :-(');
} else {
    alert('Are you sure you entered the digits? Reload the page and try again, my friend!')
}