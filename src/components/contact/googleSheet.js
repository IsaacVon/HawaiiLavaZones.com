import apiKeys from "../../apiKeys";
const { GoogleSpreadsheet } = require("google-spreadsheet");
const doc = new GoogleSpreadsheet(
  "1UZ7B_mVH1cN_IZ2ANODh6CHghkSu5m4_Ha3JmtvHwL0"
);

console.log("Client Email: ", apiKeys.clientEmail)

export default async function googleSheet(event) {
  await doc.useServiceAccountAuth({
    client_email: apiKeys.clientEmail,
    private_key: apiKeys.privateKey
  });

  await doc.loadInfo(); // loads document properties and worksheets
  // console.log(doc.title)

  const sheet = doc.sheetsByIndex[0];
  // console.log("Sheet title", sheet.title);
  // console.log("Sheet row count", sheet.rowCount);
  // console.log("sheet update linked..", event);
  // console.log("Data to input", event.time);

  // const row = await
  sheet.addRow({
    investmentAddress: event.investmentAddress,
    email: event.emailAddress,
    name: event.name,
    phone: event.phoneNumber,
    price: event.price,
    questions: event.questions,
    time: event.time,
    timeStamp: new Date().toLocaleString(),
  });
}
