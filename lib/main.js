var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "http://localhost:*",
  contentScriptWhen: "ready",
  contentScript: 'var a = document.createElement("audio"); a.preload="auto"; a.autoplay="autoplay"; a.src ="https://upload.wikimedia.org/wikipedia/commons/f/f5/Doorbell-classic-dingdong.ogg"; a.controls=""; document.body.appendChild(a);'
});