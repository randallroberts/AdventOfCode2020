function openList(e) {
    const file = e.target.files[0];
    if (!file) {
        return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
        const list = e.target.result;
        const nums = list.split('\n');
        let brokenDownNums = [];

        nums.forEach((num, key) => {
            brokenDownNums[key] = num.split(/\-|\:|\ /);
        })
        
        validateStrings(brokenDownNums);
        validateStringPositions(brokenDownNums);
    };
    reader.readAsText(file);
}

/**
 * 
 * @param {Array} list 
 * [0] = min
 * [1] = max
 * [2] = required character
 * [3] = n/a
 * [4] = string to be validated
 */
function validateStrings(list) {
    valid = 0;

    list.forEach((item) => {
        const re = new RegExp(item[2], 'g')
        num = item[4].match(re);
        if (Array.isArray(num) && num.length >= item[0] && num.length <= item[1]) {
            valid++;
        }
    })

    displayResult(valid, 'answer');
}

function validateStringPositions(list) {
    valid = 0;

    list.forEach((item) => {
        testString = item[4];

        if (testString[parseInt(item[0])-1] == item[2] &&  testString[parseInt(item[1])-1] !== item[2]) {
            valid++;
        }
        else if (testString[parseInt(item[0])-1] !== item[2] && testString[parseInt(item[1])-1] == item[2]) {
            valid++;
        }
    })

    displayResult(valid, 'answerB');
}

function displayResult(ans, element) {
    answer = document.getElementById(element);
    answer.textContent = `Valid Strings: ${ans}`;
}

document.getElementById('numsFile')
    .addEventListener('change', openList, false);
