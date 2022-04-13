localimizde fake api oluşturup get,post ,delete işlemlerini yapacam.

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

8 - fetch işlemini axios ile yapacam çok daha kolay ve kısa bir yol.json ile uğraşmam gerek olmuyor.

9- addTask işlemini backend kısmıyla yapacam.backend data gönderecem dolayısıyla  post yapmam gerekiyor.

ezberlemene gerek yok [developer mozilla using fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) sayfasına git . başta fetch ile yapıyorum.axios a göre ne kadar zor olduğunu görelim.

10- axios ile addtask yapıyorum içine Url ve göndermek istediğimiz data yı ekleyip backende gönderiyorum.

Not : fetchTasks fonk her zaman çağırmamın sebebi güncel verileri her zaman görmek için çağırıyorum.

11- backenden axios ile delete işlemlerini yapacam.











