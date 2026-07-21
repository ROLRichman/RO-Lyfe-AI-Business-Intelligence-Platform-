/* ======================================================
RO'LYFE AI UNDERWRITING ENGINE™
Jamal Institutional Deal Analysis Layer v1.0

Purchase Analysis • LTV • Risk • Exit Strategy
Capital Placement • Lender Readiness

Rooted in Access. Built for Growth.
====================================================== */


const RO_LYFE_AI_UNDERWRITER = {


    name:"RO'Lyfe AI Underwriter",

    version:"1.0",

    status:"ONLINE",


    riskLevels:[

        "LOW RISK",

        "MODERATE RISK",

        "HIGH RISK"

    ],





    analyze(data){


        const purchase =
        Number(data.purchase || 0);


        const arv =
        Number(data.arv || 0);


        const rehab =
        Number(data.rehab || 0);


        const loan =
        Number(data.loan || 0);



        const totalCost =
        purchase + rehab;



        let ltv = 0;


        if(arv){

            ltv =
            ((loan || totalCost) / arv) * 100;

        }




        let riskScore = 0;



        /*
        Lower risk = lower score
        Higher risk = higher score
        */



        if(ltv > 75){

            riskScore += 30;

        }

        else if(ltv > 65){

            riskScore += 15;

        }



        if(rehab > arv * .40){

            riskScore += 25;

        }

        else if(rehab > arv * .25){

            riskScore += 10;

        }



        if(purchase > arv * .60){

            riskScore += 25;

        }



        if(totalCost > arv){

            riskScore += 20;

        }





        let risk = "LOW RISK";



        if(riskScore >= 60){

            risk="HIGH RISK";

        }

        else if(riskScore >=30){

            risk="MODERATE RISK";

        }







        let recommendation =

        "Proceed to full underwriting review.";



        if(risk==="HIGH RISK"){


            recommendation =

            "Restructure deal. Reduce acquisition cost, increase equity, or improve exit strategy.";


        }



        if(risk==="MODERATE RISK"){


            recommendation =

            "Review leverage, borrower strength, and lender requirements.";

        }






        return {


            riskScore:riskScore,


            risk:risk,


            metrics:{


                purchase:purchase,


                rehab:rehab,


                arv:arv,


                totalProjectCost:totalCost,


                ltv:ltv.toFixed(2)+"%"


            },


            recommendation:recommendation



        };



    },








    calculateMAO(data){


        const arv =

        Number(data.arv || 0);



        const rehab =

        Number(data.rehab || 0);



        const holding =

        Number(data.holding || 0);



        const desiredProfit =

        Number(data.profit || 0);




        const mao =

        (arv * .70)

        -

        rehab

        -

        holding

        -

        desiredProfit;





        return {


            maximumAllowableOffer:

            mao.toFixed(2)


        };


    },








    lenderChecklist(){


        return [


        "Property verification",

        "Borrower profile",

        "Credit review",

        "Track record",

        "Rehab budget",

        "Exit strategy",

        "Proof of funds",

        "Insurance verification",

        "Title review"


        ];



    }





};









/* ==========================
AI UNDERWRITER BUTTON
========================== */


function runAIUnderwriter(){



    const deal = {



        purchase:

        document.getElementById(
        "dealPurchase"
        )?.value,



        arv:

        document.getElementById(
        "dealARV"
        )?.value,



        rehab:

        document.getElementById(
        "dealRehab"
        )?.value,



        loan:

        document.getElementById(
        "loanAmount"
        )?.value


    };





    const analysis =

    RO_LYFE_AI_UNDERWRITER.analyze(

    deal

    );





    const output =

    document.getElementById(
    "aiDecision"
    );





    if(output){



        output.innerHTML = `


        <h3>
        🤖 RO'Lyfe AI Underwriting Report
        </h3>


        <p>
        Risk Level:
        ${analysis.risk}
        </p>


        <p>
        Risk Score:
        ${analysis.riskScore}/100
        </p>


        <p>
        LTV:
        ${analysis.metrics.ltv}
        </p>


        <p>
        Total Project Cost:
        $${analysis.metrics.totalProjectCost.toLocaleString()}
        </p>


        <p>
        Recommendation:
        ${analysis.recommendation}
        </p>


        `;


    }




}









/* ==========================
EXPORT ENGINE
========================== */


window.RO_LYFE_AI_UNDERWRITER =

RO_LYFE_AI_UNDERWRITER;



console.log(

"🤖 RO'Lyfe AI Underwriter Loaded"

);


let grade="A";

if(riskScore>=60){

grade="D";

}

else if(riskScore>=45){

grade="C";

}

else if(riskScore>=25){

grade="B";

}


let decision="GO";

if(risk==="HIGH RISK"){

decision="NO GO";

}
else if(risk==="MODERATE RISK"){

decision="CAUTION";

}


