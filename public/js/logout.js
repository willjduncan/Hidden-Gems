//We can call this function from our frontend to log out of the current session
function logout() {
  fetch("/api/user/logout", {
    method: "delete",
    headers: { "Content-Type": "application/json" }
  })
    .then(function () {
      //return to the homepage route
      document.location.replace("/");
    })
    .catch(err => console.log(err));
}
