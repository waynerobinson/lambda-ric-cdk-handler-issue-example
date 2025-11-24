## aws_lambda_ric/CDK Overwritten _HANDLER Example

When using aws_lambda_ric with cdk initialization fails because the _HANDLER environment variable appears to be reserved by Lambda and it's being overwritten by a blank string (not set to nil, so not failing on that check).

I've created an example project demonstrating this at https://github.com/waynerobinson/lambda-ric-cdk-handler-issue-example

Our current project patches aws_lambda_ric to rename _HANDLER to _RIC_HANDLER in aws_lambda_ric.rb, which appears to be working OK, but unsure as to whether that's the best way to fix this in this core library.


### Reproduction Steps

```bash
git checkout https://github.com/waynerobinson/lambda-ric-cdk-handler-issue-example
cd lambda-ric-cdk-handler-issue-example
npm install
cdk deploy
aws lambda invoke --function-name lambda-ric-cdk-issue-test /dev/stdout
```