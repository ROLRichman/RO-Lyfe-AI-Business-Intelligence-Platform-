/* ======================================================
RO'LYFE DEAL INTAKE ENGINE™
Enterprise Intake Layer v1.0

Captures Deals • Borrowers • Investors • Notes
Routes Opportunities Into The Command Center

Rooted in Access. Built for Growth.
====================================================== */

const RO_LYFE_DEAL_INTAKE = {

    version: "1.0",

    status: "ONLINE",

    activeDeals: [],

    initialize() {

        console.log("🚪 Deal Intake Engine Online");

        this.restoreDeals();

    },

    createDeal() {

        const deal = {

            id: Date.now(),

            created: new Date().toLocaleString(),

            address:
                document.getElementById("dealAddress")?.value || "",

            purchase:
                Number(document.getElementById("dealPurchase")?.value || 0),

            arv:
                Number(document.getElementById("dealARV")?.value || 0),

            rehab:
                Number(document.getElementById("dealRehab")?.value || 0),

            borrower:
                document.getElementById("dealBorrower")?.value || "",

            status: "NEW",

            stage: "INTAKE"

        };

        this.activeDeals.push(deal);

        localStorage.setItem(
            "rolyfeDeals",
            JSON.stringify(this.activeDeals)
        );

        return deal;

    },

    restoreDeals() {

        const stored =
            localStorage.getItem("rolyfeDeals");

        if(stored){

            this.activeDeals =
                JSON.parse(stored);

        }

    },

    totalDeals() {

        return this.activeDeals.length;

    },

    latestDeal() {

        if(this.activeDeals.length===0){

            return null;

        }

        return this.activeDeals[
            this.activeDeals.length-1
        ];

    },

    updateDashboard() {

        const total =
            document.getElementById("totalNotes");

        if(total){

            total.innerHTML =
            this.totalDeals();

        }

    }

};


/* ==========================================
BUTTON FUNCTIONS
========================================== */

function openDealIntake(){

    const section =
    document.getElementById("dealWorkspace");

    if(section){

        section.scrollIntoView({

            behavior:"smooth"

        });

    }

}


function submitDealIntake(){

    const deal =
    RO_LYFE_DEAL_INTAKE.createDeal();

    RO_LYFE_DEAL_INTAKE.updateDashboard();

    const result =
    document.getElementById(
    "dealWorkspaceResult"
    );

    if(result){

        result.innerHTML = `

        <h3>✅ Deal Captured</h3>

        <p><strong>ID:</strong> ${deal.id}</p>

        <p><strong>Address:</strong> ${deal.address}</p>

        <p><strong>Purchase:</strong> $${deal.purchase.toLocaleString()}</p>

        <p><strong>ARV:</strong> $${deal.arv.toLocaleString()}</p>

        <p><strong>Rehab:</strong> $${deal.rehab.toLocaleString()}</p>

        <p><strong>Status:</strong> ${deal.status}</p>

        <p><strong>Stage:</strong> ${deal.stage}</p>

        `;

    }

    if(window.RO_LYFE_AI_UNDERWRITER){

        const report =
        RO_LYFE_AI_UNDERWRITER.analyze({

            purchase:deal.purchase,

            arv:deal.arv,

            rehab:deal.rehab

        });

        console.log(report);

    }

}


/* ==========================================
INVESTOR INTAKE
========================================== */

function openInvestorIntake(){

    alert(
    "Investor Intake Module Ready."
    );

}


/* ==========================================
BORROWER INTAKE
========================================== */

function openBorrowerIntake(){

    alert(
    "Borrower Intake Module Ready."
    );

}


/* ==========================================
EXPORTS
========================================== */

window.RO_LYFE_DEAL_INTAKE =
RO_LYFE_DEAL_INTAKE;


/* ==========================================
AUTO START
========================================== */

document.addEventListener(

"DOMContentLoaded",

function(){

    RO_LYFE_DEAL_INTAKE.initialize();

}

);

console.log(
"🚪 RO'Lyfe Deal Intake Engine Loaded"
);
