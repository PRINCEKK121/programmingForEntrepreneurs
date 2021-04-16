const users = [
  { name: 'Prince', gender: 'M', hobby: 'coding', avatar: 'avatar0.png' },
  { name: 'Peggy', gender: 'F', hobby: 'cooking', avatar: 'avatar1.png' },
  { name: 'Seth', gender: 'M', hobby: 'gaming', avatar: 'avatar2.png' },
  { name: 'Endeavor', gender: 'M', hobby: 'gaming', avatar: 'avatar3.png' },
  { name: 'Luffy', gender: 'M', hobby: 'joking', avatar: 'avatar4.png' },
  { name: 'Ama', gender: 'F', hobby: 'selling', avatar: 'avatar5.png' },
  { name: 'Belinda', gender: 'F', hobby: 'pets', avatar: 'avatar6.png' },
  { name: 'Mike', gender: 'M', hobby: 'coding', avatar: 'avatar7.png' },
  { name: 'Rose', gender: 'F', hobby: 'pets', avatar: 'avatar8.png' },
  { name: 'Anita', gender: 'F', hobby: 'cooking', avatar: 'avatar9.png' },
];

window.addEventListener('load', function () {
  // elements
  const searchBtn = document.querySelector('#searchBtn');
  const results = document.querySelector('#results');
  const gender = document.querySelector('#gender');

  // functions
  const generateHTML = (users) => {
    // grabbing all the user input
    const selectedGender = gender[gender.selectedIndex].value;
    const searchTerm = document.querySelector('#hobbies').value;

    let resultsHTML = '';

    users.forEach((user, index) => {
      const userChoice =
        (selectedGender === 'A' || selectedGender === user.gender) &&
        (searchTerm === '' || searchTerm === user.hobby);

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

  // generating the template
  generateHTML(users);

  searchBtn.addEventListener('click', function () {
    results.innerHTML = generateHTML(users);
  });
});
