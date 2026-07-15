function showSection(id){
    document.querySelectorAll("section").forEach(s=>s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

function checkP1(){
    let a=document.getElementById("p1").value.toLowerCase();
    document.getElementById("r1").innerText =
        a==="memory" ? "Correct. It always stays." : "Try again.";
}

function checkP2(){
    let a=document.getElementById("p2").value.toLowerCase();
    document.getElementById("r2").innerText =
        a==="hello" ? "You understood." : "Not quite.";
}

function unlock(){
    let code=prompt("Enter the code:");
    if(code==="1213"){
        showSection("secret");
    } else {
        alert("Not everything is meant for you.");
    }
}

setInterval(()=>{
    const whispers=[
        "Do you remember?",
        "Some things never leave.",
        "You're not alone.",
        "Time changes everything… or does it?"
    ];
    console.log(whispers[Math.floor(Math.random()*whispers.length)]);
},5000);
