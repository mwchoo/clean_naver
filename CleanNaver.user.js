// ==UserScript==
// @name         CleanNaver
// @namespace    https://github.com/mwchoo/clean_naver
// @version      0.1
// @description  user script for clean naver (prevent ad, fix css)
// @author       Minwoo Choo
// @match        https://www.naver.com/
// @grant        none
// ==/UserScript==

(function() {
    // for naver new ui (2020-04-17)
    const styles = `
    .column_right.is_bfixed .column_fix_wrap {
        position: fixed !important;
        top: 70px !important;
        bottom: auto !important;
        margin-top: 20px !important;
    }
`;

    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    document.getElementById('veta_top').remove();
    document.getElementById('veta_branding').remove();
    document.getElementsByClassName('sc_shopcast')[0].remove();
    document.getElementById('NM_TOP_BANNER').remove();
    document.getElementById('NM_whale_download_file').remove();
})();
