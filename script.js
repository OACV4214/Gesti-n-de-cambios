function calcularMadurez() {
    var modulosAgregados = parseInt(document.getElementById("modulos-agregados").value);
    var modulosModificados = parseInt(document.getElementById("modulos-modificados").value);
    var modulosEliminados = parseInt(document.getElementById("modulos-eliminados").value);
  
    var totalModulos = modulosAgregados + modulosModificados - modulosEliminados;
  
    if (totalModulos < 0) {
      document.getElementById("resultado-madurez").innerHTML = "Error: La cantidad de módulos no puede ser negativa.";
    } else {
      var madurez;
      if (totalModulos < 3) {
        madurez = "Inicial";
      } else if (totalModulos < 6) {
        madurez = "En desarrollo";
      } else if (totalModulos < 9) {
        madurez = "Estable";
      } else if (totalModulos < 12) {
        madurez = "Maduro";
      } else {
        madurez = "Sostenible";
      }
  
      document.getElementById("resultado-madurez").innerHTML = "Nivel de madurez: " + madurez;
      
    }
  }
  
  
  
  function calcularEsfuerzo() {
    var n1 = parseInt(document.getElementById("operadores-unicos").value);
    var n2 = parseInt(document.getElementById("operandos-unicos").value);
    var N1 = parseInt(document.getElementById("total-operadores").value);
    var N2 = parseInt(document.getElementById("total-operandos").value);
  
    var longitudPrograma = N1 + N2;
    var vocabularioPrograma = n1 + n2;
    var longitudVolumen = longitudPrograma * Math.log2(vocabularioPrograma);
    var esfuerzo = ((n1/2)*(N2/n2))* longitudVolumen;
  
    document.getElementById("resultado-esfuerzo").innerHTML = "Esfuerzo de Halstead: " + esfuerzo;
  }

  function convertirAHtml(texto) {
    texto = texto.replace(/&/g, '&amp;');
    texto = texto.replace(/</g, '&lt;');
    texto = texto.replace(/>/g, '&gt;');
    texto = texto.replace(/"/g, '&quot;');
    texto = texto.replace(/'/g, '&#39;');
    texto = texto.replace(/á/g, '&aacute;');
    texto = texto.replace(/é/g, '&eacute;');
    texto = texto.replace(/í/g, '&iacute;');
    texto = texto.replace(/ó/g, '&oacute;');
    texto = texto.replace(/ú/g, '&uacute;');
    return texto;
  }
  
  function convertir() {
    let entrada = document.getElementById("entrada").value;
    let salida = document.getElementById("salida");
    salida.textContent = convertirAHtml(entrada);
  }
 
  

  

  function buscarMultiplos() {
    console.log("Iniciando búsqueda de múltiplos...");
  
    let datos = document.getElementById("datos").value;
    let numeros = document.getElementById("numeros").value;
    let resultado = document.getElementById("resultado");
  
    // Comprobar si los campos están vacíos
    if (!datos.trim() || !numeros.trim()) {
      resultado.textContent = "Por favor, ingrese los datos requeridos";
      return;
    }
  
    let nombres = datos.split(",");
    let listaNumeros = numeros.split(",").map(Number);
  
    let multiplos = nombres.filter((nombre) => {
      let edad = parseInt(nombre.split("-")[1]);
      return listaNumeros.some((numero) => {
        return edad % numero === 0;
      });
    });
  
    let nombresMultiplos = multiplos.map((nombre) => nombre.split("-")[0].trim());
    resultado.textContent = "Los siguientes nombres son múltiplos de la lista de números: " + nombresMultiplos.join(", ");
  }
