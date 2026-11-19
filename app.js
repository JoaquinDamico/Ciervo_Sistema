const CATALOG_VERSION = 2; // Subí este número si querés forzar un reseteo total desde INITIAL_PRODUCTS

// SUBDIVISIONES DE PROMOS / VARIETALES
const PROMO_CATEGORIES = [
  "PROMOS MALBEC",
  "PROMOS CABERNET",
  "PROMOS BLANCOS",
  "PROMOS ESPUMANTES",
  "PROMOS DESTILADOS",
  "PROMOS RON - WHISKY",
  "PROMOS CERVEZAS",
  "PROMOS GASEOSAS",
  "VARIETAL MALBEC",
  "VARIETAL CABERNET",
  "VARIETAL BLANCO",
  "VARIETAL ESPUMANTES"
];

// PRODUCTOS BASE DEL EXCEL "EL CIERVO" + PROMOS SUBDIVIDIDAS
const INITIAL_PRODUCTS = [
  //DESTILADOS
  {"id":1,"name":"ABSOLUT NEUTRO 700ml","category":"DESTILADOS","price":29300,"stock":3},
  {"id":2,"name":"ABSOLUT VANILIA 700ml","category":"DESTILADOS","price":32400,"stock":2},
  {"id":3,"name":"ABSOLUT PEARS 700ml","category":"DESTILADOS","price":32400,"stock":1},
  {"id":4,"name":"ABSOLUT WATERMELON 700ml","category":"DESTILADOS","price":32400,"stock":3},
  {"id":5,"name":"ABSOLUT MANGO 700ml","category":"DESTILADOS","price":32400,"stock":2},
  {"id":6,"name":"ABSOLUT MANDRIN 700ml","category":"DESTILADOS","price":32400,"stock":2},
  {"id":7,"name":"ABSOLUT WILD BERRI 700ml","category":"DESTILADOS","price":32400,"stock":2},
  {"id":8,"name":"ABSOLUT RASPBERRI 700ml","category":"DESTILADOS","price":32400,"stock":2},
  {"id":9,"name":"SMIRNOFF CITRIC 700ml","category":"DESTILADOS","price":11500,"stock":2},
  {"id":10,"name":"SMIRNOFF RASPBERRY 700ml","category":"DESTILADOS","price":11500,"stock":2},
  {"id":11,"name":"SMIRNOFF NEUTRO 700ml","category":"DESTILADOS","price":11500,"stock":3},
  {"id":12,"name":"SMIRNOFF GREEN APPLE 700ml","category":"DESTILADOS","price":11500,"stock":2},
  {"id":13,"name":"SKY RASPBERRY 750ml","category":"DESTILADOS","price":11200,"stock":3},
  {"id":14,"name":"SKY APRICOT 750ml","category":"DESTILADOS","price":11200,"stock":1},
  {"id":15,"name":"SERNOVA NEUTRO 700ml","category":"DESTILADOS","price":8500,"stock":1},
  {"id":16,"name":"SERNOVA APPLE PEAR 700ml","category":"DESTILADOS","price":8500,"stock":1},
  {"id":17,"name":"SERNOVA TROPICAL PASSION 700ml","category":"DESTILADOS","price":8500,"stock":1},
  {"id":18,"name":"SERNOVA CARIBBEAN BLEND 700ml","category":"DESTILADOS","price":8500,"stock":1},
  {"id":19,"name":"APOSTOLES FUERZA GAUCHA GIN 750ml","category":"DESTILADOS","price":18200,"stock":2},
  {"id":20,"name":"APOSTOLES MATE GIN 750ml","category":"DESTILADOS","price":17600,"stock":5},
  {"id":21,"name":"MERLE 12 BOTANICALS GIN 750ml","category":"DESTILADOS","price":12000,"stock":2},
  {"id":22,"name":"GORDONS GIN 700ml","category":"DESTILADOS","price":16800,"stock":1},
  {"id":23,"name":"HILBING LONDON PINK 750ml","category":"DESTILADOS","price":19100,"stock":2},
  {"id":24,"name":"HILBING MALBEC 750ml","category":"DESTILADOS","price":19100,"stock":1},
  {"id":25,"name":"BEEFEATER NEUTRO 1L","category":"DESTILADOS","price":38600,"stock":1},
  {"id":26,"name":"BEEFEATER NEUTRO 700ml","category":"DESTILADOS","price":28600,"stock":2},
  {"id":27,"name":"BEEFEATER PINK 700ml","category":"DESTILADOS","price":34500,"stock":2},
  {"id":28,"name":"HEREDERO NEUTRO 700ml","category":"DESTILADOS","price":21300,"stock":3},
  {"id":29,"name":"TERRIER OLD TOM 750ml","category":"DESTILADOS","price":16100,"stock":3},
  {"id":30,"name":"MONTARRAZ NEUTRO 750ml","category":"DESTILADOS","price":18200,"stock":2},
  {"id":31,"name":"MONTARRAZ SALAMANCA DE LAS BRUJAS 750ml","category":"DESTILADOS","price":22100,"stock":2},
  {"id":32,"name":"ENTRE PERRO Y LOBO NEUTRO 750ml","category":"DESTILADOS","price":19200,"stock":2},
  {"id":33,"name":"BROKERS NEUTRO 750ml","category":"DESTILADOS","price":36800,"stock":2},
  {"id":34,"name":"LARIOS ROSE 700ml","category":"DESTILADOS","price":21200,"stock":2},
  {"id":35,"name":"LARIOS NEUTRO 700ml","category":"DESTILADOS","price":15400,"stock":2},
  {"id":36,"name":"SPIRITO BLU 700ml","category":"DESTILADOS","price":14000,"stock":2},
  {"id":37,"name":"RESTINGA NEUTRO 700ml","category":"DESTILADOS","price":21000,"stock":3},
  {"id":38,"name":"TANQUERAY LONDON DRY 700ml","category":"DESTILADOS","price":35500,"stock":6},
  {"id":39,"name":"TANQUERAY FLOR DE SEVILLA 700ml","category":"DESTILADOS","price":44200,"stock":3},
  {"id":40,"name":"TANQUERAY DARK BERRY ROYALE 700ml","category":"DESTILADOS","price":44200,"stock":3},
  {"id":41,"name":"ARGENTINA WILD NEUTRO 750ml","category":"DESTILADOS","price":22300,"stock":4},
  {"id":42,"name":"CARPANO BIANCO 1L","category":"DESTILADOS","price":10000,"stock":3},
  {"id":43,"name":"CARPANO ROSE 1L","category":"DESTILADOS","price":10000,"stock":1},
  {"id":44,"name":"CINZANO SEGUNDO 750ml","category":"DESTILADOS","price":10800,"stock":3},
  {"id":45,"name":"CINZANO ROSSO 1L","category":"DESTILADOS","price":11500,"stock":3},
  {"id":46,"name":"CINZANO BIANCO 1L","category":"DESTILADOS","price":11500,"stock":3},
  {"id":47,"name":"GANCIA AMERICANO 950ml","category":"DESTILADOS","price":9200,"stock":1},
  {"id":48,"name":"MARTINI EXTRA DRY 1L","category":"DESTILADOS","price":13000,"stock":3},
  {"id":49,"name":"MARTINI BIANCO 1L","category":"DESTILADOS","price":13000,"stock":2},
  {"id":50,"name":"APEROL 750ml","category":"DESTILADOS","price":13400,"stock":3},
  {"id":51,"name":"CAMPARI 750ml","category":"DESTILADOS","price":13400,"stock":3},
  {"id":52,"name":"RAMAZZOTTI ROSATO 700ml","category":"DESTILADOS","price":10500,"stock":3},
  {"id":53,"name":"FERNET BRANCA 750ml","category":"DESTILADOS","price":18000,"stock":5},
  {"id":54,"name":"FERNET BUHERO 700ml","category":"DESTILADOS","price":9800,"stock":7},
  {"id":55,"name":"MIL DEMONIOS VERMUT ROSSO 750ml","category":"DESTILADOS","price":22700,"stock":3},
  {"id":56,"name":"PUNT E MES 750ml","category":"DESTILADOS","price":10700,"stock":7},
  {"id":57,"name":"VECINO VERMUT 750ml","category":"DESTILADOS","price":13200,"stock":4},
  {"id":58,"name":"LUNFA VERMUT 750ml","category":"DESTILADOS","price":16500,"stock":4},
  {"id":59,"name":"GIOVANNONI BONARDA 750ml","category":"DESTILADOS","price":21900,"stock":3},
  {"id":60,"name":"CYNAR 70 PROOF 750ml","category":"DESTILADOS","price":13100,"stock":2},
  {"id":61,"name":"FEDERAL ROSSO 750ml","category":"DESTILADOS","price":19300,"stock":2},
  {"id":62,"name":"AMARGO OBRERO 950","category":"DESTILADOS","price":5500,"stock":6},
  {"id":63,"name":"PIMMS 750ml","category":"DESTILADOS","price":17500,"stock":2},
  {"id":64,"name":"BELLADONNA 37 BOTANICALS 1L","category":"DESTILADOS","price":29000,"stock":2},
  {"id":65,"name":"BOSQUE CRAFT 500ml","category":"DESTILADOS","price":28500,"stock":8},
  {"id":66,"name":"CASA ROSA GIN DE LUPULO","category":"DESTILADOS","price":15000,"stock":1},

  //RON - WHISKY//
  {"id":67,"name":"JAMESON TRIPLE DISTILLED 700ml","category":"RON - WHISKY","price":35000,"stock":2},
  {"id":68,"name":"JAMESON TRIPLE DISTILLED 1L","category":"RON - WHISKY","price":44900,"stock":3},
  {"id":69,"name":"JAMESON IPA EDITION 700ml","category":"RON - WHISKY","price":40000,"stock":3},
  {"id":70,"name":"JUSTERINI Y BROOKS 750ml","category":"RON - WHISKY","price":36800,"stock":2},
  {"id":71,"name":"GRANTS TRIPLE WOOD 750ml","category":"RON - WHISKY","price":48000,"stock":2},
  {"id":72,"name":"GRANTS TRIPLE WOOD 1L","category":"RON - WHISKY","price":55000,"stock":1},
  {"id":73,"name":"WILD TURKEY 750ml","category":"RON - WHISKY","price":50400,"stock":2},
  {"id":74,"name":"CHIVAS REGAL 700ml","category":"RON - WHISKY","price":68700,"stock":2},
  {"id":75,"name":"JIM BEAM BLACK 750ml","category":"RON - WHISKY","price":67200,"stock":2},
  {"id":76,"name":"JIM BEAM HONEY 750ml","category":"RON - WHISKY","price":60000,"stock":1},
  {"id":77,"name":"RED LABEL 750ml","category":"RON - WHISKY","price":35000,"stock":2},
  {"id":78,"name":"BALLANTINES FINEST 700ml","category":"RON - WHISKY","price":40000,"stock":1},
  {"id":79,"name":"JACK DANIELS FIRE 750ml","category":"RON - WHISKY","price":55200,"stock":1},
  {"id":80,"name":"JACK DANIELS HONEY 700ml","category":"RON - WHISKY","price":50000,"stock":2},
  {"id":81,"name":"JACK DANIELS SOUR MASH 700ml","category":"RON - WHISKY","price":47300,"stock":4},
  {"id":82,"name":"DOBLE-V 1L","category":"RON - WHISKY","price":10000,"stock":2},
  {"id":83,"name":"BLENDERS PRIDE 750ml","category":"RON - WHISKY","price":13400,"stock":3},
  {"id":84,"name":"BLENDERS HONEY 750ml","category":"RON - WHISKY","price":14300,"stock":2},
  {"id":85,"name":"FLOR DE CAÑA NEUTRO 750ml","category":"RON - WHISKY","price":22200,"stock":2},
  {"id":86,"name":"FLOR DE CAÑA AÑEJO ORO 750ml","category":"RON - WHISKY","price":22200,"stock":1},
  {"id":87,"name":"BACARDI CARTA BLANCA 750ml","category":"RON - WHISKY","price":20900,"stock":1},
  {"id":88,"name":"BACARDI CARTA ORO 750ml","category":"RON - WHISKY","price":20900,"stock":1},
  {"id":89,"name":"SANTA TERESA CLARO 750ml","category":"RON - WHISKY","price":35000,"stock":1},
  {"id":90,"name":"JAGERMEISTER 700ml","category":"RON - WHISKY","price":40000,"stock":4},
  {"id":91,"name":"MALIBU 750ml","category":"RON - WHISKY","price":19800,"stock":2},
  {"id":92,"name":"HAVANA CLUB ORIGINAL 750ml","category":"RON - WHISKY","price":17900,"stock":2},
  {"id":93,"name":"HAVANA CLUB ESPECIAL 750ml","category":"RON - WHISKY","price":19600,"stock":2},
  {"id":94,"name":"BARCELO BLANCO 750ml","category":"RON - WHISKY","price":41700,"stock":2},
  {"id":95,"name":"ALBANY CREAM 750ml","category":"RON - WHISKY","price":37400,"stock":4},
  {"id":96,"name":"LUXARDO KIRSCH 750ml","category":"RON - WHISKY","price":115700,"stock":2},
  {"id":97,"name":"LUXARDO ORIGINALE 750ml","category":"RON - WHISKY","price":107100,"stock":2},
  {"id":98,"name":"MISTELA CROTTA 750ml","category":"RON - WHISKY","price":15000,"stock":2},
  {"id":99,"name":"HESPERIDINA 1L","category":"RON - WHISKY","price":17600,"stock":2},
  {"id":100,"name":"CALAVERA NEUTRO 750ml","category":"RON - WHISKY","price":58400,"stock":2},
  {"id":101,"name":"MISTRAL PISCO 750ml","category":"RON - WHISKY","price":25000,"stock":1},
  {"id":102,"name":"TRES PLUMAS AMARETTO 700ml","category":"RON - WHISKY","price":9200,"stock":2},
  {"id":103,"name":"TRES PLUMAS MENTA 700ml","category":"RON - WHISKY","price":9200,"stock":2},
  {"id":104,"name":"TRES PLUMAS CACAO 700ml","category":"RON - WHISKY","price":9200,"stock":2},
  {"id":105,"name":"TRES PLUMAS LIMONCELLO 700ml","category":"RON - WHISKY","price":9200,"stock":2},
  {"id":106,"name":"TIA MARIA COFFEE 690ml","category":"RON - WHISKY","price":10900,"stock":3},
  {"id":107,"name":"TIA MARIA CREAMY 690ml","category":"RON - WHISKY","price":15300,"stock":2},
  {"id":108,"name":"RESERVA SAN JUAN COÑAC AÑEJO 750ml","category":"RON - WHISKY","price":17000,"stock":1},

  //MALBEC

  {"id": 109, "name": "NORTON LOTE LA COLONIA", "category": "ESTANTERIA MALBEC", "price": 40600, "stock": 6},
  {"id": 110, "name": "HUMBERTO CANALE OLD VINEYARD MALBEC", "category": "ESTANTERIA MALBEC", "price": 28800, "stock": 4},
  {"id": 111, "name": "PENEDO BORGES PRISMA GRAN MALBEC", "category": "ESTANTERIA MALBEC", "price": 26500, "stock": 4},
  {"id": 112, "name": "THE PILOT RESERVA MALBEC", "category": "ESTANTERIA MALBEC", "price": 29200, "stock": 6},
  {"id": 113, "name": "TERRAZAS DE LOS ANDES MALBEC", "category": "ESTANTERIA MALBEC", "price": 32200, "stock": 6},
  {"id": 114, "name": "MIL DEMONIOS MALBEC", "category": "ESTANTERIA MALBEC", "price": 24200, "stock": 5},
  {"id": 115, "name": "DIAMANDES DE UCO MALBEC", "category": "ESTANTERIA MALBEC", "price": 26400, "stock": 4},
  {"id": 116, "name": "ALBAFLOR SINGLE VINEYARD MALBEC", "category": "ESTANTERIA MALBEC", "price": 22900, "stock": 6},
  {"id": 117, "name": "TIZIO MALBEC", "category": "ESTANTERIA MALBEC", "price": 21200, "stock": 1},
  {"id": 118, "name": "SANGUINARIA MALBEC", "category": "ESTANTERIA MALBEC", "price": 25200, "stock": 9},
  {"id": 119, "name": "ALBAFLOR (FLOR ROJA)", "category": "ESTANTERIA MALBEC", "price": 33600, "stock": 6},
  {"id": 120, "name": "ALTOCEDRO AÑO CERO MALBEC", "category": "ESTANTERIA MALBEC", "price": 26100, "stock": 2},
  {"id": 121, "name": "ALTAR UCO EDAD MEDIA TINTO", "category": "ESTANTERIA MALBEC", "price": 68200, "stock": 6},
  {"id": 122, "name": "STELLA CRINITA MALBEC (ETIQUETA VERDE)", "category": "ESTANTERIA MALBEC", "price": 30600, "stock": 3},
  {"id": 123, "name": "LA CONTIENDA MALBEC GUALTALLARY", "category": "ESTANTERIA MALBEC", "price": 32200, "stock": 6},
  {"id": 124, "name": "ALTURA NORTON MALBEC", "category": "ESTANTERIA MALBEC", "price": 25000, "stock": 7},
  {"id": 125, "name": "ALANDES UCO MALBEC", "category": "ESTANTERIA MALBEC", "price": 36900, "stock": 4},
  {"id": 126, "name": "PENEDO BORGES PARCELAS MALBEC", "category": "ESTANTERIA MALBEC", "price": 46100, "stock": 12},
  {"id": 127, "name": "ZUCCARDI POLIGONOS ALTAMIRA MALBEC", "category": "ESTANTERIA MALBEC", "price": 30500, "stock": 3},
  {"id": 128, "name": "MALAMADO MALBEC 750ML", "category": "ESTANTERIA MALBEC", "price": 26400, "stock": 4},
  {"id": 129, "name": "TIKAL NATURAL BIODINAMICO", "category": "ESTANTERIA MALBEC", "price": 40900, "stock": 12},
  {"id": 130, "name": "LA CONTIENDA MALBEC SAN RAFAEL", "category": "ESTANTERIA MALBEC", "price": 28600, "stock": 7},
  {"id": 131, "name": "NORTON LOTE LUNLUNTA", "category": "ESTANTERIA MALBEC", "price": 35000, "stock": 6},
  {"id": 132, "name": "NORTON LOTE AGRELO", "category": "ESTANTERIA MALBEC", "price": 36100, "stock": 5},
  {"id": 133, "name": "NORTON PEDRIEL SERIES MALBEC", "category": "ESTANTERIA MALBEC", "price": 19000, "stock": 6},
  {"id": 134, "name": "VIÑALBA RESERVA MALBEC", "category": "ESTANTERIA MALBEC", "price": 19600, "stock": 6},
  {"id": 135, "name": "CICCHITTI COLECCION SANGIOVESE", "category": "ESTANTERIA MALBEC", "price": 17200, "stock": 46},
  {"id": 136, "name": "TINTO NEGRO UCO VALLEY MALBEC", "category": "ESTANTERIA MALBEC", "price": 15400, "stock": 5},
  {"id": 137, "name": "PIEDRA NEGRA ALTA COLECCION MALBEC", "category": "ESTANTERIA MALBEC", "price": 18200, "stock": 6},
  {"id": 138, "name": "MAE MALBEC", "category": "ESTANTERIA MALBEC", "price": 16900, "stock": 4},
  {"id": 139, "name": "URQO PALO SANTO MALBEC", "category": "ESTANTERIA MALBEC", "price": 17900, "stock": 2},
  {"id": 140, "name": "CHAKANA ESTATE SELECTION MALBEC", "category": "ESTANTERIA MALBEC", "price": 18400, "stock": 2},
  {"id": 141, "name": "SIN REGLAS MALBEC", "category": "ESTANTERIA MALBEC", "price": 18000, "stock": 2},
  {"id": 142, "name": "ENTROMETIDO MALBEC - MOSCATEL", "category": "ESTANTERIA MALBEC", "price": 18300, "stock": 11},
  {"id": 143, "name": "CICCHITTI  MALBEC", "category": "ESTANTERIA MALBEC", "price": 17800, "stock": 42},
  {"id": 144, "name": "FOND DE CAVE RESERVA MALBEC", "category": "ESTANTERIA MALBEC", "price": 17800, "stock": 2},
  {"id": 145, "name": "ALTITUD MALBEC", "category": "ESTANTERIA MALBEC", "price": 16300, "stock": 3},
  {"id": 146, "name": "LA LINDA MALBEC", "category": "ESTANTERIA MALBEC", "price": 17200, "stock": 5},
  {"id": 147, "name": "ZORZAL TERROIR UNICO MALBEC", "category": "ESTANTERIA MALBEC", "price": 16600, "stock": 3},
  {"id": 148, "name": "TRIVENTO GOLDEN MALBEC", "category": "ESTANTERIA MALBEC", "price": 17900, "stock": 4},
  {"id": 149, "name": "ENTRE GALLOS Y MEDIANOCHE", "category": "ESTANTERIA MALBEC", "price": 21900, "stock": 9},
  {"id": 150, "name": "DEMENCIAL MALBEC", "category": "ESTANTERIA MALBEC", "price": 23900, "stock": 2},
  {"id": 151, "name": "LORCA POETICO MALBEC", "category": "ESTANTERIA MALBEC", "price": 20300, "stock": 0},
  {"id": 152, "name": "ENRIQUE FOSTER RESERVA MALBEC", "category": "ESTANTERIA MALBEC", "price": 22000, "stock": 5},
  {"id": 153, "name": "MYTHIC VINEYARD", "category": "ESTANTERIA MALBEC", "price": 11500, "stock": 0},
  {"id": 154, "name": "MYTHIC MOUNTAIN MALBEC", "category": "ESTANTERIA MALBEC", "price": 15100, "stock": 11},
  {"id": 155, "name": "GRAZIE MILLE AMISTAD MALBEC", "category": "ESTANTERIA MALBEC", "price": 11400, "stock": 12},
  {"id": 156, "name": "PASCUAL TOSO ESTATE MALBEC", "category": "ESTANTERIA MALBEC", "price": 14000, "stock": 8},
  {"id": 157, "name": "CHAÑARES MALBEC 2017 / 2018", "category": "ESTANTERIA MALBEC", "price": 13600, "stock": 4},
  {"id": 158, "name": "PRIMMO MALBEC", "category": "ESTANTERIA MALBEC", "price": 16000, "stock": 18},
  {"id": 159, "name": "NAVARRO CORREA RESERVA MALBEC", "category": "ESTANTERIA MALBEC", "price": 15800, "stock": 2},
  {"id": 160, "name": "MAURICIO LORCA FANTASIA MALBEC", "category": "ESTANTERIA MALBEC", "price": 15300, "stock": 6},
  {"id": 161, "name": "ANDELUNA WINE NOT MALBEC", "category": "ESTANTERIA MALBEC", "price": 14100, "stock": 4},
  {"id": 162, "name": "PENEDO BORGES CEPAS MALBEC", "category": "ESTANTERIA MALBEC", "price": 16300, "stock": 6},
  {"id": 163, "name": "DESQUICIADO MALBEC", "category": "ESTANTERIA MALBEC", "price": 14700, "stock": 12},
  {"id": 164, "name": "ALTOS LAS HORMIGAS MALBEC", "category": "ESTANTERIA MALBEC", "price": 14200, "stock": 2},
  {"id": 165, "name": "CASIR DOS SANTOS PETIT VERDOT RESERVA", "category": "ESTANTERIA MALBEC", "price": 13900, "stock": 14},
  {"id": 166, "name": "CASIR DOS SANTOS MALBEC RESERVA", "category": "ESTANTERIA MALBEC", "price": 15100, "stock": 5},
  {"id": 167, "name": "MANOS NEGRAS MALBEC", "category": "ESTANTERIA MALBEC", "price": 15300, "stock": 5},
  {"id": 168, "name": "SEPTIMA OBRA MALBEC", "category": "ESTANTERIA MALBEC", "price": 16000, "stock": 3},
  {"id": 169, "name": "PYROS APPELLATION MALBEC", "category": "ESTANTERIA MALBEC", "price": 15200, "stock": 3},
  {"id": 170, "name": "PAZ DE LAS MORAS MALBEC", "category": "ESTANTERIA MALBEC", "price": 15800, "stock": 6},
  {"id": 171, "name": "NORTON DOC MALBEC", "category": "ESTANTERIA MALBEC", "price": 12600, "stock": 10},
  {"id": 172, "name": "ALBAFLOR CORTE DE TINTAS", "category": "ESTANTERIA MALBEC", "price": 13200, "stock": 9},
  {"id": 173, "name": "CHUPASANGRE MALBEC", "category": "ESTANTERIA MALBEC", "price": 11200, "stock": 43},
  {"id": 174, "name": "NAVARRO CORREAS COLECCION PRIVADA MALBEC", "category": "ESTANTERIA MALBEC", "price": 10200, "stock": 2},
  {"id": 175, "name": "LA ZULEMA MALBEC", "category": "ESTANTERIA MALBEC", "price": 10800, "stock": 3},
  {"id": 176, "name": "HUMBERTO CANALE INTIMO MALBEC", "category": "ESTANTERIA MALBEC", "price": 10500, "stock": 4},
  {"id": 177, "name": "ENRIQUE FOSTER IQUE MALBEC", "category": "ESTANTERIA MALBEC", "price": 9700, "stock": 5},
  {"id": 178, "name": "1300 MALBEC", "category": "ESTANTERIA MALBEC", "price": 9900, "stock": 3},
  {"id": 179, "name": "TRAPICHE RESERVA MALBEC", "category": "ESTANTERIA MALBEC", "price": 12100, "stock": 6},
  {"id": 180, "name": "TIGRIS MALBEC", "category": "ESTANTERIA MALBEC", "price": 13200, "stock": 18},
  {"id": 181, "name": "TAPIZ CLASSIC MALBEC", "category": "ESTANTERIA MALBEC", "price": 14100, "stock": 4},
  {"id": 182, "name": "SEPTIMA EMBLEMA MALBEC", "category": "ESTANTERIA MALBEC", "price": 12500, "stock": 12},
  {"id": 183, "name": "LOS INTOCABLES MALBEC", "category": "ESTANTERIA MALBEC", "price": 13400, "stock": 3},
  {"id": 184, "name": "MELIPAL MALBEC", "category": "ESTANTERIA MALBEC", "price": 13600, "stock": 2},
  {"id": 185, "name": "AGOSTINO ESTATE MALBEC", "category": "ESTANTERIA MALBEC", "price": 10900, "stock": 14},
  {"id": 186, "name": "AGOSTINO ESTATE SYRAH MALBEC", "category": "ESTANTERIA MALBEC", "price": 10900, "stock": 22},
  {"id": 187, "name": "AMANSADO JOVEN MALBEC", "category": "ESTANTERIA MALBEC", "price": 12000, "stock": 19},
  {"id": 188, "name": "BODEGA LOPEZ RIVAS MALBEC", "category": "ESTANTERIA MALBEC", "price": 11900, "stock": 6},
  {"id": 189, "name": "OMNIUM MALBEC", "category": "ESTANTERIA MALBEC", "price": 12000, "stock": 3},
  {"id": 190, "name": "SOMBRERO MALBEC", "category": "ESTANTERIA MALBEC", "price": 12600, "stock": 6},
  {"id": 191, "name": "BODEGA LOPEZ CLASICO MALBEC", "category": "ESTANTERIA MALBEC", "price": 6200, "stock": 3},
  {"id": 192, "name": "PORTILLO MALBEC", "category": "ESTANTERIA MALBEC", "price": 7100, "stock": 3},
  {"id": 193, "name": "SIN PREJUCIO MALBEC", "category": "ESTANTERIA MALBEC", "price": 7800, "stock": 18},
  {"id": 194, "name": "VIÑALBA MALBEC", "category": "ESTANTERIA MALBEC", "price": 8500, "stock": 0},
  {"id": 195, "name": "ALAMBRADO MALBEC", "category": "ESTANTERIA MALBEC", "price": 9500, "stock": 2},
  {"id": 196, "name": "SEXY FISH MALBEC", "category": "ESTANTERIA MALBEC", "price": 8800, "stock": 4},
  {"id": 197, "name": "TRAPICHE ORIGEN MALBEC", "category": "ESTANTERIA MALBEC", "price": 9200, "stock": 4},
  {"id": 198, "name": "TESTARUDO LAMBRUSCO GASPARROSA", "category": "ESTANTERIA MALBEC", "price": 8900, "stock": 6},
  {"id": 199, "name": "NORTON LIBRE MALBEC", "category": "ESTANTERIA MALBEC", "price": 9300, "stock": 12},
  {"id": 200, "name": "11 BARRICAS MALBEC", "category": "ESTANTERIA MALBEC", "price": 9100, "stock": 15},
  {"id": 201, "name": "MO MALBEC RESERVA", "category": "ESTANTERIA MALBEC", "price": 8200, "stock": 11},
  {"id": 202, "name": "SANTA JULIA RESERVA MALBEC", "category": "ESTANTERIA MALBEC", "price": 8400, "stock": 6},
  {"id": 203, "name": "CASA AGOSTINO MALBEC", "category": "ESTANTERIA MALBEC", "price": 9800, "stock": 5},
  {"id": 204, "name": "RAICES MALBEC", "category": "ESTANTERIA MALBEC", "price": 8100, "stock": 13},
  {"id": 205, "name": "ALAMOS RED BLEND", "category": "ESTANTERIA MALBEC", "price": 9600, "stock": 6},
  {"id": 206, "name": "CHAÑARES MALBEC", "category": "ESTANTERIA MALBEC", "price": 9500, "stock": 34},
  {"id": 207, "name": "TRIVENTO RESERVA MALBEC", "category": "ESTANTERIA MALBEC", "price": 8500, "stock": 5},
  {"id": 208, "name": "SANTA JULIA VARIETAL MALBEC", "category": "ESTANTERIA MALBEC", "price": 6700, "stock": 3},

  //ESTANTERIA CABERNET - BLEND
  {"id": 209, "name": "LA MASCOTA CABERNET SAUVIGNON", "category": "ESTANTERIA CABERNET - BLEND", "price": 22000, "stock": 2},
  {"id": 210, "name": "MARA CABERNET FRANC", "category": "ESTANTERIA CABERNET - BLEND", "price": 23600, "stock": 4},
  {"id": 211, "name": "GRAZIE MILLE LIBERTAD CAB FRANC", "category": "ESTANTERIA CABERNET - BLEND", "price": 24000, "stock": 9},
  {"id": 212, "name": "PENEDO BORGES PRISMA GRAN CABERNET SAUVIGNON", "category": "ESTANTERIA CABERNET - BLEND", "price": 27900, "stock": 15},
  {"id": 213, "name": "RUTINI COLECCION CABERNET SAUVIGNON", "category": "ESTANTERIA CABERNET - BLEND", "price": 32500, "stock": 9},
  {"id": 214, "name": "COLONIA LAS LIEBRES CLOUD CABERNET SAUVIGNON", "category": "ESTANTERIA CABERNET - BLEND", "price": 22700, "stock": 2},
  {"id": 215, "name": "PIEDRA NEGRA RESERVA CABERNET SAUVIGNON", "category": "ESTANTERIA CABERNET - BLEND", "price": 21600, "stock": 3},
  {"id": 216, "name": "MAURICIO LORCA POETICO CABERNET SAUVIGNON", "category": "ESTANTERIA CABERNET - BLEND", "price": 22900, "stock": 4},
  {"id": 217, "name": "ALEGORIA GRAN RESERVA CABERNET SAUVIGNON", "category": "ESTANTERIA CABERNET - BLEND", "price": 24100, "stock": 3},
  {"id": 218, "name": "ZUCCARDI Q CABERNET SAUVIGNON", "category": "ESTANTERIA CABERNET - BLEND", "price": 22900, "stock": 4},
  {"id": 219, "name": "ENRIQUE FOSTER RESERVA BONARDA", "category": "ESTANTERIA CABERNET - BLEND", "price": 22000, "stock": 5},
  {"id": 220, "name": "MAURICIO LORCA POETICO SYRAH", "category": "ESTANTERIA CABERNET - BLEND", "price": 20200, "stock": 8},
  {"id": 221, "name": "LAMBORGHINI CABERNET SAUVIGNON", "category": "ESTANTERIA CABERNET - BLEND", "price": 22500, "stock": 23},
  {"id": 222, "name": "PASIONADO 4 CEPAS", "category": "ESTANTERIA CABERNET - BLEND", "price": 42200, "stock": 10},
  {"id": 223, "name": "ZUCCARDI TITO ZUCCARDI", "category": "ESTANTERIA CABERNET - BLEND", "price": 46000, "stock": 6},
  {"id": 224, "name": "TRAPICHE MEDALLA BLEND", "category": "ESTANTERIA CABERNET - BLEND", "price": 24800, "stock": 3},
  {"id": 225, "name": "TRIVENTO STRATUS", "category": "ESTANTERIA CABERNET - BLEND", "price": 46900, "stock": 6},
  {"id": 226, "name": "TIKAL NATURAL BIODINAMICO", "category": "ESTANTERIA CABERNET - BLEND", "price": 40900, "stock": 12},
  {"id": 227, "name": "ESTANCIA LOS CARDONES TIGERSTONE", "category": "ESTANTERIA CABERNET - BLEND", "price": 30100, "stock": 1},
  {"id": 228, "name": "VER SACRUM MONASTRELL", "category": "ESTANTERIA CABERNET - BLEND", "price": 35100, "stock": 6},
  {"id": 229, "name": "FOND DE CAVE RESERVA CABERNET SAUVIGNON", "category": "ESTANTERIA CABERNET - BLEND", "price": 17800, "stock": 6},
  {"id": 230, "name": "URQO PALO SANTO CABERNET FRANC", "category": "ESTANTERIA CABERNET - BLEND", "price": 20100, "stock": 5},
  {"id": 231, "name": "NORTON PEDRIEL SERIES CABERNET FRANC", "category": "ESTANTERIA CABERNET - BLEND", "price": 19000, "stock": 6},
  {"id": 232, "name": "LA FLOR CABERNET SAUVIGNON", "category": "ESTANTERIA CABERNET - BLEND", "price": 20100, "stock": 2},
  {"id": 233, "name": "SIN REGLAS CABERNET SAUVIGNON", "category": "ESTANTERIA CABERNET - BLEND", "price": 18000, "stock": 8},
  {"id": 234, "name": "PENEDO BORGES CEPAS CABERNET FRANC", "category": "ESTANTERIA CABERNET - BLEND", "price": 18500, "stock": 6},
  {"id": 235, "name": "MAURICIO LORCA POETICO CABERNET FRANC", "category": "ESTANTERIA CABERNET - BLEND", "price": 20900, "stock": 12},
  {"id": 236, "name": "NORTON ALTURA CABERNET FRANC", "category": "ESTANTERIA CABERNET - BLEND", "price": 18500, "stock": 2},
  {"id": 237, "name": "CASIR DOS SANTOS CABERNET RESERVA", "category": "ESTANTERIA CABERNET - BLEND", "price": 15100, "stock": 10},
  {"id": 238, "name": "CICCHITTI COLECCION CAB SAU", "category": "ESTANTERIA CABERNET - BLEND", "price": 17800, "stock": 30},
  {"id": 239, "name": "AGOSTINO ESTATE CABERNET SAUVIGNON", "category": "ESTANTERIA CABERNET - BLEND", "price": 13000, "stock": 6},
  {"id": 240, "name": "SOMBRERO CABERNET FRANC", "category": "ESTANTERIA CABERNET - BLEND", "price": 12600, "stock": 3},
  {"id": 241, "name": "CICCHITTI SANGIOVESE 2023", "category": "ESTANTERIA CABERNET - BLEND", "price": 22000, "stock": 0},
  {"id": 242, "name": "ALBAFLOR MERLOT", "category": "ESTANTERIA CABERNET - BLEND", "price": 18000, "stock": 6},
  {"id": 243, "name": "PULENTA ESTATE", "category": "ESTANTERIA CABERNET - BLEND", "price": 21300, "stock": 0},
  {"id": 244, "name": "EL ENEMIGO", "category": "ESTANTERIA CABERNET - BLEND", "price": 26000, "stock": 0},
  {"id": 245, "name": "GIMENEZ RILI PADRES DEDICADOS PETIT VERDOT", "category": "ESTANTERIA CABERNET - BLEND", "price": 24500, "stock": 2},
  {"id": 246, "name": "NORTON LOTE NEGRO", "category": "ESTANTERIA CABERNET - BLEND", "price": 29900, "stock": 4},
  {"id": 247, "name": "CICCHITTI BLEND CAB SAUV/CAB FRANC.", "category": "ESTANTERIA CABERNET - BLEND", "price": 27600, "stock": 5},
  {"id": 248, "name": "SALENTEIN RESERVA CORTE DE TINTAS", "category": "ESTANTERIA CABERNET - BLEND", "price": 19100, "stock": 4},
  {"id": 249, "name": "RICCITELLI THE APPLE BONARDA", "category": "ESTANTERIA CABERNET - BLEND", "price": 31500, "stock": 4},
  {"id": 250, "name": "CONOSUR RESERVA ESPECIAL", "category": "ESTANTERIA CABERNET - BLEND", "price": 30000, "stock": 0},
  {"id": 251, "name": "ALTITUD CABERNET FRANC", "category": "ESTANTERIA CABERNET - BLEND", "price": 16300, "stock": 2},
  {"id": 252, "name": "ZORZAL TERROIR UNICO CAB SAUV", "category": "ESTANTERIA CABERNET - BLEND", "price": 17300, "stock": 3},
  {"id": 253, "name": "SALENTEIN RESERVA CABERNET SAUVIGNON", "category": "ESTANTERIA CABERNET - BLEND", "price": 17500, "stock": 2},
  {"id": 254, "name": "LAMBORGHINI CABERNET FRANC", "category": "ESTANTERIA CABERNET - BLEND", "price": 17800, "stock": 23},
  {"id": 255, "name": "PENEDO BORGES CEPAS CABERNET SAUVIGNON", "category": "ESTANTERIA CABERNET - BLEND", "price": 16300, "stock": 6},
  {"id": 256, "name": "ANIMAL CABERNET SAUVIGNON", "category": "ESTANTERIA CABERNET - BLEND", "price": 17500, "stock": 5},
  {"id": 257, "name": "SEPTIMA OBRA CABERNET FRANC", "category": "ESTANTERIA CABERNET - BLEND", "price": 17100, "stock": 10},
  {"id": 258, "name": "CICCHITTI COLECCION CAB SAU", "category": "ESTANTERIA CABERNET - BLEND", "price": 17800, "stock": 30},
  {"id": 259, "name": "CRIOS CABERNET SAUVIGNON", "category": "ESTANTERIA CABERNET - BLEND", "price": 12100, "stock": 5},
  {"id": 260, "name": "DOÑA PAULA ESTATE CABERNET SAUVIGNON", "category": "ESTANTERIA CABERNET - BLEND", "price": 12000, "stock": 2},
  {"id": 261, "name": "DOÑA PAULA ESTATE BLACK EDITION", "category": "ESTANTERIA CABERNET - BLEND", "price": 14600, "stock": 2},
  {"id": 262, "name": "ALTITUD CABERNET FRANC", "category": "ESTANTERIA CABERNET - BLEND", "price": 16300, "stock": 2},
  {"id": 263, "name": "CICCHITTI 2021 CABERNET", "category": "ESTANTERIA CABERNET - BLEND", "price": 16000, "stock": 0},
  {"id": 264, "name": "CICHITTI SANGIOVESE 2022", "category": "ESTANTERIA CABERNET - BLEND", "price": 22000, "stock": 0},
  {"id": 265, "name": "CICCHITTI BLEND", "category": "ESTANTERIA CABERNET - BLEND", "price": 23000, "stock": 0},
  {"id": 266, "name": "TAPIZ MERLOT", "category": "ESTANTERIA CABERNET - BLEND", "price": 17000, "stock": 0},
  {"id": 267, "name": "RETORTUÑO SYRAH", "category": "ESTANTERIA CABERNET - BLEND", "price": 20000, "stock": 6},
  {"id": 268, "name": "LA POSTA TINTO RED BLEND", "category": "ESTANTERIA CABERNET - BLEND", "price": 18100, "stock": 6},
  {"id": 269, "name": "STELLA CRINITA AMICI MIEI", "category": "ESTANTERIA CABERNET - BLEND", "price": 20300, "stock": 13},
  {"id": 270, "name": "SALENTEIN RESERVA MERLOT", "category": "ESTANTERIA CABERNET - BLEND", "price": 14000, "stock": 0},
  {"id": 271, "name": "ALBAFLOR MERLOT", "category": "ESTANTERIA CABERNET - BLEND", "price": 18000, "stock": 6},
  {"id": 272, "name": "SEPTIMA EMBLEMA CABERNET FRANC", "category": "ESTANTERIA CABERNET - BLEND", "price": 12500, "stock": 6},
  {"id": 273, "name": "CRIOS SUSTENTA CABERNET FRANC", "category": "ESTANTERIA CABERNET - BLEND", "price": 11800, "stock": 2},
  {"id": 274, "name": "CRUX CABERNET SAUVIGNON", "category": "ESTANTERIA CABERNET - BLEND", "price": 11300, "stock": 1},
  {"id": 275, "name": "MANOS NEGRAS CABERNET SAUVIGNON", "category": "ESTANTERIA CABERNET - BLEND", "price": 15300, "stock": 8},
  {"id": 276, "name": "VIÑALBA RESERVA CABERNET FRANC", "category": "ESTANTERIA CABERNET - BLEND", "price": 13500, "stock": 4},
  {"id": 277, "name": "PASCUAL TOSO ESTATE CABERNET SAUVIGNON", "category": "ESTANTERIA CABERNET - BLEND", "price": 13600, "stock": 6},
  {"id": 278, "name": "GRAZIE MILLE AMISTAD CABERNET SAUVIGNON", "category": "ESTANTERIA CABERNET - BLEND", "price": 11800, "stock": 18},
  {"id": 279, "name": "SAINT FELICIEN CABERNET SAUVIGNON", "category": "ESTANTERIA CABERNET - BLEND", "price": 15900, "stock": 4},
  {"id": 280, "name": "CASA AGOSTINO CABERNET FRANC", "category": "ESTANTERIA CABERNET - BLEND", "price": 9800, "stock": 5},
  {"id": 281, "name": "AMANSADO JOVEN CABERNET SAUV", "category": "ESTANTERIA CABERNET - BLEND", "price": 12000, "stock": 11},
  {"id": 282, "name": "LAS PERDICES CLASICO CABERNET SAUVIGNON", "category": "ESTANTERIA CABERNET - BLEND", "price": 9900, "stock": 2},
  {"id": 283, "name": "ALPAMANTA CS - CF", "category": "ESTANTERIA CABERNET - BLEND", "price": 16500, "stock": 3},
  {"id": 284, "name": "LAMBORGHINI BLEND", "category": "ESTANTERIA CABERNET - BLEND", "price": 15500, "stock": 3},
  {"id": 285, "name": "TRAPICHE RESERVA MERLOT", "category": "ESTANTERIA CABERNET - BLEND", "price": 12100, "stock": 3},
  {"id": 286, "name": "YUNKA BLEND", "category": "ESTANTERIA CABERNET - BLEND", "price": 13100, "stock": 6},
  {"id": 287, "name": "ALBAFLOR CORTE DE TINTAS", "category": "ESTANTERIA CABERNET - BLEND", "price": 13200, "stock": 9},
  {"id": 288, "name": "1300 MERLOT", "category": "ESTANTERIA CABERNET - BLEND", "price": 9900, "stock": 11},
  {"id": 289, "name": "SOTTANO CLASICO MERLOT", "category": "ESTANTERIA CABERNET - BLEND", "price": 9800, "stock": 4},
  {"id": 290, "name": "SANTA JULIA RESERVA SYRAH", "category": "ESTANTERIA CABERNET - BLEND", "price": 8400, "stock": 4},
  {"id": 291, "name": "LA FLOR RED BLEND", "category": "ESTANTERIA CABERNET - BLEND", "price": 18600, "stock": 5},
  {"id": 292, "name": "CASIR DOS SANTOS PETIT VERDOT RESERVA", "category": "ESTANTERIA CABERNET - BLEND", "price": 13900, "stock": 14},
  {"id": 293, "name": "CASCARRABIAS LAMBRUSCO GASPARROSA", "category": "ESTANTERIA CABERNET - BLEND", "price": 10100, "stock": 6},
  {"id": 294, "name": "SIN REGLAS ASSEMBLAGE", "category": "ESTANTERIA CABERNET - BLEND", "price": 18000, "stock": 2},
  {"id": 295, "name": "SANTA JULIA RESERVA CABERNET SAUVIGNON", "category": "ESTANTERIA CABERNET - BLEND", "price": 8400, "stock": 5},
  {"id": 296, "name": "1300 CABERNET FRANC", "category": "ESTANTERIA CABERNET - BLEND", "price": 10500, "stock": 2},
  {"id": 297, "name": "ALAMOS CABERNET SAUVIGNON", "category": "ESTANTERIA CABERNET - BLEND", "price": 10000, "stock": 6},
  {"id": 298, "name": "ENRIQUE FOSTER IQUE CABERNET SAUVIGNON", "category": "ESTANTERIA CABERNET - BLEND", "price": 9700, "stock": 36},
  {"id": 299, "name": "NORTON LIBRE CABERNET SAUVIGNON", "category": "ESTANTERIA CABERNET - BLEND", "price": 9300, "stock": 18},
  {"id": 300, "name": "PORTILLO CABERNET SAUVIGNON", "category": "ESTANTERIA CABERNET - BLEND", "price": 7100, "stock": 3},
  {"id": 301, "name": "ZORRO SALVAJE CABERNET SAUVIGNON", "category": "ESTANTERIA CABERNET - BLEND", "price": 6200, "stock": 5},
  {"id": 302, "name": "FINCA FLICHMAN STATE CAB SAUV", "category": "ESTANTERIA CABERNET - BLEND", "price": 8400, "stock": 6},
  {"id": 303, "name": "SEXY FISH CABERNET FRANC", "category": "ESTANTERIA CABERNET - BLEND", "price": 8800, "stock": 4},
  {"id": 304, "name": "SOTTANO CLASICO CABERNET SAUVIGNON", "category": "ESTANTERIA CABERNET - BLEND", "price": 9800, "stock": 6},
  {"id": 305, "name": "ALAMBRADO CABERNET FRANC", "category": "ESTANTERIA CABERNET - BLEND", "price": 9200, "stock": 4},
  {"id": 306, "name": "ALAMOS RED BLEND", "category": "ESTANTERIA CABERNET - BLEND", "price": 9600, "stock": 6},
  {"id": 307, "name": "PORTILLO CABERNET SAUVIGNON", "category": "ESTANTERIA CABERNET - BLEND", "price": 7100, "stock": 3},
  {"id": 308, "name": "CASA AGOSTINO CABERNET SAUVIGNON", "category": "ESTANTERIA CABERNET - BLEND", "price": 10300, "stock": 6},
  {"id": 309, "name": "ALAMBRADO BONARDA", "category": "ESTANTERIA CABERNET - BLEND", "price": 9200, "stock": 8},
  {"id": 310, "name": "CHUPASANGRE BLEND", "category": "ESTANTERIA CABERNET - BLEND", "price": 9000, "stock": 32},
  {"id": 311, "name": "ENRIQUE FOSTER IQUE BONARDA", "category": "ESTANTERIA CABERNET - BLEND", "price": 9700, "stock": 11},
  {"id": 312, "name": "OTRA COSA", "category": "ESTANTERIA CABERNET - BLEND", "price": 7600, "stock": 0},
  {"id": 313, "name": "ENTRE AMIGOS", "category": "ESTANTERIA CABERNET - BLEND", "price": 9100, "stock": 0},
  {"id": 314, "name": "SANTA JULIA LA SELECCION", "category": "ESTANTERIA CABERNET - BLEND", "price": 9500, "stock": 0},

  //ESPUMANTES
  {"id": 315, "name": "ALMA NEGRA BRUT NATURE ROSÉ", "category": "ESPUMANTES", "price": 37600, "stock": 5},
  {"id": 316, "name": "ZUCCARDI ALMA 4 CHARDONNAY ESPUMANTE", "category": "ESPUMANTES", "price": 37300, "stock": 6},
  {"id": 317, "name": "ROSELL BOHER BRUT ROSE", "category": "ESPUMANTES", "price": 50100, "stock": 0},
  {"id": 318, "name": "ROSELL BOHER BRUT", "category": "ESPUMANTES", "price": 44800, "stock": 6},
  {"id": 319, "name": "BARON B BRUT ROSE", "category": "ESPUMANTES", "price": 51500, "stock": 6},
  {"id": 320, "name": "CRUZAT CUVEE NATURE", "category": "ESPUMANTES", "price": 30100, "stock": 4},
  {"id": 321, "name": "CRUZAT CUVEE EXTRA BRUT", "category": "ESPUMANTES", "price": 30100, "stock": 5},
  {"id": 322, "name": "CRUZAT CUVEE ROSE", "category": "ESPUMANTES", "price": 30100, "stock": 11},
  {"id": 323, "name": "MAURICIO LORCA LOIS BLANC THE BLANCS", "category": "ESPUMANTES", "price": 22300, "stock": 6},
  {"id": 324, "name": "MAURICIO LORCA LOIS ROSE", "category": "ESPUMANTES", "price": 24400, "stock": 6},
  {"id": 325, "name": "MAURICIO LORCA LOIS DULCE NATURAL", "category": "ESPUMANTES", "price": 24400, "stock": 6},
  {"id": 326, "name": "CRUZAT PREMIER NATURE", "category": "ESPUMANTES", "price": 21900, "stock": 5},
  {"id": 327, "name": "CRUZAT NARANJO EXTRA BRUT CHARD. MACERACION CARBONICA", "category": "ESPUMANTES", "price": 24600, "stock": 2},
  {"id": 328, "name": "CRUZAT ICE DULCE", "category": "ESPUMANTES", "price": 24600, "stock": 9},
  {"id": 329, "name": "ALYDA VAN SALENTEIN BRUT ROSE", "category": "ESPUMANTES", "price": 24800, "stock": 6},
  {"id": 330, "name": "ALYDA VAN SALENTEIN BRUT NATURE", "category": "ESPUMANTES", "price": 23900, "stock": 2},
  {"id": 331, "name": "NAVARRO CORREAS DULCE", "category": "ESPUMANTES", "price": 20400, "stock": 5},
  {"id": 332, "name": "NAVARRO CORREAS EXTRA BRUT", "category": "ESPUMANTES", "price": 20400, "stock": 5},
  {"id": 333, "name": "SUSANA BALBO SIGNATURE OSADIA BRUT NATURE BLANCO", "category": "ESPUMANTES", "price": 21100, "stock": 2},
  {"id": 334, "name": "CHANDON DEMI SEC", "category": "ESPUMANTES", "price": 19100, "stock": 5},
  {"id": 335, "name": "CHANDON APERITIF", "category": "ESPUMANTES", "price": 19100, "stock": 4},
  {"id": 336, "name": "CHANDON DELICE", "category": "ESPUMANTES", "price": 19100, "stock": 2},
  {"id": 337, "name": "CHANDON ROSE", "category": "ESPUMANTES", "price": 19100, "stock": 2},
  {"id": 338, "name": "CHANDON DELICE ROSE", "category": "ESPUMANTES", "price": 19100, "stock": 2},
  {"id": 339, "name": "CRUZAT PREMIER EXTRA BRUT", "category": "ESPUMANTES", "price": 21900, "stock": 5},
  {"id": 340, "name": "NORTON COSECHA ESPECIAL VINTAGE EXTRA BRUT", "category": "ESPUMANTES", "price": 18800, "stock": 7},
  {"id": 341, "name": "NORTON COSECHA ESPECIAL EXTRA BRUT", "category": "ESPUMANTES", "price": 16800, "stock": 5},
  {"id": 342, "name": "SALENTEIN ESPUMANTE ROSE", "category": "ESPUMANTES", "price": 17500, "stock": 6},
  {"id": 343, "name": "SALENTEIN ESPUMANTE EXTRA BRUT", "category": "ESPUMANTES", "price": 17000, "stock": 7},
  {"id": 344, "name": "2456 EXTRA BRUT", "category": "ESPUMANTES", "price": 18000, "stock": 5},
  {"id": 345, "name": "PROGENIE 3 BRUT ROSE", "category": "ESPUMANTES", "price": 16000, "stock": 3},
  {"id": 346, "name": "LOSANCE EXTRA BRUT CHAMPENOISE", "category": "ESPUMANTES", "price": 21100, "stock": 2},
  {"id": 347, "name": "SALENTEIN ESPUMANTE BLANC DE BLANCS", "category": "ESPUMANTES", "price": 18100, "stock": 16},
  {"id": 348, "name": "MARIA CORDONIU DULCE", "category": "ESPUMANTES", "price": 16700, "stock": 6},
  {"id": 349, "name": "SAN TELMO EXTRA BRUT", "category": "ESPUMANTES", "price": 11000, "stock": 9},
  {"id": 350, "name": "NORTON GAMBEI EXTRA BRUT", "category": "ESPUMANTES", "price": 9400, "stock": 13},
  {"id": 351, "name": "NASHA EXTRA BRUT GOLDEN", "category": "ESPUMANTES", "price": 10300, "stock": 8},
  {"id": 352, "name": "ALAMBRADO ESPUMANTE BLANC DE BLANCS", "category": "ESPUMANTES", "price": 15300, "stock": 7},
  {"id": 353, "name": "LAS PERDICES EXTRA BRUT MET CHAMP", "category": "ESPUMANTES", "price": 14200, "stock": 15},
  {"id": 354, "name": "LAS PERDICES DULCE SWEETY", "category": "ESPUMANTES", "price": 11100, "stock": 5},
  {"id": 355, "name": "LAS PERDICES", "category": "ESPUMANTES", "price": 10800, "stock": 0},
  {"id": 356, "name": "PARTRIDGE EXTRA BRUT", "category": "ESPUMANTES", "price": 10000, "stock": 4},
  {"id": 357, "name": "CINZANO PRO SPRITZ", "category": "ESPUMANTES", "price": 15500, "stock": 17},
  {"id": 358, "name": "NAVARRO CORREA BRUT ROSE", "category": "ESPUMANTES", "price": 20400, "stock": 1},
  {"id": 359, "name": "NAVARRO CORREAS NATURE", "category": "ESPUMANTES", "price": 24500, "stock": 3},
  {"id": 360, "name": "MI ESPIRITU LIBRE", "category": "ESPUMANTES", "price": 12000, "stock": 1},
  {"id": 361, "name": "PASCUAL TOSO EXTRA BRUT", "category": "ESPUMANTES", "price": 11800, "stock": 8},
  {"id": 362, "name": "ESPUMANTE MUMM CUVEE RESERVA BRUT", "category": "ESPUMANTES", "price": 9300, "stock": 6},

  //VINOS BLANCOS
  {"id": 363, "name": "PENEDO BORGES CEPAS SAUVIGNON BLANC", "category": "VINOS BLANCOS", "price": 23700, "stock": 4},
  {"id": 364, "name": "ACHAVAL FERRER QUIMERINO BLANCO", "category": "VINOS BLANCOS", "price": 26000, "stock": 5},
  {"id": 365, "name": "LOS HAROLDOS GRAN BLANC", "category": "VINOS BLANCOS", "price": 26500, "stock": 4},
  {"id": 366, "name": "ANDELUNA ED. LIMITADA BLANC DE FRANC", "category": "VINOS BLANCOS", "price": 33800, "stock": 6},
  {"id": 367, "name": "LA CAYETANA PEDRO XIMENEZ", "category": "VINOS BLANCOS", "price": 31700, "stock": 6},
  {"id": 368, "name": "CONO SUR RESERVA ESPECIAL", "category": "VINOS BLANCOS", "price": 23000, "stock": 0},
  {"id": 369, "name": "LAS PERDICES EXPLORACION SAUVIGNON BLANC", "category": "VINOS BLANCOS", "price": 24200, "stock": 3},
  {"id": 370, "name": "PULENTA STATE SAUVIGNON BLANC", "category": "VINOS BLANCOS", "price": 24700, "stock": 2},
  {"id": 371, "name": "TRAPICHE MEDALLA CHARDONNAY", "category": "VINOS BLANCOS", "price": 25600, "stock": 2},
  {"id": 372, "name": "ACHAVAL FERRER QUIMERA BLANCO", "category": "VINOS BLANCOS", "price": 63000, "stock": 3},
  {"id": 373, "name": "SUSANA BALBO SIGNATURE", "category": "VINOS BLANCOS", "price": 48400, "stock": 0},
  {"id": 374, "name": "COSTA & PAMPA RIESLING", "category": "VINOS BLANCOS", "price": 25500, "stock": 4},
  {"id": 375, "name": "MARIFLOR SAUVIGNON BLANC", "category": "VINOS BLANCOS", "price": 33800, "stock": 3},
  {"id": 376, "name": "OMEGGIO PET NAT", "category": "VINOS BLANCOS", "price": 26000, "stock": 0},
  {"id": 377, "name": "SUSANA BALBO SIGNATURE TORRONTES", "category": "VINOS BLANCOS", "price": 32900, "stock": 1},
  {"id": 378, "name": "PIATELLI RESERVE - CHARDONNAY (MENDOZA)", "category": "VINOS BLANCOS", "price": 17700, "stock": 2},
  {"id": 379, "name": "MALAMADO VIOGNIER 500ML", "category": "VINOS BLANCOS", "price": 19900, "stock": 8},
  {"id": 380, "name": "NORTON ALTURA SEMILLON", "category": "VINOS BLANCOS", "price": 18500, "stock": 5},
  {"id": 381, "name": "LAMBORGHINI CHARDONNAY", "category": "VINOS BLANCOS", "price": 18600, "stock": 6},
  {"id": 382, "name": "PIATELLI RESERVE - ROSE (MENDOZA)", "category": "VINOS BLANCOS", "price": 17700, "stock": 3},
  {"id": 383, "name": "MAURICIO LORCA POETICO CHARDONNAY", "category": "VINOS BLANCOS", "price": 19500, "stock": 6},
  {"id": 384, "name": "DEMENCIAL BLAN DE BLANC", "category": "VINOS BLANCOS", "price": 21700, "stock": 4},
  {"id": 385, "name": "RUTINI COLECCION SAUVIGNON BLANC", "category": "VINOS BLANCOS", "price": 22700, "stock": 3},
  {"id": 386, "name": "PULENTA STATE MERLOT ROSE", "category": "VINOS BLANCOS", "price": 21300, "stock": 6},
  {"id": 387, "name": "SIMBIOSIS PET NAT SYRAH", "category": "VINOS BLANCOS", "price": 22000, "stock": 6},
  {"id": 388, "name": "HUMBERTO CANALE OLD VINEYARD RIESLING", "category": "VINOS BLANCOS", "price": 25000, "stock": 6},
  {"id": 389, "name": "CATALPA CHARDONNAY", "category": "VINOS BLANCOS", "price": 25000, "stock": 1},
  {"id": 390, "name": "CICCHITTI COLECCION NECTAR", "category": "VINOS BLANCOS", "price": 17800, "stock": 5},
  {"id": 391, "name": "PADRILLOS TRIFECTA", "category": "VINOS BLANCOS", "price": 13700, "stock": 3},
  {"id": 392, "name": "ESCORIHUELA GASCON CHARDONNAY", "category": "VINOS BLANCOS", "price": 14200, "stock": 2},
  {"id": 393, "name": "ANDELUNA ED. LIMITADA TORRONTES", "category": "VINOS BLANCOS", "price": 13600, "stock": 7},
  {"id": 394, "name": "ANIMAL BLEND DE BLANCAS", "category": "VINOS BLANCOS", "price": 21400, "stock": 4},
  {"id": 395, "name": "ALTAVISTA ESTATE PREMIUM CHARDONNAY", "category": "VINOS BLANCOS", "price": 14100, "stock": 4},
  {"id": 396, "name": "PALA CORAZON SAUVIGNON BLANC", "category": "VINOS BLANCOS", "price": 13400, "stock": 4},
  {"id": 397, "name": "ALTITUD CHARDONNAY", "category": "VINOS BLANCOS", "price": 16500, "stock": 5},
  {"id": 398, "name": "ANDELUNA ED. LIMITADA MALBEC ROSE", "category": "VINOS BLANCOS", "price": 13600, "stock": 7},
  {"id": 399, "name": "CRIOS CHARDONNAY", "category": "VINOS BLANCOS", "price": 13600, "stock": 2},
  {"id": 400, "name": "PADRILLOS ROSE", "category": "VINOS BLANCOS", "price": 13400, "stock": 4},
  {"id": 401, "name": "SAN PEDRO DE YACOCHUYA TORRONTES", "category": "VINOS BLANCOS", "price": 15200, "stock": 4},
  {"id": 402, "name": "ALTAVISTA ESTATE PREMIUM CHARDONNAY", "category": "VINOS BLANCOS", "price": 14100, "stock": 4},
  {"id": 403, "name": "LAS PERDICES RESERVA CHARDONNAY", "category": "VINOS BLANCOS", "price": 14500, "stock": 1},
  {"id": 404, "name": "SANTA JULIA VARIETAL CHARDONNAY", "category": "VINOS BLANCOS", "price": 10400, "stock": 2},
  {"id": 405, "name": "COQUENA ROSADO", "category": "VINOS BLANCOS", "price": 10200, "stock": 4},
  {"id": 406, "name": "COQUENA TORRONTES", "category": "VINOS BLANCOS", "price": 12400, "stock": 3},
  {"id": 407, "name": "ALBAFLOR SAUVIGNO BLANC", "category": "VINOS BLANCOS", "price": 13000, "stock": 2},
  {"id": 408, "name": "CRIOS ROSE", "category": "VINOS BLANCOS", "price": 13600, "stock": 4},
  {"id": 409, "name": "LA ZULEMA SAUVIGNON BLANC", "category": "VINOS BLANCOS", "price": 9100, "stock": 4},
  {"id": 410, "name": "LA FLOR SAUVIGNON BLANC", "category": "VINOS BLANCOS", "price": 14200, "stock": 6},
  {"id": 411, "name": "LA FLOR ROSADO", "category": "VINOS BLANCOS", "price": 13500, "stock": 1},
  {"id": 412, "name": "EMILIA COCKTAIL CLAREA", "category": "VINOS BLANCOS", "price": 11900, "stock": 5},
  {"id": 413, "name": "EMILIA COCKTAIL SPRITZ", "category": "VINOS BLANCOS", "price": 11900, "stock": 4},
  {"id": 414, "name": "EMILIA COCKTAIL ROSE", "category": "VINOS BLANCOS", "price": 11900, "stock": 5},
  {"id": 415, "name": "EMILIA COCKTAIL SANGRIA MALBEC", "category": "VINOS BLANCOS", "price": 11900, "stock": 6},
  {"id": 416, "name": "ALAMBRADO BLANCO", "category": "VINOS BLANCOS", "price": 10600, "stock": 0},
  {"id": 417, "name": "FABRE MONTMAYOU CLASICO CHARDONNAY", "category": "VINOS BLANCOS", "price": 11100, "stock": 2},
  {"id": 418, "name": "CRIOS DULCE NATURAL", "category": "VINOS BLANCOS", "price": 13600, "stock": 3},
  {"id": 419, "name": "CHAÑARES ROSE", "category": "VINOS BLANCOS", "price": 12300, "stock": 0},
  {"id": 420, "name": "CHAÑARES SAUVIGNON BLANC", "category": "VINOS BLANCOS", "price": 14400, "stock": 2},
  {"id": 421, "name": "PORTILLO ROSE MALBEC", "category": "VINOS BLANCOS", "price": 7100, "stock": 5},
  {"id": 422, "name": "PORTILLO CHARDONNAY", "category": "VINOS BLANCOS", "price": 7200, "stock": 3},
  {"id": 423, "name": "PORTILLO DULCE NATURAL", "category": "VINOS BLANCOS", "price": 7100, "stock": 6},
  {"id": 424, "name": "SANTA JULIA VARIETAL CHARDONNAY", "category": "VINOS BLANCOS", "price": 9300, "stock": 0},
  {"id": 425, "name": "LAS PERDICES CLASICO SAUVIGNON BLANC", "category": "VINOS BLANCOS", "price": 9600, "stock": 0},
  {"id": 426, "name": "RAICES CHARDONNAY", "category": "VINOS BLANCOS", "price": 7700, "stock": 6},
  {"id": 427, "name": "TRIVENTO RESERVA WHITE MALBEC", "category": "VINOS BLANCOS", "price": 9600, "stock": 2},
  {"id": 428, "name": "NORTON LIBRE GRUNER VELTINER", "category": "VINOS BLANCOS", "price": 10500, "stock": 3},
  {"id": 429, "name": "AZUL CLASICO SAUVIGNON BLANC", "category": "VINOS BLANCOS", "price": 9600, "stock": 6},
  {"id": 430, "name": "KILLKA SAUVIGNON BLANC", "category": "VINOS BLANCOS", "price": 10200, "stock": 1},
  {"id": 431, "name": "SANTA JULIA EL ZORRITO NARANJO", "category": "VINOS BLANCOS", "price": 18300, "stock": 6},
  {"id": 432, "name": "SANTA JULIA LA OVEJA", "category": "VINOS BLANCOS", "price": 20300, "stock": 0},
  {"id": 433, "name": "CAMPO DEL CIELO 2020", "category": "VINOS BLANCOS", "price": 29500, "stock": 6},
  {"id": 434, "name": "MARA SEMILLON", "category": "VINOS BLANCOS", "price": 25000, "stock": 1},
  {"id": 435, "name": "COSMOVISON NARANJO CHARDONNAY", "category": "VINOS BLANCOS", "price": 36000, "stock": 5},
  {"id": 436, "name": "MENDEL SEMILLON", "category": "VINOS BLANCOS", "price": 25100, "stock": 6},
  {"id": 437, "name": "ANIMAL CHARDONNAY", "category": "VINOS BLANCOS", "price": 20700, "stock": 4},
  {"id": 438, "name": "CICCHITTI COLECCION NECTAR", "category": "VINOS BLANCOS", "price": 17800, "stock": 5},
  {"id": 439, "name": "PASCUAL TOSO ESTATE SAUVIGNON BLANC", "category": "VINOS BLANCOS", "price": 13600, "stock": 6},
  {"id": 440, "name": "NICASSIA BLANC DE BLANCS VIOGNIER", "category": "VINOS BLANCOS", "price": 11800, "stock": 6},
  {"id": 441, "name": "ROSELL BOHER - CASA BOHER SAUVIGNON BLANC", "category": "VINOS BLANCOS", "price": 15200, "stock": 3},
  {"id": 442, "name": "SERBAL SAUVIGNON BLANC", "category": "VINOS BLANCOS", "price": 15900, "stock": 6},
  {"id": 443, "name": "CRIOS TORRONTES", "category": "VINOS BLANCOS", "price": 13600, "stock": 0},
  {"id": 444, "name": "ENCUENTRO CHARDONNAY", "category": "VINOS BLANCOS", "price": 17400, "stock": 6},
  {"id": 445, "name": "PIEDRA NEGRA ALTA COLECCION PINOT GRIS", "category": "VINOS BLANCOS", "price": 15900, "stock": 12},
  {"id": 446, "name": "LA POSTA BLANCO WHITE BLEND", "category": "VINOS BLANCOS", "price": 16900, "stock": 1},
  {"id": 447, "name": "TIGRIS TORRONTES", "category": "VINOS BLANCOS", "price": 12800, "stock": 30},
  {"id": 448, "name": "1300 CHARDONNAY", "category": "VINOS BLANCOS", "price": 10200, "stock": 6},
  {"id": 449, "name": "1300 SAUVIGNON BLANC", "category": "VINOS BLANCOS", "price": 10500, "stock": 6},
  {"id": 450, "name": "LA ZULEMA SAUVIGNON BLANC", "category": "VINOS BLANCOS", "price": 9100, "stock": 6},
  {"id": 451, "name": "TILIA ORGANICO CHENIN", "category": "VINOS BLANCOS", "price": 11700, "stock": 6},
  {"id": 452, "name": "CASA AGOSTINO CHARDONNAY", "category": "VINOS BLANCOS", "price": 10400, "stock": 6},
  {"id": 453, "name": "MAE SAUVIGNON BLANC", "category": "VINOS BLANCOS", "price": 11300, "stock": 6},
  {"id": 454, "name": "NORTON COSECHA TARDIA BLANCO", "category": "VINOS BLANCOS", "price": 5500, "stock": 90},

  //GIN BOX
  {"id": 455, "name": "GIN BOX PREMIUN", "category": "GIN BOX", "price": 9500, "stock": 2},
  {"id": 456, "name": "GIN BOX", "category": "GIN BOX", "price": 7500, "stock": 6},
  {"id": 457, "name": "GIN BOX CIRCULAR", "category": "GIN BOX", "price": 5000, "stock": 4},

  // PROMOS EXTRAÍDAS DEL EXCEL
  {"id":458,"name":"VARIETAL: TRIO MALBEC (DESQUICIADO / PASCUAL TOSO / SEPTIMA EMBLEMA)","category":"VARIETAL MALBEC","price":35900,"stock":1},
  {"id":459,"name":"VARIETAL: TRIO CABERNET (ENRIQUE FOSTER IQUE / CASA AGOSTINO / CASIR DOS SANTOS)","category":"VARIETAL CABERNET","price":29900,"stock":1},
  {"id":460,"name":"PROMO: CHAÑARES MALBEC","category":"PROMOS MALBEC","price":7000,"stock":34},
  {"id":461,"name":"PROMO: PRIMMO MALBEC","category":"PROMOS MALBEC","price":13800,"stock":18},
  {"id":462,"name":"PROMO: GRAZIE MILLE AMISTAD CABERNET SAUVIGNON","category":"PROMOS CABERNET","price":8700,"stock":18},
  {"id":463,"name":"PROMO: AMANSADO JOVEN CABERNET SAUV","category":"PROMOS CABERNET","price":9200,"stock":11},
  {"id":464,"name":"PROMO: NORTON COSECHA TARDIA BLANCO","category":"PROMOS BLANCOS","price":4000,"stock":90},

  //GASEOSAS
  {"id": 465, "name": "COCA COLA COMUN 2,5L", "category": "GASEOSAS", "price": 6500, "stock": 21},
  {"id": 466, "name": "COCA COLA COMUN 500ml", "category": "GASEOSAS", "price": 2500, "stock": 6},
  {"id": 467, "name": "COCA COLA ZERO 2,5L", "category": "GASEOSAS", "price": 6500, "stock": 6},
  {"id": 468, "name": "SPRITE COMUN 2,25L", "category": "GASEOSAS", "price": 6000, "stock": 11},
  {"id": 469, "name": "SPRITE ZERO 2,25L", "category": "GASEOSAS", "price": 6000, "stock": 6},
  {"id": 470, "name": "AGUA 500ml", "category": "GASEOSAS", "price": 1300, "stock": 6},
  {"id": 471, "name": "AGUA 2L", "category": "GASEOSAS", "price": 1900, "stock": 6},
  {"id": 472, "name": "SODA 2,25L", "category": "GASEOSAS", "price": 1650, "stock": 14},
  {"id": 473, "name": "PASO DE LOS TOROS TONICA", "category": "GASEOSAS", "price": 4500, "stock": 13},
  {"id": 474, "name": "SCHWEEPES POMELO", "category": "GASEOSAS", "price": 5000, "stock": 2},
  {"id": 475, "name": "SCHWEEPES TONICA", "category": "GASEOSAS", "price": 5500, "stock": 1},
  {"id": 476, "name": "PASO DE LOS TOROS POMELO", "category": "GASEOSAS", "price": 4500, "stock": 12},
  {"id": 477, "name": "RED BULL", "category": "GASEOSAS", "price": 3800, "stock": 1},
  {"id": 478, "name": "CITRIC NARANJA", "category": "GASEOSAS", "price": 6000, "stock": 2},
  {"id": 479, "name": "CITRIC POMELO", "category": "GASEOSAS", "price": 6000, "stock": 2},
  {"id": 480, "name": "SOL Y FRUTA NARANJA", "category": "GASEOSAS", "price": 6800, "stock": 1},
  {"id": 481, "name": "SOL Y FRUTA POMELO", "category": "GASEOSAS", "price": 6800, "stock": 1},
  {"id": 482, "name": "SPEED", "category": "GASEOSAS", "price": 2400, "stock": 6},

  //CERVEZAS
  {"id": 483, "name": "ANDES RUBIA LATA", "category": "CERVEZAS", "price": 3800, "stock": 12},
  {"id": 484, "name": "ANDES IPA LATA", "category": "CERVEZAS", "price": 3800, "stock": 6},
  {"id": 485, "name": "QUILMES CLASICA LATA", "category": "CERVEZAS", "price": 2300, "stock": 4},
  {"id": 486, "name": "HEINEKEN LATA", "category": "CERVEZAS", "price": 3500, "stock": 3},
  {"id": 487, "name": "ANDES ROJA LATA", "category": "CERVEZAS", "price": 4200, "stock": 2},
  {"id": 488, "name": "PATAGONIA AMBER LATA", "category": "CERVEZAS", "price": 4800, "stock": 6},
  {"id": 489, "name": "PATAGONIA IPA", "category": "CERVEZAS", "price": 4800, "stock": 6},
  {"id": 490, "name": "ANDES IPA 1L", "category": "CERVEZAS", "price": 5500, "stock": 4},
  {"id": 491, "name": "ANDES RUBIA 1L", "category": "CERVEZAS", "price": 5100, "stock": 4},
  {"id": 492, "name": "ANDES COMUN 1L", "category": "CERVEZAS", "price": 5000, "stock": 3},
  {"id": 493, "name": "BUDWEISER 1L", "category": "CERVEZAS", "price": 4200, "stock": 4},
  {"id": 494, "name": "QUILMES STOUT 1L", "category": "CERVEZAS", "price": 4200, "stock": 3},
  {"id": 495, "name": "CORONA", "category": "CERVEZAS", "price": 3800, "stock": 12},
  {"id": 496, "name": "CORONA SIN ALCOHOL", "category": "CERVEZAS", "price": 3100, "stock": 12},
];

const STORAGE_PRODS_KEY = "el_ciervo_products_v4";
const STORAGE_SALES_KEY = "el_ciervo_sales_v4";
const STORAGE_VERSION_KEY = "el_ciervo_catalog_version";

const STORAGE_THEME_KEY = "el_ciervo_theme_v1";
const STORAGE_ACCENT_KEY = "el_ciervo_accent_v1";
const STORAGE_COMPACT_KEY = "el_ciervo_notes_compact_v1";
const STORAGE_NOTES_KEY = "el_ciervo_todo_notes_v1";

// ESTADO GLOBAL
let products = [];
let cart = [];
let salesHistory = [];
let manualChargeOverride = null;

let todoNotes = [];
let notesFilter = "ALL";

function normalizeCat(cat) {
  return (cat || "").toString().trim().toUpperCase();
}

function parseNumInput(val) {
  if (typeof val === "number") return val;
  return parseFloat((val || "").toString().replace(",", ".").trim());
}

// INICIALIZACIÓN
document.addEventListener("DOMContentLoaded", () => {
  loadData();
  populateCategoryDropdowns();
  populateSalesFilterOptions();
  renderPosProducts();
  renderInventory();
  renderSalesHistory();
  syncChargeAndSummary();
  initThemeAndNotes();
});

function loadData() {
  const savedVersion = parseInt(localStorage.getItem(STORAGE_VERSION_KEY) || "0", 10);
  const savedProds = localStorage.getItem(STORAGE_PRODS_KEY);

  const normalizedInitial = INITIAL_PRODUCTS.map(p => ({
    ...p,
    id: Number(p.id),
    name: String(p.name || "").trim().toUpperCase(),
    category: normalizeCat(p.category),
    price: Number(p.price) || 0,
    stock: Number(p.stock) || 0
  }));

  if (!savedProds || savedVersion < CATALOG_VERSION) {
    products = normalizedInitial;
    localStorage.setItem(STORAGE_VERSION_KEY, String(CATALOG_VERSION));
    saveProducts();
  } else {
    const existing = JSON.parse(savedProds)
      .filter(p => normalizeCat(p.category) !== "VINOS BARRICAS")
      .map(p => ({
        ...p,
        id: Number(p.id),
        name: String(p.name || "").trim().toUpperCase(),
        category: normalizeCat(p.category),
        price: Number(p.price) || 0,
        stock: Number(p.stock) || 0
      }));

    const initialById = new Map(normalizedInitial.map(p => [p.id, p]));
    const mergedMap = new Map();

    normalizedInitial.forEach(initProd => {
      const savedMatch = existing.find(s => s.id === initProd.id);
      if (savedMatch) {
        mergedMap.set(initProd.id, {
          ...initProd,
          stock: savedMatch.stock
        });
      } else {
        mergedMap.set(initProd.id, { ...initProd });
      }
    });

    existing.forEach(savedProd => {
      if (!initialById.has(savedProd.id) && !mergedMap.has(savedProd.id)) {
        mergedMap.set(savedProd.id, savedProd);
      }
    });

    products = Array.from(mergedMap.values()).sort((a, b) => a.id - b.id);
    saveProducts();
  }

  const savedSales = localStorage.getItem(STORAGE_SALES_KEY);
  if (savedSales) {
    salesHistory = JSON.parse(savedSales);
  }
}

function saveProducts() {
  localStorage.setItem(STORAGE_PRODS_KEY, JSON.stringify(products));
}

function saveSales() {
  localStorage.setItem(STORAGE_SALES_KEY, JSON.stringify(salesHistory));
}

function isPromoSubcategory(category) {
  return PROMO_CATEGORIES.includes(normalizeCat(category));
}

function getStandardCategories() {
  const cats = new Set(
    products
      .map(p => normalizeCat(p.category))
      .filter(cat => cat && !isPromoSubcategory(cat) && cat !== "VINOS BARRICAS")
  );
  return Array.from(cats).sort();
}

function addOption(selectEl, value, text, disabled = false) {
  const opt = document.createElement("option");
  opt.value = value;
  opt.textContent = text;
  opt.disabled = disabled;
  selectEl.appendChild(opt);
}

function populateCategoryDropdowns(selectedPos = "ALL", selectedInv = "ALL", selectedModal = null) {
  const standardCategories = getStandardCategories();
  
  const posSelect = document.getElementById("pos-category-filter");
  const invSelect = document.getElementById("inv-category-filter");
  const modalSelect = document.getElementById("prod-category");

  posSelect.innerHTML = "";
  invSelect.innerHTML = "";
  modalSelect.innerHTML = "";

  addOption(posSelect, "ALL", "Todas las secciones");
  addOption(invSelect, "ALL", "Todas las secciones");

  standardCategories.forEach(cat => {
    addOption(posSelect, cat, cat);
    addOption(invSelect, cat, cat);
    addOption(modalSelect, cat, cat);
  });

  const totalPromos = products.filter(p => isPromoSubcategory(p.category)).length;
  addOption(posSelect, "PROMOS_ALL", `── PROMOS (TODAS: ${totalPromos}) ──`);
  addOption(invSelect, "PROMOS_ALL", `── PROMOS (TODAS: ${totalPromos}) ──`);

  PROMO_CATEGORIES.forEach(promoCat => {
    const count = products.filter(p => normalizeCat(p.category) === promoCat).length;
    addOption(posSelect, promoCat, `↳ ${promoCat} (${count})`);
    addOption(invSelect, promoCat, `↳ ${promoCat} (${count})`);
    addOption(modalSelect, promoCat, promoCat);
  });

  const normPos = normalizeCat(selectedPos);
  const normInv = normalizeCat(selectedInv);
  const normModal = selectedModal ? normalizeCat(selectedModal) : null;

  if ([...posSelect.options].some(o => o.value === normPos)) {
    posSelect.value = normPos;
  }
  if ([...invSelect.options].some(o => o.value === normInv)) {
    invSelect.value = normInv;
  }
  if (normModal && [...modalSelect.options].some(o => o.value === normModal)) {
    modalSelect.value = normModal;
  }
}

function matchesCategoryFilter(productCategory, selectedFilter) {
  const prodCat = normalizeCat(productCategory);
  const filterVal = normalizeCat(selectedFilter);
  if (!filterVal || filterVal === "ALL") return true;
  if (filterVal === "PROMOS_ALL") return isPromoSubcategory(prodCat);
  return prodCat === filterVal;
}

// NAVEGACIÓN
function switchTab(tabId, btnEl) {
  document.querySelectorAll(".tab-content").forEach(el => el.classList.remove("active"));
  document.querySelectorAll(".tab-btn").forEach(el => el.classList.remove("active"));

  document.getElementById(tabId).classList.add("active");
  if (btnEl) {
    btnEl.classList.add("active");
  }
}

// RENDER POS
function renderPosProducts() {
  const grid = document.getElementById("pos-products-grid");
  const search = document.getElementById("pos-search").value.toLowerCase();
  const category = document.getElementById("pos-category-filter").value;

  grid.innerHTML = "";

  const filtered = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search);
    const matchesCat = matchesCategoryFilter(p.category, category);
    return matchesSearch && matchesCat;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1 / -1; text-align:center; padding: 2rem; color: var(--color-texto-muted);">No hay productos en esta sección (${category}) o búsqueda.</div>`;
    return;
  }

  filtered.forEach(p => {
    const isOut = p.stock <= 0;
    const card = document.createElement("div");
    card.className = `product-card ${isOut ? 'out-of-stock' : ''}`;
    card.innerHTML = `
      <div>
        <div class="cat-tag">${p.category}</div>
        <div class="prod-name">${p.name}</div>
      </div>
      <div>
        <div class="prod-price">$${p.price.toLocaleString("es-AR")}</div>
        <div class="prod-stock">Stock: ${p.stock} u.</div>
        <button type="button" class="btn btn-primary btn-block" ${isOut ? 'disabled' : ''} onclick="addToCart(${p.id})">
          ${isOut ? 'Sin Stock' : 'Agregar'}
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// CARRITO, DESCUENTO, AJUSTE DE PRECIO Y PROCESO DE VENTA
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product || product.stock <= 0) return;

  const existing = cart.find(item => item.product.id === productId);
  if (existing) {
    if (existing.quantity < product.stock) {
      existing.quantity += 1;
    } else {
      alert("No hay más stock disponible de este producto.");
    }
  } else {
    cart.push({ product: product, quantity: 1 });
  }

  renderCart();
}

function updateCartQty(productId, delta) {
  const item = cart.find(i => i.product.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.product.id !== productId);
  } else if (item.quantity > item.product.stock) {
    item.quantity = item.product.stock;
  }

  renderCart();
}

function getCartSubtotal() {
  return cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
}

function getDiscountPercent() {
  const el = document.getElementById("discount-percent");
  if (!el) return 0;
  const raw = parseNumInput(el.value);
  if (Number.isNaN(raw) || raw < 0) return 0;
  return Math.min(raw, 100);
}

function getComputedChargeAmount() {
  const subtotal = getCartSubtotal();
  const pct = getDiscountPercent();
  const discounted = subtotal * (1 - pct / 100);
  return Math.max(0, Math.round(discounted));
}

function getCartTotal() {
  if (cart.length === 0) return 0;
  const chargeInput = document.getElementById("final-charge-amount");
  if (manualChargeOverride !== null && !Number.isNaN(manualChargeOverride)) {
    return Math.max(0, manualChargeOverride);
  }
  if (chargeInput) {
    const parsedInput = parseNumInput(chargeInput.value);
    if (!Number.isNaN(parsedInput) && parsedInput >= 0) {
      return parsedInput;
    }
  }
  return getComputedChargeAmount();
}

function setDiscount(pct) {
  manualChargeOverride = null;
  document.getElementById("discount-percent").value = pct > 0 ? pct : "";
  syncChargeAndSummary();
}

function onDiscountInput() {
  manualChargeOverride = null;
  syncChargeAndSummary();
}

function onFinalChargeInput() {
  const rawVal = document.getElementById("final-charge-amount").value;
  if (rawVal === "") {
    manualChargeOverride = null;
    updateDiscountDisplay(getCartSubtotal(), getComputedChargeAmount());
    calculateChange();
    return;
  }
  const parsed = parseNumInput(rawVal);
  manualChargeOverride = Number.isNaN(parsed) ? null : Math.max(0, parsed);
  updateDiscountDisplay(getCartSubtotal(), getCartTotal());
  calculateChange();
}

function updateDiscountDisplay(subtotal, effectiveTotal) {
  const discountEl = document.getElementById("discount-amount");
  if (!discountEl) return;
  const diff = subtotal - effectiveTotal;
  if (diff > 0) {
    discountEl.textContent = `-$${diff.toLocaleString("es-AR")}`;
  } else if (diff < 0) {
    discountEl.textContent = `+$${Math.abs(diff).toLocaleString("es-AR")} (ajuste)`;
  } else {
    discountEl.textContent = "$0";
  }
}

function syncChargeAndSummary() {
  const subtotal = getCartSubtotal();
  const subtotalEl = document.getElementById("cart-subtotal");
  const chargeInput = document.getElementById("final-charge-amount");

  if (subtotalEl) {
    subtotalEl.textContent = `$${subtotal.toLocaleString("es-AR")}`;
  }

  if (cart.length === 0) {
    manualChargeOverride = null;
    if (chargeInput) chargeInput.value = "0";
    updateDiscountDisplay(0, 0);
    calculateChange();
    return;
  }

  if (manualChargeOverride === null && chargeInput) {
    chargeInput.value = getComputedChargeAmount();
  }

  updateDiscountDisplay(subtotal, getCartTotal());
  calculateChange();
}

function renderCart() {
  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";

  if (cart.length === 0) {
    manualChargeOverride = null;
    const discInput = document.getElementById("discount-percent");
    if (discInput) discInput.value = "";
  }

  cart.forEach(item => {
    const subtotal = item.product.price * item.quantity;

    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <div class="cart-item-info">
        <div class="cart-item-title">${item.product.name}</div>
        <div class="cart-item-sub">$${item.product.price.toLocaleString("es-AR")} x ${item.quantity} = $${subtotal.toLocaleString("es-AR")}</div>
      </div>
      <div class="cart-item-controls">
        <button type="button" class="btn-qty" onclick="updateCartQty(${item.product.id}, -1)">-</button>
        <span>${item.quantity}</span>
        <button type="button" class="btn-qty" onclick="updateCartQty(${item.product.id}, 1)">+</button>
      </div>
    `;
    cartList.appendChild(row);
  });

  syncChargeAndSummary();
}

function setPayment(amount) {
  document.getElementById("payment-amount").value = amount;
  calculateChange();
}

function setExactPayment() {
  const total = getCartTotal();
  document.getElementById("payment-amount").value = total;
  calculateChange();
}

function calculateChange() {
  const total = getCartTotal();
  const payment = parseNumInput(document.getElementById("payment-amount").value) || 0;
  const change = payment - total;
  const changeEl = document.getElementById("change-due");

  if (change >= 0) {
    changeEl.textContent = `$${change.toLocaleString("es-AR")}`;
    changeEl.style.color = "var(--color-verde)";
  } else {
    changeEl.textContent = `Faltan $${Math.abs(change).toLocaleString("es-AR")}`;
    changeEl.style.color = "var(--color-rojo)";
  }
}

function clearCart() {
  cart = [];
  manualChargeOverride = null;
  document.getElementById("discount-percent").value = "";
  document.getElementById("final-charge-amount").value = "0";
  document.getElementById("payment-amount").value = "";
  renderCart();
}

function processSale() {
  if (cart.length === 0) {
    alert("El carrito está vacío.");
    return;
  }

  const subtotal = getCartSubtotal();
  const total = getCartTotal();
  const discountPct = getDiscountPercent();
  const payment = parseNumInput(document.getElementById("payment-amount").value) || 0;

  if (payment > 0 && payment < total) {
    if (!confirm("El pago ingresado es menor al total a cobrar. ¿Deseas confirmar la venta de todos modos?")) {
      return;
    }
  }

  cart.forEach(item => {
    const prod = products.find(p => p.id === item.product.id);
    if (prod) {
      prod.stock -= item.quantity;
    }
  });

  const saleRecord = {
    id: Date.now(),
    date: new Date().toISOString(),
    items: cart.map(i => ({ id: i.product.id, name: i.product.name, price: i.product.price, qty: i.quantity })),
    subtotal: subtotal,
    discountPercent: discountPct,
    paymentMethod: document.getElementById("payment-method").value,
    total: total
  };

  salesHistory.unshift(saleRecord);

  saveProducts();
  saveSales();
  populateSalesFilterOptions();

  clearCart();
  renderPosProducts();
  renderInventory();
  renderSalesHistory();
}

// INVENTARIO / MODAL
function renderInventory() {
  const tbody = document.getElementById("inventory-table-body");
  const search = document.getElementById("inv-search").value.toLowerCase();
  const category = document.getElementById("inv-category-filter").value;

  tbody.innerHTML = "";

  const filtered = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search);
    const matchesCat = matchesCategoryFilter(p.category, category);
    return matchesSearch && matchesCat;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 1.5rem; color: var(--color-texto-muted);">No hay productos en esta categoría (${category}) o búsqueda.</td></tr>`;
    return;
  }

  filtered.forEach(p => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${p.id}</td>
      <td><strong>${p.name}</strong></td>
      <td><span class="cat-tag">${p.category}</span></td>
      <td>$${p.price.toLocaleString("es-AR")}</td>
      <td>${p.stock}</td>
      <td>
        <button type="button" class="btn btn-secondary btn-sm" onclick="editProduct(${p.id})">Editar</button>
        <button type="button" class="btn btn-danger btn-sm" onclick="deleteProduct(${p.id})">Eliminar</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function openProductModal(product = null) {
  const modal = document.getElementById("product-modal");
  const title = document.getElementById("modal-title");
  
  if (product) {
    title.textContent = "Editar Producto";
    document.getElementById("prod-id").value = product.id;
    document.getElementById("prod-name").value = product.name;
    document.getElementById("prod-category").value = normalizeCat(product.category);
    document.getElementById("prod-price").value = product.price;
    document.getElementById("prod-stock").value = product.stock;
  } else {
    title.textContent = "Agregar Producto";
    document.getElementById("product-form").reset();
    document.getElementById("prod-id").value = "";
    const currentInvFilter = normalizeCat(document.getElementById("inv-category-filter").value);
    if (currentInvFilter && currentInvFilter !== "ALL" && currentInvFilter !== "PROMOS_ALL") {
      document.getElementById("prod-category").value = currentInvFilter;
    } else {
      document.getElementById("prod-category").value = "PROMOS DESTILADOS";
    }
  }

  modal.classList.add("active");
}

function closeProductModal() {
  document.getElementById("product-modal").classList.remove("active");
}

function editProduct(id) {
  const p = products.find(prod => prod.id === id);
  if (p) openProductModal(p);
}

function deleteProduct(id) {
  if (confirm("¿Estás seguro de que deseas eliminar este producto?")) {
    products = products.filter(p => p.id !== id);
    saveProducts();
    populateCategoryDropdowns();
    renderInventory();
    renderPosProducts();
  }
}

function saveProduct(e) {
  e.preventDefault();
  try {
    const id = document.getElementById("prod-id").value;
    const name = document.getElementById("prod-name").value.trim().toUpperCase();
    const category = normalizeCat(document.getElementById("prod-category").value);
    const price = parseNumInput(document.getElementById("prod-price").value);
    const stock = parseInt(document.getElementById("prod-stock").value, 10);

    if (!name || !category || Number.isNaN(price) || price < 0 || Number.isNaN(stock) || stock < 0) {
      alert("Revisá los datos del producto: nombre, categoría, precio y stock deben ser válidos.");
      return;
    }

    if (id) {
      const p = products.find(prod => String(prod.id) === String(id));
      if (p) {
        p.name = name;
        p.category = category;
        p.price = price;
        p.stock = stock;
      }
    } else {
      const newId = products.length > 0 ? Math.max(...products.map(p => Number(p.id) || 0)) + 1 : 1;
      products.push({ id: newId, name, category, price, stock });
    }

    saveProducts();
    document.getElementById("inv-search").value = "";
    document.getElementById("pos-search").value = "";
    populateCategoryDropdowns(category, category);
    closeProductModal();
    renderInventory();
    renderPosProducts();
  } catch (err) {
    console.error("Error al guardar producto:", err);
    alert("Hubo un problema al guardar el producto.");
  }
}

// HISTORIAL DE VENTAS, FILTROS Y GRÁFICO VISUAL
function populateSalesFilterOptions() {
  const yearSelect = document.getElementById("filter-year");
  const daySelect = document.getElementById("filter-day");

  const years = new Set();
  const days = new Set();

  salesHistory.forEach(s => {
    const d = new Date(s.date);
    years.add(d.getFullYear());
    days.add(d.getDate());
  });

  yearSelect.innerHTML = '<option value="ALL">Todos</option>';
  Array.from(years).sort().reverse().forEach(y => {
    yearSelect.innerHTML += `<option value="${y}">${y}</option>`;
  });

  daySelect.innerHTML = '<option value="ALL">Todos</option>';
  Array.from(days).sort((a,b) => a - b).forEach(day => {
    daySelect.innerHTML += `<option value="${day}">${day}</option>`;
  });
}

function applySalesFilters() {
  const selectedYear = document.getElementById("filter-year").value;
  const selectedMonth = document.getElementById("filter-month").value;
  const selectedDay = document.getElementById("filter-day").value;

  const filtered = salesHistory.filter(s => {
    const d = new Date(s.date);
    const matchesYear = selectedYear === "ALL" || d.getFullYear().toString() === selectedYear;
    const matchesMonth = selectedMonth === "ALL" || d.getMonth().toString() === selectedMonth;
    const matchesDay = selectedDay === "ALL" || d.getDate().toString() === selectedDay;
    return matchesYear && matchesMonth && matchesDay;
  });

  renderSalesHistoryTable(filtered);
}

function resetSalesFilters() {
  document.getElementById("filter-year").value = "ALL";
  document.getElementById("filter-month").value = "ALL";
  document.getElementById("filter-day").value = "ALL";
  renderSalesHistoryTable(salesHistory);
}

function renderSalesHistory() {
  renderSalesHistoryTable(salesHistory);
}

function renderSalesHistoryTable(list) {
  const tbody = document.getElementById("sales-table-body");
  tbody.innerHTML = "";
  let totalRevenue = 0;
  let totalUnits = 0;
  
  const paymentTotals = { "EFECTIVO": 0, "TRANSFERENCIA": 0, "TARJETA": 0 };

  list.forEach(sale => {
    totalRevenue += sale.total;
    const saleUnits = sale.items.reduce((acc, i) => acc + i.qty, 0);
    totalUnits += saleUnits;

    if (paymentTotals[sale.paymentMethod] !== undefined) {
      paymentTotals[sale.paymentMethod] += sale.total;
    } else {
      paymentTotals[sale.paymentMethod] = sale.total;
    }

    const itemsFormatted = sale.items.map(i => `${i.name} (${i.qty}u.)`).join(", ");
    const dateFormatted = new Date(sale.date).toLocaleString("es-AR");
    const ajusteNota = sale.total !== sale.subtotal && sale.subtotal
      ? ` <small style="color:var(--accent-color);">(Lista: $${sale.subtotal.toLocaleString("es-AR")})</small>`
      : "";

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${dateFormatted}</td>
      <td>${itemsFormatted}</td>
      <td><strong>${sale.paymentMethod}</strong></td>
      <td><strong>$${sale.total.toLocaleString("es-AR")}</strong>${ajusteNota}</td>
      <td>
        <button type="button" class="btn btn-danger btn-sm" onclick="deleteSale(${sale.id})">Quitar y Reponer Stock</button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  document.getElementById("metric-total-revenue").textContent = `$${totalRevenue.toLocaleString("es-AR")}`;
  document.getElementById("metric-total-count").textContent = list.length;
  document.getElementById("metric-total-units").textContent = totalUnits;

  renderSalesChart(paymentTotals, totalRevenue);
}

function renderSalesChart(paymentTotals, totalRevenue) {
  const chartEl = document.getElementById("sales-chart");
  chartEl.innerHTML = "";

  if (totalRevenue === 0) {
    chartEl.innerHTML = '<div style="font-size:0.8rem; color:var(--color-texto-muted);">No hay datos de ventas para graficar en este período.</div>';
    return;
  }

  for (const [method, amount] of Object.entries(paymentTotals)) {
    const percentage = totalRevenue > 0 ? (amount / totalRevenue) * 100 : 0;
    
    const row = document.createElement("div");
    row.className = "chart-bar-row";
    row.innerHTML = `
      <div class="chart-bar-label">${method}</div>
      <div class="chart-bar-track">
        <div class="chart-bar-fill" style="width: ${percentage}%"></div>
      </div>
      <div class="chart-bar-value">$${amount.toLocaleString("es-AR")} (${percentage.toFixed(1)}%)</div>
    `;
    chartEl.appendChild(row);
  }
}

function deleteSale(saleId) {
  const saleIndex = salesHistory.findIndex(s => s.id === saleId);
  if (saleIndex === -1) return;

  if (confirm("¿Estás seguro de eliminar esta venta? Los productos vendidos se sumarán automáticamente de vuelta al stock.")) {
    const sale = salesHistory[saleIndex];

    sale.items.forEach(soldItem => {
      const prod = products.find(p => p.id === soldItem.id || p.name === soldItem.name);
      if (prod) {
        prod.stock += soldItem.qty;
      }
    });

    salesHistory.splice(saleIndex, 1);

    saveProducts();
    saveSales();
    populateSalesFilterOptions();
    applySalesFilters();
    renderInventory();
    renderPosProducts();
  }
}

// TEMA OSCURO/CLARO Y SECCIÓN DE NOTAS / TO-DO
function initThemeAndNotes() {
  const savedTheme = localStorage.getItem(STORAGE_THEME_KEY) || "dark";
  applyTheme(savedTheme);

  const savedAccent = localStorage.getItem(STORAGE_ACCENT_KEY) || "#D4A017";
  applyAccentColor(savedAccent);

  const isCompact = localStorage.getItem(STORAGE_COMPACT_KEY) === "true";
  applyCompactNotes(isCompact);

  const savedNotes = localStorage.getItem(STORAGE_NOTES_KEY);
  if (savedNotes) {
    try {
      todoNotes = JSON.parse(savedNotes);
    } catch (_) {
      todoNotes = [];
    }
  }
  renderTodoNotes();
}

function applyTheme(theme) {
  const isLight = theme === "light";
  document.body.classList.toggle("light-theme", isLight);
  localStorage.setItem(STORAGE_THEME_KEY, isLight ? "light" : "dark");

  const btn = document.getElementById("theme-toggle-btn");
  if (btn) {
    btn.textContent = isLight ? "Modo Oscuro" : "Modo Claro";
  }
}

function toggleTheme() {
  const isCurrentlyLight = document.body.classList.contains("light-theme");
  applyTheme(isCurrentlyLight ? "dark" : "light");
}

function applyAccentColor(hexColor) {
  const safeHex = /^#[0-9A-Fa-f]{6}$/.test(hexColor) ? hexColor : "#D4A017";
  document.documentElement.style.setProperty("--accent-color", safeHex);
  localStorage.setItem(STORAGE_ACCENT_KEY, safeHex);

  const picker = document.getElementById("accent-color-picker");
  if (picker && picker.value.toLowerCase() !== safeHex.toLowerCase()) {
    picker.value = safeHex;
  }
}

function setAccentColor(hexColor) {
  applyAccentColor(hexColor);
}

function applyCompactNotes(isCompact) {
  document.body.classList.toggle("compact-notes", Boolean(isCompact));
  localStorage.setItem(STORAGE_COMPACT_KEY, String(Boolean(isCompact)));

  const toggle = document.getElementById("compact-notes-toggle");
  if (toggle) {
    toggle.checked = Boolean(isCompact);
  }
}

function toggleCompactNotes(checked) {
  applyCompactNotes(checked);
}

function saveTodoNotes() {
  localStorage.setItem(STORAGE_NOTES_KEY, JSON.stringify(todoNotes));
}

function addTodoNote(e) {
  e.preventDefault();
  const input = document.getElementById("note-text-input");
  const tagSelect = document.getElementById("note-tag-select");
  if (!input) return;

  const text = input.value.trim();
  if (!text) return;

  const tag = tagSelect ? tagSelect.value : "NOTA";

  todoNotes.unshift({
    id: Date.now(),
    text: text,
    tag: tag,
    kind: tag === "NOTA" ? "COMMENT" : "TODO",
    done: false,
    createdAt: new Date().toISOString()
  });

  saveTodoNotes();
  input.value = "";
  renderTodoNotes();
}

function editTodoNote(id) {
  const note = todoNotes.find(n => n.id === id);
  if (!note) return;

  const updatedText = prompt("Editar nota o comentario:", note.text);
  if (updatedText === null) return;

  const cleaned = updatedText.trim();
  if (!cleaned) {
    alert("El texto de la nota no puede quedar vacío.");
    return;
  }

  note.text = cleaned;
  note.updatedAt = new Date().toISOString();
  saveTodoNotes();
  renderTodoNotes();
}

function toggleTodoNote(id) {
  const note = todoNotes.find(n => n.id === id);
  if (!note) return;
  note.done = !note.done;
  saveTodoNotes();
  renderTodoNotes();
}

function deleteTodoNote(id) {
  todoNotes = todoNotes.filter(n => n.id !== id);
  saveTodoNotes();
  renderTodoNotes();
}

function clearCompletedNotes() {
  todoNotes = todoNotes.filter(n => !n.done);
  saveTodoNotes();
  renderTodoNotes();
}

function setNotesFilter(filterName, btnEl) {
  notesFilter = filterName;
  document.querySelectorAll(".filter-chip").forEach(chip => chip.classList.remove("active"));
  if (btnEl) {
    btnEl.classList.add("active");
  }
  renderTodoNotes();
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderTodoNotes() {
  const container = document.getElementById("notes-list");
  if (!container) return;

  const filtered = todoNotes.filter(note => {
    const isComment = note.kind === "COMMENT" || note.tag === "NOTA";
    if (notesFilter === "COMMENTS") return isComment;
    if (notesFilter === "PENDING") return !isComment && !note.done;
    if (notesFilter === "DONE") return !isComment && note.done;
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div class="note-empty">No hay notas ni comentarios en esta vista.</div>`;
    return;
  }

  container.innerHTML = filtered.map(note => {
    const isComment = note.kind === "COMMENT" || note.tag === "NOTA";
    const dateSource = note.updatedAt || note.createdAt;
    const dateLabel = dateSource
      ? `${note.updatedAt ? "Editado " : ""}${new Date(dateSource).toLocaleString("es-AR", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" })}`
      : "";

    const controlHtml = isComment
      ? `<span class="note-badge" data-tag="NOTA">NOTA</span>`
      : `<input type="checkbox" class="note-checkbox" ${note.done ? "checked" : ""} onchange="toggleTodoNote(${note.id})">
         <span class="note-badge" data-tag="${escapeHtml(note.tag)}">${escapeHtml(note.tag)}</span>`;

    return `
      <div class="note-item ${isComment ? "comment-note" : ""} ${!isComment && note.done ? "done" : ""}">
        <div class="note-main">
          ${controlHtml}
          <div>
            <span class="note-text">${escapeHtml(note.text)}</span>
            ${dateLabel ? `<span class="note-meta">${escapeHtml(dateLabel)}</span>` : ""}
          </div>
        </div>
        <div class="note-actions">
          <button type="button" class="btn btn-secondary btn-sm" onclick="editTodoNote(${note.id})">Editar</button>
          <button type="button" class="btn btn-danger btn-sm" onclick="deleteTodoNote(${note.id})">Eliminar</button>
        </div>
      </div>
    `;
  }).join("");
}