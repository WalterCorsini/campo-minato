# SVOLGIMENTO
CAMPO MINATO
CREA UNA GRIGLIA DA 49-81-100 CELLE (A SECONDA DELLA DIFFICOLTA) E LE SUE RELATIVE BOMBE.
QUANDO L'UTENTE CLICCA SU UNA CELLA VUOTA FARA UN PUNTO E POTRA CONTINUARE FINO A QUANDO NON COLPIRA' UNA BOMBA.


## INPUT
1. genero contenitore per i pulsanti e punteggio
2. genero contenitore per le celle
3. creo stile per celle in base alla difficoltà
    - facile:    49 celle
    - medio:     81 celle
    - difficile: 100 celle
4. cerco tramite javascript dei tag html da richiamare in seguito
    - bottone start
    - il container delle cell
    - il select della difficolta
    - il container del risultato
    - il tag del risultato
5. dichiaro le variabili
    - cell per il numero di clle a seconda della difficoltà
    - bomb per il numero di bombe a seconda della difficoltà
    - point per il punteggio da salvare ad ogni click corretto dell'utente.
    - difficult per poter salvare il valore della difficolta scelto
    - resultElem per poter rimuovere la classe hidden al click sul bottone
    - resultPoint per poter salvare i punti fatti dall'utente
    - maxPoints per sapere quanti click dovra fare l'utente per assicurarsi la vittoria
    - bombElem per salvare le bombe creare in un array
6. diamo un eventListener click al pulsante Start
    - resetto tutto in pagina. per far partire o ripertire nel caso una nuova partita.
        -   punteggio a 0
        -   display punteggio a 0
        -   ripulisco il container delle celle
7. salvo la difficolta scelta dall'utente
8. se la prima partita rimuovo la classe hidden dal container celle e dal containter punteggio
9. a seconda della difficoltà do un valore alla variabile delle cell e delle bombe
10. calcolo il numero massimo di click sicuri possibili da effetturare
11. invoco una funzione e creo le celle
12. applico una classe diversa alle celle a seconda della difficolta per distribuirle meglio nel container
13. creo un evento click alle celle
    - se la cella cliccata è uguale a quello di una bomba
        - salvo valore "looser"
        - applico a tutte le celle di non poter cliccare piu su nessuna.
        - invoco la funzione EndGame
            - restituisce messaggio "hai PErso il tuo punteggio è: "
    - altrimenti
        - incremento punteggio
        - applico alla cella cliccata la possibilità di non poterci piu cliccare sopra.
        - salvo punteggio a video
        - controllo se il punteggio è uguale al numero massimo di celle cliccabili dall'utente
            se è uguale
                - invoco la funzione endGame
                    - restituisce il messaggio "hai vinto"
            altrimenti ritorno ad aspettare un click dell'utente
            