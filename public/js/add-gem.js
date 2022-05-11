async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector("input[name='gem-title']").value;
  const gem_url = document.querySelector("input[name='gem_url']").value;

  const response = await fetch("/api/gem", {
    method: "POST",
    body: JSON.stringify({
      title,
      gem_url
    }),
    headers: { "Content-Type": "application/json"}
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  }
};

document.querySelector(".new-gem-form").addEventListener("submit", newFormHandler);
