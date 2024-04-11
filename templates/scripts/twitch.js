document.addEventListener("DOMContentLoaded", function() {
    var embed = new Twitch.Embed("twitch-embed", {
        width: 1280,
        height: 720,
        channel: "polyvalence",
        autoplay: false,
    });

    embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
        var player = embed.getPlayer();
        player.play();
    });
});
