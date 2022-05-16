async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector("input[name='gem-title']").value;
  const description = document.querySelector("textarea[name='gem-desc']").value;
  const country = document.querySelector("select[name='gem-country']").value;
  const state = document.querySelector("input[name='gem-state']").value;
  const visitors = document.querySelector("input[name='gem-visit']").value;
  const pic = document.querySelector("input[name='gem-photo']").value;
  const activity_type = document.querySelector("select[name='gem-activity']").value;
  const city = document.querySelector("input[name='gem-city']").value;
  const lon = document.querySelector("input[name='gem-lon']").value;
  const lat = document.querySelector("input[name='gem-lat']").value;
  console.log("before")

  const response = await fetch("/api/gem", {
    method: "POST",
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
    headers: { "Content-Type": "application/json"}
  });

  if (response.ok) {
    document.location.replace("/dashboard/");
  }
  console.log("uh-oh")
};

document.querySelector(".add-gem-form").addEventListener('submit', newFormHandler);
