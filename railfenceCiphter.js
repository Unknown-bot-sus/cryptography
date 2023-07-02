const buildRailfence = (railfenceNum) =>
  Array.from(
    {
      length: railfenceNum,
    },
    () => []
  );

const fillRailfences = (message, fences, index = 0) => {
  for (let i = 0; i < fences.length && index < message.length; i++) {
    fences[i].push(message[index++]);
  }

  for (let i = fences.length - 2; i > 0 && index < message.length; i--) {
    fences[i].push(message[index++]);
  }

  if (index < message.length) {
    fillRailfences(message, fences, index);
  }

  return fences;
};

exports.encrypt = (message, railfenceNum) => {
  const railfences = buildRailfence(railfenceNum);

  fillRailfences(message, railfences);

  return railfences.map((railfence) => railfence.join("")).join("");
};

const getRailFencesLength = (message, railfenceCouner, index = 0) => {
  for (let i = 0; i < railfenceCouner.length && index < message.length; i++) {
    railfenceCouner[i] += 1;
    ++index;
  }

  for (
    let i = railfenceCouner.length - 2;
    i > 0 && index < message.length;
    i--
  ) {
    railfenceCouner[i] += 1;
    ++index;
  }

  if (index < message.length) {
    getRailFencesLength(message, railfenceCouner, index);
  }

  return railfenceCouner;
};
