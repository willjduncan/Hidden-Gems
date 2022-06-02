


async function editFormHandler(event) {
    event.preventDefault();

    // const id = document.getElementsByTagName("section")[0].id;
    const email = document.querySelector("input[name='edit-email']").value.trim();
    const pw = document.querySelector("input[name='edit-pw']").value.trim();

    const response = await fetch('/api/user/', {
        method: "PUT",
        body: JSON.stringify({
            email,
            pw
        }),
        headers: { "Content-Type": "application/json" }
    });

    if (response.ok) {
        document.location.replace("/dashboard/");
    }
    else {
        alert(response.statusText);
    }
};


document.querySelector("#confirm-prof-edit").addEventListener("click", editFormHandler);




