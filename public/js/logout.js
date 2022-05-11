//We can call this function from our frontend to log out of the current session
 async function logout() {
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

document.querySelector("#logout").addEventListener("click", logout);
