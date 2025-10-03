// Image slider

let slider = document.querySelectorAll(".slider img");
let imgDislay = 0;

imgSetup()

function imgSetup(){
    if(slider.length > 0){
     slider[imgDislay].classList.add("slide");
}};

function displayImg(display){
    if(display >= slider.length){
imgDislay = 0;
    }
    else if(display < 0){
        imgDislay = slider.length - 1;
    }
  slider.forEach(sildes => {
    sildes.classList.remove("slide")
  });
  slider[imgDislay].classList.add("slide");
}

function prev(){
imgDislay--;
displayImg(imgDislay);

}

function next(){
imgDislay++
displayImg(imgDislay);
}