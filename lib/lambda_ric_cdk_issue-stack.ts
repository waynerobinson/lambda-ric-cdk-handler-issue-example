import * as lambda from "aws-cdk-lib/aws-lambda";
import * as cdk from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import * as path from "node:path";

export class LambdaRicCdkIssueStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new lambda.DockerImageFunction(this, `TestFunction`, {
      functionName: "lambda-ric-cdk-issue-test",
      code: lambda.DockerImageCode.fromImageAsset(path.join(__dirname, "../ruby_lambda")),
      timeout: cdk.Duration.seconds(29),
    });
  }
}
