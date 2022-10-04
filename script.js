console.log("page loaded...");

function modifica_titulo() {
    var title = document.querySelector('.card-body__profile-name');
    var profileImg = document.querySelector('.avatar-m');
    var ubication = document.querySelector('.card-body__icon-ubication h3');
    title.innerHTML = "Jonathan Cardona";
    profileImg.src = "./images/profile_JCC.jpg";
    ubication.innerHTML = "Medellín";
    console.log("Update Profile, OK!")
}

var requests = 2;
var connections = 500;
var checkRequests = document.querySelector('.badge-requests');
var addConnections = document.querySelector('.badge-connections');

function requestsAdd() {
    var friendRequestAdd = document.querySelector('.card-list-item');
    friendRequestAdd.remove();
    console.log("Item add");

    connections ++;
    addConnections.innerText = "+" + connections;
    console.log(connections);

    requests --;
    checkRequests.innerText = requests ;
    console.log(requests);
}

function requestsDelete() {
    var friendRequestDelete = document.querySelector('.card-list-item');
    friendRequestDelete.remove();
    console.log("Item delete");

    requests --;
    checkRequests.innerText = requests ;
    console.log(requests);
}


