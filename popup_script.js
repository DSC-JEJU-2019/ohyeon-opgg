var adButton = document.getElementById('ad')
var tierButton = document.getElementById('tier')

function removeAd() {
    // 현재 크롬 창중에 활성화된 탭에 다음 함수 실행.
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, tabs => {
        chrome.tabs.sendMessage(
            tabs[0].id,
            { send: "removeAd" }
        )
    })
}

function manipulateTier() {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, tabs => {
        chrome.tabs.sendMessage(
            tabs[0].id,
            { send: "manipulateTier" }
        )
    })
}

adButton.addEventListener('click', removeAd);
tierButton.addEventListener('click', manipulateTier);