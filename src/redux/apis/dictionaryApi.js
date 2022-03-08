// "https://api.dictionaryapi.dev/api/v2/entries/en_US/hello";

export const DictionaryApis = async () => {
  try {
    const res = await fetch(
      "https://api.dictionaryapi.dev/api/v2/entries/en_US/hello"
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
