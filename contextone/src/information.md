1- daha önceden redux da yapttığımız state management işlemini artıık react context ile yapacaz.yani component syımız çok fazla olduğu zaman bunları tek bir yerde toplayıp her yerden çağırmayı sağlıyoruz.

2-Çok fazla component varsa props larla geçirmek zor oluyordu.yani prop.prop.... gibi oluyordu ama context ile bu olmuyor tekbir yerde toplyıp oradan çağrıyorz.

3-en dışta context içinde React. createContext 

4-Providing Context : nerede kullancaksak bunu provider sayesinde aşağıdaki componentlerde göndermeye denir.Aşağıda  value değeri useri context den çağırıyorum ve sadece HomePage içerisinde ve HomePage içerisindeki componentlerde kullanabilirim.bunun dışındaki componentlerde kullanamam.Bu yüzden UseProvider ile sarmallıyoruz.
<UserProvider value={user}>             
    <HomePage/>
</UserProvider>

5-Consuming Context : context deki state leri çağırıp kullanmaya diyoruz.

6-Updating Component değişiklikleri update edebiliyoruz.

7-Cunstom Hooks : kendi hookumuzu yazmak .

