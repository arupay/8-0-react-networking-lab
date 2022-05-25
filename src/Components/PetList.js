export const PetList = (props) => {
  const { vetPets } = props;
  return (
    <aside className="pets-list">
      {vetPets.length ? (
        vetPets.map((pet) => <p key={pet.id}>{pet.name}</p>)
      ) : (
        <p>No pets listed at this time.</p>
      )}
    </aside>
  );
};

export default PetList;
