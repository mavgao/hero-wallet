const AWS = require("aws-sdk");
const RDS = new AWS.RDSDataService();

exports.handler = async (event, context) => {
  const username = event.request.userAttributes.email;
  // 这里添加其他需要保存到 RDS 的属性

  // 定义插入用户记录到 RDS 的 SQL 语句
  const sql = `INSERT INTO user (username) VALUES (:username)`;

  // 参数替换
  const params = {
    secretArn: "arn:aws:secretsmanager:xxx:secret:rds-db-credentials/xxx", // 替换为您的凭据 ARN
    resourceArn: "arn:aws:rds:region:xxx:cluster:database-1", // 替换为您的数据库 ARN
    sqlStatements: sql,
    database: "users_database", // 替换为您的数据库名称
    parameters: [
      {
        name: "username",
        value: {
          stringValue: username,
        },
      },
      // 添加其他参数
    ],
  };

  try {
    await RDS.executeStatement(params).promise();
    console.log("User record created in RDS.");
  } catch (error) {
    console.error("Error creating user record:", error);
    throw error;
  }

  // 返回事件对象以继续 Cognito 流程
  return event;
};
