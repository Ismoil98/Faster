// Speeds categories
var speedOfMan = 3.6;
var speedOfBike = 20.1;
var speedOfCar = 70;
var speedOfPlane = 800;

// Read in Html
var elForm = document.querySelector('.form');
var elInput = document.querySelector('.input');
var elResultError = document.querySelector('.resultError');
var elMan = document.querySelector('.resultMan');
var elBike = document.querySelector('.resultBike');
var elCar = document.querySelector('.resultCar');
var elPlane = document.querySelector('.resultPlane');

function transportTime(time) {
  var hour = Math.floor(time);
  var minute = Math.floor((time - hour) * 60);
  var secunde = Math.floor(((time - hour)*60 - minute) * 60);
  var result = `${hour}-soat ` + `${minute}-minut ` + `${secunde}-sekund`;
  return result;
}

// Stopper
elForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  var elInputValue = Number(elInput.value.trim());


// Early return
  elInput.value = null;
  if( elInputValue < 0 || isNaN(elInputValue)) {
      elResultError.style.color = 'red';
      elResultError.textContent = 'Ma\'lumot xato !!!';
      return;
  }else {
      elResultError.style.color = 'transparent';
  }

  var elManResult = elInputValue / speedOfMan,
      elBikeResult = elInputValue / speedOfBike,
      elCarResult = elInputValue / speedOfCar,
      elPlaneResult = elInputValue / speedOfPlane;

      console.log(elResultError);

  // Results
  elMan.textContent = transportTime(elManResult);
  elBike.textContent = transportTime(elBikeResult);
  elCar.textContent = transportTime(elCarResult);
  elPlane.textContent = transportTime(elPlaneResult);
})