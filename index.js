var s = skrollr.init(); //initialising skrollr
function stopScroll() {
  s.destroy();
}
if (performance.navigation.type === 1) {
  // Redirect the user back to index.html
  window.location.href = "index.html";
}
//pause custom
function restart() {
  //restarts the scroll
  s = skrollr.init();
  s.animateTo(7500, {
    duration: 0,
    easing: "linear",
  });
}

// removing the scroll when the button is visible
document.body.onscroll = function () {
  var pauseBtn = document.getElementById("pause-btn");

  if (pauseBtn.getBoundingClientRect().bottom <= window.innerHeight) {
    document.body.onscroll = "";
    stopScroll();
  }
};

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  var flag1 = document.getElementById("flag1");
  if (isElementInViewport(flag1)) {
    // element is in view, do something
    // s.destroy();
    // var s = skrollr.init();
    // s.animateTo(30500, {
    //   duration: 0,
    //   easing: "linear",
    // });
    // call your function here
  }
}

window.addEventListener("scroll", handleScroll);

//set user name
function name() {
  var name = "Shakti";
}

function changeText() {
  var button = document.getElementById("pause-btn");
  button.innerHTML = "Scroll to Continue";
}

function myFunction() {
  //fetches name from input
  var x = document.getElementById("ip2").value;
  if (x === "") {
    document.getElementById("ip2").value = "Shakti";
    document.getElementById("demo").innerHTML = "Shakti";
    document.getElementById("name_she").innerHTML = "Shakti";
  } else {
    document.getElementById("demo").innerHTML = x;
    document.getElementById("name_she").innerHTML = x;
  }
}
var audio_x = document.getElementById("myAudio");

function enableAutoplay() {
  audio_x.autoplay = true;
  audio_x.load();
}
//keyboard controls
document.onkeydown = function (event) {
  switch (event.keyCode) {
    case 38: // Up arrow key
      window.scrollBy(0, -100);
      break;
    case 40: // Down arrow key
      window.scrollBy(0, 100);
      break;
  }
};

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("pause-btn").click();
    var button = document.getElementById("pause-btn");
    button.innerHTML = "Scroll To Continue";
  }
});
let count = 0;

function increaseCount() {
  count++;
  localStorage.setItem('count', count);
}

function updateCount() {
  let countElement = document.getElementById('count');
  let storedCount = localStorage.getItem('count');
  if (storedCount !== null) {
    count = parseInt(storedCount);
  }
  countElement.innerText = count;
}

updateCount();

function displayScore(score) {
  // Set the text content of the alert based on the score
  if (score === 1) {
    alert('Oops, you only scored 1');
  } else if (score === 2) {
    alert('Not bad, you scored 2');
  } else if (score === 3) {
    alert('Wow, you scored 3!');
  } else if (score === 0) {
    alert('You scored 0');
  }
}
// default is 1000 ms; but for testing I set that to 0 ms..
// I guess it's exhausting JS interpreter (don't know much about it).

//removing the scroll when the button is visible

// console.log(data);
// const s1c = document.getElementById("s1c");
// const image = document.getElementById("image");

// s1c.addEventListener("mouseenter", () => {
//   image.src = "path/to/second/image.jpg";
// });

// s1c.addEventListener("mouseleave", () => {
//   image.src = "path/to/first/image.jpg";
// });
