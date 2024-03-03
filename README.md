# flavor-forecast

Site to present ice cream flavors of the day

#GraphQL config

example repo https://github.com/MarcoDaniels/graphql-demo/tree/master/services/API/src

.data file: contains helper methods and the export of {tableName}Db with all the queries/mutations in it

.query file: contains read queries from the db, ie. getUser, listUser typically resolving a graphqlfieldConfig. file returns a {tableName}Query GraphqlObjectType

.mutation file: contains create, update, delete queries from the db, ie. createUser, deleteUser typically resolving a graphqlfieldConfig. file returns a {tableName}Mutation GraphqlObjectType

.type contains graphql types and typescript types (graphQLObjectTypes etc..)
