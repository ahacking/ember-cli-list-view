module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addBowerPackageToProject('ember-cli-list-view', '0.0.6-alpha.1');
  }
};
