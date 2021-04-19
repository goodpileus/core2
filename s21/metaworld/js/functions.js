// RANDOMIZE CONTAINER CHILDREN
$( document ).ready(function() {
  console.log(':-)');

  var random = document.querySelector('.random');
  for (var i = random.children.length; i >= 0; i--) {
    random.appendChild(random.children[Math.random() * i | 0]);
  }
});
