function likePost(button) {
    let likeCount = button.nextElementSibling;
    let currentCount = parseInt(likeCount.textContent);
    likeCount.textContent = currentCount + 1 + " curtidas";
}
