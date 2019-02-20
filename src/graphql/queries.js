// eslint-disable
// this is an auto generated file. This will be overwritten

export const getTodo = `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    id
    note
    done
  }
}
`;
export const listTodos = `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      note
      done
    }
    nextToken
  }
}
`;
export const getMyCustomType = `query GetMyCustomType($id: ID!) {
  getMyCustomType(id: $id) {
    id
    title
    content
    price
    rating
  }
}
`;
export const listMyCustomTypes = `query ListMyCustomTypes(
  $filter: TableMyCustomTypeFilterInput
  $limit: Int
  $nextToken: String
) {
  listMyCustomTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      content
      price
      rating
    }
    nextToken
  }
}
`;
export const getMyUserType = `query GetMyUserType($id: ID!) {
  getMyUserType(id: $id) {
    id
    username
    content
    email
    age
  }
}
`;
export const listMyUserTypes = `query ListMyUserTypes(
  $filter: TableMyUserTypeFilterInput
  $limit: Int
  $nextToken: String
) {
  listMyUserTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      content
      email
      age
    }
    nextToken
  }
}
`;
