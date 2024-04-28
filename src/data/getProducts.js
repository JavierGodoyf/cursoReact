const products = [
    {
        id: 1,
        name: "Café Espresso",
        description: "Café intenso y aromático, perfecto para cualquier momento del día.",
        category: "café",
        image: "./assets/img/cafe_espresso.jpg" // URL relativa al equipo
    },
    {
        id: 2,
        name: "Café Latte",
        description: "Café suave con leche vaporizada, ideal para los amantes de los sabores cremosos.",
        category: "café",
        image: "./assets/img/cafe_latte.jpg" // URL relativa al equipo
    },
    {
        id: 3,
        name: "Croissant de Mantequilla",
        description: "Delicioso croissant hojaldrado con mantequilla fresca.",
        category: "pastelería",
        image: "./assets/img/croissant_mantequilla.jpg" // URL relativa al equipo
    },
    {
        id: 4,
        name: "Tarta de Fresas",
        description: "Tarta fresca con fresas maduras y crema suave.",
        category: "pastelería",
        image: "./assets/img/tarta_fresas.jpg" // URL relativa al equipo
    },
    {
        id: 5,
        name: "Cappuccino",
        description: "Delicioso cappuccino con espuma de leche y un toque de canela.",
        category: "café",
        image: "./assets/img/cappuccino.jpg" // URL relativa al equipo
    },
    {
        id: 6,
        name: "Dona de Chocolate",
        description: "Dona esponjosa cubierta de chocolate derretido.",
        category: "pastelería",
        image: "./assets/img/dona_chocolate.jpg" // URL relativa al equipo
    },
    {
        id: 7,
        name: "Americano",
        description: "Café negro fuerte y concentrado, perfecto para empezar el día.",
        category: "café",
        image: "./assets/img/americano.jpg" // URL relativa al equipo
    },
    {
        id: 8,
        name: "Pastel de Zanahoria",
        description: "Delicioso pastel con trozos de zanahoria y crema de queso.",
        category: "pastelería",
        image: "./assets/img/pastel_zanahoria.jpg" // URL relativa al equipo
    },
    {
        id: 9,
        name: "Café Mocha",
        description: "Café con chocolate y leche vaporizada, una combinación irresistible.",
        category: "café",
        image: "./assets/img/cafe_mocha.jpg" // URL relativa al equipo
    },
    {
        id: 10,
        name: "Croissant de Chocolate",
        description: "Croissant relleno de chocolate derretido, una delicia para los amantes del chocolate.",
        category: "pastelería",
        image: "./assets/img/croissant_chocolate.jpg" // URL relativa al equipo
    }
];

// Obtener productos
const getProducts = new Promise((resolve, reject) => {
    // Simulamos retraso de red tipo API
    setTimeout(() => {
        resolve(products);
    }, 3000);
});

export default getProducts;
