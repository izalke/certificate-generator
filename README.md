### README.md

# Aplikacja do Generowania Certyfikatów Ukończenia Szkolenia

Projekt na uczelnię WSEI

## Opis

Aplikacja służy do zapisywania kursantów na kurs oraz generowania certyfikatów ukończenia w formacie PDF. Kursant wprowadza swoje imię i nazwisko, a administrator generuje certyfikat dla zapisanych kursantów.

## Technologie

- HTML
- CSS
- JavaScript
- [jsPDF](https://github.com/parallax/jsPDF) - biblioteka do generowania plików PDF

## Struktura Plików

- `index.html` - główny plik HTML
- `styles.css` - plik CSS ze stylami
- `script.js` - plik JavaScript zawierający logikę aplikacji

## Instrukcja Użycia

1. **Klonowanie Repozytorium**
   - Sklonuj repozytorium na swoje lokalne urządzenie.
     ```sh
     git clone https://github.com/twoje-repozytorium/certyfikaty.git
     ```
   - Przejdź do katalogu z projektem.
     ```sh
     cd certyfikaty
     ```

2. **Struktura Katalogu**
   - Upewnij się, że masz następującą strukturę plików:
     ```
     certyfikaty/
     ├── index.html
     ├── script.js
     └── styles.css
     ```

3. **Uruchomienie Aplikacji**
   - Otwórz plik `index.html` w przeglądarce internetowej.

4. **Używanie Aplikacji**
   - Wprowadź swoje imię i nazwisko w polu tekstowym i kliknij "Zapisz się".
   - Aby wygenerować certyfikaty, przejdź do panelu administratora i kliknij "Generuj certyfikaty". Pojawią się linki do pobrania certyfikatów w formacie PDF.
