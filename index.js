// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(names, namesFromEvent) {
    let messages = [];

    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful ${namesFromEvent} gift!`;
      messages.push(message);
    }
    return messages;
  }
  console.log(result);

  function countDown(takeOffNumber) {
    while (takeOffNumber >= 0) {
        console.log(takeOffNumber);
        takeOffNumber--;
    }
}