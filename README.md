# Weather JavaScript Search

Questo piccolo progetto in Javascript serve a mostrare tramite una chiamata API il meteo nella cittá digitata dall'utente e cercare le condizioni meteorologiche attuali.

### Come Funziona?

L'input richiesto è il nome della città inserito dall'utente nella casella di ricerca.

L'output prodotto è la visualizzazione delle informazioni meteorologiche sulla pagina web, inclusi il nome della città, la temperatura, l'umidità, la velocità del vento e un'icona che rappresenta le condizioni meteorologiche.

Per raggiungere il suo scopo, il codice utilizza l'API `OpenWeatherMap`. Quando l'utente inserisce il nome di una città e fa clic sul pulsante di ricerca, la funzione `checkWeather` viene chiamata con il nome della città come argomento. La funzione costruisce un URL specifico per l'API OpenWeatherMap utilizzando l'URL di base, la chiave API e il nome della città. Quindi, utilizza la funzione `fetch` per inviare una richiesta HTTP all'API e recuperare i dati meteorologici per quella città. Se la città non viene trovata, viene visualizzato un messaggio di errore. Altrimenti, i dati meteorologici vengono estratti dalla risposta JSON e visualizzati sulla pagina web.

Il flusso logico principale è il seguente: l'utente inserisce il nome di una città, fa clic sul pulsante di ricerca, la funzione checkWeather viene chiamata, viene costruito l'URL dell'API, viene inviata una richiesta HTTP all'API, i dati meteorologici vengono recuperati e analizzati, quindi vengono visualizzati sulla pagina web. Una trasformazione importante dei dati avviene quando i dati meteorologici vengono estratti dalla risposta JSON e assegnati agli elementi HTML appropriati per la visualizzazione.
