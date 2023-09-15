function hallo(){
    alert("hallo sayanggg");
    alert("ayo makan");
}
function waktu(){
   document.getElemenByid('waktu').innerHTML=Date();
}
function zodiak(){
    let tanggal=document.getElementById('tanggal').value;
    let bulan=document.getElementById('bulan').value;
    let zodiak="benar";

    if(bulan == 1){
        if(tanggal > 0 && tanggal < 20) {
            zodiak = "aquarius";
        }
        if(tanggal > 19 && tanggal < 32){
            zodiak ="aries";
        }

    }
    if(bulan == 2){
       if(tanggal > 0 && tanggal < 20){
            zodiak ="gemini";
       }
    }
    document.getElementry('zodiak').innerHTML="zodiak";

 }
 function kali(){
    let a=document.getElementById('bil1').value;
    let b=document.getElementById('bil2').value;
    let hasil=a*b;
    document.getElementById('hasil').innerHTML="hasil";
 }

   let btn= document.getElementById('jam');

   btn.onclick=function(){
    document.getElementById('waktu').innerHTML=Date();
   }
  let isi =document.getElementById('ketik');
  let tampil= document.getElementById('waktu');
  isi.onmouseover=function(){
    tampil.innerHTML=isi.value;
  }

  let hari=document.getElementById('hari');
  hari.addEventListener("clik",coba);

  function coba(){
    alert ("coba coba");
  }

  let burung= document.getElementById('muncul');
    burung.addEventListener("click",)
