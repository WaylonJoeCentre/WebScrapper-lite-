var professorInfo = d3.csv("employee.csv");
var successFCN = function(information) {
    console.log("Teacher Data", information);
    createTable(information);
}
var failFCN = function(error) {
    console.log("Got no data", error)
}
professorInfo.then(successFCN,failFCN);

var createTable = function(information){
    var rows = 
        d3.select("#classTable tbody")
    .selectAll("tr")
    .data(information)
    .enter()
    .append("tr")
    
rows.append("td")
    .text(function(information){
    return information.Firstname;
})
rows.append("td")
    .text(function(information){
    return information.Title;
})
rows.append("td")
    .text(function(information){
    return information.Email;
})
}