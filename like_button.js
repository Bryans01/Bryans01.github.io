$(document).ready(function () {
    const likeButton = $(".like-button");
    const likeCount = $(".like-count");
    const pageId = window.location.pathname;

    function getLikes() {
        const likes = JSON.parse(localStorage.getItem("likes")) || {};
        return likes[pageId] || 0;
    }

    function setLikes(count) {
        const likes = JSON.parse(localStorage.getItem("likes")) || {};
        likes[pageId] = count;
        localStorage.setItem("likes", JSON.stringify(likes));
    }

    function updateLikeDisplay() {
        likeCount.text(getLikes());
    }

    likeButton.on("click", function () {
        const newCount = getLikes() + 1;
        setLikes(newCount);
        updateLikeDisplay();
    });

    updateLikeDisplay();
});

