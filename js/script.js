document.addEventListener("DOMContentLoaded", () => {
    const heart = document.getElementById("solid-heart");
    const messageContainer = document.getElementById("message-container");

    let isOpened = false;

    heart.addEventListener("click", () => {
        if (!isOpened) {
            // buka surat
            messageContainer.classList.remove("hidden");
            messageContainer.style.height = "auto";
            messageContainer.style.opacity = "0";
            messageContainer.animate(
                [
                    { height: "0", opacity: 0 },
                    { height: "auto", opacity: 1 }
                ],
                {
                    duration: 1000,
                    easing: "ease-in-out",
                    fill: "forwards"
                }
            );

            // animasi heart
            heart.classList.remove("fa-beat");
            heart.classList.add("fa-bounce");
            heart.style.color = "#ff4d6d";
            isOpened = true;
        } else {
            // tutup surat
            messageContainer.animate(
                [
                    { height: messageContainer.scrollHeight + "px", opacity: 1 },
                    { height: "0px", opacity: 0 }
                ],
                {
                    duration: 700,
                    easing: "ease-in-out",
                    fill: "forwards"
                }
            ).onfinish = () => {
                messageContainer.classList.add("hidden");
            };

            // animasi heart balik
            heart.classList.remove("fa-bounce");
            heart.classList.add("fa-beat");
            heart.style.color = "#ff0000";
            isOpened = false;
        }
    });
});
