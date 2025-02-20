let myChart;

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

function createChart(type, labels, datasets) {
    const ctx = document.getElementById('canvas').getContext('2d');
    return new Chart(ctx, {
        type: type,
        data: {
            labels: labels,
            datasets: datasets
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

function updateChart(type, labels, datasets) {
    if (myChart) {
        myChart.destroy();
    }
    myChart = createChart(type, labels, datasets);
}

function generateRandomData(numPoints, min, max) {
    const data = [];
    for (let i = 0; i < numPoints; i++) {
        data.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return data;
}

// Estrutura de dados para armazenar as opções dos dropdowns
const dropdownOptions = {
    time: [
        { label: 'Last 24 hours', value: 'Last 24 hours' },
        { label: 'Last 7 days', value: 'Last 7 days' },
        { label: 'Last 30 days', value: 'Last 30 days' }
    ],
    data: [
        { label: 'ATCs', value: 'ATCs' },
        { label: 'Flights', value: 'Flights' },
        { label: 'Delays', value: 'Delays' }
    ],
    view: [
        { label: 'Lines', value: 'line' },
        { label: 'Bars', value: 'bar' },
        { label: 'Pie', value: 'pie' },
        { label: 'Doughnut', value: 'doughnut' },
        { label: 'Radar', value: 'radar' },
        { label: 'Polar Area', value: 'polarArea' },
        { label: 'Bubble', value: 'bubble' },
        { label: 'Scatter', value: 'scatter' }
    ]
};

// Funções para lidar com as mudanças de tempo, dados e visualização
function changeTime(option) {
    let labels;
    switch (option) {
        case 'Last 24 hours':
            labels = Array.from({ length: 24 }, (_, i) => `${i}:00`);
            break;
        case 'Last 7 days':
            labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            break;
        case 'Last 30 days':
            labels = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);
            break;
        default:
            labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    }
    const datasets = myChart.data.datasets; // Manter os datasets atuais
    updateChart(myChart.config.type, labels, datasets);
}

function changeData(option) {
    const labels = myChart.data.labels; // Manter as labels atuais
    let datasets;
    switch (option) {
        case 'ATCs':
            datasets = [
                {
                    label: 'Record of ATCs',
                    data: generateRandomData(labels.length, 5, 20),
                    borderColor: 'rgb(99, 255, 138)',
                    backgroundColor: 'rgba(99, 255, 138, 0.05)',
                    fill: true
                }
            ];
            break;
        case 'Flights':
            datasets = [
                {
                    label: 'Number of Flights',
                    data: generateRandomData(labels.length, 50, 200),
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    fill: true
                }
            ];
            break;
        case 'Delays':
            datasets = [
                {
                    label: 'Number of Delays',
                    data: generateRandomData(labels.length, 0, 50),
                    borderColor: 'rgb(54, 162, 235)',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    fill: true
                }
            ];
            break;
        default:
            datasets = [
                {
                    label: 'Record of ATCs',
                    data: generateRandomData(labels.length, 5, 20),
                    borderColor: 'rgb(99, 255, 138)',
                    backgroundColor: 'rgba(99, 255, 138, 0.05)',
                    fill: true
                }
            ];
    }
    updateChart(myChart.config.type, labels, datasets);
}

function changeView(option) {
    const labels = myChart.data.labels; // Manter as labels atuais
    const datasets = myChart.data.datasets; // Manter os datasets atuais
    updateChart(option, labels, datasets);
}

// Função para gerar os itens dos dropdowns
function generateDropdownItems(dropdownId, options, changeFunction) {
    const dropdown = document.getElementById(dropdownId);
    const ul = dropdown.querySelector('ul');
    ul.innerHTML = ''; // Limpar itens existentes
    options.forEach(option => {
        const li = document.createElement('li');
        li.textContent = option.label;
        li.addEventListener('click', () => {
            changeFunction(option.value);
        });
        ul.appendChild(li);
    });
}

// Gerar itens dos dropdowns
generateDropdownItems('time-options', dropdownOptions.time, changeTime);
generateDropdownItems('data-options', dropdownOptions.data, changeData);
generateDropdownItems('view-options', dropdownOptions.view, changeView);

// Exemplo de uso inicial
const labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const datasets = [
    {
        label: 'Record of ATCs',
        data: generateRandomData(7, 5, 20),
        borderColor: 'rgb(99, 255, 138)',
        backgroundColor: 'rgba(99, 255, 138, 0.05)',
        fill: true
    },
    {
        label: 'Last Week',
        data: generateRandomData(7, 5, 20),
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.05)',
        fill: true
    }
];

myChart = createChart('line', labels, datasets);

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