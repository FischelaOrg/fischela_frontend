import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://api.thegraph.com/subgraphs/name/norvirae/fischela",
    cache: new InMemoryCache(),
});

export default client;