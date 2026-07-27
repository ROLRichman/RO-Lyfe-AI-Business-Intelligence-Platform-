/* =====================================================
RO'Lyfe AI Business Intelligence Platform™
Main Application Controller
===================================================== */


/* =====================================================
SYSTEM INITIALIZATION
===================================================== */


document.addEventListener(
"DOMContentLoaded",
()=>{

console.log(
"🤖 RO'Lyfe Command Center Initialized"
);


initializeDashboard();


loadModules();


loadCalculators();


});





/* =====================================================
DASHBOARD INITIALIZATION
===================================================== */


function initializeDashboard(){


const jamal =
document.getElementById(
"jamalStatus"
);


if(jamal){

jamal.innerHTML =
`
🧠 Jamal AI Online<br>
Capital Intelligence • Deal Analysis • Funding Strategy
`;

}



const robot =
document.getElementById(
"robotStatus"
);


if(robot){

robot.innerHTML =
`
🤖 Robotics Intelligence Connected
`;

}



}





/* =====================================================
AI MODULE LOADER
===================================================== */


function loadModules(){


console.log(
"Loading RO'Lyfe Intelligence Engines..."
);



const modules = [

"modules/ai-underwriter.js",

"modules/borrower-profile-engine.js",

"modules/deal-intake-engine.js",

"modules/deal-workspace-engine.js",

"modules/property-engine.js",

"modules/rehab-underwriting-engine.js",

"modules/rolyfe-ai-advisor.js",

"modules/signature-engine.js",

"modules/track-record-engine.js",

"modules/portfolio-engine.js",

"modules/robotics-engine.js"

];



modules.forEach(

(file)=>{


const script =
document.createElement(
"script"
);


script.src = file;


script.defer = true;


document.body.appendChild(
script
);


});


}




/* =====================================================
CALCULATOR ENGINE LOADER
===================================================== */


function loadCalculators(){


console.log(
"Loading RO'Lyfe Calculators..."
);



const calculators=[


"calculators/creative-offer-calculator.js",

"calculators/rehab-arv-calculator.js",

"calculators/ltv-calculator.js",

"calculators/payment-calculator.js",

"calculators/note-yield-calculator.js",

"calculators/overage-calculator.js",

"calculators/deal-score-engine.js"

];



calculators.forEach(

(file)=>{


const script =
document.createElement(
"script"
);


script.src = file;


script.defer = true;


document.body.appendChild(
script
);


});


  }




/* =====================================================
CORE PLATFORM FUNCTIONS
===================================================== */


/* =====================================================
SECTION NAVIGATION
===================================================== */


function scrollSection(id){

const section =
document.getElementById(id);


if(section){

section.scrollIntoView(
{
behavior:"smooth",
block:"start"
}
);

}

}





/* =====================================================
THEME CONTROL
===================================================== */


function toggleTheme(){

document.body.classList.toggle(
"dark-mode"
);


console.log(
"Theme changed"
);

}





/* =====================================================
LOGIN SYSTEM
===================================================== */


function loginUser(){

const email =
document.getElementById(
"loginEmail"
)?.value;


const password =
document.getElementById(
"loginPassword"
)?.value;



if(email && password){


document.getElementById(
"loginScreen"
)?.classList.add(
"hidden"
);



document.getElementById(
"app"
)?.classList.remove(
"hidden"
);



console.log(
"🔐 User logged into RO'Lyfe Command Center"
);



}

else{


alert(
"Please enter email and password"
);


}


}





/* =====================================================
LOGOUT SYSTEM
===================================================== */


function logoutUser(){


document.getElementById(
"app"
)?.classList.add(
"hidden"
);



document.getElementById(
"loginScreen"
)?.classList.remove(
"hidden"
);



console.log(
"User logged out"
);


}





/* =====================================================
QUICK ACTION COMMANDS
===================================================== */


function openDealIntake(){

scrollSection(
"dealIntake"
);

}



function openBorrowerProfile(){

scrollSection(
"borrower"
);

}



function openFundingCenter(){

scrollSection(
"fundingCommandCenter"
);

}



function openOfferEngine(){

scrollSection(
"offers"
);

}



function openDocuments(){

scrollSection(
"documents"
);

}



function openJamal(){

const jamal =
document.getElementById(
"jamalAssistant"
);


if(jamal){

jamal.classList.remove(
"hidden"
);

}

}





function closeJamal(){

const jamal =
document.getElementById(
"jamalAssistant"
);


if(jamal){

jamal.classList.add(
"hidden"
);

}

}





console.log(
"🚀 RO'Lyfe Core Functions Loaded"
);
