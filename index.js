let billamount = document.getElementById("bill-amount");
let tippercent = document.getElementById("tip-percent");
let tipAmt = document.getElementById("tip-amount");
let total = document.getElementById("total");
let errormsgEl = document.getElementById("errormsg");

function checkTotalAmount() {

    if (billamount.value === "" || tippercent.value === "") {
        errormsgEl.textContent = "Please Fill Out All The Field";
    } else {
        let bill = parseInt(billamount.value);
        let tipper = parseInt(tippercent.value);
        let tip = tipper * bill / 100;
        tipAmt.value = tip;
        total.value = bill + tip;
        errormsgEl.textContent = "";
    }
}