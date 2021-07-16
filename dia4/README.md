

``` bash
AWS_ACCESS_KEY_ID=dummy \
AWS_SECRET_ACCESS_KEY=dummy \
aws dynamodb create-table \
  --cli-input-json "$(cat ./table.json)" \
  --endpoint-url http://localhost:8000 \
  --region sa-east-1
```