import { gql } from "@apollo/client";

const getPeople = gql`
  query People {
    people {
      _id
      firstname
      surname
      gender
    }
  }
`;

const getPersonById = gql`
  query Person($personId: ID!) {
    person(id: $personId) {
      _id
      firstname
      surname
      gender
    }
  }
`;

export { getPeople, getPersonById };
