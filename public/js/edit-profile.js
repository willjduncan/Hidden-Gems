$("confirm-prof-edit").on("click", function (event) {
    event.preventDefault();

    const id = $(this).data("id");
    const changeUser = {
        email: $("edit-email").value().trim(),
        password: $("edit-gem-desc").value().trim()
    };
    {$.ajax({
        type: "PUT",
        url: `/api/user/${id}`,
        data: changeUser,
    })
        .then((result) => {
            console.log("Updated user:", result);
            window.location.href = "/";
        })};
});