let myImage = document.querySelector("img");
let toggler = "Python";

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (toggler === "Python") {
    if (mySrc === "images folder/python.png") {
      myImage.setAttribute("src", "images folder/python2.jpg");
    } else {
      myImage.setAttribute("src", "images folder/python.png");
    }
  } else {
    if (mySrc === "images folder/c2.jpg") {
      myImage.setAttribute("src", "images folder/c.png");
    } else {
      myImage.setAttribute("src", "images folder/c2.jpg");
    }
  }
};

let myButton = document.querySelector("button");

myButton.onclick = function () {
  let heading = document.querySelector("h1");
  console.log(heading);
  if (toggler === "Python") {
    toggler = "C";

    document.title = "C is cute !"
    document.getElementById("head").innerHTML = "C is cute !";
    document.getElementById("intro").innerHTML =
      "C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system.";
    document.getElementById("features").innerHTML = "C is";
    document.getElementById("is1").innerHTML = "Simple";
    document.getElementById("is3").innerHTML = "Portable";
    document.getElementById("is4").innerHTML = "Mid-level Programming language";
    document.getElementById("is5").innerHTML =
      "Structured programming language";
    document.getElementById("is2").innerHTML = "Fast and Efficient";
    document.getElementById("sub").innerHTML = "The C Programming Language"
    document.getElementById("other").innerHTML =
      "The C Programming Language (sometimes termed K&R, after its authors' initials) is a computer programming book written by Brian Kernighan and Dennis Ritchie, the latter of whom originally designed and implemented the language, as well as co-designed the Unix operating system with which development of the language was closely intertwined. The book was central to the development and popularization of the C programming language and is still widely read and used today <a href='https://www.python.org/psf/' id='link' target='_blank'> >>> Learn more</a>";
    let link = document.getElementById("link");
    link.href = "https://en.wikipedia.org/wiki/The_C_Programming_Language";
    let image = document.getElementById("image");
    image.src = "images folder/c.png";
  } else {
    toggler = "Python"

    document.title = "Python is cool !"
    document.getElementById("head").innerHTML = "Python is cool !";
    document.getElementById("intro").innerHTML = "Python is a programming language that lets you work quickly and integrate systems more effectively."
    document.getElementById("features").innerHTML = "Python is"
    document.getElementById("is1").innerHTML = "Powerful and Fast"
    document.getElementById("is2").innerHTML = "Plays well with other"
    document.getElementById("is3").innerHTML = "Run everywhere"
    document.getElementById("is4").innerHTML = "Is friendly and Easy to learn"
    document.getElementById("is5").innerHTML = "Is open"
    document.getElementById("sub").innerHTML = "Python Foundation"
    document.getElementById("other").innerHTML = "The mission of the Python Software Foundation is to promote, protect, and advance the Python programming language, and to support and facilitate the growth of a diverse and international community of Python programmers.  <a href='https://www.python.org/psf/' id='link' target='_blank'> >>> Learn more</a>"
    
    let link = document.getElementById("link");
    link.href = "https://www.python.org/psf/";
    let image = document.getElementById("image");
    image.src = "images folder/python.png";
  }
};
