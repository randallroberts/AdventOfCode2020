function openList(e) {
    const file = e.target.files[0];
    if (!file) {
        return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
        const list = e.target.result;
        const rows = list.split('\r\n');
        
        countTrees(rows, 3, 1);
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
    displayResult(trees, 'answer');
}

function displayResult(ans, element) {
    answer = document.getElementById(element);
    answer.textContent = `Num of Trees: ${ans}`;
}

document.getElementById('numsFile')
    .addEventListener('change', openList, false);
