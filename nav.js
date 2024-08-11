function normalNav(active) {

  nav = document.getElementById('navigation');
  
  

  nav.innerHTML= '<nav id="list"><ul><li><a id="home" href="/index.html">TRANSLATOR</a></li><li><a id="sudoku" href="/sudoku.html">SUDOKU</a></li><li><a id="scramble" href="/scramble.html" >SCRAMBLE</a></li><li><a id="wordsearch" href="/wordsearch.html">WORDSEARCH</a></li><li><a id="cryptogram" href="/cryptogram.html">CRYPTOGRAM</a></li><li><a id="hangman" href="/hangumi.html">HANGMAN</a></li><li style="float:right" id="title"><a href="/index.html">Erostian Games</a></li></ul></nav>';

  
  // add active classes
  for (let i = 0; i < active.length; i++){
    current = document.getElementById(active[i]);
    current.classList.add("active");
  }

  
}