function openList(e) {
    const file = e.target.files[0];
    if (!file) {
        return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
        const list = e.target.result;
        const rows = list.split('\n');
        
        countTrees(rows);
    };
    reader.readAsText(file);
}

function countTrees(treeMap) {
    trees = 0;
    x = 0;
    y = 0;

    while (x < treeMap[0].length && y < treeMap.length) {
        x += 3;
        y += 1;
        //if we haven't left the map, check the location for a tree
        if (x < treeMap[0].length && y < treeMap.length) {
            if (treeMap[y][x] === '#') {
                trees++;
            }
        } 
    }
    displayResult(trees, 'answer');
}

function displayResult(ans, element) {
    answer = document.getElementById(element);
    answer.textContent = `Num of Trees: ${ans}`;
}

document.getElementById('numsFile')
    .addEventListener('change', openList, false);
