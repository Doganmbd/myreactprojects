1 - json server oluşturuyorum ve yüklüyorum. npm i jason-server.

2 - packet-json da scriptlerin en altına "server" : "json-server --watch db.json --port 5000" , yeni bir server ayağı kaldıracam backend gibi olacak .

3 - server ayağa kaldıracaz.localhost 5000 ayağı kaldıracaz. npm run server .db.json oluşur.

4-baseUrl oluşturuyorum . axios içine de direk oluşturabilirim ama kalabalık etmesin diye baseUrl oluşturuyorum.

5- CRUD işlemleri yapacam create,read,update,delete. ilkin read yapacaz.fetch yapıyoruz.fetch baseUrl ile yakalıyorum ve json formatına çeviriyorum.Ve datalarımı görüyorum.

6- data mın ilk andan gelmesini istiyorum yani click vb. şeyler yapmadan sayfa açılır açılmaz datanın gelmesini istersem useEffect kullanmalıyım.

useEffect içinde fonksiyonumu çağırmam lazım ve fetch işlemlerimi useEffect in dışında yapmam lazım çünkü ben fetch işlemlerini başka yerlerde de kullanacam. eseEffect scope dışında da kullanmak istediğim için dışarda oluşturuyorum.

useEffect , [] ile sadece ilk açıldığında çağır bir daha çağırma anlamındaydı.

ekranda yazdırmak için setTask fonk içine dat mı koyuyorum ve backend kısmındaki data mı ekranda görebiliyorum.

7- hatalarımı yakalamak için try-catch kullanıyorum
