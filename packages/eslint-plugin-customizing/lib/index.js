/**
 * @fileoverview customize rule for zaihui 
 * @author huangzilong
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports = {
  rules: requireIndex(__dirname + "/rules"),
  configs: {
    'recommended': {
      plugins: ['@zaihui/customizing'],
      rules: {
        '@zaihui/customizing/no-camel-openid': 1,
        '@zaihui/customizing/no-camel-unionid': 1,
        '@zaihui/customizing/no-camel-appid': 1
      }
    }
  },
}
