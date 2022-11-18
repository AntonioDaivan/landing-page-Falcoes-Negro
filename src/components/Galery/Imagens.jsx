export const ReptileList= _ => {
    const reptiles = ["alligator", "snake", "lizard"];
  
    return (
      <ol>
        {reptiles.map((reptile) => (
          <li>{reptile}</li>
        ))}
      </ol>
    );
}
