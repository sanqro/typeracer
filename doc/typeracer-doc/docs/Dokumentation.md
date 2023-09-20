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

Für unsere Wetterapp verwenden wir Folgende Technologien:

- [SveleteKit](https://kit.svelte.dev)
- [TypeScript(tsx)](https://www.typescriptlang.org)
- [TailwindCSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Docusaurus](https://docusaurus.io/)

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
| 1        | Muss            | funk.             | Die Webapplikation soll ein Anmeldungsfeld haben, welches einen Benutzernamen und ein Password annimmt.                                                                                                                                                                                                                |
| 2        | Muss            | funk.             | Die Webapplikation soll ein Registrierungsfeld haben, welches einen Benutzernamen und ein Password annimmt.                                                                                                                                                                                                            |
| 3        | Muss            | funk.             | Die Anmeldung soll funktionieren, dafür sollten Benutzer\*innen ein JWT-Token zugewiesen bekommen und dieses soll im localStorage gespeichert werden.                                                                                                                                                                  |
| 4        | Muss            | funk.             | Die Registrierung soll funktionieren, dafür werden der Benutzernamen und das Passwort, welches zuvor gehasht wurde, in der Datenbank gespeichert werden.                                                                                                                                                               |
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
| 16.      | Muss            | qual.             | Die Benuter\*innen sollen in den Einstellungen, die Anzahl Wörter zwischen 10, 25, 50 und 100 auswählen können, insofern der Typ des Tests "Anzahl Wörter" ist.                                                                                                                                                        |
| 17.      | Muss            | qual.             | Die Benuter\*innen sollen in den Einstellungen, die Anzahl Sekunden zwischen 15, 30, 60 und 120 auswählen können, insofern der Typ des Tests "Zeit" ist.                                                                                                                                                               |
| 18.      | Muss            | qual.             | Die Benutzer\*innen sollen in den Einstellungen zwischen "Anzahl Wörter" und "Zeit" auswählen können.                                                                                                                                                                                                                  |
| 19.      | Muss            | qual.             | Die Benutzer\*innen sollen in den Einstellungen auswählen können, ob sie während dem Test die Anzahl verbleibende Wörter sehen möchten.                                                                                                                                                                                |
| 20.      | Muss            | qual.             | Die Benutzer\*innen sollen in den Einstellungen auswählen können, ob sie während dem Test die vergangene Zeit sehen möchten.                                                                                                                                                                                           |
| 21.      | Muss            | qual.             | Die Benutzer\*innen sollen in den Einstellungen auswählen können, ob sie während dem Test die Anzahl Fehler sehen möchten.                                                                                                                                                                                             |
| 22.      | Muss            | qual.             | Die Benutzer\*innen sollen in den Einstellungen auswählen können, ob sie während dem Test die Genauigkeit sehen möchten.                                                                                                                                                                                               |
| 23.      | Muss            | qual.             | Die Benutzer\*innen sollen in den Einstellungen auswählen können, ob sie während dem Test die Anzahl Wörter pro Minute sehen möchten.                                                                                                                                                                                  |
| 24.      | Muss            | qual.             | Die Webapplikation soll eine Rangliste-Seite haben, auf der man alle Benutzer\*innen und ihren Benutzernamem, Rang, ihre Genauigkeit und ihre Anzahl Wörter pro Minute sieht.                                                                                                                                          |
| 25.      | Muss            | qual.             | Die Benutzer\*innen sollen auf der Rangliste-Seite einen Rang, je nach Wörter pro Minute zugewiesen bekommen                                                                                                                                                                                                           |
| 26.      | Muss            | qual.             | Wenn zwei Benutzer\*innen die selbe Anzahl Wörter pro Minute haben, soll ein Tie-Break den jeweiligen Rang in der Rangliste entscheiden.                                                                                                                                                                               |
| 27.      | Muss            | qual.             | Die Webapplikation soll eine Profil-Seite haben, auf der den Benutzer\*innen ihre durchschnittlichen Wörter pro Minute, die durchschnittliche Genauigkeit, die Anzahl an durchgeführten Tests und die besten drei Resultate, sowie einen Graphen der die Entwicklung der Tests anzeigt. (x = Anzahl Tests und y = WPM) |

## Arbeitspakete

> 1x Arbeitspaket = 45 Minuten (eine Schullektion) <br />
> 1x Sitzung = 5x Arbeitspakete (ein Halbtag) <br />
> Arbeitspakete \* Sitzungen \* Gruppenmitglieder<br />
>
> 5 \* 6 \* 2 = 60 Arbeitpakete

| Nr. | Frist      | Beschreibung                                   | Zeit in Arbeitspaketen (geplant) |
| --- | ---------- | ---------------------------------------------- | -------------------------------- |
| 1   | 24.08.2023 | Informieren (von IPERKA)                       | 10                               |
| 2   | 31.09.2023 | Planen (von IPERKA)                            | 6                                |
| 3   | 31.09.2023 | Entscheiden (von IPERKA)                       | 4                                |
| 4   | 07.09.2023 | Realisieren (von IPERKA) der Anforderungen Nr. | 10                               |
| 5   | 07.09.2023 | Realisieren (von IPERKA) der Anforderungen Nr. | 10                               |
| 6   | 14.09.2023 | Realisieren (von IPERKA) der Anforderungen Nr. | 10                               |
| 7   | 14.09.2023 | Kontrollieren (von IPERKA)                     | 6                                |
| 8   | 21.09.2023 | Auswerten (von IPERKA)                         | 4                                |
| 9   | 21.09.2023 | Portfolioeintrag fertigstellen                 | 8                                |

## Ausführung

| Nr. | Frist | Bemerkung | Zeit (geplant) | Zeit (effektiv) |
| :-- | ----- | --------- | -------------- | --------------- |
| 1   |       |           |                |                 |

### Testumgebungen

Wir verwenden für die verschiedenen Testfälle zwei unterschiedliche Testumgebungen:

#### Postman:

**Betriebssystem**:

Die Postman-Applikation, mit der wir die Testfälle testen, wird auf der neusten Version von Microsoft 10 (**22H2** **_Build: 19045.3448_**) ausgeführt.

**Postman-Applikation**:

Für die Testfälle mit Postman verwenden wir die Version 10.17.3 (x64 Architecture) von Postman.

#### Manuell (Per Hand):

**Betriebssystem:**

Der Browser, mit dem wir die Tests in dem wir die Tests manuell testen, wird auf der neusten Version vonvon Microsoft 10 (**22H2** **_Build: 19045.3448_**) ausgeführt.

**Browser:**

Für den Browser verwenden wir die neuste Version von Mozilla Firefox (117.01).

## Testfälle

| Testf.-Nr. | Anforderung | Vorraussetzung                         | Testumgebung | Eingabe | Erw. Ausgabe |
| :--------: | ----------- | :------------------------------------- | ------------ | ------- | ------------ |
|    1.1     | 1           | Man ist auf der Webseite von Typeracer |              | 1.      | 2.           |
|    2.1     |             |                                        |              |         |              |
|    3.1     |             |                                        |              |         |              |
|    4.1     |             |                                        |              |         |              |
|    5.1     |             |                                        |              |         |              |
|    6.1     |             |                                        |              |         |              |
|    7.1     |             |                                        |              |         |              |
|    8.1     |             |                                        |              |         |              |
|    9.1     |             |                                        |              |         |              |
|    10.1    |             |                                        |              |         |              |
|    11.1    |             |                                        |              |         |              |
|    12.1    |             |                                        |              |         |              |

### Testprotokoll

OK = Dieser Testfall wurde erfolgreich getestet.

NOK = Dieses Testfall konnte nicht (erfolgreich) getestet werden.

| Test-Nr | Bericht | Tester            |
| :------ | :------ | :---------------- |
| 1.1     | OK      | @sanqro, @RelxOff |

### Testbericht

## Projektauswertung

Am Anfang des Projektes hatten wir verschiedene Meinungen, was wir machen wollen, aber schlussendlich haben wir uns für Typeracer entschieden. Wir haben uns für viele neue Sachen entschieden, was sich am Schluss nicht gerade als schlau herausgestellt hat. Da wir sehr viele neue Technologien verwendet haben, konnten wir erst später mit dem wirklichen programmieren anfangen, weil wir diese erst lernen mussten. Die Aufgaben wurden so aufgeteilt, dass jeder das zuerst gemacht hat , was er gut kann also einer Docusaurus aufgesetzt und der andere hat mit dem Backend gemacht. Der Erfahrene hat dann dem anderen geholfen die neuen Technologien besser zu verstehen. Mit der Dokumentation und dem Programmieren lief es zuerst holprig ab, da wir das lange nicht gemacht haben. Es wurde auch vieles aufgeschoben, was das Ende umso schwerer gemacht hat und uns unter Zeitdruck und Stress gesetzt hat.
