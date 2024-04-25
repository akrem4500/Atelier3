const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware pour parser les données JSON
app.use(bodyParser.json());

// Endpoint pour calculer la somme d'un tableau d'entiers
app.post('/somme', (req, res) => {
    const tableauEntiers = req.body;

    // Vérifier que le corps de la requête contient un tableau
    if (!Array.isArray(tableauEntiers)) {
        return res.status(400).json({ error: 'Le corps de la requête doit contenir un tableau.' });
    }

    // Calculer la somme
    const somme = tableauEntiers.reduce((acc, val) => acc + val, 0);

    res.json({ somme });
});

// Endpoint pour calculer la moyenne d'un tableau d'entiers
app.post('/moyenne', (req, res) => {
    const tableauEntiers = req.body;

    // Vérifier que le corps de la requête contient un tableau
    if (!Array.isArray(tableauEntiers)) {
        return res.status(400).json({ error: 'Le corps de la requête doit contenir un tableau.' });
    }

    // Calculer la somme
    const somme = tableauEntiers.reduce((acc, val) => acc + val, 0);

    // Calculer la moyenne
    const moyenne = somme / tableauEntiers.length;

    res.json({ moyenne });
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
