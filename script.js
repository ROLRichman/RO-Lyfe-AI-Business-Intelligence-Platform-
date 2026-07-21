/* ======================================================
RO'LYFE CAPITAL INTELLIGENCE COMMAND CENTER™
MAIN CONTROL ENGINE v3.0

Rooted in Access. Built for Growth.
====================================================== */


/* ==========================
SYSTEM STARTUP
========================== */

document.addEventListener(
"DOMContentLoaded",
()=>{

console.log(
"🏦 RO'Lyfe Command Center Online"
);


loadSession();

restoreTheme();

initializeDashboard();


});





/* ==========================
LOGIN SYSTEM
========================== */


function loginUser(){


const email =
document.getElementById("loginEmail").value;


const password =
document.getElementById("loginPassword").value;



if(email && password){


localStorage.setItem(
"rolyfeLoggedIn",
"true"
);



document
.getElementById("loginScreen")
.classList.add("hidden");



document
.getElementById("app")
.classList.remove("hidden");



console.log(
"RO'Lyfe User Authenticated"
);



}

else{


alert(
"Enter login credentials"
);


}


}




function logoutUser(){


localStorage.removeItem(
"rolyfeLoggedIn"
);



location.reload();


}




function loadSession(){


const session =
localStorage.getItem(
"rolyfeLoggedIn"
);



if(session==="true"){


const login =
document.getElementById(
"loginScreen"
);


const app =
document.getElementById(
"app"
);



if(login)
login.classList.add(
"hidden"
);



if(app)
app.classList.remove(
"hidden"
);



}


}





/* ==========================
NAVIGATION
========================== */


function scrollSection(id){


const section =
document.getElementById(id);



if(section){


section.scrollIntoView({

behavior:"smooth"

});


}


}





function toggleMenu(){


const menu =
document.getElementById(
"mobileMenu"
);



if(menu){

menu.classList.toggle(
"active"
);

}


}





/* ==========================
THEME ENGINE
========================== */


function toggleTheme(){


document.body.classList.toggle(
"light-mode"
);



localStorage.setItem(

"rolyfeTheme",

document.body.className

);



}



function restoreTheme(){


const theme =
localStorage.getItem(
"rolyfeTheme"
);



if(theme){

document.body.className =
theme;

}


}





/* ==========================
DEAL WORKSPACE
========================== */


function createWorkspaceDeal(){


const address =
document.getElementById(
"dealAddress"
)?.value || "";



const purchase =
document.getElementById(
"dealPurchase"
)?.value || "";



const arv =
document.getElementById(
"dealARV"
)?.value || "";



const rehab =
document.getElementById(
"dealRehab"
)?.value || "";



const borrower =
document.getElementById(
"dealBorrower"
)?.value || "";





const result =
document.getElementById(
"dealWorkspaceResult"
);



if(result){


result.innerHTML = `

<h3>🚀 Active Deal Created</h3>

<p>
Property:
${address}
</p>

<p>
Purchase:
$${purchase}
</p>

<p>
ARV:
$${arv}
</p>

<p>
Rehab:
$${rehab}
</p>

<p>
Borrower:
${borrower}
</p>

`;

}



saveDeal({

address,
purchase,
arv,
rehab,
borrower

});


}





function saveDeal(data){


localStorage.setItem(

"rolyfeActiveDeal",

JSON.stringify(data)

);


}





/* ==========================
PROPERTY ENGINE
========================== */


function sendPropertyToDeal(){


const data={


address:
document.getElementById(
"propertyAddress"
)?.value,


purchase:
document.getElementById(
"propertyPurchase"
)?.value,


arv:
document.getElementById(
"propertyARV"
)?.value,


rehab:
document.getElementById(
"propertyRehab"
)?.value


};



localStorage.setItem(

"propertyDeal",

JSON.stringify(data)

);



alert(
"🏠 Property sent to Deal Workspace"
);


}





/* ==========================
AI UNDERWRITER
========================== */


function runAIUnderwriter(){


const result =
document.getElementById(
"aiDecision"
);



if(!result)
return;



result.innerHTML = `

<h3>
🤖 RO'Lyfe AI Decision
</h3>

<p>
Analyzing purchase price,
ARV, rehab, LTV,
cash flow and exit strategy...
</p>

<p>
✅ Preliminary Review:
Deal requires lender underwriting,
due diligence, and capital fit analysis.
</p>

`;



}





/* ==========================
NOTE ANALYZER
========================== */


function analyzeNote(){


const upb =
Number(
document.getElementById(
"noteUPB"
)?.value || 0
);



const price =
Number(
document.getElementById(
"notePurchase"
)?.value || 0
);



const discount =
upb-price;



const result =
document.getElementById(
"noteResults"
);



if(result){


result.innerHTML = `

<h3>
📄 Note Analysis
</h3>

<p>
UPB:
$${upb.toLocaleString()}
</p>

<p>
Purchase:
$${price.toLocaleString()}
</p>


<p>
Discount:
$${discount.toLocaleString()}
</p>

`;

}



}





/* ==========================
ROI ENGINE
========================== */


function calculateCompoundROI(){


const amount =
Number(
document.getElementById(
"investmentAmount"
)?.value || 0
);



const growth =
Number(
document.getElementById(
"annualGrowth"
)?.value || 0
);



const years =
Number(
document.getElementById(
"roiYears"
)?.value || 0
);



const future =
amount *
Math.pow(
1+(growth/100),
years
);



const result =
document.getElementById(
"roiResult"
);



if(result){


result.innerHTML = `

<h3>
📈 Compound Projection
</h3>

<p>
Future Value:
$${future.toFixed(2)}
</p>

`;

}


}





/* ==========================
APPLICATION BUTTONS
========================== */


function openDealIntake(){

alert(
"🚪 Deal Intake Portal Opening"
);


}



function openInvestorIntake(){

alert(
"💰 Investor Intake Opening"
);


}



function openBorrowerIntake(){

alert(
"🏦 Borrower Application Opening"
);


}





/* ==========================
DASHBOARD INITIALIZER
========================== */


function initializeDashboard(){


const score =
document.getElementById(
"dealScore"
);



if(score){

score.innerHTML =
"READY";

}


console.log(
"Dashboard Loaded"
);


}





/* ==========================
RO'LYFE SYSTEM STATUS
========================== */


window.RO_LYFE_ENGINE = {


version:"3.0",

status:"ONLINE",

modules:[

"Deal Intake",

"Deal Workspace",

"NoteForge",

"AI Underwriter",

"Investor Engine",

"Robotics Ready"

]


};


console.log(
"🤖 RO'Lyfe AI Engine Ready"
);
