const users = [
  { name: 'Prince', gender: 'M', hobby: 'coding', avatar: 'avatar0.png' },
  { name: 'Peggy', gender: 'F', hobby: 'cooking', avatar: 'avatar1.png' },
  { name: 'Seth', gender: 'M', hobby: 'gaming', avatar: 'avatar2.png' },
  { name: 'Endeavor', gender: 'M', hobby: 'flirting', avatar: 'avatar3.png' },
  { name: 'Luffy', gender: 'M', hobby: 'joking', avatar: 'avatar4.png' },
  { name: 'Ama', gender: 'F', hobby: 'selling', avatar: 'avatar5.png' },
  { name: 'Belinda', gender: 'F', hobby: 'sleeping', avatar: 'avatar6.png' },
  { name: 'Mike', gender: 'M', hobby: 'fashion', avatar: 'avatar7.png' },
  { name: 'Rose', gender: 'F', hobby: 'studying', avatar: 'avatar8.png' },
  { name: 'Anita', gender: 'F', hobby: 'pets', avatar: 'avatar9.png' },
];

window.addEventListener('load', function () {
  // Elements
  const searchBtn = document.querySelector('#searchBtn');
  const results = document.querySelector('#results');
  const searchTerm = document.querySelector('#hobbies');
  const gender = document.querySelector('#gender');

  // Functions
  const generateHTML = function (users) {
    let resultsHTML = '';

    users.forEach(
      (user, index) =>
        (resultsHTML += `
          <div class="person-row">
            <img src="images/avatar${index}.png" alt='${user.name}'>
            <div class="person-info">
              <div>${user.name}</div>
              <div>${user.hobby}</div>
            </div>
            <button>Add as a friend</button>
          </div>`)
    );

    results.innerHTML = resultsHTML;
  };

  // generating the template
  generateHTML(users);

  searchBtn.addEventListener('click', function () {
    console.log(searchTerm.value);
    console.log(gender[gender.selectedIndex].value);

    searchResults.innerHTML = resultsHTML;
  });
});
