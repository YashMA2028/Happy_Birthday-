let noClickCount = 0; // Counter for "No" button clicks

function showMessage(response) {
    if (response === "No") {
        const noButton = document.getElementById("no-button");
        const yesButton = document.getElementById("yesButton");
        const imageElement = document.getElementsByClassName("image")[0];

        // Get the screen width and height
        const maxWidth = window.innerWidth - noButton.offsetWidth;
        const maxHeight = window.innerHeight - noButton.offsetHeight;

        // List of images to switch on "No" click
        const images = [
            "images/gun.gif",
            "images/2.jpg",
            "images/3.jpg",
            "images/catflower.jpg",
            
        ];

        // Change image based on click count (loop through the images)
        imageElement.src = images[noClickCount % images.length];

        // Move "No" button anywhere on the screen
        noButton.style.position = "absolute";
        noButton.style.left = Math.random() * maxWidth + "px";
        noButton.style.top = Math.random() * maxHeight + "px";

        // Increase "Yes" button size by 100px each time
        let newSize = 100 + noClickCount * 100; // Start from 100px and increase by 100px per click
        yesButton.style.width = newSize + "px";
        yesButton.style.height = newSize + "px";

        noClickCount++; // Increase click counter
    }

    if (response === "Yes") {
        document.getElementById("name").remove();
        document.getElementById("no-button").remove();
        document.getElementById("yesButton").remove();

        const yesMessage = document.getElementById("question");
        yesMessage.textContent = "LESGOOO see you on the 14th babygirl😘😘";
        document.getElementsByClassName("image")[0].src = "images/dance.gif";

        document.getElementById("yes-message").style.display = "block";
    }
}
