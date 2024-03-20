let currentIndex = 0;
const titles = ["FERRARI STARS SHINE IN THE DESERT NIGHT", "BAILANDO SOBRE HIELO", "CREADO PARA INSPIRAR"];
const descriptions = ["Scuderia Ferrari leaves Saudi Arabia celebrating a first podium finish of the season for Charles Leclerc", "El exclusivo Corso Pilota On-Ice brinda una oportunidad única a los conductores para perfeccionar sus habilidades de conducción en invierno al volante del Ferrari Purosangue", "Un espacio destacado de la atracción LEGO® Ferrari Build & Race de LEGOLAND® Florida lo ocupa un Ferrari 296 GTS hecho enteramente con piezas de LEGO® a tamaño real"];
const images = ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"];

function showSlide(index) {
  document.querySelector('.title').textContent = titles[index];
  document.querySelector('.description').textContent = descriptions[index];
  document.querySelector('.image').src = images[index];
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % titles.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + titles.length) % titles.length;
  showSlide(currentIndex);
}

showSlide(currentIndex);
