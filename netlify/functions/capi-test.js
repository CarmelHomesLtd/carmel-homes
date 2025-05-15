
const fetch = require("node-fetch");
const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");

function sha256(value) {
  return crypto.createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  const body = JSON.parse(event.body);
  const { first_name, last_name, email, phone, city, event_source_url } = body;
  const event_id = uuidv4();
  const user_data = {
    em: sha256(email),
    ph: sha256(phone),
    ct: sha256(city),
    fn: sha256(first_name),
    ln: sha256(last_name),
    client_user_agent: event.headers["user-agent"],
    client_ip_address: event.headers["x-nf-client-connection-ip"] || event.headers["client-ip"],
  }

  const pixelId = process.env.FB_PIXEL_ID;
  const accessToken = process.env.FB_ACCESS_TOKEN;
  const apiVersion = process.env.FB_API_VERSION;

  const response = await fetch(
    `https://graph.facebook.com/${apiVersion}/${pixelId}/events?access_token=${accessToken}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "data": [{
          event_name: "Lead",
          event_id,
          event_source_url,
          user_data,
          event_time: Math.floor(Date.now() / 1000),
          action_source: "website",
        }]
      }),
    }
  );

  const result = await response.json();
  if (response.ok) {
    console.log("sent", result)
    return {
      statusCode: 200,
      body: JSON.stringify({ event_id, ...result }),
    };
  } else {
    console.error(result)
    return { statusCode: 500 }
  }
};
