let pageNo = 0;

let progress = 0;

// let data = {
//   name: "",
//   email: "",
//   contact: "",
//   dob: "",
//   coursename: "",
//   percentage: "",
//   fathername: "",
//   mothername: "",
// };

const pages = document.querySelectorAll(".Info");
const nextbtn = document.querySelector(".nextbtn");
const backbtn = document.querySelector(".backbtn");
const ProgressBar = document.querySelector(".progress");
const progresschecks = document.getElementsByClassName("icons");

// show first page
showPage(pageNo);

function showPage(index) {
  pages.forEach((page, i) => {
    page.style.display = i === index ? "block" : "none";
  });

  // disable back button on first page
  backbtn.disabled = index === 0;

  // disable next button on last page
  nextbtn.disabled = index === pages.length;
}

function nextPage() {
  if (pageNo <= pages.length) {
    progresschecks[pageNo].style.backgroundColor = "green";
    pageNo++;
    showPage(pageNo);
    calculateProgres();
  }

  ProgressBar.style.width = `${progress}%`;

  nextbtn.innerHTML = pageNo >= pages.length - 1 ? "Submit" : "Next";
  console.log(pageNo);

  if (pageNo === pages.length) {
    progresschecks[pageNo].style.backgroundColor = "green";
    saveData();
    nextbtn.innerHTML = "Submitted";
    nextbtn.disabled = true;
    nextbtn.style.display = "block";
    nextbtn.style.cursor = "not-allowed";
  }
}

function prevPage() {
  if (pageNo > 0) {
    nextbtn.disabled = false;
    nextbtn.style.display = "block";
    nextbtn.style.cursor = "pointer";
    progresschecks[pageNo].style.backgroundColor = "white";
    pageNo--;
    showPage(pageNo);
    calculateProgres();
    document.getElementById("resume").style.display = "none";
  }
  ProgressBar.style.width = `${progress}%`;
}

function calculateProgres() {
  progress = (pageNo / pages.length) * 100;
}

function saveData() {
  document.getElementById("rname").innerText =
    document.getElementById("name").value;
  document.getElementById("remail").innerText =
    document.getElementById("email").value;
  document.getElementById("rcontact").innerText =
    document.getElementById("contact").value;
  document.getElementById("rnumber").innerText =
    document.getElementById("dob").value;
  document.getElementById("rcoursename").innerText =
    document.getElementById("coursename").value;
  document.getElementById("rpercentage").innerText =
    document.getElementById("percentage").value;
  document.getElementById("rtenth").innerText =
    document.getElementById("tenth").value;
  document.getElementById("rtenthpercentage").innerText =
    document.getElementById("tenthpercentage").value;
  document.getElementById("rskill1").innerText =
    document.getElementById("skill1").value;
  document.getElementById("rskill2").innerText =
    document.getElementById("skill2").value;
  document.getElementById("rskill3").innerText =
    document.getElementById("skill3").value;
  document.getElementById("rskill4").innerText =
    document.getElementById("skill4").value;

  const resume = (document.getElementById("resume").style.display = "block");
  console.log(resume);
}

nextbtn.addEventListener("click", nextPage);
backbtn.addEventListener("click", prevPage);
