


var GridIdData = [[]];

for (let i = 0; i < 10; i++) {
    GridIdData.push([]);
    for (let j = 0; j <15; j++) {
        GridIdData[i][j] = (String(i) + "-" + String(j))
    }
}

export default GridIdData;