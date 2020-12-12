var inputfile = $("#inputFile");
var imagemain = $("#imge");
var submit = $("#submit");
var day, month, year, weekday;
var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthnames = ["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"];

submit.click(function(){
    inputfile.val('');
    imagemain.css('background-image','url(https://www.ppt-backgrounds.net/thumbs/autumn-picture-downloads.jpg)');
})

function readURL(event){
    var getImagePath = URL.createObjectURL(event.target.files[0]);
    imagemain.css('background-image', 'url(' + getImagePath + ')');
}

$('#submit2').on('click', function(){
    var date = new Date($('#date-input1').val());
    day = date.getDate();
    month = date.getMonth();
    year = date.getFullYear();
    weekday = date.getDay();
    $('#inn').text(day);
    $('#month').text(monthnames[month]);
    $('#year').text(year);
    $('#day').text(weekdays[weekday]);
  });