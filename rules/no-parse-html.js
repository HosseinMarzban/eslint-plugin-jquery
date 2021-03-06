'use strict'

module.exports = function(context) {
  return {
    CallExpression: function(node) {
      if (node.callee.type !== 'MemberExpression') return
      if (node.callee.object.name !== '$') return
      if (node.callee.property.name !== 'parseHTML') return

      context.report({
        node: node,
        message: 'Prefer createHTMLDocument to $.parseHTML'
      })
    }
  }
}

module.exports.schema = []
