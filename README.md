# Snowflake menu service

[![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/anzbrown/dashboard-menu-service/Node.js%20CI/main?style=for-the-badge)](https://github.com/anzbrown/dashboard-menu-service/actions?query=workflow%3A%22Node.js+CI%22%22+branch%3Amain+)
[![Codecov branch](https://img.shields.io/codecov/c/github/anzbrown/dashboard-menu-service/main?style=for-the-badge)](https://codecov.io/gh/anzbrown/dashboard-menu-service)

<a href="https://www.buymeacoffee.com/adambrown" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>



## Todo:
- Add rate limiting to prevent brute force attacks using [`express-brute`](https://www.npmjs.com/package/express-brute)
    - Setup to use a redis store for the IP Addresses to ban for 24 hours
- Use [`connect-redis`](https://www.npmjs.com/package/connect-redis) to store sessions in Redis using GCP memorystore to track and generate time limited sessions  