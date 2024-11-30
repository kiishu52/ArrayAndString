let scores = [35, 92, 45, 78, 88, 25, 65, 90, 30, 60];
for (let i = 0; i < scores.length; i++) {
  if (scores[i] < 40) {
    scores[i] += 20;  
  }
  if (scores[i] > 90) {
    scores[i] = 90;  
  }
}
let passCount = 0;
for (let i = 0; i < scores.length; i++) {
  if (scores[i] >= 50) {
    passCount++;
  }
}
console.log(scores);
console.log("Number of Students Who Passed:", passCount);
