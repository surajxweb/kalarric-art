import { NextResponse } from "next/server";
import { GraphQLClient } from "graphql-request"; // Import GraphQLClient

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");

  // Define your GraphQL query as a string
  const graphqlQuery = `
  mutation {
    createArt(
      data: {
        emailId:  "${email}"
      }
    ) {
      id
      emailId
    }
  }
  `;

  // Create a GraphQL client instance
  const client = new GraphQLClient(process.env.GPAPHQL_KA_CHAABI || ""); // Replace with your GraphQL API endpoint

  try {
    const id = await client.request(graphqlQuery);

    // You can access the response data in the `data` variable
    return NextResponse.json({ emailID: id });
  } catch (error) {
    console.error("GraphQL request error:", error);
    return NextResponse.error();
  }
}