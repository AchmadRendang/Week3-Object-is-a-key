//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
    return kata.split("").map(eji => {
        if (String.fromCharCode(eji.charCodeAt(0)) == "z" || String.fromCharCode(eji.charCodeAt(0)) == "Z"){
            return String.fromCharCode(eji.charCodeAt(0) - 25);
        }
        else{
            return String.fromCharCode(eji.charCodeAt(0) + 1);
        }
    }).join("");
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu