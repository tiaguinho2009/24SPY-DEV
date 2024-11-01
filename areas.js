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
        color: "rgba(0, 90, 50, 1)",
        fillColor: "rgba(0, 90, 50, 0.1)",
        center: [470,1000],
        active: false,
        atc: "",
    },
    {
        name: "ISAU CTR",
        type: "polygon",
        firReference: "ISAU FIR",
        color: "rgba(0, 90, 50, 1)",
        fillColor: "rgba(0, 90, 50, 0.1)",
        center: [170,1000],
        active: false,
        atc: "",
    },
    {
        name: "ILAR CTR",
        type: "polygon",
        firReference: "ILAR FIR",
        color: "rgba(0, 90, 50, 1)",
        fillColor: "rgba(0, 90, 50, 0.1)",
        center: [1000,1000],
        active: false,
        atc: "",
    },
    {
        name: "IGRV CTR",
        type: "polygon",
        firReference: "IGRV FIR",
        color: "rgba(0, 90, 50, 1)",
        fillColor: "rgba(0, 90, 50, 0.1)",
        center: [150,400],
        active: false,
        atc: "",
    },
    {
        name: "ITKO CTR",
        type: "polygon",
        firReference: "ITKO FIR",
        color: "rgba(0, 90, 50, 1)",
        fillColor: "rgba(0, 90, 50, 0.1)",
        center: [535,370],
        active: false,
        atc: "",
    },
    {
        name: "IPPH CTR",
        type: "polygon",
        firReference: "IPPH FIR",
        color: "rgba(0, 90, 50, 1)",
        fillColor: "rgba(0, 90, 50, 0.1)",
        center: [950,400],
        active: false,
        atc: "",
    },
    {
        name: "IZOL CTR",
        type: "polygon",
        firReference: "IZOL FIR",
        color: "rgba(0, 90, 50, 1)",
        fillColor: "rgba(0, 90, 50, 0.1)",
        center: [1000,750],
        active: false,
        atc: "",
    },
    {
        name: "IBTH CTR",
        type: "polygon",
        firReference: "IBTH FIR",
        color: "rgba(0, 90, 50, 1)",
        fillColor: "rgba(0, 90, 50, 0.1)",
        center: [500,550],
        active: false,
        atc: "",
    },

    // Airports
    //0
    {
        name: "IRFD",
        real_name: "Rockford",
        type: "Airport",
        originalscale: 0,
        scale: 0,
        coordinates: [583.95, 795.56],
        tower: false,
        ground: false,
        ctr: "IRFD CTR",
        atc: "",
        towerAtc: "",
        groundATC: "",
        atcs: [
            "Rockford Tower",
            "Rockford Ground"
        ],
    },
    {
        name: "IPPH",
        real_name: "Perth",
        type: "Airport",
        originalscale: 0,
        scale: 0,
        coordinates: [796,362],
        tower: false,
        ground: false,
        ctr: "IPPH CTR",
        towerATC: "",
        groundATC: "",
        atcs: [
            "Perth Tower",
            "Perth Ground"
        ]
    },
    {
        name: "IZOL",
        real_name: "Izolirani",
        type: "Airport",
        originalscale: 0,
        scale: 0,
        coordinates: [1074,611],
        tower: false,
        ground: false,
        ctr: "IZOL CTR",
        towerATC: "",
        groundATC: "",
        atcs: [
            "Izolirani Tower",
            "Izolirani Ground"
        ]
    },
    {
        name: "ITKO",
        real_name: "Tokyo",
        type: "Airport",
        originalscale: 0,
        scale: 0,
        coordinates: [528,242],
        tower: false,
        ground: false,
        ctr: "ITKO CTR",
        towerATC: "",
        groundATC: "",
        atcs: [
            "Tokyo Tower",
            "Tokyo Ground"
        ]
    },
    {
        name: "ILAR",
        real_name: "Larnaca",
        type: "Airport",
        originalscale: 0,
        scale: 0,
        coordinates: [832.00, 913.00],
        tower: false,
        ground: false,
        ctr: "ILAR CTR",
        towerATC: "",
        groundATC: "",
        atcs: [
            "Larnaca Tower",
            "Larnaca Ground"
        ]
    },
    {
        name: "IGRV",
        real_name: "Grindavik",
        type: "Airport",
        originalscale: 0,
        scale: 0,
        coordinates: [162,546],
        tower: false,
        ctr: "IGRV CTR",
        towerATC: "",
        groundATC: "",
        atcs: [
            "Grindavik Tower",
        ]
    },
    {
        name: "IBTH",
        real_name: "Barthélemy",
        type: "Airport",
        originalscale: 0,
        scale: 0,
        coordinates: [670,529],
        tower: false,
        ctr: "IBTH CTR",
        towerATC: "",
        groundATC: "",
        atcs: [
            "Saint Barthélemy Tower",
        ]
    },
    {
        name: "ISAU",
        real_name: "Sauthemptona",
        type: "Airport",
        originalscale: 0,
        scale: 0,
        coordinates: [131,863],
        tower: false,
        ctr: "ISAU CTR",
        towerATC: "",
        groundATC: "",
        atcs: [
            "Sauthemptona Tower",
        ]
    },
    //1
    {
        name: "IPPH",
        real_name: "Paphos",
        type: "Airport",
        originalscale: 1,
        scale: 1,
        coordinates: [940.43, 931.13],
        tower: false,
        towerATC: "",
        atcs: [
            "Paphos Tower",
        ]
    },
    {
        name: "IMLR",
        real_name: "Mellor",
        type: "Airport",
        originalscale: 1,
        scale: 1,
        coordinates: [407.90, 729.67],
        tower: false,
        towerATC: "",
        groundATC: "",
        atcs: [
            "Mellor Tower",
        ]
    },
    {
        name: "IDCS",
        real_name: "Saba",
        type: "Airport",
        originalscale: 1,
        scale: 1,
        coordinates: [560.17, 109.67],
        tower: false,
        towerATC: "",
        atcs: [
            "Saba Tower",
        ]
    },
    {
        name: "IGAR",
        real_name: "Garry",
        type: "Airport",
        originalscale: 1,
        scale: 1,
        coordinates: [440.93, 820.24],
        tower: false,
        towerATC: "",
        atcs: [
            "Garry Tower",
        ]
    },
    {
        name: "IIAB",
        real_name: "McConnell",
        type: "Airport",
        originalscale: 1,
        scale: 1,
        coordinates: [849.00, 996.00],
        tower: false,
        towerATC: "",
        atcs: [
            "McConnell Tower",
        ]
    },
    {
        name: "ISCM",
        real_name: "Scampton",
        type: "Airport",
        originalscale: 1,
        scale: 1,
        coordinates: [988.00, 525.00],
        tower: false,
        towerATC: "",
        atcs: [
            "Scampton Tower",
        ]
    },
    //2
    {
        name: "IBLT",
        real_name: "Boltic",
        type: "Airport",
        originalscale: 2,
        scale: 2,
        coordinates: [493.87, 757.33],
        tower: false,
        towerATC: "",
        atcs: [
            "Boltic Tower",
        ]
    },
    {
        name: "ILKL",
        real_name: "Lukla",
        type: "Airport",
        originalscale: 2,
        scale: 2,
        coordinates: [844.00, 408.00],
        tower: false,
        towerATC: "",
        atcs: [
            "Lukla Tower",
        ]
    },
    {
        name: "ITRN",
        real_name: "Training Centre",
        type: "Airport",
        originalscale: 2,
        scale: 2,
        coordinates: [589.33, 892.00],
        tower: false,
        towerATC: "",
        atcs: [
            "Training Centre Tower",
        ]
    },
    {
        name: "IJAF",
        real_name: "Al Najaf",
        type: "Airport",
        originalscale: 2,
        scale: 2,
        coordinates: [1087.76, 576.64],
        tower: false,
        towerATC: "",
        atcs: [
            "Al Najaf Tower",
        ]
    },
    {
        name: "IHEN",
        real_name: "Henstridge",
        type: "Airport",
        originalscale: 2,
        scale: 2,
        coordinates: [788.62, 1004.13],
        tower: false,
        towerATC: "",
        atcs: [
            "Henstridge Tower",
        ]
    },
    {
        name: "IBAR",
        real_name: "Barra",
        type: "Airport",
        originalscale: 2,
        scale: 2,
        coordinates: [897.02, 973.33],
        tower: false,
        towerATC: "",
        atcs: [
            "Barra Tower",
        ]
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