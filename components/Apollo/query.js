import { gql } from "@apollo/client"

export const PRODUCTS_BY_CATEGORY = gql`
query ($Type: String, $Name: String, $page: Int, $pageSize: Int) {
  products(filters: {categories:{ Type: {eq: $Type} Name:{eq: $Name}}}, pagination: {page: $page, pageSize: $pageSize} ){
    data{
      id,
      attributes{
        title, 
        price,
        discount_price,
        description,
        stock,
        
        thumbnails{
          data{
            id,
            attributes{
              url
            }
          }
        },
        categories{
          data{
            id,
              attributes{
                Type, Name
              }
            
          }
        },
        
      }
    }
    meta{
      pagination{
        page, pageSize, pageCount, total
      }
    }
  }
}

`
