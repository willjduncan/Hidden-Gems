async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector("input[name='gem-title']").value;
  const description = document.querySelector("input[name='description']").value;
  const country = document.querySelector("input[name='country']").value;
  const state = document.querySelector("input[name='state']").value;
  const visitors = document.querySelector("input[name='visitors']").value;
  const pic = document.querySelector("input[name='pic']").value;
  const activity_type = document.querySelector("input[name='activity_type']").value;
  const city = document.querySelector("input[name='city']").value;
  const lon = document.querySelector("input[name='lon']").value;
  const lat = document.querySelector("input[name='lat']").value;

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
};

document.querySelector(".new-gem-form").addEventListener("submit", newFormHandler);
