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
