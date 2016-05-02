(function() {
  var proxied = window.eval
  with({
    get eval() { 
      console.log('eval called'); 
      return proxied 
    }
  }) {
    /* Test */
  }
})()
