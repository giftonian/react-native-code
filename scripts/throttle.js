function throttle (fn, delay) {
    let lastCall = 0;

    return function (...args) { 
        const now = Date.now()
        if (now - lastCall < delay) {
            return;
        }

        lastCall = now;
        return fn(...args);
        
    }
}
function sendChatMessage (message) {
    console.log(`Sending message...`, message)
}

const sentChatMessageWithSlowMode = throttle (sendChatMessage, 2000)
sentChatMessageWithSlowMode(`Hi`)
sentChatMessageWithSlowMode(`Hi sir`)
sentChatMessageWithSlowMode(`Hi sir waqas`)
sentChatMessageWithSlowMode(`Hi sir waqas, how`)