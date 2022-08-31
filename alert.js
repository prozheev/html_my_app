
alert( "Сайт только для совершеннолетних" );
let yearIs18 = confirm("Вам исполнилось 18?");

if (yearIs18 == true) {
  console.log('OK')

} else {
  console.log('NO')

    if(window.stop !== undefined) {
    window.stop();
    } 
    // else if (document.execCommand !== undefined) { // для IE
    // document.execCommand("Stop", false);
    // }

}

// alert( yearIs18 ); // true, если нажата OK

function doc() {
document.querySelector('#input').addEventListener('input', function(event) {
  console.log('DATA', event.target.value)
})
}

// let values = window.localStorage.setItem('form', events)