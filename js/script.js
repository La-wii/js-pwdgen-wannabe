var nome = prompt('Nome');
// console.log(nome);

var cognome = prompt('Cognome');
// console.log(cognome);

var colore = prompt('Colore preferito');
// console.log(colore);

var password = nome + cognome + colore + '21';
password = password.toLowerCase();
// console.log(password);

// test 1
// document.writeln(password)

document.getElementById('password').innerHTML = password;  



