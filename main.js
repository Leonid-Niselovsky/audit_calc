const inputTotal = document.querySelector('#input-total');
const sphereInput = document.querySelector('#sphere-input');

let totalPrice;

const listenInputTotal = inputTotal.addEventListener('input', function() {
  // console.log('viruchka');
  // totalPrice = inputTotal.value;
  // console.log(totalPrice);
  totalPrice = Number(inputTotal.value) * Number(sphereInput.value);
  const final = Math.round(totalPrice);
  console.log(final);
})

const stepsCount = document.querySelector('#input_radio_first');
// console.log(+inputTotal.value);
// sphereInput.addEventListener('input', function() {
//   console.log('sphera');
// })
// const listenStep




