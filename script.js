// Obter todas as traduções
const translations = document.querySelectorAll('.translation');

// Armazenar as posições já ocupadas
const occupiedPositions = [];

// Definir o deslocamento máximo em pixels
const maxOffset = 100;

// Iterar sobre cada tradução
translations.forEach(translation => {
    // Definir posições aleatórias
    let posX = Math.random() * (window.innerWidth - maxOffset);
    let posY = Math.random() * (window.innerHeight - maxOffset);

    // Verificar se a posição está ocupada
    while (isPositionOccupied(posX, posY)) {
        posX = Math.random() * (window.innerWidth - maxOffset);
        posY = Math.random() * (window.innerHeight - maxOffset);
    }

    // Armazenar a posição ocupada
    occupiedPositions.push({ x: posX, y: posY });

    // Aplicar a posição à tradução
    translation.style.left = posX + 'px';
    translation.style.top = posY + 'px';

    // Definir uma cor aleatória
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    translation.style.color = randomColor;
});

// Função para verificar se a posição está ocupada
function isPositionOccupied(x, y) {
    for (const pos of occupiedPositions) {
        if (Math.abs(pos.x - x) < maxOffset && Math.abs(pos.y - y) < maxOffset) {
            return true;
        }
    }
    return false;
}
