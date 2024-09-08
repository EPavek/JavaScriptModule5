let myDog = {myName: 'Spike', mySound: 'I am being protective of my owner, Tommy Pickles', myBreed: 'Siberian Tiger Hound', myShow: 'Rugrats'}

document.write(`My name is ${myDog.myName}, and I am a loyal dog in the cartoon show, ${myDog.myShow}.
  I am a ${myDog.myBreed}, and when I bark, ${myDog.mySound}. I love my family.`)

document.write('</br> </br>')
function myDogConst (myName, mySound, myBreed, myShow, canTalk) {
  this.myName = myName;
  this.mySound = mySound;
  this.myBreed = myBreed;
  this.myShow = myShow;
  this.canTalk = false;
  return(this);
}

let spike = new myDogConst("Spike", "I am being protective of my owner, Tommy Pickles", "Siberian Tiger Hound", "Rugrats");

document.write('My name is ' + spike.myName + ', and I am a loyal dog in the cartoon show, ' + spike.myShow + '. I am a ' + spike.myBreed + ', and when I bark, ' + spike.mySound + '. I love my family.')
