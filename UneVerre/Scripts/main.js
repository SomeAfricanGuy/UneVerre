    var sum;
    let imgArr = new Array();


   imgArr[0] = new Image();
   imgArr[0] = document.getElementById('slide-pic1');

   imgArr[1] = new Image();
   imgArr[1] = document.getElementById('slide-pic2');

   imgArr[2] = new Image();
   imgArr[2] = document.getElementById('slide-pic3');

   imgArr[3] = new Image();
   imgArr[3] = document.getElementById('slide-pic4');

   imgArr[4] = new Image();
   imgArr[4] = document.getElementById('slide-pic5');

   imgArr[5] = new Image();
   imgArr[5] = document.getElementById('slide-pic6');

   imgArr[6] = new Image();
   imgArr[6] = document.getElementById('slide-pic7');

   imgArr[7] = new Image();
   imgArr[7] = document.getElementById('slide-pic8');

   imgArr[8] = new Image();
   imgArr[8] = document.getElementById('slide-pic9');

   imgArr[9] = new Image();
   imgArr[9] = document.getElementById('slide-pic10');

   imgArr[10] = new Image();
   imgArr[10] = document.getElementById('slide-pic11');

   imgArr[11] = new Image();
   imgArr[11] = document.getElementById('slide-pic12');

function showEmail(){
      alert("hopek@uneverre.co.za");


}

function showCellPhone(){
  alert("+27798959604");
}

function goNext() {
    for (var i = 0; i < imgArr.length; i++) {
      if (imgArr[i].className === "current" && i < 11) {

        imgArr[i].className = "hide";
        imgArr[i+1].className = "current";
        break;
      }else if(i >= 11){
        alert('End of Slide');
      }

     }
}

function goPrevious() {
        var y = imgArr.length + 1;
    for (var i = 0; i < 12; i++) {
      if (imgArr[i].className === "current") {

        imgArr[i].className = "hide";
        imgArr[i-1].className = "current";
        break;
      }
    }
}

function glow() {
    this.className = "glow";
}
function normal() {
    this.className = "buttons";
}


//Contact Buttons
call.addEventListener("click", showCellPhone);
email.addEventListener("click", showEmail);

//Next and Previous Buttons
previous.addEventListener("click", goPrevious);
next.addEventListener("click", goNext);

//Glowing Style for Next and Previous Buttons
next.addEventListener("mouseenter", glow);
previous.addEventListener("mouseenter", glow);
next.addEventListener("mouseleave", normal);
previous.addEventListener("mouseleave", normal);
