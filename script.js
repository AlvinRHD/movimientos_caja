document.addEventListener("DOMContentLoaded", function () {
    let movimientos = JSON.parse(localStorage.getItem("movimientos")) || [];
    actualizarTabla();
  
    document
      .getElementById("movimientoForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        let monto = parseFloat(document.getElementById("monto").value);
        let tipo = document.getElementById("tipo").value;
        let descripcion = document.getElementById("descripcion").value;
        let fecha = new Date().toLocaleDateString();
  
        if (isNaN(monto) || monto <= 0) {
          alert("Ingrese un monto válido.");
          return;
        }
  
        let movimiento = { fecha, descripcion, tipo, monto };
        movimientos.push(movimiento);
        localStorage.setItem("movimientos", JSON.stringify(movimientos));
        actualizarTabla();
        document.getElementById("movimientoForm").reset();
      });
  
    function actualizarTabla() {
      let tbody = document.getElementById("tablaMovimientos");
      tbody.innerHTML = "";
      let saldo = 0;
  
      movimientos.forEach((mov, index) => {
        let fila = `<tr>
                    <td>${mov.fecha}</td>
                    <td>${mov.descripcion}</td>
                    <td>${mov.tipo}</td>
                    <td>${
                      mov.tipo === "ingreso" ? "+$" : "-$"
                    }${mov.monto.toFixed(2)}</td>
                    <td><button onclick="eliminarMovimiento(${index})">Eliminar</button></td>
                </tr>`;
        tbody.innerHTML += fila;
        saldo += mov.tipo === "ingreso" ? mov.monto : -mov.monto;
      });
  
      document.getElementById("saldo").textContent = `$${saldo.toFixed(2)}`;
    }


//reporte
  document.getElementById("descargarReporte").addEventListener("click", function () {
    let csvContent = "Fecha,Descripción,Tipo,Monto\n"; // titulos
    movimientos.forEach(mov => {
      csvContent += `${mov.fecha},${mov.descripcion},${mov.tipo},${mov.tipo === "ingreso" ? "+" : "-"}$${mov.monto.toFixed(2)}\n`;
    });

    // Crear un enlace para descargar el archivo CSV
    let enlace = document.createElement("a");
    enlace.href = "data:text/csv;charset=utf-8," + encodeURIComponent(csvContent);
    enlace.target = "_blank";
    enlace.download = "reporte_caja_chica.csv";
    enlace.click();
  });
});
  
  function eliminarMovimiento(index) {
    let movimientos = JSON.parse(localStorage.getItem("movimientos")) || [];
    movimientos.splice(index, 1);
    localStorage.setItem("movimientos", JSON.stringify(movimientos));
    location.reload();
  }
  
