const users = [
  {
    name: 'Prince',
    age: 28,
    gender: 'M',
    hobby: 'coding',
    avatar: 'avatar0.png',
  },
  {
    name: 'Peggy',
    age: 27,
    gender: 'F',
    hobby: 'cooking',
    avatar: 'avatar1.png',
  },
  {
    name: 'Seth',
    age: 30,
    gender: 'M',
    hobby: 'gaming',
    avatar: 'avatar2.png',
  },
  {
    name: 'Endeavor',
    age: 42,
    gender: 'M',
    hobby: 'gaming',
    avatar: 'avatar3.png',
  },
  {
    name: 'Luffy',
    gender: 'M',
    age: 19,
    hobby: 'joking',
    avatar: 'avatar4.png',
  },
  {
    name: 'Ama',
    gender: 'F',
    age: 23,
    hobby: 'selling',
    avatar: 'avatar5.png',
  },
  {
    name: 'Belinda',
    gender: 'F',
    age: 19,
    hobby: 'pets',
    avatar: 'avatar6.png',
  },
  {
    name: 'Mike',
    gender: 'M',
    age: 19,
    hobby: 'coding',
    avatar: 'avatar7.png',
  },
  { name: 'Rose', gender: 'F', age: 22, hobby: 'pets', avatar: 'avatar8.png' },
  {
    name: 'Anita',
    gender: 'F',
    age: 24,
    hobby: 'cooking',
    avatar: 'avatar9.png',
  },
];

window.addEventListener('load', function () {
  // elements
  const searchBtn = document.querySelector('#searchBtn');
  const results = document.querySelector('#results');
  const gender = document.querySelector('#gender');

  // Changing styles
  gender.style.fontFamily = 'Chivo';
  searchBtn.style.fontFamily = 'Playfair Display'

  // functions
  const generateHTML = (users) => {
    // grabbing all the user input
    const selectedGender = gender[gender.selectedIndex].value;
    const searchTerm = document.querySelector('#hobbies').value;
    const minAge = document.querySelector('#min-age').value;
    const maxAge = document.querySelector('#max-age').value;

    let resultsHTML = '';

    users.forEach((user, index) => {
      const userChoice =
        (selectedGender === 'A' || selectedGender === user.gender) &&
        (searchTerm === '' || searchTerm === user.hobby) &&
        user.age >= minAge &&
        user.age <= maxAge;

      if (userChoice) {
        resultsHTML += `
          <div class="person-row">
            <img src="images/avatar${index}.png" alt='${user.name}'>
            <div class="person-info">
              <div>${user.name}</div>
              <div>${user.hobby}</div>
            </div>
            <button>Add as a friend</button>
          </div>`;
      }
    });

    return resultsHTML;
  };

  searchBtn.addEventListener('click', function () {
    results.innerHTML = generateHTML(users);
  });
});
