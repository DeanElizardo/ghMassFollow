const fs = require("fs");
const { Octokit } = require("octokit");

const TO_FOLLOW = require("./contacts.json").contacts;
if (TO_FOLLOW[0] === "Add contacts here") {
	throw new Error("Provide at least one contact or there's no point in doing this, mate.");
}

try {
  var PAT = fs.readFileSync(`./PAT.txt`, "utf8");
} catch (err) {
  console.log(`Problem reading ./PAT.txt:\n${err}`);
}

const octokit = new Octokit({
  auth: PAT,
});

TO_FOLLOW.forEach(async function (user) {
  if (user === process.argv[2]) {
    return;
  }

  let response = await octokit.request("PUT /user/following/{username}", {
    username: `${user}`,
  });

  if (response.status == 204) {
		console.log(`Following ${user}`);
	}
});
