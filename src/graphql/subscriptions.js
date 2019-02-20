// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateTodo = `subscription OnCreateTodo {
  onCreateTodo {
    id
    note
    done
  }
}
`;
export const onUpdateTodo = `subscription OnUpdateTodo {
  onUpdateTodo {
    id
    note
    done
  }
}
`;
export const onDeleteTodo = `subscription OnDeleteTodo {
  onDeleteTodo {
    id
    note
    done
  }
}
`;
export const onCreateMyCustomType = `subscription OnCreateMyCustomType(
  $id: ID
  $title: String
  $content: String
  $price: Int
  $rating: Float
) {
  onCreateMyCustomType(
    id: $id
    title: $title
    content: $content
    price: $price
    rating: $rating
  ) {
    id
    title
    content
    price
    rating
  }
}
`;
export const onUpdateMyCustomType = `subscription OnUpdateMyCustomType(
  $id: ID
  $title: String
  $content: String
  $price: Int
  $rating: Float
) {
  onUpdateMyCustomType(
    id: $id
    title: $title
    content: $content
    price: $price
    rating: $rating
  ) {
    id
    title
    content
    price
    rating
  }
}
`;
export const onDeleteMyCustomType = `subscription OnDeleteMyCustomType(
  $id: ID
  $title: String
  $content: String
  $price: Int
  $rating: Float
) {
  onDeleteMyCustomType(
    id: $id
    title: $title
    content: $content
    price: $price
    rating: $rating
  ) {
    id
    title
    content
    price
    rating
  }
}
`;
export const onCreateMyUserType = `subscription OnCreateMyUserType(
  $id: ID
  $username: String
  $content: String
  $email: String
  $age: Int
) {
  onCreateMyUserType(
    id: $id
    username: $username
    content: $content
    email: $email
    age: $age
  ) {
    id
    username
    content
    email
    age
  }
}
`;
export const onUpdateMyUserType = `subscription OnUpdateMyUserType(
  $id: ID
  $username: String
  $content: String
  $email: String
  $age: Int
) {
  onUpdateMyUserType(
    id: $id
    username: $username
    content: $content
    email: $email
    age: $age
  ) {
    id
    username
    content
    email
    age
  }
}
`;
export const onDeleteMyUserType = `subscription OnDeleteMyUserType(
  $id: ID
  $username: String
  $content: String
  $email: String
  $age: Int
) {
  onDeleteMyUserType(
    id: $id
    username: $username
    content: $content
    email: $email
    age: $age
  ) {
    id
    username
    content
    email
    age
  }
}
`;
