module.exports = {
  meta: {
      messages: {
        avoidName: "Avoid using variables named '{{ name }}'"
      },
      fixable: true,
  },
  create(context) {
      return {
          Identifier(node) {
              if (node.name === "openId") {
                  context.report({
                      node,
                      messageId: "avoidName",
                      data: {
                        name: node.name,
                      },
                      fix: function(fixer) {
                        return fixer.replaceText(node, node.name.toLowerCase());
                      }
                  });
              }
          }
      };
  }
};