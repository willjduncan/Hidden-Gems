async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector("input[name='gem-title']").value.trim();
    const description = document.querySelector("textarea[name='gem-desc']").value.trim();
    const country = document.querySelector("select[name='gem-country']").value.trim();
    const state = document.querySelector("input[name='gem-state']").value.trim();
    const visitors = document.querySelector("input[name='gem-visit']").value.trim();
    const pic = document.querySelector("input[name='gem-photo']").value.trim();
    const activity_type = document.querySelector("select[name='gem-activity']").value.trim();
    const city = document.querySelector("input[name='gem-city']").value.trim();
    const lon = document.querySelector("input[name='gem-lon']").value.trim();
    const lat = document.querySelector("input[name='gem-lat']").value.trim();
    const id = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
    ];

    const response = await fetch(`api/gem/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            title,
            description,
            country,
            state,
            visitors,
            pic,
            activity_type,
            city,
            lon,
            lat
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

document.querySelector(".btn btn-primary").addEventListener("submit", editFormHandler);