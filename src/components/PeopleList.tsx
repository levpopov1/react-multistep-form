import { useQuery } from "@apollo/client";
import { getPeople } from "../graphql/queries";
import Error from "./Error";
import Loading from "./Loading";
import PeopleListItem from "./PeopleListItem";

function PeopleList() {
  const { error, loading, data } = useQuery(getPeople);

  if (error) return <Error message={error.message} />;
  if (loading) return <Loading />;

  return (
    <div>
      <h1 className="font-serif text-5xl text-purple-900 my-5">People List</h1>
      <div className="shadow-md mb-6">
        <table className="table-auto w-full text-left ">
          <thead className="uppercase bg-black text-gray-50">
            <tr>
              <th className="py-3 px-6">Index</th>
              <th className="py-3 px-6">ID</th>
              <th className="py-3 px-6">First Name</th>
              <th className="py-3 px-6">Last Name</th>
              <th className="py-3 px-6">Gender</th>
            </tr>
          </thead>
          <tbody>
            {data.people.map((person: any, index: number) => (
              <PeopleListItem key={person._id} person={person} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PeopleList;
