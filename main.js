const electron = require("electron");
const config = require('electron-json-config');
const path = require("path");
const url = require("url");

electron.app.on("ready", () => {
    window = new electron.BrowserWindow({
        titleBarStyle: "hidden-inset",
        frame: false,
        show: false,
        minWidth: 700,
        minHeight: 450
    }).loadURL(url.format({
        pathname: path.join(__dirname, "public/app.html"),
        protocol: "file:",
        slashes: true
    }));

    window.once("ready-to-show", () => {
        if(config.has("lastBounds")) {
            window.setBounds(JSON.parse(config.get("lastBounds")));
        }
        window.show();
    });
    window.once("close", () => {
        config.set("lastBounds", JSON.stringify(window.getBounds()));
        process.exit(0);
    });
});