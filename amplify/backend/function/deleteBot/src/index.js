/* Amplify Params - DO NOT EDIT
	API_BOTFACTORY_BOTTABLE_ARN
	API_BOTFACTORY_BOTTABLE_NAME
	API_BOTFACTORY_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

exports.handler = async (event) => {
  console.log(event);
  // TODO: implement
  const response = {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*"
    //  },
    body: JSON.stringify("Hello from Lambda!"),
  };
  return response;
};
