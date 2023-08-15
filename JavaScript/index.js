let nombre;
let capital;
let plazo;
let tasa;
const intereses =[];

const datosBancarios =[
    {
        nombre: "Plan 001",
        capital: 150000,
        plazo: 30,
        taza: 15
    },
    {
        nombre: "Plan 002",
        capital: 300000,
        plazo: 180,
        taza: 10
    },
    {
        nombre: "Plan 003",
        capital: 485000,
        plazo: 60,
        taza: 23
    }
]

const MostrarDatos = () => {
    for (let index = 0; index < datosBancarios.length; index++) 
        {
            alert(`Los datos del plan "${index+1} son:
            Nombre: ${JSON.stringify(datosBancarios[index].nombre)}. 
            capital: $${JSON.stringify(datosBancarios[index].capital)}.
            plazo: ${JSON.stringify(datosBancarios[index].plazo)} dias. 
            taza: ${JSON.stringify(datosBancarios[index].taza)}%.`)
        }; 
    }

const MostrarIntereses = () => {
    for (let index = 0; index < datosBancarios.length; index++) 
        {
            alert(`Los intereses del plan "${index+1} son: $${datosBancarios[index].interes}`);
        }; 
    }

const calculadora = () => {
    for (let index = 0; index < datosBancarios.length; index++) {
        let capital = datosBancarios[index].capital;   
        let plazo =  datosBancarios[index].plazo; 
        let taza =  datosBancarios[index].taza; 
        let interes = (capital*plazo*(taza/100))/100;
        datosBancarios[index].interes = interes        
    }
}

MostrarDatos();
calculadora();
MostrarIntereses();
alert(JSON.stringify(datosBancarios));
