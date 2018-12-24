import { gql } from 'apollo-server-lambda';

const typeDefs = gql`
  "Description for the Org type"
  type Org {
    """
    Description for field
    Supports **multi-line** description for your [API](http://example.com)!
    """
    org_id: String!
    name: String!
    addedAt: String
  }

  type Query {
    hello: String
    orgs: [Org]
  }

  type Mutation {
    addOrg(name: String!): Org!
  }
`;

export default typeDefs;
