/*! Webdows system32.js 2015 */

//Load all global functions
function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}
$(document).ajaxError(function(event, jqxhr, settings, thrownError) { //Error Handle
    blueScreen('Error detected @ '+settings.url+'<br><br>'+thrownError);
});

/* Start UI Process */
$('title').text('Webdows');
$.getScript('webdows/system/shell.js').done(function() {
    $.getScript('webdows/explorer.js').done(function() {
        $.getScript('webdows/startup.js');
    });
});