/* ======================================================
RO'LYFE AI ADVISOR™
Jamal AI Capital Intelligence Engine v1.0

Deal Analysis • Funding Strategy • Investor Placement
Underwriting Support • Wealth Systems

Rooted in Access. Built for Growth.
====================================================== */


const RO_LYFE_AI_ADVISOR = {


    name:"Jamal",

    version:"1.0",

    status:"ONLINE",


    role:

    "Real Estate Deal Decision Intelligence Assistant",



    capabilities:[

        "Deal Analysis",

        "Fix & Flip Underwriting",

        "BRRRR Analysis",

        "DSCR Evaluation",

        "Hard Money Review",

        "Note Acquisition Analysis",

        "Rehab Budget Review",

        "Investor Matching",

        "Capital Strategy"

    ],




    analyzeDeal(data){


        let score = 0;


        const purchase =
        Number(data.purchase || 0);


        const arv =
        Number(data.arv || 0);


        const rehab =
        Number(data.rehab || 0);



        const totalCost =
        purchase + rehab;



        let ltv = 0;


        if(arv > 0){

            ltv =
            (totalCost / arv) * 100;

        }



        if(ltv <= 70){

            score += 40;

        }


        if(rehab < arv * .35){

            score += 25;

        }


        if(arv > purchase){

            score += 25;

        }


        score += 10;




        let decision = "REVIEW";



        if(score >= 80){

            decision = "GREEN LIGHT";

        }

        else if(score >= 60){

            decision = "CAUTION";

        }

        else{

            decision = "PASS / RESTRUCTURE";

        }





        return {


            score:score,


            decision:decision,


            metrics:{


                purchase:purchase,


                rehab:rehab,


                arv:arv,


                totalProjectCost:totalCost,


                exposure:

                ltv.toFixed(2)+"%"


            },



            recommendation:

            this.generateRecommendation(decision)



        };


    },







    generateRecommendation(decision){


        switch(decision){


            case "GREEN LIGHT":

            return "Strong structure. Prepare lender package and capital placement strategy.";



            case "CAUTION":

            return "Adjust purchase price, rehab budget, or exit strategy before funding.";



            default:

            return "Deal requires restructuring before moving forward.";

        }


    },







    answer(question){


        const q =
        question.toLowerCase();



        if(q.includes("arv")){


            return "Jamal Recommendation: Verify comparable sales, market demand, and realistic after repair value.";

        }



        if(q.includes("fund")){


            return "Jamal Recommendation: Match leverage, lender requirements, and borrower profile before submitting.";

        }



        if(q.includes("note")){


            return "Jamal Recommendation: Review UPB, payment history, seasoning, yield, collateral, and exit strategy.";

        }



        if(q.includes("rehab")){


            return "Jamal Recommendation: Compare contractor budget against ARV and lender construction requirements.";

        }



        return (

        "Jamal AI is analyzing your request. " +

        "Provide property data, numbers, or strategy details."

        );


    }





};







/* ==========================
JAMAL AI INTERFACE
========================== */


function askJamalAI(){


    const input =

    document.getElementById(
    "jamalQuestion"
    );



    const output =

    document.getElementById(
    "jamalResponse"
    );



    if(!input || !output){

        return;

    }



    const response =

    RO_LYFE_AI_ADVISOR.answer(

    input.value

    );



    output.innerHTML = `

    <h3>
    🧠 Jamal AI Response
    </h3>

    <p>
    ${response}
    </p>

    `;



}







/* ==========================
DEAL DECISION BUTTON
========================== */


function runJamalDealReview(){


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
        )?.value


    };




    const analysis =

    RO_LYFE_AI_ADVISOR.analyzeDeal(

    deal

    );





    const result =

    document.getElementById(
    "aiDecision"
    );





    if(result){


        result.innerHTML = `


        <h3>
        🧠 Jamal AI Deal Decision
        </h3>


        <p>
        Score:
        ${analysis.score}/100
        </p>


        <p>
        Decision:
        ${analysis.decision}
        </p>


        <p>
        Exposure:
        ${analysis.metrics.exposure}
        </p>


        <p>
        ${analysis.recommendation}
        </p>


        `;


    }



}





/* ==========================
SYSTEM EXPORT
========================== */


window.RO_LYFE_AI_ADVISOR =

RO_LYFE_AI_ADVISOR;



console.log(

"🧠 Jamal AI Advisor Loaded"

);
