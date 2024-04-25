const express = require('express');
const app = express();

// Fonction récursive pour générer un message répétitif
function generateMessage(count) {
    if (count <= 0) {
        return "Fin de la récursion.";
    }
    return `Répétition ${count}: Ceci est un message récursif.\n${generateMessage(count - 1)}`;
}

// Route GET pour répondre avec un message récursif
app.get('/', (req, res) => {
    const message = generateMessage(5); // Générer 5 répétitions
    res.send(message);
});

// Démarrer le serveur sur le port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur Express en cours d'exécution sur le port ${PORT}`);
});


// Fonction pour vérifier si un nombre est pair
function isEven(number) {
    return number % 2 === 0; // Si le reste de la division par 2 est 0, c'est pair
}

// Endpoint GET pour vérifier si un nombre est pair
app.get('/is-even/:number', (req, res) => {
    const number = parseInt(req.params.number); // Convertir le paramètre en entier
    if (isNaN(number)) {
        return res.status(400).send('Le paramètre doit être un nombre'); // Si ce n'est pas un nombre, renvoyer une erreur
    }
    const result = isEven(number); // Vérifier si le nombre est pair
    res.send(`Le nombre ${number} est ${result ? 'pair' : 'impair'}.`); // Renvoyer le résultat
});

// Démarrer le serveur sur le port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur Express en cours d'exécution sur le port ${PORT}`);
});
