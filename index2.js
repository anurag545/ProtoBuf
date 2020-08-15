const Schema = require('./employees_pb.js');
const fs = require('fs');

const anurag  = new Schema.Employee();
anurag.setId(1001);
anurag.setName('Anurag');
anurag.setSalary(100000);

const json  = new Schema.Employee();
json.setId(1002);
json.setName('JSON');
json.setSalary(200000);

const proto = new Schema.Employee();
proto.setId(1003);
proto.setName('Proto');
proto.setSalary(300000);

const employees = new Schema.Employees();
employees.addEmployees(anurag);
employees.addEmployees(json);
employees.addEmployees(proto);

const bytes = employees.serializeBinary();
fs.writeFileSync("protodata", bytes);
