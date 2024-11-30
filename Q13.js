
let taskList = ["Complete Assignment", "Revise", "Take Classes", "Check Slack", "solve problems"];
taskList.shift();  
taskList.unshift("Emergent Work", "Submit assignments");
taskList[taskList.length - 1] = "Rest";
console.log("Updated Task List:", taskList);
