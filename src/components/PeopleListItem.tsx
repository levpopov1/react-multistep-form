type Props = {
  person: any;
  index: number;
};

const PeopleListItem: React.FC<Props> = ({ person, index }) => {
  return (
    <tr className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
      <td className="py-2 px-6">{index + 1}</td>
      <td className="py-2 px-6">{person._id}</td>
      <td className="py-2 px-6">{person.firstname}</td>
      <td className="py-2 px-6">{person.surname}</td>
      <td className="py-2 px-6">{person.gender}</td>
    </tr>
  );
};

export default PeopleListItem;
