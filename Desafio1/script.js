let allUsers = [];
let input = document.querySelector("#name");

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
    let showSelected = document.querySelector(".results");

    //corrigir:
    allUsers.filter(user => {
        user.name.indexOf(word) > -1;
    }).forEach(result => {
            const { name, picture, age, gender } = result;

            const userHTML= `
                <div class="showResults">
                    <div>
                        <img src="${picture}" alt="${name}">
                    </div>
                    <div>
                        <span>${name},</span>
                        <span>${age}</span>
                    </div>
                </div>
            `;
    
            showSelected.appendChild(userHTML);
    });

}

//implementar somas