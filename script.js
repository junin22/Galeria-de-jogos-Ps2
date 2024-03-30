function searchGames() {
    let input = document.getElementById('searchInput').value.toUpperCase();
    let games = document.getElementsByClassName('jogo');

    for (let i = 0; i < games.length; i++) {
      let title = games[i].getElementsByClassName('titulo-jogo')[0];
      if (title.innerText.toUpperCase().indexOf(input) > -1) {
        games[i].style.display = '';
      } else {
        games[i].style.display = 'none';
      }
    }
  }

  function ordenarAscendente() {
    var cartaz = document.querySelector('.cartaz');
    var jogos = cartaz.querySelectorAll('.jogo');
    var jogosArray = Array.prototype.slice.call(jogos);
    jogosArray.sort(function(a, b) {
      var tituloA = a.querySelector('.titulo-jogo').textContent.trim().toUpperCase();
      var tituloB = b.querySelector('.titulo-jogo').textContent.trim().toUpperCase();
      if (tituloA < tituloB) return -1;
      if (tituloA > tituloB) return 1;
      return 0;
    });
    jogosArray.forEach(function(elem) {
      cartaz.appendChild(elem);
    });
  }

  function ordenarDescendente() {
    var cartaz = document.querySelector('.cartaz');
    var jogos = cartaz.querySelectorAll('.jogo');
    var jogosArray = Array.prototype.slice.call(jogos);
    jogosArray.sort(function(a, b) {
      var tituloA = a.querySelector('.titulo-jogo').textContent.trim().toUpperCase();
      var tituloB = b.querySelector('.titulo-jogo').textContent.trim().toUpperCase();
      if (tituloA > tituloB) return -1;
      if (tituloA < tituloB) return 1;
      return 0;
    });
    jogosArray.forEach(function(elem) {
      cartaz.appendChild(elem);
    });
  }
