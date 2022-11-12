const bilprima = (angka) => 
{
    let dibagi = 0;
    for(let i=1; i <= angka; i++){
      if(angka%i == 0){
        dibagi++
      }
    }
    if(dibagi == 2){
      console.log("prima")
    }else{
      console.log("bukan prima")
    }
  }
  //Contoh Testcase program
  bilprima(2);
  bilprima(8);
  bilprima(113);
  bilprima(123);
  bilprima(100);
  bilprima(10);