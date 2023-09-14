        const targetDate = new Date('2023-10-30T23:59:59').getTime();

        function updateCountdown() {
            const currentDate = new Date().getTime();
            const timeLeft = targetDate - currentDate;

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            const countdownElement = document.getElementById('countdown');
            countdownElement.innerHTML = `${days} day ${hours} hour ${minutes} minute ${seconds} second`;

            if (timeLeft <= 0) {
                countdownElement.innerHTML = "Waktu habis!";
            }
        }

        setInterval(updateCountdown, 1000);

        updateCountdown();
