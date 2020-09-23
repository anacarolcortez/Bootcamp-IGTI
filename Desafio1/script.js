let allUsers = [];
let input = document.querySelector("#name");
let button = document.querySelector("#search");

window.addEventListener('load', () => {

    fetchUsers();
    /*.catch(err => {
        console.log("Erro na requisição");
    });*/

});


async function fetchUsers() {
    const res = await fetch("https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo");
    const json = await res.json();

    
    allUsers = json.results.map(user => {
        const { name, picture, dob, gender } = user;

        return {
            name: name.first + " " + name.last,
            picture: picture.medium,
            age: dob.age,
            gender
        }

    })
    
}

input.addEventListener('keyup', (event) => {
    let word = event.target.value;
    render(word);
})


function render(word) {
    let showSelected = document.querySelector(".insertResults");
    let usersHTML = "";
    let count = 0;

    allUsers.map(user => {
        return { name, picture, age, gender } = user;
    }).filter(res => res.name.includes(word))
    .forEach(one => {
        const userHTML= `
            <div class="showResults">
                <div>
                    <img src="${one.picture}" alt="${one.name}">
                </div>
                <div>
                    <span>${one.name},</span>
                    <span>${one.age}anos</span>
                </div>
            </div>
        `;

        usersHTML += userHTML;
        count++;
    })

    showSelected.innerHTML = usersHTML;
    countUsers(count);
    averageAge(word, count);
}

function countUsers(count) {
    let sumUsers = document.querySelector(".showCount");

    sumUsers.textContent = `${count} usuário(s) encontrado(s)`
}

function sumAge(word) {
    let ageSum = document.querySelector("#sumAges");

    const sumAge = allUsers.map(user => {
        return { name, picture, age, gender } = user;
    }).filter(res => res.name.includes(word))
    .map(r => r.age)
    .reduce((accu, curr) => {
        return  accu + curr;
    }, 0); 
    
    ageSum.textContent = sumAge;
    return sumAge;
}

function averageAge(word, count) {
    let average = document.querySelector("#averageAges");
    let sum = sumAge(word);
    let averageAge = sum/count;
    average.textContent = averageAge;
}
