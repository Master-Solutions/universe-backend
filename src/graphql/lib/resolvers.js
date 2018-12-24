import docClient from './docClient';

const uuid = require('uuid');

const listOrgs = () => {
  return docClient
    .scan({ TableName: process.env.TABLE_ORGS })
    .promise()
    .then(r => r.Items);
};

const createOrg = data => {
  const params = {
    TableName: process.env.TABLE_ORGS,
    Item: {
      org_id: uuid.v1(),
      name: data.name,
      addedAt: Date.now(),
    },
  };
  return docClient
    .put(params)
    .promise()
    .then(() => params.Item);
};

const orgs = [
  {
    org_id: '1',
    name: 'MasterSolutions',
  },
  {
    org_id: '2',
    name: 'Testing Org',
  },
];

export default {
  Query: {
    hello: () => 'Hello world!',
    orgs: () => orgs,
    //orgs: (root, args) => listOrgs(args),
  },
  Mutation: {
    addOrg: (root, args) => createOrg(args),
  },
};
