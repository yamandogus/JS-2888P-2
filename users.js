// fetch("https://jsonplaceholder.typicode.com/users");
async function resourcesData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;

};

async function userDataCards(){
    const userData = await resourcesData();
    console.log(userData);
    const userContainer = document.getElementById("data-row");
    let markup = "";
    userData.forEach(element => {
    markup += `
    <div class="col-lg-4 mb-4">
                <div class="card card_user">
                    <div class="card-body">
                        <h5 class="card-title"><i class="fa fa-user-circle icon-color"></i> Basic Information</h5>
                        <ul>
                            <li><strong>id:</strong> ${element.id}</li>
                            <li><strong>name:</strong> ${element.name}</li>
                            <li><strong>username:</strong> ${element.username}</li>
                        </ul>
                        <h5 class="card-title"><i class="fas fa-location-dot icon-color""></i> Address Information</h5>
                        <p>${element.address.street} ${element.address.suite} ${element.address.city} ${element.address.zipcode}</p>
                        <h5 class="card-title"><i class="fas fa-building icon-color""></i> Company Information</h5>
                        <p>Street: ${element.company.name} ${element.company.catchPhrase} ${element.company.bs}</p>
                        <h5 class="card-title"><i class="fas fa-envelope icon-color""></i> Contact Information</h5>
                        <ul>
                            <li>Email: ${element.email}</li>
                            <li>Phone: ${element.phone}</li>
                            <li>Website: ${element.website}</li>
                        </ul>
                        <a id="links" href="/posts.html?userId=${element.id}">View Posts</a>
                    </div>
                </div>
            </div>
    `   
    });
    userContainer.innerHTML = markup;
}

userDataCards();

