import { gql } from "@apollo/client";

export const GET_TODOS = gql`
   query{
    todos(options:{paginate:{page:1, limit:4}}){
        data{
            id
            title
            completed
        }
    }
   }
`;
