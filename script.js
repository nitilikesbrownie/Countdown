const targetDate = new Date(
    "August 30, 2026 00:00:00"
).getTime();


const proceedButton =
    document.getElementById("proceedButton");

const buttonWrapper =
    document.querySelector(".button-wrapper");


const tooltip =
    document.getElementById("hoverMessage");


function updateCountdown() {

    const now = new Date().getTime();

    const difference = targetDate - now;


    // Countdown finished

    if (difference <= 0) {

        document.getElementById("days").innerText = "00";

        document.getElementById("hours").innerText = "00";

        document.getElementById("minutes").innerText = "00";

        document.getElementById("seconds").innerText = "00";


        // Enable button

        proceedButton.disabled = false;

        proceedButton.classList.add("active");

        buttonWrapper.classList.add("active");


        // Change button text

        proceedButton.innerHTML = `
            <span class="button-icon">→</span>
            <span>Proceed</span>
        `;

        return;
    }


    // Calculate days

    const days = Math.floor(
        difference /
        (1000 * 60 * 60 * 24)
    );


    // Calculate hours

    const hours = Math.floor(
        (difference /
        (1000 * 60 * 60)) % 24
    );


    // Calculate minutes

    const minutes = Math.floor(
        (difference /
        (1000 * 60)) % 60
    );


    // Calculate seconds

    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    // Display countdown

    document.getElementById("days").innerText =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerText =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerText =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerText =
        String(seconds).padStart(2, "0");
}


// Proceed function

function proceed() {

    if (!proceedButton.disabled) {

        window.location.href =
            "celebration.html";
    }
}


// Update every second

setInterval(updateCountdown, 1000);


// Run immediately

updateCountdown();