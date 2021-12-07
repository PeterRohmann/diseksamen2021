NPM-pakker installeres: npm i express body-parser fs https got mongoose

openssl kræves for at krypteringen fungerer. Det følger automatisk med når man downloader git: https://git-scm.com/download/win.
Først skal man ind i ssl-mappen:
Indtast i terminalen: cd backend
herefter: cd ssl
herfra indtaster man i terminalen: & 'c:\Program Files\Git\usr\bin\openssl.exe'
openssl er nu åbent og man indtaster følgende: genrsa -out client-key.pem 
tryk enter og indtast: req -new -key client-key.pem -out csr.pem   
Herefter skal man trykke enter nogle gange, man behøver ikke at indtaste noget.
indtast derefter: x509 -req -days 365 -in csr.pem -signkey client-key.pem -out client-cert.pem
Nu skulle der gerne være oprettet tre .pem filer i mappen backend/ssl.

Bruger man chrome, som jeg selv gør, får man højst sandsynligt en CORS-error. Det fixes ved at indtaste følgende i chrome URL: chrome://flags/#allow-insecure-localhost
Klik herefter Enable.


Man kører loadbalancer og servere: 
først skal man ind i den rigtige mappe: cd backend
herefter: node loadbalancer

Åbn index.html i browseren. Jeg benytter en VSC extension ved navn live server. Filen ligger i mappen: frontend
Tryk på knappen hvor der står "klik her!" og samtlige CRUD-operations kører. Hertil følger 8 alerts, så tryk på enter 8 gange.
Kig i terminalen i koden! her ses console.log's for samtlige operations, så man kan se præcis hvad der er foregået
Alternativt kan man udføre hver operation hver for sig, ved selv at udfylde inputs i html.

Bruger man chrome, som jeg selv gør, får man højst sandsynligt en CORS-error. 

OPTIONAL:
Der er ikke behov for at kigge i databasen i dette program, men ønsker man dette kan det gøres via mongoDBCompass: 
https://www.mongodb.com/try/download/compass 
Herfra kan man forbinde til min database ved at indtaste nedenstående og trykke "Connect"
mongodb+srv://MrRohmann:o0peter0o@cluster0.zaoqs.mongodb.net/dis2020?authSource=admin&replicaSet=atlas-x7hw5l-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true
Mappen/Schema hedder dis2020

Referencer: 
Forbindelsen til mongoose er hentet fra banking_app_exercise fra canvas.
Loadbalancer har taget udgangspunkt i: https://thecodebarbarian.com/building-your-own-load-balancer-with-express-js