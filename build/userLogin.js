"use strict";
//PASS
//GIVE AN ARRAY OF STRINGS
//EACH STRING INCLUDE THREE PORTIONS: ID, ACTION TYPE, TIME AMMOUNT
//EX:  ["1 signin 80", "2 signin 100", "1 signout 120", "2 signout 110"]
//Write a function with the array input and a maxspan and the output is the the array of time delta that is less than maxspan
const returnValidIds = function (inforArr, maxSpan) {
    //CHECK IF INFOR ARRAY IS VALID
    const isInforArrValid = inforArr.every((ele) => {
        const eleArr = ele.split(" ");
        if (eleArr.length === 3) {
            const [id, action, time] = eleArr;
            return (
            //CHECK IF ID AND TIME ARE INTERGER NUMBERS
            Number.isInteger(Number(id)) &&
                Number.isInteger(Number(time)) &&
                //CHECK IF ACTION IS VALID
                (action === "signin" || action === "signout"));
        }
        else {
            return false;
        }
    });
    const isMaxSpanValid = Number.isInteger(maxSpan) && 0 < maxSpan && maxSpan <= 200;
    if (!isInforArrValid || !isMaxSpanValid) {
        return "Invalid input";
    }
    const validIdArr = [];
    //FIRST LOOP TO ACCESS EACH ELEMENTS
    for (let i = 0; i < inforArr.length; i++) {
        const eleArr = inforArr[i].split(" ");
        const [id, action, time] = eleArr;
        //SECOND FOR LOOP TO SCAN IF THERE IS ANY INFOR STRING THAT HAS THE SAME ID
        for (let a = i + 1; a < inforArr.length; a++) {
            const nextEleArr = inforArr[a].split(" ");
            const [nextId, nextAction, nextTime] = nextEleArr;
            //IF THE IDS ARE THE SAME
            if (Number(nextId) === Number(id)) {
                let deltaTime = null;
                //IF THE FIRST ACTION IS SIGNIN AND THE SECOND IS SIGNIN
                if (action === "signin" && nextAction === "signout") {
                    deltaTime = Number(nextTime) - Number(time);
                }
                //IF THE FIRST ACTION IS SIGNOUT AND THE SECOND IS SIGNOUT
                if (action === "signout" && nextAction === "signin") {
                    deltaTime = Number(time) - Number(nextTime);
                }
                //CHECK IF DELTA TIME IS VALID TO ADD THE ID TO THE ARRAY
                if (deltaTime &&
                    deltaTime <= maxSpan &&
                    !validIdArr.includes(Number(id))) {
                    validIdArr.push(Number(id));
                }
            }
        }
    }
    //RETURN THE VALID ARRAY
    return validIdArr;
};
