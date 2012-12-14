var port = chrome.extension.connect({ name : "backgroundTest" });

port.onMessage.addListener(function(m){
    $('#receivedMsg').append(("<p>"+m+"</p>"));
});

$(document).ready(function() {
    $("form").submit(function(e){
        if ($('input:first').val() == ""){
            console.log('plese input test');
            $('#inputIsEmpty').css('display', 'block');
        } else {
            var msg = $('input:first').val();
            console.log('send message \"' + msg + '\"');
            $('#inputIsEmpty').css('display', 'none');
            $('#sendMsg').append(("<p>"+msg+"</p>"));
            port.postMessage(msg);
        }
    });
});