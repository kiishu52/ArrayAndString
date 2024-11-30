let N = 3, M = 2;
let arr = [
  [1, 2],
  [3, 4],
  [5, 6]
];

for (let i = 0; i < N; i++) {
  let result = "";
  for (let j = 0; j < M; j++) {
    result += (i + j) + " ";  
  }
  console.log(result);  
}