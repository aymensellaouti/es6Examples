const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 2000);
});
promise
  .then((x) => {
    console.log("resolved with value :", x);
  })
  .catch((error) => console.log("catched error", error));


  faireQqc().then(function(result) {
    return faireAutreChose(result);
  })
  .then(function(newResult) {
    return faireUnTroisiemeTruc(newResult);
  })
  .then(function(finalResult) {
    console.log('Résultat final : ' + finalResult);
  })
  .catch(failureCallback);

  async function test () {
      
    const result  = await faireQqc().then(function(result) {
    return faireAutreChose(result);
  })
  .then(function(newResult) {
    return faireUnTroisiemeTruc(newResult);
  })
  .then(function(finalResult) {
    console.log('Résultat final : ' + finalResult);
  })
  }

  