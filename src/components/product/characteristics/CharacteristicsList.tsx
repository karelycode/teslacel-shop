interface Props {
  pares: string[][];
}

export const CharacteristicsList = ({ pares }: Props) => {
  return (
    <ul className="list-none md:list-disc grid font-light grid-cols-2 md:grid-cols-1 2xl:grid-cols-2 gap-2 ml-1">
      {pares.map((par, index) => (
        <li key={index}>
          <p className="font-semibold">{par[0]}:</p> <span>{par[1]}</span>
        </li>
      ))}
    </ul>
  );
};
