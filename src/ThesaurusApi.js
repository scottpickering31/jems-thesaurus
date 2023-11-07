export async function ThesaurusApi(input, callback) {
  const url = `https://synonyms-word-info.p.rapidapi.com/v1/word/synonyms?str=${input}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "40cb4a6d08msh5075dcee27584c9p1a33e9jsn084ff4f2d684",
      "X-RapidAPI-Host": "synonyms-word-info.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    const parsedData = JSON.parse(result);

    if (parsedData.data.synonyms) {
      callback(parsedData.data.synonyms.slice(0, 30)); // Pass the first 30 synonyms to the callback
    }
  } catch (error) {
    console.error(error);
  }
}
