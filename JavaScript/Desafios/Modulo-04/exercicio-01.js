function checaIdade(idade) {
  return new Promise(function(reselve, reject) {
    setTimeout(function() {
      return idade >= 18 ? resolve() : reject();
    }, 2000)
  })
}

checaIdade(15)
  .then(function() {
    console.log('Maior de 18 anos');
  })
  .catch(function() {
    console.log('Menor de 18 anos');
  });