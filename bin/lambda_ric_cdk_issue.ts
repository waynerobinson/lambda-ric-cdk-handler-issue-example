#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib/core';
import { LambdaRicCdkIssueStack } from '../lib/lambda_ric_cdk_issue-stack';

const app = new cdk.App();
new LambdaRicCdkIssueStack(app, 'LambdaRicCdkIssueStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },

});
