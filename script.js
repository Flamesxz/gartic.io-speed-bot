// ==UserScript==
// @name        GARTİC.İO SPEED BOT
// @description Odalara hızlı bot göndermenizi sağlar
// @version     1.0
// @author      Qwyua
// @match       *://*/*
// @grant       GM_addStyle
// ==/UserScript==
let adet = "2" // 1-10 arası değer verebilirsiniz
let string = location.href;let convertedString= string.toLowerCase();if(convertedString.indexOf('gartic.io') != -1){var bot  = document.createElement('button');bot.innerHTML='<button id="bot" class="btBlueBig" style="background-color:orange;border:1px solid orange;width:55px"></span><i class="gg-user-add"></i><strong></strong></button>';bot.setAttribute('style', 'position:absolute;z-index: 2;');document.body.appendChild(bot);document.getElementById("bot").addEventListener("click",tıklandı, false);function tıklandı(Event){const  croxy = "https://www.datatech.icu/";const loc  =new URL(window.location.href);const adres  =croxy+"#"+loc.pathname.replace("/", "");if(adet == 1){window.open(adres, "_blank");}if(adet == 2){window.open(adres, "_blank");window.open(adres, "_blank")}if(adet == 3){window.open(adres, "_blank");window.open(adres, "_blank");window.open(adres, "_blank")}if(adet == 4){window.open(adres, "_blank");window.open(adres, "_blank");window.open(adres, "_blank");window.open(adres, "_blank")}if(adet == 5){window.open(adres, "_blank");window.open(adres, "_blank");window.open(adres, "_blank");window.open(adres, "_blank");window.open(adres, "_blank")}if(adet == 6){window.open(adres, "_blank");window.open(adres, "_blank");window.open(adres, "_blank");window.open(adres, "_blank");window.open(adres, "_blank");window.open(adres, "_blank")}if(adet == 7){window.open(adres, "_blank");window.open(adres, "_blank");window.open(adres, "_blank");window.open(adres, "_blank");window.open(adres, "_blank");window.open(adres, "_blank");window.open(adres, "_blank")}if(adet == 8){window.open(adres, "_blank");window.open(adres, "_blank");window.open(adres, "_blank");window.open(adres, "_blank");window.open(adres, "_blank");window.open(adres, "_blank");window.open(adres, "_blank");window.open(adres, "_blank")}if(adet == 9){window.open(adres, "_blank");window.open(adres, "_blank");window.open(adres, "_blank");window.open(adres, "_blank");window.open(adres, "_blank");window.open(adres, "_blank");window.open(adres, "_blank");window.open(adres, "_blank");window.open(adres, "_blank")}if(adet == 10){window.open(adres, "_blank");window.open(adres, "_blank");window.open(adres, "_blank");window.open(adres, "_blank");window.open(adres, "_blank");window.open(adres, "_blank");window.open(adres, "_blank");window.open(adres, "_blank");window.open(adres, "_blank");window.open(adres, "_blank")}}GM_addStyle(`.gg-user-add {display: block;transform: scale(var(--ggs,1));box-sizing: border-box;width: 20px;height: 18px;left: 22px;background:linear-gradient(to left,currentColor 8px,transparent 0)no-repeat 14px 6px/6px 2px,linear-gradient(to left,currentColor 8px,transparent 0)no-repeat 16px 4px/2px 6px}.gg-user-add::after,.gg-user-add::before {content: "";display: block;box-sizing: border-box;position: absolute;border: 2px solid #002043;}.gg-user-add::before {width: 8px;height: 8px;border-radius: 30px;top: 0;left: 22px}.gg-user-add::after {width: 12px;height: 9px;border-bottom: 0;border-top-left-radius: 3px;border-top-right-radius: 3px;left: 20px;top: 9px}.btBlueBig:active{box-shadow: 1 200px #666;transform: translateY(2px);border: 1px solistring.toLowerCase();if(convertedString.indexOf('datatech') != -1){d #002043;}`);}if(convertedString.indexOf('datatech') != -1){let i  = window.location.hash;var gartic = "https://gartic.io/";let fe  = document.querySelector('input[id="url"]');setInterval(function(){fe.value = gartic+i.replace("#", "")});if(fe.value == null){}else{setInterval(autoClick,);function autoClick(){let go = document.querySelector('i[aria-hidden="true"]');go.dispatchEvent(new MouseEvent("click",{bubbles:true,button:0}));if(document.querySelector('i[aria-hidden="true"]').length>0){document.querySelector('i[aria-hidden="true"]')[0].click()}};setInterval(atoClick,);function atoClick(){let go = document.querySelector('button[type="submit"]');go.dispatchEvent(new MouseEvent("click",{bubbles:true,button:0}));if(document.querySelector('button[type="submit"]').length>0){document.querySelector('button[type="submit"]')[0].click()}};setInterval(auto,);function auto(){let go = document.querySelector('i[class="fa fa-arrow-right"]');go.dispatchEvent(new MouseEvent("click",{bubbles:true,button:0}));if(document.querySelector('i[class="fa fa-arrow-right"]').length>0){document.querySelector('i[class="fa fa-arrow-right"]')[0].click()}};}}
