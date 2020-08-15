const fs = require('fs');
const employees = [];

employees.push({
    "name": "Anurag",
    "salary": 100000,
    "id": 1001
});

employees.push({
    "name": "JSON",
    "salary": 200000,
    "id": 1002
});

employees.push({
    "name": "Proto",
    "salary": 300000,
    "id": 1003
});

fs.writeFileSync("jsonData.json", JSON.stringify(employees));
