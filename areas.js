// areas.js
const controlAreas = [
    // FIRs
    {
        name: "IRFD FIR",
        type: "polyline",
        coordinates: [
            [644, 1200],
            [644, 927],
            [769, 868],
            [760, 817],
            [755, 790],
            [737, 727],
            [718, 692],
            [692, 647],
            [366, 559],
            [282, 626],
            [282, 686],
            [282, 822],
            [362, 898],
            [362, 1200],
            [644, 1200]
        ],
        color: "rgba(0,0,0,1)",
        active: true
    },
    {
        name: "ISKP FIR",
        type: "polyline",
        coordinates: [
            [760, 817],
            [755, 790],
            [737, 727],
            [718, 692],
            [836, 651],
            [909, 626],
            [986, 633],
            [982, 660],
            [960, 683],
            [964, 747],
            [978, 759],
            [760, 817]
        ],
        color: "rgba(0,0,0,1)",
        active: true
    },
    {
        name: "ISAU FIR",
        type: "polyline",
        coordinates: [
            [362, 1200],
            [0, 1200],
            [0, 718],
            [134, 730],
            [282, 786],
            [282, 822],
            [362, 898],
            [362, 1200]
        ],
        color: "rgba(0,0,0,1)",
        active: true
    },
    {
        name: "ILAR FIR",
        type: "polyline",
        coordinates: [
            [760, 817],
            [978, 759],
            [1021, 796],
            [1200, 832],
            [1200, 1200],
            [644, 1200],
            [644, 927],
            [769, 868],
            [760, 817]
        ],
        color: "rgba(0,0,0,1)",
        active: true
    },
    {
        name: "IGRV FIR",
        type: "polyline",
        coordinates: [
            [0,718],
            [134,730],
            [282,786],
            [282,626],
            [366,559],
            [415,450],
            [274,0],
            [0,0],
            [0,718]
        ],
        color: "rgba(0,0,0,1)",
        active: true
    },
    {
        name: "ITKO FIR",
        type: "polyline",
        coordinates: [
            [415,450],
            [433,410],
            [714,410],
            [714,0],
            [274,0]
        ],
        color: "rgba(0,0,0,1)",
        active: true
    },
    {
        name: "IPPH FIR",
        type: "polyline",
        coordinates: [
            [714,0],
            [714,410],
            [764,432],
            [797,529],
            [856,500],
            [943,500],
            [1034,440],
            [1120,402],
            [1200,403],
            [1200,0],
            [714,0]
        ],
        color: "rgba(0,0,0,1)",
        active: true
    },
    {
        name: "IZOL FIR",
        type: "polyline",
        coordinates: [
            [797,529],
            [856,578],
            [836,651],
            [909, 626],
            [986, 633],
            [982, 660],
            [960, 683],
            [964, 747],
            [978, 759],
            [1021,796],
            [1200,832],
            [1200,403],
            [1120,402],
            [1034,440],
            [943,500],
            [856,500],
            [797,529]
        ],
        color: "rgba(0,0,0,1)",
        active: true
    },
    {
        name: "IBTH FIR",
        type: "polyline",
        coordinates: [
            [433,410],
            [415,450],
            [366,559],
            [692,647],
            [718,692],
            [836,651],
            [856,578],
            [797,529],
            [764,432],
            [714,410],
            [433,410]
        ],
        color: "rgba(0,0,0,1)",
        active: true
    },
    {
        name: "Map",
        type: "polyline",
        coordinates: [
            [0, 0],
            [0, 1200],
            [1200, 1200],
            [1200, 0],
            [0, 0]
        ],
        color: "rgba(0,0,0,1)",
        active: true
    },

    // CTRs
    {
        name: "IRFD CTR",
        type: "polygon",
        firReference: "IRFD FIR",
        color: "rgba(19,82,59, 1)",
        fillColor: "rgba(0,82,59, 0.1)",
        center: [470,1000],
        active: true
    },
    {
        name: "ISAU CTR",
        type: "polygon",
        firReference: "ISAU FIR",
        color: "rgba(19,82,59, 1)",
        fillColor: "rgba(0,82,59, 0.1)",
        center: [170,1000],
        active: true
    },
    {
        name: "ILAR CTR",
        type: "polygon",
        firReference: "ILAR FIR",
        color: "rgba(19,82,59, 1)",
        fillColor: "rgba(0,82,59, 0.1)",
        center: [1000,1000],
        active: true
    },
    {
        name: "IGRV CTR",
        type: "polygon",
        firReference: "IGRV FIR",
        color: "rgba(19,82,59, 1)",
        fillColor: "rgba(0,82,59, 0.1)",
        center: [150,400],
        active: true
    },
    {
        name: "ITKO CTR",
        type: "polygon",
        firReference: "ITKO FIR",
        color: "rgba(19,82,59, 1)",
        fillColor: "rgba(0,82,59, 0.1)",
        center: [535,370],
        active: true
    },
    {
        name: "IPPH CTR",
        type: "polygon",
        firReference: "IPPH FIR",
        color: "rgba(19,82,59, 1)",
        fillColor: "rgba(0,82,59, 0.1)",
        center: [950,400],
        active: true
    },
    {
        name: "IZOL CTR",
        type: "polygon",
        firReference: "IZOL FIR",
        color: "rgba(19,82,59, 1)",
        fillColor: "rgba(0,82,59, 0.1)",
        center: [1000,750],
        active: true
    },
    {
        name: "IBTH CTR",
        type: "polygon",
        firReference: "IBTH FIR",
        color: "rgba(19,82,59, 1)",
        fillColor: "rgba(0,82,59, 0.1)",
        center: [500,550],
        active: true
    },

    // Airports
    {
        name: "IRFD",
        type: "Airport",
        coordinates: [575, 800],
        tower: true,
        ground: true,
        ctr: "IRFD CTR"
    },
    {
        name: "ILAR",
        type: "Airport",
        coordinates: [825,911],
        tower: true,
        ground: true,
        ctr: "ILAR CTR"
    },
    {
        name: "ISAU",
        type: "Airport",
        coordinates: [131,863],
        tower: true,
        ground: false,
        ctr: "ISAU CTR"
    },
    {
        name: "IGRV",
        type: "Airport",
        coordinates: [162,546],
        tower: true,
        ground: false,
        ctr: "IGRV CTR"
    },
    {
        name: "ITKO",
        type: "Airport",
        coordinates: [528,242],
        tower: true,
        ground: true,
        ctr: "ITKO CTR"
    },
    {
        name: "IPPH",
        type: "Airport",
        coordinates: [796,362],
        tower: true,
        ground: true,
        ctr: "IPPH CTR"
    },
    {
        name: "IZOL",
        type: "Airport",
        coordinates: [1074,611],
        tower: true,
        ground: true,
        ctr: "IZOL CTR"
    },
    {
        name: "IBTH",
        type: "Airport",
        coordinates: [670,529],
        tower: true,
        ground: false,
        ctr: "ITKO CTR"
    },
];

// Função para aplicar coordenadas da FIR para a CTR correspondente e sincronizar o valor de active
function assignCTRCoordinates() {
    controlAreas.forEach(area => {
        if (area.firReference) {
            const firArea = controlAreas.find(fir => fir.name === area.firReference);
            if (firArea) {
                area.coordinates = firArea.coordinates;
            }

            // Sincroniza o valor active da CTR com o valor tower do aeroporto correspondente
            const airport = controlAreas.find(ap => ap.type === "Airport" && ap.ctr === area.name);
            if (airport) {
                area.active = airport.tower;
            }
        }
    });
}

assignCTRCoordinates();