// Special Symbol
// #  ASCII value -35
// $  ASCII value -36
// &  ASCII value -38
// @  ASCII value -64
// A to Z ASCII value is 65 - 90
// a to z ASCII value is 97 - 122
// 0 to 9 Number ASCII value is 48 - 57
document.getElementById("generate-button").onclick = function () {
    let specialsymbol = ['#', '$', '&', '@']
    let valuetoiterate = Math.random() * 7 + 1;
    valuetoiterate = Math.round(valuetoiterate);
    let random_password = "";
    let specialchar = document.getElementById("specialchar");

    for (let i = 0; i < valuetoiterate; i++) {
        let randomNumber = (Math.random() * 9);
        randomNumber = Math.round(randomNumber);
        random_password = random_password.concat(randomNumber);
    }


    if (specialchar.checked) {
        for (let i = 0; i < 9 - valuetoiterate; i++) {
            let smallcapital = Math.random();
            smallcapital = Math.round(smallcapital);
            var randomposition = Math.random() * 7 + 1;
            randomposition = Math.round(randomposition);
            if (smallcapital) {
                let randomCapital = (Math.random() * 25 + 65);
                randomCapital = Math.round(randomCapital);
                randomCapital = String.fromCharCode(randomCapital);
                random_password = random_password.slice(0, randomposition) + randomCapital + random_password.slice(randomposition);
            }
            else {
                let randomsmall = (Math.random() * 25 + 97);
                randomsmall = Math.round(randomsmall);
                randomsmall = String.fromCharCode(randomsmall);
                random_password = random_password.slice(0, randomposition) + randomsmall + random_password.slice(randomposition);
            }
        }
        specialchar = Math.random() * 3;
        specialchar = Math.round(specialchar);

        random_password = random_password.slice(0, randomposition) + specialsymbol[specialchar] + random_password.slice(randomposition);
    }
    else {
        for (let i = 0; i < 10 - valuetoiterate; i++) {
            let smallcapital = Math.random();
            smallcapital = Math.round(smallcapital);
            let randomposition = Math.random() * 7 + 1;
            randomposition = Math.round(randomposition);
            if (smallcapital) {
                let randomCapital = (Math.random() * 25 + 65);
                randomCapital = Math.round(randomCapital);
                randomCapital = String.fromCharCode(randomCapital);
                random_password = random_password.slice(0, randomposition) + randomCapital + random_password.slice(randomposition);
            }
            else {
                let randomsmall = (Math.random() * 25 + 97);
                randomsmall = Math.round(randomsmall);
                randomsmall = String.fromCharCode(randomsmall);
                random_password = random_password.slice(0, randomposition) + randomsmall + random_password.slice(randomposition);
            }
        }
    }
    document.getElementById("password-generate").innerHTML = `${random_password}`;
    document.getElementById("clipboard").style.display="unset";
    document.getElementById("sub-type").style.display="block";
    document.getElementById("clipboard").onclick = function () {
        navigator.clipboard.writeText(random_password);
    }
}
