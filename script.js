fetch("https://api.quotable.io/random")
  .then((response) => response.json())
  .then((mydata) => {
    const quote = mydata.content;
    const author = mydata.author;
    const quoteEle = document.getElementById("quoteID");
    const authorEle = document.getElementById("authorID");
    quoteEle.innerHTML = '" ' + quote + ' "';
    authorEle.innerHTML = "-" + author;
  });
