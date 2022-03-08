export const jokeApis = async () => {
  try {
    const res = await fetch(
      "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=20"
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
