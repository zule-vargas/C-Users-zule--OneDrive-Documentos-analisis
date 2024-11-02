let projectName = "cafe toro´s gourmet";

// Insertar el nombre del proyecto dinámicamente en el encabezado
document.getElementById("proyectoname").textContent = projectName;


            function showSection(sectionId) {
                // Ocultar todas las secciones
                document.getElementById('admin-options').classList.add('hidden');
                document.getElementById('empleado-options').classList.add('hidden');
                
                // Mostrar la sección seleccionada
                document.getElementById(sectionId).classList.remove('hidden');
            }

            function mostrarPantalla(pantalla) {
            const pantallas = document.querySelectorAll('.pantalla');
                pantallas.forEach(p => p.classList.remove('activa'));
    
                document.getElementById(pantalla).classList.add('activa');
}



export default Employee;


// Mostrar la pantalla de inicio por defecto al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarPantalla('inicio');
});

document.getElementById("dailyBtn").addEventListener("click", function() {
    showReport("diario");
});

document.getElementById("weeklyBtn").addEventListener("click", function() {
    showReport("semanal");
});

document.getElementById("monthlyBtn").addEventListener("click", function() {
    showReport("mensual");
});

function showReport(period) {
    let reportContent = getReportContent(period);
    document.getElementById("reportResult").innerHTML = reportContent;
}

function getReportContent(period) {
    // Aquí se puede definir la información que se desplegará para cada informe
    
}
function getReportContent(period) {
    const today = getCurrentDate();  // Obtener la fecha actual
}

function getReportContent(period) {
    let reportData  = {
        
        diario:

            <h2>Informe Diario</h2>,
            <p><strong>Fecha:</strong> "today"</p>,
            <p><strong>Ventas:</strong> 200 unidades</p>,
            <p><strong>Ingresos:</strong> $450</p>,
            <p><strong>Gastos:</strong> $200</p>,
            <p><strong>Ganancia:</strong> $250</p>
        ,
        semanal;
            <h2>Informe Semanal</h2>,
            <p><strong>Semana:</strong> 23 - 29 de septiembre</p>,
            <p><strong>Ventas:</strong> 1000 unidades</p>,
            <p><strong>Ingresos:</strong> $3000</p>,
            <p><strong>Gastos:</strong> $1200</p>,
            <p><strong>Ganancia:</strong> $1800</p>
        ,
        mensual;
            <h2>Informe Mensual</h2>,
            <p><strong>Mes:</strong> Septiembre 2024</p>,
            <p><strong>Ventas:</strong> 4500 unidades</p>,
            <p><strong>Ingresos:</strong> $13500</p>,
            <p><strong>Gastos:</strong> $6000</p>,
            <p><strong>Ganancia:</strong> $7500</p>
        
    };

    return reportData[period];  // Retorna el contenido específico del informe
}
 

// Función para mostrar el informe seleccionado
function showReport(period) {
    document.getElementById('informe').innerHTML = getReportContent(period);
}
