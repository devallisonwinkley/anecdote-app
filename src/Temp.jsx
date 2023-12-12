import { useState } from "react";

function Anecdote() {
  // const points = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

  // You should know these higher order functions when working with JavaScript forEach, Map, Filter, Find, Reduce
  // Collections is an array of items - items that are related to each other

  const [anecdotes, setAnecdotes] = useState([
    {
      text: "Anger is the ultimate destroyer of your own peace of mind. -Dalai Lama",
      votes: 0,
    },
    {
      text: "To love your neighbor as yourself, after all, is the great injunction of every religion. -Marc Ian Barasch",
      votes: 0,
    },
    {
      text: "When we have respect for ourselves and others, we gravitate towards connections that encourage that. -Simeon Lindstrom",
      votes: 0,
    },
    {
      text: "Don’t be afraid. Be focused. Be determined. Be hopeful. Be empowered. -Michelle Obama",
      votes: 0,
    },
    {
      text: "The true wealth of a nation lies not in it’s gold or silver but in it’s learning, wisdom and in the uprightness of its sons. -Kahlil Gibran",
      votes: 0,
    },
    {
      text: "If you want to see a rainbow you have to learn to see the rain. -Paulo Coelho",
      votes: 0,
    },
    {
      text: "Reading without reflecting is like eating without digesting. - Edmund Burke",
      votes: 0,
    },
  ]);

  const [selected, setSelected] = useState(0);

  // const [mostVoted, setMostVoted] = useState(0);

  const handleVote = () => {
    // points[selected] = points[selected] + 1;
    // setMostVoted(findAnecdoteWithMostVotes());

    const newAnecdotes = anecdotes.map((anecdote, index) => {
      if (index === selected) {
        return { ...anecdote, votes: anecdote.votes + 1 };
        // return { text: anecdote.text, votes: anecdote.votes + 1 }; - IF NOT USING SPREAD OPERATOR
      }

      return anecdote;
    });

    setAnecdotes(newAnecdotes);
  };

  // Generates random number from 0 to length of anecdotes (in this case - 7)
  const handleNextAnecdote = () =>
    setSelected(Math.floor(Math.random() * (anecdotes.length - 1)));

  const findAnecdoteWithMostVotes = () => {
    // const pointsArr = Object.values(points);
    // const anecdotewithMostVotes = pointsArr.findIndex(
    // (point) => point === Math.max(...pointsArr)

    // const anecdotewithMostVotes = anecdotes.findIndex(
    //   (anecdote) => anecdote.votes === Math.max(...anecdotes.votes)
    // );

    // Reduce looks through the array and returns a single condition based on what the code is
    const anecdotewithMostVotes = anecdotes.reduce((prev, current) =>
      prev.votes > current.votes ? prev : current
    );

    return anecdotewithMostVotes;
  };

  return (
    <div>
      <h1>Anecdote of the day:</h1>

      <p>{anecdotes[selected].text}</p>

      <button onClick={handleVote}>Vote</button>
      <button onClick={handleNextAnecdote}>Next Anecdote</button>

      <h1>Anecdote with the most votes:</h1>

      {/* <p>{anecdotes[mostVoted].text}</p> */}
      <p>{findAnecdoteWithMostVotes().text}</p>

      {/* <p>has {anecdotes[selected].votes} votes</p> */}
      <p>has {findAnecdoteWithMostVotes().votes} votes</p>
    </div>
  );
}

export default Anecdote;
