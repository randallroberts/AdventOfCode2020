function openList(e) {
    const file = e.target.files[0];
    if (!file) {
        return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
        const list = e.target.result;
        const nums = list.split('\n').map(i => parseInt(i));
        
        twoNums(nums);
        threeNums(nums);

        
    };
    reader.readAsText(file);
}

function twoNums(nums) {
    let collisionTable = [];

    nums.forEach((num) => {
        collisionTable[num] = num;
        if (collisionTable[total-num]) {
            displayTwoResults(num, collisionTable[total-num]);
        }
    })
}

function threeNums(nums) {
    let collisionTable = [];

    nums.forEach(num => {
        nums.forEach(num2 => {
            nums.forEach(num3 => {
                if ((num + num2 + num3) == 2020) {
                    displayThreeResults(num, num2, num3);
                }
            })
        })
    })
}

function displayTwoResults(ans1, ans2) {
    answer = document.getElementById('answer');
    answer.textContent = `${ans1} * ${ans2} = ${ans1 * ans2}`;
}

function displayThreeResults(ans1, ans2, ans3) {
    answer3 = document.getElementById('answer3');
    answer3.textContent = `${ans1} * ${ans2}  * ${ans3} = ${ans1 * ans2 * ans3}`;
}

const total = 2020;

document.getElementById('numsFile')
    .addEventListener('change', openList, false);
