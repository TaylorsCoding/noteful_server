module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || "development",
  DATABASE_URL:
    process.env.DATABASE_URL ||
    "postgres://xtirzohequzmwj:2d1838e55cfb7d572755d8c509458690ce8976293260b226979fd44f099016aa@ec2-54-236-146-234.compute-1.amazonaws.com:5432/dn41bj94458bc",
  TEST_DATABASE_URL:
    process.env.TEST_DATABASE_URL ||
    "postgresql://codingbeginner19n@localhost/notefuldb",
};
