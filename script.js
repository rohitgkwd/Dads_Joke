const jokes = document.getElementById("jokes");
const jokesBtn = document.querySelector(".jokeBtn");

const setHeader = {
  headers: {
    Accept: "application/json",
  },
};

const generateJokes = async () => {
  try {
    const res = await fetch("https://icanhazdadjoke.com/", setHeader);
    const data = await res.json();
    jokes.innerHTML = data.joke;
  } catch (error) {
    console.log(`the error is ${error}`);
  }
};

jokesBtn.addEventListener("click", generateJokes);
generateJokes();
