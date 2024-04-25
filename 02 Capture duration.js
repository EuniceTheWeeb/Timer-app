
const DelSel = document.getElementById("DelSel");
const DelAll = document.getElementById("DelAll");
const DelIndiv = document.getElementById("DelIndiv");

let copyBtn = document.getElementById("copyDurationBtn");

copyBtn.onclick = function() {
  document.execCommand("copy");
}

copyBtn.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", copyBtn.textContent);
    console.log(event.clipboardData.getData("text"))
  }
});

/*
function copyText() {

  Select text area by id
  let copyBtn = document.getElementById("copyDurationBtn");

  Select the text inside text area.
  copyBtn.select();

  Copy selected text into clipboard 
  navigator.clipboard.writeText(copyBtn.value);

  Set the copied text as text for 
  div with id clipboard
  document.getElementById("copyDurationBtn")
    .innerHTML = Text.value;
} */