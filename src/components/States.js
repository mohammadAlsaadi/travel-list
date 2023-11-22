export default function States({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items tou your packing list 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  // const percentagePackedItems = parseInt((numPacked / numItems) * 100);//remove numbers after .00
  const percentagePackedItems = Math.round((numPacked / numItems) * 100); //ROUND IT to greater

  return (
    <footer className="stats">
      <em>
        {percentagePackedItems === 100
          ? "You got everything! Ready to go ✈️ "
          : ` 💼You have ${numItems} items on your list, and you already packed ${" "}
        ${numPacked} (${percentagePackedItems}%)`}
      </em>
    </footer>
  );
}
