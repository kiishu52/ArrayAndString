 let orderQueue = [
    "101: Rohit",
    "102: Kashish",
    "103: Shivam",
    "104: Shrestha",
    "105: Aaditya"
  ];
    orderQueue.unshift("106: Ilma", "107: Shreyansh", "108: Neha");
    orderQueue.pop();   
    orderQueue.pop();   
    for (let i = 0; i < orderQueue.length; i++) {
    let order = orderQueue[i];
    let orderID = order.substring(0, order.indexOf(":")); 
    let customerName = order.substring(order.indexOf(":") + 2);   
    console.log("Processing " + orderID + " for " + customerName);
  }
    console.log("Final Queue:", orderQueue);
    let longestNameCustomer = "";
  for (let i = 0; i < orderQueue.length; i++) {
    let customerName = orderQueue[i].split(": ")[1];
    if (customerName.length > longestNameCustomer.length) {
      longestNameCustomer = customerName;   
    }
  }
   console.log("Customer with the longest name is: " + longestNameCustomer);
  