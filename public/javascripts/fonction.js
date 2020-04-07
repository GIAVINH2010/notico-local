function getTransportersForAgency(libelle) {


    $.ajax({
        url: "/getTransporters",
        type: "POST",
        data: JSON.stringify({ libelle: libelle }),
        contentType: "application/json",
        dataType: "json",
        success: function (data) {

            $('#transporteur option').remove()


            if (data.transporter.length > 1) {
                $('#transporteur').append($('<option> ' + data.combo.tous + ' </option>'))
            }
            $.each(data, function (i, item) {

                $.each(item, function (i, transporteur) {

                    if (item.length !== 0) {
                        if (transporteur.nom)
                            $('#transporteur').append($('<option value="' + transporteur._id + '"> ' + transporteur.nom + '</option>'))
                    }
                })
            })
            $('#transporteur').hide().show()
            $('#transporteur').change()
        }
    })
}

function getOneTransporterForAgency(libelle, transpo) {


    $.ajax({
        url: "/getTransporters",
        type: "POST",
        data: JSON.stringify({ libelle: libelle }),
        contentType: "application/json",
        dataType: "json",
        success: function (data) {

            $('#transporteur option').remove()


            if (data.transporter.length > 1) {
                $('#transporteur').append($('<option> ' + data.combo.tous + ' </option>'))
            }
            $.each(data, function (i, item) {

                $.each(item, function (i, transporteur) {

                    if (item.length !== 0) {
                        if (transporteur.nom)
                            $('#transporteur').append($('<option value="' + transporteur._id + '"> ' + transporteur.nom + '</option>'))
                    }
                })
            })
            $('#transporteur').hide().show()
            $('#transporteur').val(transpo)
        }
    })
}

function getTransportersForAgencyHisto(libelle, callback) {


    $.ajax({
        url: "/getTransporters",
        type: "POST",
        data: JSON.stringify({ libelle: libelle }),
        contentType: "application/json",
        dataType: "json",
        success: function (data) {

            $('#transporteur option').remove()
            // c onsole.log( "options removed" )

            if (data.transporter.length > 1) {
                $('#transporteur').append($('<option> ' + data.combo.tous + ' </option>'))
            }
            $.each(data, function (i, item) {

                $.each(item, function (i, transporteur) {

                    if (item.length !== 0) {
                        if (transporteur.nom)
                            $('#transporteur').append($('<option value="' + transporteur._id + '"> ' + transporteur.nom + '</option>'))
                    }
                })
            })
            callback()
        }
    })
}

function getTransportersForAgencyHisto_ponct(libelle, callback) {


    $.ajax({
        url: "/getTransporters",
        type: "POST",
        data: JSON.stringify({ libelle: libelle }),
        contentType: "application/json",
        dataType: "json",
        success: function (data) {

            $('#transporteur option').remove()
            // c onsole.log( "options removed" )
            $.each(data, function (i, item) {

                $.each(item, function (i, transporteur) {

                    if (item.length !== 0) {
                        if (transporteur.nom)
                            $('#transporteur').append($('<option value="' + transporteur._id + '"> ' + transporteur.nom + '</option>'))
                    }
                })
            })

            callback()
        }
    })
}

function getTransportersForAgency_ponct(libelle, callback) {


    $.ajax({
        url: "/getTransporters",
        type: "POST",
        data: JSON.stringify({ libelle: libelle }),
        contentType: "application/json",
        dataType: "json",
        success: function (data) {

            $('#transporteur option').remove()
            // c onsole.log( "options removed" )
            $.each(data, function (i, item) {

                $.each(item, function (i, transporteur) {

                    if (item.length !== 0) {
                        if (transporteur.nom)
                            $('#transporteur').append($('<option value="' + transporteur._id + '"> ' + transporteur.nom + '</option>'))
                    }
                })
            })
            $('#transporteur').change()
        }
    })
}





function getTransportersForAgencyCompte(libelle) {

    $.ajax({
        url: "/getTransporters",
        type: "POST",
        data: JSON.stringify({ libelle: libelle }),
        contentType: "application/json",
        dataType: "json",
        success: function (data) {

            $('#transporteur option').remove()
            if (data.transporter.length > 1) {
                $('#transporteur').append($('<option> ' + data.combo.toutes + ' </option>'))
            }

            $.each(data, function (i, item) {
                if (item.length !== 0) {
                    $.each(item, function (i, transporteur) {
                        if (transporteur.nom && transporteur._id)
                            $('#transporteur').append(('<option value="' + transporteur._id + '"> ' + transporteur.nom + ' </option>'))

                    })
                }

            })

            $('#transporteur').hide().show()
            $('#transporteur').change()
        }
    })

}
function getLivreurForTransPlanning(trans, ag, callback) {
    $.ajax({
        url: "/get_deliverymen_compte",
        type: "POST",
        data: JSON.stringify({ libelle: trans, type: '', ag: ag }),
        contentType: "application/json",
        dataType: "json",
        success: function (data) {
            $('#livreur option').remove()
            // c onsole.log( "options removed" )

            if (data.livreur.length > 1) {
                $('#livreur').append($('<option> ' + data.combo.tous_liv + ' </option>'))
            }
            $.each(data, function (i, item) {


                $.each(item, function (i, liv) {

                    if (liv.nom)
                        $('#livreur').append($('<option value="' + liv._id + '"> ' + liv.nom + '</option>'))
                })
            })


            callback(data)
        }
    })
}

function getLivreurForTrans(trans, ag, type) {


    $.ajax({
        url: "/get_deliverymen_compte",
        type: "POST",
        data: JSON.stringify({ libelle: trans, type: type, ag: ag }),
        contentType: "application/json",
        dataType: "json",
        success: function (data) {


            $('#livreur option').remove()
            // c onsole.log( "options removed" )

            if (data.livreur.length > 1) {
                $('#livreur').append($('<option> ' + data.combo.tous_liv + ' </option>'))
            }
            $.each(data, function (i, item) {


                $.each(item, function (i, liv) {

                    if (liv.nom)
                        $('#livreur').append($('<option value="' + liv._id + '"> ' + liv.nom + '</option>'))
                })
            })
            $('#livreur').hide().show()
            $('#livreur').change()

        }
    })
}
function getLivreurForTransDeli(trans, ag, cb) {


    $.ajax({
        url: "/get_deliverymen_compte",
        type: "POST",
        data: JSON.stringify({ libelle: trans, type: '', ag: ag }),
        contentType: "application/json",
        dataType: "json",
        success: function (data) {


            $('#livreur option').remove()
            // c onsole.log( "options removed" )

            if (data.livreur.length > 1) {
                $('#livreur').append($('<option> ' + data.combo.tous_liv + ' </option>'))
            }
            $.each(data, function (i, item) {


                $.each(item, function (i, liv) {

                    if (liv.nom)
                        $('#livreur').append($('<option value="' + liv._id + '" data-mobile="' + liv.mobile + '" data-libelle="' + liv.libelle + '">' + liv.nom + '</option>'))
                })
            })
            $('#livreur').hide().show()
            $('#livreur').change()

            if( cb ) cb()
        }
    })
}

function getLivreurForTransDeli2(trans, ag,livreur, cb) {


    $.ajax({
        url: "/get_deliverymen_compte",
        type: "POST",
        data: JSON.stringify({ libelle: trans, type: '', ag: ag }),
        contentType: "application/json",
        dataType: "json",
        success: function (data) {

            console.log("ON AFFICHE LE LIVREUR: " + livreur)
            $('#livreur option').remove()
            // c onsole.log( "options removed" )

            if (data.livreur.length > 1) {
                $('#livreur').append($('<option> ' + data.combo.tous_liv + ' </option>'))
            }
            $.each(data, function (i, item) {


                $.each(item, function (i, liv) {

                    if (liv.nom){
                        $('#livreur').append($('<option value="' + liv._id + '" data-mobile="' + liv.mobile + '" data-libelle="' + liv.libelle + '">' + liv.nom + '</option>'))
                        if (livreur === liv.nom) $('#livreur').val(liv._id);
                    }
                })
            })
            $('#livreur').hide().show()
            // $('#livreur').change()

            if( cb ) cb()
        }
    })
}

function setLivreurForTransDeli(trans, ag, liv, cb) {
    console.log("ON AFFICHE LE TRANSPO DANS LE SET LIVREUR FOR TRANSDELI: "+ $('#transporteur').val())

    $.ajax({
        url: "/get_deliverymen_compte",
        type: "POST",
        data: JSON.stringify({ libelle: trans, type: '', ag: ag }),
        contentType: "application/json",
        dataType: "json",
        success: function (data) {

            console.log("VOICI LE DATE DU GET DELIVERYMENCOMPTE DU TRANSPO: " + JSON.stringify(data))
            $('#livreur option').remove()
            // c onsole.log( "options removed" )

            if (data.livreur.length > 1) {
                $('#livreur').append($('<option> ' + data.combo.tous_liv + ' </option>'))
            }
            $.each(data, function (i, item) {
                $.each(item, function (i, liv) {
                    if (liv.nom)
                        $('#livreur').append($('<option value="' + liv._id + '" data-mobile="' + liv.mobile + '" data-libelle="' + liv.libelle + '">' + liv.nom + '</option>'))
                })
            })

            $('#livreur').hide().show()
            console.log("ICI ON SET LE LIVREUR DANS LA LISTE CHARGEE")
            // $('#livreur').change()
            if (liv) $('#livreur').val(liv)
            console.log($('#livreur').val())

            if( cb ) cb()
        }
    })
}

function getLivreurForTransReport(trans, ag) {


    $.ajax({
        url: "/get_deliverymen_compte",
        type: "POST",
        data: JSON.stringify({ libelle: trans, type: '', ag: ag }),
        contentType: "application/json",
        dataType: "json",
        success: function (data) {


            $('#livreur option').remove()
            // c onsole.log( "options removed" )

            if (data.livreur.length > 1) {
                $('#livreur').append($('<option> ' + data.combo.tous_liv + ' </option>'))

                $.each(data, function (i, item) {
                    $.each(item, function (i, liv) {

                        if (liv.nom)
                            $('#livreur').append($('<option value="' + liv._id + '" data-mobile="' + liv.mobile + '" data-libelle="' + liv.libelle + '">' + liv.nom + '</option>'))
                    })
                })
            } else {
                $('#livreur').append($('<option value="' + liv._id + '" data-mobile="' + liv.mobile + '" data-libelle="' + liv.libelle + '" selected>' + liv.nom + '</option>'))

            }
            $('#livreur').hide().show()
            $('#livreur').change()
        }
    })





}

function getLivreurForTransGeolocHistory(trans, ag) {


    $.ajax({
        url: "/get_deliverymen_compte",
        type: "POST",
        data: JSON.stringify({ libelle: trans, type: '', ag: ag }),
        contentType: "application/json",
        dataType: "json",
        success: function (data) {


            $('#livreur option').remove()

            $.each(data, function (i, item) {


                $.each(item, function (i, liv) {

                    if (liv.nom)
                        $('#livreur').append($('<option value="' + liv._id + '" data-mobile="' + liv.mobile + '" data-libelle="' + liv.libelle + '">' + liv.nom + '</option>'))
                })
            })
            $('#livreur').hide().show()
            $('#livreur').change()

        }
    })
}

function getLivreurForTransHisto(trans, ag, callback) {


    $.ajax({
        url: "/get_deliverymen_compte",
        type: "POST",
        data: JSON.stringify({ libelle: trans, type: '', ag: ag }),
        contentType: "application/json",
        dataType: "json",
        success: function (data) {


            $('#livreur option').remove()
            // c onsole.log( "options removed" )

            if (data.livreur.length > 1) {
                $('#livreur').append($('<option>' + data.combo.tous_liv + '</option>'))
            }
            $.each(data, function (i, item) {


                $.each(item, function (i, liv) {

                    if (liv.nom)
                        $('#livreur').append($('<option value="' + liv._id + '">' + liv.nom + '</option>'))
                })
            })

            callback()

        }
    })
}

function getLivreurForTransHisto_ponct(trans, ag, callback) {


    $.ajax({
        url: "/get_deliverymen_compte",
        type: "POST",
        data: JSON.stringify({ libelle: trans, type: '', ag: ag }),
        contentType: "application/json",
        dataType: "json",
        success: function (data) {


            $('#livreur option').remove()
            // c onsole.log( "options removed" )

            $.each(data, function (i, item) {


                $.each(item, function (i, liv) {

                    if (liv.nom)
                        $('#livreur').append($('<option value="' + liv._id + '">' + liv.nom + '</option>'))
                })
            })
            callback()

        }
    })
}

function getLivreurForTrans_ponct(trans, ag) {


    $.ajax({
        url: "/get_deliverymen_compte",
        type: "POST",
        data: JSON.stringify({ libelle: trans, type: '', ag: ag }),
        contentType: "application/json",
        dataType: "json",
        success: function (data) {


            $('#livreur option').remove()
            // c onsole.log( "options removed" )

            $.each(data, function (i, item) {


                $.each(item, function (i, liv) {

                    if (liv.nom)
                        $('#livreur').append($('<option value="' + liv._id + '">' + liv.nom + '</option>'))
                })
            })
            $('#livreur').change()
        }
    })
}

// On récupère les livreurs liés au transporteur séléctionnné pour l'afficher dans LivreurID
function getLivreurForTransPopup(trans, ag) {

    $.ajax({
        url: "/get_deliverymen_compte",
        type: "POST",
        data: JSON.stringify({ libelle: trans, ag: ag }),
        contentType: "application/json",
        dataType: "json",
        success: function (data) {


            $('#LivreurID option').remove()

            $.each(data, function (i, item) {


                $.each(item, function (i, liv) {

                    if (liv.nom)
                        $('#LivreurID').append($('<option value="' + liv._id + '"> ' + liv.nom + '</option>'))
                })
            })
            $('#LivreurID').hide().show()
            $('#LivreurID').change()

        }
    })
}

function getTransportersForAgencyLivreurs(libelle, cb) {
    $.ajax({
        url: "/getTransporters",
        type: "POST",
        data: JSON.stringify({ libelle: libelle }),
        contentType: "application/json",
        dataType: "json",
        success: function (data) {
            $('#transporteur option').remove()
            $.each(data, function (i, item) {
                if (item.length !== 0) {
                    $.each(item, function (i, transporteur) {
                        if (transporteur.nom && transporteur._id)
                            $('#transporteur').append(('<option value="' + transporteur._id + '">' + transporteur.nom + '</option>'))
                    })
                }
            })

            $('#transporteur').hide().show()
            $('#transporteur').change()
            if( cb ) cb()
        }
    })
}

function setTransportersForAgencyLivreurs(libelle,transpo,livreur, cb) {
    $.ajax({
        url: "/getTransporters",
        type: "POST",
        data: JSON.stringify({ libelle: libelle }),
        contentType: "application/json",
        dataType: "json",
        success: function (data) {
            $('#transporteur option').remove()
            $.each(data, function (i, item) {
                if (item.length !== 0) {
                    $.each(item, function (i, transporteur) {
                        if (transporteur.nom && transporteur._id && typeof transporteur.nom !== "undefined" ){
                        console.log("ON TROUVE UN ITEM UN TRANSPORTEUR")
                        if (transporteur._id === transpo){
                            console.log("JAPPEND UN SELECTED: "+ transpo)
                            $('#transporteur').append(('<option value="' + transporteur._id + '" selected >' + transporteur.nom + '</option>'))
                        } else{
                            $('#transporteur').append(('<option value="' + transporteur._id + '">' + transporteur.nom + '</option>'))
                            console.log(transporteur._id + " et " + transpo)
                            // if (transporteur._id === transpo){
                            //     console.log("ICI ON VA SET LA COMBO") 
                            //     $('#transporteur').val(transpo)
                            //     $('#transporteur').change()
                            //     console.log($('#transporteur').val())
                            // }
                        }
                        }
                    })
                    // $('#transporteur').val(transpo)
                    // console.log($('#transporteur').val())
                    
                }
            })

            $('#transporteur').hide().show()
            // $('#transporteur').val(transpo)

            // getLivreurForTransDeli2( transpo, libelle,livreur, function () {
            //     console.log("ON EST SET")
            //     // refreshCustomersInit()
            //     // $("#livreur").change();
            // })
            if( cb ) cb()
        }
    })
}

function getTransportersForAgencyLivreursPopup(libelle,id) {


    $.ajax({
        url: "/getTransporters",
        type: "POST",
        data: JSON.stringify({ libelle: libelle, id:id }),
        contentType: "application/json",
        dataType: "json",
        success: function (data) {
            console.log('On affiche les data')
            console.log(data)
            $('#transporteur_popup option').remove()


            $.each(data, function (i, item) {
                if (item.length !== 0) {


                    $.each(item, function (i, transporteur) {
                        if (transporteur.nom && transporteur._id)
                            $('#transporteur_popup').append(('<option value="' + transporteur._id + '">' + transporteur._id + " - "  + transporteur.nom  + '</option>'))

                    })
                }

            })

            $('#transporteur_popup').hide().show()
            $('#transporteur_popup').change()
            $('#transporteur_popup option[value="' + id + '"]').attr('selected', 'selected');
            $('#LivreurID').change()
        }
    })
}

function getTransportersIdForAgencyLivreurs(libelle) {


    $.ajax({
        url: "/getTransporters",
        type: "POST",
        data: JSON.stringify({ libelle: libelle }),
        contentType: "application/json",
        dataType: "json",
        success: function (data) {

            $('#transporteur option').remove()


            $.each(data, function (i, item) {
                if (item.length !== 0) {


                    $.each(item, function (i, transporteur) {
                        if (transporteur.nom && transporteur._id)
                            $('#transporteur').append(('<option value="' + transporteur._id + '">' + transporteur._id + '</option>'))

                    })
                }

            })

            $('#transporteur').hide().show()
            $('#transporteur').change()
        }
    })
}

function getTransportersIdPopupForAgencyLivreurs(libelle) {


    $.ajax({
        url: "/getTransporters",
        type: "POST",
        data: JSON.stringify({ libelle: libelle }),
        contentType: "application/json",
        dataType: "json",
        success: function (data) {

            $('#transporteur_popup option').remove()


            $.each(data, function (i, item) {
                if (item.length !== 0) {


                    $.each(item, function (i, transporteur) {
                        if (transporteur.nom && transporteur._id)
                            $('#transporteur_popup').append(('<option value="' +transporteur.nom+ '"</option>'))

                    })
                }

            })

            $('#transporteur_popup').hide().show()
            $('#transporteur_popup').change()
            // if (tmp =! null){
            // $('select[name=transporteur_popup]').val(tmp)
            // }
        }
    })
}

function getLivreursForTransporters(libelle) {


    $.ajax({
        url: "/getLivreurs",
        type: "POST",
        data: JSON.stringify({ libelle: libelle }),
        contentType: "application/json",
        dataType: "json",
        success: function (data) {

            $('#livreur option').remove()
        console.log('getLivreursForTransporters:');
        console.log(data);
            $.each(data, function (i, item) {
                if (item.length !== 0) {


                    $.each(item, function (i, livreur) {
                        if (livreur.nom && livreur._id)
                            $('#livreur').append(('<option value="' + livreur._id + '">' + livreur.nom + '</option>'))

                    })
                }

            })

            $('#livreur').hide().show()
            $('#livreur').change()
        }
    })
}

function getLivreursForTransportersForPopup(libelle) {


    $.ajax({
        url: "/getLivreurs",
        type: "POST",
        data: JSON.stringify({ libelle: libelle }),
        contentType: "application/json",
        dataType: "json",
        success: function (data) {

            $('#LivreurId option').remove()
        console.log('getLivreursForTransporters:');
        console.log(data);
            $.each(data, function (i, item) {
                if (item.length !== 0) {


                    $.each(item, function (i, livreur) {
                        if (livreur.nom && livreur._id)
                            $('#LivreurId').append(('<option value="' + livreur._id + '">' + livreur.nom + '</option>'))

                    })
                }

            })

            $('#LivreurId').hide().show()
            $('#LivreurId').change()
        }
    })
}

function controle_saisie(liv_on, callback) {
    $.ajax({
        url: "/get_alert_form_deli",
        type: "POST",
        success: function (data) {
            var valide = true
            var alerte = data.alert


            var id_cmd = $("input[name=ID_cmd]").val();

            if (!id_cmd) {
                alert(alerte.cmdid);
                $("input[name=ID_cmd]").focus();
                valide = false
            }

            var id_tournee = $("input[name=tournID]").val();
            if (!id_tournee) {

                alert(alerte.tourid);
                $("input[name=tournID]").focus();
                valide = false
            }

            var id_transporteur = $("select[name=transporteurID]").val();
            if (!id_transporteur) {

                alert(alerte.trans);
                $("select[name=transporteurID]").focus();
                valide = false
            }
            var x = $("#sel_cmd option").size()
            for (var i = 0; i < x; i++) {
                var value = "#cmd" + i + " input[name=commande1]"
                var detail_cmd1 = $(value).val();
                var value = "#cmd" + i + " input[name=commande2]"
                var detail_cmd2 = $(value).val();
                var value = "#cmd" + i + " input[name=commande3]"
                var detail_cmd3 = $(value).val();
                var value = "#cmd" + i + " input[name=commande4]"
                var detail_cmd4 = $(value).val();
                if (!detail_cmd1 && !detail_cmd2 && !detail_cmd3 && !detail_cmd4) {
                    $("input[name=commande1]").focus();
                    var num_cmd = parseInt(i) + 1
                    alert(alerte.details + num_cmd);
                    valide = false
                }
            }

            if (liv_on === 'false') {

                var id_liv = $("select[name=LivreurID]").val();
                if (!id_liv) {
                    alert(alerte.liv);
                    $("select[name=LivreurID]").focus();
                    valide = false
                }
            }

            var total = $("input[name=total]").val();
            if (total && isNaN(parseInt(total)) === true) {
                alert(alerte.total);
                $("input[name=total]").focus();
            }


            var date_i_deb = $("input[name=date_i_deb]").val();
            var heure_i_deb = $("input[name=heure_i_deb]").val();
            if (!date_i_deb) {
                alert(alerte.datedeb);
                valide = false
            }
            ;
            if (!heure_i_deb) {

                alert(alerte.hourdeb);
                valide = false
            }
            var date_i_fin = $("input[name=date_i_fin]").val();
            var heure_i_fin = $("input[name=heure_i_fin]").val();
            if (!date_i_fin) {
                alert(alerte.datefin);
                valide = false
            }
            ;
            if (!heure_i_fin) {

                alert(alerte.hourfin);
                valide = false
            }

            var nom_cli = $("input[name=namecli]").val();
            if (!nom_cli) {
                alert(alerte.custname);
                $("input[name=namecli]").focus();
                valide = false
            }

            var email = $("input[name=email]").val();
            if (email && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                alert(alerte.custname);
                $("input[name=email]").focus();
                valide = false
            }

            var langue = $("select[name=langue]").val();
            if (!langue) {
                alert(alerte.custlangue);
                $("input[name=langue]").focus();
                valide = false
            }

            var adresse = $("input[name=street]").val();
            if (!adresse) {
                alert(alerte.custstreet);
                $("input[name=street]").focus();
                valide = false
            }

            var CP = $("input[name=CP]").val();
            if (!CP) {
                alert(alerte.postcode);
                $("input[name=CP]").focus();
                valide = false
            }

            var pays = $("select[name=pays]").val();
            if (!pays) {
                alert(alerte.country);
                $("input[name=pays]").focus();
                valide = false
            }


            var tel = $("input[name=tel]").val();
            if (tel && !/^\+?([0-9]{2})\)?[-. ]?([0-9]{9,10})$/.test(tel)) {
                alert(alerte.phoneform);
                $("input[name=tel]").focus();
                valide = false
            }


            var tel_supp = $("input[name=tel_supp]").val();
            if (tel_supp) {

                if (!/^\+?([0-9]{2})\)?[-. ]?([0-9]{9,10})$/.test(tel_supp)) {

                    alert(alerte.phoneform);
                    $("input[name=tel_supp]").focus();
                    valide = false
                }
            }
            callback(valide)
        }
    })
}

function controle_saisie_no_aff(callback) {
    $.ajax({
        url: "/get_alert_form_deli",
        type: "POST",
        success: function (data) {
            var valide = true
            var alerte = data.alert

            var id_cmd = $("input[name=ID_cmd]").val();

            if (!id_cmd) {
                alert(alerte.cmdid);
                $("input[name=ID_cmd]").focus();
                valide = false
            }

            var id_transporteur = $("select[name=transporteurID]").val();
            if (!id_transporteur) {

                alert(alerte.trans);
                $("select[name=transporteurID]").focus();
                valide = false
            }

            var x = $("#sel_cmd option").size()
            for (var i = 0; i < x; i++) {
                var value = "#cmd" + i + " input[name=commande1]"
                var detail_cmd1 = $(value).val();
                var value = "#cmd" + i + " input[name=commande2]"
                var detail_cmd2 = $(value).val();
                var value = "#cmd" + i + " input[name=commande3]"
                var detail_cmd3 = $(value).val();
                var value = "#cmd" + i + " input[name=commande4]"
                var detail_cmd4 = $(value).val();
                if (!detail_cmd1 && !detail_cmd2 && !detail_cmd3 && !detail_cmd4) {
                    $("input[name=commande1]").focus();
                    var num_cmd = parseInt(i) + 1
                    alert(alerte.details + num_cmd);
                    valide = false
                }
            }


            var total = $("input[name=total]").val();
            if (total && isNaN(parseInt(total)) === true) {
                alert(alerte.total);
                $("input[name=total]").focus();
            }


            var nom_cli = $("input[name=namecli]").val();
            if (!nom_cli) {
                alert(alerte.custname);
                $("input[name=namecli]").focus();
                valide = false
            }

            var email = $("input[name=email]").val();
            if (email && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                alert(alerte.custname);
                $("input[name=email]").focus();
                valide = false
            }

            var langue = $("select[name=langue]").val();
            if (!langue) {
                alert(alerte.custlangue);
                $("input[name=langue]").focus();
                valide = false
            }

            var adresse = $("input[name=street]").val();
            if (!adresse) {
                alert(alerte.custstreet);
                $("input[name=street]").focus();
                valide = false
            }

            var CP = $("input[name=CP]").val();
            if (!CP) {
                alert(alerte.postcode);
                $("input[name=CP]").focus();
                valide = false
            }

            var pays = $("select[name=pays]").val();
            if (!pays) {
                alert(alerte.country);
                $("input[name=pays]").focus();
                valide = false
            }


            var tel = $("input[name=tel]").val();
            if (tel && !/^\+?([0-9]{2})\)?[-. ]?([0-9]{9,10})$/.test(tel)) {
                alert(alerte.phoneform);
                $("input[name=tel]").focus();
                valide = false
            }


            var tel_supp = $("input[name=tel_supp]").val();
            if (tel_supp) {

                if (!/^\+?([0-9]{2})\)?[-. ]?([0-9]{9,10})$/.test(tel_supp)) {

                    alert(alerte.phoneform);
                    $("input[name=tel_supp]").focus();
                    valide = false
                }
            }
            callback(valide)
        }
    })
}


function update_tourstatut(tourID, tourStatusCode) {

    var tourId = { type: "close", tourID: tourID, statut: tourStatusCode };
    $.ajax({
        url: "/load_form",
        type: "POST",
        data: tourId

    });
}

function controle_saisie_skill(callback) {
    $.ajax({
        url: "/get_alert_form",
        type: "POST",
        success: function (data) {
            var valide = true
            var alerte = data.alert

            var nom = $("input[name=nom]").val();
            if (!nom) {
                alert(alerte.lib);
                $("input[name=nom]").focus();
                valide = false
            }
            callback(valide)
        }
    })
}

function controle_saisie_type(callback) {
    $.ajax({
        url: "/get_alert_form",
        type: "POST",
        success: function (data) {
            var valide = true
            var alerte = data.alert

            var nom = $("input[name=name]").val();
            if (!nom) {
                alert(alerte.lib);
                $("input[name=name]").focus();
                valide = false
            }
            callback(valide)
        }
    })
}




function controle_saisie_do(callback) {
    $.ajax({
        url: "/get_alert_form",
        type: "POST",
        success: function (data) {
            var valide = true
            var alerte = data.alert

            var nom = $("input[name=nomdo]").val();
            if (!nom) {
                alert(alerte.lib);
                $("input[name=nomdo]").focus();
                valide = false
            }
            var login = $("input[name=logindo]").val();

            var mdp = $("input[name=mdpdo]").val();
            if (login) {
                for (var i = 0; i < login.length; ++i) {
                    if (login.charAt(i) === ' ') {
                        alert(alerte.space);
                        valide = false;
                    }
                }
            }
            if (login && !mdp) {
                alert(alerte.mdp);
                $("input[name=mdp]").focus();
                valide = false;
            }

            if (!login && mdp) {
                alert(alerte.login);
                $("input[name=login]").focus();
                valide = false
            }
            callback(valide)
        }
    })
}

function controle_saisie_agence(callback) {
    $.ajax({
        url: "/get_alert_form",
        type: "POST",
        success: function (data) {
            var valide = true
            var alerte = data.alert

            var mdp = $("input[name=mdp]").val();
            var login = $("input[name=login]").val();
            if (login) {
                for (var i = 0; i < login.length; ++i) {
                    if (login.charAt(i) === ' ') {
                        alert(alerte.space);
                        valide = false;
                    }
                }
            }
            if (login && !mdp) {
                alert(alerte.mdp);
                $("input[name=mdp]").focus();
                valide = false
            }
            if (!login && mdp) {
                alert(alerte.login);
                $("input[name=login]").focus();
                valide = false
            }

            var adr = $("input[name=adr]").val();
            if (!adr) {
                alert(alerte.adress);
                $("input[name=adr]").focus();
                valide = false
            }
            var lib = $("input[name=lib]").val();
            if (!lib) {
                alert(alerte.lib);
                $("input[name=lib]").focus();
                valide = false
            }
            callback(valide)
        }
    })
}

function controle_saisie_trans(callback) {
    $.ajax({
        url: "/get_alert_form",
        type: "POST",
        success: function (data) {
            var valide = true
            var alerte = data.alert


            var id = $("input[name=id]").val();
            if (!id) {
                alert(alerte.id);
                $("input[name=id]").focus();
                valide = false;
            }
            var name = $("input[name=nom]").val();
            if (!name) {
                alert(alerte.lib);
                $("input[name=id]").focus();
                valide = false;
            }
            var login = $("input[name=login]").val();
            var mdp = $("input[name=mdp]").val();
            if (login) {
                for (var i = 0; i < login.length; ++i) {
                    if (login.charAt(i) === ' ') {
                        alert(alerte.space);
                        valide = false;
                    }
                }
            }
            if (login && !mdp) {

                alert(alerte.mdp);
                $("input[name=mdp]").focus();
                valide = false;
            }
            if (!login && mdp) {
                alert(alerte.login);
                $("input[name=login]").focus();
                valide = false
            }
            callback(valide);
        }
    })
}

function controle_saisie_livreur(callback) {
    $.ajax({
        url: "/get_alert_form",
        type: "POST",
        success: function (data) {
            var valide = true
            var alerte = data.alert
            var id = $("input[name=id]").val();
            if (!id) {
                alert(alerte.id);
                $("input[name=id]").focus();
                valide = false;
            }
            var lib = $("input[name=lib]").val();
            if (!lib) {
                alert(alerte.lib2);
                $("input[name=lib]").focus();
                valide = false;
            }
            var nom = $("input[name=nom]").val();
            if (!nom) {
                alert(alerte.lib);
                $("input[name=nom]").focus();
                valide = false;
            }
            var mobile = $("input[name=mobile]").val();
            if (!mobile) {
                alert(alerte.mobile);
                $("input[name=mobile]").focus();
                valide = false;
            }
            else if (isNaN(mobile) === true) {
                alert(alerte.mobile2);
                $("input[name=mobile]").focus();
                valide = false;
            }

            var mdp = $("input[name=mdp]").val();
            if (!mdp) {
                alert(alerte.mdp);
                $("input[name=mdp]").focus();
                valide = false;
            }
            callback(valide);
        }
    })
}



function controle_saisie_livreur_update() {


    var lib = $("input[name=lib]").val();
    if (!lib) {
        alert("Saisir un libellé livreur");
        $("input[name=lib]").focus();
        return false;
    }
    var nom = $("input[name=nom]").val();
    if (!nom) {
        alert("Saisir un nom livreur");
        $("input[name=nom]").focus();
        return false;
    }
    var mobile = $("input[name=mobile]").val();
    if (!mobile) {
        alert("Saisir un mobile livreur");
        $("input[name=mobile]").focus();
        return false;
    }
    else if (isNaN(mobile) === true) {
        alert("Le numéro de mobile n'est pas correctement saisi");
        $("input[name=mobile]").focus();
        return false
    }

    var mdp = $("input[name=mdp]").val();
    if (!mdp) {
        alert("Saisir un mobile livreur");
        $("input[name=mdp]").focus();
        return false;
    }


}
function controle_saisie_enquete() {

    var note = $('input[type=radio]:checked').attr('value');

    var reason = $('select[name=appr_cli]').val();
    if (!note && !reason) {

        var li_note = $('.rating');
        li_note.css({ "border": "2px solid red" })
        $('select[name=appr_cli]').css({ "border": "2px solid red" })
        return false;
    }
    else if (!note) {

        var li_note = $('.rating');
        li_note.css({ "border": "2px solid red" })
        return false;
    }
    else if (!reason && parseInt(note) !== 5) {

        $('select[name=appr_cli]').css({ "border": "2px solid red" })
        return false;
    }
}

function controle_saisie_compte(callback) {
    $.ajax({
        url: "/get_alert_form",
        type: "POST",
        success: function (data) {
            var valide = true
            var alerte = data.alert
            var sel_ag = $('select[name=AgenceId]')
            var sel_tr = $('select[name=transporteurID]')
            var sel_livreur = $('select[name=LivreurID]')
            var agence = $('select[name=AgenceId]').val();
            var trans = $('select[name=transporteurID]').val();
            var livreur = $('select[name=LivreurID]').val();
            var cp = $('input[name=cp]').val();
            var country = $('select[name=pays]').val();
            var city = $('input[name=city]').val();
            var nom = $('input[name=nom]').val();
            var adresse = $('input[name=adresse]').val();
            if (!agence && sel_ag.length) {
                alert(alerte.cpte_agence);
                $('select[name=AgenceId]').focus();
                valide = false;
            }
            else if (!trans && sel_tr.length) {
                alert(alerte.cpte_trans);
                $('select[name=transporteurID]').focus();
                valide = false;
            }
            else if (!livreur && sel_livreur.length) {
                alert(alerte.cpte_liv);
                $('select[name=LivreurID]').focus();
                valide = false;
            } else if (!nom) {

                alert(alerte.lib);
                $('input[name=nom]').focus();
                valide = false;
            } else if (!adresse) {

                alert(alerte.adress);
                $('input[name=adresse]').focus();
                valide = false;
            } else if (!cp) {
                alert(alerte.cpte_cp);
                $('input[name=cp]').focus();
                valide = false;
            }
            else if (!city) {
                alert(alerte.cpte_city);
                $('input[name=city]').focus();
                valide = false;
            }
            else if (!country) {
                alert(alerte.country);
                $('select[name=pays]').focus();
                valide = false;
            }
            callback(valide)
        }
    })
}

function controle_saisie_vehi(callback) {
    $.ajax({
        url: "/get_alert_form",
        type: "POST",
        success: function (data) {
            var valide = true
            var alerte = data.alert
            var capacite = $('input[name=capacite]').val();
            var immat = $('input[name=immat]').val();
            var skill = $('#skill').val();
            var conso = $('input[name=conso]').val();
            var poids = $('input[name=poids]').val();
            var h_fin = $('input[name=h_fin]').val();
            var h_deb = $('input[name=h_deb]').val();
            var tps_repos = $('input[name=tps_repos]').val();

            if (!immat) {
                alert(alerte.immat);
                $('input[name=immat]').focus();
                valide = false;
            }  else if (!h_fin) {
                alert(alerte.h_fin);
                $('input[name=h_fin]').focus();
                valide = false;
            } else if (!h_deb) {
                alert(alerte.h_deb);
                $('input[name=h_deb]').focus();
                valide = false;
            } else if (!tps_repos) {
                alert(alerte.tps_repos);
                $('input[name=tps_repos]').focus();
                valide = false;
            } else if (!capacite) {
                alert(alerte.capacite);
                $('input[name=capacite]').focus();
                valide = false;
            } else if (isNaN(parseInt(capacite)) === true) {
                alert(alerte.capacite_nb);
                $('input[name=capacite]').focus();
                valide = false;
            } else if (!poids) {
                alert(alerte.poids);
                $('input[name=poids]').focus();
                valide = false;
            } else if (isNaN(parseInt(poids)) === true) {
                alert(alerte.poids_nb);
                $('input[name=poids]').focus();
                valide = false;
            } else if (!conso) {
                alert(alerte.conso);
                $('input[name=conso]').focus();
                valide = false;
            } else if (isNaN(parseInt(conso)) === true) {
                alert(alerte.conso_nb);
                $('input[name=conso]').focus();
                valide = false;
            } else if (!skill){
                alert(alerte.skill);
                $('input[name=skill]').focus();
                valide = false;
            }
            callback(valide)
        }
    })
}

function controle_saisie_column(callback) {
    $.ajax({
        url: "/get_alert_form",
        type: "POST",
        success: function (data) {
            var valide = true
            var alerte = data.alert.column
            var rank = $('input[name=rank]').val();
            var db = $('input[name=db]').val();
            var labelTxt = $('input[name=labelTxt]').val();

            if (!rank) {
                alert(alerte.rank);
                $('input[name=rank]').focus();
                valide = false;
            }  else if (!db) {
                alert(alerte.db);
                $('input[name=db]').focus();
                valide = false;
            } else if (!labelTxt) {
                alert(alerte.lblTxt);
                $('input[name=labelTxt]').focus();
                valide = false;
            }
            callback(valide)
        }
    })
}



function update_histo(value, item, type) {

    // console.log({ value: value, item: item, type: type })

    var histo = window.localStorage.getItem(type) ? JSON.parse(window.localStorage.getItem(type)) : {}
    // console.log(histo)

    histo[item] = value
    window.localStorage.setItem(type, JSON.stringify(histo));
    // console.log(window.localStorage.getItem(type))

}
function update_histo_report(value, item, type) {
    // console.log({ value: value, item: item, type: type })

    var histo = window.localStorage.getItem(type) ? JSON.parse(window.localStorage.getItem(type)) : {}
    // console.log(histo)

    histo[item] = value
    window.localStorage.setItem(type, JSON.stringify(histo));
    // console.log(window.localStorage.getItem(type))
 /*   $.ajax({
        url: "/update_histo_cash",
        type: "POST",
        data: JSON.stringify({ value: value, item: item, type: type }),
        contentType: "application/json",
        dataType: "json"
    })*/

}

function update_histo_planning(data) {
    window.localStorage.setItem('histoSlider', data);
    return true

}

// Decode les caractères en HTML
function decodeEntities(encodedString) {
    var translate_re = /&(nbsp|amp|quot|lt|gt);/g;
    var translate = {
        "nbsp":" ",
        "amp" : "&",
        "quot": "\"",
        "lt"  : "<",
        "gt"  : ">"
    };
    return encodedString.replace(translate_re, function(match, entity) {
        return translate[entity];
    }).replace(/&#(\d+);/gi, function(match, numStr) {
        var num = parseInt(numStr, 10);
        return String.fromCharCode(num);
    });
}

function add_deliveryToActiveTour2(tourId, cmdId) {
    console.log(tourId)
    db.deliveries.find({'tourId': tourId}, function (err,delivery) {
        console.log("JAFFICHE DELIVERY:" + delivery)
        db.queues.find({'tourId': tourId }, function(err,queue){
            console.log("jaffiche queue cmds:" + JSON.stringify(queue))
            console.log("jaffiche queue cmds:" + queue[0].cmds)
            console.log("jaffiche queue cmds length:" + queue[0].cmds.length)
            // db.queues.find({'cmdId': delivery.cmdId}, function(err, deliveryFromQueue){
                var trouve = false
                for ( var i = 0; i < queue[0].cmds.length;i++){
                    if (cmdId === queue[0].cmds[i].cmdId){
                        trouve = true
                        // callback()
                    } else if ( i=== (queue[0].cmds.length-1) && trouve === false){
                        console.log("ON FAIT UN APPEL POUR ACTUALISER LA QUEUE")
                        // callback()
                        // updateDelivery( {"cmdId": cmdId, "planif": true} )
                        var url = "https://"+ gen_url+"/"+port_client+"/updateDelivery"
                        // $.post( url, {"cmdId": cmdId, "planif": true}, function( data ) {
                        //     console.log( data )
                            
                        // })
                        $.ajax({
                            url: url,
                            type: "POST",
                            data : {"cmdId": cmdId, "planif": true},
                            success: function (data) {
                                console.log("ça passe")
                            }
                        })
                    }
                }
            // })
        })
    })
}
