$(document).ready(function () {
  var apt = (function () {
    let date = null,
      time = null,
      urlBase = 'http://' + window.location.host + '/api',
      delivery = null;

    const buildUrl = function (uri) {
      return urlBase + uri;
    }

    const getQueryParams = function () {
      var vars = {}, hash;
      var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
      for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars[hash[0]] = hash[1];
      }
      return vars;
    }

    const getDelivery = async function () {
      const params = getQueryParams();
      const url = buildUrl('/apt/delivery?cmdId=' + params.cmdId);
      delivery = await $.get(url).done(function (data) {
        return data;
      });
    }
    getDelivery();

    $('#timeslots input').on('change', function () {
      const dataId = $(this).data('id');
      date = $(".date[data-id='" + dataId + "']")[0].innerText;
      time = $('input[name=timeslots]:checked').val();
    });

    $('#continue').on('click', async function () {
      $('#pickerSection').remove();

      const content = "<h2>Confirmation</h2>"
        + "<p>Your slot is: <b>" + date + " " + time + "</b></p>"
        + "<p>Delivery address is: " + delivery.street + "</p>"
        + "<button id='valider'>Valider</button>";
      $('#confirmation').html(content)

    })

    $(document).on('click', '#valider', function () {
      const url = buildUrl('/apt/create');
      const data = {
        agenceLibelle: delivery.agenceLibelle,
        deliveryId: delivery.cmdId,
        customerName: delivery.name,
        timeslot: time,
        date: date,
        status: "requested"
      }
      $.ajax({
        type: "post",
        url: url,
        data: JSON.stringify(data),
        contentType: 'application/json'
      })
        .done(function (res) {
          console.log("apt -> res", res);
          $('#confirmation').remove();
          const content = "<h2>Your apt request was acknowledged.</h2>"
            + "<p>You will receive a confirmation:</p>"
            + "<p>Any questions, feel free to contact us 0140414243</p>";

          $('#lastStep').html(content);
        })
        .fail(function (err) {
          alert(err.responseText)
        })
    });
  })();


});

