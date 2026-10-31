backend na Firebase już w pełni działa i teraz juz mozna podlaczyc ESP32

## Co trzeba zrobić?
Ktoś z Was musi ogarnąć integrację kodu w C++ (PlatformIO / Arduino) z naszą bazą danych, żeby:
1. **Wysyłać** do bazy aktualny stan zapełnienia kosza np. (`fillPercent`).
2. **Odbierać** (niekoniecznie potrzebne ale warto dorobic bo moze cos sie wymysli ze z telefonu cos mozna bedzie "poklikac" ale narazie niewymagane)

## ⚠️ Ważna sprawa: Bezpieczeństwo (pod kara smierci)
**NIGDY nie wrzucajcie haseł do domowego/akademickiego Wi-Fi ani kluczy API bezpośrednio do kodu na GitHuba!**
Musimy to trzymać w osobnym, lokalnym pliku konfiguracyjnym (takim odpowiedniku `.env` / pliku nagłówkowym z sekretami), żeby nikt nam tego nie ukradł ani nie zleakował publicznie. Dokładny wzór i to, co macie tam wklepać, wrzuciłem Wam na nasz chat grupowy, 2 osobne pliki .env dla /app oraz /firmware ( osoba ktora zrobila firmware niech podesle na chat jak to zapisala zeby inni przepisali ja wrzucilem dla app/ )

## Wybór bibliotek i komunikacja
Musicie dobrać i przetestować na ESP32 jakąś ogarniętą bibliotekę, która potrafi sprawnie gadać z Firebase Realtime Database.



