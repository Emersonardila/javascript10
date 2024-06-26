"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado
    --> Leer el README para ver el enunciado
*/


document.addEventListener('DOMContentLoaded', () => {
    const btnConsultar = document.getElementById('btnConsultar');
    const inputPersonaje = document.getElementById('personaje');
    
    btnConsultar.addEventListener('click', async () => {
      const personaje = inputPersonaje.value.trim();
      
      if (personaje) {
        try {
          const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${personaje}`);
         
          const data = await response.json();
          console.log(data); 
          
          
          mostrarResultados(data);
      } catch (error) {
        console.error('Error al obtener los datos del personaje:', error);
      }
    } else {
      console.error('Debe ingresar un nombre de personaje');
    }
  });
});

function mostrarResultados(data) {
  const resultadosSection = document.getElementById('resultados');
  
  
  resultadosSection.innerHTML = '';
  if (data.results && data.results.length > 0) {
    const personaje = data.results[0];
    
    
    const html = `
      <div>
        <h2>${personaje.name}</h2>
        <img src="${personaje.image}" alt="${personaje.name}">
        <p>Status: ${personaje.status}</p>
        <p>Especie: ${personaje.species}</p>
        <p>Origen: ${personaje.origin.name}</p>
        <p>Última ubicación: ${personaje.location.name}</p>
      </div>
    `;
    
   
    resultadosSection.innerHTML = html;
} else {
    resultadosSection.innerHTML = '<p>No se encontraron resultados para ese personaje.</p>';
  }
}