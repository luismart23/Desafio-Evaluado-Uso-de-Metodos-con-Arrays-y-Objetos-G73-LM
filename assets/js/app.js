
const radiologiaArray = [
    { hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA' },
    { hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE' },
    { hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE' },
    { hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA' },
    { hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA' }
];

const traumatologiaArray = [
    { hora: '8:00', especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ', rut: '15554774-5', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL ARAYA', paciente: 'ANGÉLICA NAVAS', rut: '15444147-9', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'MARIA ARRIAGADA', paciente: 'ANA KLAPP', rut: '17879423-9', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'ALEJANDRO BADILLA', paciente: 'FELIPE MARDONES', rut: '1547423-6', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'CECILIA BUDNIK', paciente: 'DIEGO MARRE', rut: '16554741-K', prevision: 'FONASA' },
    { hora: '12:00', especialista: 'ARTURO CAVAGNARO', paciente: 'CECILIA MENDEZ', rut: '9747535-8', prevision: 'ISAPRE' },
    { hora: '12:30', especialista: 'ANDRES KANACRI', paciente: 'MARCIAL SUAZO', rut: '11254785-5', prevision: 'ISAPRE' }
];

const dentalArray = [
    { hora: '8:30', especialista: 'ANDREA ZUÑIGA', paciente: 'MARCELA RETAMAL', rut: '11123425-6', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'MARIA PIA ZAÑARTU', paciente: 'ANGEL MUÑOZ', rut: '9878789-2', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7998789-5', prevision: 'FONASA' },
    { hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ', rut: '18887662-K', prevision: 'FONASA' },
    { hora: '13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA' },
    { hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE' }
];

// Pacientes agregados con button
const agregarHorasArray = [
    { hora: "09:00", especialista: "RENÉ POBLETE", paciente: "ANA GELLONA", rut: "13123329-7", prevision: "ISAPRE" },
    { hora: "09:30", especialista: "MARIA SOLAR", paciente: "RAMIRO ANDRADE", rut: "12221451-K", prevision: "FONASA" },
    { hora: "10:00", especialista: "RAUL LOYOLA", paciente: "CARMEN ISLA", rut: "10112348-3", prevision: "ISAPRE" },
    { hora: "10:30", especialista: "ANTONIO LARENAS", paciente: "PABLO LOAYZA", rut: "13453234-1", prevision: "ISAPRE" },
    { hora: "12:00", especialista: "MATIAS ARAVENA", paciente: "SUSANA POBLETE", rut: "14345656-6", prevision: "FONASA" }
];

const listadoTotalPacientesArray = radiologiaArray.concat(traumatologiaArray, dentalArray);
console.log(listadoTotalPacientesArray)


// RADIOLOGIA 
// 2. Eliminar el primer y último elemento del arreglo de Radiología
// elimina el primer elemento del array
radiologiaArray.shift();
console.log(radiologiaArray);

// elimina el ultimo elemento del array
radiologiaArray.pop();
console.log(radiologiaArray);

const radiologiahtml = document.getElementById("radiologiahtml")

const table1Radiologia = document.getElementById('table1Radiologia')
table1Radiologia.innerHTML = ""
radiologiaArray.forEach((item) => {
    console.log(item)

    table1Radiologia.innerHTML += `
    <tr>
    <td scope="row">${item.hora}</td>
    <td>${item.especialista}</td>
    <td>${item.paciente}</td>
    <td>${item.rut}</td>
    <td>${item.prevision}</td>
    </tr>
    `
})



// TRAUMATOLOGIA 
const traumatologiahtml = document.getElementById("traumatologiahtml")

const addHoursButton = document.getElementById("addHoursButton")

const table2Traumatologia = document.getElementById('table2Traumatologia')
table2Traumatologia.innerHTML = ""
traumatologiaArray.forEach((item) => {
    // console.log(item)
    table2Traumatologia.innerHTML += `
    <tr>
    <td scope="row">${item.hora}</td>
    <td>${item.especialista}</td>
    <td>${item.paciente}</td>
    <td>${item.rut}</td>
    <td>${item.prevision}</td>
    </tr>
    `
})
// 1. Agregar las siguientes horas al arreglo de Traumatología
addHoursButton.addEventListener('click', () => {
    agregarHorasArray.forEach((item) => {
        // console.log(item)
        table2Traumatologia.innerHTML += `
    <tr>
    <td scope="row">${item.hora}</td>
    <td>${item.especialista}</td>
    <td>${item.paciente}</td>
    <td>${item.rut}</td>
    <td>${item.prevision}</td>
    </tr>
    `
    })
});

// DENTAL 
const dentalhtml = document.getElementById("dentalhtml")

const table3Dental = document.getElementById('table3Dental')
table3Dental.innerHTML = ""
dentalArray.forEach((item) => {
    // console.log(item)

    table3Dental.innerHTML += `
    <tr>
    <td scope="row">${item.hora}</td>
    <td>${item.especialista}</td>
    <td>${item.paciente}</td>
    <td>${item.rut}</td>
    <td>${item.prevision}</td>
    </tr>  `
})


// 3. Imprimir en la página HTML, la lista de consultas médicas de Dental.
const listaDental = document.getElementById("listaDental")
listaDental.innerHTML = ""

dentalArray.forEach((item) => {
    // console.log(item)

    listaDental.innerHTML += `
   <ul>
    <li>${item.hora} - ${item.especialista} - ${item.paciente} - ${item.rut} - ${item.prevision}</li>
    </ul> `
})

// 4. Imprimir un listado total de todos los pacientes que se atendieron en el centro médico. 
const listadoNombres = document.getElementById("listadoNombres")
listadoNombres.innerHTML = ""

listadoNombres.innerHTML = '<ol>';
listadoTotalPacientesArray.forEach((item) => {
    listadoNombres.innerHTML += `<li>${item.paciente}</li>`;
});
listadoNombres.innerHTML += '</ol>';

// 5. Filtrar aquellos pacientes que indican ser de ISAPRE en la lista de consultas médicas
// de Dental
const pacienteIsapre = dentalArray
    .filter(cita => cita.prevision === 'ISAPRE')
    .map(cita => `${cita.paciente} - ${cita.prevision}`);

console.log(pacienteIsapre.join('\n'));

// 6. Filtrar aquellos pacientes que indican ser de FONASA en la lista de consultas médicas
// de Traumatología
const pacienteFonasa = traumatologiaArray
    .filter(cita => cita.prevision === 'FONASA')
    .map(cita => `${cita.paciente} - ${cita.prevision}`);

console.log(pacienteFonasa.join('\n'));

// ________________FIN_________________________-