function openList(e) {
    const file = e.target.files[0];
    if (!file) {
        return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
        const list = e.target.result;
        const rows = list.split('\r\n');
        
        const ans1 = countTrees(rows, 1, 1);
        const ans2 = countTrees(rows, 3, 1);
        const ans3 = countTrees(rows, 5, 1);
        const ans4 = countTrees(rows, 7, 1);
        const ans5 = countTrees(rows, 1, 2);

        displayResult(ans1, "answer");
        displayResult(ans2, "answer2");
        displayResult(ans3, "answer3");
        displayResult(ans4, "answer4");
        displayResult(ans5, "answer5");
        displayResult(ans1*ans2*ans3*ans4*ans5, "answerFinal");
    };
    reader.readAsText(file);
}

function countTrees(treeMap, vx, vy) {
    trees = 0;
    x = 0;
    y = 0;

    while (y < treeMap.length) {
        x += vx;
        if (x >= treeMap[0].length) {
            x = x % treeMap[0].length;
        }
        y += vy;

        console.log(x, y);

        //if we haven't left the map, check the location for a tree
        if (x < treeMap[0].length && y < treeMap.length) {
            if (treeMap[y][x] === '#') {
                trees++;
            }
        } 
    }
    return trees;
}

function displayResult(ans, element) {
    answer = document.getElementById(element);
    answer.textContent = `Num of Trees: ${ans}`;
}

document.getElementById('numsFile')
    .addEventListener('change', openList, false);
