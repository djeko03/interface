let dataAge = document.querySelector('.data__age');
let dataFirstName = document.querySelector('.data__firstName');
let dataLastName = document.querySelector('.data__lastName');
let dataIsMember = document.querySelector('.data__isMember');
let dataIsMenager = document.querySelector('.data__isMenager');
let dataIsAdmin = document.querySelector('.data__isAdmin');
let dataIsFavorite = document.querySelector('.data__isFavorite');
let wrapperDiv = document.querySelector('.wrapper');

let reWrapperDiv = document.querySelector('.reWrapper');
let reDataDiv = document.querySelector('.reData')
let reDataAge = document.querySelector('.reData__age');
let reDataFirstName = document.querySelector('.reData__firstName');
let reDataLastName = document.querySelector('.reData__lastName');
let reDataIsMember = document.querySelector('.reData__isMember');
let reDataIsMenager = document.querySelector('.reData__isMenager');
let reDataIsAdmin = document.querySelector('.reData__isAdmin');
let reDataIsFavorite = document.querySelector('.reData__isFavorite');

let ageInput = document.querySelector('#userAge');
let nameInput = document.querySelector('#reUserName');
let lastNameInput = document.querySelector('#reUserLastName');
let memberTrueInput = document.querySelector('#memberTrue');
let memberFalseInput = document.querySelector('#memberFalse');
let menagerTrueInput = document.querySelector('#managerTrue');
let menagerFalseInput = document.querySelector('#managerFalse');
let adminTrueInput = document.querySelector('#adminTrue');
let adminFalseInput = document.querySelector('#adminFalse');
let favoriteTrueInput = document.querySelector('#favoriteTrue');
let favoriteFalseInput = document.querySelector('#favoriteFalse');

let interBtn = document.querySelector('.interface__button');
let showBtn = document.querySelector('.show__button');


const data = {
    age: 30,
    name: {
        firstName: "Vasa",
        lastName: "Voroneg"
    },
    options: {
        role: {
            isMember: true,
            isMenager: true,
            isAdmin: false,
        },
        isFavorite: false,
    }
}

function showInfo (obj) {
    dataAge.innerHTML = 'age: ' + obj.age;
    dataFirstName.innerHTML = 'firstName: ' + obj.name.firstName;
    dataLastName.innerHTML = 'lastName: ' + obj.name.lastName;
    dataIsMember.innerHTML = 'isMember: ' + obj.options.role.isMember;
    dataIsMenager.innerHTML = 'isMenager: ' + obj.options.role.isMenager;
    dataIsAdmin.innerHTML = 'isAdmin: ' + obj.options.role.isAdmin;
    dataIsFavorite.innerHTML = 'isFavorite: ' + obj.options.isFavorite;
}
showInfo(data);


interBtn.addEventListener('click', doChange);
showBtn.addEventListener('click', reShowInfo);


function doChange () {
    reWrapperDiv.style.display = 'flex';
    wrapperDiv.style.display = 'flex';
    wrapperDiv.style.borderBottom = '8px solid black';
}


function reShowInfo () {
    let reData = Object.assign({}, data);

    if (ageInput.value !== '') {
        reData.age = Number(ageInput.value)
    }
    if (nameInput.value !== '') {
        reData.name.firstName = nameInput.value
    }
    if (lastNameInput.value !== '') {
        reData.name.lastName = lastNameInput.value
    }
    if (memberTrueInput.checked) {
        reData.options.role.isMember = true;
    } else {reData.options.role.isMember = false;}
    if (menagerTrueInput.checked) {
        reData.options.role.isMenager = true;
    } else{reData.options.role.isMenager = false;}
    if (adminTrueInput.checked) {
        reData.options.role.isAdmin = true;
    } else {reData.options.role.isAdmin = false;}
    if (favoriteTrueInput.checked) {
        reData.options.isFavorite = true;
    } else {reData.options.isFavorite = false;}

    console.log('Старые данные: ');
    console.log(data);

    console.log('Новые данные: ');
    console.log(reData);
}






