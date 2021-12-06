// to turn text wth id of blueText red when clicked on button with id textColour
document.querySelector("button#textColour").addEventListener("click", blueToRed);

const blueParagraph = document.querySelector("#blueText");

function blueToRed() {
  blueParagraph.style.color = "red";
  blueParagraph.textContent = blueParagraph.textContent.replace("blue", "red");
}

// to turn all text wth class of greenBg pink background when clicked on button with id bgColour
document.querySelector("button#bgColour").addEventListener("click", greenToPink);

const greenParagraphs = document.querySelectorAll(".greenBg");
// for all paragraphs with class greenBg
function greenToPink() {
    for (let greenParagraph of greenParagraphs) {
        greenParagraph.className = "hotpinkBg";
        greenParagraph.textContent = greenParagraph.textContent.replace("green","hotpink");
      }
    }

// to turn text wth id of tnrParagraph into Arial font when clicked on button with id fonts
document.querySelector("button#fonts").addEventListener("click", tnrToArial);

const tnrParagraph = document.querySelector("#tnrParagraph");

function tnrToArial() {
    tnrParagraph.style.fontFamily = "arial";
    tnrParagraph.textContent = tnrParagraph.textContent.replace("Times New Roman", "Arial");
}