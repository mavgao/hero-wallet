import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-2_i0u4AXucl",
  ClientId: "4rjvc13p144asbbbs5ufchil4p",
};

export default new CognitoUserPool(poolData);
