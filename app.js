const subjects = [
    { test: "#fileStructures", tp: "#fileStructuresTp", weight: 5 },
    { test: "#Algebre", tp: "#AlgebreTd", weight: 4 },
    { test: "#oop", tp: "#oopTp", weight: 5 },
    { test: "#Algorithmique", tp: "#AlgorithmiqueTd", weight: 4 },
    { test: "#Architecture", tp: "#ArchitectureTd", weight: 5 },
    { test: "#Analyse", tp: "#AnalyseTd", weight: 4 },
    { test: "#Probabilites", tp: "#ProbabilitesTd", weight: 2 },
];

const entrTest = document.querySelector("#Entreprenariat");
const btn = document.querySelector("button");
const form = document.querySelector("form");
const result = document.querySelector(".result");
const avrage = document.querySelector("#avrage");
const close = document.querySelector("i")

const calculateWeightedAverage = (test, tp) => {
    return (Number(test.value) * 0.6) + (Number(tp.value) * 0.4);
};

const calc = () => {
    let totalAvr = 0;

    subjects.forEach(subject => {
        const test = document.querySelector(subject.test);
        const tp = document.querySelector(subject.tp);
        const subjectAvr = calculateWeightedAverage(test, tp);
        totalAvr += subjectAvr * subject.weight;
    });

    totalAvr += Number(entrTest.value); 
    totalAvr /= 30;

    console.log("Total Average:", totalAvr);
    return totalAvr;
};

const displayMessage = (average) => {
    const existingMsg = document.querySelector(".msg");
    if (existingMsg) {
        existingMsg.remove();
    }

    const msg = document.createElement("span");
    msg.classList.add("msg");

    if (average >= 10) {
        avrage.style.color = "green";
        msg.textContent = "ناجح";
        msg.style.color = "green";

    } else {
        avrage.style.color = "red";
        msg.textContent = "راسب";
        msg.style.color = "red";

    }

    result.appendChild(msg);
};

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const re = calc();
    result.classList.add("action");
    avrage.textContent = re.toFixed(2);
    displayMessage(re);

    const modules = document.querySelectorAll(".module");
    modules.forEach(module => {
        module.classList.add("active");
    });

    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.disabled = true;
        input.style.backgroundColor = "rgba(255, 247, 247, 0.737)";
    });
    
    btn.disabled = true;
});

close.addEventListener("click",()=>{
      result.classList.remove("action");

      const modules = document.querySelectorAll(".module");
    modules.forEach(module => {
        module.classList.remove("active");
    });
        const inputs = document.querySelectorAll(" .test input , .Tp input");
    inputs.forEach(input => {
        input.disabled = false;
        input.classList.add("outline")
    });

        btn.disabled =false;
})
