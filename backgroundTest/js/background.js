chrome.extension.onConnect.addListener(function(port) {
    console.assert(port.name == "echoTest");
    port.onMessage.addListener(function(m){
        // receive
        console.log(m);
        var reverse_m = m.split('').reverse().join('');
        port.postMessage(reverse_m);
    });
});