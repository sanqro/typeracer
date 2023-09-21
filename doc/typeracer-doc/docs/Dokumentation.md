# Dokumentation

:::info
Das ist die Dokumentation unseres [Projekts](https://github.com/sanqro/typeracer), welches nach der Projektmethode IPERKA umgesetzt wurde. Hier wird unser Ablauf und die Vorgehensweise des Projekts dokumentiert.

:::

### Inhaltsverzeichnis

- [Dokumentation - Typeracer App](#dokumentation)
  - [Inhaltsverzeichnis](#inhaltsverzeichnis)
  - [IPERKA](#iperka)
    - [Informieren](#informieren)
    - [Planen](#planen)
    - [Entscheiden](#entscheiden)
    - [Realisieren](#realisieren)
    - [Kontrollieren](#kontrollieren)
    - [Auswerten](#auswerten)
  - [Einleitung](#einleitung)
  - [Technologien](#technologien)
  - [Quellen](#quellen)
  - [Lokale Entwicklungsumgebung](#lokale-entwicklungsumgebung)
    - [Expo Go Download](#Expo-Go-Download)
    - [Lokale Entwicklungsumgebung aufsetzen](#Lokale-Entwicklungsumgebung-aufsetzen)
    - [Vorbereitung](#Vorbereitung)
    - [Dependencies mit NPM installieren](#Dependencies-mit-NPM-installieren)
  - [Anforderungen](#anforderungen)
  - [Arbeitspakete](#arbeitspakete)
  - [Ausführung](#ausführung)
  - [Testen](#testen)
    - [Testumgebungen](#testumgebungen)
  - [Testfälle](#testfälle)
    - [Testprotokoll](#testprotokoll)
    - [Testbericht](#testbericht)
  - [Projektauswertung](#projektauswertung)

## IPERKA

### Informieren

- [Einleitung](#einleitung)
- [Technologien](#technologien)
- [Quellen](#quellen)
- [Anforderungen](#anforderungen)

### Planen

- [Testfälle](#testfälle)
- [Arbeitspakete](#arbeitspakete)

### Entscheiden

- [Technologien](#technologien)

### Realisieren

- [Ausführung](#ausführung)

### Kontrollieren

- [Testfälle](#testfälle)
- [Tesprotokoll](#testprotokoll)
- [Testbericht](#testbericht)

### Auswerten

- [Projektauswertung](#projektauswertung)

## Einleitung

Für dieses Projekt haben wir uns dafür entschieden, dass wir die, für uns neue, Technologie SvelteKit kennenlernen und dafür eine Webapplikation realisieren möchten. Dafür haben haben wir eine Webapplikation erstellt, mit der man seine Tippgeschwindigkeit testen kann und sich mit den anderen Benutzern messen kann. Ausserdem kann man auch seine vorherigen Testläufe ansehen und seine Tipperlebnis individualisieren.

## Technologien

Für Typeracer verwenden wir folgende Technologien:

- [SveleteKit](https://kit.svelte.dev)
- [TypeScript(tsx)](https://www.typescriptlang.org)
- [TailwindCSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Docusaurus](https://docusaurus.io/)
- [Git](https://git-scm.com/doc)
- [GitHub](https://docs.github.com/en)
- [D3](https://d3js.org/)

### Hosts:

- [Deta für das Hosten der Datenbank](https://deta.space/)
- [Netlify für das Hosten der Website](https://www.netlify.com/)

## Quellen

- [Offiziele SvelteKit Lern-Ressource](https://learn.svelte.dev/tutorial/introducing-sveltekit)
- [Docusaurus](https://docusaurus.io/docs)
- [TypeScript React Native Expo Tutorial](https://www.youtube.com/watch?v=H8qOotIAaEA)

## Lokale Entwicklungsumgebung

### Lokale Entwicklungsumgebung aufsetzen

#### Vorbereitung

Für die Realisierung dieses Projekts haben wir Visual Studio Code mit wenigen Erweiterungen, und zwar ESLint, Prettier und Live Share verwendet. Bei der Live Share-Erweiterung haben wir keine speziellen Einstellungen vorgenommen, wobei wir bei der Erweiterung Prettier und ESLint eine eigene Konfiguration erstellt haben, um unsere eigenen Code-Konventionen zu erzwingen. Diese Einstellungen werden automatisch übernommen, insofern man die eine Erweiterung installiert hat und die Entwicklungsumgebung aufgesetzt hat.

Um die lokale Entwicklungsumgebung aufzusetzen, muss man sich zuerst eine Kopie vom Repository, von der [offiziellen Quelle](https://github.com/sanqro/typeracer) holen.

Dies kann man tun, indem man eine eigene Kopie von dem Repository erstellt (forkt), damit man später seine Änderungen auch bei GitHub pushen kann, auch wenn man kein Contributor ist.

_Dadurch kann man auch die eigenen Änderungen im offiziellen Repository eingbringen, indem man eine Pull Request erstellt._

Wenn das Repository erfolgreich geforkt wurde, muss man das Repository klonen und in dessen Verzeichnis wechseln.

```shell
git clone https://github.com/[deinBenutzername]/typeracer.git
cd typeracer/
```

#### Dependencies mit NPM installieren

:::caution
Für diesen Schritt ist es notwendig, die node.js-Runtime installiert zu haben. [Download von node.js](https://nodejs.org/de/)
:::

Nachdem man das Projekt geklont hat, sollte man alle Dependencies installieren. Dabei muss man in das entsprechende Verzeichnis wechseln und die Abhängigkeiten installieren.

```bash
cd typeracer/ #Falls man noch nicht im richtigen Verzeichnis ist
npm i
cd ..
```

#### Projekt starten

:::caution
Für diesen Schritt ist es notwendig, die [Dependencies installiert](#Dependencies-mit-NPM-installieren) zu haben.
:::

```bash
cd typeracer/ # Falls man noch nicht im richtigen Verzeichnis ist
npm run dev
```

Nun wurde die Applikation erfolgreich gestartet und kann unter http://localhost:5713 erreicht werden.

## Anforderungen

| Anf.-Nr. | Muss/<br />Kann | funk./<br />qual. | Beschreibung                                                                                                                                                                                                                                                                                                           |
| :------- | :-------------- | ----------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.       | Muss            | funk.             | Die Webapplikation soll ein Anmeldungsfeld haben, welches einen Benutzernamen und ein Password annimmt.                                                                                                                                                                                                                |
| 2.       | Muss            | funk.             | Die Webapplikation soll ein Registrierungsfeld haben, welches einen Benutzernamen und ein Password annimmt.                                                                                                                                                                                                            |
| 3.       | Muss            | funk.             | Die Anmeldung soll funktionieren, dafür sollten Benutzer\*innen ein JWT-Token zugewiesen bekommen und dieses soll im localStorage gespeichert werden.                                                                                                                                                                  |
| 4.       | Muss            | funk.             | Die Registrierung soll funktionieren, dafür werden der Benutzernamen und das Passwort, welches zuvor gehasht wurde, in der Datenbank gespeichert werden.                                                                                                                                                               |
| 5.       | Muss            | funk.             | Den Benutzer\*innen werden die nächsten 10 Wörter angezeigt, welche er Eingeben muss.                                                                                                                                                                                                                                  |
| 6.       | Muss            | funk.             | Den Benutzer\*innen soll angezeigt werden, ob das derzeitige Wort falsch eingeben wurde, in dem der falsch eingebene Buchstabe rot wird.                                                                                                                                                                               |
| 7.       | Muss            | qual.             | Den Benutzer\*innen soll angezeigt werden, wie Wörter pro Minute derzeit erreicht werden.                                                                                                                                                                                                                              |
| 8.       | Muss            | qual.             | Den Benutzer\*innen soll angezeigt werden, wie genau die Wörter eingeben werden in 100%.                                                                                                                                                                                                                               |
| 9.       | Muss            | qual.             | Den Benutzer\*innen soll angezeigt werden, wie viele Sekunden seit dem Start des Tests vergangen sind.                                                                                                                                                                                                                 |
| 10.      | Muss            | qual.             | Den Benutzer\*innen soll angezeigt werden, wie viele Sekunden beim Test noch übrig sind, insofern der Test auf Zeit ist.                                                                                                                                                                                               |
| 11.      | Muss            | qual.             | Den Benutzer\*innen soll angezeigt werden, wie viele Wörter beim Test noch übrig sind, insofern der Test auf Wörter geht.                                                                                                                                                                                              |
| 12.      | Muss            | qual.             | Den Benutzer\*innen angezeigt werden, wie viele Fehler insgesamt gemacht wurden.                                                                                                                                                                                                                                       |
| 13.      | Muss            | qual.             | Den Benutzer\*innen soll am Ende des Tests die erreichten Wörter pro Minute, die Anzahl Fehlern, die Genauigkeit und die vergangene Zeit angezeigt werden.                                                                                                                                                             |
| 14.      | Muss            | qual.             | Den Benutzer\*innen soll am Ende Tests ein Knopf, mit dem man einen neuen Test starten kann angezeigt werden.                                                                                                                                                                                                          |
| 15.      | Muss            | qual.             | Die Webapplikation soll eine Einstellungs-Seite haben, auf der man den Test individualisieren kann und diese Einstellungen einen Einfluss auf den Test haben.                                                                                                                                                          |
| 16.      | Muss            | qual.             | Die Benutzer\*innen sollen in den Einstellungen, die Anzahl Wörter zwischen 10, 25, 50 und 100 auswählen können, insofern der Typ des Tests "Anzahl Wörter" ist.                                                                                                                                                       |
| 17.      | Muss            | qual.             | Die Benutzer\*innen sollen in den Einstellungen, die Anzahl Sekunden zwischen 15, 30, 60 und 120 auswählen können, insofern der Typ des Tests "Zeit" ist.                                                                                                                                                              |
| 18.      | Muss            | qual.             | Die Benutzer\*innen sollen in den Einstellungen zwischen "Anzahl Wörter" und "Zeit" auswählen können.                                                                                                                                                                                                                  |
| 19.      | Muss            | qual.             | Die Benutzer\*innen sollen in den Einstellungen auswählen können, ob sie während dem Test die Anzahl verbleibende Wörter sehen möchten.                                                                                                                                                                                |
| 20.      | Muss            | qual.             | Die Benutzer\*innen sollen in den Einstellungen auswählen können, ob sie während dem Test die vergangene Zeit sehen möchten.                                                                                                                                                                                           |
| 21.      | Muss            | qual.             | Die Benutzer\*innen sollen in den Einstellungen auswählen können, ob sie während dem Test die Anzahl Fehler sehen möchten.                                                                                                                                                                                             |
| 22.      | Muss            | qual.             | Die Benutzer\*innen sollen in den Einstellungen auswählen können, ob sie während dem Test die Genauigkeit sehen möchten.                                                                                                                                                                                               |
| 23.      | Muss            | qual.             | Die Benutzer\*innen sollen in den Einstellungen auswählen können, ob sie während dem Test die Anzahl Wörter pro Minute sehen möchten.                                                                                                                                                                                  |
| 24.      | Muss            | qual.             | Die Webapplikation soll eine Rangliste-Seite haben, auf der man alle Benutzer\*innen und ihren Benutzernamen, Rang, ihre Genauigkeit und ihre Anzahl Wörter pro Minute sieht.                                                                                                                                          |
| 25.      | Muss            | qual.             | Die Benutzer\*innen sollen auf der Rangliste-Seite einen Rang, je nach Wörter pro Minute zugewiesen bekommen                                                                                                                                                                                                           |
| 26.      | Muss            | qual.             | Wenn zwei Benutzer\*innen die selbe Anzahl Wörter pro Minute haben, soll ein Tie-Break den jeweiligen Rang in der Rangliste entscheiden.                                                                                                                                                                               |
| 27.      | Muss            | qual.             | Die Webapplikation soll eine Profil-Seite haben, auf der den Benutzer\*innen ihre durchschnittlichen Wörter pro Minute, die durchschnittliche Genauigkeit, die Anzahl an durchgeführten Tests und die besten drei Resultate, sowie einen Graphen der die Entwicklung der Tests anzeigt. (x = Anzahl Tests und y = WPM) |

## Arbeitspakete

:::info
1x Arbeitspaket = 45 Minuten (eine Schullektion) <br />
1x Sitzung = 5x Arbeitspakete (ein Halbtag) <br />
Arbeitspakete \* Sitzungen \* Gruppenmitglieder<br />
8 Arbeitspakete für Portfolio, welche man zu Hause machen muss<br />

5 \* 6 \* 2 + 8= 68 Arbeitpakete
:::

| Nr. | Frist      | Beschreibung                                           | Zeit in Arbeitspaketen (geplant) |
| --- | ---------- | ------------------------------------------------------ | -------------------------------- |
| 1   | 24.08.2023 | Informieren (von IPERKA)                               | 10                               |
| 2   | 31.08.2023 | Planen (von IPERKA)                                    | 6                                |
| 3   | 31.08.2023 | Entscheiden (von IPERKA)                               | 4                                |
| 4   | 07.09.2023 | Realisieren (von IPERKA) der Anforderungen Nr. 1 - 6   | 10                               |
| 5   | 07.09.2023 | Realisieren (von IPERKA) der Anforderungen Nr. 7 - 14  | 10                               |
| 6   | 14.09.2023 | Realisieren (von IPERKA) der Anforderungen Nr. 15 - 27 | 10                               |
| 7   | 14.09.2023 | Kontrollieren (von IPERKA)                             | 6                                |
| 8   | 21.09.2023 | Auswerten (von IPERKA)                                 | 4                                |
| 9   | 21.09.2023 | Portfolioeintrag fertigstellen                         | 8                                |

## Ausführung

| Nr. | Frist      | Bemerkung                                                                                                                     | Zeit (geplant) | Zeit (effektiv) |
| :-- | :--------- | ----------------------------------------------------------------------------------------------------------------------------- | -------------- | --------------- |
| 1   | 24.08.2023 | Wir hatten schnell Ideen, aber haben konnten uns noch im Zeitrahmen entscheiden.                                              | 10             | 10              |
| 2   | 31.08.2023 | Wir haben so geplant, dass im ersten Realisieren weniger Anforderungen zu machen sind, da wir noch Svelte etc. lernen müssen. | 6              | 5               |
| 3   | 31.08.2023 | Das Entscheiden ging recht schnell, da es sehr eindeutig war, was wir benutzen wollen.                                        | 4              | 5               |
| 4   | 07.09.2023 | Wir haben gemerkt wir brauchen mehr Zeit zum Svelte etc. lernen.                                                              | 10             | 16              |
| 5   | 07.09.2023 | Während dem Programmieren ist uns aufgefallen, dass wir nicht mehr so drin sind, was auch Zeit gekostet hat.                  | 10             | 14              |
| 6   | 14.09.2023 | Das erstellen von dem Graphen war recht schwer, da es nicht so funktionierte wie es sollte.                                   | 10             | 20              |
| 7   | 14.09.2023 | Es ging so wie geplant, da wir unsere Webseite gut kennen.                                                                    | 6              | 6               |
| 8   | 21.09.2023 | Wir wussten direkt, an was es gelegen hat, da es direkt klar war.                                                             | 4              | 4               |
| 9   | 21.09.2023 | Das Erstellen ging schnell, da wir schon geübt sind, weil wir es schon oft gemacht haben.                                     | 8              | 6               |

### Testumgebungen

Wir verwenden für alle Testfälle eine Testumgebungen:

#### Manuell (Per Hand):

**Betriebssystem:**

Der Browser, mit dem wir die Tests in dem wir die Tests manuell testen, wird auf der neusten Version vonvon Microsoft 10 (**22H2** **_Build: 19045.3448_**) ausgeführt.

**Browser:**

Für den Browser verwenden wir die neuste Version von Mozilla Firefox (117.01).

## Testfälle

| Testf.-Nr. | Anforderung | Vorraussetzung                                                                                                                                                                          | Testumgebung | Eingabe                                                                                                                                          | Erw. Ausgabe                                                                                                                                                                                           |
| :--------- | ----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1.1        | 1           | Man ist auf "https://typeracer.sanqro.me ".                                                                                                                                             | Manuell      | 1. Auf "Login" drücken.                                                                                                                          | 2.Anmeldungsfeld wird angezeigt.                                                                                                                                                                       |
| 2.1        | 2           | Man ist auf "https://typeracer.sanqro.me ".                                                                                                                                             | Manuell      | 1. Auf "Login" drücken.<br /> 2. Auf "Register here" drücken.                                                                                    | 3. Registrierungsfeld wird anzeigt.                                                                                                                                                                    |
| 3.1        | 3.          | Man ist auf "https://typeracer.sanqro.me/login " und es wurde bereits ein Account erstellt.                                                                                             | Manuell      | 1. Bei Username "angelegterusername" eingeben.<br />2. Bei Password "angelegtespassword" eingeben.<br />3. Auf "Login" drücken.                  | 4. Man wird auf "/" geleitet und im localStorage ist das JWT-Token unter "token" gespeichert.                                                                                                          |
| 4.1        | 4.          | Man ist auf "https://typeracer.sanqro.me/register ".                                                                                                                                    | Manuell      | 1. Bei Username eine zufällige Zeichenkette eingeben.<br />2. Bei Password eine zufällige Zeichenkette eingeben.<br />3. Auf "Register" drücken. | 4. Pop-Up mit "Registered successfully" erscheint und man wird auf "/login" geleitet.                                                                                                                  |
| 5.1        | 5.          | Man ist auf "https://typeracer.sanqro.me ".                                                                                                                                             | Manuell      | 1. Keine                                                                                                                                         | 2. Es werden 10 Wörter neben "Type the word" angezeigt.                                                                                                                                                |
| 6.1        | 6.          | Man ist auf "https://typeracer.sanqro.me ".                                                                                                                                             | Manuell      | 1. In das Eingabefeld drücken.<br />2. "banane" eingeben.                                                                                        | 3. Die Buchstaben werden rot angezeigt.                                                                                                                                                                |
| 7.1        | 7.          | Man ist auf "https://typeracer.sanqro.me " und das Anzeigen der Wörtern pro Minute wurde nicht in den Einstellungen ausgeschaltet.                                                      | Manuell      | 1. In das Eingabefeld drücken.<br />2. Die ersten drei Wörter des Tests eingeben.                                                                | 3. Eine Zahl, die grösser als null ist wird bei "Words per Minute" angezeigt.                                                                                                                          |
| 8.1        | 8.          | Man ist auf "https://typeracer.sanqro.me " und das Anzeigen der Genauigkeit wurde in den Einstellungen nicht ausgeschlatet.                                                             | Manuell      | 1. In das Eingabefeld drücken.<br />2. Die ersten drei Wörter des Tests korrekt eingeben.                                                        | 3. Bei "Accuracy" wird 100% angezeigt.                                                                                                                                                                 |
| 9.1        | 9.          | Man ist auf "https://typeracer.sanqro.me " und das Anzeigen der vergangenen Zeit wurde nicht in den Einstellungen ausgeschaltet.                                                        | Manuell      | 1. In das Eingabefeld drücken.<br />2. "test" eingeben und 10 Sekunden warten.                                                                   | 3. Bei "Elapsed Time" wird 10 Seconds angezeigt.                                                                                                                                                       |
| 10.1       | 10.         | Man ist auf "https://typeracer.sanqro.me " und in den Einstellungen wurde als Typ des Tests "Time" und bei der Dauer des Tests "15" ausgewählt.                                         | Manuell      | 1. In das Eingabefeld drücken.<br />2. "test" eingeben und 10 Sekunden warten.                                                                   | 3. Bei "Remaining time:" wird "5" angezeigt.                                                                                                                                                           |
| 11.1       | 11.         | Man ist auf "https://typeracer.sanqro.me " und in den Einstellungen wurde als Typ des Tests "Number of words" und bei der Anzahl Wörtern wurde "10" ausgewählt.                         | Manuell      | 1. In das Eingabefeld drücken.<br />2. Das erste Wort korrekt eingeben.                                                                          | 3. Bei "Remaining words:" wird "9" angezeigt.                                                                                                                                                          |
| 12.1       | 12.         | Man ist auf "https://typeracer.sanqro.me " und das Anzeigen der Fehlern wurde in den Einstellungen nicht ausgeschlatet.                                                                 | Manuell      | 1. In das Eingabefeld drücken.<br />2. "test" eingeben.                                                                                          | 3. Bei "Errors" wird "4" angezeigt.                                                                                                                                                                    |
| 13.1.      | 13.         | Man ist auf "https://typeracer.sanqro.me " und ein Test wurde mit ohne Fehleingabe abgeschlossen.                                                                                       | Manuell      | 1. Keine                                                                                                                                         | 2. Bei "Words Per Minute (WPM):", "Accuracy:" und "Elapsed Time" wird ein Wert grösser als null anzeigt sowie ein Knopf, um den Test neuzustarten und bei "Errors" wird null angezeigt.                |
| 13.2       | 13          | Man ist auf "https://typeracer.sanqro.me " und ein Test wurde mit mindestens einer Fehleingabe abgeschlossen.                                                                           | Manuell      | 1. Keine                                                                                                                                         | 2. Bei "Words Per Minute (WPM):", "Accuracy:" und "Elapsed Time:" wird ein Wert grösser als null sowie ein Knopf, um den Test neuzustarten und bei "Errors:" wird ein Wert grösser als eins angezeigt. |
| 14.1       | 14.         | Man ist auf "https://typeracer.sanqro.me " und hat ein Test ohne Fehleingabe abgeschlossen.                                                                                             | Manuell      | 1. Keine                                                                                                                                         | 2. Bei "Wors Per Minute (WPM):", "Accuracy:", "Elapsed Time" wird ein Wert grösser als null angezeigt sowie ein Knopf um den Test neuzustarten und bei "Errors" wird null angezeigt.                   |
| 15.1       | 15.         | Man ist auf "https://typeracer.sanqro.me/settings ".                                                                                                                                    | Manuell      | 1. Keine                                                                                                                                         | 2. Die Einstellungen werden angezeigt.                                                                                                                                                                 |
| 16.1       | 16.         | Man ist auf "https://typeracer.sanqro.me/settings ".                                                                                                                                    | Manuell      | 1. Bei "Type of Test" "Number of Words" auswählen.<br />2. Auf "Number of Words" drücken.                                                        | 3. Es wird 10, 25, 50 und 100 angezeigt.                                                                                                                                                               |
| 17.1       | 17.         | Man ist auf "https://typeracer.sanqro.me/settings ".                                                                                                                                    | Manuell      | 1. Bei "Type of Test" "Time" auswählen.<br />2. Auf "Duration of the typing test in seconds" drücken.                                            | 3. Es wird 15, 30, 60 und 120 angezeigt.                                                                                                                                                               |
| 18.1       | 18.         | Man ist auf "https://typeracer.sanqro.me/settings ".                                                                                                                                    | Manuell      | 1. Auf "Type of Test" drücken.                                                                                                                   | 2. Es wird "Number of Words" und "Time" angezeigt.                                                                                                                                                     |
| 19.1.      | 19.         | Man ist auf "https://typeracer.sanqro.me/settings " und bei "Type of the Test" wurde "Number of Words" ausgewählt.                                                                      | Manuell      | 1. Auf "Show Remaining Words" drücken.                                                                                                           | 2. Es wird "True" oder "False" angezeigt.                                                                                                                                                              |
| 19.2.      | 19.         | Man ist auf "https://typeracer.sanqro./me/settings " und bei "Type of Test" wurde "Time" ausgewählt.                                                                                    | Manuell      | 1. Auf "Show Remaining Time" drücken.                                                                                                            | 2. Es wird "True" oder "False" angezeigt.                                                                                                                                                              |
| 20.1       | 20.         | Man ist auf "https://typeracer.sanqro.me/settings ".                                                                                                                                    | Manuell      | 1. Auf "Show elapsed time" drücken.                                                                                                              | 2. Es wird "True" oder "False" angezeigt.                                                                                                                                                              |
| 21.1       | 21.         | Man ist auf "https://typeracer.sanqro.me/settings ".                                                                                                                                    | Manuell      | 1. Auf "Show erors" drücken.                                                                                                                     | 2. Es wird "True" oder "False" angezeigt.                                                                                                                                                              |
| 22.1       | 22.         | Man ist auf "https://typeracer.sanqro.me/settings ".                                                                                                                                    | Manuell      | 1. Auf "Show accuracy" drücken.                                                                                                                  | 2. Es wird "True" oder "False" angezeigt.                                                                                                                                                              |
| 23.1       | 23.         | Man ist auf "https://typeracer.sanqro.me/settings ".                                                                                                                                    | Manuell      | 1. Auf "Show words per minute" drücken.                                                                                                          | 2. Es wird "True" oder "False" angezeigt.                                                                                                                                                              |
| 24.1       | 24.         | Man ist auf "https://typeracer.sanqro.me/scoreboard " und mindestens zwei Benutzer\*innen haben einen unterschiedlichen Test abgelegt.                                                  | Manuell      | 1. Keine                                                                                                                                         | 2. Es wird der Benutzernamen beider Benutzer\*innen angzeigt sowie ihre Genauigkeit und Anzahl Wörter pro Minute.                                                                                      |
| 25.1       | 25.         | Man ist auf "https://typeracer.sanqro.me/scoreboard " und ein/e Benutzer:in hat weniger WPM.                                                                                            | Manuell      | 1. Keine                                                                                                                                         | 2. Der/Die Benutzer\*in mit weniger WPM hat einen niedrigeren Rang, also dieser wird tiefer in der Rangliste angezeigt.                                                                                |
| 26.1       | 26.         | Man ist auf "https://typeracer.sanqro.me/scoreboard " und zwei Benuter\*innen haben einen Test mit der gleichen Anzahl an WPM abelegt, jedoch mit einer unterschiedlichen Genaugigkeit. | Manuell      | 1. Keine                                                                                                                                         | 2. Der/die Benutzer\*in mit der niedrigeren Genaugigkeit wird tiefer in der Ranglist angezeigt.                                                                                                        |
| 27.1       | 27.         | Man ist eingeloggt auf "https://typeracer.sanqro.me/profile " und hat mindestens drei Tests abgelegt.                                                                                   | Manuell      | 1. Keine                                                                                                                                         | 2. Es wird die durschnittliche Anzahl an WPM und Genauigkeit, die Anzahl durchgeführte Tests, mindestens 3 und die besten drei Resulate angezeigt sowie einen Graphen.                                 |

### Testprotokoll

:::info

**OK** = Dieser Testfall wurde erfolgreich getestet.

**NOK** = Dieses Testfall konnte nicht (erfolgreich) getestet werden.

:::

| Test-Nr | Bericht | Tester                                                                       |
| :------ | :------ | :--------------------------------------------------------------------------- |
| 1.      | OK      | [@sanqro](https://github.com/sanqro), [@RelxOff](https://github.com/RelxOff) |
| 2.      | OK      | [@sanqro](https://github.com/sanqro), [@RelxOff](https://github.com/RelxOff) |
| 3.      | OK      | [@sanqro](https://github.com/sanqro), [@RelxOff](https://github.com/RelxOff) |
| 4.      | OK      | [@sanqro](https://github.com/sanqro), [@RelxOff](https://github.com/RelxOff) |
| 5.      | OK      | [@sanqro](https://github.com/sanqro), [@RelxOff](https://github.com/RelxOff) |
| 6.      | OK      | [@sanqro](https://github.com/sanqro), [@RelxOff](https://github.com/RelxOff) |
| 7.      | OK      | [@sanqro](https://github.com/sanqro), [@RelxOff](https://github.com/RelxOff) |
| 8.      | OK      | [@sanqro](https://github.com/sanqro), [@RelxOff](https://github.com/RelxOff) |
| 9.      | OK      | [@sanqro](https://github.com/sanqro), [@RelxOff](https://github.com/RelxOff) |
| 10.     | OK      | [@sanqro](https://github.com/sanqro), [@RelxOff](https://github.com/RelxOff) |
| 11.     | OK      | [@sanqro](https://github.com/sanqro), [@RelxOff](https://github.com/RelxOff) |
| 12.     | OK      | [@sanqro](https://github.com/sanqro), [@RelxOff](https://github.com/RelxOff) |
| 13.1.   | OK      | [@sanqro](https://github.com/sanqro), [@RelxOff](https://github.com/RelxOff) |
| 13.2.   | OK      | [@sanqro](https://github.com/sanqro), [@RelxOff](https://github.com/RelxOff) |
| 14.     | OK      | [@sanqro](https://github.com/sanqro), [@RelxOff](https://github.com/RelxOff) |
| 15.     | OK      | [@sanqro](https://github.com/sanqro), [@RelxOff](https://github.com/RelxOff) |
| 16.     | OK      | [@sanqro](https://github.com/sanqro), [@RelxOff](https://github.com/RelxOff) |
| 17.     | OK      | [@sanqro](https://github.com/sanqro), [@RelxOff](https://github.com/RelxOff) |
| 18.     | OK      | [@sanqro](https://github.com/sanqro), [@RelxOff](https://github.com/RelxOff) |
| 19.1    | OK      | [@sanqro](https://github.com/sanqro), [@RelxOff](https://github.com/RelxOff) |
| 19.2    | OK      | [@sanqro](https://github.com/sanqro), [@RelxOff](https://github.com/RelxOff) |
| 20      | OK      | [@sanqro](https://github.com/sanqro), [@RelxOff](https://github.com/RelxOff) |
| 21.     | OK      | [@sanqro](https://github.com/sanqro), [@RelxOff](https://github.com/RelxOff) |
| 22.     | OK      | [@sanqro](https://github.com/sanqro), [@RelxOff](https://github.com/RelxOff) |
| 23.     | OK      | [@sanqro](https://github.com/sanqro), [@RelxOff](https://github.com/RelxOff) |
| 24.     | OK      | [@sanqro](https://github.com/sanqro), [@RelxOff](https://github.com/RelxOff) |
| 25.     | OK      | [@sanqro](https://github.com/sanqro), [@RelxOff](https://github.com/RelxOff) |
| 26.     | OK      | [@sanqro](https://github.com/sanqro), [@RelxOff](https://github.com/RelxOff) |
| 27.     | OK      | [@sanqro](https://github.com/sanqro), [@RelxOff](https://github.com/RelxOff) |

### Testbericht

Alle Testfälle wurden erfolgreich getestet. Die Applikation muss nicht überarbeitet werden und diese ist bereit abgegeben zu werden.

## Projektauswertung

Am Anfang des Projektes hatten wir verschiedene Meinungen, was wir machen wollen, aber schlussendlich haben wir uns für Typeracer entschieden. Wir haben uns für viele neue Sachen entschieden, was sich am Schluss nicht gerade als schlau herausgestellt hat. Da wir sehr viele neue Technologien verwendet haben, konnten wir erst später mit dem wirklichen programmieren anfangen, weil wir diese erst lernen mussten. Die Aufgaben wurden so aufgeteilt, dass jeder das zuerst gemacht hat , was er gut kann also einer Docusaurus aufgesetzt und der andere hat mit dem Backend gemacht. Der Erfahrene hat dann dem anderen geholfen die neuen Technologien besser zu verstehen. Mit der Dokumentation und dem Programmieren lief es zuerst holprig ab, da wir das lange nicht gemacht haben. Es wurde auch vieles aufgeschoben, was das Ende umso schwerer gemacht hat und uns unter Zeitdruck und Stress gesetzt hat.
