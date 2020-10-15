/* Amplify Params - DO NOT EDIT
	API_BOTFACTORY_BOTTABLE_ARN
	API_BOTFACTORY_BOTTABLE_NAME
	API_BOTFACTORY_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");

const { createRecord } = require("/opt/createRecord.js");
const { getEnvData } = require("/opt/getEnvData.js");

const BOT_TABLE = getEnvData(process.env, "API_BOTFACTORY_BOTTABLE_NAME");

// TODO: store these values in environment variables
const IMAGE_ID = "ami-00534d46ac7fc5d75";
const INSTANCE_TYPE = "t2.micro";
const KEY_NAME = "botfactory_admin_keypair";

const db = new AWS.DynamoDB.DocumentClient();
const ec2 = new AWS.EC2(); // TODO: possibly add version to this, like in the example

exports.handler = async (event) => {
  console.log("before await createInstance");
  const instanceId = await createInstance();
  console.log("after await createInstance");
  const record = {
    id: event.id,
    name: "Untitled",
    token: event.arguments.input.token,
    prefix: "!",
    instanceId: instanceId,
  };
  await createRecord(db, BOT_TABLE, record);
  return record;
};

function createInstance() {
  console.log("start creating ec2 instance");
  return ec2
    .runInstances({
      ImageId: IMAGE_ID,
      InstanceType: INSTANCE_TYPE,
      KeyName: KEY_NAME,
      MaxCount: 1,
      MinCount: 1,
    })
    .promise()
    .then((response) => {
      console.log("finished creating ec2 instance");
      console.log(response);
      return response.Instances[0].InstanceId;
    })
    .catch((error) => {
      console.log("catching error");
      console.log(error);
    });
}
