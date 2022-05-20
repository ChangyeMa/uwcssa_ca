/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      userName
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
      userName
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
      userName
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createUserProfile = /* GraphQL */ `
  mutation CreateUserProfile(
    $input: CreateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    createUserProfile(input: $input, condition: $condition) {
      id
      name
      firstName
      contactEmail
      title
      about
      avatarURL
      website
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUserProfile = /* GraphQL */ `
  mutation UpdateUserProfile(
    $input: UpdateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    updateUserProfile(input: $input, condition: $condition) {
      id
      name
      firstName
      contactEmail
      title
      about
      avatarURL
      website
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUserProfile = /* GraphQL */ `
  mutation DeleteUserProfile(
    $input: DeleteUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    deleteUserProfile(input: $input, condition: $condition) {
      id
      name
      firstName
      contactEmail
      title
      about
      avatarURL
      website
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      id
      label
      articles {
        items {
          id
          tagID
          articleID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
      id
      label
      articles {
        items {
          id
          tagID
          articleID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
      id
      label
      articles {
        items {
          id
          tagID
          articleID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createArticle = /* GraphQL */ `
  mutation CreateArticle(
    $input: CreateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    createArticle(input: $input, condition: $condition) {
      id
      title
      tags {
        items {
          id
          tagID
          articleID
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          content
          isDeleted
          articleCommentId
          createdAt
          updatedAt
          owner
          articleCommentsId
        }
        nextToken
      }
      active
      createdAt
      updatedAt
      owner
      user {
        id
        name
        firstName
        contactEmail
        title
        about
        avatarURL
        website
        createdAt
        updatedAt
        owner
      }
    }
  }
`;
export const updateArticle = /* GraphQL */ `
  mutation UpdateArticle(
    $input: UpdateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    updateArticle(input: $input, condition: $condition) {
      id
      title
      tags {
        items {
          id
          tagID
          articleID
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          content
          isDeleted
          articleCommentId
          createdAt
          updatedAt
          owner
          articleCommentsId
        }
        nextToken
      }
      active
      createdAt
      updatedAt
      owner
      user {
        id
        name
        firstName
        contactEmail
        title
        about
        avatarURL
        website
        createdAt
        updatedAt
        owner
      }
    }
  }
`;
export const deleteArticle = /* GraphQL */ `
  mutation DeleteArticle(
    $input: DeleteArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    deleteArticle(input: $input, condition: $condition) {
      id
      title
      tags {
        items {
          id
          tagID
          articleID
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          content
          isDeleted
          articleCommentId
          createdAt
          updatedAt
          owner
          articleCommentsId
        }
        nextToken
      }
      active
      createdAt
      updatedAt
      owner
      user {
        id
        name
        firstName
        contactEmail
        title
        about
        avatarURL
        website
        createdAt
        updatedAt
        owner
      }
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      content
      isDeleted
      articleCommentId
      article {
        id
        title
        tags {
          nextToken
        }
        comments {
          nextToken
        }
        active
        createdAt
        updatedAt
        owner
        user {
          id
          name
          firstName
          contactEmail
          title
          about
          avatarURL
          website
          createdAt
          updatedAt
          owner
        }
      }
      createdAt
      updatedAt
      owner
      user {
        id
        name
        firstName
        contactEmail
        title
        about
        avatarURL
        website
        createdAt
        updatedAt
        owner
      }
      articleCommentsId
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      content
      isDeleted
      articleCommentId
      article {
        id
        title
        tags {
          nextToken
        }
        comments {
          nextToken
        }
        active
        createdAt
        updatedAt
        owner
        user {
          id
          name
          firstName
          contactEmail
          title
          about
          avatarURL
          website
          createdAt
          updatedAt
          owner
        }
      }
      createdAt
      updatedAt
      owner
      user {
        id
        name
        firstName
        contactEmail
        title
        about
        avatarURL
        website
        createdAt
        updatedAt
        owner
      }
      articleCommentsId
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      content
      isDeleted
      articleCommentId
      article {
        id
        title
        tags {
          nextToken
        }
        comments {
          nextToken
        }
        active
        createdAt
        updatedAt
        owner
        user {
          id
          name
          firstName
          contactEmail
          title
          about
          avatarURL
          website
          createdAt
          updatedAt
          owner
        }
      }
      createdAt
      updatedAt
      owner
      user {
        id
        name
        firstName
        contactEmail
        title
        about
        avatarURL
        website
        createdAt
        updatedAt
        owner
      }
      articleCommentsId
    }
  }
`;
export const createContactUs = /* GraphQL */ `
  mutation CreateContactUs(
    $input: CreateContactUsInput!
    $condition: ModelContactUsConditionInput
  ) {
    createContactUs(input: $input, condition: $condition) {
      id
      fullName
      email
      message
      phone
      createdAt
      updatedAt
      owner
      user {
        id
        name
        firstName
        contactEmail
        title
        about
        avatarURL
        website
        createdAt
        updatedAt
        owner
      }
    }
  }
`;
export const updateContactUs = /* GraphQL */ `
  mutation UpdateContactUs(
    $input: UpdateContactUsInput!
    $condition: ModelContactUsConditionInput
  ) {
    updateContactUs(input: $input, condition: $condition) {
      id
      fullName
      email
      message
      phone
      createdAt
      updatedAt
      owner
      user {
        id
        name
        firstName
        contactEmail
        title
        about
        avatarURL
        website
        createdAt
        updatedAt
        owner
      }
    }
  }
`;
export const deleteContactUs = /* GraphQL */ `
  mutation DeleteContactUs(
    $input: DeleteContactUsInput!
    $condition: ModelContactUsConditionInput
  ) {
    deleteContactUs(input: $input, condition: $condition) {
      id
      fullName
      email
      message
      phone
      createdAt
      updatedAt
      owner
      user {
        id
        name
        firstName
        contactEmail
        title
        about
        avatarURL
        website
        createdAt
        updatedAt
        owner
      }
    }
  }
`;
export const createArticleTags = /* GraphQL */ `
  mutation CreateArticleTags(
    $input: CreateArticleTagsInput!
    $condition: ModelArticleTagsConditionInput
  ) {
    createArticleTags(input: $input, condition: $condition) {
      id
      tagID
      articleID
      tag {
        id
        label
        articles {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      article {
        id
        title
        tags {
          nextToken
        }
        comments {
          nextToken
        }
        active
        createdAt
        updatedAt
        owner
        user {
          id
          name
          firstName
          contactEmail
          title
          about
          avatarURL
          website
          createdAt
          updatedAt
          owner
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateArticleTags = /* GraphQL */ `
  mutation UpdateArticleTags(
    $input: UpdateArticleTagsInput!
    $condition: ModelArticleTagsConditionInput
  ) {
    updateArticleTags(input: $input, condition: $condition) {
      id
      tagID
      articleID
      tag {
        id
        label
        articles {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      article {
        id
        title
        tags {
          nextToken
        }
        comments {
          nextToken
        }
        active
        createdAt
        updatedAt
        owner
        user {
          id
          name
          firstName
          contactEmail
          title
          about
          avatarURL
          website
          createdAt
          updatedAt
          owner
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteArticleTags = /* GraphQL */ `
  mutation DeleteArticleTags(
    $input: DeleteArticleTagsInput!
    $condition: ModelArticleTagsConditionInput
  ) {
    deleteArticleTags(input: $input, condition: $condition) {
      id
      tagID
      articleID
      tag {
        id
        label
        articles {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      article {
        id
        title
        tags {
          nextToken
        }
        comments {
          nextToken
        }
        active
        createdAt
        updatedAt
        owner
        user {
          id
          name
          firstName
          contactEmail
          title
          about
          avatarURL
          website
          createdAt
          updatedAt
          owner
        }
      }
      createdAt
      updatedAt
    }
  }
`;
