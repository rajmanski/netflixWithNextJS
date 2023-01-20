export async function fetchGraphQL(operationsDoc, operationName, variables) {
    const result = await fetch(
      "https://more-tahr-80.hasura.app/v1/graphql",
      {
        method: "POST",
        headers: {
            'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA,
        },
        body: JSON.stringify({
          query: operationsDoc,
          variables: variables,
          operationName: operationName
        })
      }
    );
  
    return await result.json();
  }
  
  const operationsDoc = `
    query MyQuery {
      user {
        id
        email
        issuer
        publicAdress
      }
    }
  `;
  
  function fetchMyQuery() {
    return fetchGraphQL(
      operationsDoc,
      "MyQuery",
      {}
    );
  }
  
  export async function startFetchMyQuery() {
    const { errors, data } = await fetchMyQuery();
  
    if (errors) {
      // handle those errors like a pro
      console.error(errors);
    }
  
    // do something great with this precious data
    console.log(data);
  }
  
  startFetchMyQuery();