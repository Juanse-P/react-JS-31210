const perfumes = [
    { id: 1, olfactoryFamily: "Frutal", brand: "HERMÈS", title: "UN JARDIN SUR LE NIL", fastDescription: "Eau de Toilette vaporizador unisex 100 ml", description: "Un Jardin sur le Nil es un paseo impresionista por las islas-jardín del Nilo, en Asuán, punto de partida de esta nueva andanza olfativa. Mango verde, loto, incienso, cálamo y madera de sicomoro componen el corazón de esta oda refrescante.", price: 298000, image: "https://i1.perfumesclub.com/grandewp/16162-2.webp", stock: 9 }, { id: 2, olfactoryFamily: "Aromática", brand: "Giorgio Armani", title: "ACQUA DI GIÒ", fastDescription: "Eau de Toilette - Colonia vaporizador para hombre 100 ml", description: "Un gran clásico de Giorgio Armani para hombres, creado por el perfumista español Alberto Morillas en el año 1996. Tras más de 20 años, sigue siendo una fragancia de referencia: fresca y sensual, perfecta para la primavera y el verano.", price: 224000, image: "https://i1.perfumesclub.com/grandewp/931-2.webp", stock: 6 }, { id: 3, olfactoryFamily: "Chipre", brand: "Rochas", title: "EAU DE ROCHAS HOMME", fastDescription: "Eau de Toilette vaporizador para hombre 100 ml", description: "En sintonía con la frescura de la mítica Eau de Rochas para mujer, esta versión de EAU DE ROCHAS HOMME, desprende oleadas de salvaje frescura para hombres seguros de sí mismos, espontáneos, inteligentes y decididos.", price: 129000, image: "https://i1.perfumesclub.com/grandewp/3911-3.webp", stock: 14 }, { id: 4, olfactoryFamily: "Fougère", brand: "Paco Rabanne", title: "PACO RABANNE POUR HOMME", fastDescription: "Eau de Toilette - Colonia vaporizador para hombre 100 ml", description: "El sello vanguardista que ha caracterizado al diseñador Paco Rabanne se refleja en una colección de fragancias, que desde los años setenta hasta la actualidad, son creaciones de éxito absoluto en el mundo de la Alta Perfumería.", price: 163000, image: "https://i1.perfumesclub.com/grandewp/3759-3.webp", stock: 8 }, { id: 5, olfactoryFamily: "Gourmand", brand: "Nuxe", title: "NUXE SUN eau délicieuse parfumante", fastDescription: "Eau de Toilette - Colonia vaporizador unisex 100 ml", description: "Una bruma inspirada en los productos NUXE SUN que te invita a revivir el espíritu del verano con sus aromas solares y luminosos. Una combinación de notas exóticas, cálidas y florales que cubren la piel y la abrazan, como si de los primeros rayos de sol se tratase.", price: 110000, image: "https://i1.perfumesclub.com/grandewp/112797-2.webp", stock: 0 }, { id: 6, olfactoryFamily: "Floral", brand: "Carolina Herrera", title: "212 NYC MEN", fastDescription: "Eau de Toilette - Colonia vaporizador para hombre 100 ml", description: "212 Men de Carolina Herrera es un “Eau de Toilette” masculino perteneciente a la familia almizcle amaderado floral para hombres, y representa la fuerza y vitalidad que desprenden los hombres urbanitas, innovadores y seguros en sí mismos.", price: 200000, image: "https://i1.perfumesclub.com/grandewp/166221-2.webp", stock: 13 }, { id: 7, olfactoryFamily: "Oriental", brand: "Hugo Boss", title: "BOSS ORANGE MAN", fastDescription: "Eau de Toilette vaporizador para hombre 100 ml", description: "Boss Orange Man de Hugo Boss es un “Eau de Toilette” para hombre de notas amaderadas y especiadas. Se trata de una creación llena de optimismo, vitalidad y energía, y que nos invita a vivir en un mundo invadido por el bienestar y la soltura, carente de límites y prohibiciones.", price: 143000, image: "https://i1.perfumesclub.com/grandewp/31139.webp", stock: 16 }, { id: 8, olfactoryFamily: "Amaderada", brand: "Hugo Boss", title: "BOSS BOTTLED", fastDescription: "Eau de Toilette vaporizador para hombre 100 ml", description: "La fragancia del éxito. La fragancia icónica de hombre a nivel mundial que captura la elegancia de un traje en un frasco.", price: 173000, image: "https://i1.perfumesclub.com/grandewp/11557-2.webp", stock: 3 }, { id: 9, olfactoryFamily: "Especiada", brand: "Versace", title: "VERSACE L'HOMME", fastDescription: "Eau de Toilette vaporizador para hombre 100 ml", description: "Versace L'Homme es un “Eau de Toilette” para hombre perteneciente a la familia Cítrica Especiada. Se trata de un clásico en el mundo de la perfumería, un aroma viril y tradicional, con rasgos picantes y estimulantes. Un perfume elegante y sofisticado, que transmite la esencia de la marca, y se adapta perfectamente a las creaciones de la década de los 80, unos años revolucionarios en la perfumería masculina.", price: 109000, image: "https://i1.perfumesclub.com/grandewp/32686.webp", stock: 17 }, { id: 10, olfactoryFamily: "Acuática", brand: "Paco Rabanne", title: "INVICTUS", fastDescription: "Eau de Toilette - Colonia vaporizador para hombre 100 ml", description: "El perfume INVICTUS de Paco Rabanne es un “Eau de Toilette” para hombre de notas amaderadas y acuáticas. Es una creación que rompe con los anteriores perfumes masculinos de la firma, aportándole una sensación de gran frescura.", price: 257000, image: "https://i1.perfumesclub.com/grandewp/53983-5.webp", stock: 20 }, { id: 11, olfactoryFamily: "Fresca", brand: "Calvin Klein", title: "CK EVERYONE", fastDescription: "Eau de Toilette - Colonia vaporizador unisex 100 ml", description: "Calvin Klein recurre a su estilo minimalista y sin exageraciones para ofrecer un lienzo en blanco a una nueva generación con Calvin Klein CK Everyone, un eau de toilette cítrica verde, minimalista y sin género para hombre y para mujer a la vez. Una posibilidad de autoexpresión sin límites, Calvin Klein CK Everyone es un verdadero perfume unisex que defiende una visión empática de la vida y de las personas, diseñado para hombres y mujeres que hace suya la fragancia sin dejarse dominar por ella.", price: 98000, image: "https://i1.perfumesclub.com/grandewp/117841-3.webp", stock: 18 }, { id: 12, olfactoryFamily: "Cítrica", brand: "Calvin Klein", title: "CK ONE", fastDescription: "Eau de Toilette - Colonia vaporizador unisex 100 ml", description: "Joven, fresca y atemporal, CK ONE es una fragancia unisex diseñada para usar a diario. Un exquisito equilibrio entre frescura, dinamismo y personalidad, perfecta para cualquier estación del año.", price: 103000, image: "https://i1.perfumesclub.com/grandewp/4046-2.webp", stock: 20 },
];
export const getData = new Promise((resolve, reject) => {
    let condition = true
    setTimeout(() => {
        if (condition) {
            resolve(perfumes)
        } else {
            reject("La carga de productos salio mal")
        }
    }, 3000)
})