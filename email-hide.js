let email = "example@email.com";

const maskEmail = (email) => {
  const findEmailAt = email.indexOf("@"); //позиция @
  const starsCount = findEmailAt - 2; //кол-во символов для замены на *
  const stars = "*".repeat(starsCount); //заполнение нужным колличеством звезд

  const firstChar = email[0]; //первая буква емейла
  const lastBeforeAt = email[findEmailAt - 1]; //первая буква емейла перед @
  const afterAt = email.slice(findEmailAt) //вырезка открытого куска символов после * 

  return firstChar + stars + lastBeforeAt + afterAt;
}

console.log(maskEmail(email));