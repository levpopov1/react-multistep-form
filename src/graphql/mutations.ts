import { gql } from "@apollo/client";

const addPerson = gql`
  mutation AddPerson($data: PersonInput!) {
    addPerson(data: $data) {
      _id
    }
  }
`;

const updatePerson = gql`
  mutation UpdatePerson($updatePersonId: ID!, $data: PersonInput!) {
    updatePerson(id: $updatePersonId, data: $data) {
      _id
      firstname
      surname
      gender
    }
  }
`;

export { addPerson, updatePerson };
