async function userData(){
        const urlParams= new URLSearchParams(window.location.search); 
        // tarayıcı çubuğu sorgu parametresi 
        let id = urlParams.get("userId"); 
        // userİd değerini alıyoruz 
        console.log("Gelen İd:",id);

        if(!id || isNaN(id) || id < 1 || id > 10 ){
        id = prompt("Lütfen 1 ile 10 arasında bir değer giriniz");
        // html de girilen id 1-10 arasında değilse
        //veya bulunamadıysa id ye yeni bir değer atanacak oda kullanıcadan alınan prompt
        if(!id || isNaN(id) || id<1 || id>10){
            alert("Girdiğiniz sayı 1 ile 10 arasında olmadıldır!");
            throw new Error("Geçersiz Id");
            }
        }
        console.log("kullanıcı istek:", id);
        const datatUser = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
        const data = await datatUser.json();
        console.log("data:", data);
        return data; 

}

async function dataPromiseId() {
    try {
        const userPromise = await userData();
        const containerId = document.getElementById("data-row");
        let idMarkup = "";
        userPromise.map(element => {
            idMarkup += `
                <div class="col-lg-4 mb-4 mt-5">
                    <div class="card card_user">
                        <div class="card-body">
                        <h5 class="card-title"><i class="fa fa-envelope icon-color"></i> User posts</h5>
                            <ul class="list-unstyled">
                                <li><b>UserId:</b> ${element.userId}</li>
                                <li><b>Id:</b> ${element.id}</li>
                                <li><b>Title:</b> ${element.title}</li>
                                <li><b>Body:</b> ${element.body}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        });
        containerId.innerHTML = idMarkup;
    } catch (error) {
        console.log("Alınan hata:", error);
    }
}

dataPromiseId();



const goBackButton = document.getElementById("goBackButton");
goBackButton.addEventListener("click", function() {
    window.location.href = "index.html"; 
});


const promptBtn = document.getElementById("promptButton");
promptBtn.addEventListener("click", async function(){
    const promptId = prompt("ütfen 1 ile 10 arasında bir Id numarasını giriniz")
    if(!promptId || isNaN(promptId) || promptId<1 || promptId>10){
        alert("Girdiğiniz sayı 1 ile 10 arasında olmadıldır!");
        throw new Error("Geçersiz Id");
        }
        try {
            const userId= await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${promptId}`);
            const dataUser = await userId.json();
            console.log("alınan id:", dataUser);
            const containerId = document.getElementById("data-row");
            let idMarkup = "";
            dataUser.map(element => {
            idMarkup += `
                <div class="col-lg-4 mb-4 mt-5">
                    <div class="card card_user">
                        <div class="card-body">
                        <h5 class="card-title"><i class="fa fa-envelope icon-color"></i> User posts</h5>
                            <ul class="list-unstyled">
                                <li><b>UserId:</b> ${element.userId}</li>
                                <li><b>Id:</b> ${element.id}</li>
                                <li><b>Title:</b> ${element.title}</li>
                                <li><b>Body:</b> ${element.body}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        });
        containerId.innerHTML = idMarkup;

        } catch (error) {
            console.log("Alınan hata:", error);
        }
});