import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Listing: a.model({
    id: a.id(),
    Bed: a.string(),
    Bath: a.string(),
    Title: a.string(),
    Agent: a.string(),
    Price: a.string(),
    CoverPhoto: a.url(),
  }).authorization(allow => [allow.publicApiKey()])
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});