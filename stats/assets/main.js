function showMessage(title, message, button, button2) {
    return new Promise((resolve) => {
        const menu = document.getElementById("MessageMenu");
        const overlay = document.getElementById("overlay");
        const titleElement = menu.querySelector(".title");
        const contentElement = menu.querySelector(".content p");
        const closeButton1 = document.getElementById("message-button1");
        const closeButton2 = document.getElementById("message-button2");

        titleElement.textContent = title;
        contentElement.textContent = message;
        closeButton1.textContent = button || "Close";

        if (button2) {
            closeButton2.textContent = button2;
            closeButton2.style.display = "flex";
            closeButton1.classList.add("button-half");
            closeButton2.classList.add("button-half");
        } else {
            closeButton2.style.display = "none";
            closeButton1.classList.remove("button-half");
            closeButton2.classList.remove("button-half");
        }

        menu.style.display = "flex";
        overlay.style.display = "block"; // Mostrar o overlay
        setTimeout(() => {
            overlay.style.opacity = 1; // Tornar o overlay visível
        }, 10); // Pequeno atraso para garantir que a transição funcione

        // Evento de fechar para o primeiro botão
        closeButton1.onclick = () => {
            menu.style.display = "none";
            overlay.style.opacity = 0; // Tornar o overlay invisível
            setTimeout(() => {
                overlay.style.display = "none"; // Esconder o overlay após a transição
            }, 500); // Tempo da transição
            resolve(1);
        };

        // Evento de fechar para o segundo botão
        closeButton2.onclick = () => {
            menu.style.display = "none";
            overlay.style.opacity = 0; // Tornar o overlay invisível
            setTimeout(() => {
                overlay.style.display = "none"; // Esconder o overlay após a transição
            }, 500); // Tempo da transição
            resolve(2);
        };
    });
}

showMessage(
    "24SPY STATS",
    "This website its still in development!",
    "Continue",
    "Return"
).then((button) => {
    if (button === 1) {
        //nothing
    } else {
        window.location.href = "https://tiaguinho2009.github.io/24SPY/";
    }
});

function canvas() {
    const ctx = document.getElementById('canvas').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line', // Tipo de gráfico
        data: {
            labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            datasets: [
                {
                    label: 'Record of ATCs',
                    data: [15, 10, 9, 10, 10, 13, 14], // Valores de teste
                    borderColor: 'rgb(99, 255, 138)',
                    backgroundColor: 'rgba(99, 255, 138, 0.05)',
                    fill: false
                },
                {
                    label: 'Last Week',
                    data: [14, 8, 9, 7, 9, 11, 12], // Valores de teste
                    borderColor: 'rgba(54, 162, 235, 1)',
                    backgroundColor: 'rgba(54, 162, 235, 0.05)',
                    fill: false
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

canvas();

function toggleDropdown(id, button) {
    const dropdown = document.getElementById(id);
    const arrowIcon = button.querySelector('.arrow-icon');

    if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
        arrowIcon.style.transform = 'rotate(0deg)';
        button.classList.remove('active');
    } else {
        const openDropdowns = document.querySelectorAll('.dropdown.show');
        openDropdowns.forEach(openDropdown => {
            openDropdown.classList.remove('show');
            const openButton = document.querySelector(`button[onclick="toggleDropdown('${openDropdown.id}', this)"]`);
            if (openButton) {
                const openArrowIcon = openButton.querySelector('.arrow-icon');
                openArrowIcon.style.transform = 'rotate(0deg)';
                openButton.classList.remove('active');
            }
        });

        // Calcular a posição do botão
        const rect = button.getBoundingClientRect();
        dropdown.style.top = `${rect.bottom + window.scrollY}px`;
        dropdown.style.left = `${rect.left + window.scrollX}px`;

        dropdown.style.width = `${button.offsetWidth}px`;

        dropdown.classList.add('show');
        arrowIcon.style.transform = 'rotate(180deg)';
        button.classList.add('active');
    }
}

// Fechar dropdowns ao clicar fora deles
window.onclick = function(event) {
    if (!event.target.matches('.option-button') && !event.target.matches('.arrow-icon')) {
        const dropdowns = document.getElementsByClassName("dropdown");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                const openButton = document.querySelector(`button[onclick="toggleDropdown('${openDropdown.id}', this)"]`);
                if (openButton) {
                    const openArrowIcon = openButton.querySelector('.arrow-icon');
                    openArrowIcon.style.transform = 'rotate(0deg)';
                    openButton.classList.remove('active');
                }
            }
        }
    }
};