$(document).ready(function () {
  var urlBase = 'http://' + window.location.host + '/api/v1';

  var buildUrl = function (uri) {
    return urlBase + uri;
  }

  var getQueryParams = function () {
    var vars = {}, hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
      hash = hashes[i].split('=');
      vars[hash[0]] = hash[1];
    }
    return vars;
  }


  var getTimeslots = async function (id, callback) {
    var url = buildUrl('/timeslots?cmdId=' + id);
    console.log("getTimeslots -> url", url)
    return $.get(url).done(function (data) {
      return data
    })
  }

  var render = async function () {
    var params = getQueryParams();
    console.log("render -> params", params)
    const data = await getTimeslots(params.cmdId);
    console.log("render -> data", data)
  }
  render();
})