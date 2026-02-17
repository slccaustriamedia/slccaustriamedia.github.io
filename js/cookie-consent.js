(function () {
    const STORAGE_KEY = "slcc_cookie_consent"; // "accepted" | "declined"

    function getChoice() {
        return localStorage.getItem(STORAGE_KEY);
    }

    function setChoice(value) {
        localStorage.setItem(STORAGE_KEY, value);
    }

    function hideBanner(banner) {
        banner.setAttribute("hidden", "hidden");
    }

    function showBanner(banner) {
        banner.removeAttribute("hidden");
    }

    document.addEventListener("DOMContentLoaded", () => {
        const banner = document.getElementById("cookie-banner");
        const acceptBtn = document.getElementById("cookie-accept");
        const declineBtn = document.getElementById("cookie-decline");

        if (!banner || !acceptBtn || !declineBtn) return;

        const choice = getChoice();
        if (choice === "accepted" || choice === "declined") {
            hideBanner(banner);
            return;
        }

        showBanner(banner);

        acceptBtn.addEventListener("click", () => {
            setChoice("accepted");
            hideBanner(banner);
            // If you later add analytics scripts, only load/enable them after acceptance here.
        });

        declineBtn.addEventListener("click", () => {
            setChoice("declined");
            hideBanner(banner);
            // Keep non-essential cookies/scripts disabled.
        });
    });
})();