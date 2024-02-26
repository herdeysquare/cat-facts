const btn = document.getElementById("btn");
btn.addEventListener("click", facts);

// document.getElementById("btn").addEventListener("click", facts);

function appendToDisplay(input) {
  const display = document.getElementById("display");
  display.value = input + "\n";
  // checkOverflow();
}

let url = "https://catfact.ninja/fact";

async function facts() {
  try {
    const request = await fetch(url);
    let response = await request.json();
    const catFact = response.fact;
    appendToDisplay(catFact);

    console.log(response);
    return response;
  } catch (error) {
    console.log("404 'Error in response'", Error);
  }
}
facts();


// for marquee

// function checkOverflow() {
//   const display = document.getElementById("display");
//   const marqueeContainer = document.querySelector(".marquee-Container");
  
//   if (display.scrollWidth > display.clientWidth) {
//     marqueeContainer.classList.add("marquee");
//   } else {
//     marqueeContainer.classList.remove("marquee");
//   }
// }
// checkOverflow();