import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

console.log('hello ther ');


$(function(){

var zmain = $('#zemamain');  // Main Zema Icon
var accountt = $('#accountt');
var hiddenc = $('#hiddenclass');


// zmain.on("click",function(e){
//     console.log('clicked');
//     window.location = "/";
// }); 
// accountt.on("click",function(e){
//     hiddenc.toggleClass("hidden");
    
// });
var artistpage = $('#toartist');
var artistsign = $('#artistsignup');

artistpage.on("click",function(e){
    console.log('clicked');
    window.location = "/toartist";
});
artistsign.on("click", function(e){
    console.log()
    window.location = "/artistsign";
})


});

