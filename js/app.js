const users = [
   {
      id: 1,
      name: "Ethan Lefebvre",
      dob: {
         date: "1990-12-10T00:00:34.013Z",
         age: 32,
      },
      city: "Saint-Étienne",
      email: "ethan.lefebvre@example.com",
      picture: "https://randomuser.me/api/portraits/men/3.jpg",
   },
   {
      id: 2,
      name: "Ahmadjon Abdulhamidov",
      dob: {
         date: "2007-12-10T00:00:34.013Z",
         age: 16,
      },
      city: "San-Fansico",
      email: "ethan.ahmadjon@example.com",
      picture: "https://randomuser.me/api/portraits/men/54.jpg",
   },
   {
      id: 3,
      name: "Abdulboriy Abdulhafizov",
      dob: {
         date: "1998-12-10T00:00:34.013Z",
         age: 26,
      },
      city: "Toshkent",
      email: "ethan.abdulboriy@example.com",
      picture: "https://randomuser.me/api/portraits/men/44.jpg",
   },
   {
      id: 4,
      name: "Mansurbek Rahmonaliyev",
      dob: {
         date: "2001-12-10T00:00:34.013Z",
         age: 22,
      },
      city: "Toshkent",
      email: "ethan.mansurbek@example.com",
      picture: "https://randomuser.me/api/portraits/men/12.jpg",
   }

];

const cardsContainer = document.querySelector('.cards-container'),
   formEl = document.querySelector('form')

function createNewUser() {
   cardsContainer.innerHTML = ''
   users.forEach((user) => {
      cardsContainer.innerHTML += `
   <div class="card pt-3" style="width: 18rem;">
   <img src=${user.picture}
      class="card-img-top w-75 rounded-circle mx-auto" alt="">
   <div class="card-body">
      <h5 class="card-title">${user.name}</h5>
      <p>Age: ${user.dob.age}</p>
      <p>City: ${user.city}</p>
      <p>Email: ${user.email}</p>

      <a href="#" id="delete" class="btn btn-primary">Delete this user</a>
   </div>
</div>`
   })

   document.querySelectorAll("#delete").forEach((item, i) => {
      item.addEventListener('click', () => {
         item.parentElement.parentElement.remove()
         delete users[i]

      })
   })
}


formEl.addEventListener("submit", (e) => {
   e.preventDefault()

   const fullName = formEl.querySelector('#fullName'),
      email = formEl.querySelector('#email'),
      dob = formEl.querySelector("#dob"),
      city = formEl.querySelector("#city"),
      pictureUrl = formEl.querySelector("#picture-url");
   users.push({
      id: Math.random(),
      name: fullName.value,
      dob: {
         date: dob.value,
         age: 2023 - dob.value.slice(0, 4)
      },
      city: city.value,
      email: email.value,
      picture: pictureUrl.value,
   })
   e.target.reset()
   createNewUser()




})

createNewUser()