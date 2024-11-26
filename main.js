import { createServer } from 'http';
import { access, constants, readFile } from 'fs';
import { join, extname } from 'path';

// Configuration du serveur
const hostname = '127.0.0.1';
const port = 3000;

// Fonction pour déterminer le type de contenu
function getContentType(ext) {
    switch (ext) {
        case '.css':
            return 'text/css';
        case '.js':
            return 'application/javascript';
        case '.png':
            return 'image/png';
        case '.jpg':
            return 'image/jpeg';
        case '.svg':
            return 'image/svg+xml';
        case '.json':
            return 'application/json';
        default:
            return 'text/html';
    }
}

// Création du serveur
const server = createServer((req, res) => {
    // Définir le chemin vers le fichier demandé
    const filePath = join(__dirname, req.url === '/' ? 'index.html' : req.url);

    // Obtenir l'extension du fichier
    const ext = extname(filePath);

    // Définir le type de contenu
    const contentType = getContentType(ext);

    // Vérifier si le fichier demandé existe
    access(filePath, constants.F_OK, (err) => {
        if (err) {
            // Si le fichier n'existe pas, retourner une erreur 404
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Erreur 404 : Fichier non trouvé');
        } else {
            // Lire et retourner le fichier
            readFile(filePath, (err, content) => {
                if (err) {
                    // Si une erreur se produit lors de la lecture du fichier
                    res.statusCode = 500;
                    res.setHeader('Content-Type', 'text/plain');
                    res.end('Erreur 500 : Problème du serveur');
                } else {
                    // Envoyer le fichier avec le bon type de contenu
                    res.statusCode = 200;
                    res.setHeader('Content-Type', contentType);
                    res.end(content);
                }
            });
        }
    });
});

// Démarrage du serveur
server.listen(port, hostname, () => {
    console.log(`Serveur démarré à l'adresse : http://${hostname}:${port}/`);
});
