function initiateLoading() {
    document.getElementById("submit").disabled = true;
    document.getElementById("overlay").classList.remove("invisible");
    // document.getElementById("overlay").style.visibility = "visible";
    // document.getElementById("overlay").style.display = "block";
    // var x = document.getElementById("overlay");
    // if (x.style.display === "none") {
    //     x.style.display = "block";
    // } else {
    //     x.style.display = "none";
    // }
}

function handleUpload(e) {
    // e.preventDefault();
    initiateLoading();
    // this.submit();
}

function setHeight(fieldId) {
    document.getElementById(fieldId).style.height = document.getElementById(fieldId).scrollHeight+'px';
}

setHeight('extracted_text');