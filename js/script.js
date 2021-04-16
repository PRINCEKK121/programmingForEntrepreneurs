const users = [
  { name: 'Prince', gender: 'M', hobby: 'coding', avatar: 'avatar1.png' },
  { name: 'Peggy', gender: 'F', hobby: 'cooking', avatar: 'avatar2.png' },
  { name: 'Seth', gender: 'M', hobby: 'gaming', avatar: 'avatar3.png'},
  { name: 'Endeavor', gender: 'M', hobby: 'hero', avatar: 'avatar4.png' },
  {name: 'Luffy', gender: 'M', hobby: 'joking', avatar: 'avatar5.png' },
  { name: 'Ama', gender: 'F', hobby: 'selling', avatar: 'avatar6.png' },
  { name: 'Belinda', gender: 'F', hobby: 'sleeping', avatar: 'avatar7.png' },
  { name: 'Mike', gender: 'M', hobby: 'fashion', avatar: 'avatar8.png' },
  { name: 'Rose', gender: 'F', hobby: 'studying', avatar: 'avatar9.png' },
  { name: 'Anita', gender: 'F', hobby: 'pets', avatar: 'avatar10.png' }
];

window.addEventListener('load', function () {
  // Elements
  const searchBtn = document.querySelector('#searchBtn');
  const searchResults = document.querySelector('#results');
  const searchTerm = document.querySelector('#hobbies');
  const gender = document.querySelector('#gender');

  searchBtn.addEventListener('click', function() {
    console.log(searchTerm.value);
    console.log(gender[gender.selectedIndex].value);
  });
});
