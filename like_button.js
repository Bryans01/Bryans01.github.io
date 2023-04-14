$(document).ready(function() {
    let liked = false;
    let likeCount = 0;

    $(".like-button").click(function() {
        liked = !liked;
        likeCount = liked ? likeCount + 1 : likeCount - 1;
        $(this).text(liked ? "Liked" : "Like");
        $(".like-count").text(likeCount);
    });
});
