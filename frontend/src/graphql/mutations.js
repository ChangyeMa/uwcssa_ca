/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTopic = /* GraphQL */ `
  mutation CreateTopic(
    $input: CreateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    createTopic(input: $input, condition: $condition) {
      id
      name
      like
      unlike
      createdAt
      updatedAt
      owner
      articles {
        items {
          id
          title
          content
          imagePath
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const updateTopic = /* GraphQL */ `
  mutation UpdateTopic(
    $input: UpdateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    updateTopic(input: $input, condition: $condition) {
      id
      name
      like
      unlike
      createdAt
      updatedAt
      owner
      articles {
        items {
          id
          title
          content
          imagePath
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const deleteTopic = /* GraphQL */ `
  mutation DeleteTopic(
    $input: DeleteTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    deleteTopic(input: $input, condition: $condition) {
      id
      name
      like
      unlike
      createdAt
      updatedAt
      owner
      articles {
        items {
          id
          title
          content
          imagePath
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const createType = /* GraphQL */ `
  mutation CreateType(
    $input: CreateTypeInput!
    $condition: ModelTypeConditionInput
  ) {
    createType(input: $input, condition: $condition) {
      id
      name
      like
      unlike
      createdAt
      updatedAt
      owner
      articles {
        items {
          id
          title
          content
          imagePath
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const updateType = /* GraphQL */ `
  mutation UpdateType(
    $input: UpdateTypeInput!
    $condition: ModelTypeConditionInput
  ) {
    updateType(input: $input, condition: $condition) {
      id
      name
      like
      unlike
      createdAt
      updatedAt
      owner
      articles {
        items {
          id
          title
          content
          imagePath
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const deleteType = /* GraphQL */ `
  mutation DeleteType(
    $input: DeleteTypeInput!
    $condition: ModelTypeConditionInput
  ) {
    deleteType(input: $input, condition: $condition) {
      id
      name
      like
      unlike
      createdAt
      updatedAt
      owner
      articles {
        items {
          id
          title
          content
          imagePath
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
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
      content
      imagePath
      like
      unlike
      createdAt
      updatedAt
      topic {
        id
        name
        like
        unlike
        createdAt
        updatedAt
        owner
        articles {
          nextToken
        }
      }
      type {
        id
        name
        like
        unlike
        createdAt
        updatedAt
        owner
        articles {
          nextToken
        }
      }
      owner
      ArticleComments {
        items {
          id
          content
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        nextToken
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
      content
      imagePath
      like
      unlike
      createdAt
      updatedAt
      topic {
        id
        name
        like
        unlike
        createdAt
        updatedAt
        owner
        articles {
          nextToken
        }
      }
      type {
        id
        name
        like
        unlike
        createdAt
        updatedAt
        owner
        articles {
          nextToken
        }
      }
      owner
      ArticleComments {
        items {
          id
          content
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        nextToken
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
      content
      imagePath
      like
      unlike
      createdAt
      updatedAt
      topic {
        id
        name
        like
        unlike
        createdAt
        updatedAt
        owner
        articles {
          nextToken
        }
      }
      type {
        id
        name
        like
        unlike
        createdAt
        updatedAt
        owner
        articles {
          nextToken
        }
      }
      owner
      ArticleComments {
        items {
          id
          content
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const createArticleComment = /* GraphQL */ `
  mutation CreateArticleComment(
    $input: CreateArticleCommentInput!
    $condition: ModelArticleCommentConditionInput
  ) {
    createArticleComment(input: $input, condition: $condition) {
      id
      content
      like
      unlike
      createdAt
      updatedAt
      article {
        id
        title
        content
        imagePath
        like
        unlike
        createdAt
        updatedAt
        topic {
          id
          name
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        type {
          id
          name
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        owner
        ArticleComments {
          nextToken
        }
      }
      owner
    }
  }
`;
export const updateArticleComment = /* GraphQL */ `
  mutation UpdateArticleComment(
    $input: UpdateArticleCommentInput!
    $condition: ModelArticleCommentConditionInput
  ) {
    updateArticleComment(input: $input, condition: $condition) {
      id
      content
      like
      unlike
      createdAt
      updatedAt
      article {
        id
        title
        content
        imagePath
        like
        unlike
        createdAt
        updatedAt
        topic {
          id
          name
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        type {
          id
          name
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        owner
        ArticleComments {
          nextToken
        }
      }
      owner
    }
  }
`;
export const deleteArticleComment = /* GraphQL */ `
  mutation DeleteArticleComment(
    $input: DeleteArticleCommentInput!
    $condition: ModelArticleCommentConditionInput
  ) {
    deleteArticleComment(input: $input, condition: $condition) {
      id
      content
      like
      unlike
      createdAt
      updatedAt
      article {
        id
        title
        content
        imagePath
        like
        unlike
        createdAt
        updatedAt
        topic {
          id
          name
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        type {
          id
          name
          like
          unlike
          createdAt
          updatedAt
          owner
        }
        owner
        ArticleComments {
          nextToken
        }
      }
      owner
    }
  }
`;