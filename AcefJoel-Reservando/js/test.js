var expect = chai.expect;
var assert = chai.assert;

describe('Testeá la función reservarHorario(horario)', function(){
    it('Cuando se reserva un horario de un restaurant, el horario correspondiente se elimina del arreglo.', function(){
        var restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00", "19:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
        var entrada = restaurant.horarios;
        var salida = restaurant.reservarHorario("13:00");
        expect(entrada).to.be.an('array').to.be.not.equal(salida)
    })
    it('Cuando se reserva un horario que el restaurant no posee, el arreglo se mantiene igual.', function(){
        var restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00", "19:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
        var entrada = restaurant.horarios;
        restaurant.reservarHorario("15:00");
        expect(entrada).to.include("13:00", "15:30", "18:00", "19:00").but.not.own.include("15:00");
    })
    it('Cuando se intenta reservar un horario pero no se le pasa ningún parámetro a la función, el arreglo se mantiene igual.', function(){
        var restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00", "19:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
        var entrada = restaurant.horarios;
        restaurant.reservarHorario();
        expect(entrada).to.include("13:00", "15:30", "18:00", "19:00");
    })
})

describe('Testeá la función obtenerPuntuación()', function(){
    it('Dado un restaurant con determinadas calificaciones, la puntuación (que es el promedio de ellas) se calcula correctamente.', function(){
        var restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00", "19:00"], "../img/asiatica1.jpg", [5,5,2]);
        var entrada = restaurant.obtenerPuntuacion()
        expect(entrada).to.be.equal(4);
    })
    it('Dado un restaurant que no tiene ninguna calificación, la puntuación es igual a 0.', function(){
        var restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00", "19:00"], "../img/asiatica1.jpg", []);
        var entrada = restaurant.obtenerPuntuacion()
        expect(entrada).to.be.equal(0);
    })
})

describe('Testeá la función calificar()', function(){
    it('La clasificacion que se pasa por parametro debe ser de tipo numerica', function(){
        var restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00", "19:00"], "../img/asiatica1.jpg", [5,5,2]);
        var entrada = 5;
        restaurant.calificar(entrada);
        expect(entrada).to.be.an('number');
    })

    it('La clasificacion que se pasa por parametro debe ser de menor que 10 y mayor o igual que 0', function(){
        var restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00", "19:00"], "../img/asiatica1.jpg", [5,5,2]);
        var entrada = 3;
        restaurant.calificar(entrada);
        assert.isAtLeast(entrada, 0, entrada+' is greater or equal to 0');
        assert.isAtMost(entrada, 10, entrada+' is less than or equal to 10');
    })
})

describe('Testeá la función buscarRestaurante(id)', function(){
    it('El id que se pasa por parametro debe ser de tipo numerico', function(){
        var listadoDeRestaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            new Restaurant(4, "Bleecker Street Pizza", "Pizza", "Nueva York", ["12:00", "15:00", "17:30"], "../img/pizza2.jpg", [8, 9, 9, 4, 6, 7]),
            new Restaurant(5, "Jolly", "Asiática", "Berlín", ["12:00", "13:30", "16:00"], "../img/asiatica3.jpg", [8, 3, 9, 5, 6, 7]),
            new Restaurant(6, "Green salad", "Ensalada", "Berlín", ["17:00", "19:00", "20:30"], "../img/ensalada2.jpg", [8, 3, 2, 1, 8, 7]),
        ];
        
        var listado = new Listado(listadoDeRestaurantes);
        var entrada = 3
        listado.buscarRestaurante(entrada);
        expect(entrada).to.be.an('number');
    })

    it('El id que se pasa por parametro no existe', function(){
        var listadoDeRestaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
        ];
        
        var listado = new Listado(listadoDeRestaurantes);
        assert.match(listado.buscarRestaurante(3), /^undefined/, 'regexp matches');

    })
})

describe('Testeá la función obtenerRestaurantes()', function(){
    it('Se hace una consoulta y se espera como resultado array con un listado de restaurantes', function(){
        var listadoDeRestaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            new Restaurant(4, "Bleecker Street Pizza", "Pizza", "Nueva York", ["12:00", "15:00", "17:30"], "../img/pizza2.jpg", [8, 9, 9, 4, 6, 7]),
            new Restaurant(5, "Jolly", "Asiática", "Berlín", ["12:00", "13:30", "16:00"], "../img/asiatica3.jpg", [8, 3, 9, 5, 6, 7]),
            new Restaurant(6, "Green salad", "Ensalada", "Berlín", ["17:00", "19:00", "20:30"], "../img/ensalada2.jpg", [8, 3, 2, 1, 8, 7]),
        ];
        var listado = new Listado(listadoDeRestaurantes);
        var entrada = listado.obtenerRestaurantes("Pizza", "Nueva York", "12:00")
        expect(entrada).to.be.an('array').to.have.lengthOf(1)
    })
})


describe('Testea los métodos del objeto Reserva', function(){
    it('Que un restaurante calcule correctamente su precio base', function(){
        var reserva1 = new Reserva(new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");
        var reserva2 = new Reserva(new Date(2018, 7, 27, 14, 100), 2, 150, "DES200") 
        var reserva1PrecioBase = reserva1.calcularPrecioBase()
        var reserva2PrecioBase = reserva2.calcularPrecioBase()
        expect(reserva1PrecioBase).to.be.equal(2800)
        expect(reserva2PrecioBase).to.be.equal(300)
    })

    it('Que un restaurante calcule correctamente su precio final', function(){
        var reserva1 = new Reserva(new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");
        var reserva2 = new Reserva(new Date(2018, 7, 27, 14, 100), 2, 150, "DES200") 
        var reserva1PrecioTotal = reserva1.calcularPrecioTotal()
        var reserva2PrecioTotal = reserva2.calcularPrecioTotal()
        expect(reserva1PrecioTotal).to.be.equal(2310)
        expect(reserva2PrecioTotal).to.be.equal(100)
    })
})

//Que un restaurante calcule correctamente su precio final, contemplando bien los descuentos y los adicionales.