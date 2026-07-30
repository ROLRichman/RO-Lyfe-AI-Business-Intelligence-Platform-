/*
====================================================
RO'Lyfe Deal Workspace Engine
File: modules/deal-workspace-engine.js
Version: Enterprise v3.0
====================================================
*/

const RODealWorkspace = {

    activeDeal: null,

    createDeal() {

        const address = document.getElementById("dealAddress")?.value.trim() || "";
        const purchase = Number(document.getElementById("dealPurchase")?.value) || 0;
        const arv = Number(document.getElementById("dealARV")?.value) || 0;
        const rehab = Number(document.getElementById("dealRehab")?.value) || 0;
        const borrower = document.getElementById("dealBorrower")?.value.trim() || "";

        const totalProject = purchase + rehab;
        const projectedProfit = arv - totalProject;
        const roi = totalProject > 0
            ? ((projectedProfit / totalProject) * 100).toFixed(2)
            : "0.00";

        this.activeDeal = {
            id: "DL-" + Date.now(),
            address,
            borrower,
            purchase,
            rehab,
            arv,
            totalProject,
            projectedProfit,
            roi,
            created: new Date().toLocaleString()
        };

        this.render();
        this.save();
    },

    render() {

        const box = document.getElementById("dealWorkspaceResult");

        if (!box) return;

        if (!this.activeDeal) {

            box.innerHTML = `
                <h3>No Active Deal</h3>
                <p>Create a deal to begin underwriting.</p>
            `;
            return;
        }

        const d = this.activeDeal;

        box.innerHTML = `

        <h3>🏦 Active Deal Workspace</h3>

        <hr>

        <p><strong>Deal ID:</strong> ${d.id}</p>

        <p><strong>Property:</strong> ${d.address}</p>

        <p><strong>Borrower:</strong> ${d.borrower}</p>

        <p><strong>Purchase Price:</strong> $${d.purchase.toLocaleString()}</p>

        <p><strong>Rehab Budget:</strong> $${d.rehab.toLocaleString()}</p>

        <p><strong>Total Project Cost:</strong> $${d.totalProject.toLocaleString()}</p>

        <p><strong>Estimated ARV:</strong> $${d.arv.toLocaleString()}</p>

        <p><strong>Projected Profit:</strong>
        <span style="color:${d.projectedProfit>=0?'lime':'red'}">
        $${d.projectedProfit.toLocaleString()}
        </span>
        </p>

        <p><strong>Projected ROI:</strong> ${d.roi}%</p>

        <p><strong>Created:</strong> ${d.created}</p>

        <hr>

        <button class="glow-btn" onclick="RODealWorkspace.exportDeal()">
        📄 Export Deal
        </button>

        <button class="glow-btn" onclick="RODealWorkspace.clearDeal()">
        🗑 Clear Workspace
        </button>

        `;
    },

    save() {

        localStorage.setItem(
            "ROLYFE_ACTIVE_DEAL",
            JSON.stringify(this.activeDeal)
        );
    },

    load() {

        const saved = localStorage.getItem("ROLYFE_ACTIVE_DEAL");

        if (!saved) return;

        this.activeDeal = JSON.parse(saved);

        this.render();
    },

    clearDeal() {

        localStorage.removeItem("ROLYFE_ACTIVE_DEAL");

        this.activeDeal = null;

        this.render();
    },

    exportDeal() {

        if (!this.activeDeal) {

            alert("No active deal.");
            return;
        }

        const d = this.activeDeal;

        const report = `

RO'Lyfe Deal Workspace Report

----------------------------------

Deal ID:
${d.id}

Property:
${d.address}

Borrower:
${d.borrower}

Purchase:
$${d.purchase.toLocaleString()}

Rehab:
$${d.rehab.toLocaleString()}

Total Project:
$${d.totalProject.toLocaleString()}

ARV:
$${d.arv.toLocaleString()}

Projected Profit:
$${d.projectedProfit.toLocaleString()}

ROI:
${d.roi}%

Generated:
${new Date().toLocaleString()}

`;

        const blob = new Blob([report], {
            type: "text/plain"
        });

        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");

        link.href = url;
        link.download = "ROLyfe-Deal-Workspace.txt";
        link.click();

        URL.revokeObjectURL(url);
    }

};


/*
====================================================
Global Functions
====================================================
*/

function createWorkspaceDeal() {

    RODealWorkspace.createDeal();
}


/*
====================================================
Load Saved Workspace
====================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    RODealWorkspace.load();

});


console.log("🏦 RO'Lyfe Deal Workspace Engine Loaded");
