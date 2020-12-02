function openList(e) {
    const file = e.target.files[0];
    if (!file) {
        return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
        const list = e.target.result;
        const nums = list.split('\n').map(i => parseInt(i));
        let collisionTable = [];

        nums.forEach((num) => {
            collisionTable[num] = num;
            if (collisionTable[total-num]) {
                displayResults(num, collisionTable[total-num]);
            }
        })

        
    };
    reader.readAsText(file);
  }
  
  function displayResults(ans1, ans2) {
    answer  = document.getElementById('answer');
    answer.textContent = `${ans1} * ${ans2} = ${ans1 * ans2}`;
  }
  
  const total = 2020;

  document.getElementById('numsFile')
    .addEventListener('change', openList, false);
