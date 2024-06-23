document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("email-icon").addEventListener("click", function () {
    window.location.href = "mailto:ak5488919@gmail.com";
  });

  document
    .getElementById("whatsapp-icon")
    .addEventListener("click", function () {
      window.open("https://wa.me/7498185184", "_blank");
    });

  document.getElementById("github-icon").addEventListener("click", function () {
    window.open("https://github.com/asfkhan", "_blank");
  });

  document
    .getElementById("linkedin-icon")
    .addEventListener("click", function () {
      window.open("https://www.linkedin.com/in/aseef-khan", "_blank");
    });
});



const dots = document.querySelectorAll(".dot3");

window.addEventListener("scroll", () => {
  dots.forEach((dot) => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const dotTop = dot.offsetTop;

    if (scrollPosition > dotTop) {
      dot.style.animation = "entry4 1s forwards";
    }
  });
});
const d1 = document.querySelectorAll(".event");

window.addEventListener("scroll", () => {
  d1.forEach((d1) => {
    let hasAnimated = false;
    const scrollPosition = window.scrollY + window.innerHeight;
    const d1Top = d1.offsetTop;

    if (scrollPosition > d1Top && !hasAnimated) {
      d1.style.animation = "entryd1 1s forwards";
      d1.style.transform = "transformX(0)";
      d1.style.transition = "transform 5s ease" ;
      hasAnimated = true;

      setTimeout(()=>{
        d1.style.animation = "continue 5s ease-in infinite";
        d1.classList.add('animate-continue');
      },1000);
    }
    else {
        d1.style.animation = "";
      }
  });
});
const exentry = document.querySelectorAll(".h3experienceID");
window.addEventListener("scroll", () => {
    exentry.forEach((exentry) => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const h3ex = exentry.offsetTop;
  
      if (scrollPosition > h3ex) {
        exentry.style.animation = "experienceEntry 1s forwards";
      } else {
        exentry.style.animation = "";
      }
    });
  });

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("email-icon2").addEventListener("click", function () {
    window.location.href = "mailto:ak5488919@gmail.com";
  });

  document
    .getElementById("whatsapp-icon2")
    .addEventListener("click", function () {
      window.open("https://wa.me/7498185184", "_blank");
    });

  document
    .getElementById("github-icon2")
    .addEventListener("click", function () {
      window.open("https://github.com/asfkhan", "_blank");
    });

  document
    .getElementById("linkedin-icon2")
    .addEventListener("click", function () {
      window.open("https://www.linkedin.com/in/aseef-khan", "_blank");
    });
});

function toggleText(element) {
  var moreText = element.previousElementSibling;
  if (moreText.style.display === "none" || moreText.style.display === "") {
    moreText.style.display = "inline";
    element.textContent = "See Less";
  } else {
    moreText.style.display = "none";
    element.textContent = "See More";
  }
}

var dialogBoxnew = document.getElementById("latestdialogBox");
var eventLinew = document.getElementById("latest");
var closeBtnnew = document.getElementsByClassName("close")[0];
eventLinew.onclick = function () {
  dialogBoxnew.style.display = "block";
};
closeBtnnew.onclick = function () {
  dialogBoxnew.style.display = "none";
};

var dialogBox1 = document.getElementById("firstdialogBox");
var eventLi1 = document.getElementById("first");
var closeBtn1 = document.getElementsByClassName("close")[1];
eventLi1.onclick = function () {
  dialogBox1.style.display = "block";
};
closeBtn1.onclick = function () {
  dialogBox1.style.display = "none";
};
var dialogBox2 = document.getElementById("seconddialogBox");
var eventLi2 = document.getElementById("second");
var closeBtn2 = document.getElementsByClassName("close")[2];
eventLi2.onclick = function () {
  dialogBox2.style.display = "block";
};
closeBtn2.onclick = function () {
  dialogBox2.style.display = "none";
};
var dialogBox3 = document.getElementById("thirddialogBox");
var eventLi3 = document.getElementById("third");
var closeBtn3 = document.getElementsByClassName("close")[3];
eventLi3.onclick = function () {
  dialogBox3.style.display = "block";
};
closeBtn3.onclick = function () {
  dialogBox3.style.display = "none";
};
var dialogBox4 = document.getElementById("fourthdialogBox");
var eventLi4 = document.getElementById("fourth");
var closeBtn4 = document.getElementsByClassName("close")[4];
eventLi4.onclick = function () {
  dialogBox4.style.display = "block";
};
closeBtn4.onclick = function () {
  dialogBox4.style.display = "none";
};
var dialogBox5 = document.getElementById("fifthdialogBox");
var eventLi5 = document.getElementById("fifth");
var closeBtn5 = document.getElementsByClassName("close")[5];
eventLi5.onclick = function () {
  dialogBox5.style.display = "block";
};
closeBtn5.onclick = function () {
  dialogBox5.style.display = "none";
};
var dialogBox6 = document.getElementById("sixthdialogBox");
var eventLi6 = document.getElementById("sixth");
var closeBtn6 = document.getElementsByClassName("close")[6];
eventLi6.onclick = function () {
  dialogBox6.style.display = "block";
};
closeBtn6.onclick = function () {
  dialogBox6.style.display = "none";
};
var dialogBox7 = document.getElementById("seventhdialogBox");
var eventLi7 = document.getElementById("seventh");
var closeBtn7 = document.getElementsByClassName("close")[7];
eventLi7.onclick = function () {
  dialogBox7.style.display = "block";
};
closeBtn7.onclick = function () {
  dialogBox7.style.display = "none";
};
