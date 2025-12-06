let topnavbar = document.querySelector(".topnavbar");
let addicon = document.querySelector(".addicon");
let page0 = document.querySelector(".page");
let page1 = document.querySelector(".page1");
let sendbtn = document.querySelector(".sendbtn");
let probleminput = document.querySelector(".probleminput");
let locationinput = document.querySelector(".probleminput1");
let problemperson = document.querySelector(".problemperson");
let problemname = document.querySelector(".problemname")
let problemlocation = document.querySelector(".problemlocation")

let problemsname = document.querySelector(".problemsname");
let records = document.querySelector(".records");
let helppage = document.querySelector(".helppage");


addicon.addEventListener("click", () => {
    page0.style.display = "none";
    page1.style.display = "flex";
    records.style.display = "none"
    helppage.style.display = "none";
})

sendbtn.addEventListener("click", () => {
    page0.style.display = "block";
    page1.style.display = "none";
    records.style.display = "none"; 
    helppage.style.display = "none";

    probleminput1 = probleminput.value;
    // console.log(probleminput1)
    locationinput1 = locationinput.value;
    // console.log(locationinput1) 

    // // problemperson.innerHTML = `By: $`
    // problemname.innerHTML = `Problem: ${probleminput1}`;
    // problemlocation.innerHTML = `Location: ${locationinput1}`;

    let problem1 = document.createElement("div");
    problem1.classList.add("problem1");
    problemsname.appendChild(problem1);

    let problemperson = document.createElement("p");
    problemperson.classList.add("problemperson");
    problemperson.innerHTML= "By: Satyam Pathak";
    problem1.appendChild(problemperson);

    let problemname = document.createElement("p");
    problemname.classList.add("problemname");
    problemname.innerHTML= `Problem: ${probleminput1}`;
    problem1.appendChild(problemname);
    
    let problemlocation = document.createElement("p");
    problemlocation.classList.add("problemlocation");
    problemlocation.innerHTML= `Location: ${locationinput1}`;
    problem1.appendChild(problemlocation);

    probleminput.innerHTML = "";
    locationinput.innerHTML = "";
})

let loginbtn = document.querySelector(".loginbtn");
let loginbtn1 = document.querySelector(".loginbtn1");
let signin = document.querySelector(".signin");

loginbtn.addEventListener("click", () => {
    loginbtn.style.display = "none";
    loginbtn1.style.display = "none";
})
loginbtn1.addEventListener("click", () => {
    loginbtn.style.display = "none";
    loginbtn1.style.display = "none";

})

// loginbtn1.addEventListener("click", () => {
//     page0.style.display = "none";
//     page1.style.display = "none";
//     helppage.style.display = "none";
// })

let helpbtn = document.querySelector(".helpbtn");

    helpbtn.addEventListener("click", () => {
    page0.style.display = "none";
    page1.style.display = "none";
    helppage.style.display = "block";
})

let yesbtn = document.querySelector(".yeschoice");
let nobtn = document.querySelector(".nochoice");

yesbtn.addEventListener("click", () => {
    page0.style.display = "block";
    helppage.style.display = "none";
    // helpbtn.style.display = "none";
    helpbtn.innerHTML = "Helping";

    points.innerHTML = "Points: 25"

})

nobtn.addEventListener("click", () => {
    page0.style.display = "block";
    helppage.style.display = "none";
})

let points = document.querySelector(".points");


