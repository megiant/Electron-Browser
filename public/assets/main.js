var $ = require("jquery");

window.onload = () => {
    const { remote } = require('electron');
    let window = remote.getCurrentWindow();

    $(".window-close").click(() => {
        window.close();
    });
};