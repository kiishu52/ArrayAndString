let user = { name: "Alia", role: "admin", active: false };
let message = (user.role === "admin") 
                ? (user.active ? "Admin Access Granted!" : "Admin Access Revoked") 
                : (user.role === "user") 
                    ? (user.active ? "User Access Granted!" : "User Access Revoked") 
                    : "Access Denied";
console.log(message);
