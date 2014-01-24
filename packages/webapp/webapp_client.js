WebApp = {

  _isCssLoaded: function () {
    return _.find(document.styleSheets, function (sheet) {
      if (sheet.cssText && !sheet.cssRules) // IE8
        return !sheet.cssText.match(/meteor-css-not-found-error/);
      return !_.find(sheet.cssRules, function (rule) {
        return rule.selectorText === '.meteor-css-not-found-error';
      });
    });
  }
};
