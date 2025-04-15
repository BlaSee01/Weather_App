## 🌦️ Weather App by BlaSe
Aplikacja pogodowa z graficznym interfejsem użytkownika stworzona w Node.js.
Umożliwia wpisanie miasta i pobranie aktualnych danych pogodowych z OpenWeatherMap.

# 👉 Interfejs uruchamiany jest w przeglądarce lokalnie pod adresem:
http://localhost:3000


# 🔧 Technologie użyte w projekcie
Node.js
HTML/CSS/JS 

# 📁 Struktura projektu
pgsql
Kopiuj
Edytuj
weather_app_JS/
├── public/
│   ├── index.html
│   ├── styles.css
│   └── images/
|
├── server.mjs
├── .env
├── .gitignore
├── package.json
└── README.md

# ▶️ Jak uruchomić lokalnie
1. Sklonuj repo:
```bash
git clone https://github.com/twoj-login/weather_app_JS.git
```
```bash
cd weather_app_JS
```
2. Zainstaluj zależności:
```bash
npm install
```
3. Utwórz plik .env i dodaj swój klucz API z OpenWeatherMap:
```bash
OPENWEATHERMAP_API_KEY=twój_klucz_api
```
4. Uruchom serwer:
```bash
node server.mjs
```
5. Otwórz przeglądarkę:
```bash
http://localhost:3000
```

# 🧪 Jak to działa?
Użytkownik wpisuje nazwę miasta w interfejsie.

Frontend (JavaScript) wysyła żądanie do backendu (/weather?city=...).

Backend pobiera dane z OpenWeatherMap i zwraca je do frontu.

Interfejs wyświetla temperaturę, wilgotność, prędkość wiatru i ikonę pogodową.

# Autor
Projekt stworzony w ramach studiów przez BlaSee01
