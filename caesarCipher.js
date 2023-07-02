const shiftChar = (letter, key) => {
  const charCode = letter.charCodeAt(0);
  const shiftedCode = charCode - 65 + key;
  const formattedCode =
    ((shiftedCode < 0 ? 26 + shiftedCode : shiftedCode) % 26) + 65;
  return String.fromCharCode(formattedCode);
};

exports.encrypt = (message, key) =>
  message.toUpperCase().replace(/\w/g, (letter) => shiftChar(letter, key));

exports.decrypt = (message, key) =>
  message.toUpperCase().replace(/\w/g, (letter) => shiftChar(letter, -key));
