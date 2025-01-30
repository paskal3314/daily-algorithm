function interpreteCSV(inputCSV) {
  let [columns, ...rows] = csv.split("\n");
  columns = columns.split(";").map((str) => str.trim());
  rows = rows.map((str) => str.split(";").map((str) => str.trim()));

  let result = [];
  rows.forEach((infoArr) => {
    const json = {};
    for (let i = 0; i < columns.length; i++) {
      const key = columns[i];
      const value = infoArr[i];
      json[key] = value;
    }
    result.push(json);
  });
  console.log("Result: ", result);
}

const csv = `Username; Identifier;First name;Last name
booker12;9012;Rachel;Booker
grey07;2070;Laura;Grey
johnson81;4081;Craig;Johnson
jenkins46;9346;Mary;Jenkins
smith79;5079;Jamie;Smith`;

interpreteCSV(csv);
