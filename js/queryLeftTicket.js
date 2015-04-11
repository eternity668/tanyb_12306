var myJpopup;
var jPlayer;
(function () {
    var c = '输入乘客姓名';
    var d = false;
    $(document) .ready(function () {
        myJpopup = $('#any') .jpopup({
            width: 350,
            height: 140,
            target: $('#getTicket'),
            speed: 20
        });
        var a;
        if (!window.attachEvent) {
            var b = audiojs;
            b.events.ready(function () {
                a = b.createAll()
            })
        }
        jPlayer = function (j) {
            $('#tryPlayer') .html('停止提示音乐');
            if (j == 'play') {
                if (window.attachEvent) {
                    $('#jplayerId') .html('<embed type="application/x-mplayer2" loop="true" src="' + ctx + '/resources/js/framework/audio/message.wav" id="player" autostart="true" uiMode="none" hidden="true"></embed>')
                } else {
                    try {
                        a[0].play()
                    } catch (e) {
                    }
                }
            } else {
                $('#tryPlayer') .html('试听提示音乐');
                if (window.attachEvent) {
                    var i = document.getElementById('player');
                    try {
                        i.pause()
                    } catch (e) {
                        document.getElementById('jplayerId') .innerHTML = ''
                    }
                } else {
                    try {
                        a[0].pause()
                    } catch (e) {
                    }
                }
            }
        };
        $.init_select_date();
        $('#tryPlayer') .click(function () {
            if ($(this) .html() == '试听提示音乐') {
                jPlayer('play');
                $(this) .html('停止提示音乐')
            } else {
                jPlayer('stop');
                $(this) .html('试听提示音乐')
            }
        });
        $('#reloadPassenger') .click(function () {
            $.reloadPassenger()
        });
        $('#searchPassenger') .on('keyup', function (e) {
            $.renderPassenger()
        }) .on('focus', function () {
            if ($(this) .val() == c) {
                $(this) .val('')
            }
        }) .on('blur', function () {
            if ($(this) .val() == '') {
                $(this) .val(c)
            }
        });
        $('#inp-train') .on('click', function (e) {
            var h = $('#inp-train') .val();
            d = true;
            if ($.trim(h) == '请输入') {
                $('#inp-train') .val('');
                $(this) .css('color', '#000')
            } else {
                $('#inp-train') .select()
            }
        }) .on('blur', function (e) {
            if ($.trim($('#inp-train') .val()) == '') {
                $(this) .css('color', '#999');
                $('#inp-train') .val('  请输入')
            }
        });
        $('#seat-list input') .click(function () {
            var i = this.name;
            var j = this.value;
            var k = $('#prior_seat span') .length;
            if (this.checked) {
                if (k < 6) {
                    if ($.canSelectThisSeatType(j)) {
                        var l = '<span class='sel-box w80' name='' + i + ''>' + i + '<a class='close' href='javascript:' onclick='$.removeSel(this,"' + j + '",2)'></a></span>';
                        $('#prior_seat') .append(l);
                        xbChecked.push(j)
                    } else {
                        this.checked = false;
                        dhtmlx.alert({
                            title: '添加席别',
                            ok: '确定',
                            text: '学生不可以购买' + i + '。',
                            type: 'alert-error'
                        })
                    }
                } else {
                    dhtmlx.alert({
                        title: '添加席别',
                        ok: '确定',
                        text: '最多添加5个优先席位',
                        type: 'alert-error'
                    });
                    this.checked = false
                }
            } else {
                $.each($('#prior_seat span'), function (g, e) {
                    if (i == $(e) .attr('name')) {
                        $(e) .remove();
                        for (var f = 0; f < xbChecked.length; f++) {
                            if (xbChecked[f] == j) {
                                xbChecked.splice(f, 1);
                                break
                            }
                        }
                        return
                    }
                })
            }
        });
        $('#date-list input') .click(function () {
            var l = $('#prior_date span') .length;
            var k = $(this) .val();
            if (this.checked) {
                if (l < 6) {
                    var i = '<span class='sel-box w80' name='' + k + ''>' + k + '<a class='close' href='javascript:' onclick='$.removeSel(this,"' + k + '",3)'></a></span>';
                    $('#prior_date') .append(i);
                    var n = true;
                    for (var m = 0; m < rqChecked.length; m++) {
                        if (rqChecked[m] == k) {
                            n = false;
                            break
                        }
                    }
                    if (n) {
                        rqChecked.push(k)
                    }
                } else {
                    dhtmlx.alert({
                        title: '添加备选日期',
                        ok: '确定',
                        text: '最多添加5个备选日期',
                        type: 'alert-error'
                    });
                    this.checked = false
                }
            } else {
                $.each($('#prior_date span'), function (g, e) {
                    if (k == $(e) .attr('name')) {
                        $(e) .remove();
                        for (var f = 0; f < rqChecked.length; f++) {
                            if (rqChecked[f] == k) {
                                rqChecked.splice(f, 1);
                                break
                            }
                        }
                        return
                    }
                });
                if (train_tour_flag == 'fc') {
                    if (k == $('#back_train_date') .val()) {
                        rqChecked.splice(0, 1);
                        $('#back_train_date') .val(rqChecked[0]);
                        $('#prior_date span[name=' + rqChecked[0] + ']') .remove()
                    }
                } else {
                    if (k == $('#train_date') .val()) {
                        rqChecked.splice(0, 1);
                        $('#train_date') .val(rqChecked[0]);
                        $('#prior_date span[name=' + rqChecked[0] + ']') .remove()
                    }
                }
                if (rqChecked.length == 1) {
                    $('#date-list input') .attr('disabled', false);
                    $('#date-list input[value=' + rqChecked[0] + ']') .attr('disabled', true)
                }
            }
            if (rqChecked.length > 1) {
                $('#date-list input') .attr('disabled', false)
            }
        });
        $('#train_date') .click(function () {
            $('#sel-date') .hide()
        });
        $('#back_train_date') .click(function () {
            $('#sel-date') .hide()
        });
        if (!isInMaintenanceHours) {
            $('#dc') .click(function () {
                $('#autoSubmit') .removeAttr('disabled');
                $('#autoSubmit') .siblings('label') .css('color', '#333');
                $('#autoSubmitTxt') .removeAttr('title');
                $('#partSubmit') .removeAttr('disabled');
                $('#partSubmit') .siblings('label') .css('color', '#333');
                $('#partSubmitTxt') .removeAttr('title')
            });
            $('#wf') .click(function () {
                $('#autoSubmit') .prop('checked', false);
                $('#autoSubmit') .attr('disabled', true);
                $('#autoSubmit') .siblings('label') .css('color', '#999');
                $('#autoSubmitTxt') .attr('title', '自动提交只能在单程下使用');
                $('#partSubmit') .prop('checked', false);
                $('#partSubmit') .attr('disabled', true);
                $('#partSubmit') .siblings('label') .css('color', '#999');
                $('#partSubmitTxt') .attr('title', '部分提交只能在单程下使用')
            })
        }
        $('#sf2') .click(function () {
            if (passengerChecked && passengerChecked.length > 0) {
                var s = passengerChecked.length;
                for (var i = s - 1; i >= 0; i--) {
                    var q = passengerChecked[i];
                    var t = q.passenger_type_name;
                    if (!t) {
                        t = ''
                    }
                    if (q.passenger_type != '3') {
                        var o = q.passenger_name + '(' + t + ')(' + q.passenger_id_no + ')';
                        var r = $('#buyer-list input');
                        var k = r.length;
                        for (var p = 0; p < k; p++) {
                            if (r[p].nextSibling.nodeValue == o) {
                                r[p].checked = false
                            }
                        }
                        $('#setion_postion span[name='' + o + '']') .remove();
                        passengerChecked.splice(i, 1)
                    }
                }
            }
        });
        $('#autoSubmit') .click(function () {
            if (this.checked) {
                $('#auto_query') .prop('checked', true)
            } else {
                $('#partSubmit') .prop('checked', false)
            }
        });
        $('#partSubmit') .click(function () {
            if (this.checked) {
                $('#autoSubmit') .prop('checked', true);
                $('#auto_query') .prop('checked', true)
            }
        });
        $('#auto_query') .click(function () {
            if (!this.checked) {
                $('#autoSubmit') .prop('checked', false)
            }
        });
        $('#clearAll') .click(function () {
            $('#setion_postion span:gt(0)') .remove();
            $('#buyer-list input') .prop('checked', false);
            passengerChecked = [
            ];
            $('#prior_train span:gt(0)') .remove();
            $('#inp-train') .css('color', '#999');
            $('#inp-train') .val('  请输入');
            ccSelected = [
            ];
            $('#prior_seat span:gt(0)') .remove();
            $('#seat-list input') .prop('checked', false);
            xbChecked = [
            ];
            $('#prior_date span:gt(0)') .remove();
            var g = rqChecked.length;
            for (var h = 1; h < g; h++) {
                $('#date-list input[value=' + rqChecked[h] + ']') .prop('checked', false)
            }
            rqChecked.splice(1, g - 1);
            $('#autoSubmit') .prop('checked', false);
            $('#partSubmit') .prop('checked', false)
        });
        $('#autoSubmit') .mouseenter(function (e) {
            var j = e.pageY + 10;
            var i = e.pageX;
            $('#showquick3') .css({
                top: j,
                left: i
            });
            $('#showquick3') .show()
        });
        $('#autoSubmit') .mouseleave(function () {
            $('#showquick3') .hide()
        });
        $('#partSubmit') .mouseenter(function (e) {
            var j = e.pageY + 10;
            var i = e.pageX;
            $('#showquick2') .css({
                top: j,
                left: i
            });
            $('#showquick2') .show()
        });
        $('#partSubmit') .mouseleave(function () {
            $('#showquick2') .hide()
        });
        $('#auto_query') .mouseenter(function (e) {
            var j = e.pageY + 10;
            var i = e.pageX;
            $('#showquick1') .css({
                top: j,
                left: i - 96
            });
            $('#showquick1') .show()
        });
        $('#auto_query') .mouseleave(function () {
            $('#showquick1') .hide()
        });
        $('#memb') .mouseenter(function (e) {
            var j = e.pageY + 10;
            var i = e.pageX;
            $('#showquick4') .css({
                top: j,
                left: i
            });
            $('#showquick4') .show()
        });
        $('#memb') .mouseleave(function () {
            $('#showquick4') .hide()
        });
        $('#train_first') .mouseenter(function (e) {
            var j = e.pageY + 10;
            var i = e.pageX;
            $('#showquick5') .css({
                top: j,
                left: i
            });
            $('#showquick5') .show()
        });
        $('#train_first') .mouseleave(function () {
            $('#showquick5') .hide()
        });
        $('#seat_first') .mouseenter(function (e) {
            var j = e.pageY + 10;
            var i = e.pageX;
            $('#showquick6') .css({
                top: j,
                left: i
            });
            $('#showquick6') .show()
        });
        $('#seat_first') .mouseleave(function () {
            $('#showquick6') .hide()
        });
        $('#select_date') .mouseenter(function (e) {
            var j = e.pageY + 10;
            var i = e.pageX;
            $('#showquick8') .css({
                top: j,
                left: i
            });
            $('#showquick8') .show()
        });
        $('#select_date') .mouseleave(function () {
            $('#showquick8') .hide()
        })
    });
    jQuery.extend({
        init_select_date: function () {
            if (otherDateArr.length < 5) {
                $('#sel-date>div:first') .html('<a href="javascript:" onclick="$.closeSelectDate()" >关闭</a>选择日期');
                return
            }
        },
        checkedPasseanger: function (b) {
            if (passengerAll) {
                var a = passengerAll.length;
                for (var n = 0; n < a; n++) {
                    var p = passengerAll[n];
                    var r = p.passenger_type_name;
                    if (!r) {
                        r = ''
                    }
                    var k = p.passenger_name + '(' + r + ')(' + p.passenger_id_no + ')';
                    if (k == b) {
                        passengerChecked.push(p);
                        break
                    }
                    var o = p.passenger_name + '(儿童)(' + p.passenger_id_no + ')';
                    if (o == b) {
                        var m = $.extend(true, {
                        }, p);
                        m.passenger_type_name = '儿童';
                        m.passenger_type = 2;
                        passengerChecked.push(m);
                        break
                    }
                    if (p.passenger_type == ticket_submit_order.ticket_type.student && b.indexOf('成人') > - 1) {
                        var q = p.passenger_name + '(成人)(' + p.passenger_id_no + ')';
                        if (q == b) {
                            var m = $.extend(true, {
                            }, p);
                            m.passenger_type_name = '成人';
                            m.passenger_type = ticket_submit_order.ticket_type.adult;
                            passengerChecked.push(m);
                            break
                        }
                    }
                }
            }
        },
        removePasseanger: function (j) {
            if (passengerChecked && passengerChecked.length > 0) {
                var b = passengerChecked.length;
                for (var i = 0; i < b; i++) {
                    var l = passengerChecked[i];
                    var a = l.passenger_type_name;
                    if (!a) {
                        a = ''
                    }
                    var k = l.passenger_name + '(' + a + ')(' + l.passenger_id_no + ')';
                    if (k == j) {
                        passengerChecked.splice(i, 1);
                        break
                    }
                }
            }
        },
        addChildPassenger: function (b) {
            var f = $('#setion_postion span') .length;
            if (f < 6) {
                b = b.split('(') [0] + '(儿童)(' + b.split('(') [2];
                var a = '<span name='' + b + '' class='sel-box w80'>' + b + '<a class='close' href='javascript:' onclick='$.removeSel(this,"' + b + '",1)'></a></span>';
                $('#setion_postion') .append(a);
                $.checkedPasseanger(b)
            } else {
                dhtmlx.alert({
                    title: '添加常用联系人',
                    ok: '确定',
                    text: '最多添加5位联系人',
                    type: 'alert-error'
                });
                return
            }
        },
        closeSelectBuyer: function () {
            $('#sel-buyer') .hide()
        },
        showSelectSeat: function () {
            var w = [
            ];
            var x = [
            ];
            var z = [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11
            ];
            var u = [
                0,
                1,
                2,
                3,
                7,
                8
            ];
            var s = [
                0,
                1,
                2,
                3,
                5,
                10,
                11
            ];
            var a = [
                4,
                5,
                6,
                9,
                10,
                11
            ];
            var y = true;
            var t = true;
            var v = ccSelected.length;
            if (v > 0) {
                for (var q = 0; q < v; q++) {
                    var b = ccSelected[q].substr(0, 1);
                    if (y) {
                        if (b == 'C' || b == 'G' || b == 'S' || b == 'D') {
                            if (t) {
                                if (b == 'D') {
                                    w = s
                                } else {
                                    w = u
                                }
                            } else {
                                w = z
                            }
                            y = false
                        }
                    } else {
                        if (b == 'D') {
                            w = s
                        }
                    }
                    if (t) {
                        var k = Number(b);
                        if (b == 'T' || b == 'K' || b == 'Z' || b == 'L' || b == 'A' || (k && k >= 0 && k <= 9)) {
                            if (y) {
                                w = a
                            } else {
                                w = z
                            }
                            t = false
                        }
                    }
                }
                if ((y && t) || (!y && !t)) {
                    w = z
                } else {
                    if (y && !t) {
                        x = u
                    } else {
                        if (!y && t) {
                            x = a
                        }
                    }
                }
            } else {
                w = z
            }
            var r = $('#seat-list input');
            for (var q = 0; q < x.length; q++) {
                r.eq(x[q]) .attr('disabled', 'disabled');
                $(r.eq(x[q])) .parent() .attr('class', 'color999')
            }
            for (var q = 0; q < w.length; q++) {
                r.eq(w[q]) .removeAttr('disabled');
                r.eq(w[q]) .parent() .removeClass('color999')
            }
            $('#sel-seat') .show();
            $('#sel-buyer') .hide();
            $('#sel-date') .hide();
            $('#sel-seat') .css('left', $('#sear-sel') .position() .left + 80);
            $('#sel-seat') .css('top', $('#sear-sel') .position() .top + 6 * 28 + 12)
        },
        closeSelectSeat: function () {
            $('#sel-seat') .hide()
        },
        showSelectDate: function () {
            $('#sel-date') .show();
            var a = $('#train_date') .val();
            if (rqChecked.length == 1) {
                $('#date-list input') .attr('disabled', false);
                $('#date-list input[value=' + rqChecked[0] + ']') .prop('checked', true);
                $('#date-list input[value=' + rqChecked[0] + ']') .attr('disabled', true)
            }
            $('#sel-buyer') .hide();
            $('#sel-seat') .hide();
            $('#sel-date') .css('left', $('#sear-sel') .position() .left + 80);
            $('#sel-date') .css('top', $('#sear-sel') .position() .top + 7 * 28 + 12)
        },
        closeSelectDate: function () {
            $('#sel-date') .hide()
        },
        removeSel: function (q, o, i) {
            $(q) .parent() .remove();
            if ('1' == i) {
                var t = $('#buyer-list input');
                var k = t.length;
                for (var s = 0; s < k; s++) {
                    if (t[s].nextSibling.nodeValue == o) {
                        t[s].checked = false;
                        $.removePasseanger(o)
                    }
                }
                if (o.indexOf('儿童') > 0) {
                    if (passengerChecked && passengerChecked.length > 0) {
                        var k = passengerChecked.length;
                        for (var s = 0; s < k; s++) {
                            var a = passengerChecked[s];
                            var b = a.passenger_type_name;
                            if (!b) {
                                b = ''
                            }
                            var p = a.passenger_name + '(' + b + ')(' + a.passenger_id_no + ')';
                            if (p == o) {
                                passengerChecked.splice(s, 1);
                                break
                            }
                        }
                    }
                }
            } else {
                if ('2' == i) {
                    var t = $('#seat-list input');
                    var k = t.length;
                    for (var s = 0; s < k; s++) {
                        if (t[s].value == o) {
                            t[s].checked = false;
                            for (var r = 0; r < xbChecked.length; r++) {
                                if (xbChecked[r] == o) {
                                    xbChecked.splice(r, 1);
                                    return
                                }
                            }
                        }
                    }
                } else {
                    if ('3' == i) {
                        var t = $('#date-list input');
                        var k = t.length;
                        for (var s = 0; s < k; s++) {
                            if ($(t[s]) .val() == o) {
                                t[s].checked = false;
                                for (var r = 0; r < rqChecked.length; r++) {
                                    if (rqChecked[r] == o) {
                                        rqChecked.splice(r, 1);
                                        return
                                    }
                                }
                            }
                        }
                    } else {
                        if ('4' == i) {
                            for (var r = 0; r < ccSelected.length; r++) {
                                if (ccSelected[r] == o) {
                                    ccSelected.splice(r, 1);
                                    return
                                }
                            }
                        }
                    }
                }
            }
        }
    });
    jQuery.extend({
        checkTrain: function (b, e) {
            if (d) {
                $(e) .val('')
            }
            d = false;
            var a = window.event ? b.keyCode : b.which;
            if ('' == $(e) .val()) {
                if (!(((a >= 48) && (a <= 57)) || (a == 67 || a == 71 || a == 68 || a == 84 || a == 75 || a == 89 || a == 76 || a == 65 || a == 83 || a == 90) || (a == 99 || a == 103 || a == 100 || a == 116 || a == 107 || a == 121 || a == 108 || a == 97 || a == 115 || a == 122) || a == 8 || a == 0)) {
                    if (window.event) {
                        window.event.returnValue = false
                    } else {
                        b.preventDefault()
                    }
                }
            } else {
                if (!(((a >= 48) && (a <= 57)) || a == 8 || a == 0)) {
                    if (window.event) {
                        window.event.returnValue = false
                    } else {
                        b.preventDefault()
                    }
                }
            }
        }
    })
}) ();
var ticket_submit_order = {
    ticket_type: {
        adult: '1',
        child: '2',
        student: '3',
        disability: '4'
    },
    ticket_type_name: {
        '1': '成人票',
        '2': '孩票',
        '3': '学生票',
        '4': '伤残军人票'
    },
    tour_flag: {
        dc: 'dc',
        wc: 'wc',
        fc: 'fc',
        gc: 'gc',
        lc1: 'l1',
        lc2: 'l2'
    },
    passenger_type: {
        adult: '1',
        child: '2',
        student: '3',
        disability: '4'
    },
    passenger_card_type: {
        two: '1',
        one: '2',
        tmp: '3',
        passport: 'B',
        hongkong_macau: 'C',
        taiwan: 'G'
    },
    request_flag: {
        isAsync: '1'
    },
    ticket_query_flag: {
        query_commom: '00',
        query_student: '0X00'
    },
    seatType: {
        yz_type: '1'
    },
    special_areas: {
        lso: 'LSO',
        dao: 'DAO',
        ado: 'ADO',
        nqo: 'NQO',
        tho: 'THO'
    }
};
function OrderQueueWaitTime(d, e, f) {
    this.tourFlag = d;
    this.waitMethod = e;
    this.finishMethod = f;
    this.dispTime = 1;
    this.nextRequestTime = 1;
    this.isFinished = false;
    this.waitObj
}
OrderQueueWaitTime.prototype.start = function () {
    var b = this;
    b.timerJob();
    window.setInterval(function () {
        b.timerJob()
    }, 1000)
};
OrderQueueWaitTime.prototype.timerJob = function () {
    if (this.isFinished) {
        return
    }
    if (this.dispTime <= 0) {
        this.isFinished = true;
        this.finishMethod(this.tourFlag, this.dispTime, this.waitObj);
        return
    }
    if (this.dispTime == this.nextRequestTime) {
        this.getWaitTime()
    }
    var d = this.dispTime;
    var e = '';
    var f = parseInt(d / 60);
    if (f >= 1) {
        e = f + '分';
        d = d % 60
    } else {
        e = '1分'
    }
    this.waitMethod(this.tourFlag, this.dispTime > 1 ? --this.dispTime : 1, e)
};
OrderQueueWaitTime.prototype.getWaitTime = function () {
    var b = this;
    $.ajax({
        url: ctx + 'confirmPassenger/queryOrderWaitTime?random=' + new Date() .getTime(),
        type: 'GET',
        data: {
            tourFlag: b.tourFlag
        },
        dataType: 'json',
        success: function (h) {
            var f = h.data;
            if (!f.queryOrderWaitTimeStatus) {
                window.location.href = ctx + 'login/init?random=' + new Date() .getTime()
            } else {
                if (f != null) {
                    b.waitObj = f;
                    b.dispTime = f.waitTime;
                    var g = parseInt(f.waitTime / 1.5);
                    g = g > 60 ? 60 : g;
                    var a = f.waitTime - g;
                    b.nextRequestTime = a <= 0 ? 1 : a
                }
            }
        },
        error: function (a, e, f) {
            return false
        }
    })
};
var defaultLoadGrayBackgroundModalbox = '';
var loadGrayBackground;
var unLoadGrayBackground;
(function () {
    loadGrayBackground = function () {
        var b = dhtmlx.modalbox({
            targSrc: '<div><img src="' + ctx + 'resources/images/loading.gif"></img></div>',
            callback: function () {
            }
        });
        defaultLoadGrayBackgroundModalbox = b
    };
    unLoadGrayBackground = function () {
        if (defaultLoadGrayBackgroundModalbox != '') {
            dhtmlx.modalbox.hide(defaultLoadGrayBackgroundModalbox);
            defaultLoadGrayBackgroundModalbox = ''
        }
    }
}) ();
(function (h, j, g) {
    var f = function () {
        for (var c = /audio(.min)?.js.*/, b = document.getElementsByTagName('script'), d = 0, e = b.length; d < e; d++) {
            var a = b[d].getAttribute('src');
            if (c.test(a)) {
                return a.replace(c, '')
            }
        }
    }();
    g[h] = {
        instanceCount: 0,
        instances: {
        },
        flashSource: '      <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="$1" width="1" height="1" name="$1" style="position: absolute; left: -1px;">         <param name="movie" value="$2?playerInstance=' + h + '.instances['$1']&datetime=$3">         <param name="allowscriptaccess" value="always">         <embed name="$1" src="$2?playerInstance=' + h + '.instances['$1']&datetime=$3" width="1" height="1" allowscriptaccess="always">       </object>',
        settings: {
            autoplay: false,
            loop: false,
            preload: true,
            imageLocation: f + 'player-graphics.gif',
            swfLocation: f + 'audiojs.swf',
            useFlash: function () {
                var a = document.createElement('audio');
                return !(a.canPlayType && a.canPlayType('audio/mpeg;') .replace(/no/, ''))
            }(),
            hasFlash: function () {
                if (navigator.plugins && navigator.plugins.length && navigator.plugins['Shockwave Flash']) {
                    return true
                } else {
                    if (navigator.mimeTypes && navigator.mimeTypes.length) {
                        var b = navigator.mimeTypes['application/x-shockwave-flash'];
                        return b && b.enabledPlugin
                    } else {
                        try {
                            new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
                            return true
                        } catch (a) {
                        }
                    }
                }
                return false
            }(),
            createPlayer: {
                markup: '          <div class="play-pause">             <p class="play"></p>             <p class="pause"></p>             <p class="loading"></p>             <p class="error"></p>           </div>           <div class="scrubber">             <div class="progress"></div>             <div class="loaded"></div>           </div>           <div class="time">             <em class="played">00:00</em>/<strong class="duration">00:00</strong>           </div>           <div class="error-message"></div>',
                playPauseClass: 'play-pause',
                scrubberClass: 'scrubber',
                progressClass: 'progress',
                loaderClass: 'loaded',
                timeClass: 'time',
                durationClass: 'duration',
                playedClass: 'played',
                errorMessageClass: 'error-message',
                playingClass: 'playing',
                loadingClass: 'loading',
                errorClass: 'error'
            },
            css: '        .audiojs audio { position: absolute; left: -1px; }         .audiojs { width: 460px; height: 36px; background: #404040; overflow: hidden; font-family: monospace; font-size: 12px;           background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #444), color-stop(0.5, #555), color-stop(0.51, #444), color-stop(1, #444));           background-image: -moz-linear-gradient(center top, #444 0%, #555 50%, #444 51%, #444 100%);           -webkit-box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3); -moz-box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);           -o-box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3); box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3); }         .audiojs .play-pause { width: 25px; height: 40px; padding: 4px 6px; margin: 0px; float: left; overflow: hidden; border-right: 1px solid #000; }         .audiojs p { display: none; width: 25px; height: 40px; margin: 0px; cursor: pointer; }         .audiojs .play { display: block; }         .audiojs .scrubber { position: relative; float: left; width: 280px; background: #5a5a5a; height: 14px; margin: 10px; border-top: 1px solid #3f3f3f; border-left: 0px; border-bottom: 0px; overflow: hidden; }         .audiojs .progress { position: absolute; top: 0px; left: 0px; height: 14px; width: 0px; background: #ccc; z-index: 1;           background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #ccc), color-stop(0.5, #ddd), color-stop(0.51, #ccc), color-stop(1, #ccc));           background-image: -moz-linear-gradient(center top, #ccc 0%, #ddd 50%, #ccc 51%, #ccc 100%); }         .audiojs .loaded { position: absolute; top: 0px; left: 0px; height: 14px; width: 0px; background: #000;           background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #222), color-stop(0.5, #333), color-stop(0.51, #222), color-stop(1, #222));           background-image: -moz-linear-gradient(center top, #222 0%, #333 50%, #222 51%, #222 100%); }         .audiojs .time { float: left; height: 36px; line-height: 36px; margin: 0px 0px 0px 6px; padding: 0px 6px 0px 12px; border-left: 1px solid #000; color: #ddd; text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5); }         .audiojs .time em { padding: 0px 2px 0px 0px; color: #f9f9f9; font-style: normal; }         .audiojs .time strong { padding: 0px 0px 0px 2px; font-weight: normal; }         .audiojs .error-message { float: left; display: none; margin: 0px 10px; height: 36px; width: 400px; overflow: hidden; line-height: 36px; white-space: nowrap; color: #fff;           text-overflow: ellipsis; -o-text-overflow: ellipsis; -icab-text-overflow: ellipsis; -khtml-text-overflow: ellipsis; -moz-text-overflow: ellipsis; -webkit-text-overflow: ellipsis; }         .audiojs .error-message a { color: #eee; text-decoration: none; padding-bottom: 1px; border-bottom: 1px solid #999; white-space: wrap; }                 .audiojs .play { background: url("$1") -2px -1px no-repeat; }         .audiojs .loading { background: url("$1") -2px -31px no-repeat; }         .audiojs .error { background: url("$1") -2px -61px no-repeat; }         .audiojs .pause { background: url("$1") -2px -91px no-repeat; }                 .playing .play, .playing .loading, .playing .error { display: none; }         .playing .pause { display: block; }                 .loading .play, .loading .pause, .loading .error { display: none; }         .loading .loading { display: block; }                 .error .time, .error .play, .error .pause, .error .scrubber, .error .loading { display: none; }         .error .error { display: block; }         .error .play-pause p { cursor: auto; }         .error .error-message { display: block; }',
            trackEnded: function () {
            },
            flashError: function () {
                var a = this.settings.createPlayer,
                c = i(a.errorMessageClass, this.wrapper),
                b = 'Missing <a href="http://get.adobe.com/flashplayer/">flash player</a> plugin.';
                if (this.mp3) {
                    b += ' <a href="' + this.mp3 + '">Download audio file</a>.'
                }
                g[h].helpers.removeClass(this.wrapper, a.loadingClass);
                g[h].helpers.addClass(this.wrapper, a.errorClass);
                c.innerHTML = b
            },
            loadError: function () {
                var b = this.settings.createPlayer,
                a = i(b.errorMessageClass, this.wrapper);
                g[h].helpers.removeClass(this.wrapper, b.loadingClass);
                g[h].helpers.addClass(this.wrapper, b.errorClass);
                a.innerHTML = 'Error loading: "' + this.mp3 + '"'
            },
            init: function () {
                g[h].helpers.addClass(this.wrapper, this.settings.createPlayer.loadingClass)
            },
            loadStarted: function () {
                var b = this.settings.createPlayer,
                a = i(b.durationClass, this.wrapper),
                c = Math.floor(this.duration / 60),
                d = Math.floor(this.duration % 60);
                g[h].helpers.removeClass(this.wrapper, b.loadingClass);
                a.innerHTML = (c < 10 ? '0' : '') + c + ':' + (d < 10 ? '0' : '') + d
            },
            loadProgress: function (a) {
                var c = this.settings.createPlayer,
                b = i(c.scrubberClass, this.wrapper);
                i(c.loaderClass, this.wrapper) .style.width = b.offsetWidth * a + 'px'
            },
            playPause: function () {
                this.playing ? this.settings.play()  : this.settings.pause()
            },
            play: function () {
                g[h].helpers.addClass(this.wrapper, this.settings.createPlayer.playingClass)
            },
            pause: function () {
                g[h].helpers.removeClass(this.wrapper, this.settings.createPlayer.playingClass)
            },
            updatePlayhead: function (a) {
                var c = this.settings.createPlayer,
                b = i(c.scrubberClass, this.wrapper);
                i(c.progressClass, this.wrapper) .style.width = b.offsetWidth * a + 'px';
                c = i(c.playedClass, this.wrapper);
                b = this.duration * a;
                a = Math.floor(b / 60);
                b = Math.floor(b % 60);
                c.innerHTML = (a < 10 ? '0' : '') + a + ':' + (b < 10 ? '0' : '') + b
            }
        },
        create: function (b, a) {
            a = a || {
            };
            return b.length ? this.createAll(a, b)  : this.newInstance(b, a)
        },
        createAll: function (e, c) {
            var d = c || document.getElementsByTagName('audio'),
            l = [
            ];
            e = e || {
            };
            for (var a = 0, b = d.length; a < b; a++) {
                l.push(this.newInstance(d[a], e))
            }
            return l
        },
        newInstance: function (c, b) {
            var d = this.helpers.clone(this.settings),
            e = 'audiojs' + this.instanceCount,
            a = 'audiojs_wrapper' + this.instanceCount;
            this.instanceCount++;
            if (c.getAttribute('autoplay') != null) {
                d.autoplay = true
            }
            if (c.getAttribute('loop') != null) {
                d.loop = true
            }
            if (c.getAttribute('preload') == 'none') {
                d.preload = false
            }
            b && this.helpers.merge(d, b);
            if (d.createPlayer.markup) {
                c = this.createPlayer(c, d.createPlayer, a)
            } else {
                c.parentNode.setAttribute('id', a)
            }
            a = new g[j](c, d);
            d.css && this.helpers.injectCss(a, d.css);
            if (d.useFlash && d.hasFlash) {
                this.injectFlash(a, e);
                this.attachFlashEvents(a.wrapper, a)
            } else {
                d.useFlash && !d.hasFlash && this.settings.flashError.apply(a)
            }
            if (!d.useFlash || d.useFlash && d.hasFlash) {
                this.attachEvents(a.wrapper, a)
            }
            return this.instances[e] = a
        },
        createPlayer: function (c, b, d) {
            var e = document.createElement('div'),
            a = c.cloneNode(true);
            e.setAttribute('class', 'audiojs');
            e.setAttribute('className', 'audiojs');
            e.setAttribute('id', d);
            if (a.outerHTML && !document.createElement('audio') .canPlayType) {
                a = this.helpers.cloneHtml5Node(c);
                e.innerHTML = b.markup;
                e.appendChild(a);
                c.outerHTML = e.outerHTML;
                e = document.getElementById(d)
            } else {
                e.appendChild(a);
                e.innerHTML += b.markup;
                c.parentNode.replaceChild(e, c)
            }
            return e.getElementsByTagName('audio') [0]
        },
        attachEvents: function (c, b) {
            if (b.settings.createPlayer) {
                var d = b.settings.createPlayer,
                e = i(d.playPauseClass, c),
                a = i(d.scrubberClass, c);
                g[h].events.addListener(e, 'click', function () {
                    b.playPause.apply(b)
                });
                g[h].events.addListener(a, 'click', function (o) {
                    o = o.clientX;
                    var k = this,
                    p = 0;
                    if (k.offsetParent) {
                        do {
                            p += k.offsetLeft
                        } while (k = k.offsetParent)
                    }
                    b.skipTo((o - p) / a.offsetWidth)
                });
                if (!b.settings.useFlash) {
                    g[h].events.trackLoadProgress(b);
                    g[h].events.addListener(b.element, 'timeupdate', function () {
                        b.updatePlayhead.apply(b)
                    });
                    g[h].events.addListener(b.element, 'ended', function () {
                        b.trackEnded.apply(b)
                    });
                    g[h].events.addListener(b.source, 'error', function () {
                        clearInterval(b.readyTimer);
                        clearInterval(b.loadTimer);
                        b.settings.loadError.apply(b)
                    })
                }
            }
        },
        attachFlashEvents: function (b, a) {
            a.swfReady = false;
            a.load = function (c) {
                a.mp3 = c;
                a.swfReady && a.element.load(c)
            };
            a.loadProgress = function (c, d) {
                a.loadedPercent = c;
                a.duration = d;
                a.settings.loadStarted.apply(a);
                a.settings.loadProgress.apply(a, [
                    c
                ])
            };
            a.skipTo = function (c) {
                if (!(c > a.loadedPercent)) {
                    a.updatePlayhead.call(a, [
                        c
                    ]);
                    a.element.skipTo(c)
                }
            };
            a.updatePlayhead = function (c) {
                a.settings.updatePlayhead.apply(a, [
                    c
                ])
            };
            a.play = function () {
                if (!a.settings.preload) {
                    a.settings.preload = true;
                    a.element.init(a.mp3)
                }
                a.playing = true;
                a.element.pplay();
                a.settings.play.apply(a)
            };
            a.pause = function () {
                a.playing = false;
                a.element.ppause();
                a.settings.pause.apply(a)
            };
            a.setVolume = function (c) {
                a.element.setVolume(c)
            };
            a.loadStarted = function () {
                a.swfReady = true;
                a.settings.preload && a.element.init(a.mp3);
                a.settings.autoplay && a.play.apply(a)
            }
        },
        injectFlash: function (c, b) {
            var d = this.flashSource.replace(/\$1/g, b);
            d = d.replace(/\$2/g, c.settings.swfLocation);
            d = d.replace(/\$3/g, + new Date + Math.random());
            var e = c.wrapper.innerHTML,
            a = document.createElement('div');
            a.innerHTML = d + e;
            c.wrapper.innerHTML = a.innerHTML;
            c.element = this.helpers.getSwf(b)
        },
        helpers: {
            merge: function (b, a) {
                for (attr in a) {
                    if (b.hasOwnProperty(attr) || a.hasOwnProperty(attr)) {
                        b[attr] = a[attr]
                    }
                }
            },
            clone: function (a) {
                if (a == null || typeof a !== 'object') {
                    return a
                }
                var c = new a.constructor,
                b;
                for (b in a) {
                    c[b] = arguments.callee(a[b])
                }
                return c
            },
            addClass: function (b, a) {
                RegExp('(\s|^)' + a + '(\s|$)') .test(b.className) || (b.className += ' ' + a)
            },
            removeClass: function (b, a) {
                b.className = b.className.replace(RegExp('(\s|^)' + a + '(\s|$)'), ' ')
            },
            injectCss: function (b, a) {
                for (var e = '', c = document.getElementsByTagName('style'), d = a.replace(/\$1/g, b.settings.imageLocation), o = 0, k = c.length; o < k; o++) {
                    var p = c[o].getAttribute('title');
                    if (p && ~p.indexOf('audiojs')) {
                        k = c[o];
                        if (k.innerHTML === d) {
                            return
                        }
                        e = k.innerHTML;
                        break
                    }
                }
                c = document.getElementsByTagName('head') [0];
                o = c.firstChild;
                k = document.createElement('style');
                if (c) {
                    k.setAttribute('type', 'text/css');
                    k.setAttribute('title', 'audiojs');
                    if (k.styleSheet) {
                        k.styleSheet.cssText = e + d
                    } else {
                        k.appendChild(document.createTextNode(e + d))
                    }
                    o ? c.insertBefore(k, o)  : c.appendChild(styleElement)
                }
            },
            cloneHtml5Node: function (a) {
                var c = document.createDocumentFragment(),
                b = c.createElement ? c : document;
                b.createElement('audio');
                b = b.createElement('div');
                c.appendChild(b);
                b.innerHTML = a.outerHTML;
                return b.firstChild
            },
            getSwf: function (a) {
                a = document[a] || window[a];
                return a.length > 1 ? a[a.length - 1] : a
            }
        },
        events: {
            memoryLeaking: false,
            listeners: [
            ],
            addListener: function (a, c, b) {
                if (a.addEventListener) {
                    a.addEventListener(c, b, false)
                } else {
                    if (a.attachEvent) {
                        this.listeners.push(a);
                        if (!this.memoryLeaking) {
                            window.attachEvent('onunload', function () {
                                if (this.listeners) {
                                    for (var d = 0, e = this.listeners.length; d < e; d++) {
                                        g[h].events.purge(this.listeners[d])
                                    }
                                }
                            });
                            this.memoryLeaking = true
                        }
                        a.attachEvent('on' + c, function () {
                            b.call(a, window.event)
                        })
                    }
                }
            },
            trackLoadProgress: function (b) {
                if (b.settings.preload) {
                    var a,
                    c;
                    b = b;
                    var d = /(ipod|iphone|ipad)/i.test(navigator.userAgent);
                    a = setInterval(function () {
                        if (b.element.readyState > - 1) {
                            d || b.init.apply(b)
                        }
                        if (b.element.readyState > 1) {
                            b.settings.autoplay && b.play.apply(b);
                            clearInterval(a);
                            c = setInterval(function () {
                                b.loadProgress.apply(b);
                                b.loadedPercent >= 1 && clearInterval(c)
                            })
                        }
                    }, 10);
                    b.readyTimer = a;
                    b.loadTimer = c
                }
            },
            purge: function (a) {
                var c = a.attributes,
                b;
                if (c) {
                    for (b = 0; b < c.length; b += 1) {
                        if (typeof a[c[b].name] === 'function') {
                            a[c[b].name] = null
                        }
                    }
                }
                if (c = a.childNodes) {
                    for (b = 0; b < c.length; b += 1) {
                        purge(a.childNodes[b])
                    }
                }
            },
            ready: function () {
                return function (k) {
                    var e = window,
                    m = false,
                    n = true,
                    w = e.document,
                    q = w.documentElement,
                    x = w.addEventListener ? 'addEventListener' : 'attachEvent',
                    r = w.addEventListener ? 'removeEventListener' : 'detachEvent',
                    b = w.addEventListener ? '' : 'on',
                    a = function (l) {
                        if (!(l.type == 'readystatechange' && w.readyState != 'complete')) {
                            (l.type == 'load' ? e : w) [r](b + l.type, a, false);
                            if (!m && (m = true)) {
                                k.call(e, l.type || l)
                            }
                        }
                    },
                    c = function () {
                        try {
                            q.doScroll('left')
                        } catch (l) {
                            setTimeout(c, 50);
                            return
                        }
                        a('poll')
                    };
                    if (w.readyState == 'complete') {
                        k.call(e, 'lazy')
                    } else {
                        if (w.createEventObject && q.doScroll) {
                            try {
                                n = !e.frameElement
                            } catch (d) {
                            }
                            n && c()
                        }
                        w[x](b + 'DOMContentLoaded', a, false);
                        w[x](b + 'readystatechange', a, false);
                        e[x](b + 'load', a, false)
                    }
                }
            }()
        }
    };
    g[j] = function (b, a) {
        this.element = b;
        this.wrapper = b.parentNode;
        this.source = b.getElementsByTagName('source') [0] || b;
        this.mp3 = function (c) {
            var d = c.getElementsByTagName('source') [0];
            return c.getAttribute('src') || (d ? d.getAttribute('src')  : null)
        }(b);
        this.settings = a;
        this.loadStartedCalled = false;
        this.loadedPercent = 0;
        this.duration = 1;
        this.playing = false
    };
    g[j].prototype = {
        updatePlayhead: function () {
            this.settings.updatePlayhead.apply(this, [
                this.element.currentTime / this.duration
            ])
        },
        skipTo: function (a) {
            if (!(a > this.loadedPercent)) {
                this.element.currentTime = this.duration * a;
                this.updatePlayhead()
            }
        },
        load: function (a) {
            this.loadStartedCalled = false;
            this.source.setAttribute('src', a);
            this.element.load();
            this.mp3 = a;
            g[h].events.trackLoadProgress(this)
        },
        loadError: function () {
            this.settings.loadError.apply(this)
        },
        init: function () {
            this.settings.init.apply(this)
        },
        loadStarted: function () {
            if (!this.element.duration) {
                return false
            }
            this.duration = this.element.duration;
            this.updatePlayhead();
            this.settings.loadStarted.apply(this)
        },
        loadProgress: function () {
            if (this.element.buffered != null && this.element.buffered.length) {
                if (!this.loadStartedCalled) {
                    this.loadStartedCalled = this.loadStarted()
                }
                this.loadedPercent = this.element.buffered.end(this.element.buffered.length - 1) / this.duration;
                this.settings.loadProgress.apply(this, [
                    this.loadedPercent
                ])
            }
        },
        playPause: function () {
            this.playing ? this.pause()  : this.play()
        },
        play: function () {
            /(ipod|iphone|ipad)/i.test(navigator.userAgent) && this.element.readyState == 0 && this.init.apply(this);
            if (!this.settings.preload) {
                this.settings.preload = true;
                this.element.setAttribute('preload', 'auto');
                g[h].events.trackLoadProgress(this)
            }
            this.playing = true;
            this.element.play();
            this.settings.play.apply(this)
        },
        pause: function () {
            this.playing = false;
            this.element.pause();
            this.settings.pause.apply(this)
        },
        setVolume: function (a) {
            this.element.volume = a
        },
        trackEnded: function () {
            this.skipTo.apply(this, [
                0
            ]);
            this.settings.loop || this.pause.apply(this);
            this.settings.trackEnded.apply(this)
        }
    };
    var i = function (b, d) {
        var e = [
        ];
        d = d || document;
        if (d.getElementsByClassName) {
            e = d.getElementsByClassName(b)
        } else {
            var m,
            n,
            c = d.getElementsByTagName('*'),
            a = RegExp('(^|\s)' + b + '(\s|$)');
            m = 0;
            for (n = c.length; m < n; m++) {
                a.test(c[m].className) && e.push(c[m])
            }
        }
        return e.length > 1 ? e : e[0]
    }
}) ('audiojs', 'audiojsInstance', this);
(function (b) {
    b.jpopup = function (h, a) {
        var f;
        var g = this;
        g.$el = b(h);
        g.el = h;
        g.init = function () {
            g.options = b.extend({
            }, b.jpopup.defaultOptions, a);
            if (!g.options.target) {
                var c = document.createElement('div');
                c.id = 'tip';
                c.innerHTML = '<h1><a href='javascript:void(0)' onclick='$jpopup.startOrHiden()'>×</a>温馨提示</h1>有票了！！</p>';
                c.style.height = '0px';
                c.style.width = g.options.width + 'px';
                c.style.bottom = '0px';
                c.style.position = 'fixed';
                document.body.appendChild(c)
            } else {
                g.options.target.attr('id', 'tip');
                g.options.target.css('height', '0px');
                g.options.target.css('width', g.options.width + 'px');
                g.options.target.css('position', 'fixed');
                g.options.target.css('margin-bottom', '0px')
            }
        };
        g.startOrHiden = function () {
            var c = document.getElementById('tip');
            if (parseInt(c.style.height) == 0) {
                c.style.display = 'block';
                f = setInterval('$jpopup.changeH('up')', g.options.speed)
            } else {
                jPlayer('stop');
                f = setInterval('$jpopup.changeH('down')', g.options.speed)
            }
        };
        g.quickHide = function () {
            var c = document.getElementById('tip');
            c.style.height = '0px';
            c.style.display = 'none'
        };
        g.isShow = function () {
            var c = document.getElementById('tip');
            return c && c.style.display == 'block'
        };
        g.changeH = function (c) {
            var d = document.all ? document.all.tip : document.getElementById('tip');
            if (c == 'up') {
                if (parseInt(d.style.height) >= g.options.height) {
                    clearInterval(f)
                } else {
                    d.style.height = (parseInt(d.style.height) + 8) .toString() + 'px'
                }
            }
            if (c == 'down') {
                if (parseInt(d.style.height) < 8) {
                    clearInterval(f);
                    d.style.display = 'none'
                } else {
                    d.style.height = (parseInt(d.style.height) - 8) .toString() + 'px'
                }
            }
        };
        g.init();
        window.$jpopup = g;
        return g
    };
    b.jpopup.defaultOptions = {
        width: 180,
        height: 100,
        target: null,
        speed: 20
    };
    b.fn.jpopup = function () {
        var a = Array.prototype.slice.call(arguments);
        return (new b.jpopup(this, a[0]))
    }
}) (jQuery);
(function (b) {
    b.autoSubmit = function (f) {
        var e = this;
        var a = [
            'YZ',
            'ZE',
            'YW',
            'ZY',
            'RZ',
            'SRRB',
            'YYRW',
            'RW',
            'TZ',
            'GR',
            'SWZ',
            'WZ'
        ];
        e.init = function () {
            e.options = b.extend({
            }, b.autoSubmit.defaultOptions, f)
        };
        e.isTrainPrior = function () {
            return '2' == b('#_prior') .val()
        };
        e.autoSubmit = function (W, X, t, P) {
            var U = new Date() .getTime();
            var ag = [
            ];
            var i = W.length;
            ag[0] = 3;
            if (i <= 0) {
                return ag
            }
            var S = t;
            var k = P;
            var d = S.length;
            var ab = k.length;
            var Z = X.length;
            var am = false;
            if (d == 0) {
                S = a;
                am = true;
                d = S.length
            }
            var ad = [
            ];
            var ac = e.isTrainPrior();
            W = e.sortTrainPrior(W, k);
            for (var an = 0; an < d; an++) {
                var j = [
                ];
                j.push(S[an].toLowerCase());
                var c = new Object();
                c.cType = S[an];
                c.cTrain = [
                ];
                for (var ai = 0; ai < i; ai++) {
                    var aa = W[ai];
                    var af = e.getXBSize(aa, j);
                    if (b('#partSubmit') .is(':checked') && ac && af >= 1) {
                        aa.cNum = af;
                        c.cTrain.push(aa)
                    } else {
                        if (af >= Z) {
                            aa.cNum = af;
                            c.cTrain.push(aa)
                        }
                    }
                }
                if (c.cTrain.length > 0) {
                    ad.push(c)
                }
            }
            var Q = ad.length;
            if (Q > 0) {
                debug('可以直接提交 start');
                if (ac) {
                    debug('可以直接提交  车次优先');
                    for (var ai = 0; ai < i; ai++) {
                        var R = W[ai]['queryLeftNewDTO']['station_train_code'];
                        debug('   检测到车次:' + R);
                        for (var an = 0; an < Q; an++) {
                            var ak = ad[an];
                            if (e.checkTrainByTrainNo(ak.cTrain, R)) {
                                debug('检测到车次:' + R + '  	席别：' + ak.cType);
                                debug('自动提交检测  车次优先,耗时:' + (new Date() .getTime() - U) + '毫秒');
                                ag[0] = 1;
                                ag[1] = W[ai];
                                if (b('#partSubmit') .is(':checked')) {
                                    ag[2] = S
                                } else {
                                    ag[2] = [
                                        ak.cType
                                    ]
                                }
                                return ag
                            }
                        }
                    }
                    debug('可以直接提交  车次优先  失败了,耗时：' + (new Date() .getTime() - U) + '毫秒')
                } else {
                    debug('可以直接提交  席别优先');
                    var ak = ad[0];
                    var ae = ak.cTrain;
                    e.sortTrainZWNum(ae, ak.cType.toLowerCase() + '_num');
                    debug('检测到车次  可以直接提交  席别优先:' + ae[0]['queryLeftNewDTO']['station_train_code'] + '  	席别：' + ak.cType);
                    ag[0] = 1;
                    ag[1] = ae[0];
                    ag[2] = [
                        ak.cType
                    ];
                    debug('自动提交检测  可以直接提交  席别优先耗时:' + (new Date() .getTime() - U) + '毫秒');
                    return ag
                }
                return ag
            }
            if (b('#partSubmit') .is(':checked')) {
                debug('允许部分提交  start');
                var j = [
                ];
                var V = [
                ];
                for (var an = 0; an < d; an++) {
                    j.push(S[an].toLowerCase());
                    V.push(S[an]);
                    var c = new Object();
                    c.cTypes = [
                    ];
                    for (var ah = 0; ah <= an; ah++) {
                        c.cTypes.push(S[an])
                    }
                    c.cTrain = [
                    ];
                    c.cTypeNum = an + 1;
                    for (var al = 0; al < i; al++) {
                        var aa = W[al];
                        var aj = e.getXBSize(aa, j);
                        if (aj > 0) {
                            aa.cNum = aj;
                            c.cTrain.push(aa)
                        }
                    }
                    if (c.cTrain.length > 0) {
                        ad.push(c)
                    }
                }
                Q = ad.length;
                if (Q > 0) {
                    if (ac) {
                        debug('	满足部分提交  车次优先');
                        for (var ai = 0; ai < i; ai++) {
                            var R = W[ai]['queryLeftNewDTO']['station_train_code'];
                            for (var an = 0; an < Q; an++) {
                                var ak = ad[an];
                                if (e.checkTrainByTrainNo(ak.cTrain, R)) {
                                    debug('检测到车次:' + R);
                                    debug('部分提交  车次优先,耗时:' + (new Date() .getTime() - U) + '毫秒');
                                    ag[0] = 2;
                                    ag[1] = W[ai];
                                    ag[2] = S;
                                    return ag
                                }
                            }
                        }
                        debug('	满足部分提交  车次优先 过滤错误')
                    } else {
                        debug('	满足部分提交  席别优先');
                        var T = new Object();
                        var x = 10000;
                        T[S[0]] = x;
                        for (var an = 1; an < d; an++) {
                            x = x / 5;
                            T[S[an]] = x
                        }
                        e.createXBWeight(W, S, T);
                        W.sort(function (m, g) {
                            var l = m.trainWeight;
                            var h = g.trainWeight;
                            if (l > h) {
                                return - 1
                            } else {
                                return 1
                            }
                        });
                        var Y = W[0];
                        debug('	满足部分提交  席别优先 根据权重排序之后首选车次：' + Y.queryLeftNewDTO.station_train_code + '	权重值:' + Y.trainWeight);
                        debug('部分提交  席别优先,耗时:' + (new Date() .getTime() - U) + '毫秒');
                        ag[0] = 2;
                        ag[1] = Y;
                        ag[2] = S;
                        return ag
                    }
                }
            }
            return ag
        };
        e.createXBWeight = function (i, k, t) {
            var d = i.length;
            for (var r = 0; r < d; r++) {
                var s = i[r];
                s.trainWeight = 0;
                var p = k.length;
                for (var c = 0; c < p; c++) {
                    var q = s.queryLeftNewDTO[k[c].toLowerCase() + '_num'];
                    if (q != '--' && q != '无') {
                        if (q == '有') {
                            s.trainWeight = s.trainWeight + 20 * t[k[c]]
                        } else {
                            q = Number(q);
                            s.trainWeight = s.trainWeight + q * t[k[c]]
                        }
                    }
                }
                debug('	车次' + s.queryLeftNewDTO.station_train_code + '席别优先权值：' + s.trainWeight)
            }
        };
        e.checkTrainByTrainNo = function (d, c) {
            var i = d.length;
            if (i > 0) {
                for (var j = 0; j < i; j++) {
                    if (c == d[j]['queryLeftNewDTO']['station_train_code']) {
                        return true
                    }
                }
            }
            return false
        };
        e.sortTrainZWNum = function (d, c) {
            debug('   排序了！！！！！' + c);
            d.sort(function (m, n) {
                var k = m.queryLeftNewDTO[c];
                var l = n.queryLeftNewDTO[c];
                if (k != '--' && k != '无') {
                    if (k == '有') {
                        k = 20
                    } else {
                        k = Number(k)
                    }
                } else {
                    k = 0
                }
                if (l != '--' && l != '无') {
                    if (l == '有') {
                        l = 20
                    } else {
                        l = Number(l)
                    }
                } else {
                    l = 0
                }
                if (k > l) {
                    return - 1
                } else {
                    return 1
                }
            })
        };
        e.sortTrainPrior = function (k, c) {
            if (c.length > 0) {
                var d = [
                ];
                for (var l = 0; l < c.length; l++) {
                    if (d.length == k.length) {
                        break
                    }
                    for (var i = 0; i < k.length; i++) {
                        if (c[l] == k[i]['queryLeftNewDTO']['station_train_code']) {
                            d.push(k[i]);
                            break
                        }
                    }
                }
                return d
            }
            return k
        };
        e.getXBSize = function (u, w, v) {
            var D = 0;
            var x = w.length;
            for (var z = 0; z < x; z++) {
                if (w[z] == 'srrb' || w[z] == 'yyrw') {
                    var C = u.queryLeftNewDTO.yp_info;
                    var c = C.length;
                    for (var A = 0, t = c / 10; A < t; A++) {
                        var d = C.substr(A * 10, A * 10 + 10);
                        var k = d.substr(0, 1);
                        var B = Number(d.substr(6, 10));
                        if (w[z] == 'srrb' && k == 'F') {
                            return B
                        }
                        if (w[z] == 'yyrw' && k == 'A') {
                            return B
                        }
                    }
                } else {
                    var y = u.queryLeftNewDTO[w[z] + '_num'];
                    if (y != '--' && y != '无') {
                        if (y == '有') {
                            if (v) {
                                v.cTypes.push(w[z])
                            }
                            D += 20
                        } else {
                            y = Number(y);
                            if (y > 0) {
                                if (v) {
                                    v.cTypes.push(w[z])
                                }
                            }
                            D += y
                        }
                    }
                }
            }
            return D
        };
        e.sortedPriorXB = function (i) {
            var c = [
            ];
            var l = a.length;
            for (var k = 0; k < l; k++) {
                if (c.length == i.length) {
                    break
                }
                for (var d = 0; d < i.length; d++) {
                    if (a[k] == i[d]) {
                        c.push(i[d]);
                        break
                    }
                }
            }
            return c
        };
        e.removeSameElem = function () {
            for (var c = 0; c < e.options.current_datas.length; c++) {
                for (var d = c + 1; d < e.options.current_datas.length; d++) {
                    if (e.equals(e.options.current_datas[c], e.options.current_datas[d])) {
                        e.options.current_datas = removeElement(d, e.options.current_datas);
                        c = - 1;
                        break
                    }
                }
            }
            return e.options.current_datas
        };
        e.init();
        return e
    };
    b.autoSubmit.defaultOptions = {
        partSubmit: 'partSubmit',
        allSubmit: 'autoSubmit',
        prior: '_prior'
    };
    b.fn.autoSubmit = function () {
        var a = Array.prototype.slice.call(arguments);
        return (new b.autoSubmit(a[0]))
    }
}) (jQuery);
(function () {
    var b = 'YZ,ZE,YW,WZ';
    jQuery.extend({
        checkSeatTypes: function () {
            if (xbChecked && xbChecked.length > 0) {
                for (var a = 0; a < xbChecked.length; a++) {
                    if (b.indexOf(xbChecked[a]) == - 1) {
                        return false
                    }
                }
            }
            return true
        },
        canSelectThisSeatType: function (h) {
            var a = false;
            if (passengerChecked && passengerChecked.length > 0) {
                var i = passengerChecked.length;
                for (var j = 0; j < i; j++) {
                    var g = passengerChecked[j];
                    if (g.passenger_type == ticket_submit_order.passenger_type.student) {
                        a = true;
                        break
                    }
                }
            }
            if (a) {
                if (b.indexOf(h) == - 1) {
                    return false
                }
            }
            return true
        }
    })
}) ();
