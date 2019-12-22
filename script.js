

window.onload = function () {
    var tierImage = document.querySelector('.SummonerRatingMedium .Image')
    var tierRank = document.querySelector('.TierRankInfo .TierRank')
    var topad = document.querySelector('.vm-placement');
    tierImage.src = "//opgg-static.akamaized.net/images/medals/iron_1.png?image=q_auto&v=1"
    tierRank.textContent = "Iron 5";
    topad.remove();
}