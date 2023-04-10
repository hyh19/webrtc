'use strict'

const audioSource = document.querySelector("select#audioSource");
const audioOutput = document.querySelector("select#audioOutput");
const videoSource = document.querySelector("select#videoSource");

if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
    console.log('enumerateDevices is not supported!');
} else {
    navigator.mediaDevices.enumerateDevices()
        .then(getDevices)
        .catch(handleError);
}

function getDevices(deviceInfos) {
    deviceInfos.forEach(function (deviceInfo) {
        console.log("kind = " + deviceInfo.kind + ", label = " + deviceInfo.label + ", deviceId = " + deviceInfo.deviceId + ", groupId = " + deviceInfo.groupId);
        const option = document.createElement('option');
        option.text = deviceInfo.label;
        option.value = deviceInfo.deviceId;
        if (deviceInfo.kind === 'audioinput') {
            audioSource.appendChild(option);
        } else if (deviceInfo.kind === 'audiooutput') {
            audioOutput.appendChild(option);
        } else if (deviceInfo.kind === 'videoinput') {
            videoSource.appendChild(option);
        }
    });
}

function handleError(error) {
    console.log(error.name + " : " + error.message);
}
