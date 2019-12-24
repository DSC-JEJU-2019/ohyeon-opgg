
chrome.runtime.onMessage.addListener((msg, sender, response) => {
    msg.send === 'removeAd' && removeAd();
    msg.send === 'manipulateTier' && manipulateTier();

    /* 이렇게도 쓰면됨
    if(msg.send === 'removeAd') removeAd();
    if(msg.send === 'manipulateTier') manipulateTier();
    */
})

function manipulateTier() {
    var tierImage = document.querySelector('.SummonerRatingMedium .Image')
    var tierRank = document.querySelector('.TierRankInfo .TierRank')
    tierImage.src = "//opgg-static.akamaized.net/images/medals/iron_1.png?image=q_auto&v=1"
    tierRank.textContent = "Iron 5";
}
function removeAd() {
    var topad = document.querySelector('.vm-placement');
    topad.remove();
}