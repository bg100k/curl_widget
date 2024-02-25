import React, { useState, useEffect } from 'react';
import curlConverter from 'curlconverter';
import { TextareaAutosize, Button, CircularProgress, Typography, Box } from '@mui/material';

const CurlToSwaggerWidget = () => {
    const [curlCommand, setCurlCommand] = useState('');
    const [requestBody, setRequestBody] = useState('');
    const [swaggerData, setSwaggerData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [recentCommands, setRecentCommands] = useState([]);

    useEffect(() => {
        // Charger les commandes récentes du stockage local au démarrage
        const loadedCommands = localStorage.getItem('recentCurlCommands');
        if (loadedCommands) {
            setRecentCommands(JSON.parse(loadedCommands));
        }
    }, []);

    useEffect(() => {
        // Sauvegarder les commandes récentes dans le stockage local à chaque modification
        localStorage.setItem('recentCurlCommands', JSON.stringify(recentCommands));
    }, [recentCommands]);

    const convertCurlToSwagger = async () => {
        setIsLoading(true);
        try {
            // Incorporer le requestBody si nécessaire avant la conversion
            const modifiedCurlCommand = requestBody ? curlCommand.replace('curl', `curl --data '${requestBody}'`) : curlCommand;
            const swagger = await curlConverter.convert(modifiedCurlCommand);
            setSwaggerData(swagger);
            setError(null);
            // Ajouter la commande cURL à la liste des commandes récentes, en évitant les doublons
            setRecentCommands([curlCommand, ...recentCommands.filter(cmd => cmd !== curlCommand)]);
        } catch (err) {
            setError('Erreur lors de la conversion de la commande cURL en Swagger : ' + err.message);
            setSwaggerData(null);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', my: 2 }}>
            <Typography variant="h4" component="h2" gutterBottom>
                Convertir cURL en Swagger
            </Typography>
            <TextareaAutosize
                placeholder="Entrez votre commande cURL ici..."
                value={curlCommand}
                onChange={(e) => setCurlCommand(e.target.value)}
                style={{ width: '100%', minHeight: '100px', padding: '8px' }}
            />
            <TextareaAutosize
                placeholder="Modifier le corps de la requête ici (optionnel)..."
                value={requestBody}
                onChange={(e) => setRequestBody(e.target.value)}
                style={{ width: '100%', minHeight: '50px', padding: '8px', marginTop: '8px' }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 2 }}>
                <Button variant="contained" onClick={convertCurlToSwagger} disabled={isLoading || !curlCommand}>
                    {isLoading ? <CircularProgress size={24} /> : 'Convertir'}
                </Button>
            </Box>
            {error && <Typography color="error">{error}</Typography>}
            {swaggerData && (
                <Box>
                    <Typography variant="h6" component="h3" gutterBottom>
                        Résultat Swagger :
                    </Typography>
                    <pre>{JSON.stringify(swaggerData, null, 2)}</pre>
                </Box>
            )}
            <Box mt={2}>
                <Typography variant="h6">Commandes cURL récentes :</Typography>
                {recentCommands.length > 0 ? (
                    <ul>
                        {recentCommands.map((command, index) => (
                            <li key={index} style={{ marginBottom: '5px' }}>
                                <Button variant="text" onClick={() => setCurlCommand(command)}>
                                    {command}
                                </Button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <Typography>Aucune commande récente.</Typography>
                )}
            </Box>
        </Box>
    );
};

export default CurlToSwaggerWidget;
