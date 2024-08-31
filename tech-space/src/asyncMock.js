const itemList = [
    { id: 'MLA1826426120', name: 'Redmi Buds 4 Active', detail: 'Auriculares Inalámbricos Xiaomi Redmi Buds 4 Active Color Negro M2232e1', price: 29599, image: 'http://http2.mlstatic.com/D_697218-MLU73566747255_122023-I.jpg', category: 'accessories' },

    { id: 'MLA1428479277', name: 'Redmi 13c', detail: 'Xiaomi Redmi 13c Dual Sim 128 Gb Midnight Black 4 Gb Ram', price: 349999, image: 'http://http2.mlstatic.com/D_780144-MLA72668121499_112023-I.jpg', category: 'smartphones' },

    { id: 'MLA1764122120', name: 'Redmi Watch 3 Active', detail: "Smartwatch Xiaomi Redmi Watch 3 Active 1.83' 100 Modos Black Caja Negro Bisel Negro", price: 70999, image: 'http://http2.mlstatic.com/D_789681-MLU72542124768_112023-I.jpg', category: 'accessories' },

    { id: 'MLA1434558657', name: 'Moto G24 Power', detail: 'Moto G24 Power 128gb + 8gb Glacier Blue', price: 429999, image: 'http://http2.mlstatic.com/D_730375-MLU77222096423_062024-I.jpg', category: 'smartphones' },

    { id: 'MLA1438287003', name: 'Galaxy A55', detail: 'Samsung Galaxy A55 256gb Awesome Navy 8gb Ram', price: 999999, image: 'http://http2.mlstatic.com/D_976895-MLU77500283258_072024-I.jpg', category: 'smartphones' },

    { id: 'MLA1835323364', name: 'Galaxy A15', detail: 'Samsung Galaxy A15 128 Gb Negro Azulado 4 Gb Ram', price: 338999, image: 'http://http2.mlstatic.com/D_921195-MLA74420606310_022024-I.jpg', category: 'smartphones' },

    { id: 'MLA1401603057', name: 'Tcl 40 Se', detail: 'Tcl 40 Se 256 Gb Dark Gray 6 Gb Ram', price: 319999, image: 'http://http2.mlstatic.com/D_728848-MLA74017726443_012024-I.jpg', category: 'smartphones' },

    { id: 'MLA1559167100', name: 'Lige Zl02d', detail: 'Smartband Lige Zl02d Display De 1.28 Con Correa Color Negro', price: 27510, image: 'http://http2.mlstatic.com/D_833296-MLA72363386722_102023-I.jpg', category: 'accessories' },

    { id: 'MLA1882837648', name: 'Moto E22', detail: 'Motorola Moto E22 64gb Azul 4gb Ram', price: 247999, image: 'http://http2.mlstatic.com/D_948595-MLU74223977126_022024-I.jpg', category: 'smartphones' },

    { id: 'MLA1503305306', name: 'Cargador 20w', detail: 'Cargador 20w iPhone Carga Rápida + Cable Usb C Original', price: 28222.4, image: 'http://http2.mlstatic.com/D_766306-MLA72038863890_102023-I.jpg', category: 'accessories' },

    { id: 'MLA1401664336', name: 'Galaxy A04s', detail: 'Samsung Galaxy A04s 4 + 128gb Color Blanco', price: 282999, image: 'http://http2.mlstatic.com/D_770416-MLA74084789641_012024-I.jpg', category: 'smartphones' },

    { id: 'MLA1775602592', name: 'Nictom Nt16', detail: 'Smartwatch Redondo Nictom Smartwatch Nt16 1,28 Caja Plástica Negra, Malla De Tpu Negra, Sumergible', price: 41249.25, image: 'http://http2.mlstatic.com/D_945154-MLA74220117321_012024-I.jpg', category: 'accessories' },

    { id: 'MLA1824897752', name: 'Moto G24', detail: 'Motorola Moto G24 128 Gb Matte Charcoal 4 Gb Ram', price: 369999, image: 'http://http2.mlstatic.com/D_742688-MLU77221454523_062024-I.jpg', category: 'smartphones' },

    { id: 'MLA1843994286', name: 'Moto Buds 065', detail: 'Auricular Motorola Moto Buds 065 Black Color Negro', price: 39999, image: 'http://http2.mlstatic.com/D_701243-MLU77741511548_072024-I.jpg', category: 'accessories' },

    { id: 'MLA1747887804', name: 'Quantum Yolo Plus', detail: 'Quantum Yolo Plus 32 Gb Negro 2 Gb Ram', price: 119998, image: 'http://http2.mlstatic.com/D_917278-MLA75756648671_042024-I.jpg', category: 'smartphones' },

    { id: 'MLA1202815360', name: 'Alcatel 1 Ultra', detail: 'Alcatel 1 Ultra 32 Gb Negro 1 Gb Ram', price: 63399, image: 'http://http2.mlstatic.com/D_709575-MLA51915956181_102022-I.jpg', category: 'smartphones' },

    { id: 'MLA1790420604', name: 'Blade V50', detail: 'Zte Blade V50 Design 256 Gb Negro 6 Gb Ram (+10 Gb Ram Virtuales)', price: 269999, image: 'http://http2.mlstatic.com/D_931822-MLA76569776249_052024-I.jpg', category: 'smartphones' },

    { id: 'MLA1704872048', name: 'Nictom Nt14', detail: 'Reloj Inteligente Cuadrado Nictom Nt14 Smartwatch Resistente Agua Ritmo Cardiaco', price: 47799, image: 'http://http2.mlstatic.com/D_853948-MLU74221423759_012024-I.jpg', category: 'accessories' },

    { id: 'MLA1704857340', name: 'Blade A33 Plus', detail: 'Zte Blade A33 Plus 32 Gb Space Gray 2 Gb Ram', price: 139999, image: 'http://http2.mlstatic.com/D_883875-MLU71570310175_092023-I.jpg', category: 'smartphones' },

    { id: 'MLA1445777875', name: 'Mini Impresora', detail: 'Mini Impresora Térmica Bluetooth Recargable Portátil Rosa Color Rosa Chicle West', price: 28216, image: 'http://http2.mlstatic.com/D_924086-MLU74474535725_022024-I.jpg', category: 'accessories' },

    { id: 'MLA1842230910', name: 'Moto G04', detail: 'Motorola Moto G04 64gb Sea Green 4gb Ram', price: 271099, image: 'http://http2.mlstatic.com/D_977111-MLU76290266257_052024-I.jpg', category: 'smartphones' },

    { id: 'MLA1441614319', name: 'Galaxy A05', detail: 'Samsung Galaxy A05 128 Gb Negro 4 Gb Ram', price: 321998, image: 'http://http2.mlstatic.com/D_713582-MLA77213064255_062024-I.jpg', category: 'smartphones' },

    { id: 'MLA1275520851', name: 'Imilab W01', detail: 'Smartwatch Reloj Inteligente Imilab W01 Negro Spo2 1.69', price: 34864, image: 'http://http2.mlstatic.com/D_885041-MLU77280276564_072024-I.jpg', category: 'accessories' },

    { id: 'MLA1446798925', name: 'Redmi 13c', detail: 'Xiaomi Redmi 13c Dual Sim 256 Gb Navy Blue 8 Gb Ram', price: 345001.38, image: 'http://http2.mlstatic.com/D_655474-MLA77736925914_072024-I.jpg', category: 'smartphones' },

    { id: 'MLA1496806056', name: 'Aro De Luz Led', detail: 'Aro De Luz Led 30 Cm Con Trípode Extensible 2 Metros', price: 25369, image: 'http://http2.mlstatic.com/D_654013-MLA71530513122_092023-I.jpg', category: 'accessories' },

    { id: 'MLA1822487048', name: 'Redmi Buds 5', detail: 'Auriculares Inalámbricos Xiaomi Redmi Buds 5  Black', price: 51999, image: 'http://http2.mlstatic.com/D_908979-MLU77749836156_092024-I.jpg', category: 'accessories' }
];


export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
        resolve(itemList);
    }, 1000);
});
