const Angka = [1,2,3,4,5];
let arr = Angka.reverse();
let max = 0;
let min = 0;

    for (let i in arr) {
        let x =0; 
    for (let j in Angka) { 
        if (Angka[j] !== arr[i]) {
         x += Angka[j];
    }
}
console.log("hasil penjumlahan",x);
    
    if (max < x) {
        max = x;
    }
    if (min == 0 || min > x) {
        min = x;
    }
}
    console.log("Hasil Maksimal",max);
    console.log("Hasil Minimal",min);

    
