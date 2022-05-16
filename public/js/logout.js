//We can call this function from our frontend to log out of the current session
 async function logout() {
   console.log("logout begin");
  const response = await fetch("/api/user/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" }
  })
    if (response.ok) {
      //return to the homepage route
      document.location.replace("/");
    }
    else {
      alert(response.statusText);
    }
}

document.querySelector(".logout-item").addEventListener("click", logout);
