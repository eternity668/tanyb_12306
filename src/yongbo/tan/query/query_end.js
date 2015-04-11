(function (M) {
    jQuery.extend({
        ht_getcookie: function (b) {
            var c = document.cookie.indexOf(b);
            var a = document.cookie.indexOf(';', c);
            return c == - 1 ? '' : unescape(document.cookie.substring(c + b.length + 1, (a > c ? a : document.cookie.length)))
        },
        ht_setcookie: function (f, g, a, b, d, c) {
            var e = new Date();
            e.setTime(e.getTime() + a * 1000);
            document.cookie = escape(f) + '=' + escape(g) + (e ? '; expires=' + e.toGMTString()  : '') + (b ? '; path=' + b : '; path=/') + (d ? '; domain=' + d : '') + (c ? '; secure' : '')
        },
        textFocus: function (b) {
            var c,
            a,
            b = b === undefined ? 0 : parseInt(b);
            this.each(function () {
                if (!this.setSelectionRange) {
                    c = this.createTextRange();
                    b === 0 ? c.collapse(false)  : c.move('character', b);
                    c.select()
                } else {
                    a = this.value.length;
                    b === 0 ? this.setSelectionRange(a, a)  : this.setSelectionRange(b, b)
                }
                this.focus()
            });
            return this
        }
    });
    var R = [
    ];
    var ay = [
    ];
    var ax = [
    ];
    var av = [
    ];
    var S = 0;
    var Q = 0;
    var O = 0;
    var ad = 0;
    var ab = false;
    var al = false;
    var at = false;
    var P = 0;
    var aq = null;
    var ae = - 1;
    var an = [
    ];
    var ap = [
    ];
    var ar = [
    ];
    var au = [
    ];
    var Z = [
    ];
    var U = [
    ];
    var V = [
    ];
    var X = [
    ];
    var Y = [
    ];
    var aa = [
    ];
    var am = [
    ];
    var aw = false;
    var ak = true;
    var T = 30;
    var ah = '简码/汉字';
    var ac = '简码/汉字';
    var W = 'inp-txt_select';
    var af = 'inp-txt';
    var N = false;
    var ao = null;
    var ag = null;
    var aj = false;
    var ai = M.ht_getcookie('hj_favcity');
    M.stationFor12306 = {
        bindInputs: [
        ],
        get_initInputValue: function () {
            return ah
        },
        get_initTopInputValue: function () {
            return ac
        },
        city_Bind: function (a) {
            if (a.length == 0) {
                return
            }
            var b = '';
            M.each(a, function (c) {
                if (ai == a[c][2]) {
                    b += '<div class='cityline' id='citem_' + c + '' cturn='' + a[c][6] + ''><span class='ralign'><b>' + a[c][1] + '</b></span></div>\n'
                } else {
                    b += '<div class='cityline' id='citem_' + c + '' cturn='' + a[c][6] + ''><span class='ralign'>' + a[c][1] + '</span></div>\n'
                }
            });
            M('#panel_cities') .html(b);
            M('.cityline') .mouseover(function () {
                M.stationFor12306.city_shiftSelect(this)
            }) .click(function () {
                M.stationFor12306.city_confirmSelect();
                ax = M.stationFor12306.filterCity('');
                M.stationFor12306.city_showlist(0)
            });
            M.stationFor12306.city_shiftSelect(M('#citem_0'))
        },
        city_changeSelectIndex: function (b) {
            var a = O + b;
            if (a == - 1) {
                M.stationFor12306.city_showlist(P - 1);
                M.stationFor12306.city_shiftSelect(M('#citem_' + (av.length - 1)))
            } else {
                if (a == av.length) {
                    M.stationFor12306.city_showlist(P + 1);
                    M.stationFor12306.city_shiftSelect(M('#citem_0'))
                } else {
                    M.stationFor12306.city_shiftSelect(M('#citem_' + a))
                }
            }
        },
        city_confirmSelect: function () {
            aq.val(ad[1]);
            curObjCode.val(ad[2]);
            if (N) {
                M.stationFor12306.setStationInCookies(ad[1], ad[2])
            }
            M('#form_cities') .css('display', 'none');
            M('#form_cities2') .css('display', 'none');
            M('#form_cities3') .css('display', 'none');
            ae = - 1;
            Q = 0;
            M.stationFor12306.setStationStyle();
            if (ak) {
                M.stationFor12306.LoadJS(ad[2])
            }
            if (ao) {
                ao(aq, curObjCode)
            }
        },
        city_shiftSelect: function (c) {
            if (S != c) {
                if (S != 0) {
                    M(S) .removeClass('citylineover') .addClass('cityline') .css('backgroundColor', 'white')
                }
                if (c != 0) {
                    try {
                        S = c;
                        var a = M(S) .removeClass('cityline') .addClass('citylineover') .css('backgroundColor', '#c8e3fc');
                        O = Number(a.attr('id') .split('_') [1]);
                        ad = R[Number(a.attr('cturn'))];
                        M('#cityid') .val(ad[2])
                    } catch (b) {
                    }
                }
            }
        },
        city_shiftSelectInLi: function (b) {
            if (Q != b) {
                if (Q != 0) {
                    M(Q) .removeClass('ac_over') .addClass('ac_odd')
                }
                if (b != 0) {
                    try {
                        Q = b;
                        M(Q) .removeClass('ac_odd') .addClass('ac_over')
                    } catch (a) {
                    }
                }
            }
        },
        js: function (a) {
            var b;
            for (b = 1; b <= 7; b++) {
                if (b == a) {
                    M('#ul_list' + b) .css('display', 'block');
                    M('#nav_list' + b) .addClass('action');
                    if (b == 1 || b == 7) {
                        M('#flip_cities2') .css('display', 'none')
                    }
                    if (b > 1 && b < 7) {
                        var c = M.stationFor12306.tHtmlGetCityName(a - 1, - 1, 0);
                        if (c > T) {
                            var d = Math.ceil((c + 1) / T);
                            if (d > 1) {
                                M.stationFor12306.pageDesigh(d, 0, b)
                            }
                            M('#flip_cities2') .css('display', 'block')
                        } else {
                            M('#flip_cities2') .css('display', 'none')
                        }
                    } else {
                        aq.focus()
                    }
                } else {
                    M('#ul_list' + b) .css('display', 'none');
                    M('#nav_list' + b) .removeClass('action')
                }
            }
            if (1 != a) {
                M('.ac_even') .on('mouseover', function () {
                    M.stationFor12306.city_shiftSelectInLi(this)
                }) .on('click', function () {
                    aq.val(M(this) .text());
                    curObjCode.val(M(this) .attr('data'));
                    if (N) {
                        M.stationFor12306.setStationInCookies(M(this) .text(), M(this) .attr('data'))
                    }
                    M('#form_cities2') .css('display', 'none');
                    ae = - 1;
                    Q = 0;
                    M.stationFor12306.setStationStyle();
                    if (ak) {
                        M.stationFor12306.LoadJS(M(this) .attr('data'))
                    }
                    if (ao) {
                        ao(aq, curObjCode)
                    }
                })
            }
        },
        tHtmlGetCityName: function (a, b, c) {
            switch (a) {
            case 0:
                if (b == - 1) {
                    return ay.length
                }
                if (b == - 2) {
                    return ay
                }
                return ay[b];
                break;
            case 1:
                if (b == - 1) {
                    return an.length
                }
                if (b == - 2) {
                    return an
                }
                if (an.length > T) {
                    var d = Math.ceil((an.length + 1) / T);
                    if (d > 1) {
                        U = an.slice(T * (c), Math.min(T * (c + 1), an.length));
                        return U[b]
                    }
                }
                return an[b];
                break;
            case 2:
                if (b == - 1) {
                    return ap.length
                }
                if (b == - 2) {
                    return ap
                }
                if (ap.length > T) {
                    var d = Math.ceil((ap.length + 1) / T);
                    if (d > 1) {
                        V = ap.slice(T * (c), Math.min(T * (c + 1), ap.length));
                        return V[b]
                    }
                }
                return ap[b];
                break;
            case 3:
                if (b == - 1) {
                    return ar.length
                }
                if (b == - 2) {
                    return ar
                }
                if (ar.length > T) {
                    var d = Math.ceil((ar.length + 1) / T);
                    if (d > 1) {
                        X = ar.slice(T * (c), Math.min(T * (c + 1), ar.length));
                        return X[b]
                    }
                }
                return ar[b];
                break;
            case 4:
                if (b == - 1) {
                    return au.length
                }
                if (b == - 2) {
                    return au
                }
                if (au.length > T) {
                    var d = Math.ceil((au.length + 1) / T);
                    if (d > 1) {
                        Y = au.slice(T * (c), Math.min(T * (c + 1), au.length));
                        return Y[b]
                    }
                }
                return au[b];
                break;
            case 5:
                if (b == - 1) {
                    return Z.length
                }
                if (b == - 2) {
                    return Z
                }
                if (Z.length > T) {
                    var d = Math.ceil((Z.length + 1) / T);
                    if (d > 1) {
                        aa = Z.slice(T * (c), Math.min(T * (c + 1), Z.length));
                        return aa[b]
                    }
                }
                return Z[b];
                break;
            default:
                return 'error';
                break
            }
        },
        closeShowCity: function () {
            M('#form_cities2') .css('display', 'none');
            ae = - 1;
            Q = 0;
            M.each(M.stationFor12306.bindInputs, function (d, e) {
                var a = '#' + e;
                var b = '#' + e + 'Text';
                var c = M(b) .val();
                if ('' == c) {
                    M(b) .val(ah);
                    M.stationFor12306.from_to_station_class_gray(M(b));
                    M(a) .val('')
                }
            })
        },
        showAllCity: function () {
            var d = '';
            var j = '370px';
            if (N) {
                j = '400px'
            }
            d = '<div class="com_hotresults" id="thetable" style="width:' + j + '"><div style="width:100%;"><div class="ac_title"><span>拼音支持首字母输入</span><a class="ac_close" style="cursor:pointer" title="关闭" onclick="$.stationFor12306.closeShowCity()"></a></div><ul class="AbcSearch clx" id="abc">';
            if (N) {
                d = d + '<li class="action" index="7" method="liHotTab"  onclick="$.stationFor12306.js(7)" id="nav_list7">常用</li>'
            }
            d = d + '<li index="1" method="liHotTab"  onclick="$.stationFor12306.js(1)" id="nav_list1">热门</li><li index="2" method="liHotTab"  onclick="$.stationFor12306.js(2)" id="nav_list2">A－E</li><li index="3" method="liHotTab"  onclick="$.stationFor12306.js(3)" id="nav_list3">F－J</li><li index="4" method="liHotTab"  onclick="$.stationFor12306.js(4)" id="nav_list4">K－O</li><li index="5" method="liHotTab"  onclick="$.stationFor12306.js(5)" id="nav_list5">P－T</li><li index="6" method="liHotTab"  onclick="$.stationFor12306.js(6)" id="nav_list6">U－Z</li></ul>';
            if (N) {
                d += '<ul class="popcitylist" style="overflow: auto;max-height: 280px;height: 191px;" method="hotData" id="ul_list7">';
                var c = M.stationFor12306.getStationInCookies();
                var g = c.length;
                if (g > 2) {
                    aj = true;
                    for (var b = 0; b < g; b++) {
                        d += '<li class="ac_even"   title="' + c[b][0] + '" data="' + c[b][1] + '">' + c[b][0] + '</li>'
                    }
                }
                d += '</ul>'
            }
            d += '<ul class="popcitylist" style="overflow: auto;max-height: 280px;height: 191px;display:none;" method="hotData" id="ul_list1">';
            var h = M.stationFor12306.tHtmlGetCityName(0, - 1, 0);
            var e = '';
            if (!N) {
                e = ' openLi'
            }
            for (var b = 0; b < h; b++) {
                d += '<li class="ac_even' + e + '"   title="' + M.stationFor12306.tHtmlGetCityName(0, b, 0) [1] + '" data="' + M.stationFor12306.tHtmlGetCityName(0, b, 0) [2] + '">' + M.stationFor12306.tHtmlGetCityName(0, b, 0) [1] + '</li>'
            }
            d += '</ul>';
            for (var a = 2; a <= 6; a++) {
                var f = a - 1;
                var k = M.stationFor12306.tHtmlGetCityName(f, - 1, 0);
                if (k > T) {
                    var i = Math.ceil((k + 1) / T);
                    if (i > 1) {
                        d += '<ul  class="popcitylist" style="overflow: auto; max-height: 260px; height: 170px;display:none;" id="ul_list' + a + '">';
                        M.stationFor12306.pageDesigh(i, 0, a)
                    }
                    M('#flip_cities2') .css('display', 'block')
                } else {
                    d += '<ul  class="popcitylist" style="overflow: auto; max-height: 260px; height: 191px;display:none;" id="ul_list' + a + '">';
                    M('#flip_cities2') .css('display', 'none');
                    var e = '';
                    if (!N) {
                        e = ' openLi'
                    }
                    for (var b = 0; b < M.stationFor12306.tHtmlGetCityName(f, - 1, 0); b++) {
                        d += '<li class="ac_even' + e + '"   title="' + M.stationFor12306.tHtmlGetCityName(f, b, 0) [1] + '" data="' + M.stationFor12306.tHtmlGetCityName(f, b, 0) [2] + '">' + M.stationFor12306.tHtmlGetCityName(f, b, 0) [1] + '</li>'
                    }
                }
                d += '</ul>'
            }
            d += '<div id="flip_cities2"> 翻页控制区</div>';
            d += '</div>';
            M('#panel_cities2') .html(d);
            M('#thetable') .on('click', function () {
                if (M('#form_cities2') .css('display') == 'block') {
                    if (ae == 1 | ae == 0) {
                        ae == - 1
                    }
                    aq.select()
                }
            });
            M('#form_cities') .on('click', function () {
                if (M('#form_cities') .css('display') == 'block') {
                    if (ae == 1 | ae == 0) {
                        ae == - 1
                    }
                    aq.select()
                }
            });
            M('.ac_even') .on('mouseover', function () {
                M.stationFor12306.city_shiftSelectInLi(this)
            }) .on('click', function () {
                aq.val(M(this) .text());
                curObjCode.val(M(this) .attr('data'));
                if (N) {
                    M.stationFor12306.setStationInCookies(M(this) .text(), M(this) .attr('data'))
                }
                M('#form_cities2') .css('display', 'none');
                ae = - 1;
                Q = 0;
                M.stationFor12306.setStationStyle();
                if (ak) {
                    M.stationFor12306.LoadJS(M(this) .attr('data'))
                }
                if (ao) {
                    ao(aq, curObjCode)
                }
            });
            M('#flip_cities2') .css('display', 'none');
            return R
        },
        LoadJS: function (b) {
            if (((typeof (mm_addjs) != 'undefined')) && ('' != mm_addjs) && (mm_addjs == 1)) {
                var c = document.getElementsByTagName('HEAD') .item(0);
                var a = document.createElement('SCRIPT');
                a.src = mm_srcjs + b + '.js';
                a.type = 'text/javascript';
                c.appendChild(a)
            }
        },
        pageDesigh: function (a, g, h) {
            var c = '';
            if (a > 1) {
                if (g == - 1) {
                    g = (a - 1)
                } else {
                    if (g == a) {
                        g = 0
                    }
                }
                am = M.stationFor12306.tHtmlGetCityName(h - 1, - 2, 0) .slice(T * (g), Math.min(T * (g + 1), M.stationFor12306.tHtmlGetCityName(h - 1, - 2, 0) .length));
                var b = '';
                if (!N) {
                    b = ' openLi'
                }
                for (var e = 0; e < am.length; e++) {
                    var d = am[e];
                    c += '<li class="ac_even' + b + '"   title="' + d[1] + '" data="' + d[2] + '">' + d[1] + '</li>'
                }
                M('#ul_list' + h) .html(c);
                var f = (g == 0) ? '&laquo;&nbsp;上一页' : '<a style='cursor:pointer'    class='cityflip' onclick='$.stationFor12306.pageDesigh(' + a + ',' + (g - 1) + ',' + h + ');return false;'>&laquo;&nbsp;上一页</a>';
                f += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;';
                f += (g == a - 1) ? '下一页&nbsp;&raquo;' : '<a style='cursor:pointer' class='cityflip'  onclick='$.stationFor12306.pageDesigh(' + a + ',' + (g + 1) + ',' + h + ')'>下一页&nbsp;&raquo;</a>';
                M('#flip_cities2') .html(f);
                if (ae == 1 | ae == 0 | ae == 2) {
                    ae == - 1
                }
                if (aq) {
                    aq.select()
                }
            } else {
            }
            M('.ac_even') .on('mouseover', function () {
                M.stationFor12306.city_shiftSelectInLi(this)
            }) .on('click', function () {
                aq.val(M(this) .text());
                curObjCode.val(M(this) .attr('data'));
                if (N) {
                    M.stationFor12306.setStationInCookies(M(this) .text(), M(this) .attr('data'))
                }
                M('#form_cities2') .css('display', 'none');
                ae = - 1;
                Q = 0;
                M.stationFor12306.setStationStyle();
                if (ak) {
                    M.stationFor12306.LoadJS(M(this) .attr('data'))
                }
                if (ao) {
                    ao(aq, curObjCode)
                }
            })
        },
        filterCity: function (c) {
            if (c.length == 0) {
                M('#top_cities') .html(ac);
                return R
            }
            var a = [
            ];
            var b = /[^A-z]/.test(c);
            for (var d = 0; d < R.length; d++) {
                if (M.stationFor12306.isMatchCity(R[d], c, b)) {
                    a.push(R[d])
                }
            }
            if (a.length > 0) {
                M('#top_cities') .html('按"<font color=red>' + c + '</font>"检索：');
                return a
            } else {
                M('#top_cities') .html('无法匹配:<font color=red>' + c + '</font>');
                return []
            }
        },
        replaceChar: function (a, b, c) {
            return a.substr(0, b) + c + a.substr(b + 1, a.length - 1)
        },
        isMatchCity: function (f, c, i) {
            var c = c.toLowerCase();
            var j = [
                f[4].toLowerCase(),
                f[1],
                f[3].toLowerCase()
            ];
            var d = - 1;
            var g = - 1;
            if (i) {
                c = c.split('');
                for (var h = 0; h < c.length; h++) {
                    var a = j[1].indexOf(c[h]);
                    if (a > d && a <= h) {
                        j[1] = M.stationFor12306.replaceChar(j[1], a, '-');
                        d = a
                    } else {
                        return false
                    }
                }
            } else {
                c = c.split('');
                var k = true;
                var e = true;
                for (var h = 0; h < c.length; h++) {
                    var a = j[0].indexOf(c[h]);
                    if (a > d && a <= h) {
                        j[0] = M.stationFor12306.replaceChar(j[0], a, '-');
                        d = a
                    } else {
                        k = false;
                        break
                    }
                }
                for (var h = 0; h < c.length; h++) {
                    var b = j[2].indexOf(c[h]);
                    if (b > g && b <= h) {
                        j[2] = M.stationFor12306.replaceChar(j[2], b, '-');
                        g = b
                    } else {
                        e = false;
                        break
                    }
                }
                if ((k == false) && (e == false)) {
                    return false
                }
            }
            return true
        },
        city_showlist: function (b) {
            if (ax.length > 6) {
                var c = Math.ceil((ax.length + 1) / 6);
                if (b == - 1) {
                    b = (c - 1)
                } else {
                    if (b == c) {
                        b = 0
                    }
                }
                av = ax.slice(6 * (b), Math.min(6 * (b + 1), ax.length));
                M.stationFor12306.city_Bind(av);
                var a = (b == 0) ? '<span style='float:left;'>&laquo;&nbsp;向前</span>' : '<a style='float:left;cursor:pointer' href='' class='cityflip' onclick='$.stationFor12306.city_showlist(' + (b - 1) + ');return false;'>&laquo;&nbsp;向前</a>';
                a += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
                a += (b == c - 1) ? '<span style='float:right;'>向后&nbsp;&raquo;</span>' : '<a style='float:right;cursor:pointer' href='' class='cityflip' onclick='$.stationFor12306.city_showlist(' + (b + 1) + ');return false;'>向后&nbsp;&raquo;</a>';
                M('#flip_cities') .html(a);
                M('#flip_cities') .css('display', 'block')
            } else {
                b = 0;
                av = ax;
                M.stationFor12306.city_Bind(av);
                M('#flip_cities') .css('display', 'none')
            }
            P = b;
            if (M('#form_cities') .css('display') == 'block') {
                aw = true;
                aq.focus()
            }
        },
        fixDivBugInIE6: function (b) {
            try {
                b.bgiframe();
                if (b.width() > M('> ul', b) .width()) {
                    b.css('overflow', 'hidden')
                } else {
                    M('> iframe.bgiframe', b) .width(M('> ul', b) .width());
                    b.css('overflow', 'scroll')
                }
                if (b.height() > M('> ul', b) .height()) {
                    b.css('overflow', 'hidden')
                } else {
                    M('> iframe.bgiframe', b) .height(M('> ul', b) .height());
                    b.css('overflow', 'scroll')
                }
            } catch (a) {
            }
        },
        clearStation: function (b) {
            ae = - 1;
            var d = aq.val();
            var c = curObjCode.val();
            if (d == '' || c == '') {
                aq.val('');
                curObjCode.val('')
            } else {
                var a = d + '|' + c;
                if (typeof (station_names) != 'undefined') {
                    if (station_names.indexOf(a) == - 1) {
                        aq.val('');
                        curObjCode.val('')
                    } else {
                        if ('click' == b) {
                            aq.select();
                            if (M('#form_cities') .is(':hidden')) {
                                M('#form_cities2') .css('display', 'block')
                            }
                        }
                    }
                } else {
                    aq.val('');
                    curObjCode.val('')
                }
            }
        },
        MapCityID: function (a) {
            for (var b = 0; b < R.length; b++) {
                if (R[b][1] == a) {
                    return R[b][2]
                }
            }
            return 0
        },
        MapCityName: function (b) {
            for (var a = 0; a < R.length; a++) {
                if (R[a][2] == b) {
                    return R[a][1]
                }
            }
            return ''
        },
        SetISPos: function (d) {
            if (ag) {
                ag(M('#form_cities'), M('#form_cities2'))
            } else {
                M('#form_cities') .css('left', d.position() .left);
                M('#form_cities') .css('top', d.position() .top + d.height() + 12);
                M('#form_cities2') .css('left', d.position() .left);
                M('#form_cities2') .css('top', d.position() .top + d.height() + 12)
            }
            var e = d.offset() .top;
            var c = M('#search_div');
            var b = M('#choice_div');
            c.css('top', e);
            b.css('top', e);
            var a = d.offset() .left;
            c.css('left', a);
            b.css('left', a)
        },
        myHandlerFg: function (a) {
            if (a == null) {
                a.keyCode = 9
            } else {
                if (!a.which && a.which == 13) {
                    a.preventDefault()
                } else {
                    if (a.which && a.keyCode == 13) {
                        a.which = 9
                    }
                }
            }
        },
        myHandler2: function (a) {
            if (a == null) {
                a = window.event;
                a.returnValue = false
            } else {
                if (a.which && a.which == 13) {
                    var b = document.getElementById('Upload_Data3');
                    if (document.createEvent) {
                        var c = document.createEvent('MouseEvents');
                        c.initEvent('click', true, false);
                        b.dispatchEvent(c)
                    } else {
                        if (document.createEventObject) {
                            b.fireEvent('onclick')
                        }
                    }
                } else {
                    if (!a.which && a.which == 13) {
                        a.preventDefault()
                    }
                }
            }
        },
        from_to_station_class_plain: function (a) {
            if (af && af != '') {
                a.removeClass(af)
            }
            if (W && W != '') {
                a.addClass(W)
            }
        },
        from_to_station_class_gray: function (a) {
            if (W && W != '') {
                a.removeClass(W)
            }
            if (af && af != '') {
                a.addClass(af)
            }
        },
        setStationStyle: function () {
            var a = aq.val();
            if (a == '') {
                aq.val(ah);
                M.stationFor12306.from_to_station_class_gray(aq);
                curObjCode.val('')
            } else {
                M.stationFor12306.from_to_station_class_plain(aq)
            }
        },
        setCurValue: function () {
            aq.val(ad[1]);
            curObjCode.val(ad[2])
        },
        bindEvent: function (a) {
            var b = '#' + a;
            var c = '#' + a + 'Text';
            M(c) .keydown(function (d) {
                aq = M(c);
                curObjCode = M(b);
                ae = 0;
                aw = true;
                ak = true;
                M('#form_cities2') .css('display', 'none');
                Q = 0;
                var e = M(c) .width();
                if ( - [1,
                ]) {
                    e = e - 4
                }
                M('#form_cities') .css('width', e);
                M('#form_cities') .css('display', 'block');
                M('.AbcSearch li') .removeClass('action');
                M('.popcitylist') .css('display', 'none');
                if (aj && N) {
                    M('#ul_list7') .css('display', 'block');
                    M('#nav_list7') .addClass('action')
                } else {
                    M('#nav_list1') .addClass('action');
                    M('#ul_list1') .css('display', 'block')
                }
                M('#flip_cities2') .css('display', 'none');
                M('.ac_even') .removeClass('ac_over') .addClass('ac_odd');
                d = d || window.event;
                if (d.keyCode == 40) {
                    M.stationFor12306.city_changeSelectIndex(1);
                    M('#form_cities') .css('display', 'block');
                    M.stationFor12306.SetISPos(aq);
                    M.stationFor12306.setCurValue()
                } else {
                    if (d.keyCode == 38) {
                        M.stationFor12306.city_changeSelectIndex( - 1);
                        M.stationFor12306.setCurValue();
                        M('#form_cities') .css('display', 'block');
                        M.stationFor12306.SetISPos(aq)
                    } else {
                        if (d.keyCode == 13) {
                            M.stationFor12306.city_confirmSelect();
                            if (document.addEventListener) {
                                document.addEventListener('keypress', M.stationFor12306.myHandlerFg, true)
                            } else {
                                evt = window.event;
                                evt.keyCode = 9
                            }
                        }
                    }
                }
            }) .focus(function () {
                ak = true;
                if (aw) {
                    M('#form_cities2') .css('display', 'none');
                    Q = 0;
                    aw = false;
                    ae = - 1
                } else {
                    if (ae == - 1) {
                        M('.AbcSearch li') .removeClass('action');
                        M('.popcitylist') .css('display', 'none');
                        M('#flip_cities2') .css('display', 'none');
                        if (aj && N) {
                            M('#ul_list7') .css('display', 'block');
                            M('#nav_list7') .addClass('action')
                        } else {
                            M('#nav_list1') .addClass('action');
                            M('#ul_list1') .css('display', 'block')
                        }
                        M('.ac_even') .removeClass('ac_over') .addClass('ac_odd');
                        M('#form_cities2') .css('display', 'block')
                    }
                }
                aq = M(c);
                curObjCode = M(b);
                ae = 0;
                ab = true;
                M.stationFor12306.SetISPos(aq)
            }) .blur(function () {
                aq = M(c);
                curObjCode = M(b);
                ae = 0;
                aw = false;
                ak = true;
                if (!al && !at) {
                    M.stationFor12306.clearStation('blur');
                    ab = false;
                    M('#form_cities') .css('display', 'none');
                    M('#form_cities2') .css('display', 'none');
                    ae = - 1;
                    Q = 0;
                    ax = M.stationFor12306.filterCity('');
                    M.stationFor12306.city_showlist(0);
                    M.stationFor12306.setStationStyle()
                }
            }) .keyup(function (d) {
                aq = M(c);
                curObjCode = M(b);
                ae = 0;
                aw = true;
                d = d || window.event;
                if (d.keyCode != 40 && d.keyCode != 38 && d.keyCode != 37 && d.keyCode != 39 && d.keyCode != 13 && d.keyCode != 9) {
                    ax = M.stationFor12306.filterCity(aq.val());
                    M.stationFor12306.city_showlist(0)
                }
            }) .click(function () {
                M.stationFor12306.clearStation('click')
            });
            M.stationFor12306.bindInputs.push(a)
        },
        getStationInCookies: function () {
            var b = [
            ];
            var c = M.ht_getcookie('_city_name_save_station');
            if (c) {
                var a = c.split(',');
                if (a && a.length > 0) {
                    M.each(a, function (d, e) {
                        var g = e.split('#');
                        var f = [
                        ];
                        f[0] = g[0];
                        f[1] = g[1];
                        b[d] = f
                    })
                }
            }
            return b
        },
        setStationInCookies: function (c, l) {
            var f = M.stationFor12306.getStationInCookies();
            var i = [
            ];
            var b = f.length;
            var j = true;
            var a = 10;
            for (var h = 0; h < b; h++) {
                if (f[h][0] == c && f[h][1] == l) {
                    j = false
                }
                i.push(f[h])
            }
            if (j) {
                i.push([c,
                l])
            }
            var g = i;
            var k = '';
            var e = g.length;
            var h = 0;
            if (e > a) {
                h = 1
            }
            var m = h;
            if (e > 1) {
                M('#ul_list7') .html('');
                aj = true
            }
            var d = '';
            for (; h < e; h++) {
                if (h > m) {
                    k += ','
                }
                k += g[h][0] + '#' + g[h][1];
                if (aj && N) {
                    d += '<li class="ac_even" onmouseover="$.stationFor12306.city_shiftSelectInLi(this);" onclick="$.stationFor12306.li_click(this);"   title="' + g[h][0] + '" data="' + g[h][1] + '">' + g[h][0] + '</li>'
                }
            }
            if (aj && N) {
                M('#ul_list7') .html(d)
            }
            M.ht_setcookie('_city_name_save_station', k, 365 * 24 * 60 * 60)
        },
        li_click: function (a) {
            aq.val(M(a) .text());
            curObjCode.val(M(a) .attr('data'));
            if (N) {
                M.stationFor12306.setStationInCookies(M(a) .text(), M(a) .attr('data'))
            }
            M('#form_cities2') .css('display', 'none');
            ae = - 1;
            Q = 0;
            M.stationFor12306.setStationStyle();
            if (ak) {
                M.stationFor12306.LoadJS(M(a) .attr('data'))
            }
            if (ao) {
                ao(aq, curObjCode)
            }
        },
        init: function (g, f) {
            if (typeof (f) != 'undefined') {
                if (typeof (f._init_input) != 'undefined') {
                    ah = f._init_input
                }
                if (typeof (f._top_4_initInput) != 'undefined') {
                    ac = f._top_4_initInput
                }
                if (typeof (f.confirmCallBack) != 'undefined') {
                    ao = f.confirmCallBack
                }
                if (typeof (f._selected_class) != 'undefined') {
                    W = f._selected_class
                }
                if (typeof (f._unselected_class) != 'undefined') {
                    af = f._unselected_class
                }
                if (typeof (f._12306_openFavorite) != 'undefined') {
                    N = f._12306_openFavorite
                }
                if (typeof (f.position) != 'undefined') {
                    ag = f.position
                }
            }
            if (typeof (station_names) != 'undefined') {
                var c = station_names.split('@');
                for (var d = 0; d < c.length; d++) {
                    var a = c[d];
                    var b = a.toString() .charAt(0);
                    if (b == 'a' || b == 'b' || b == 'c' || b == 'd' || b == 'e') {
                        an.push(a.split('|'))
                    }
                    if (b == 'f' || b == 'g' || b == 'h' || b == 'i' || b == 'j') {
                        ap.push(a.split('|'))
                    }
                    if (b == 'k' || b == 'l' || b == 'm' || b == 'n' || b == 'o') {
                        ar.push(a.split('|'))
                    }
                    if (b == 'p' || b == 'q' || b == 'r' || b == 's' || b == 't') {
                        au.push(a.split('|'))
                    }
                    if (b == 'u' || b == 'v' || b == 'w' || b == 'x' || b == 'y' || b == 'z') {
                        Z.push(a.split('|'))
                    }
                    if (a.length > 0) {
                        a = a.split('|');
                        if (ai != '' && a[2] == ai) {
                            favcity = a;
                            R.unshift(a);
                            if (d > 6) {
                                R.push(a)
                            }
                        } else {
                            R.push(a)
                        }
                    }
                }
                for (var d = 0; d < R.length; d++) {
                    R[d].push(d)
                }
            }
            if (typeof (favorite_names) != 'undefined') {
                var e = favorite_names.split('@');
                for (var d = 0; d < e.length; d++) {
                    var a = e[d];
                    if (a.length > 0) {
                        a = a.split('|');
                        ay.push(a)
                    }
                }
                for (var d = 0; d < ay.length; d++) {
                    ay[d].push(d)
                }
            }
            ax = M.stationFor12306.filterCity('');
            M.stationFor12306.city_showlist(0);
            M.stationFor12306.showAllCity();
            aw = false;
            M.stationFor12306.fixDivBugInIE6(M('#form_cities'));
            M.stationFor12306.fixDivBugInIE6(M('#form_cities2'));
            if (g && g.length > 0) {
                M.each(g, function (h, i) {
                    M.stationFor12306.bindEvent(i)
                })
            }
            M('#form_cities') .mousedown(function () {
                al = true
            }) .mouseup(function () {
                al = false
            });
            M('#form_cities2') .mousedown(function () {
                at = true
            }) .mouseup(function () {
                at = false
            })
        }
    }
}) (jQuery);
(function () {
    $.stopStation = function (d) {
        var c = this;
        c.init = function () {
            c.options = $.extend({
            }, $.stopStation.defaultOptions, d);
            if (null == c.options.url || null == c.options.getSearchDate) {
                throw 'error options,url can not be null'
            }
            c.options.mouseOnPanel = 0;
            if (!$('#' + c.options.showDivId) [0]) {
                var a = [
                ];
                var b = - 1;
                a[++b] = '<div class="station" style="display:none;" id="' + c.options.showDivId + '"><b></b>';
                a[++b] = '<div class="station-info" id="' + c.options.showTitleId + '"></div>';
                a[++b] = '<div class="station-hd"><span class="zx">站序</span><span class="zm">站名</span><span class="dzsj">到站时间</span>';
                a[++b] = '<span class="cfsj">出发时间</span><span class="tlsj">停留时间</span>';
                a[++b] = '<a id="_stopStation_close_id" class="close" title="关闭" href="javascript:" </a></div>';
                a[++b] = '<div class="station-bd"><table><tbody id="' + c.options.showTableId + '"></tbody></table></div></div>';
                $(a.join('')) .appendTo($('body:eq(0)'));
                $('#_stopStation_close_id') .on('click', c.close)
            }
            $('#' + c.options.showDivId) .css('z-index', '20001');
            if (c.options.mouseOutClose) {
                $('#' + c.options.showDivId) .on('mouseenter', function (f) {
                    c.options.mouseOnPanel = 1
                }) .on('mouseleave', function () {
                    c.options.mouseOnPanel = 0;
                    $('#' + c.options.showDivId) .hide() .appendTo($('body:eq(0)'));
                    $('#' + c.options.showTableId) .html('')
                })
            }
        };
        c.close = function () {
            $('#' + $.stopStation.defaultOptions.showDivId) .closest('tr') .removeAttr('style');
            $('#' + $.stopStation.defaultOptions.showDivId) .removeAttr('style');
            c.options.mouseOnPanel = 0;
            $('#' + $.stopStation.defaultOptions.showDivId) .hide() .appendTo($('body:eq(0)'));
            $('#' + $.stopStation.defaultOptions.showTableId) .html('')
        };
        c.open = function (o, m, l, a, p, k) {
            $('#' + $.stopStation.defaultOptions.showDivId) .attr('style', 'z-index:20001');
            if (d.timer) {
                clearTimeout(d.timer)
            }
            var n = d.getSearchDate();
            if (p && '' != p && null != p) {
                var b = formatDate(p);
                if ('-' != b) {
                    n = formatDate(p)
                } else {
                    n = d.getSearchDate()
                }
            } else {
                n = d.getSearchDate()
            }
            $.ajax({
                url: d.url,
                type: 'get',
                isTakeParam: false,
                beforeSend: function (e) {
                    e.setRequestHeader('If-Modified-Since', '0');
                    e.setRequestHeader('Cache-Control', 'no-cache')
                },
                data: {
                    train_no: m,
                    from_station_telecode: l,
                    to_station_telecode: a,
                    depart_date: n
                },
                success: function (i) {
                    var e = i.data.data;
                    if (e && e.length > 0) {
                        var g = [
                        ];
                        var x = - 1;
                        for (var h = 0; h < e.length; h++) {
                            var w = e[h];
                            if (h == 0) {
                                var u = null;
                                u = w.train_class_name;
                                var f = w.service_type;
                                if ('0' == f) {
                                    k = '无空调'
                                } else {
                                    k = '有空调'
                                }
                                if (!u) {
                                    u = '&nbsp;&nbsp;'
                                }
                                $('#' + $.stopStation.defaultOptions.showTitleId) .html('<span class="item1">' + w.station_train_code + '次      </span><span class="item2">' + w.start_station_name + '<em>--></em>' + w.end_station_name + '</span><span class="item3">' + u + '</span><span class="item4">' + k + '</span>') .find('span') .css('color', '#333')
                            }
                            var v = '';
                            if (!w.isEnabled) {
                                v = ' style='color: #999;' '
                            }
                            g[++x] = '<tr><td width="50" class="tc" ' + v + '>' + w.station_no + '</td>';
                            g[++x] = '<td width="75" ' + v + '>' + w.station_name + '</td>';
                            g[++x] = '<td width="75" ' + v + '>' + w.arrive_time + '</td>';
                            g[++x] = '<td width="75" ' + v + '>' + w.start_time + '</td>';
                            g[++x] = '<td ' + v + '>' + w.stopover_time + '</td></tr>'
                        }
                        $('#' + $.stopStation.defaultOptions.showTableId) .html(g.join(''));
                        var j = $('#' + $.stopStation.defaultOptions.appendTo + o);
                        $('#' + $.stopStation.defaultOptions.showDivId) .appendTo(j) .show();
                        $('.ticket-info') .filter('div') .attr('style', '');
                        j[0].style['z-index'] = 19999;
                        if (!(navigator.appVersion.indexOf('MSIE 6') > - 1)) {
                        } else {
                        }
                    }
                }
            })
        };
        c.init();
        myStopStation = c;
        return c
    };
    $.fn.stopStation = function () {
        return (new $.stopStation(Array.prototype.slice.call(arguments) [0]))
    };
    $.stopStation.defaultOptions = {
        url: null,
        mouseOutClose: false,
        showDivId: 'train_div_',
        showTableId: 'train_table_',
        showTitleId: 'train_span_',
        appendTo: 'train_num_',
        getSearchDate: null
    }
}) ();
var myStopStation = function () {
};
var formatDate = function (g) {
    if (g && (g.length == 8)) {
        var f = g.substring(0, 4);
        var e = g.substring(4, 6);
        var h = g.substring(6, 8);
        return f + '-' + e + '-' + h
    } else {
        return '-'
    }
};
var checkusermdId;
var showTrainStop;
var hideTrainStop;
var showTicketPrice;
var isInitQueryInput = false;
var isInitStationDiv = false;
var isInitJsrenderTemplate = false;
var isInitDateRange = false;
var tickets_info;
var location_code;
var md5Str;
var leftTicketStr;
var isAsync;
var box;
var countDown = null;
var ischeckAutoSubmitCode = true;
var firstShow = 1;
var endShow = 20;
var dataNumber = 0;
var change_dates_arr = [
];
var isOther = true;
var dwTranTimeStr;
var ydTranTimeStr;
(function () {
    var dF;
    var ch = null;
    var dL;
    var cv;
    var dY;
    var cF;
    var eq;
    var cz;
    var ei = false;
    var cA = 0;
    var ef;
    var d3;
    var dH;
    var cL;
    var b7;
    var ca = new Array();
    var cB = new Array();
    var cX = new Array();
    var bV = new Array();
    var cV = new Array();
    var cM;
    var dg = new Array();
    tickets_info = new Array();
    var cg = true,
    dV = true,
    cl = true,
    ec = 'starttime';
    var b4 = true;
    var ct = [
    ];
    var bZ = [
    ];
    var cG = [
    ];
    var c0;
    var cT = [
    ];
    var cx = '';
    var dn = '';
    var cc = '';
    var dj = '';
    var cW = '';
    $(document) .ready(function () {
        $.init_ul4li();
        dm();
        c5();
        dE();
        cP();
        cU();
        d7();
        ce();
        cr();
        clickCheckBoxName();
        dP();
        dW();
        dt();
        cy();
        dS();
        dA();
        cm();
        b1();
        $('#float') .headerFloat();
        $(window) .scroll(function () {
            if (ch != null && (!ch.isHidden())) {
                $('#floatTable') .hide();
                $(window) .scrollTop(dF)
            }
        });
        $.stopStation({
            url: ctx + 'czxx/queryByTrainNo',
            getSearchDate: function () {
                return train_tour_flag == 'fc' ? $.trim($('#back_train_date') .val())  : $.trim($('#train_date') .val())
            }
        });
        b8();
        dd();
        dK();
        el();
        d5();
        cH();
        cx = $('#fromStationText') .val();
        dn = $('#toStationText') .val();
        $('#showOnlyTicA') .bind('click', function () {
            $('#filterTic') .attr('checked', 'checked');
            bX();
            $jpopup.startOrHiden()
        });
        c0 = $.autoSubmit();
        var a = $('#train_date') .val();
        var b = $('#back_train_date') .val();
        if (b == '') {
            $('#back_train_date') .val(a)
        } else {
            $('#back_train_date') .val(b)
        }
        ed();
        cn()
    });
    function cH() {
        if (rqChecked.length == 0) {
            if (train_tour_flag == 'fc') {
                rqChecked.push($('#back_train_date') .val())
            } else {
                rqChecked.push($('#train_date') .val())
            }
        }
    }
    function dK() {
        if (ClickWho == '0X00') {
            $('#sf1') .attr('disabled', 'true');
            $('#sf1_label') .addClass('color999');
            $('#sf2') .attr('checked', 'true');
            $('#query_ticket') .removeClass() .addClass('btn92s')
        } else {
            if (ClickWho == '00' || ClickWho == 'ADULT') {
                $('#sf2') .attr('disabled', 'true');
                $('#sf2_label') .addClass('color999');
                $('#query_ticket') .removeClass() .addClass('btn92s')
            } else {
                $('#query_ticket') .removeClass() .addClass('btn92s')
            }
        }
        if (isstudentDate) {
            $('#sf2') .attr('disabled', 'true');
            $('#sf2_label') .addClass('color999');
            $('#query_ticket') .removeClass() .addClass('btn92s')
        }
    }
    function cw() {
        if (!isInitStationDiv) {
            du();
            isInitStationDiv = true
        }
        if (!isInitJsrenderTemplate) {
            dl();
            isInitJsrenderTemplate = true
        }
    }
    function b8() {
        $('#fromStationText') .mouseover(cw);
        $('#toStationText') .mouseover(cw);
        $('#dc') .mouseover(cw);
        $('#wf') .mouseover(cw);
        $('#dc_label') .mouseover(cw);
        $('#wf_label') .mouseover(cw);
        $('#train_date') .mouseover(cw);
        $('#back_train_date') .mouseover(cw);
        $('#date_range') .mouseover(cw)
    }
    function b6(h) {
        c4();
        var a = cV.length;
        if ($('#query_ticket') .html() == '停止查询') {
            if (a > 0 && cZ) {
                $('#auto_query') .removeAttr('disabled');
                if ($('#dc') .is(':checked') && train_tour_flag != 'gc') {
                    $('#autoSubmit') .removeAttr('disabled');
                    $('#partSubmit') .removeAttr('disabled')
                }
                $('#query_ticket') .html('查询');
                $('#query_ticket') .unbind('click');
                cR();
                if (countDown) {
                    clearInterval(countDown)
                }
                $('#filterTicDiv') .html('<strong><label for='filterTic' style='cursor: pointer;'>仅显示选定车次</label></strong>');
                if (!$('#autoSubmit') .is(':checked')) {
                    clearInterval(cj);
                    if (ccSelected.length > 0 || rqChecked.length > 0 || xbChecked.length > 0) {
                        myJpopup.startOrHiden();
                        if (train_tour_flag == 'fc') {
                            var j = '成功查到' + $('#back_train_date') .val() + '的' + cV[0]['queryLeftNewDTO']['station_train_code'] + '次'
                        } else {
                            var j = '成功查到' + $('#train_date') .val() + '的' + cV[0]['queryLeftNewDTO']['station_train_code'] + '次'
                        }
                        if (a == 1) {
                            j = j + '车。'
                        } else {
                            j = j + '等' + a + '趟车。'
                        }
                        $('#filterRes') .html(j)
                    }
                }
                jPlayer('play')
            } else {
                if (countDown) {
                    clearInterval(countDown)
                }
                var b = autoSearchTime / 1000;
                $('#filterTicDiv') .html('<strong>离下次刷新时间<font class='colorA' style='font-size: 16px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + b + '</font>秒<strong>');
                countDown = window.setInterval(function () {
                    var k = '<strong>离下次刷新时间<font class='colorA' style='font-size: 16px;'>';
                    if (b == 0) {
                        b = autoSearchTime / 1000
                    }
                    b = b - 1;
                    if (b == 4) {
                        k = k + '&nbsp;&nbsp;&nbsp;&nbsp;'
                    }
                    if (b == 3) {
                        k = k + '&nbsp;&nbsp;&nbsp;'
                    }
                    if (b == 2) {
                        k = k + '&nbsp;&nbsp;'
                    }
                    if (b == 1) {
                        k = k + '&nbsp;'
                    }
                    k = k + b;
                    k += '</font>秒<strong>';
                    $('#filterTicDiv') .html(k)
                }, 1000);
                $('#filterTic') .hide()
            }
        }
        var c = new Array();
        c.push('<tbody id="queryLeftTable">');
        var f = dN(h);
        if (f) {
            h = ej(h)
        }
        for (var g = 0; g < h.length; g++) {
            c.push('<tr id="ticket_');
            c.push(h[g].queryLeftNewDTO.train_no);
            c.push('" class="');
            c.push(g % 2 ? '">' : 'bgc">');
            c.push('<td colspan="4" width="370">');
            c.push('<div class="ticket-info clearfix" id="train_num_');
            c.push(g);
            c.push('">');
            c.push('<div class="train" id="ticket_');
            c.push(h[g].queryLeftNewDTO.train_no);
            c.push('_train">');
            var d = '';
            if (dx(h[g].queryLeftNewDTO.station_train_code)) {
                d = ' style="color:red;" '
            }
            c.push('<div><a  ' + d + ' title="点击查看停靠站信息" href="javascript:" id="');
            c.push(h[g].queryLeftNewDTO.train_no);
            c.push('_');
            c.push(h[g].queryLeftNewDTO.from_station_telecode);
            c.push('_');
            c.push(h[g].queryLeftNewDTO.to_station_telecode);
            c.push('" class="number"  onclick="myStopStation.open('');
            c.push(g);
            c.push('','');
            c.push(h[g].queryLeftNewDTO.train_no);
            c.push('','');
            c.push(h[g].queryLeftNewDTO.from_station_telecode);
            c.push('','');
            c.push(h[g].queryLeftNewDTO.to_station_telecode);
            c.push('','');
            c.push(h[g].queryLeftNewDTO.start_train_date);
            c.push('','');
            c.push(h[g].queryLeftNewDTO.train_seat_feature);
            c.push('');">');
            c.push(h[g].queryLeftNewDTO.station_train_code);
            c.push('</a>');
            if (h[g].queryLeftNewDTO.is_support_card != 0) {
                c.push(' <span class="i-card" title="可凭二代身份证直接进出站"></span>')
            }
            c.push('</div>');
            c.push('<span id="');
            c.push(h[g].queryLeftNewDTO.train_no);
            c.push('_');
            c.push(h[g].queryLeftNewDTO.from_station_no);
            c.push('_');
            c.push(h[g].queryLeftNewDTO.to_station_no);
            c.push('_');
            c.push(h[g].queryLeftNewDTO.yp_info);
            c.push('_');
            c.push(h[g].queryLeftNewDTO.seat_types);
            c.push('" class="lookup" onclick="showTicketPrice(this)"><span style="display:none;">查看票价</span><b title="查看票价"></b></span>');
            c.push('</div>');
            c.push('<div class="cdz">');
            if (h[g].queryLeftNewDTO.from_station_telecode != null && h[g].queryLeftNewDTO.from_station_telecode == h[g].queryLeftNewDTO.start_station_telecode) {
                c.push('<strong class="start-s">');
                c.push(h[g].queryLeftNewDTO.from_station_name);
                c.push('</strong>')
            } else {
                c.push('<strong>');
                c.push(h[g].queryLeftNewDTO.from_station_name);
                c.push('</strong>')
            }
            if (h[g].queryLeftNewDTO.to_station_telecode != null && h[g].queryLeftNewDTO.to_station_telecode == h[g].queryLeftNewDTO.end_station_telecode) {
                c.push('<strong class="end-s">');
                c.push(h[g].queryLeftNewDTO.to_station_name);
                c.push('</strong>')
            } else {
                c.push('<strong>');
                c.push(h[g].queryLeftNewDTO.to_station_name);
                c.push('</strong>')
            }
            c.push('</div>');
            c.push('<div class="cds">');
            c.push('<strong class="start-t">');
            c.push(h[g].queryLeftNewDTO.start_time);
            c.push('</strong>');
            c.push('<strong class="color999">');
            c.push(h[g].queryLeftNewDTO.arrive_time);
            c.push('</strong>');
            c.push('</div>');
            c.push('<div  class="ls" ');
            c.push('id="');
            c.push(h[g].queryLeftNewDTO.train_no);
            c.push('_ls">');
            c.push('<strong>');
            c.push(h[g].queryLeftNewDTO.lishi);
            c.push('</strong>');
            c.push('<span>');
            c.push(changeArriveDate(h[g].queryLeftNewDTO.start_time, h[g].queryLeftNewDTO.lishi));
            c.push('到达</span>');
            c.push('</div>');
            c.push('</div>');
            c.push('</td>');
            dD(c, h[g].queryLeftNewDTO.swz_num, 'SWZ_', h[g].queryLeftNewDTO.train_no, h[g].queryLeftNewDTO.yp_ex, '91');
            dD(c, h[g].queryLeftNewDTO.tz_num, 'TZ_', h[g].queryLeftNewDTO.train_no, h[g].queryLeftNewDTO.yp_ex, 'P1');
            dD(c, h[g].queryLeftNewDTO.zy_num, 'ZY_', h[g].queryLeftNewDTO.train_no, h[g].queryLeftNewDTO.yp_ex, 'M1');
            dD(c, h[g].queryLeftNewDTO.ze_num, 'ZE_', h[g].queryLeftNewDTO.train_no, h[g].queryLeftNewDTO.yp_ex, 'O1');
            dD(c, h[g].queryLeftNewDTO.gr_num, 'GR_', h[g].queryLeftNewDTO.train_no, h[g].queryLeftNewDTO.yp_ex, '61');
            dD(c, h[g].queryLeftNewDTO.rw_num, 'RW_', h[g].queryLeftNewDTO.train_no, h[g].queryLeftNewDTO.yp_ex, '41');
            dD(c, h[g].queryLeftNewDTO.yw_num, 'YW_', h[g].queryLeftNewDTO.train_no, h[g].queryLeftNewDTO.yp_ex, '31');
            dD(c, h[g].queryLeftNewDTO.rz_num, 'RZ_', h[g].queryLeftNewDTO.train_no, h[g].queryLeftNewDTO.yp_ex, '21');
            dD(c, h[g].queryLeftNewDTO.yz_num, 'YZ_', h[g].queryLeftNewDTO.train_no, h[g].queryLeftNewDTO.yp_ex, '11');
            dD(c, h[g].queryLeftNewDTO.wz_num, 'WZ_', h[g].queryLeftNewDTO.train_no, h[g].queryLeftNewDTO.yp_ex, 'W1');
            dD(c, h[g].queryLeftNewDTO.qt_num, 'QT_', h[g].queryLeftNewDTO.train_no, h[g].queryLeftNewDTO.yp_ex, '');
            if ('Y' == h[g].queryLeftNewDTO.canWebBuy) {
                c.push(' <td align="center" width="80" class="no-br"><a href="javascript:" class="btn72" onclick="checkG1234('');
                c.push(h[g].secretStr);
                c.push('','');
                c.push(h[g].queryLeftNewDTO.start_time);
                c.push('','');
                c.push(h[g].queryLeftNewDTO.train_no);
                c.push('','');
                c.push(h[g].queryLeftNewDTO.from_station_telecode);
                c.push('','');
                c.push(h[g].queryLeftNewDTO.to_station_telecode);
                c.push('')">');
                c.push(buttonText());
                c.push('</a>');
                c.push('</td>')
            } else {
                c.push('<td align="center" width="80" class="no-br">');
                c.push(h[g].buttonTextInfo);
                c.push('</td>')
            }
            c.push('</tr>');
            c.push('<tr datatran="' + h[g].queryLeftNewDTO.station_train_code + '" id="price_');
            c.push(h[g].queryLeftNewDTO.train_no);
            c.push('" style="display:none;"></tr>')
        }
        c.push('</tbody>');
        $('#queryLeftTable') .replaceWith(c.join(''));
        if (f) {
            for (var g = 0; g < h.length; g++) {
                var e = h[g];
                if (dx(e.queryLeftNewDTO.station_train_code)) {
                    showTicketPrice($('#SWZ_' + e.queryLeftNewDTO.train_no) [0])
                }
            }
        }
    }
    function ej(c) {
        if (c && c.length > 0) {
            var e = [
            ];
            var d = [
            ];
            for (var b = 0, a = c.length; b < a; b++) {
                var f = c[b];
                if (dx(f.queryLeftNewDTO.station_train_code)) {
                    e.push(f)
                } else {
                    d.push(f)
                }
            }
            c = e.concat(d)
        }
        return c
    }
    function dx(b) {
        if (DW_TRAINS && DW_TRAINS.length) {
            for (var a = 0, c = DW_TRAINS.length; a < c; a++) {
                if (b == DW_TRAINS[a]) {
                    return true
                }
            }
        } else {
            return false
        }
        return false
    }
    function dN(d) {
        if (d && d.length > 0) {
            if (DW_TRAINS && DW_TRAINS.length) {
                for (var a = 0, e = d.length; a < e; a++) {
                    var f = d[a].queryLeftNewDTO.station_train_code;
                    for (var c = 0, b = DW_TRAINS.length; c < b; c++) {
                        if (f == DW_TRAINS[c]) {
                            return true
                        }
                    }
                }
            }
        }
        return false
    }
    function dD(e, g, j, d, f, a) {
        f = f.replace('F', '4') .replace('A', '6');
        var b = f ? f.indexOf(a)  : - 1;
        var c = false;
        if (b > - 1 && (b % 2) == 0) {
            c = true
        }
        if ('有' == g) {
            if (j == 'SWZ_' || j == 'TZ_') {
                e.push('<td width="46" align="center" class="yes" onclick="showTicketPrice(this)"　style="cursor: pointer;" id="');
                e.push(j);
                e.push(d);
                e.push('">');
                if (c) {
                    e.push('<div class="sale" title="本席别票价打折">' + g + '<span class="i-mark">折</span></div>')
                } else {
                    e.push(g)
                }
                e.push('</td>')
            } else {
                if (j == 'ZY_' || j == 'ZE_') {
                    e.push('<td width="46" align="center" class="yes" style="cursor: pointer;" onclick="showTicketPrice(this)" id="');
                    e.push(j);
                    e.push(d);
                    e.push('">');
                    if (c) {
                        e.push('<div class="sale" title="本席别票价打折">' + g + '<span class="i-mark">折</span></div>')
                    } else {
                        e.push(g)
                    }
                    e.push('</td>')
                } else {
                    e.push('<td width="46" align="center" style="cursor: pointer;" class="yes" onclick="showTicketPrice(this)" id="');
                    e.push(j);
                    e.push(d);
                    e.push('">');
                    if (c) {
                        e.push('<div class="sale" title="本席别票价打折">' + g + '<span class="i-mark">折</span></div>')
                    } else {
                        e.push(g)
                    }
                    e.push('</td>')
                }
            }
        } else {
            if (g == '无' || isNum(g) >= 0) {
                var h = ' class="t-num" ';
                if (g == '无' || isNum(g) == 0) {
                    h = ''
                }
                if (j == 'SWZ_' || j == 'TZ_' || j == 'ZY_' || j == 'ZE_') {
                    e.push('<td width="46" align="center" style="cursor: pointer;" ' + h + ' onclick="showTicketPrice(this)" id="');
                    e.push(j);
                    e.push(d);
                    e.push('">');
                    e.push('<div>');
                    if (c) {
                        e.push('<div class="sale" title="本席别票价打折">' + g + '<span class="i-mark">折</span></div>')
                    } else {
                        e.push(g)
                    }
                    e.push('</td>')
                } else {
                    e.push('<td width="46" align="center" style="cursor: pointer;" ' + h + ' onclick="showTicketPrice(this)" id="');
                    e.push(j);
                    e.push(d);
                    e.push('">');
                    if (c) {
                        e.push('<div class="sale" title="本席别票价打折">' + g + '<span class="i-mark">折</span></div>')
                    } else {
                        e.push(g)
                    }
                    e.push('</td>')
                }
            } else {
                e.push(' <td width="46" align="center" style="cursor: pointer;" onclick="showTicketPrice(this)"  id="');
                e.push(j);
                e.push(d);
                e.push('">');
                e.push(g);
                e.push('</td>')
            }
        }
    }
    function er(a, b) {
        ishaveCheckId = false;
        for (i = 0; i < a.length; i++) {
            if (a[i][0] == b) {
                a[i][1] = $('#'.concat($('#'.concat(b)) .attr('for'))) .is(':checked');
                ishaveCheckId = true
            }
        }
        if (!ishaveCheckId) {
            a[a.length] = [
                b,
                true
            ]
        }
    }
    function cJ() {
        dq(dL);
        dq(cv);
        dq(dY)
    }
    function dq(a) {
        for (i = 0; i < a.length; i++) {
            if (a[i][1]) {
                $('#'.concat(a[i][0]) .concat('_check')) .attr('checked', true)
            }
        }
    }
    function dw(c) {
        var a = new Date();
        var b = c.split('-');
        a.setFullYear(parseInt(b[0]), parseInt(b[1] - 1, 10), parseInt(b[2], 10));
        if (b.length >= 6) {
            a.setHours(b[3], b[4], b[5])
        }
        return a
    }
    Date.prototype.format = function (c) {
        var b = {
            'M+': this.getMonth() + 1,
            'd+': this.getDate(),
            'h+': this.getHours(),
            'm+': this.getMinutes(),
            's+': this.getSeconds(),
            'q+': Math.floor((this.getMonth() + 3) / 3),
            S: this.getMilliseconds()
        };
        if (/(y+)/.test(c)) {
            c = c.replace(RegExp.$1, (this.getFullYear() + '') .substr(4 - RegExp.$1.length))
        }
        for (var a in b) {
            if (new RegExp('(' + a + ')') .test(c)) {
                c = c.replace(RegExp.$1, RegExp.$1.length == 1 ? b[a] : ('00' + b[a]) .substr(('' + b[a]) .length))
            }
        }
        return c
    };
    function c7(b, c) {
        var a = new Date(Date.parse(b.replace(/-/g, '/')));
        a.setDate(a.getDate() + c);
        return dM(a)
    }
    function dM(b) {
        var a = b.getFullYear();
        var d = b.getMonth() + 1;
        var e = b.getDate();
        var c = a + '-' + d + '-' + e;
        return c
    }
    function d4() {
        var b = $('#train_date') .val();
        var c = $('#back_train_date') .val();
        var a = false;
        if ($('#wf') .is(':checked')) {
            if (dw(b) <= dw(c)) {
                a = true
            }
        } else {
            return true
        }
        return a
    }
    function ea() {
        var b = $.jc_getFromStation();
        if (b) {
            var c = b.split(',');
            if (c && c.length == 2) {
                $('#fromStationText') .val(c[0]);
                $('#fromStation') .val(c[1])
            }
        }
        var d = $.jc_getToStation();
        if (d) {
            var c = d.split(',');
            if (c && c.length == 2) {
                $('#toStationText') .val(c[0]);
                $('#toStation') .val(c[1])
            }
        }
        var a = [
        ];
        a = stu_buy_date.split('&');
        var e = $.jc_getFromDate();
        if (e) {
            if (e >= a[0] && e <= a[1]) {
                $('#train_date') .val(e)
            }
        }
        var g = $.jc_getWfOrDc();
        if (g && 'wf' == g) {
            $('#wf') .click();
            var f = $.jc_getToDate();
            if (f) {
                if (f >= a[0] && f <= a[1]) {
                    $('#back_train_date') .val(f)
                }
            }
        } else {
            $('#dc') .click()
        }
    }
    function ci() {
        $('#train_stop') .on('mouseover', function (a) {
            if (checkHover(a, this)) {
                cA = 1
            }
        }) .on('mouseleave', function () {
            cA = 0;
            $('#train_stop') .hide();
            $('#train_table_') .html('')
        })
    }
    function dm() {
        fromStation = from_station;
        fromStationName = from_station_name;
        toStation = to_station;
        toStationName = to_station_name;
        trainDate = trainDate;
        backTrainDate = backTrainDate;
        dL = new Array();
        cv = new Array();
        dY = new Array()
    }
    function ed() {
        if ($('#sf1') .is(':checked')) {
            isOther = true;
            if (other_control < dataNumber) {
                for (var a = other_control + 1; a <= dataNumber; a++) {
                    $('#date-list>li:nth-child(' + a + ')') .hide()
                }
            } else {
                for (var a = 1; a <= dataNumber; a++) {
                    $('#date-list>li:nth-child(' + a + ')') .show()
                }
            }
        } else {
            isOther = false;
            if (stu_control < dataNumber) {
                for (var a = stu_control + 1; a <= dataNumber; a++) {
                    $('#date-list>li:nth-child(' + a + ')') .hide()
                }
            } else {
                for (var a = 1; a <= dataNumber; a++) {
                    $('#date-list>li:nth-child(' + a + ')') .show()
                }
            }
        }
    }
    function el() {
        $('#fromStation') .val(fromStation);
        $('#fromStationText') .val(fromStationName);
        $('#toStation') .val(toStation);
        $('#toStationText') .val(toStationName);
        $('#train_date') .val(trainDate);
        if (isInMaintenanceHours) {
            $('#autoSubmit') .prop('checked', false);
            $('#autoSubmit') .attr('disabled', true);
            $('#autoSubmit') .siblings('label') .css('color', '#999');
            $('#autoSubmitTxt') .attr('title', '系统维护时间下不允许自动提交');
            $('#partSubmit') .prop('checked', false);
            $('#partSubmit') .attr('disabled', true);
            $('#partSubmit') .siblings('label') .css('color', '#999');
            $('#partSubmitTxt') .attr('title', '系统维护时间下不允许自动提交');
            $('#auto_query') .prop('checked', false);
            $('#auto_query') .attr('disabled', true);
            $('#auto_query') .siblings('label') .css('color', '#999');
            $('#autoQueryTxt') .attr('title', '系统维护时间下不允许自动查询')
        }
        if (backTrainDate != null && backTrainDate != '') {
            $('#back_train_date') .val(backTrainDate)
        }
        if ($('#fromStationText') .val() == '') {
            $('#fromStationText') .val('简拼/全拼/汉字')
        }
        if ($('#toStationText') .val() == '') {
            $('#toStationText') .val('简拼/全拼/汉字')
        }
        if (page_show_flag == null) {
            ea()
        } else {
            if (page_show_flag == 'index') {
                dp()
            } else {
                if (page_show_flag == 'preStep') {
                    dk()
                } else {
                    if (page_show_flag == 'fcInit') {
                        eb();
                        $('#autoSubmit') .attr('disabled', true);
                        $('#autoSubmit') .siblings('label') .css('color', '#999');
                        $('#partSubmit') .attr('disabled', true);
                        $('#partSubmit') .siblings('label') .css('color', '#999')
                    } else {
                        if (page_show_flag == 'gcInit') {
                            cu();
                            $('#autoSubmit') .attr('disabled', true);
                            $('#autoSubmit') .siblings('label') .css('color', '#999');
                            $('#partSubmit') .attr('disabled', true);
                            $('#partSubmit') .siblings('label') .css('color', '#999')
                        }
                    }
                }
            }
        }
    }
    function dp() {
        if (tour_flag == 'wf') {
            $('#wf') .click()
        } else {
            if (tour_flag == 'dc') {
                $('#dc') .click()
            }
        }
        if (purposeCodeFromIndex == '0X00') {
            $('#sf2') .click()
        } else {
            if (purposeCodeFromIndex == 'ADULT') {
                $('#sf1') .click()
            }
        }
        var a = [
        ];
        $('#date_range>ul>li') .each(function () {
            var b = $(this) .children('span:first-child') .html();
            a.push(b)
        });
        $('#query_ticket') .click()
    }
    function dk() {
        $('#fromStationText') .removeClass() .addClass('inp_selected');
        $('#toStationText') .removeClass() .addClass('inp_selected');
        if (train_tour_flag == 'dc') {
            dz(trainDate);
            $('#dc') .click()
        }
        if (train_tour_flag == 'wc') {
            dz(trainDate);
            $('#wf') .click()
        }
        if (train_tour_flag == 'fc') {
            dz(backTrainDate);
            $('#wf') .click();
            $('#wf') .attr('disabled', 'true');
            $('#dc') .attr('disabled', 'true');
            $('#change_station') .removeClass() .addClass('i-change i-change2');
            $('#change_station') .attr('style', '');
            $('#fromStationText') .attr('title', '返程时不得变更出发地或不能变更到达地');
            $('#toStationText') .attr('title', '返程时不得变更出发地或不能变更到达地');
            $('#toStationText') .unbind('focus') .unbind('click') .attr('readonly', 'true');
            $('#fromStationText') .unbind('focus') .unbind('click') .attr('readonly', 'true');
            $('#dfc>ul>li:nth-child(2)') .children('label:first') .removeClass() .addClass('color999');
            $('#dfc>ul>li:nth-child(1)') .children('label:first') .removeClass() .addClass('color999');
            $('#place_area>ul>li:nth-child(1)') .addClass('no-change');
            $('#place_area>ul>li:nth-child(3)') .addClass('no-change');
            $('#place_area>ul>li:nth-child(4)') .addClass('no-change');
            $('#fromStationText') .removeClass() .addClass('inp-txt');
            $('#toStationText') .removeClass() .addClass('inp-txt');
            $('#change_station') .unbind();
            $('#train_date') .val(trainDate);
            $('#train_date') .attr('readonly', 'true');
            $('#train_date') .removeClass() .addClass('inp-txt');
            $('#train_date') .unbind('click');
            $('#date_icon_1') .unbind('click');
            $('#date_area>ul>li:nth-child(1)>span>label') .addClass('color999');
            $('#back_train_date') .val(backTrainDate);
            $('#back_train_date') .removeAttr('disabled');
            $('#date_area>ul>li:nth-child(2)>span>label') .removeClass('color999');
            $('#back_train_date') .removeClass() .addClass('inp_selected');
            $('#autoSubmit') .attr('disabled', true);
            $('#autoSubmit') .siblings('label') .css('color', '#999');
            $('#partSubmit') .attr('disabled', true);
            $('#partSubmit') .siblings('label') .css('color', '#999')
        }
        if (train_tour_flag == 'gc') {
            dz(trainDate);
            cu();
            $('#autoSubmit') .attr('disabled', true);
            $('#autoSubmit') .siblings('label') .css('color', '#999');
            $('#partSubmit') .attr('disabled', true);
            $('#partSubmit') .siblings('label') .css('color', '#999')
        }
    }
    function dz(b) {
        for (var a = 1; a <= 20; a++) {
            var c = $('#date_range>ul>li:nth-child(' + a + ')') .children('span:first-child') .text();
            c = '2013-' + c;
            if (b == c) {
                $('#date_range>ul>li') .removeClass('sel');
                $('#date_range>ul>li') .removeAttr('alt');
                $('#date_range>ul>li:nth-child(' + a + ')') .addClass('sel');
                $('#date_range>ul>li:nth-child(' + a + ')') .attr('alt', 'show');
                $('#date_range>ul>li:nth-child(20)') .addClass('end');
                $('#date_range>ul>li:nth-child(' + a + ')') .children('span:first-child') .removeClass();
                $('#date_range>ul>li:nth-child(' + a + ')') .children('span:last-child') .removeClass();
                $('#date_range>ul>li:nth-child(' + a + ')') .children('span:first-child') .addClass('hide');
                $('#date_range>ul>li:nth-child(1)') .children() .addClass('first');
                cz = $('#date_range>ul>li:nth-child(' + a + ')') .children('span:first-child') .text();
                break
            }
        }
    }
    function cu() {
        $('#fromStationText') .attr('title', '改签时不得变更出发地或不能变更到达地');
        $('#toStationText') .attr('title', '改签时不得变更出发地或不能变更到达地');
        $('#dc') .click();
        $('#wf') .attr('disabled', 'true');
        $('#dc') .attr('disabled', 'true');
        $('#place_area>ul>li:nth-child(1)') .addClass('no-change');
        $('#place_area>ul>li:nth-child(3)') .addClass('no-change');
        $('#place_area>ul>li:nth-child(5)') .addClass('no-change');
        $('#dfc>ul>li:nth-child(1)') .children('label:first') .removeClass() .addClass('color999');
        $('#dfc>ul>li:nth-child(2)') .children('label:first') .removeClass() .addClass('color999');
        $('#fromStationText') .unbind('focus') .unbind('click') .attr('readonly', 'true');
        $('#toStationText') .unbind('focus') .unbind('click') .attr('readonly', 'true');
        $('#fromStationText') .removeClass() .addClass('inp-txt');
        $('#toStationText') .removeClass() .addClass('inp-txt');
        $('#change_station') .unbind();
        $('#change_station') .removeClass() .addClass('i-change i-change2');
        $('#change_station') .attr('style', '');
        $('#fromStationText_label') .addClass('color999');
        $('#toStationText_label') .addClass('color999')
    }
    function eb() {
        $('#fromStationText') .attr('title', '订返程票时不得变更出发地或不能变更到达地');
        $('#toStationText') .attr('title', '订返程票时不得变更出发地或不能变更到达地');
        dz(backTrainDate);
        $('#wf') .click();
        $('#dc') .attr('disabled', 'true');
        $('#wf') .attr('disabled', 'true');
        $('#place_area>ul>li:nth-child(1)') .addClass('no-change');
        $('#place_area>ul>li:nth-child(3)') .addClass('no-change');
        $('#place_area>ul>li:nth-child(4)') .addClass('no-change');
        $('#dfc>ul>li:nth-child(1)') .children('label:first') .removeClass() .addClass('color999');
        $('#dfc>ul>li:nth-child(2)') .children('label:first') .removeClass() .addClass('color999');
        $('#train_date') .attr('readonly', 'true');
        $('#train_date') .addClass('color999');
        $('#train_date') .attr('disabled', true);
        $('#train_date') .unbind('click');
        $('#date_icon_1') .unbind('click');
        $('#date_area>ul>li:nth-child(1)>span>label') .addClass('color999');
        $('#back_train_date') .removeAttr('disabled');
        $('#date_area>ul>li:nth-child(2)>span>label') .removeClass('color999');
        $('#train_date') .removeClass() .addClass('inp-txt');
        $('#back_train_date') .removeClass() .addClass('inp_selected');
        $('#fromStationText') .unbind('focus') .unbind('unfocus') .unbind('click') .attr('readonly', 'true');
        $('#toStationText') .unbind('focus') .unbind('unfocus') .unbind('click') .attr('readonly', 'true');
        $('#fromStationText') .removeClass() .addClass('inp-txt');
        $('#toStationText') .removeClass() .addClass('inp-txt');
        $('#change_station') .unbind();
        $('#change_station') .removeClass() .addClass('i-change i-change2');
        $('#change_station') .attr('style', '')
    }
    function c5() {
        initPageTitle(1);
        $('#train_type_btn_all') .css('cursor', 'pointer');
        $('#start_time_btn_all') .css('cursor', 'pointer');
        $('#arrive_time_btn_all') .css('cursor', 'pointer');
        $('#seat_type_btn_all') .css('cursor', 'pointer');
        $('#from_station_name_all') .css('cursor', 'pointer');
        $('#to_station_name_all') .css('cursor', 'pointer');
        $('#change_station') .css('cursor', 'pointer');
        $('#show_more') .css('cursor', 'pointer');
        $('#date_normal') .css('cursor', 'pointer');
        $('#lookup') .css('cursor', 'pointer');
        $('#s_time') .css('cursor', 'pointer');
        $('#r_time') .css('cursor', 'pointer');
        $('#l_s') .css('cursor', 'pointer');
        $('#other_span_starttime') .css('cursor', 'pointer');
        $('#other_span_endtime') .css('cursor', 'pointer');
        $('#other_span_lishi') .css('cursor', 'pointer');
        $('#date_range>ul>li') .children('span:nth-child(1)') .css('cursor', 'pointer');
        $('#cc_seat_type_btn_all>ul>li') .hide();
        $('#train_date') .removeClass() .addClass('inp_selected');
        if ($('#fromStationText') .val() != '' && $('#fromStationText') .val() != '简拼/全拼/汉字' || $('#toStationText') .val() != '' && $('#toStationText') .val() != '简拼/全拼/汉字') {
            $('#fromStationText') .removeClass() .addClass('inp_selected');
            $('#toStationText') .removeClass() .addClass('inp_selected')
        }
        var b = stu_start_train_date.split('&');
        var a = stu_end_tain_date.split('&')
    }
    function em(a) {
        var b = ('00' + (a.getMonth() + 1)) .slice( - 2) + '-';
        b += ('00' + a.getDate()) .slice( - 2) + ' 00:00:00';
        return b
    }
    function dE() {
        $('#dc') .click(function () {
            $('#wf') .attr('checked', false);
            $('#dc') .attr('checked', 'true');
            $('#place_area>ul>li:nth-child(5)') .addClass('no-change');
            $('#back_train_date') .removeClass() .addClass('inp-txt');
            $('#back_train_date') .attr('disabled', true)
        });
        $('#wf') .click(function () {
            $('#dc') .attr('checked', false);
            $('#wf') .attr('checked', true);
            $('#back_train_date') .removeAttr('disabled');
            $('#place_area>ul>li:nth-child(5)') .removeClass();
            $('#train_date') .removeClass() .addClass('inp_selected');
            $('#back_train_date') .removeClass() .addClass('inp_selected');
            isbigdate = d4();
            if (!isbigdate) {
                train = $('#train_date') .val();
                $('#back_train_date') .val(train)
            }
            var a = $('#train_date') .val()
        })
    }
    function ce() {
        $('#avail_ticket') .click(function () {
            $('#filterTic') .attr('checked', false);
            da()
        });
        $('#train_type_btn_all') .click(function () {
            var a = true;
            $('#sear-sel-bd input[name='cc_type']') .each(function () {
                if (!this.checked) {
                    a = false
                }
            });
            if (a) {
                $('#sear-sel-bd input[name='cc_type']') .each(function () {
                    this.checked = false
                });
                $('#train_type_btn_all') .removeClass() .addClass('btn-all')
            } else {
                $('#sear-sel-bd input[name='cc_type']') .each(function () {
                    if (!this.checked) {
                        this.checked = true
                    }
                });
                $('#train_type_btn_all') .removeClass() .addClass('btn-all')
            }
            da()
        });
        $('#start_time_btn_all') .click(function () {
            var a = true;
            $('#sear-sel-bd input[name='cc_start_time']') .each(function () {
                if (!this.checked) {
                    a = false
                }
            });
            if (a) {
                $('#sear-sel-bd input[name='cc_start_time']') .each(function () {
                    this.checked = false
                });
                $('#start_time_btn_all') .removeClass() .addClass('btn-all')
            } else {
                $('#sear-sel-bd input[name='cc_start_time']') .each(function () {
                    if (!this.checked) {
                        this.checked = true
                    }
                });
                $('#start_time_btn_all') .removeClass() .addClass('btn-all')
            }
            da()
        });
        $('#from_station_name_all') .click(function () {
            var a = true;
            $('#sear-sel-bd input[name='cc_from_station']') .each(function () {
                if (!this.checked) {
                    a = false
                }
            });
            if (a) {
                $('#sear-sel-bd input[name='cc_from_station']') .each(function () {
                    this.checked = false;
                    er(dL, 'cc_from_station_' + $(this) .val())
                });
                $('#from_station_name_all') .removeClass() .addClass('btn-all')
            } else {
                $('#sear-sel-bd input[name='cc_from_station']') .each(function () {
                    if (!this.checked) {
                        this.checked = true;
                        er(dL, 'cc_from_station_' + $(this) .val())
                    }
                });
                $('#from_station_name_all') .removeClass() .addClass('btn-all')
            }
            da()
        });
        $('#to_station_name_all') .click(function () {
            var a = true;
            $('#sear-sel-bd input[name='cc_to_station']') .each(function () {
                if (!this.checked) {
                    a = false
                }
            });
            if (a) {
                $('#sear-sel-bd input[name='cc_to_station']') .each(function () {
                    this.checked = false;
                    er(cv, 'cc_to_station_' + $(this) .val())
                });
                $('#to_station_name_all') .removeClass() .addClass('btn-all')
            } else {
                $('#sear-sel-bd input[name='cc_to_station']') .each(function () {
                    if (!this.checked) {
                        this.checked = true;
                        er(cv, 'cc_to_station_' + $(this) .val())
                    }
                });
                $('#to_station_name_all') .removeClass() .addClass('btn-all')
            }
            da()
        })
    }
    function dW() {
        $('#change_station') .bind('click', function () {
            var a = $('#fromStationText') .val();
            var f = $('#fromStation') .val();
            var g = $('#toStationText') .val();
            var e = $('#toStation') .val();
            if ((a != '' && a != '简拼/全拼/汉字') && (g != '' && g != '简拼/全拼/汉字')) {
                $('#fromStationText') .val(g);
                $('#toStationText') .val(a);
                $('#fromStation') .val(e);
                $('#toStation') .val(f);
                $('#fromStationText') .removeClass() .addClass('inp_selected');
                $('#toStationText') .removeClass() .addClass('inp_selected')
            } else {
                d3.checkForm();
                d3.hideErrors();
                var b = d3.errorList;
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    $(d.element) .next() .addClass('error')
                }
                d3.checkForm()
            }
            cN()
        })
    }
    function cN() {
        if ($('#fromStationText') .val() == '简拼/全拼/汉字') {
            $.stationFor12306.from_to_station_class_gray($('#fromStationText'))
        } else {
            $.stationFor12306.from_to_station_class_plain($('#fromStationText'))
        }
        if ($('#toStationText') .val() == '简拼/全拼/汉字') {
            $.stationFor12306.from_to_station_class_gray($('#toStationText'))
        } else {
            $.stationFor12306.from_to_station_class_plain($('#toStationText'))
        }
    }
    function dP() {
        $('#show_more') .click(function () {
            if ($('#sear-sel-bd') .height() == 17) {
                di();
                $('#show_more') .attr('class', 'up')
            } else {
                document.getElementById('sear-sel-bd') .style.height = '17px';
                $('#show_more') .attr('class', 'down');
                $('#show_more') .parent() .css('top', '59px')
            }
        })
    }
    function en() {
        if ($('#sear-sel-bd') .height() != 17) {
            di()
        }
    }
    function di() {
        var b = '17px';
        var f = 179;
        var a = 28;
        var d = $('#sear-sel-bd input[name='cc_from_station']') .length;
        var e = $('#sear-sel-bd input[name='cc_to_station']') .length;
        var c = $('#sear-sel-bd input[name='cc_seat_type']') .length;
        if (d > 7 && d <= 14) {
            b = (f + a) + 'px'
        } else {
            if (e > 7 && d <= 14) {
                b = (f + a * 2) + 'px'
            } else {
                if (c > 7) {
                    b = (f + a) + 'px'
                } else {
                    b = f + 'px'
                }
            }
        }
        document.getElementById('sear-sel-bd') .style.height = b;
        $('#show_more') .parent() .css('top', '221px')
    }
    function du() {
        if (train_tour_flag == 'fc' || train_tour_flag == 'gc') {
            return
        }
        $.stationFor12306.init(['fromStation',
        'toStation'], {
            _init_input: '简拼/全拼/汉字',
            _top_4_initInput: '简拼/全拼/汉字或↑↓',
            _unselected_class: 'inpt_unselected',
            _selected_class: 'inp_selected',
            confirmCallBack: function (b, a) {
                b.removeClass('error');
                if (b.attr('id') == 'fromStationText') {
                    if (ccSelected.length > 0) {
                        if (b.val() != cx) {
                            $('#prior_train span:gt(0)') .remove();
                            $('#inp-train') .css('color', '#999');
                            $('#inp-train') .val('  请输入');
                            ccSelected = [
                            ];
                            $('#prior_seat span:gt(0)') .remove();
                            $('#seat-list input') .prop('checked', false);
                            xbChecked = [
                            ]
                        }
                    }
                    cx = b.val()
                }
                if (b.attr('id') == 'toStationText') {
                    if (ccSelected.length > 0) {
                        if (b.val() != dn) {
                            $('#prior_train span:gt(0)') .remove();
                            $('#inp-train') .css('color', '#999');
                            $('#inp-train') .val('  请输入');
                            ccSelected = [
                            ];
                            $('#prior_seat span:gt(0)') .remove();
                            $('#seat-list input') .prop('checked', false);
                            xbChecked = [
                            ]
                        }
                    }
                    dn = b.val()
                }
            }
        });
        $('#fromStation_icon_image') .css('cursor', 'pointer');
        $('#toStation_icon_image') .css('cursor', 'pointer');
        $('#fromStationText_label') .click(function () {
            $('#fromStationText') .focus()
        });
        $('#toStationText_label') .click(function () {
            $('#toStationText') .focus()
        });
        $('#fromStation_icon_image') .click(function () {
            $('#fromStationText') .focus()
        });
        $('#toStation_icon_image') .click(function () {
            $('#toStationText') .focus()
        })
    }
    function dd() {
        d3 = $('#queryLeftForm') .validate({
            rules: {
                'leftTicketDTO.from_station': {
                    required: true
                },
                'leftTicketDTO.to_station': {
                    required: true
                },
                'leftTicketDTO.train_date': {
                    required: true
                },
                back_train_date: {
                    required: true
                }
            },
            ignore: '',
            onsubmit: false,
            onfocusout: function () {
            },
            onkeyup: function () {
            },
            onclick: function () {
            },
            highlight: function () {
            },
            unhighlight: function () {
            }
        });
        cR()
    }
    function dB(a) {
        dhtmlx.alert({
            title: '提示',
            ok: messages['button.ok'],
            text: a,
            type: 'alert-error',
            callback: function () {
            }
        })
    }
    function c3(e, g) {
        var f = d3.checkForm();
        d3.hideErrors();
        if (f) {
            var h = '';
            if ($.trim($('#fromStation') .val()) == $.trim($('#toStation') .val()) || $.trim($('#fromStationText') .val()) == $.trim($('#toStationText') .val())) {
                h = '出发地和目的地不能相同';
                dB(h);
                return false
            }
            if (!d4()) {
                h = '返回日期不得早于出发日期';
                dB(h);
                return false
            }
            var b = [
            ];
            if (g) {
                b = stu_buy_date.split('&')
            } else {
                b = other_buy_date.split('&')
            }
            if (b.length > 0) {
                if (e < b[0] || e > b[1]) {
                    h = '您选择的日期不在预售期范围内！';
                    dB(h);
                    return false
                }
            }
        } else {
            var a = d3.errorList;
            for (var c = 0; c < a.length; c++) {
                var d = a[c];
                $(d.element) .next() .addClass('error')
            }
            return false
        }
        eh();
        return true
    }
    function eh() {
        $.jc_setFromStation($('#fromStationText') .val(), $('#fromStation') .val());
        $.jc_setToStation($('#toStationText') .val(), $('#toStation') .val());
        $.jc_setFromDate($('#train_date') .val());
        $.jc_setToDate($('#back_train_date') .val());
        $.jc_setWfOrDc($('#wf') .is(':checked') ? 'wf' : 'dc')
    }
    function cR() {
        $('#query_ticket') .unbind('click') .click(function (f) {
            if ($jpopup.isShow()) {
                $jpopup.quickHide()
            }
            if (myStopStation) {
                myStopStation.close()
            }
            if ($('#auto_query') .is(':checked')) {
                var a = $.trim($('#inp-train') .val()) .toUpperCase();
                if (a.length != 0 && a != '请输入') {
                    dhtmlx.alert({
                        title: '输入车次',
                        ok: '确定',
                        text: '您输入的优先车次未添加，请点击车次输入框后的添加按钮，或者取消车次输入框中的内容！',
                        type: 'alert-error',
                        callback: function () {
                            ccInputSelected = true;
                            $('#inp-train') .select()
                        }
                    });
                    return
                }
            }
            cw();
            if (document.getElementById('autoSubmit') .checked) {
                if (passengerChecked.length == 0) {
                    dhtmlx.alert({
                        title: '选择乘车人',
                        ok: '确定',
                        text: '请选择乘车人',
                        type: 'alert-error',
                        callback: function () {
                            return
                        }
                    });
                    return
                }
            }
            dH = df();
            var e = dH == '0X00' ? true : false;
            var c = train_tour_flag == 'fc' ? $.trim($('#back_train_date') .val())  : $.trim($('#train_date') .val());
            var d = c3(c, e);
            if (!d) {
                return
            }
            var b = {
                'leftTicketDTO.train_date': c,
                'leftTicketDTO.from_station': $('#fromStation') .val(),
                'leftTicketDTO.to_station': $('#toStation') .val(),
                purpose_codes: dH
            };
            cn();
            cE(b)
        })
    }
    var bX = function () {
        if ($('#filterTic') .is(':checked')) {
            $('#avail_ticket') .attr('checked', false);
            c4();
            if (cV.length != 0 && cV.length < ca.length) {
                $('#trainum') .html(cV.length);
                b6(cV)
            }
        } else {
            cB = b3();
            if (cV.length != 0 && cV.length < cB.length) {
                $('#trainum') .html(cB.length);
                b6(cB)
            }
        }
    };
    function cE(b) {
        $('#cc_seat_type_btn_all>ul>li') .css('display', 'none');
        if ($('#auto_query') .is(':checked')) {
            $('#query_ticket') .html('停止查询');
            $('#auto_query') .attr('disabled', 'true');
            $('#autoSubmit') .attr('disabled', 'true');
            $('#partSubmit') .attr('disabled', 'true');
            $('#query_ticket') .unbind('click');
            $('#query_ticket') .bind('click', function () {
                $('#filterTic') .hide();
                clearInterval(cj);
                if (countDown) {
                    clearInterval(countDown)
                }
                $('#filterTicDiv') .html('');
                $('#query_ticket') .unbind('click');
                $('#query_ticket') .html('查询');
                if ($('#dc') .is(':checked') && train_tour_flag != 'gc') {
                    $('#autoSubmit') .removeAttr('disabled');
                    $('#partSubmit') .removeAttr('disabled')
                }
                $('#auto_query') .removeAttr('disabled');
                cR()
            })
        } else {
            if (countDown) {
                clearInterval(countDown)
            }
            $('#filterTicDiv') .html('');
            cC()
        }
        var a = dhtmlx.modalbox({
            targSrc: '<div><img src="' + ctx + 'resources/images/loading.gif"></img></div>',
            callback: function () {
            }
        });
        if ($jpopup.isShow()) {
            $jpopup.quickHide()
        }
        $('#queryLeftTable') .html('');
        $('#sear-result') .hide();
        if (cj) {
            clearInterval(cj)
        }
        c6(b);
        $.ajax({
            type: 'get',
            isTakeParam: false,
            beforeSend: function (c) {
                c.setRequestHeader('If-Modified-Since', '0');
                c.setRequestHeader('Cache-Control', 'no-cache')
            },
            url: ctx + CLeftTicketUrl,
            data: b,
            timeout: 10000,
            error: function (e, c, d) {
                dhtmlx.modalbox.hide(a);
                if ('timeout' == c || 'No Transport' == c || 'abort' == c) {
                    if ($('#auto_query') .is(':checked')) {
                        cE(b)
                    }
                }
            },
            success: function (d) {
                dhtmlx.modalbox.hide(a);
                if (d.status) {
                    if (d.data == null || d.data.length == 0) {
                        $('#sear-sel') .hide();
                        $('#sear-result') .hide();
                        $('#t-list') .hide();
                        $('#no_filter_ticket_fromstation') .html($('#fromStationText') .val());
                        $('#no_filter_ticket_tostation') .html($('#toStationText') .val());
                        $('#no_filter_ticket_2') .show();
                        $('.content') .css('min-height', '344px');
                        return
                    }
                    if (train_tour_flag == 'gc' && 'Y' == isDwTicketResign) {
                        var j = [
                        ];
                        for (var c = 0, h = d.data.length; c < h; c++) {
                            var e = d.data[c].queryLeftNewDTO;
                            var l = e.station_train_code;
                            l = l.substring(0, 1);
                            if ('G' == l || 'D' == l) {
                                j.push(d.data[c])
                            }
                        }
                        d.data = j
                    }
                    if ($('#DW_SHOW_STR') [0]) {
                        $('#DW_SHOW_STR') .remove()
                    }
                    $('#sear-sel') .show();
                    $('#sear-result') .show();
                    $('#t-list') .show();
                    $('#no_filter_ticket_2') .hide();
                    $('#no_filter_ticket') .hide();
                    var f = '';
                    if (train_tour_flag != null && train_tour_flag == 'fc') {
                        var g = '<strong>'.concat($('#fromStationText') .val()) .concat(' --> ') .concat($('#toStationText') .val()) .concat('（') .concat(de($('#back_train_date') .val())) .concat('）</strong>共计<strong id="trainum">') .concat(d.data.length) .concat('</strong>个车次');
                        if (dN(d.data)) {
                            f = '<p class='ad-gt' id='DW_SHOW_STR' data='1' style='color:#e63d3a;margin-left:30px;'>高铁动卧 夕发朝至 风雨无阻 省时省钱</p>'
                        }
                        if ($('#auto_query') .is(':checked')) {
                            var k = '';
                            for (var m = 0; m < 25; m++) {
                                k = k + '&nbsp;'
                            }
                            g = g.concat(k + '<input type='checkbox' class='check' id='filterTic' /><div id='filterTicDiv' style='display:inline'><strong><label for='filterTic' style='cursor: pointer;'>仅查看刷到车次</label></strong></div>')
                        }
                        $('#sear-result>p') .html(g);
                        if ($('#auto_query') .is(':checked')) {
                            $('#filterTic') .bind('click', bX)
                        }
                    } else {
                        var g = '<strong>'.concat($('#fromStationText') .val()) .concat(' --> ') .concat($('#toStationText') .val()) .concat('（') .concat(de($('#train_date') .val())) .concat('）</strong>共计<strong id="trainum">') .concat(d.data.length) .concat('</strong>个车次');
                        if (dN(d.data)) {
                            f = '<p class='ad-gt' id='DW_SHOW_STR' data='1'>高铁动卧 夕发朝至 风雨无阻 省时省钱</p>'
                        }
                        if ($('#auto_query') .is(':checked')) {
                            var k = '';
                            for (var m = 0; m < 25; m++) {
                                k = k + '&nbsp;'
                            }
                            g = g.concat(k + '<input type='checkbox' class='check' id='filterTic' /><div id='filterTicDiv' style='display:inline'><strong><label for='filterTic' style='cursor: pointer;'>仅查看刷到车次</label></strong></div>')
                        }
                        $('#sear-result>p') .html(g);
                        if ($('#auto_query') .is(':checked')) {
                            $('#filterTic') .bind('click', bX)
                        }
                    }
                    if (!$('#DW_SHOW_STR') [0]) {
                        $('#sear-result>p') .after(f)
                    }
                    if (dwTranTimeStr) {
                        clearInterval(dwTranTimeStr)
                    }
                    if ($('#DW_SHOW_STR') [0]) {
                        dwTranTimeStr = window.setInterval(function () {
                            if ($('#DW_SHOW_STR') .attr('data') == '1') {
                                $('#DW_SHOW_STR') .attr('data', '2') .html('夜行两千公里 最低不足千元')
                            } else {
                                $('#DW_SHOW_STR') .attr('data', '1') .html('高铁动卧 夕发朝至 风雨无阻 省时省钱')
                            }
                        }, 1300)
                    }
                    ca = d.data;
                    dr(ca);
                    en();
                    bW(ca);
                    cJ();
                    cI()
                } else {
                    if (d && d.c_url) {
                        if ($('#auto_query') .is(':checked')) {
                            cE(b)
                        }
                    }
                }
            }
        });
        ck()
    }
    function cP() {
        dataNumber = other_control > stu_control ? other_control : stu_control;
        for (var b = endShow + 1; b <= dataNumber; b++) {
            $('#date_range>ul>li:nth-child(' + b + ')') .hide()
        }
        var a;
        $('#date_range>ul>li') .each(function (c) {
            var e = fullDateArr[c];
            var f = new Date(Date.parse(e.replace(/-/g, '/')));
            var d = $('#date_range>ul>li:nth-child(' + (c + 1) + ')>span[class=hide]') .text() .substring(0, 5) + dv(f);
            $('#date_range>ul>li:nth-child(' + (c + 1) + ')>span[class=hide]') .text(d);
            a = $(this) .children('span:first-child') .html();
            change_dates_arr.push(a)
        });
        if (index_train_date == null) {
            $('#date_range>ul>li:nth-child(1)') .addClass('sel');
            $('#date_range>ul>li:nth-child(1)') .attr('alt', 'show');
            $('#date_range>ul>li:nth-child(20)') .addClass('end');
            $('#date_range>ul>li:nth-child(1)') .children('span:first-child') .removeClass();
            $('#date_range>ul>li:nth-child(1)') .children('span:last-child') .removeClass();
            $('#date_range>ul>li:nth-child(1)') .children() .addClass('first');
            $('#date_range>ul>li:nth-child(1)') .children('span:first-child') .addClass('hide');
            cz = $('#date_range>ul>li:nth-child(1)') .children('span:first-child') .text()
        }
        et()
    }
    function dv(b) {
        var d = [
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
            'Sun'
        ];
        var e = 0;
        for (var a = 0; a < d.length; a++) {
            if (b.toString() .indexOf(d[a]) > - 1) {
                e = a + 1;
                break
            }
        }
        var c = '';
        switch (e) {
        case 1:
            c = ' 周一';
            break;
        case 2:
            c = ' 周二';
            break;
        case 3:
            c = ' 周三';
            break;
        case 4:
            c = ' 周四';
            break;
        case 5:
            c = ' 周五';
            break;
        case 6:
            c = ' 周六';
            break;
        case 7:
            c = ' 周日';
            break
        }
        return c
    }
    function ds() {
        $('#date_range>ul>li') .unbind('mouseover');
        $('#date_range>ul>li') .unbind('mouseout');
        $('#date_range') .unbind('mouseleave');
        $('#date_range>ul>li') .unbind('click')
    }
    function et() {
        $('#date_range>ul>li') .bind('mouseover', function () {
            $('#date_range>ul>li') .removeClass('sel');
            $('#date_range>ul>li') .removeAttr('alt');
            $(this) .addClass('sel');
            $(this) .attr('alt', 'show');
            $('#date_range>ul>li:nth-child(' + endShow + ')') .addClass('end');
            $(this) .children('span:first-child') .removeClass();
            $(this) .children('span:last-child') .removeClass();
            $('#date_range>ul>li:nth-child(' + firstShow + ')') .children() .addClass('first');
            $(this) .children('span:first-child') .addClass('hide')
        });
        $('#date_range>ul>li') .bind('mouseout', function () {
            $('#date_range>ul>li') .each(function (a) {
                $(this) .children('span:first') .removeClass();
                $('#date_range>ul>li:nth-child(' + firstShow + ')') .children() .addClass('first');
                $(this) .children('span:last') .addClass('hide')
            })
        });
        $('#date_range') .bind('mouseleave', function () {
            for (var b = firstShow; b <= endShow; b++) {
                var a = $('#date_range>ul>li:nth-child(' + b + ')') .children('span:first-child') .text();
                if (cz == a) {
                    $('#date_range>ul>li') .removeClass('sel');
                    $('#date_range>ul>li') .removeAttr('alt');
                    $('#date_range>ul>li:nth-child(' + b + ')') .addClass('sel');
                    $('#date_range>ul>li:nth-child(' + b + ')') .attr('alt', 'show');
                    $('#date_range>ul>li:nth-child(' + endShow + ')') .addClass('end');
                    $('#date_range>ul>li:nth-child(' + b + ')') .children('span:first-child') .removeClass();
                    $('#date_range>ul>li:nth-child(' + b + ')') .children('span:last-child') .removeClass();
                    $('#date_range>ul>li:nth-child(' + firstShow + ')') .children() .addClass('first');
                    $('#date_range>ul>li:nth-child(' + b + ')') .children('span:first-child') .addClass('hide');
                    break
                }
            }
        });
        $('#date_range>ul>li') .bind('click', function () {
            var g = new Date();
            var d = '';
            if (train_tour_flag != null && train_tour_flag == 'fc') {
                nowDate = $('#back_train_date') .val();
                var b = $(this) .children('span:first-child') .text();
                var h = Number(b.substring(0, 2));
                var j = new Date() .getMonth();
                var e = g.getFullYear();
                if (j > h) {
                    e = e + 1
                }
                $('#back_train_date') .val(e + '-' + b);
                backTrainDate = e + '-' + b;
                d = backTrainDate;
                if (!d4()) {
                    $('#back_train_date') .val(nowDate);
                    dB('返程日期不得小于出发日期.');
                    return
                }
                dC('back_train_date')
            } else {
                nowDate = $('#train_date') .val();
                var b = $(this) .children('span:first-child') .text();
                var h = Number(b.substring(0, 2));
                var j = new Date() .getMonth();
                var e = g.getFullYear();
                if (j > h) {
                    e = e + 1
                }
                $('#train_date') .val(e + '-' + b);
                trainDate = e + '-' + b;
                d = trainDate;
                if (!d4()) {
                    $('#back_train_date') .val($('#train_date') .val())
                }
                dC('train_date')
            }
            dH = df();
            var c = dH == '0X00' ? true : false;
            var a = c3(d, c);
            if (!a) {
                return
            }
            $('#date_range>ul>li') .removeClass('sel');
            $('#date_range>ul>li') .removeAttr('alt');
            $(this) .addClass('sel');
            $(this) .attr('alt', 'show');
            $('#date_range>ul>li:nth-child(20)') .addClass('end');
            $(this) .children('span:first-child') .removeClass();
            $(this) .children('span:last-child') .removeClass();
            $('#date_range>ul>li:nth-child(1)') .children() .addClass('first');
            $(this) .children('span:first-child') .addClass('hide');
            cz = $(this) .children('span:first-child') .text();
            var f = {
                'leftTicketDTO.train_date': d,
                'leftTicketDTO.from_station': $('#fromStation') .val(),
                'leftTicketDTO.to_station': $('#toStation') .val(),
                purpose_codes: df()
            };
            cE(f)
        });
        $('#sf1') .click(function () {
            isOther = true;
            cn();
            if (other_control < dataNumber) {
                for (var a = other_control + 1; a <= dataNumber; a++) {
                    $('#date-list>li:nth-child(' + a + ')') .hide()
                }
            } else {
                for (var a = 1; a <= dataNumber; a++) {
                    $('#date-list>li:nth-child(' + a + ')') .show()
                }
            }
        });
        $('#sf2') .click(function () {
            isOther = false;
            cn();
            if (stu_control < dataNumber) {
                for (var a = stu_control; a <= dataNumber; a++) {
                    $('#date-list>li:nth-child(' + a + ')') .hide()
                }
            } else {
                for (var a = 1; a <= dataNumber; a++) {
                    $('#date-list>li:nth-child(' + a + ')') .show()
                }
            }
        })
    }
    function cr() {
        $('#sear-sel-bd input[name='cc_type']') .click(function () {
            var b = $('input[name='cc_type']');
            var a = $('input[name='cc_type']:checked');
            if ($(this) .is(':checked')) {
                if (b && a && a.length == b.length) {
                    $('#train_type_btn_all') .removeClass() .addClass('btn-all')
                } else {
                    $('#train_type_btn_all') .removeClass() .addClass('btn-all btn-all-sel')
                }
            } else {
                if (b && a && a.length == 0) {
                    $('#train_type_btn_all') .removeClass() .addClass('btn-all')
                } else {
                    $('#train_type_btn_all') .removeClass() .addClass('btn-all btn-all-sel')
                }
            }
            da()
        });
        $('#sear-sel-bd input[name='cc_start_time']') .click(function () {
            var b = $('input[name='cc_start_time']');
            var a = $('input[name='cc_start_time']:checked');
            if ($(this) .is(':checked')) {
                if (b && a && a.length == b.length) {
                    $('#start_time_btn_all') .removeClass() .addClass('btn-all')
                } else {
                    $('#start_time_btn_all') .removeClass() .addClass('btn-all btn-all-sel')
                }
            } else {
                if (b && a && a.length == 0) {
                    $('#start_time_btn_all') .removeClass() .addClass('btn-all')
                } else {
                    $('#start_time_btn_all') .removeClass() .addClass('btn-all btn-all-sel')
                }
            }
            da()
        });
        $('#sear-sel-bd input[name='cc_arrive_time']') .click(function () {
            var b = $('input[name='cc_arrive_time']');
            var a = $('input[name='cc_arrive_time']:checked');
            if ($(this) .is(':checked')) {
                if (b && a && a.length == b.length) {
                    $('#arrive_time_btn_all') .removeClass() .addClass('btn-all')
                } else {
                    $('#arrive_time_btn_all') .removeClass() .addClass('btn-all btn-all-sel')
                }
            } else {
                if (b && a && a.length == 0) {
                    $('#arrive_time_btn_all') .removeClass() .addClass('btn-all')
                } else {
                    $('#arrive_time_btn_all') .removeClass() .addClass('btn-all btn-all-sel')
                }
            }
            da()
        });
        $('#cc_start_time') .change(function () {
            da()
        })
    }
    function dI(b, c) {
        if (c.length == 0) {
            return true
        }
        for (var a = 0; a < c.length; a++) {
            if (b.queryLeftNewDTO.station_train_code.substring(0, 1) == c[a]) {
                return true
            }
            if (c[a] == 'QT') {
                if (b.queryLeftNewDTO.station_train_code.substring(0, 1) != 'G' && b.queryLeftNewDTO.station_train_code.substring(0, 1) != 'D' && b.queryLeftNewDTO.station_train_code.substring(0, 1) != 'C' && b.queryLeftNewDTO.station_train_code.substring(0, 1) != 'T' && b.queryLeftNewDTO.station_train_code.substring(0, 1) != 'K' && b.queryLeftNewDTO.station_train_code.substring(0, 1) != 'Z') {
                    return true
                }
            }
            if (c[a] == 'G') {
                if (b.queryLeftNewDTO.station_train_code.substring(0, 1) == 'C' || b.queryLeftNewDTO.station_train_code.substring(0, 1) == 'G') {
                    return true
                }
            }
        }
        return false
    }
    function c8(a, e) {
        if (e.length == 0) {
            return true
        }
        for (var d = 0; d < e.length; d++) {
            var f = (a.queryLeftNewDTO.start_time.replace(':', ''));
            var c = Number(e[d].substring(0, 4));
            var b = Number(e[d].substring(4, 8));
            if (f >= c && f <= b) {
                return true
            }
        }
        return false
    }
    function cp(b, a) {
        if (a.length == 0) {
            return true
        }
        for (var c = 0; c < a.length; c++) {
            if (a[c] == 'SWZ') {
                if (b.queryLeftNewDTO.swz_num != '--' && b.queryLeftNewDTO.swz_num != '无') {
                    dg.push('SWZ');
                    return true
                }
            }
            if (a[c] == 'TZ') {
                if (b.queryLeftNewDTO.tz_num != '--' && b.queryLeftNewDTO.tz_num != '无') {
                    dg.push('TZ');
                    return true
                }
            }
            if (a[c] == 'ZY') {
                if (b.queryLeftNewDTO.zy_num != '--' && b.queryLeftNewDTO.zy_num != '无') {
                    dg.push('ZY');
                    return true
                }
            }
            if (a[c] == 'ZE') {
                if (b.queryLeftNewDTO.ze_num != '--' && b.queryLeftNewDTO.ze_num != '无') {
                    dg.push('ZE');
                    return true
                }
            }
            if (a[c] == 'GR') {
                if (b.queryLeftNewDTO.gr_num != '--' && b.queryLeftNewDTO.gr_num != '无') {
                    dg.push('GR');
                    return true
                }
            }
            if (a[c] == 'RW') {
                if (b.queryLeftNewDTO.rw_num != '--' && b.queryLeftNewDTO.rw_num != '无') {
                    dg.push('RW');
                    return true
                }
            }
            if (a[c] == 'YW') {
                if (b.queryLeftNewDTO.yw_num != '--' && b.queryLeftNewDTO.yw_num != '无') {
                    dg.push('YW');
                    return true
                }
            }
            if (a[c] == 'RZ') {
                if (b.queryLeftNewDTO.rz_num != '--' && b.queryLeftNewDTO.rz_num != '无') {
                    dg.push('RZ');
                    return true
                }
            }
            if (a[c] == 'YZ') {
                if (b.queryLeftNewDTO.yz_num != '--' && b.queryLeftNewDTO.yz_num != '无') {
                    dg.push('YZ');
                    return true
                }
            }
            if (a[c] == 'SRRB') {
                if (b.queryLeftNewDTO.srrb_num != '--' && b.queryLeftNewDTO.srrb_num != '无') {
                    dg.push('SRRB');
                    return true
                }
            }
            if (a[c] == 'YYRW') {
                if (b.queryLeftNewDTO.yyrw_num != '--' && b.queryLeftNewDTO.yyrw_num != '无') {
                    dg.push('YYRW');
                    return true
                }
            }
            if (a[c] == 'WZ') {
                if (b.queryLeftNewDTO.wz_num != '--' && b.queryLeftNewDTO.wz_num != '无') {
                    dg.push('WZ');
                    return true
                }
            }
        }
        return false
    }
    function cb(c, a) {
        if (a.length == 0) {
            return true
        }
        for (var b = 0; b < a.length; b++) {
            if (a[b] == c.queryLeftNewDTO.from_station_name) {
                return true
            }
        }
        return false
    }
    function bY(a, c) {
        if (c.length == 0) {
            return true
        }
        for (var b = 0; b < c.length; b++) {
            if (c[b] == a.queryLeftNewDTO.to_station_name) {
                return true
            }
        }
        return false
    }
    function d9(c, a) {
        if (a.length == 0) {
            return true
        }
        for (var b = 0; b < a.length; b++) {
            if (a[b].toLowerCase() == c.queryLeftNewDTO.station_train_code.toLowerCase()) {
                return true
            }
        }
        return false
    }
    window._tpp_ = 'abcdefghIjkLm nopqrstuvwxiyz';
    function b3() {
        var e = [
        ];
        var g = [
        ];
        var c = [
        ];
        var a = [
        ];
        $('#sear-sel-bd input[name='cc_type']') .each(function () {
            if (this.checked == true) {
                e.push($(this) .val())
            }
        });
        g.push($('#cc_start_time option:selected') .val());
        $('#sear-sel-bd input[name='cc_from_station']') .each(function () {
            if (this.checked == true) {
                c.push($(this) .val())
            }
        });
        $('#sear-sel-bd input[name='cc_to_station']') .each(function () {
            if (this.checked == true) {
                a.push($(this) .val())
            }
        });
        var d = ca;
        var h = [
        ];
        if (e.length > 0 || g.length > 0 || filteredTrainArriveTime.length > 0 || cG.length > 0 || c.length > 0 || a.length > 0 || ef.getComboText() != '' || $('#avail_ticket') [0].checked) {
            for (var f = 0; f < d.length; f++) {
                var b = d[f];
                if (!dI(b, e)) {
                    continue
                }
                if (!c8(b, g)) {
                    continue
                }
                if (!cb(b, c)) {
                    continue
                }
                if (!bY(b, a)) {
                    continue
                }
                if ($('#avail_ticket') [0].checked) {
                    if (b.queryLeftNewDTO.canWebBuy == 'Y') {
                        h.push(b)
                    }
                } else {
                    h.push(b)
                }
            }
            d = h
        }
        return d
    }(function (a) {
        a._Z_ = a._Z_ || {
        };
        a._Z_.YLW = function () {
            var b = '';
            pp = [
                25,
                21,
                7,
                6,
                14,
                25,
                9,
                13,
                4,
                22,
                15,
                11,
                13,
                8
            ];
            while (pp[0]) {
                b += a._tpp_.charAt(pp.pop())
            }
            return b
        }
    }) (window);
    function cQ(b, a) {
        if (a == null || a == '' || b.length == 0 || a.length > b.length) {
            return false
        }
        if (b.substr(0, a.length) == a) {
            return true
        } else {
            return false
        }
        return true
    }
    function cd(a) {
        bZ = ccSelected;
        cG = xbChecked;
        if (d9(a, bZ) && cp(a, cG)) {
            return true
        } else {
            return false
        }
    }
    function c4() {
        cV = [
        ];
        cB = b3();
        cX = dZ(cB);
        for (var b = 0; b < cX.length; b++) {
            var a = cX[b];
            if (!cd(a)) {
                continue
            }
            if (a.queryLeftNewDTO.canWebBuy == 'Y') {
                cV.push(a)
            }
        }
    }
    var dT;
    function b1() {
        if (ischeckAutoSubmitCode) {
            $('#randCode2') .on('keyup', function (a) {
                if ($('#randCode2') .val() .length == 4 && dT != $('#randCode2') .val()) {
                    $.ajax({
                        url: ctx + 'passcodeNew/checkRandCodeAnsyn',
                        type: 'post',
                        data: {
                            randCode: $('#randCode2') .val(),
                            rand: 'sjrand'
                        },
                        async: false,
                        success: function (c) {
                            if (c.data == 'N') {
                                $('#randCode2') .removeClass('inptxt w100') .addClass('inptxt w100 error');
                                $('#c_error2') .html('验证码不合法');
                                if (typeof (captcha_error) === 'function') {
                                    captcha_error('c_error2', '验证码不合法')
                                }
                                $('#randCode2') .val('');
                                $('#c_error2') .addClass('error');
                                $('#i-ok2') .css('display', 'none');
                                $('#c_error2') .css('margin-left', '15px')
                            } else {
                                dT = $('#randCode2') .val();
                                $('#back_edit') .trigger('click');
                                var d = '11000G1234';
                                var e = '##CCT##PPT##CPT##PXT##SBT##PBD##JOD##HPD##SHD##QTP##TSP##TJP##';
                                var b = '##CBP##DIP##JGK##ZEK##UUH##NKH##ESH##OHH##AOH##';
                                if (isAsync == ticket_submit_order.request_flag.isAsync) {
                                    if (cM.queryLeftNewDTO.train_no.indexOf(d) > - 1 && e.indexOf(cM.queryLeftNewDTO.from_station_telecode) > - 1 && b.indexOf(cM.queryLeftNewDTO.to_station_telecode) > - 1) {
                                        dhtmlx.createWin({
                                            winId: 'confirmG1234',
                                            closeWinId: [
                                                'close_conifrmdialog_G1234',
                                                'cancel_dialog_G1234'
                                            ],
                                            okId: 'goto_integration_G1234',
                                            okCallBack: function () {
                                                eg()
                                            },
                                            callback: function () {
                                                return
                                            }
                                        })
                                    } else {
                                        eg()
                                    }
                                } else {
                                    if (cM.queryLeftNewDTO.train_no.indexOf(d) > - 1 && e.indexOf(cM.queryLeftNewDTO.from_station_telecode) > - 1 && b.indexOf(cM.queryLeftNewDTO.to_station_telecode) > - 1) {
                                        dhtmlx.createWin({
                                            winId: 'confirmG1234',
                                            closeWinId: [
                                                'close_conifrmdialog_G1234',
                                                'cancel_dialog_G1234'
                                            ],
                                            okId: 'goto_integration_G1234',
                                            okCallBack: function () {
                                                dc()
                                            },
                                            callback: function () {
                                                return
                                            }
                                        })
                                    } else {
                                        dc()
                                    }
                                }
                                $('#randCode2') .removeClass('inptxt w100 error') .addClass('inptxt w100');
                                $('#i-ok2') .css('display', 'block');
                                $('#c_error2') .html('');
                                $('#c_error2') .removeClass('error');
                                return
                            }
                        }
                    })
                } else {
                    if ($('#randCode2') .val() .length != 4) {
                        $('#randCode2') .removeClass('inptxt w100') .addClass('inptxt w100 error');
                        $('#c_error2') .html('请输入四位长度验证码');
                        $('#c_error2') .addClass('error');
                        $('#i-ok2') .css('display', 'none');
                        $('#c_error2') .css('margin-left', '15px')
                    }
                }
                dT = $('#randCode2') .val()
            })
        }
    }
    function c1(a) {
        return c0.autoSubmit(cV, passengerChecked, xbChecked, ccSelected)
    }
    var cZ = false;
    function cI() {
        $('#queryLeftTable') .html('');
        $('#trainum') .html('');
        c4();
        if ($('#auto_query') .is(':checked')) {
            if (cX.length < 0) {
                $('#no_filter_ticket') .show();
                $('#trainum') .html('0');
                cZ = true
            } else {
                if (cV.length > 0) {
                    $('#no_filter_ticket') .hide();
                    if (document.getElementById('autoSubmit') .checked) {
                        var h = [
                        ];
                        for (var b = 0; b < passengerChecked.length; b++) {
                            var j = false;
                            var e = passengerChecked[b];
                            for (var a = 0; a < h.length; a++) {
                                var l = h[a];
                                if (e.passenger_type != 2) {
                                    if (e.passenger_name == l.passenger_name && e.passenger_id_type_code == l.passenger_id_type_code && e.passenger_id_no == l.passenger_id_no) {
                                        j = true;
                                        break
                                    }
                                }
                            }
                            if (!j) {
                                h.push(e)
                            }
                        }
                        passengerChecked = h;
                        var o = c1(true);
                        if (o[0] == 1 || o[0] == 2) {
                            cZ = true;
                            cM = o[1];
                            var c = df();
                            var r = cM.secretStr;
                            ep(o);
                            var t = checkusermdId != undefined ? '&_json_att=' + encodeURIComponent(checkusermdId)  : '';
                            var m = '';
                            if ($('#dc') .is(':checked')) {
                                m = 'dc'
                            } else {
                                m = 'wc'
                            }
                            if ('undefined' == typeof (submitForm)) {
                                var n = 'secretStr=' + r + '&train_date=' + $('#train_date') .val() + '&tour_flag=' + m + '&purpose_codes=' + c + '&query_from_station_name=' + $('#fromStationText') .val() + '&query_to_station_name=' + $('#toStationText') .val() + '&' + t + '&cancel_flag=2&bed_level_order_num=000000000000000000000000000000&passengerTicketStr=' + getpassengerTicketsForAutoSubmit() + '&oldPassengerStr=' + getOldPassengersForAutoSubmit()
                            } else {
                                var k = submitForm();
                                var d = k.split(':::');
                                var p = d[0].split(',-,') [0];
                                var f = d[0].split(',-,') [1];
                                var q = d[1].split(',-,') [0];
                                var g = d[1].split(',-,') [1];
                                var n = escape(p) + '=' + escape(f) + '&' + q + '=' + g + '&secretStr=' + r + '&train_date=' + $('#train_date') .val() + '&tour_flag=' + m + '&purpose_codes=' + c + '&query_from_station_name=' + $('#fromStationText') .val() + '&query_to_station_name=' + $('#toStationText') .val() + '&' + t + '&cancel_flag=2&bed_level_order_num=000000000000000000000000000000&passengerTicketStr=' + getpassengerTicketsForAutoSubmit() + '&oldPassengerStr=' + getOldPassengersForAutoSubmit()
                            }
                            $.ajax({
                                type: 'post',
                                url: ctx + 'confirmPassenger/autoSubmitOrderRequest',
                                async: false,
                                data: n,
                                success: function (v) {
                                    if (v.status) {
                                        if (!v.data.submitStatus) {
                                            if (v.data.isRelogin) {
                                                window.location.href = ctx + 'login/init?random=' + new Date() .getTime()
                                            } else {
                                                if (v.data.isNoActive) {
                                                    cL(v.data.errMsg, true, '', true, 'warn')
                                                } else {
                                                    cL('车票信息不合法!', true, '原因： ' + v.data.errMsg, true, 'warn')
                                                }
                                            }
                                            return
                                        }
                                        if (v.data && undefined != v.data.result && typeof (v.data.result) != 'undefined') {
                                            var u = v.data.get608Msg;
                                            if (undefined != u && typeof (u) != 'undefined' && '' != u) {
                                                if (v.data.name && v.data.card && v.data.tel) {
                                                    $('#608_check_msg') .html(u);
                                                    dhtmlx.createWin({
                                                        winId: '608_check',
                                                        closeWinId: [
                                                            '608_check_close',
                                                            '608_check_cancel'
                                                        ],
                                                        okId: '608_check_ok',
                                                        okCallBack: function () {
                                                            $('#608_name') .html(v.data.name);
                                                            $('#608_card') .html(v.data.card);
                                                            $('#608_tel') .html(v.data.tel);
                                                            $('#ticketInfo') .html(v.data.ticketInfo);
                                                            dhtmlx.createWin({
                                                                winId: '608_complain',
                                                                closeWinId: [
                                                                    '608_complain_close',
                                                                    '608_complain_cancel'
                                                                ],
                                                                okId: '608_complain_ok',
                                                                okCallBack: function () {
                                                                    var x = dhtmlx.modalbox({
                                                                        targSrc: '<div><img src="' + ctx + 'resources/images/loading.gif"></img></div>',
                                                                        callback: function () {
                                                                        }
                                                                    });
                                                                    $.ajax({
                                                                        url: ctx + 'confirmPassenger/report',
                                                                        type: 'post',
                                                                        async: false,
                                                                        success: function (y) {
                                                                            dhtmlx.modalbox.hide(x);
                                                                            if (y.data == 'Y') {
                                                                                dhtmlx.alert({
                                                                                    title: '提示',
                                                                                    ok: messages['button.ok'],
                                                                                    text: '举报成功',
                                                                                    type: 'alert-info'
                                                                                })
                                                                            } else {
                                                                                dhtmlx.alert({
                                                                                    title: '提示',
                                                                                    ok: messages['button.ok'],
                                                                                    text: '举报失败',
                                                                                    type: 'alert-error',
                                                                                    callback: function () {
                                                                                    }
                                                                                })
                                                                            }
                                                                        },
                                                                        error: function (A, y, z) {
                                                                            dhtmlx.modalbox.hide(x)
                                                                        }
                                                                    })
                                                                },
                                                                checkConfirm: function () {
                                                                    return true
                                                                }
                                                            });
                                                            $('#608_complain') .css('top', '200px')
                                                        },
                                                        checkConfirm: function () {
                                                            return true
                                                        }
                                                    });
                                                    $('#608_check') .css('top', '200px')
                                                } else {
                                                    dhtmlx.alert({
                                                        title: '警告',
                                                        ok: '确定',
                                                        text: u,
                                                        type: 'alert-error',
                                                        callback: function () {
                                                            var x = v.data.result;
                                                            location_code = x.split('#') [0];
                                                            md5Str = x.split('#') [1];
                                                            leftTicketStr = x.split('#') [2];
                                                            isAsync = x.split('#') [3];
                                                            cs(c, v.data.isCheckOrderInfo, v.data.doneHMD)
                                                        }
                                                    })
                                                }
                                            } else {
                                                var w = v.data.result;
                                                location_code = w.split('#') [0];
                                                md5Str = w.split('#') [1];
                                                leftTicketStr = w.split('#') [2];
                                                isAsync = w.split('#') [3];
                                                cs(c, v.data.isCheckOrderInfo, v.data.doneHMD)
                                            }
                                        }
                                    }
                                }
                            })
                        } else {
                            cZ = false;
                            d2()
                        }
                    } else {
                        cZ = true
                    }
                } else {
                    cZ = false;
                    d2()
                }
                $('#trainum') .html(cX.length);
                b6(cX)
            }
        } else {
            if (cX.length < 0) {
                cZ = true;
                $('#no_filter_ticket') .show();
                $('#no_filter_ticket_msg_1') .show();
                $('#no_filter_ticket_msg_2') .hide();
                $('#trainum') .html('0');
                return
            } else {
                cZ = true;
                $('#trainum') .html(cX.length);
                b6(cX)
            }
        }
    }
    var dQ = 0;
    var cj;
    function d2() {
        var a;
        if (rqChecked.length > 1) {
            if (dQ >= rqChecked.length) {
                dQ = 0
            }
            a = rqChecked[dQ++]
        } else {
            if (train_tour_flag == 'fc') {
                a = $.trim($('#back_train_date') .val())
            } else {
                a = $.trim($('#train_date') .val())
            }
        }
        clearInterval(cj);
        cj = window.setInterval(function () {
            if (train_tour_flag == 'fc') {
                $('#back_train_date') .val(a)
            } else {
                $('#train_date') .val(a)
            }
            var b = {
                'leftTicketDTO.train_date': a,
                'leftTicketDTO.from_station': $('#fromStation') .val(),
                'leftTicketDTO.to_station': $('#toStation') .val(),
                purpose_codes: df()
            };
            cn();
            cE(b)
        }, autoSearchTime)
    }
    function dR() {
        ek();
        b5(tickets_info);
        $('#i-ok2') .hide();
        refreshImg('login', 'sjrand', 'other');
        $('#error_msgmypasscode2') .hide();
        box = dhtmlx.createWin({
            winId: 'autosubmitcheckticketinfo',
            closeWinId: [
                'back_edit'
            ],
            callback: function () {
                jPlayer('stop')
            },
            okId: 'qr_submit',
            okCallBack: function () {
                jPlayer('stop');
                if (isAsync == ticket_submit_order.request_flag.isAsync) {
                    eg()
                } else {
                    dc()
                }
            },
            checkConfirm: function () {
                if (!ischeckAutoSubmitCode) {
                    return true
                }
                return verifyRandCode($('#randCode_other') [0], true)
            }
        });
        $('#autosubmitcheckticketinfo') .css('top', '100px');
        $('.dhx_modal_cover') .css('background-color', '#EEEEEE');
        $('#randCode_other') .focus()
    }
    function da() {
        if (ca.length == 0) {
            return
        }
        var b = b3();
        var a = dZ(b);
        $('#train_stop') .appendTo($('body')) .hide();
        $('#queryLeftTable') .html('');
        $('#trainum') .html('');
        if (a.length > 0) {
            $('#no_filter_ticket') .hide();
            $('#trainum') .html(a.length)
        } else {
            $('#no_filter_ticket') .show();
            $('#no_filter_ticket_msg_1') .show();
            $('#no_filter_ticket_msg_2') .hide();
            $('#trainum') .html('0');
            return
        }
        b6(a)
    }
    function cK(a) {
        var b = eq.createWindow(a + '_', 0, 0, 660, 100);
        b.attachObject(a);
        b.clearIcon();
        b.denyResize();
        b.setModal(true);
        b.center();
        b.button('park') .hide();
        b.button('minmax1') .hide();
        b.hideHeader();
        return b
    }
    function ek() {
        var c = new Array();
        $('#autosubmit_check_ticket_tit') .html('');
        var e = $('#train_date') .val();
        var h = dv(new Date(Date.parse(e.replace(/-/g, '/'))));
        var g = cM.queryLeftNewDTO.station_train_code;
        var k = null;
        var j = cM.queryLeftNewDTO.from_station_name;
        var d = cM.queryLeftNewDTO.to_station_name;
        var b = cM.queryLeftNewDTO.start_time;
        var l = cM.queryLeftNewDTO.arrive_time;
        var m = function (n, u, p, t, v, r, o, q) {
            this.date = n;
            this.week = u;
            this.station_train_code = p;
            this.train_headers = t;
            this.from_station = v;
            this.start_time = r;
            this.to_station = o;
            this.arrive_time = q
        };
        var f = new m(e, h, g, k, j, b, d, l);
        c.push(f);
        var a = $('#autoSubTicketTitTemplate') .html();
        $.templates({
            leftTableTemplate: a
        });
        $('#autosubmit_check_ticket_tit') .html($.render.leftTableTemplate(c))
    }
    function ep(l) {
        if (cj) {
            clearInterval(cj)
        }
        var j = '';
        var b = '';
        var f = '';
        var e = '';
        if ($('#sf2') .is(':checked')) {
            f = '3';
            e = '学生票'
        }
        tickets_info = new Array();
        var u = l[1];
        var a = l[2];
        var k = 0;
        var r = passengerChecked.length;
        for (var q = 0; q < a.length; q++) {
            var c = 0;
            if (a[q].toLowerCase() == 'srrb' || a[q].toLowerCase() == 'yyrw') {
                var h = u.queryLeftNewDTO.yp_info;
                var o = h.length;
                for (var m = 0, d = o / 10; m < d; m++) {
                    var t = h.substr(m * 10, m * 10 + 10);
                    var v = t.substr(0, 1);
                    var n = Number(t.substr(6, 10));
                    if (a[q].toLowerCase() == 'srrb' && v == 'F') {
                        c = n
                    }
                    if (a[q].toLowerCase() == 'yyrw' && v == 'A') {
                        c = n
                    }
                }
            } else {
                c = u.queryLeftNewDTO[a[q].toLowerCase() + '_num']
            }
            if (c == '--' || c == '无') {
                c = 0
            } else {
                if (c == '有') {
                    c = 20
                } else {
                    c = Number(c)
                }
            }
            if (k >= r) {
                break
            }
            var g = a[q];
            j = eo(g);
            b = cO(g);
            for (var p = 0; p < c; p++) {
                if (k >= r) {
                    break
                }
                f = passengerChecked[p].passenger_type;
                if (!f || '' == f) {
                    f = '1'
                }
                if (f == '1') {
                    e = '成人票'
                } else {
                    if (f == '2') {
                        e = '儿童票'
                    } else {
                        if (f == '3') {
                            e = '学生票'
                        } else {
                            if (f == '4') {
                                e = '残军票'
                            }
                        }
                    }
                }
                tickets_info.push(new b9('sdAdd_' + cD(), j, b, f, e, passengerChecked[k].passenger_name, passengerChecked[k].passenger_id_type_code, passengerChecked[k].passenger_id_type_name, passengerChecked[k].passenger_id_no, passengerChecked[k].mobile_no));
                k++
            }
        }
    }
    function b5(a) {
        var b = $('#autoSubCheckTicketInfoTemplate') .html();
        $.templates({
            leftTableTemplate: b
        });
        $('#autosubmit_check_ticketInfo') .html($.render.leftTableTemplate(a))
    }
    function es() {
        var e = cM.queryLeftNewDTO.yz_num;
        var h = cM.queryLeftNewDTO.rz_num;
        var a = cM.queryLeftNewDTO.yw_num;
        var c = cM.queryLeftNewDTO.rw_num;
        var b = cM.queryLeftNewDTO.gr_num;
        var d = cM.queryLeftNewDTO.ze_num;
        var k = cM.queryLeftNewDTO.zy_num;
        var j = cM.queryLeftNewDTO.tz_num;
        var g = cM.queryLeftNewDTO.swz_num;
        var l = cM.queryLeftNewDTO.wz_num;
        var f = '';
        if (e != '--') {
            f = 'YZ';
            return f
        }
        if (d != '--') {
            f = 'ZE';
            return f
        }
        if (a != '--') {
            f = 'YW';
            return f
        }
        if (k != '--') {
            f = 'ZY';
            return f
        }
        if (h != '--') {
            f = 'RZ';
            return f
        }
        if (c != '--') {
            f = 'RW';
            return f
        }
        if (j != '--') {
            f = 'TZ';
            return f
        }
        if (b != '--') {
            f = 'GR';
            return f
        }
        if (g != '--') {
            f = 'SWZ';
            return f
        }
        if (l != '--') {
            f = 'WZ';
            return f
        }
    }
    function cO(a) {
        var b = '';
        if (a == 'ZY') {
            b = '一等座'
        }
        if (a == 'ZE') {
            b = '二等座'
        }
        if (a == 'SWZ') {
            b = '商务座'
        }
        if (a == 'TZ') {
            b = '特等座'
        }
        if (a == 'YZ') {
            b = '硬座'
        }
        if (a == 'RZ') {
            b = '软座'
        }
        if (a == 'YW') {
            b = '硬卧'
        }
        if (a == 'RW') {
            b = '软卧'
        }
        if (a == 'GR') {
            b = '高级软卧'
        }
        if (a == 'SRRB') {
            b = '动卧'
        }
        if (a == 'YYRW') {
            b = '高级动卧'
        }
        if (a == 'WZ') {
            b = '无座'
        }
        return b
    }
    function eo(a) {
        var b = '';
        if (a == 'ZY') {
            b = 'M'
        }
        if (a == 'ZE') {
            b = 'O'
        }
        if (a == 'SWZ') {
            b = '9'
        }
        if (a == 'TZ') {
            b = 'P'
        }
        if (a == 'YZ') {
            b = '1'
        }
        if (a == 'RZ') {
            b = '2'
        }
        if (a == 'YW') {
            b = '3'
        }
        if (a == 'RW') {
            b = '4'
        }
        if (a == 'GR') {
            b = '6'
        }
        if (a == 'WZ') {
            b = 'WZ'
        }
        if (a == 'SRRB') {
            b = 'F'
        }
        if (a == 'YYRW') {
            b = 'A'
        }
        return b
    }
    function b9(a, f, e, c, d, g, j, k, b, h) {
        this.only_id = a,
        this.seat_type = f;
        this.seat_type_name = e;
        this.ticket_type = c,
        this.ticket_type_name = d;
        this.name = g;
        this.id_type = j;
        this.id_type_name = k;
        this.id_no = b;
        this.phone_no = h;
        this.toString = function () {
            return this.name + '_' + this.id_type + '_' + this.id_no + '_' + this.phone_no
        }
    }
    function cD() {
        if (tickets_info.length < 1) {
            return tickets_info.length
        } else {
            var b = 0;
            for (var c = 0; c < tickets_info.length; c++) {
                var a = Number(tickets_info[c].only_id.split('_') [1]);
                if (a > b) {
                    b = a
                }
            }
            return b + 1
        }
    }
    function ck() {
        cV = [
        ];
        bV = [
        ];
        dg = [
        ];
        tickets_info = [
        ];
        cB = [
        ];
        cX = [
        ];
        cM = '';
        isAsync = '';
        location_code = '';
        md5Str = '';
        leftTicketStr = ''
    }
    getpassengerTicketsForAutoSubmit = function () {
        var b = '';
        for (var a = 0; a < tickets_info.length; a++) {
            var d = '';
            if ('WZ' == tickets_info[a].seat_type) {
                d = eo(es())
            } else {
                d = tickets_info[a].seat_type
            }
            var c = d + ',0,' + tickets_info[a].ticket_type + ',' + tickets_info[a].name + ',' + tickets_info[a].id_type + ',' + tickets_info[a].id_no + ',' + (tickets_info[a].phone_no == null ? '' : tickets_info[a].phone_no) + ',N';
            b += c + '_'
        }
        return b.substring(0, b.length - 1)
    };
    getOldPassengersForAutoSubmit = function () {
        var b = '';
        for (var c = 0; c < passengerChecked.length; c++) {
            var a = passengerChecked[c].passenger_name + ',' + passengerChecked[c].passenger_id_type_code + ',' + passengerChecked[c].passenger_id_no + ',' + passengerChecked[c].passenger_type;
            b += a + '_'
        }
        return b
    };
    var c2 = false;
    function cs(d, c) {
        var e = '';
        var b = $('#train_date') .val() .split('-');
        var a = new Date();
        a.setFullYear(b[0], b[1] - 1, b[2]);
        if (isAsync == ticket_submit_order.request_flag.isAsync && leftTicketStr != '') {
            var f = null;
            if (tickets_info[0].seat_type == 'WZ') {
                if (cM.queryLeftNewDTO.yz_num != '--') {
                    tickets_info[0].seat_type = '1';
                    c2 = true;
                    tickets_info[0].seat_type_name = '硬座'
                } else {
                    if (cM.queryLeftNewDTO.ze_num != '--') {
                        tickets_info[0].seat_type = 'O';
                        c2 = true;
                        tickets_info[0].seat_type_name = '二等座'
                    }
                }
            }
            $.ajax({
                url: ctx + 'confirmPassenger/getQueueCountAsync',
                type: 'post',
                async: false,
                data: {
                    train_date: a.toString(),
                    train_no: cM.queryLeftNewDTO.train_no,
                    stationTrainCode: cM.queryLeftNewDTO.station_train_code,
                    seatType: tickets_info[0].seat_type,
                    fromStationTelecode: cM.queryLeftNewDTO.from_station_telecode,
                    toStationTelecode: cM.queryLeftNewDTO.to_station_telecode,
                    leftTicket: leftTicketStr,
                    purpose_codes: d,
                    isCheckOrderInfo: c
                },
                dataType: 'json',
                success: function (g) {
                    if (g.status) {
                        if (g.data.isRelogin == 'Y') {
                            window.location.href = ctx + 'login/init?random=' + new Date() .getTime()
                        }
                        var l = null;
                        var h = tickets_info[0].seat_type;
                        l = d0(g.data.ticket, tickets_info[0].seat_type) .split(',');
                        e = '本次列车，剩余' + (tickets_info[0].seat_type_name) .split('（') [0] + '<strong>' + l[0] + '</strong>张';
                        var j = false;
                        if (l.length > 1) {
                            e += ',无座<strong>' + l[1] + '</strong>张';
                            j = true
                        }
                        e += '。';
                        if (g.data.op_2 == 'true') {
                            if ((c2 && !j) || !c2) {
                                cZ = false;
                                d2();
                                return
                            }
                            e += '<font color="red">目前排队人数已经超过余票张数，请您选择其他席别或车次。</font>'
                        } else {
                            if (g.data.countT > 0) {
                                e += '目前排队人数<font color="red">' + g.data.countT + '</font>人，';
                                e += '<br/>请确认以上信息是否正确，点击“确认”后，系统将为您分配席位。'
                            }
                        }
                        var k = $('#sy_ticket_num_id');
                        if (k != null) {
                            k.html(e)
                        }
                        dR()
                    }
                },
                error: function (j, g, h) {
                    return
                }
            })
        } else {
            dR()
        }
    }
    function d0(a, b) {
        rt = '';
        seat_1 = - 1;
        seat_2 = - 1;
        i = 0;
        while (i < a.length) {
            s = a.substr(i, 10);
            c_seat = s.substr(0, 1);
            if (c_seat == b) {
                count = s.substr(6, 4);
                while (count.length > 1 && count.substr(0, 1) == '0') {
                    count = count.substr(1, count.length)
                }
                count = parseInt(count);
                if (count < 3000) {
                    seat_1 = count
                } else {
                    seat_2 = (count - 3000)
                }
            }
            i = i + 10
        }
        if (seat_1 > - 1) {
            rt += seat_1
        }
        if (seat_2 > - 1) {
            rt += ',' + seat_2
        }
        return rt
    }
    function dc() {
        $.ajax({
            url: ctx + 'confirmPassenger/confirmSingle',
            type: 'post',
            data: {
                passengerTicketStr: getpassengerTicketsForAutoSubmit(),
                oldPassengerStr: getOldPassengersForAutoSubmit(),
                tour_flag: 'dc',
                randCode: $('#randCode') .val(),
                purpose_codes: df(),
                key_check_isChange: md5Str,
                train_location: location_code
            },
            dataType: 'json',
            async: true,
            success: function (a) {
                if (a.status) {
                    if (a.data.submitStatus) {
                        otsRedirect('post', ctx + 'payOrder/init?random=' + new Date() .getTime(), {
                        })
                    } else {
                        cL('出票失败!', false, '原因： ' + a.data.errMsg + '<a  id="xg_close_win_id">点击修改</a>', true, 'lose');
                        $('#xg_close_win_id') .click(function () {
                            cF('transforNotice_id', true);
                            $('#i-ok') .css('display', 'none')
                        })
                    }
                } else {
                    cL('订票失败!', true, '很抱歉！请关闭窗口重新预定车票', true, 'lose')
                }
            },
            error: function (a, b, c) {
                cL('订票失败!', true, '很抱歉！网络忙，请关闭窗口稍后再试。', true, 'lose');
                return
            }
        })
    }
    function eg() {
        $.ajax({
            url: ctx + 'confirmPassenger/confirmSingleForQueueAsys',
            type: 'post',
            data: {
                passengerTicketStr: getpassengerTicketsForAutoSubmit(),
                oldPassengerStr: getOldPassengersForAutoSubmit(),
                randCode: $('#randCode_other') .val(),
                purpose_codes: df(),
                key_check_isChange: md5Str,
                leftTicketStr: leftTicketStr,
                train_location: location_code
            },
            dataType: 'json',
            async: true,
            success: function (b) {
                $('#i-ok') .css('display', 'none');
                $('#i-ok2') .css('display', 'none');
                $('#c_error2') .html('');
                $('#c_error2') .removeClass('error');
                $('#randCode2') .val('');
                if (b.status) {
                    if (!b.data.submitStatus) {
                        cL('出票失败!', false, '原因： ' + b.data.errMsg + '<a id="xg_close_win_id" >点击修改</a>', true, 'lose');
                        $('#xg_close_win_id') .click(function () {
                            cF('transforNotice_id', true)
                        })
                    } else {
                        var a = new OrderQueueWaitTime('dc', d1, ee);
                        a.start()
                    }
                } else {
                    cL('订票失败!', true, '很抱歉！请关闭窗口重新预定车票', true, 'lose')
                }
            },
            error: function (a, b, c) {
                cL('订票失败!', true, '很抱歉！网络忙，请关闭窗口稍后再试。', true, 'lose');
                return
            }
        })
    }
    function d1(a, b, c) {
        if (b <= 5) {
            cL('订单已经提交，系统正在处理中，请稍等。', false, '', false, 'work')
        } else {
            if (b > 30 * 60) {
                cL('订单已经提交，预计等待时间超过30分钟，请耐心等待。', false, '', false, 'queue')
            } else {
                cL('订单已经提交，最新预估等待时间' + c + '，请耐心等待。', false, '', false, 'queue')
            }
        }
    }
    function ee(a, b, c) {
        if (b == - 1) {
            $.ajax({
                url: ctx + 'confirmPassenger/resultOrderForDcQueue',
                data: {
                    orderSequence_no: c.orderId
                },
                type: 'POST',
                dataType: 'json',
                success: function (d) {
                    if (d.status) {
                        if (d.data.submitStatus) {
                            otsRedirect('post', ctx + '/payOrder/init?random=' + new Date() .getTime(), {
                            })
                        } else {
                            cL('下单成功', false, '', false, 'win')
                        }
                    } else {
                        cL('下单成功。', false, '', false, 'win')
                    }
                },
                error: function (f, d, e) {
                    cL('下单成功。', false, '', false, 'win')
                }
            })
        } else {
            db(b, c)
        }
    }
    function db(b, a) {
        if (a.name && a.card && a.tel) {
            cF('transforNotice_id', true);
            $('#608_check_msg') .html(a.msg);
            dhtmlx.createWin({
                winId: '608_check',
                closeWinId: [
                    '608_check_close',
                    '608_check_cancel'
                ],
                okId: '608_check_ok',
                okCallBack: function () {
                    $('#608_name') .html(a.name);
                    $('#608_card') .html(a.card);
                    $('#608_tel') .html(a.tel);
                    $('#ticketInfo') .html(a.ticketInfo);
                    dhtmlx.createWin({
                        winId: '608_complain',
                        closeWinId: [
                            '608_complain_close',
                            '608_complain_cancel'
                        ],
                        okId: '608_complain_ok',
                        okCallBack: function () {
                            var c = dhtmlx.modalbox({
                                targSrc: '<div><img src="' + ctx + 'resources/images/loading.gif"></img></div>',
                                callback: function () {
                                }
                            });
                            $.ajax({
                                url: ctx + 'confirmPassenger/report',
                                type: 'post',
                                async: false,
                                success: function (d) {
                                    dhtmlx.modalbox.hide(c);
                                    if (d.data == 'Y') {
                                        dhtmlx.alert({
                                            title: '提示',
                                            ok: messages['button.ok'],
                                            text: '举报成功',
                                            type: 'alert-info'
                                        })
                                    } else {
                                        dhtmlx.alert({
                                            title: '提示',
                                            ok: messages['button.ok'],
                                            text: '举报失败',
                                            type: 'alert-error'
                                        })
                                    }
                                    $('#i-okmypasscode1') .hide();
                                    refreshImg('passenger', 'randp')
                                },
                                error: function (f, d, e) {
                                    dhtmlx.modalbox.hide(c)
                                }
                            })
                        },
                        checkConfirm: function () {
                            return true
                        }
                    });
                    $('#608_complain') .css('top', '200px')
                },
                checkConfirm: function () {
                    return true
                },
                callback: function () {
                    $('#i-okmypasscode1') .hide();
                    refreshImg('passenger', 'randp')
                }
            });
            $('#608_check') .css('top', '200px');
            return
        }
        if (b == - 1) {
            return
        } else {
            if (b == - 2) {
                if (a.errorcode == 0) {
                    cL('订票失败!', true, '原因： ' + a.msg, true, 'lose')
                } else {
                    cL('订票失败!', true, '原因： ' + a.msg, true, 'lose')
                }
            } else {
                if (b == - 3) {
                    cL('哎呀,订票失败!', true, '订单已撤销', true, 'lose')
                } else {
                    window.location.href = ctx + 'queryOrder/initNoComplete?random=' + new Date() .getTime()
                }
            }
        }
    }
    function d5() {
        b7 = new dhtmlXWindows();
        b7.enableAutoViewport(true);
        b7.setSkin('dhx_terrace');
        b7.setImagePath(ctx + 'resources/js/rich/windows/imgs/');
        cF = function (d, e) {
            unLoadGrayBackground();
            if (b7.isWindow(d + '_')) {
                b7.window(d + '_') .setModal(false);
                b7.window(d + '_') .hide()
            }
        };
        cL = function (k, e, h, j, f) {
            var l = '<div class="tit">' + (e ? '<span class="colorC">' + k + '</span>' : k) + '</div>';
            var g = '<P>' + h + '</p>';
            var d = e ? '<p>请点击[<a href="' + ctx + 'queryOrder/init"><strong>我的12306</strong></a>]办理其他业务。您也可以点击[<a href="' + ctx + 'leftTicket/init"><strong>预订车票</strong></a>]，重新规划您的旅程。</p>' : '<P>查看订单处理情况，请点击“<a href="' + ctx + 'queryOrder/initNoComplete">未完成订单</a>”</P>';
            $('#iamge_status_id') .removeClass() .addClass('icon i-' + f);
            if (j) {
                $('#up-box-hd_id') .html('提示<a id='closeTranforDialog_id' href='#nogo'>关闭</a>');
                d = '';
                $('#lay-btn_id') .html('<a href='#nogo' id='qr_closeTranforDialog_id'  class='btn92s'>确认</a>')
            } else {
                $('#up-box-hd_id') .html('提示');
                $('#lay-btn_id') .html('')
            }
            $('#orderResultInfo_id') .html(l + (h == '' || h == null || h == 'undefined' || h == undefined ? '' : g) + d);
            a('transforNotice_id');
            if (j) {
                $('#closeTranforDialog_id') .click(function () {
                    cF('transforNotice_id', true)
                });
                $('#qr_closeTranforDialog_id') .click(function () {
                    cF('transforNotice_id', true);
                    $('#i-ok') .css('display', 'none')
                })
            }
        };
        function a(d) {
            cF(d, false);
            if ('checkticketinfo_id' == d) {
                var f = ticketInfoForPassengerForm.queryLeftNewDetailDTO;
                if (f.to_station_telecode == ticket_submit_order.special_areas.lso || f.to_station_telecode == ticket_submit_order.special_areas.dao || f.to_station_telecode == ticket_submit_order.special_areas.ado || f.to_station_telecode == ticket_submit_order.special_areas.nqo || f.to_station_telecode == ticket_submit_order.special_areas.tho) {
                    if (c()) {
                        $('#notice_1_id') .html('1.系统将随机为您申请席位，暂不支持自选席位。');
                        $('#notice_2_id') .html('2.根据现行规定，外国人在购买进西藏火车票时，须出示西藏自治区外事办公室或旅游局、商务厅的批准函（电），或者出示中国内地司局级接待单位出具的、已征得自治区上述部门同意的证明信函。台湾同胞赴藏从事旅游、商务活动，须事先向西藏自治区旅游局或商务厅提出申请，购买进藏火车票时须出示有关批准函。');
                        if (b()) {
                            $('#notice_3_id') .html('3.按现行规定，学生票购票区间必须与学生证上的乘车区间一致，否则车站将不予换票。')
                        } else {
                            $('#notice_3_id') .html('')
                        }
                    }
                } else {
                    $('#notice_1_id') .html('1.系统将随机为您申请席位，暂不支持自选席位。');
                    if (b()) {
                        $('#notice_3_id') .html('2.按现行规定，学生票购票区间必须与学生证上的乘车区间一致，否则车站将不予换票。')
                    } else {
                        $('#notice_3_id') .html('')
                    }
                }
            }
            var g = cf(d);
            var h = $(window) .width() / 2 - 300;
            var e = d8() + ($(window) .height() / 2 - 200);
            g.setDimension($('#content_' + d) .width(), $('#content_' + d) .height() + 10);
            $('.dhtmlx_window_active') .height($('#content_' + d) .height());
            $('.dhtmlx_window_active') .css({
                left: h + 'px',
                top: e + 'px'
            })
        }
        function b() {
            for (var d = 0; d < limit_tickets.length; d++) {
                var e = limit_tickets[d];
                if (e.ticket_type == ticket_submit_order.ticket_type.student) {
                    return true
                }
            }
            return false
        }
        function c() {
            for (var d = 0; d < limit_tickets.length; d++) {
                var e = limit_tickets[d];
                if ((ticketInfoForPassengerForm.tour_flag == ticket_submit_order.tour_flag.fc || ticketInfoForPassengerForm.tour_flag == ticket_submit_order.tour_flag.gc) && e.save_status != '' && (e.id_type == ticket_submit_order.passenger_card_type.passport || e.id_type == ticket_submit_order.passenger_card_type.taiwan)) {
                    return true
                } else {
                    if ((ticketInfoForPassengerForm.tour_flag == ticket_submit_order.tour_flag.wc || ticketInfoForPassengerForm.tour_flag == ticket_submit_order.tour_flag.dc) && (e.id_type == ticket_submit_order.passenger_card_type.passport || e.id_type == ticket_submit_order.passenger_card_type.taiwan)) {
                        return true
                    }
                }
            }
            return false
        }
    }
    function cf(a) {
        var b = b7.createWindow(a + '_', 0, 0, 660, 100);
        b.attachObject(a);
        b.clearIcon();
        b.denyResize();
        b.setModal(true);
        b.center();
        b.button('park') .hide();
        b.button('minmax1') .hide();
        b.hideHeader();
        return b
    }
    function dw(c) {
        var a = new Date();
        var b = c.split('-');
        a.setFullYear(parseInt(b[0]), parseInt(b[1] - 1, 10), parseInt(b[2], 10));
        if (b.length >= 6) {
            a.setHours(b[3], b[4], b[5])
        }
        return a
    }
    function de(d) {
        var a = '',
        b = '';
        var e = d.replace(/-/g, '');
        if (e.substring(4, 5) == '0') {
            a = e.substring(5, 6) + '月'
        } else {
            a = e.substring(4, 6) + '月'
        }
        if (e.substring(6, 7) == '0') {
            b = e.substring(7, 8) + '日'
        } else {
            b = e.substring(6, 8) + '日'
        }
        var c = new Date(Date.parse(d.replace(/-/g, '/')));
        var f = '日一二三四五六';
        return a.concat(b) .concat('&nbsp;&nbsp;') .concat('周') .concat(f.charAt(c.getDay()))
    }
    showTicketPrice = function (d) {
        var k = $(d) .parent('tr') .children('td') .children('div') .children('div') .children('span') .attr('id');
        if (undefined == k || k == null || 'undefined' == typeof (k)) {
            k = $(d) .attr('id')
        }
        $('#price_' + c) .hide();
        $('#tp-list-price') .hide();
        $('#sleeper-price>span') .css('cursor', 'pointer');
        var c = k.split('_') [0];
        var b = $('#price_' + c) .attr('datatran');
        var a = k.split('_') [1];
        var e = k.split('_') [2];
        var j = k.split('_') [3];
        var f = k.split('_') [4];
        var h = $('#WZ_' + c) .html();
        var g = $('#QT_' + c) .html();
        if ($('#ticket_' + c + '_train>span>span') .text() == '查看票价') {
            if ($('#ticket_' + c) .attr('class') == 'bgc') {
                $('#price_' + c) .addClass('bgc')
            }
            $.ajax({
                type: 'get',
                isTakeParam: false,
                beforeSend: function (l) {
                    l.setRequestHeader('If-Modified-Since', '0');
                    l.setRequestHeader('Cache-Control', 'no-cache')
                },
                url: ctx + 'leftTicket/queryTicketPriceFL',
                data: {
                    train_no: c,
                    from_station_no: a,
                    to_station_no: e,
                    seat_types: f,
                    train_date: train_tour_flag == 'fc' ? $.trim($('#back_train_date') .val())  : $.trim($('#train_date') .val())
                },
                timeout: 1000,
                error: function (l, m, n) {
                },
                success: function (l) {
                }
            });
            $.ajax({
                type: 'get',
                isTakeParam: false,
                beforeSend: function (l) {
                    l.setRequestHeader('If-Modified-Since', '0');
                    l.setRequestHeader('Cache-Control', 'no-cache')
                },
                url: ctx + 'leftTicket/queryTicketPrice',
                data: {
                    train_no: c,
                    from_station_no: a,
                    to_station_no: e,
                    seat_types: f,
                    train_date: train_tour_flag == 'fc' ? $.trim($('#back_train_date') .val())  : $.trim($('#train_date') .val())
                },
                success: function (l) {
                    if (l.status) {
                        $('#ticket_' + c + '_train>span>span') .html('收起票价');
                        $('#ticket_' + c + '_train>span>b') .addClass('open');
                        $('#ticket_' + c + '_train>span>b') .attr('title', '收起票价');
                        if (g == '--') {
                            l.data.MIN = ''
                        }
                        if (h == '--') {
                            l.data.WZ = ''
                        }
                        $('#price_' + c) .html($.render.priceTableTemplate(l.data));
                        $('#price_' + c) .show();
                        if (b && dx(b)) {
                            $('#price_' + c) .find('td') .eq(0) .html('<a class="ad-tlist-hot" href="javascript:void(0);">移动宾馆 免费晚餐 快捷舒适 准时正点</a>')
                        } else {
                            $('#price_' + c) .find('td') .eq(0) .html('')
                        }
                        if (l.data.PM != '--') {
                            $('#sleeper-price_' + c) .mouseover(function () {
                                $('#tp-list-price_' + c) .show()
                            });
                            $('#sleeper-price_' + c) .mouseout(function () {
                                $('#tp-list-price_' + c) .hide()
                            })
                        }
                    }
                }
            })
        } else {
            $('#ticket_' + c + '_train>span>span') .html('查看票价');
            $('#ticket_' + c + '_train>span>b') .attr('title', '查看票价');
            $('#ticket_' + c + '_train>span>b') .removeClass();
            $('#price_' + c) .html('');
            $('#price_' + c) .hide()
        }
    };
    function dZ(a) {
        if (ec == 'starttime') {
            return a.sort(function (c, d) {
                var e = Number(c.queryLeftNewDTO.start_time.replace(':', ''));
                var b = Number(d.queryLeftNewDTO.start_time.replace(':', ''));
                if (e > b) {
                    return cg ? 1 : - 1
                } else {
                    return cg ? - 1 : 1
                }
            })
        } else {
            if (ec == 'arrivedtime') {
                return a.sort(function (c, d) {
                    var e = Number(c.queryLeftNewDTO.arrive_time.replace(':', ''));
                    var b = Number(d.queryLeftNewDTO.arrive_time.replace(':', ''));
                    if (e > b) {
                        return dV ? 1 : - 1
                    } else {
                        return dV ? - 1 : 1
                    }
                })
            } else {
                if (ec == 'lishi') {
                    return a.sort(function (c, d) {
                        var e = Number(c.queryLeftNewDTO.lishi.replace(':', ''));
                        var b = Number(d.queryLeftNewDTO.lishi.replace(':', ''));
                        if (e > b) {
                            return cl ? 1 : - 1
                        } else {
                            return cl ? - 1 : 1
                        }
                    })
                }
            }
        }
        return a
    }
    function d7() {
        $('#s_time') .click(function () {
            if (cg) {
                $('#s_time') .removeClass() .addClass('b4');
                if ($('#r_time') .attr('class') == 'b4') {
                    $('#r_time') .removeClass() .addClass('b2')
                } else {
                    if ($('#r_time') .attr('class') == 'b3') {
                        $('#r_time') .removeClass() .addClass('b1')
                    }
                }
                if ($('#l_s') .attr('class') == 'b4') {
                    $('#l_s') .removeClass() .addClass('b2')
                } else {
                    if ($('#l_s') .attr('class') == 'b3') {
                        $('#l_s') .removeClass() .addClass('b1')
                    }
                }
                cg = false;
                $('#other_span_starttime') .removeClass() .addClass('b4');
                if ($('#other_span_endtime') .attr('class') == 'b4') {
                    $('#other_span_endtime') .removeClass() .addClass('b2')
                } else {
                    if ($('#other_span_endtime') .attr('class') == 'b3') {
                        $('#other_span_endtime') .removeClass() .addClass('b1')
                    }
                }
                if ($('#other_span_lishi') .attr('class') == 'b4') {
                    $('#other_span_lishi') .removeClass() .addClass('b2')
                } else {
                    if ($('#other_span_lishi') .attr('class') == 'b3') {
                        $('#other_span_lishi') .removeClass() .addClass('b1')
                    }
                }
            } else {
                $('#s_time') .removeClass() .addClass('b3');
                if ($('#r_time') .attr('class') == 'b4') {
                    $('#r_time') .removeClass() .addClass('b2')
                } else {
                    if ($('#r_time') .attr('class') == 'b3') {
                        $('#r_time') .removeClass() .addClass('b1')
                    }
                }
                if ($('#l_s') .attr('class') == 'b4') {
                    $('#l_s') .removeClass() .addClass('b2')
                } else {
                    if ($('#l_s') .attr('class') == 'b3') {
                        $('#l_s') .removeClass() .addClass('b1')
                    }
                }
                cg = true;
                $('#other_span_starttime') .removeClass() .addClass('b3');
                if ($('#other_span_endtime') .attr('class') == 'b4') {
                    $('#other_span_endtime') .removeClass() .addClass('b2')
                } else {
                    if ($('#other_span_endtime') .attr('class') == 'b3') {
                        $('#other_span_endtime') .removeClass() .addClass('b1')
                    }
                }
                if ($('#other_span_lishi') .attr('class') == 'b4') {
                    $('#other_span_lishi') .removeClass() .addClass('b2')
                } else {
                    if ($('#other_span_lishi') .attr('class') == 'b3') {
                        $('#other_span_lishi') .removeClass() .addClass('b1')
                    }
                }
            }
            ec = 'starttime';
            da()
        });
        $('#other_span_starttime') .click(function () {
            if (cg) {
                $('#s_time') .removeClass() .addClass('b4');
                if ($('#r_time') .attr('class') == 'b4') {
                    $('#r_time') .removeClass() .addClass('b2')
                } else {
                    if ($('#r_time') .attr('class') == 'b3') {
                        $('#r_time') .removeClass() .addClass('b1')
                    }
                }
                if ($('#l_s') .attr('class') == 'b4') {
                    $('#l_s') .removeClass() .addClass('b2')
                } else {
                    if ($('#l_s') .attr('class') == 'b3') {
                        $('#l_s') .removeClass() .addClass('b1')
                    }
                }
                cg = false;
                $('#other_span_starttime') .removeClass() .addClass('b4');
                if ($('#other_span_endtime') .attr('class') == 'b4') {
                    $('#other_span_endtime') .removeClass() .addClass('b2')
                } else {
                    if ($('#other_span_endtime') .attr('class') == 'b3') {
                        $('#other_span_endtime') .removeClass() .addClass('b1')
                    }
                }
                if ($('#other_span_lishi') .attr('class') == 'b4') {
                    $('#other_span_lishi') .removeClass() .addClass('b2')
                } else {
                    if ($('#other_span_lishi') .attr('class') == 'b3') {
                        $('#other_span_lishi') .removeClass() .addClass('b1')
                    }
                }
            } else {
                $('#s_time') .removeClass() .addClass('b3');
                if ($('#r_time') .attr('class') == 'b4') {
                    $('#r_time') .removeClass() .addClass('b2')
                } else {
                    if ($('#r_time') .attr('class') == 'b3') {
                        $('#r_time') .removeClass() .addClass('b1')
                    }
                }
                if ($('#l_s') .attr('class') == 'b4') {
                    $('#l_s') .removeClass() .addClass('b2')
                } else {
                    if ($('#l_s') .attr('class') == 'b3') {
                        $('#l_s') .removeClass() .addClass('b1')
                    }
                }
                cg = true;
                $('#other_span_starttime') .removeClass() .addClass('b3');
                if ($('#other_span_endtime') .attr('class') == 'b4') {
                    $('#other_span_endtime') .removeClass() .addClass('b2')
                } else {
                    if ($('#other_span_endtime') .attr('class') == 'b3') {
                        $('#other_span_endtime') .removeClass() .addClass('b1')
                    }
                }
                if ($('#other_span_lishi') .attr('class') == 'b4') {
                    $('#other_span_lishi') .removeClass() .addClass('b2')
                } else {
                    if ($('#other_span_lishi') .attr('class') == 'b3') {
                        $('#other_span_lishi') .removeClass() .addClass('b1')
                    }
                }
            }
            ec = 'starttime';
            da()
        });
        $('#r_time') .click(function () {
            if (dV) {
                $('#r_time') .removeClass() .addClass('b4');
                if ($('#s_time') .attr('class') == 'b4') {
                    $('#s_time') .removeClass() .addClass('b2')
                } else {
                    if ($('#s_time') .attr('class') == 'b3') {
                        $('#s_time') .removeClass() .addClass('b1')
                    }
                }
                if ($('#l_s') .attr('class') == 'b4') {
                    $('#l_s') .removeClass() .addClass('b2')
                } else {
                    if ($('#l_s') .attr('class') == 'b3') {
                        $('#l_s') .removeClass() .addClass('b1')
                    }
                }
                dV = false;
                $('#other_span_starttime') .removeClass() .addClass('b4');
                $('#other_span_endtime') .removeClass() .addClass('b2');
                $('#other_span_lishi') .removeClass() .addClass('b2')
            } else {
                $('#r_time') .removeClass() .addClass('b3');
                if ($('#s_time') .attr('class') == 'b4') {
                    $('#s_time') .removeClass() .addClass('b2')
                } else {
                    if ($('#s_time') .attr('class') == 'b3') {
                        $('#s_time') .removeClass() .addClass('b1')
                    }
                }
                if ($('#l_s') .attr('class') == 'b4') {
                    $('#l_s') .removeClass() .addClass('b2')
                } else {
                    if ($('#l_s') .attr('class') == 'b3') {
                        $('#l_s') .removeClass() .addClass('b1')
                    }
                }
                dV = true;
                $('#other_span_endtime') .removeClass() .addClass('b2');
                if ($('#other_span_starttime') .attr('class') == 'b4') {
                    $('#other_span_starttime') .removeClass() .addClass('b2')
                } else {
                    if ($('#other_span_starttime') .attr('class') == 'b3') {
                        $('#other_span_starttime') .removeClass() .addClass('b1')
                    }
                }
                if ($('#other_span_lishi') .attr('class') == 'b4') {
                    $('#other_span_lishi') .removeClass() .addClass('b2')
                } else {
                    if ($('#other_span_lishi') .attr('class') == 'b3') {
                        $('#other_span_lishi') .removeClass() .addClass('b1')
                    }
                }
            }
            ec = 'arrivedtime';
            da()
        });
        $('#other_span_endtime') .click(function () {
            if (dV) {
                $('#r_time') .removeClass() .addClass('b4');
                if ($('#s_time') .attr('class') == 'b4') {
                    $('#s_time') .removeClass() .addClass('b2')
                } else {
                    if ($('#s_time') .attr('class') == 'b3') {
                        $('#s_time') .removeClass() .addClass('b1')
                    }
                }
                if ($('#l_s') .attr('class') == 'b4') {
                    $('#l_s') .removeClass() .addClass('b2')
                } else {
                    if ($('#l_s') .attr('class') == 'b3') {
                        $('#l_s') .removeClass() .addClass('b1')
                    }
                }
                dV = false;
                $('#other_span_endtime') .removeClass() .addClass('b4');
                if ($('#other_span_starttime') .attr('class') == 'b4') {
                    $('#other_span_starttime') .removeClass() .addClass('b2')
                } else {
                    if ($('#other_span_starttime') .attr('class') == 'b3') {
                        $('#other_span_starttime') .removeClass() .addClass('b1')
                    }
                }
                if ($('#other_span_lishi') .attr('class') == 'b4') {
                    $('#other_span_lishi') .removeClass() .addClass('b2')
                } else {
                    if ($('#other_span_lishi') .attr('class') == 'b3') {
                        $('#other_span_lishi') .removeClass() .addClass('b1')
                    }
                }
            } else {
                $('#r_time') .removeClass() .addClass('b3');
                if ($('#s_time') .attr('class') == 'b4') {
                    $('#s_time') .removeClass() .addClass('b2')
                } else {
                    if ($('#s_time') .attr('class') == 'b3') {
                        $('#s_time') .removeClass() .addClass('b1')
                    }
                }
                if ($('#l_s') .attr('class') == 'b4') {
                    $('#l_s') .removeClass() .addClass('b2')
                } else {
                    if ($('#l_s') .attr('class') == 'b3') {
                        $('#l_s') .removeClass() .addClass('b1')
                    }
                }
                dV = true;
                $('#other_span_endtime') .removeClass() .addClass('b3');
                if ($('#other_span_starttime') .attr('class') == 'b4') {
                    $('#other_span_starttime') .removeClass() .addClass('b2')
                } else {
                    if ($('#other_span_starttime') .attr('class') == 'b3') {
                        $('#other_span_starttime') .removeClass() .addClass('b1')
                    }
                }
                if ($('#other_span_lishi') .attr('class') == 'b4') {
                    $('#other_span_lishi') .removeClass() .addClass('b2')
                } else {
                    if ($('#other_span_lishi') .attr('class') == 'b3') {
                        $('#other_span_lishi') .removeClass() .addClass('b1')
                    }
                }
            }
            ec = 'arrivedtime';
            da()
        });
        $('#l_s') .click(function () {
            if (cl) {
                $('#l_s') .removeClass() .addClass('b4');
                if ($('#r_time') .attr('class') == 'b4') {
                    $('#r_time') .removeClass() .addClass('b2')
                } else {
                    if ($('#r_time') .attr('class') == 'b3') {
                        $('#r_time') .removeClass() .addClass('b1')
                    }
                }
                if ($('#s_time') .attr('class') == 'b4') {
                    $('#s_time') .removeClass() .addClass('b2')
                } else {
                    if ($('#s_time') .attr('class') == 'b3') {
                        $('#s_time') .removeClass() .addClass('b1')
                    }
                }
                cl = false;
                $('#other_span_lishi') .removeClass() .addClass('b4');
                if ($('#other_span_endtime') .attr('class') == 'b4') {
                    $('#other_span_endtime') .removeClass() .addClass('b2')
                } else {
                    if ($('#other_span_endtime') .attr('class') == 'b3') {
                        $('#other_span_endtime') .removeClass() .addClass('b1')
                    }
                }
                if ($('#other_span_starttime') .attr('class') == 'b4') {
                    $('#other_span_starttime') .removeClass() .addClass('b2')
                } else {
                    if ($('#other_span_starttime') .attr('class') == 'b3') {
                        $('#other_span_starttime') .removeClass() .addClass('b1')
                    }
                }
            } else {
                $('#l_s') .removeClass() .addClass('b3');
                if ($('#r_time') .attr('class') == 'b4') {
                    $('#r_time') .removeClass() .addClass('b2')
                } else {
                    if ($('#r_time') .attr('class') == 'b3') {
                        $('#r_time') .removeClass() .addClass('b1')
                    }
                }
                if ($('#s_time') .attr('class') == 'b4') {
                    $('#s_time') .removeClass() .addClass('b2')
                } else {
                    if ($('#s_time') .attr('class') == 'b3') {
                        $('#s_time') .removeClass() .addClass('b1')
                    }
                }
                cl = true;
                $('#other_span_lishi') .removeClass() .addClass('b3');
                if ($('#other_span_endtime') .attr('class') == 'b4') {
                    $('#other_span_endtime') .removeClass() .addClass('b2')
                } else {
                    if ($('#other_span_endtime') .attr('class') == 'b3') {
                        $('#other_span_endtime') .removeClass() .addClass('b1')
                    }
                }
                if ($('#other_span_starttime') .attr('class') == 'b4') {
                    $('#other_span_starttime') .removeClass() .addClass('b2')
                } else {
                    if ($('#other_span_starttime') .attr('class') == 'b3') {
                        $('#other_span_starttime') .removeClass() .addClass('b1')
                    }
                }
            }
            ec = 'lishi';
            da()
        });
        $('#other_span_lishi') .click(function () {
            if (cl) {
                $('#l_s') .removeClass() .addClass('b4');
                if ($('#r_time') .attr('class') == 'b4') {
                    $('#r_time') .removeClass() .addClass('b2')
                } else {
                    if ($('#r_time') .attr('class') == 'b3') {
                        $('#r_time') .removeClass() .addClass('b1')
                    }
                }
                if ($('#s_time') .attr('class') == 'b4') {
                    $('#s_time') .removeClass() .addClass('b2')
                } else {
                    if ($('#s_time') .attr('class') == 'b3') {
                        $('#s_time') .removeClass() .addClass('b1')
                    }
                }
                cl = false;
                $('#other_span_lishi') .removeClass() .addClass('b4');
                if ($('#other_span_endtime') .attr('class') == 'b4') {
                    $('#other_span_endtime') .removeClass() .addClass('b2')
                } else {
                    if ($('#other_span_endtime') .attr('class') == 'b3') {
                        $('#other_span_endtime') .removeClass() .addClass('b1')
                    }
                }
                if ($('#other_span_starttime') .attr('class') == 'b4') {
                    $('#other_span_starttime') .removeClass() .addClass('b2')
                } else {
                    if ($('#other_span_starttime') .attr('class') == 'b3') {
                        $('#other_span_starttime') .removeClass() .addClass('b1')
                    }
                }
            } else {
                $('#l_s') .removeClass() .addClass('b3');
                if ($('#r_time') .attr('class') == 'b4') {
                    $('#r_time') .removeClass() .addClass('b2')
                } else {
                    if ($('#r_time') .attr('class') == 'b3') {
                        $('#r_time') .removeClass() .addClass('b1')
                    }
                }
                if ($('#s_time') .attr('class') == 'b4') {
                    $('#s_time') .removeClass() .addClass('b2')
                } else {
                    if ($('#s_time') .attr('class') == 'b3') {
                        $('#s_time') .removeClass() .addClass('b1')
                    }
                }
                cl = true;
                $('#other_span_lishi') .removeClass() .addClass('b3');
                if ($('#other_span_endtime') .attr('class') == 'b4') {
                    $('#other_span_endtime') .removeClass() .addClass('b2')
                } else {
                    if ($('#other_span_endtime') .attr('class') == 'b3') {
                        $('#other_span_endtime') .removeClass() .addClass('b1')
                    }
                }
                if ($('#other_span_starttime') .attr('class') == 'b4') {
                    $('#other_span_starttime') .removeClass() .addClass('b2')
                } else {
                    if ($('#other_span_starttime') .attr('class') == 'b3') {
                        $('#other_span_starttime') .removeClass() .addClass('b1')
                    }
                }
            }
            ec = 'lishi';
            da()
        })
    }
    closeTrainStop = function () {
        over_flag = false;
        cA = 0;
        $('#train_stop') .hide();
        $('#train_table') .html('')
    };
    hideTrainStop = function (a) {
        over_flag = false;
        if (ei) {
            clearTimeout(ei)
        }
        ei = window.setTimeout(function () {
            if (cA != 1) {
                cA = 0;
                $('#train_stop') .hide();
                $('#train_table') .html('')
            }
        }, 130)
    };
    checkHover = function (a, b) {
        if (getEvent(a) .type == 'mouseover') {
            return !$.contains(b, getEvent(a) .relatedTarget || getEvent(a) .fromElement) && !((getEvent(a) .relatedTarget || getEvent(a) .fromElement) === b)
        } else {
            return !$.contains(b, getEvent(a) .relatedTarget || getEvent(a) .toElement) && !((getEvent(a) .relatedTarget || getEvent(a) .toElement) === b)
        }
    };
    getEvent = function (a) {
        return a || window.event
    };
    checkHover = function (a, b) {
        if (getEvent(a) .type == 'mouseover') {
            return !$.contains(b, getEvent(a) .relatedTarget || getEvent(a) .fromElement) && !((getEvent(a) .relatedTarget || getEvent(a) .fromElement) === b)
        } else {
            return !$.contains(b, getEvent(a) .relatedTarget || getEvent(a) .toElement) && !((getEvent(a) .relatedTarget || getEvent(a) .toElement) === b)
        }
    };
    getEvent = function (a) {
        return a || window.event
    };
    function d6(b, a) {
        for (var c = 0; c < a.length; c++) {
            if (a[c].key == b) {
                return true
            }
        }
        return false
    }
    function dr(d) {
        var j = function (l) {
            this.value = l
        };
        var c = new Array();
        var g = new Array();
        var e = {
        };
        var h = {
        };
        $('#cc_from_station_name_all>ul') .html('');
        $('#cc_to_station_name_all>ul') .html('');
        var f;
        var k;
        var a;
        for (var b = 0; b < d.length; b++) {
            f = d[b].queryLeftNewDTO.from_station_name;
            k = d[b].queryLeftNewDTO.to_station_name;
            a = d[b];
            if (!e[f]) {
                c.push(new j(f));
                e[f] = true
            }
            if (!h[k]) {
                g.push(new j(k));
                h[k] = true
            }
        }
        $('#to_station_ul') .html($.render.toStationNameTableTemplate(g));
        $('#from_station_ul') .html($.render.stationNameTableTemplate(c));
        $('#sear-sel-bd input[name='cc_from_station']') .click(function () {
            er(dL, 'cc_from_station_' + $(this) .val());
            var m = $('input[name='cc_from_station']');
            var l = $('input[name='cc_from_station']:checked');
            if ($(this) .is(':checked')) {
                if (m && l && l.length == m.length) {
                    $('#from_station_name_all') .removeClass() .addClass('btn-all')
                } else {
                    $('#from_station_name_all') .removeClass() .addClass('btn-all btn-all-sel')
                }
            } else {
                if (m && l && l.length == 0) {
                    $('#from_station_name_all') .removeClass() .addClass('btn-all')
                } else {
                    $('#from_station_name_all') .removeClass() .addClass('btn-all btn-all-sel')
                }
            }
            da()
        });
        $('#sear-sel-bd input[name='cc_to_station']') .click(function () {
            er(cv, 'cc_to_station_' + $(this) .val());
            var m = $('input[name='cc_to_station']');
            var l = $('input[name='cc_to_station']:checked');
            if ($(this) .is(':checked')) {
                if (m && l && l.length == m.length) {
                    $('#to_station_name_all') .removeClass() .addClass('btn-all')
                } else {
                    $('#to_station_name_all') .removeClass() .addClass('btn-all btn-all-sel')
                }
            } else {
                if (m && l && l.length == 0) {
                    $('#to_station_name_all') .removeClass() .addClass('btn-all')
                } else {
                    $('#to_station_name_all') .removeClass() .addClass('btn-all btn-all-sel')
                }
            }
            da()
        })
    }
    submitOrderRequest = function (a, b) {
        $.ajax({
            type: 'post',
            url: ctx + 'login/checkUser',
            data: {
            },
            beforeSend: function (c) {
                c.setRequestHeader('If-Modified-Since', '0');
                c.setRequestHeader('Cache-Control', 'no-cache')
            },
            success: function (e) {
                var c;
                checkusermdId = e.attributes;
                if (e.data.flag) {
                    if (train_tour_flag == 'fc') {
                        c = $('#back_train_date') .val()
                    } else {
                        c = $('#train_date') .val()
                    }
                    if (dH == '0X00') {
                        var d = false;
                        for (i = (studentComPerArr.length - 1); i >= 0; i = i - 2) {
                            if (dw(studentComPerArr[i - 1]) <= dw(c) && dw(studentComPerArr[i]) >= dw(c)) {
                                d = true;
                                break
                            }
                        }
                        if (!d) {
                            dB('学生票的乘车时间为每年的暑假6月1日至9月30日、寒假12月1日至3月31日，目前不办理学生票业务。');
                            return
                        }
                    }
                    b2(a, b)
                } else {
                    cK();
                    $('#floatTable') .hide();
                    dF = $(window) .scrollTop();
                    cS(a, b)
                }
            }
        })
    };
    function b2(j, b) {
        var h = '';
        if ($('#dc') .is(':checked')) {
            h = 'dc'
        } else {
            h = 'wc'
        }
        if (train_tour_flag == 'fc') {
            h = 'fc';
            var e = b.split(':');
            var f = $('#back_train_date') .val() + '-' + e[0] + '-' + e[1] + '-00';
            try {
                if (roundReferTime) {
                    if (dw(roundReferTime) >= dw(f)) {
                        dB('您预订的往程车票到站时间为' + dw(roundReferTime) .format('yyyy年MM月dd日 hh时mm分') + '，返回日期不能早于此时间');
                        return
                    }
                }
            } catch (o) {
            }
        }
        if (train_tour_flag == 'gc') {
            h = 'gc'
        }
        if ('undefined' == typeof (submitForm)) {
            var d = 'secretStr=' + j + '&train_date=' + $('#train_date') .val() + '&back_train_date=' + $('#back_train_date') .val() + '&tour_flag=' + h + '&purpose_codes=' + df() + '&query_from_station_name=' + $('#fromStationText') .val() + '&query_to_station_name=' + $('#toStationText') .val() + '&' + l
        } else {
            var g = submitForm();
            var k = g.split(':::');
            var a = k[0].split(',-,') [0];
            var m = k[0].split(',-,') [1];
            var c = k[1].split(',-,') [0];
            var n = k[1].split(',-,') [1];
            var d = escape(a) + '=' + escape(m) + '&' + c + '=' + n + '&secretStr=' + j + '&train_date=' + $('#train_date') .val() + '&back_train_date=' + $('#back_train_date') .val() + '&tour_flag=' + h + '&purpose_codes=' + df() + '&query_from_station_name=' + $('#fromStationText') .val() + '&query_to_station_name=' + $('#toStationText') .val() + '&' + l
        }
        var l = checkusermdId != undefined ? '&_json_att=' + encodeURIComponent(checkusermdId)  : '';
        $.ajax({
            type: 'post',
            url: ctx + 'leftTicket/submitOrderRequest',
            data: d,
            async: false,
            success: function (p) {
                if (p.status) {
                    if (train_tour_flag != null) {
                        if (train_tour_flag == 'fc') {
                            otsRedirect('post', ctx + 'confirmPassenger/initFc', {
                            });
                            return
                        }
                        if (train_tour_flag == 'gc') {
                            otsRedirect('post', ctx + 'confirmPassenger/initGc', {
                            });
                            return
                        }
                    }
                    if (h == 'dc') {
                        otsRedirect('post', ctx + 'confirmPassenger/initDc', {
                        });
                        return
                    } else {
                        otsRedirect('post', ctx + 'confirmPassenger/initWc', {
                        })
                    }
                }
            }
        })
    }
    var dh = $('#fromStation') .val();
    var b0 = $('#toStation') .val();
    var dJ = $.trim($('#train_date') .val());
    cc = dh + b0 + dJ;
    $('#add-train') .click(function () {
        if ($('#fromStationText') .val() == '简拼/全拼/汉字') {
            dhtmlx.alert({
                title: '输入车次',
                ok: '确定',
                text: '请填写出发地！',
                type: 'alert-error'
            });
            return
        }
        if ($('#toStationText') .val() == '简拼/全拼/汉字') {
            dhtmlx.alert({
                title: '输入车次',
                ok: '确定',
                text: '请填写目的地！',
                type: 'alert-error'
            });
            return
        }
        var j = $('#prior_train span') .length;
        var b = $.trim($('#inp-train') .val()) .toUpperCase();
        if (b.length == 0 || b == '请输入') {
            dhtmlx.alert({
                title: '输入车次',
                ok: '确定',
                text: '请输入车次',
                type: 'alert-error',
                callback: function () {
                    $('#inp-train') .val('');
                    $('#inp-train') .focus()
                }
            })
        } else {
            if (j < 6) {
                var h = /^[a-zA-Z0-9]+$/;
                var f = /^[0-9]+$/;
                if (!h.test(b)) {
                    dhtmlx.alert({
                        title: '输入车次',
                        ok: '确定',
                        text: '车次格式输入错误！',
                        type: 'alert-error',
                        callback: function () {
                            ccInputSelected = true;
                            $('#inp-train') .select()
                        }
                    })
                } else {
                    if (f.test(b) && b.length > 4) {
                        dhtmlx.alert({
                            title: '输入车次',
                            ok: '确定',
                            text: '车次格式输入错误！',
                            type: 'alert-error',
                            callback: function () {
                                ccInputSelected = true;
                                $('#inp-train') .select()
                            }
                        })
                    } else {
                        if (b.length < 2) {
                            dhtmlx.alert({
                                title: '输入车次',
                                ok: '确定',
                                text: '车次格式输入错误！',
                                type: 'alert-error',
                                callback: function () {
                                    ccInputSelected = true;
                                    $('#inp-train') .select()
                                }
                            })
                        } else {
                            var g = $('#fromStation') .val();
                            var d = $('#toStation') .val();
                            var n = $.trim($('#train_date') .val());
                            var r = g + d + n;
                            var q = n.split('-');
                            var a = new Date();
                            a.setFullYear(q[0], q[1] - 1, q[2]);
                            a.setHours(8, 0, 0);
                            var e = new Date();
                            var o = '';
                            o = $.parseDateFormat(e);
                            var l = '';
                            if (o == n) {
                                var p = new Date(a.getTime() + 1000 * 60 * 60 * 24);
                                l = $.parseDateFormat(p)
                            } else {
                                l = n
                            }
                            var m = {
                                'leftTicketDTO.train_date': l,
                                'leftTicketDTO.from_station': g,
                                'leftTicketDTO.to_station': d,
                                purpose_codes: df()
                            };
                            if (r != cc) {
                                cc = r;
                                $('#prior_train span:gt(0)') .remove();
                                ccSelected = [
                                ];
                                var k = [
                                ];
                                c6(m);
                                $.ajax({
                                    type: 'get',
                                    async: false,
                                    isTakeParam: false,
                                    beforeSend: function (v) {
                                        v.setRequestHeader('If-Modified-Since', '0');
                                        v.setRequestHeader('Cache-Control', 'no-cache')
                                    },
                                    url: ctx + CLeftTicketUrl,
                                    data: m,
                                    timeout: 10000,
                                    success: function (x) {
                                        if (x.status) {
                                            if (x.data == null || x.data.length == 0) {
                                                dhtmlx.alert({
                                                    title: '错误信息',
                                                    ok: '确定',
                                                    text: '您输入的车次与出发地目的地不符！',
                                                    type: 'alert-error',
                                                    callback: function () {
                                                    }
                                                })
                                            } else {
                                                var v = x.data;
                                                for (var w = 0; w < v.length; w++) {
                                                    k.push(v[w].queryLeftNewDTO.station_train_code.toUpperCase())
                                                }
                                                cT = k
                                            }
                                        }
                                    }
                                })
                            } else {
                                if (cT.length == 0) {
                                    c6(m);
                                    $.ajax({
                                        type: 'get',
                                        async: false,
                                        isTakeParam: false,
                                        beforeSend: function (v) {
                                            v.setRequestHeader('If-Modified-Since', '0');
                                            v.setRequestHeader('Cache-Control', 'no-cache')
                                        },
                                        url: ctx + CLeftTicketUrl,
                                        data: m,
                                        timeout: 10000,
                                        success: function (x) {
                                            if (x.status) {
                                                if (x.data == null || x.data.length == 0) {
                                                    dhtmlx.alert({
                                                        title: '错误信息',
                                                        ok: '确定',
                                                        text: '您输入的车次与出发地目的地不符！',
                                                        type: 'alert-error',
                                                        callback: function () {
                                                        }
                                                    })
                                                } else {
                                                    var v = x.data;
                                                    for (var w = 0; w < v.length; w++) {
                                                        cT.push(v[w].queryLeftNewDTO.station_train_code.toUpperCase())
                                                    }
                                                }
                                            }
                                        }
                                    })
                                }
                            }
                            var c = false;
                            for (var t = 0; t < cT.length; t++) {
                                if (b == cT[t]) {
                                    c = true;
                                    break
                                }
                            }
                            if (!c) {
                                dhtmlx.alert({
                                    title: '错误信息',
                                    ok: '确定',
                                    text: '您输入的车次与出发地目的地不符！',
                                    type: 'alert-error',
                                    callback: function () {
                                        $('#inp-train') .val('')
                                    }
                                })
                            } else {
                                if ($.inArray(b, ccSelected) < 0) {
                                    var u = '<span class='sel-box w80'>' + b + '<a class='close' href='javascript:' onclick='$.removeSel(this,"' + b + '",4)'></a></span>';
                                    $('#prior_train') .append(u);
                                    ccSelected.push(b);
                                    $('#inp-train') .val('')
                                } else {
                                    dhtmlx.alert({
                                        title: '输入车次',
                                        ok: '确定',
                                        text: '此车次已经添加过！',
                                        type: 'alert-error',
                                        callback: function () {
                                            ccInputSelected = true;
                                            $('#inp-train') .select()
                                        }
                                    })
                                }
                            }
                        }
                    }
                }
            } else {
                dhtmlx.alert({
                    title: '输入车次',
                    ok: '确定',
                    text: '最多添加5个优先车次',
                    type: 'alert-error'
                });
                $('#inp-train') .val('')
            }
        }
    });
    function df() {
        if ($('#sf2') .is(':checked')) {
            return '0X00'
        } else {
            return 'ADULT'
        }
    }
    jQuery.extend({
        init_ul4li: function () {
            var c = [
            ];
            var a = 0;
            c[a++] = '<li><input name="cc_type" value="G" type="checkbox" class="check" /><label for="">GC-高铁/城际</label></li>';
            c[a++] = '<li><input name="cc_type" value="D" type="checkbox" class="check" /><label for="">D-动车</label></li>';
            c[a++] = '<li><input name="cc_type" value="Z" type="checkbox" class="check" /><label for="">Z-直达</label></li>';
            c[a++] = '<li><input name="cc_type" value="T" type="checkbox" class="check" /><label for="">T-特快</label></li>';
            c[a++] = '<li><input name="cc_type" value="K" type="checkbox" class="check" /><label for="">K-快速</label></li>';
            c[a++] = '<li><input name="cc_type" value="QT" type="checkbox" class="check" /><label for="">其他</label></li>';
            $('#_ul_station_train_code') .html(c.join(''));
            if (train_tour_flag == 'gc' && 'Y' == isDwTicketResign) {
                var d = $('#_ul_station_train_code li');
                for (var b = 2, e = d.length; b < e; b++) {
                    d.eq(b) .find('input') .attr('disabled', 'disabled');
                    d.eq(b) .find('label') .attr('for', '') .attr('style', 'color: rgb(153, 153, 153)')
                }
            }
            $('#startendtime') .html('<span class="b1" id="s_time">出发时间</span><br /><span class="b2" id="r_time">到达时间</span>');
            $('#floatstartendtime') .html('<span class="b1" id="other_span_starttime">出发时间</span><br /><span class="b2" id="other_span_endtime">到达时间</span>')
        },
        parseDateFormat: function (d) {
            var c = '';
            var b = d.getFullYear();
            var e = d.getMonth() + 1;
            var a = d.getDate();
            if (e < 10) {
                e = '0' + e
            }
            if (a < 10) {
                a = '0' + a
            }
            c = b + '-' + e + '-' + a;
            return c
        },
        renderPassenger: function () {
            if (passengerAll) {
                var j = passengerAll.length;
                var n = [
                ];
                var b = 0;
                var g = $('#searchPassenger') .val();
                for (var d = 0; d < j; d++) {
                    var f = passengerAll[d];
                    var h = f.passenger_type_name;
                    if (!h) {
                        h = ''
                    }
                    var c = '';
                    var a = '';
                    if ($('#sf2') .is(':checked')) {
                        if (f.passenger_type != '3') {
                            c = ' disabled='true' ';
                            a = ' class='color999' '
                        }
                    }
                    var l = f.total_times;
                    if (f.passenger_id_type_code == '2') {
                        c = ' disabled='true' ';
                        a = ' class='color999' title='请修改身份信息' '
                    } else {
                        if (f.passenger_id_type_code == '1') {
                            if (!isCanGP('1', l)) {
                                c = ' disabled='true' ';
                                a = ' class='color999' title='请修改身份信息' '
                            }
                        } else {
                            if (!isCanGP('B', l)) {
                                c = ' disabled='true' ';
                                a = ' class='color999' title='请修改身份信息' '
                            }
                        }
                    }
                    if (g != '' && g != '输入乘客姓名') {
                        if (f.passenger_name.indexOf(g) > - 1 || (f.first_letter && f.first_letter.toUpperCase() .indexOf(g.toUpperCase()) > - 1)) {
                            b++;
                            var e = '';
                            if ($.pHasInSelected(f)) {
                                e = ' checked='checked' '
                            }
                            n[d] = '<li ' + a + '><input ' + e + ' type='checkbox' ' + c + ' name='' + f.passenger_type + '' codeType='' + f.passenger_id_type_code + '' flag='' + f.total_times + '' class='check' />' + f.passenger_name + '(' + h + ')(' + f.passenger_id_no + ')</li>'
                        }
                    } else {
                        b++;
                        var e = '';
                        if ($.pHasInSelected(f)) {
                            e = ' checked='checked' '
                        }
                        n[d] = '<li ' + a + '><input  ' + e + ' type='checkbox' ' + c + ' name='' + f.passenger_type + '' codeType='' + f.passenger_id_type_code + '' flag='' + f.total_times + '' class='check' />' + f.passenger_name + '(' + h + ')(' + f.passenger_id_no + ')</li>'
                    }
                }
                var k = 100;
                var m = 0;
                if (b / 3 > 11) {
                    k = 310;
                    m = 258
                } else {
                    k = 100 + parseInt((b / 3) * 25);
                    m = k - 48
                }
                $('#sel-buyer') .css('height', k);
                $('#pContent') .css('height', m);
                $('#buyer-list') .html(n.join(''))
            }
            $('#buyer-list input') .click(function () {
                var o = $('#setion_postion span') .length;
                var r = this.nextSibling.nodeValue;
                if (this.checked) {
                    if (o < 6) {
                        var q = '';
                        var p = true;
                        if (r.indexOf('成人') > - 1) {
                            q = '<span name='' + r + '' class='sel-box w80'><a href='javascript:' onclick='$.addChildPassenger("' + r + '");' style='position:static;background:none;width:auto;' title='您可点击此乘车人添加儿童票。'>' + r + '</a><a class='close' href='javascript:' onclick='$.removeSel(this,"' + r + '",1)'></a></span>';
                            $('#setion_postion') .append(q);
                            $.checkedPasseanger(r)
                        } else {
                            if (r.indexOf('学生') > - 1) {
                                var t = $(this);
                                if ($.checkSeatTypes()) {
                                    q = '<span name='' + r + '' class='sel-box w80'>' + r + '<a class='close' href='javascript:' onclick='$.removeSel(this,"' + r + '",1)'></a></span>';
                                    $('#setion_postion') .append(q);
                                    $.checkedPasseanger(r)
                                } else {
                                    $('#conifrmdialog_student_to_adult_context') .html('当前选择的优先席别有不支持学生票的，是否选择购买成人票？');
                                    dhtmlx.createWin({
                                        winId: 'confirmChangeStudentToAdult',
                                        closeWinId: [
                                            'close_conifrmdialog_student_to_adult',
                                            'cancel_dialog_student_to_adult'
                                        ],
                                        callback: function () {
                                            $(t) .prop('checked', false)
                                        },
                                        okId: 'goto_student_to_adult',
                                        okCallBack: function () {
                                            var u = r.replace(/学生/, '成人');
                                            q = '<span name='' + r + '' class='sel-box w80'>' + u + '<a class='close' href='javascript:' onclick='$.removeSel(this,"' + r + '",1)'></a></span>';
                                            $('#setion_postion') .append(q);
                                            $.checkedPasseanger(u)
                                        }
                                    })
                                }
                            } else {
                                if (r.indexOf('儿童') > - 1) {
                                    q = '<span name='' + r + '' class='sel-box w80' title='如需修改旅客类型，请修改相应常用联系人信息。'>' + r + '<a class='close' href='javascript:' onclick='$.removeSel(this,"' + r + '",1)'></a></span>';
                                    $('#setion_postion') .append(q);
                                    $.checkedPasseanger(r)
                                } else {
                                    q = '<span name='' + r + '' class='sel-box w80'>' + r + '<a class='close' href='javascript:' onclick='$.removeSel(this,"' + r + '",1)'></a></span>';
                                    $('#setion_postion') .append(q);
                                    $.checkedPasseanger(r)
                                }
                            }
                        }
                    } else {
                        dhtmlx.alert({
                            title: '添加常用联系人',
                            ok: '确定',
                            text: '最多添加5位联系人',
                            type: 'alert-error'
                        });
                        this.checked = false
                    }
                } else {
                    $.each($('#setion_postion span'), function (v, u) {
                        if (r == $(u) .attr('name')) {
                            $(u) .remove();
                            $.removePasseanger(r);
                            return
                        }
                    })
                }
            })
        },
        reloadPassenger: function () {
            var a = dhtmlx.modalbox({
                targSrc: '<div><img src="' + ctx + 'resources/images/loading.gif"></img></div>',
                callback: function () {
                }
            });
            $.ajax({
                type: 'post',
                isTakeParam: false,
                cache: false,
                async: false,
                url: ctx + 'confirmPassenger/getPassengerDTOs',
                timeout: 10000,
                error: function (c, d, b) {
                    dhtmlx.modalbox.hide(a)
                },
                success: function (d) {
                    dhtmlx.modalbox.hide(a);
                    if (d.status) {
                        if (d.data.noLogin == 'true') {
                            cK();
                            $('#floatTable') .hide();
                            dF = $(window) .scrollTop();
                            cY()
                        } else {
                            if (d.data.exMsg != '' && d.data.exMsg != null && d.data.exMsg != 'null') {
                                dB(d.data.exMsg);
                                return
                            }
                            $('#sel-buyer') .show();
                            $('#sel-seat') .hide();
                            $('#sel-date') .hide();
                            $('#sel-buyer') .css('left', $('#sear-sel') .position() .left + 80);
                            $('#sel-buyer') .css('left', $('#sear-sel') .position() .left + 80);
                            $('#sel-buyer') .css('top', $('#sear-sel') .position() .top + 4 * 28 + 16);
                            passengerAll = d.data.normal_passengers;
                            if (!(passengerAll && passengerAll.length > 0)) {
                                passengerAll = [
                                ]
                            }
                            var e = d.data.dj_passengers;
                            if (e && e.length > 0) {
                                var b = e.length;
                                for (var c = 0; c < b; c++) {
                                    if (!$.checkIsHas(passengerAll, e[c])) {
                                        passengerAll.push(e[c])
                                    }
                                }
                            }
                            two_isOpenClick = d.data.two_isOpenClick;
                            other_isOpenClick = d.data.other_isOpenClick;
                            $.renderPassenger()
                        }
                    }
                }
            })
        },
        checkIsHas: function (d, c) {
            var a = d.length;
            for (var b = 0; b < a; b++) {
                if (d[b].passenger_name == c.passenger_name && d[b].passenger_id_type_code == c.passenger_id_type_code && c.passenger_id_no == d[b].passenger_id_no) {
                    return true
                }
            }
            return false
        },
        pHasInSelected: function (c) {
            var a = passengerChecked.length;
            if (a > 0) {
                for (var b = 0; b < a; b++) {
                    var d = passengerChecked[b];
                    if (d.passenger_name == c.passenger_name && d.passenger_id_type_code == c.passenger_id_type_code && d.passenger_id_no == c.passenger_id_no) {
                        return true
                    }
                }
            }
            return false
        },
        showSelectBuyer: function () {
            if (!passengerAll) {
                $.reloadPassenger()
            } else {
                var c = $('#buyer-list input');
                for (var b = 0; b < c.length; b++) {
                    var e = $(c[b]) .attr('name');
                    var a = $(c[b]) .attr('codeType');
                    var d = $(c[b]) .attr('flag');
                    if ($('#sf2') .is(':checked')) {
                        if (e != '3') {
                            $(c[b]) .attr('disabled', 'true');
                            $(c[b]) .parent() .addClass('color999')
                        } else {
                            $(c[b]) .removeAttr('disabled');
                            $(c[b]) .parent() .removeClass('color999')
                        }
                    } else {
                        $(c[b]) .removeAttr('disabled');
                        $(c[b]) .parent() .removeClass('color999')
                    }
                    if (a == '2') {
                        $(c[b]) .attr('disabled', 'true');
                        $(c[b]) .parent() .addClass('color999')
                    } else {
                        if (a == '1') {
                            if (!isCanGP('1', d)) {
                                $(c[b]) .attr('disabled', 'true');
                                $(c[b]) .parent() .addClass('color999')
                            }
                        } else {
                            if (!isCanGP('B', d)) {
                                $(c[b]) .attr('disabled', 'true');
                                $(c[b]) .parent() .addClass('color999')
                            }
                        }
                    }
                }
                $('#sel-buyer') .show();
                $('#sel-seat') .hide();
                $('#sel-date') .hide();
                $('#sel-buyer') .css('left', $('#sear-sel') .position() .left + 80);
                $('#sel-buyer') .css('top', $('#sear-sel') .position() .top + 4 * 28 + 16)
            }
        },
        getMindateForCal: function () {
            if ($('#sf2') .is(':checked')) {
                dj = studentMindate
            } else {
                dj = otherMindate
            }
            return dj
        },
        getMaxdateForCal: function () {
            if ($('#sf2') .is(':checked')) {
                cW = studentMaxdate
            } else {
                cW = otherMaxdate
            }
            return cW
        }
    });
    function cU() {
        $('#show_all_query_result') .click(function () {
            dL = new Array();
            cv = new Array();
            dY = new Array();
            $('#train_type_btn_all') .removeClass() .addClass('btn-all');
            $('#start_time_btn_all') .removeClass() .addClass('btn-all');
            $('#arrive_time_btn_all') .removeClass() .addClass('btn-all');
            $('#seat_type_btn_all') .removeClass() .addClass('btn-all');
            $('#from_station_name_all') .removeClass() .addClass('btn-all');
            $('#to_station_name_all') .removeClass() .addClass('btn-all');
            $('#sear-sel-bd input') .each(function () {
                if (this.checked) {
                    this.checked = false
                }
            });
            if (ef) {
                ef.setComboText('')
            }
            $('#avail_ticket') .attr('checked', false);
            da()
        })
    }
    function dl() {
        var a = $('#queryPriceTemplate') .html() .replace('<!--', '') .replace('-->', '');
        $.templates({
            priceTableTemplate: a
        });
        var a = $('#fromStationNameTemplate') .html() .replace('<!--', '') .replace('-->', '');
        $.templates({
            stationNameTableTemplate: a
        });
        var a = $('#toStationNameTemplate') .html() .replace('<!--', '') .replace('-->', '');
        $.templates({
            toStationNameTableTemplate: a
        });
        var a = $('#seatTypeTemplate') .html() .replace('<!--', '') .replace('-->', '');
        $.templates({
            seatTypeTemplate: a
        });
        var a = $('#stationinfoTemplate') .html() .replace('<!--', '') .replace('-->', '');
        $.templates({
            stationinfoTemplate: a
        })
    }
    function bW(a) {
        dhtmlXCombo_defaultOption.prototype._DrawHeaderButton = function () {
        };
        $('#train_combo_box') .hide();
        var b = [
        ];
        if (!ef) {
            ef = new dhtmlXCombo('train_combo_box_div', 'cc', 90)
        } else {
            ef.setComboText('')
        }
        ef.clearAll();
        $(a) .each(function () {
            b.push([this.queryLeftNewDTO.station_train_code,
            this.queryLeftNewDTO.station_train_code])
        });
        ef.addOption(b);
        ef.enableFilteringMode(true);
        ef.attachEvent('onChange', function () {
            if (ef.getComboText() != '') {
                if ($('#iLcear') .is(':hidden')) {
                    $('#iLcear') .show()
                }
            }
            da()
        });
        if (!$('#iLcear') [0]) {
            $('.dhx_combo_box ') .append($('<span style="display: none;" class="i-clear dhx_combo_img_iClear" id="iLcear"></span>'));
            $('#iLcear') .on('click', function () {
                if (ef) {
                    ef.setComboText('');
                    $(this) .hide()
                }
            })
        }
        $('.dhx_combo_input') .on('keyup', function () {
            if ($(this) .val() == '') {
                $('#iLcear') .hide()
            } else {
                if ($('#iLcear') .is(':hidden')) {
                    $('#iLcear') .show()
                }
            }
        })
    }
    function dt() {
        if (!eq) {
            eq = new dhtmlXWindows();
            eq.enableAutoViewport(true);
            eq.setSkin('dhx_terrace');
            eq.attachViewportTo('winVP');
            eq.setImagePath(ctx + 'resources/js/rich/windows/imgs/')
        }
    }
    function dX() {
        eq.window('login') .hide();
        eq.window('login') .setModal(false)
    }
    function cK() {
        if (eq.window('login')) {
            eq.window('login') .setModal(false);
            eq.window('login') .hide()
        }
        ch = eq.createWindow('login', 0, 0, 400, 350);
        var b = $(window) .width() / 2 - 140;
        var a = d8() + ($(window) .height() / 2 - 205);
        ch.attachObject('relogin');
        ch.setDimension($('#content') .width(), $('#content') .height() + 10);
        $('.dhtmlx_window_active') .height($('#content') .height());
        $('.dhtmlx_window_active') .css({
            left: b,
            top: a
        });
        ch.bringToTop();
        eq.window('login') .clearIcon();
        eq.window('login') .denyResize();
        ch.button('park') .hide();
        ch.button('minmax1') .hide();
        ch.hideHeader();
        refreshImg('login', 'sjrand');
        ch.setModal(true);
        $('#relogin_close') .click(function () {
            c9();
            var d = $(window) .scrollTop();
            var c = $('#float') .position() .top;
            if (d > c + 30) {
                $('#floatTable') .show()
            }
            dX()
        });
        if (typeof (touclickHook_leftTicketLogin) === 'function') {
            touclickHook_leftTicketLogin()
        }
    }
    function c9() {
        cq();
        $('#username') .val('');
        $('#password') .val('');
        $('#randCode') .val('');
        dS()
    }
    function d8() {
        if ('pageYOffset' in window) {
            return window.pageYOffset
        } else {
            if (document.compatMode == 'BackCompat') {
                return document.body.scrollTop
            } else {
                return document.documentElement.scrollTop
            }
        }
    }
    function cq() {
        $('#username') .add($('#password')) .add($('#randCode')) .add($('#randCode2')) .removeClass('error')
    }
    function dy(c) {
        var b = /^[A-Za-z]{1}([A-Za-z0-9]|[_]){0,29}$/;
        var d = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
        var a = true;
        cq();
        if ('' == c || c == null || c == '用户名／邮箱' || c == 'admin') {
            $('#username') .removeClass('inptxt w200') .addClass('inptxt w200 error');
            a = login_messages.userNameEmpty
        } else {
            if (!b.test(c) && !d.test(c)) {
                $('#username') .removeClass('inptxt w200') .addClass('inptxt w200 error');
                a = login_messages.userNameFormat
            }
        }
        return a
    }
    function dU(b) {
        var a = true;
        cq();
        if ('' == b || b == null) {
            $('#password') .removeClass('inptxt w200') .addClass('inptxt w200 error');
            a = login_messages.passwordEmpty
        } else {
            if (b.length < 6) {
                $('#password') .removeClass('inptxt w200') .addClass('inptxt w200 error');
                a = login_messages.passwordLength
            }
        }
        return a
    }
    function co() {
        var b = $.trim($('#username') .val());
        var a = $.trim($('#password') .val());
        var c = dy(b);
        return typeof (c) === 'boolean' ? dU(a)  : c
    }
    function dA() {
        var a = false;
        var b = false;
        $('#username') .on('keyup', function () {
            b4 = true
        }) .blur(function () {
            if (b4) {
                var c = $.trim($('#username') .val());
                a = dy(c);
                if (typeof (a) !== 'boolean') {
                    showError($('#randCode') [0], a)
                } else {
                    if (a === true) {
                        showError($('#randCode') [0]) .hide()
                    }
                }
            }
        });
        $('#password') .blur(function () {
            if (b4) {
                var c = $.trim($('#password') .val());
                if (a === true && typeof (b = dU(c)) !== 'boolean') {
                    showError($('#randCode') [0], b)
                } else {
                    if (a === true && b === true) {
                        showError($('#randCode') [0]) .hide()
                    }
                }
            }
        })
    }
    function cS(a, b) {
        $('#loginSubAsyn') .unbind('click');
        $('#loginSubAsyn') .click(function () {
            var c = co();
            if (!verifyRandCode($('#randCode') [0], c)) {
                return
            }
            $('#loginForm') .ajaxSubmit({
                url: ctx + 'login/loginUserAsyn?random=' + new Date() .getTime(),
                type: 'post',
                dataType: 'json',
                async: false,
                success: function (d) {
                    if (d.data.status) {
                        if (d.data.username != null) {
                            dX();
                            loginAsyn(d.data.username);
                            if ('Y' == d.data.notifysession) {
                                dhtmlx.createWin({
                                    winId: 'notifysession',
                                    closeWinId: [
                                        'close_notifysession'
                                    ],
                                    okId: 'goto_notifysession',
                                    okCallBack: function () {
                                        b2(a, b)
                                    }
                                })
                            } else {
                                b2(a, b)
                            }
                        }
                    } else {
                        showSuc($('#randCode') [0]) .hide();
                        refreshImg('login', 'sjrand');
                        $('#password') .val('');
                        $('#randCode') .val('');
                        if (d.data.loginFail != null) {
                            if (d.data.loginFail == '登录名不存在!') {
                                b4 = false;
                                cq();
                                $('#username') .removeClass('error') .focus()
                            } else {
                                if (d.data.loginFail == '验证码不正确！' && d.data.loginFail != '登录名不存在!') {
                                    cq();
                                    $('#randCode') .removeClass('inptxt w100') .addClass('inptxt w200 error');
                                    $('#randCode') .focus()
                                } else {
                                    if (d.data.loginFail != '验证码不正确！' && d.data.loginFail != '登录名不存在!') {
                                        cq();
                                        $('#password') .removeClass('inptxt w200') .addClass('inptxt w200 error');
                                        $('#password') .focus()
                                    }
                                }
                            }
                            showError($('#randCode') [0], d.data.loginFail)
                        }
                    }
                }
            })
        })
    }
    function cY() {
        var a = false;
        $('#loginSubAsyn') .unbind('click');
        $('#loginSubAsyn') .click(function () {
            if (!a) {
                var b = co();
                if (!verifyRandCode($('#randCode') [0], b)) {
                    a = false;
                    return
                }
                a = true;
                $('#loginForm') .ajaxSubmit({
                    url: ctx + 'login/loginUserAsyn?random=' + new Date() .getTime(),
                    type: 'post',
                    dataType: 'json',
                    async: false,
                    success: function (c) {
                        if (c.data.status) {
                            if (c.data.username != null) {
                                dX();
                                loginAsyn(c.data.username)
                            }
                        } else {
                            $('#i-ok') .hide();
                            refreshImg('login', 'sjrand');
                            $('#password') .val('');
                            $('#randCode') .val('');
                            if (c.data.loginFail != null) {
                                if (c.data.loginFail == '登录名不存在!') {
                                    b4 = false;
                                    cq();
                                    $('#username') .removeClass('inptxt w200') .addClass('inptxt w200 error');
                                    $('#username') .focus()
                                } else {
                                    if (c.data.loginFail == '验证码不正确！' && c.data.loginFail != '登录名不存在!') {
                                        cq();
                                        $('#randCode') .removeClass('inptxt w100') .addClass('inptxt w200 error');
                                        $('#randCode') .focus()
                                    } else {
                                        if (c.data.loginFail != '验证码不正确！' && c.data.loginFail != '登录名不存在!') {
                                            cq();
                                            $('#password') .removeClass('inptxt w200') .addClass('inptxt w200 error');
                                            $('#password') .focus()
                                        }
                                    }
                                }
                                showError($('#randCode') [0], c.data.loginFail)
                            }
                        }
                    },
                    complete: function () {
                        a = false
                    }
                })
            }
        })
    }
    function cm() {
        window.sucessCallback = function () {
            dT = $('#randCode2') .val();
            $('#back_edit') .trigger('click');
            var a = '11000G1234';
            var b = '##CCT##PPT##CPT##PXT##SBT##PBD##JOD##HPD##SHD##QTP##TSP##TJP##';
            var c = '##CBP##DIP##JGK##ZEK##UUH##NKH##ESH##OHH##AOH##';
            if (isAsync == ticket_submit_order.request_flag.isAsync) {
                if (cM.queryLeftNewDTO.train_no.indexOf(a) > - 1 && b.indexOf(cM.queryLeftNewDTO.from_station_telecode) > - 1 && c.indexOf(cM.queryLeftNewDTO.to_station_telecode) > - 1) {
                    dhtmlx.createWin({
                        winId: 'confirmG1234',
                        closeWinId: [
                            'close_conifrmdialog_G1234',
                            'cancel_dialog_G1234'
                        ],
                        okId: 'goto_integration_G1234',
                        okCallBack: function () {
                            eg()
                        },
                        callback: function () {
                            return
                        }
                    })
                } else {
                    eg()
                }
            } else {
                if (cM.queryLeftNewDTO.train_no.indexOf(a) > - 1 && b.indexOf(cM.queryLeftNewDTO.from_station_telecode) > - 1 && c.indexOf(cM.queryLeftNewDTO.to_station_telecode) > - 1) {
                    dhtmlx.createWin({
                        winId: 'confirmG1234',
                        closeWinId: [
                            'close_conifrmdialog_G1234',
                            'cancel_dialog_G1234'
                        ],
                        okId: 'goto_integration_G1234',
                        okCallBack: function () {
                            dc()
                        },
                        callback: function () {
                            return
                        }
                    })
                } else {
                    dc()
                }
            }
            return
        }
    }
    function dS() {
        $('#username') .css('color', '#333');
        $('#password') .css('color', '#333');
        $('#randCode') .css('color', '#333');
        if ($('#username') .val() == '' || $('#username') .val() == '用户名／邮箱' || $('#username') .val() == null || $('#username') .val() == 'admin') {
            $('#username') .css('color', '#999');
            $('#username') .val('用户名／邮箱');
            $('#password') .val('')
        }
        $('#username') .focus(function () {
            var a = $('#username') .val();
            if (a == '用户名／邮箱') {
                $('#username') .css('color', '#333');
                $('#username') .val('');
                $('#password') .val('')
            }
        }) .blur(function () {
            var a = $('#username') .val();
            if (a == '') {
                $('#username') .css('color', '#999');
                $('#username') .val('用户名／邮箱')
            }
        })
    }
    function cy() {
        $('#forget_my_password_id') .on('click', function (a) {
            otsRedirect('post', ctx + 'forgetPassword/initforgetMyPassword')
        })
    }
    function cn() {
        var h = 1;
        var b;
        var l;
        var f;
        var c = true;
        var d = true;
        var n = true;
        var j;
        var g;
        var m = false;
        var a = false;
        var k = false;
        f = dataNumber;
        var o;
        if (train_tour_flag != null && train_tour_flag != '' && train_tour_flag == 'fc') {
            o = jQuery.inArray($('#back_train_date') .val() .substring(5, 10), change_dates_arr)
        } else {
            o = jQuery.inArray($('#train_date') .val() .substring(5, 10), change_dates_arr)
        }
        if (o != '-1') {
            o = o + 1;
            j = firstShow;
            g = endShow;
            if (parseInt(o) >= parseInt(firstShow) && parseInt(o) <= parseInt(endShow)) {
                if (isOther) {
                    if (parseInt(endShow) > parseInt(other_control)) {
                        endShow = other_control;
                        a = true;
                        m = true
                    }
                } else {
                    if (parseInt(endShow) > parseInt(stu_control)) {
                        endShow = stu_control
                    }
                }
                if (!a) {
                    c = false;
                    d = false;
                    n = false;
                    l = endShow + 1
                }
            } else {
                m = true;
                firstShow = o;
                endShow = firstShow + 19;
                if (isOther) {
                    if (parseInt(endShow) > parseInt(other_control)) {
                        endShow = other_control;
                        a = true
                    }
                } else {
                    if (parseInt(endShow) > parseInt(stu_control)) {
                        endShow = stu_control;
                        a = true
                    }
                }
                if (!a) {
                    b = firstShow - 1;
                    l = endShow + 1;
                    if (b < h) {
                        c = false
                    }
                }
            }
            if (isOther) {
                if (other_control < dataNumber) {
                    k = true
                }
            } else {
                if (stu_control < dataNumber) {
                    k = true
                }
            }
            if (a) {
                m = true;
                firstShow = endShow - 19;
                b = firstShow - 1;
                if (k) {
                    d = true;
                    l = endShow + 1;
                    f = dataNumber
                } else {
                    d = false
                }
                if (train_tour_flag != null && train_tour_flag != '' && train_tour_flag == 'fc') {
                    $('#back_train_date') .val(fullDateArr[o - 1])
                } else {
                    $('#train_date') .val(fullDateArr[o - 1])
                }
            }
            if (parseInt(firstShow) < 1) {
                firstShow = 1
            }
            if (c) {
                for (var e = h; e <= b; e++) {
                    $('#date_range>ul>li:nth-child(' + e + ')') .hide()
                }
            }
            if (d) {
                for (var e = l; e <= f; e++) {
                    $('#date_range>ul>li:nth-child(' + e + ')') .hide()
                }
            }
            if (n) {
                for (var e = firstShow; e <= endShow; e++) {
                    $('#date_range>ul>li:nth-child(' + e + ')') .show()
                }
            }
            $('#date_range>ul>li') .removeClass('sel');
            if (m) {
                $('#date_range>ul>li:nth-child(' + j + ')') .children('span:first') .removeClass();
                $('#date_range>ul>li:nth-child(' + j + ')') .children('span:last') .removeClass();
                $('#date_range>ul>li:nth-child(' + g + ')') .removeClass();
                $('#date_range>ul>li:nth-child(' + firstShow + ')') .children('span:first') .addClass('first');
                $('#date_range>ul>li:nth-child(' + firstShow + ')') .children('span:last') .addClass('first');
                $('#date_range>ul>li:nth-child(' + firstShow + ')') .children() .addClass('first');
                $('#date_range>ul>li:nth-child(' + endShow + ')') .addClass('end')
            }
            $('#date_range>ul>li:nth-child(' + o + ')') .addClass('sel');
            $('#date_range>ul>li:nth-child(' + o + ')') .children('span:last-child') .removeClass();
            $('#date_range>ul>li:nth-child(' + o + ')') .children('span:first-child') .addClass('hide');
            cz = $('#date_range>ul>li:nth-child(' + o + ')') .children('span:first-child') .text()
        }
    }
    function cC() {
        $('#query_ticket') .unbind('click');
        $('#query_ticket_stu') .unbind('click');
        $('#query_ticket') .removeClass() .addClass('btn92s btn-disabled');
        $('#query_ticket_stu') .removeClass() .addClass('btn92s btn-disabled');
        ds();
        setTimeout(function () {
            dd();
            et();
            $('#query_ticket') .removeClass() .addClass('btn92s');
            $('#query_ticket_stu') .removeClass() .addClass('btn92s');
            if (train_tour_flag != 'gc' && train_tour_flag != 'fc') {
                if (ClickWho == '0X00') {
                    $('#query_ticket') .unbind();
                    $('#query_ticket') .removeClass() .addClass('btn92s btn-disabled');
                    $('#query_ticket_stu') .removeClass() .addClass('btn92s')
                }
                if (ClickWho == '00') {
                    $('#query_ticket_stu') .unbind();
                    $('#query_ticket_stu') .removeClass() .addClass('btn92s btn-disabled');
                    $('#query_ticket') .removeClass() .addClass('btn92s')
                }
            }
            if (isstudentDate) {
                $('#query_ticket_stu') .unbind();
                $('#query_ticket_stu') .removeClass() .addClass('btn92s btn-disabled');
                $('#query_ticket') .removeClass() .addClass('btn92s')
            }
        }, 1000)
    }
    changeArriveDate = function (a, b) {
        a = a.replace(':', '');
        b = b.replace(':', '');
        hour_value = Number(a.substring(0, 2)) + Number(b.substring(0, 2));
        min_value = Number(a.substring(2, 4)) + Number(b.substring(2, 4));
        if (min_value >= 60) {
            hour_value = hour_value + 1
        }
        if (hour_value >= 24 && hour_value < 48) {
            return '次日'
        } else {
            if (hour_value >= 48 && hour_value < 72) {
                return '两日'
            } else {
                if (hour_value >= 72) {
                    return '三日'
                } else {
                    return '当日'
                }
            }
        }
    };
    changeLiShi = function (a) {
        if (a.substring(0, 1) == '0') {
            if (a.substring(1, 2) == '0') {
                if (a.substring(3, 4) == '0') {
                    a = a.substring(4, 5) + '分'
                } else {
                    a = a.substring(3, 5) + '分'
                }
            } else {
                a = a.substring(1, 2) + '小时' + a.substring(3, 5) + '分'
            }
        } else {
            if (a.substring(3, 5) == '00') {
                a = a.substring(0, 2) + '小时'
            } else {
                a = a.substring(0, 2) + '小时' + a.substring(3, 5) + '分'
            }
        }
        return a
    };
    isNum = function (a) {
        return parseInt(a)
    };
    buttonText = function () {
        return '预订'
    };
    function dO() {
        if ($('#sf2') .is(':checked')) {
            if (dw($('#train_date') .val()) > dw(init_maxPeriod) - 24 * 60 * 60 * 1000) {
                ds()
            } else {
                et()
            }
        }
    }
    function dG() {
        if (train_tour_flag == 'fc') {
            var a = $('#back_train_date') .val();
            dC('back_train_date')
        } else {
            var a = $('#train_date') .val();
            dC('train_date')
        }
        if (rqChecked.length == 0) {
            rqChecked.push(a)
        }
        var c = false;
        if (a != rqChecked[0]) {
            for (var b = 0; b < rqChecked.length; b++) {
                if (a == rqChecked[b]) {
                    c = true;
                    rqChecked.splice(b, 1);
                    $('#date-list input[value=' + rqChecked[0] + ']') .prop('checked', false);
                    rqChecked.splice(0, 1, a);
                    $('#prior_date span[name=' + a + ']') .remove();
                    break
                }
            }
            if (!c) {
                $('#date-list input[value=' + rqChecked[0] + ']') .prop('checked', false);
                rqChecked.splice(0, 1, a);
                $('#date-list input[value=' + rqChecked[0] + ']') .prop('checked', true)
            }
        }
    }
    $('#train_date') .focus(function () {
        WdatePicker({
            doubleCalendar: true,
            minDate: $.getMindateForCal(),
            maxDate: $.getMaxdateForCal(),
            isShowClear: false,
            readOnly: true,
            qsEnabled: false,
            onpicked: function () {
                dG();
                $('#train_date') .blur();
                var b = $('#train_date') .val();
                var a = $('#back_train_date') .val();
                if ($('#wf') .is(':checked')) {
                    if (!a | dw(b) > dw(a)) {
                        $('#back_train_date') .val(b)
                    }
                }
                cn()
            }
        })
    });
    $('#date_icon_1') .click(function () {
        $('#train_date') .focus()
    });
    $('#back_train_date') .focus(function () {
        WdatePicker({
            doubleCalendar: true,
            minDate: $('#train_date') .val(),
            maxDate: $.getMaxdateForCal(),
            isShowClear: false,
            readOnly: true,
            qsEnabled: false,
            onpicked: function () {
                dG();
                $('#back_train_date') .blur();
                cn()
            }
        })
    });
    $('#date_icon_2') .click(function () {
        $('#back_train_date') .focus()
    });
    String.prototype.toDate = function () {
        style = 'yyyy-MM-dd hh:mm';
        var c = {
            'y+': 'y',
            'M+': 'M',
            'd+': 'd',
            'h+': 'h',
            'm+': 'm'
        };
        var b = {
            y: '',
            M: '',
            d: '',
            h: '00',
            m: '00'
        };
        var d = style;
        for (var a in c) {
            if (new RegExp('(' + a + ')') .test(style)) {
                b[c[a]] = this.substring(d.indexOf(RegExp.$1), d.indexOf(RegExp.$1) + RegExp.$1.length)
            }
        }
        return new Date(b.y, b.M - 1, b.d, b.h, b.m)
    };
    function dC(a) {
        if (a == 'back_train_date' && ClickWho != '0X00') {
            return
        }
        var e = ($('#' + a) .val() .split(' ') [0] + ' 00:00:00') .toDate() .getTime();
        var f = stu_start_train_date.split('&');
        var c = stu_end_tain_date.split('&');
        var d = false;
        for (var b = 0, g = f.length; b < g; b++) {
            if (e >= f[b].toDate() .getTime() && e <= c[b].toDate() .getTime()) {
                d = true;
                break
            }
        }
        if (d) {
            $('#sf2') .attr('disabled', false);
            $('#sf2_label') .removeClass('color999')
        } else {
            $('#sf2') .attr('checked', false);
            $('#sf1') [0]['checked'] = 'checked';
            $('#sf2') .attr('disabled', true);
            $('#sf2_label') .addClass('color999')
        }
    }
    function c6(a) {
        if (isSaveQueryLog == 'Y') {
            $.ajax({
                type: 'get',
                isTakeParam: false,
                beforeSend: function (b) {
                    b.setRequestHeader('If-Modified-Since', '0');
                    b.setRequestHeader('Cache-Control', 'no-cache')
                },
                url: ctx + 'leftTicket/log',
                data: a,
                timeout: 1000,
                error: function (c, d, b) {
                },
                success: function (b) {
                }
            })
        }
    }
}) ();
function checkG1234(k, l, o, j, p) {
    var q = '11000G1234';
    var m = '##CCT##PPT##CPT##PXT##SBT##PBD##JOD##HPD##SHD##QTP##TSP##TJP##';
    var n = '##CBP##DIP##JGK##ZEK##UUH##NKH##ESH##OHH##AOH##';
    if (o.indexOf(q) > - 1 && m.indexOf(j) > - 1 && n.indexOf(p) > - 1) {
        dhtmlx.createWin({
            winId: 'confirmG1234',
            closeWinId: [
                'close_conifrmdialog_G1234',
                'cancel_dialog_G1234'
            ],
            okId: 'goto_integration_G1234',
            okCallBack: function () {
                submitOrderRequest(k, l)
            },
            callback: function () {
                return
            }
        })
    } else {
        submitOrderRequest(k, l)
    }
};
var left_ticket_messages = {
    'leftTicketDTO.from_station': '出发站',
    'leftTicketDTO.to_station': '目的站',
    'leftTicketDTO.train_no': '车次',
    'leftTicketDTO.train_date': '出发日',
    back_train_date: '返程日'
};
jQuery.validator.addMethod('checkLoginUserName', function (j, g) {
    var i = false;
    var h = /^[A-Za-z]{1}([A-Za-z0-9]|[_]){0,29}$/;
    var f = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
    if (h.test(j) || f.test(j)) {
        i = true
    }
    return this.optional(g) || i
}, 'wrong username.');
jQuery.validator.addMethod('requiredUserName', function (c, d) {
    if ('用户名／邮箱' == c) {
        return false
    }
    if (c == null || '' == c) {
        return false
    }
    return true
}, 'wrong username.');
jQuery.validator.addMethod('requiredSchoolName', function (c, d) {
    if ('简码／汉字' == c) {
        return false
    }
    if (c == null || '' == c) {
        return false
    }
    return true
}, 'wrong schoolname.');
jQuery.validator.addMethod('randCodeRequired', function (c, d) {
    $('#i-ok') .css('display', 'none');
    return c.length > 0
}, '验证码错误!');
jQuery.validator.addMethod('randCodeFormat', function (e, f) {
    $('#i-ok') .css('display', 'none');
    var d = /^[a-zA-Z0-9]+$/;
    return this.optional(f) || d.test(e)
}, '验证码错误!');
jQuery.validator.addMethod('randCodeLength', function (c, d) {
    $('#i-ok') .css('display', 'none');
    return c.length == 4
}, '验证码错误!.');
jQuery.validator.addMethod('integrationCheck', function (f, d) {
    var e = /^\d{6}$/;
    return this.optional(d) || e.test(f)
}, 'wrong integrationpassword');
jQuery.validator.addMethod('integrationPwdCheck', function (f, d, e) {
    if ($('#' + e[0]) .val() == $('#' + e[1]) .val()) {
        return true
    }
    return false
}, '两次输入密码不一致!.');
jQuery.validator.addMethod('checkRandCode', function (f, g, e) {
    var h = true;
    if (f && f.length == 4) {
        $.ajax({
            url: ctx + 'passcodeNew/checkRandCodeAnsyn',
            type: 'post',
            data: {
                randCode: f,
                rand: e
            },
            async: false,
            success: function (a) {
                if (a.data == 'N') {
                    h = false;
                    $('#i-ok') .css('display', 'none')
                } else {
                    h = true;
                    $('#i-ok') .css('display', 'block')
                }
            }
        })
    } else {
        h = false;
        $('#i-ok') .css('display', 'none')
    }
    return h
}, '验证码错误!.');
jQuery.validator.addMethod('validateUsersName', function (c, d) {
    return this.optional(d) || /^[A-Za-z]{1}([A-Za-z0-9]|[_]){0,29}$/.test(c)
}, '用户名只能由字母、数字或_组成');
jQuery.validator.addMethod('checkWriteSpace', function (e, f) {
    for (var d = 0; d < e.length; d++) {
        if (e.charCodeAt(d) == 32) {
            return false
        }
    }
    return true
}, 'contain writespace');
jQuery.validator.addMethod('validateRandCode', function (c, d) {
    return this.optional(d) || /^[a-zA-Z0-9]+$/.test(c)
}, '验证码错误!.');
jQuery.validator.addMethod('checkPassward', function (g, h, j) {
    var f = true;
    for (var i = 0; i < g.length; i++) {
        if (g.charCodeAt(i) == 39 || g.charCodeAt(i) == 60 || g.charCodeAt(i) == 62) {
            f = false
        }
        if (!f) {
            break
        }
    }
    return this.optional(h) || f
}, 'Passward wrong');
function validateSecIdCard(n) {
    var d = 0;
    var l = n;
    var i = {
        11: '北京',
        12: '天津',
        13: '河北',
        14: '山西',
        15: '内蒙',
        21: '辽宁',
        22: '吉林',
        23: '黑龙',
        31: '上海',
        32: '江苏',
        33: '浙江',
        34: '安徽',
        35: '福建',
        36: '江西',
        37: '山东',
        41: '河南',
        42: '湖北',
        43: '湖南',
        44: '广东',
        45: '广西',
        46: '海南',
        50: '重庆',
        51: '四川',
        52: '贵州',
        53: '云南',
        54: '西藏',
        61: '陕西',
        62: '甘肃',
        63: '青海',
        64: '宁夏',
        65: '新疆',
        71: '台湾',
        81: '香港',
        82: '澳门',
        91: '国外'
    };
    if (!/^\d{17}(\d|x)$/i.test(l)) {
        return false
    }
    l = l.replace(/x$/i, 'a');
    if (i[parseInt(l.substr(0, 2))] == null) {
        return false
    }
    var j = l.substr(6, 4) + '-' + Number(l.substr(10, 2)) + '-' + Number(l.substr(12, 2));
    var m = new Date(j.replace(/-/g, '/'));
    if (j != (m.getFullYear() + '-' + (m.getMonth() + 1) + '-' + m.getDate())) {
        return false
    }
    for (var k = 17; k >= 0; k--) {
        d += (Math.pow(2, k) % 11) * parseInt(l.charAt(17 - k), 11)
    }
    if (d % 11 != 1) {
        return false
    }
    return true
}
function validateFirIdCard(n) {
    var d = 0;
    var l;
    var i = {
        11: '北京',
        12: '天津',
        13: '河北',
        14: '山西',
        15: '内蒙',
        21: '辽宁',
        22: '吉林',
        23: '黑龙',
        31: '上海',
        32: '江苏',
        33: '浙江',
        34: '安徽',
        35: '福建',
        36: '江西',
        37: '山东',
        41: '河南',
        42: '湖北',
        43: '湖南',
        44: '广东',
        45: '广西',
        46: '海南',
        50: '重庆',
        51: '四川',
        52: '贵州',
        53: '云南',
        54: '西藏',
        61: '陕西',
        62: '甘肃',
        63: '青海',
        64: '宁夏',
        65: '新疆',
        71: '台湾',
        81: '香港',
        82: '澳门',
        91: '国外'
    };
    if (n.length == 15) {
        l = idCardUpdate(n)
    } else {
        l = n
    }
    if (!/^\d{17}(\d|x)$/i.test(l)) {
        return false
    }
    l = l.replace(/x$/i, 'a');
    if (i[parseInt(l.substr(0, 2))] == null) {
        return false
    }
    var j = l.substr(6, 4) + '-' + Number(l.substr(10, 2)) + '-' + Number(l.substr(12, 2));
    var m = new Date(j.replace(/-/g, '/'));
    if (j != (m.getFullYear() + '-' + (m.getMonth() + 1) + '-' + m.getDate())) {
        return false
    }
    for (var k = 17; k >= 0; k--) {
        d += (Math.pow(2, k) % 11) * parseInt(l.charAt(17 - k), 11)
    }
    if (d % 11 != 1) {
        return false
    }
    return true
}
function idCardUpdate(m) {
    var k;
    var n = /^(\d){15}$/;
    if (n.test(m)) {
        var h = 0;
        var l = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
        var i = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
        m = m.substr(0, 6) + '19' + m.substr(6, m.length - 6);
        for (var j = 0; j < m.length; j++) {
            h += parseInt(m.substr(j, 1)) * l[j]
        }
        m += i[h % 11];
        k = m
    } else {
        k = '#'
    }
    return k
}
jQuery.validator.addMethod('checkBorth', function (d, g) {
    var h = d;
    if (h == '') {
        return true
    } else {
        var i = h.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
        if (i == null) {
            return false
        }
        var j = new Date(i[1], i[3] - 1, i[4]);
        return (j.getFullYear() == i[1] && (j.getMonth() + 1) == i[3] && j.getDate() == i[4])
    }
}, '日期格式不合法');
jQuery.validator.addMethod('byteRangeLength', function (f, h, j) {
    var g = f.length;
    for (var i = 0; i < f.length; i++) {
        if (f.charCodeAt(i) > 127) {
            g++
        }
    }
    return this.optional(h) || (g >= j[0] && g <= j[1])
}, 'length wrong');
jQuery.validator.addMethod('checkNameCharBlank', function (f, g, e) {
    var h = e.split('@');
    if ($('#' + h[1]) .val() == '') {
        return true
    } else {
        if ($('#' + h[0]) .val() == '1' || $('#' + h[0]) .val() == '2') {
            return this.optional(g) || /^[a-zA-Z·.．\u3400-\u9FFF]+$/.test(f)
        } else {
            if ($('#' + h[0]) .val() == 'B' || $('#' + h[0]) .val() == 'H') {
                if (/^[-]+$/.test(f)) {
                    return false
                }
                return this.optional(g) || /^[a-z A-Z·.．\u3400-\u9FFF\-]+$/.test(f)
            } else {
                return this.optional(g) || /^[a-z A-Z·.．\u3400-\u9FFF]+$/.test(f)
            }
        }
    }
}, 'wrong name.');
jQuery.validator.addMethod('checkIdValidStr', function (e, f) {
    var d = /^[a-zA-Z0-9\_\-\(\)]+$/;
    return this.optional(f) || (d.test(e))
}, 'wrong id');
jQuery.validator.addMethod('isSecIDCard', function (f, d, e) {
    if (!checkIfSecIdCard($(e) .val())) {
        return true
    }
    return validateSecIdCard(f)
}, 'wrong');
function checkIfSecIdCard(b) {
    if (b == '1') {
        return true
    }
    return false
}
function checkIfFirIdCard(b) {
    if (b == '2') {
        return true
    }
    return false
}
function checkCardForHKorTW(b) {
    if (b == 'C' || b == 'G') {
        return true
    }
    return false
}
jQuery.validator.addMethod('isFirIDCard', function (f, d, e) {
    if (!checkIfFirIdCard($(e) .val())) {
        return true
    }
    return validateFirIdCard(f)
}, 'wrong');
jQuery.validator.addMethod('checkHkongMacao', function (f, g, e) {
    if ($(e) .val() == 'C') {
        var h = /^[HMhm]{1}([0-9]{10}|[0-9]{8})$/;
        return this.optional(g) || (h.test(f))
    } else {
        return true
    }
}, 'wrong format.');
jQuery.validator.addMethod('checkTaiw', function (g, i, j) {
    if ($(j) .val() == 'G') {
        var f = /^[0-9]{8}$/;
        var h = /^[0-9]{10}$/;
        return this.optional(i) || (f.test(g)) || (h.test(g))
    } else {
        return true
    }
}, 'wrong format.');
jQuery.validator.addMethod('checkPassport', function (f, h, j) {
    if ($(j) .val() == 'B') {
        var g = /^[a-zA-Z]{5,17}$/;
        var i = /^[a-zA-Z0-9]{5,17}$/;
        return this.optional(h) || (i.test(f)) || g.test(f)
    } else {
        return true
    }
}, 'wrong format.');
jQuery.validator.addMethod('checkWork', function (f, h, j) {
    if ($(j) .val() == 'H') {
        var g = /^[a-zA-Z]{5,17}$/;
        var i = /^[a-zA-Z0-9]{5,17}$/;
        return this.optional(h) || (i.test(f)) || g.test(f)
    } else {
        return true
    }
}, 'wrong format.');
jQuery.validator.addMethod('isMobile', function (e, d) {
    var f = e.length;
    return this.optional(d) || (f == 11 && /^[0-9]+$/.test(e))
}, 'wrong mobile phone ');
jQuery.validator.addMethod('isTelePhone', function (f, d) {
    var e = /(^[0-9]{3,4}\-[0-9]{3,8}$)|(^[0-9]{3,8}$)|(^[0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}13[0-9]{9}#)/;
    return this.optional(d) || (e.test(f))
}, 'wrong telePhone ');
jQuery.validator.addMethod('illegalChar', function (g, h, j) {
    var f = true;
    if (g.indexOf('$') >= 0) {
        return false
    }
    for (var i = 0; i < g.length; i++) {
        if (g.charCodeAt(i) == 39 || g.charCodeAt(i) == 60 || g.charCodeAt(i) == 62 || g.charCodeAt(i) == 34 || g.charCodeAt(i) == 63) {
            f = false
        }
        if (!f) {
            break
        }
    }
    return this.optional(h) || f
}, 'Illegal char wrong');
jQuery.validator.addMethod('isZipCode', function (e, f) {
    var d = /^[0-9]{6}$/;
    return this.optional(f) || (d.test(e))
}, 'wrong zipcode');
jQuery.validator.addMethod('isEmail', function (e, d) {
    var f = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return this.optional(d) || (f.test(trim(e)))
}, 'wrong email');
function replaceChar(c) {
    var d = c.value.replace(/['"<> ?]/g, '');
    c.value = d
}
function checkNameChar1(b) {
    return /^[a-zA-Z0-9\u3400-\u9FFF]+$/.test(b)
}
function trim(b) {
    return b.replace(/(^\s*)|(\s*$)/g, '')
}
function ltrim(b) {
    return b.replace(/(^\s*)/g, '')
}
function rtrim(b) {
    return b.replace(/(\s*$)/g, '')
}
jQuery.validator.addMethod('validateName', function (c, d) {
    return this.optional(d) || /^[a-zA-Z\u3400-\u9FFF0-9\_]+$/.test(c)
}, 'wrong username.');
jQuery.validator.addMethod('studentRequired', function (f, d, e) {
    if ($(e) .val() == '3') {
        return f && trim(f) != ''
    }
    return true
}, 'wrong studentRequired.');
jQuery.validator.addMethod('studentStationRequired', function (f, d, e) {
    if ($(e) .val() == '3') {
        return f && trim(f) != '简拼/全拼/汉字' && trim(f) != ''
    }
    return true
}, 'wrong studentStationRequired.');
jQuery.validator.addMethod('studentValidateName', function (f, d, e) {
    if ($(e) .val() == '3') {
        return this.optional(d) || /^[a-zA-Z\u3400-\u9FFF0-9\_]+$/.test(f)
    }
    return true
}, 'wrong username.');
jQuery.validator.addMethod('checkStudentName', function (f, d, e) {
    if ($(e) .val() == '3') {
        if ((!f || trim(f) == '' || trim(f) == '简码/汉字')) {
            return false
        }
    }
    return true
}, 'wrong username.');
jQuery.validator.addMethod('isQuestionNull', function (f, d, e) {
    if (jQuery.trim(f) != '') {
        if (jQuery.trim($(e[0]) .val()) == 'customQuestion' && jQuery.trim($(e[1]) .val()) == '' || jQuery.trim($(e[0]) .val()) == '') {
            return false
        }
    }
    return true
}, 'you should input the question');
jQuery.validator.addMethod('isAnswerNull', function (f, d, e) {
    if ((jQuery.trim($(e[0]) .val()) == 'customQuestion' && jQuery.trim($(e[1]) .val()) != '') || (jQuery.trim($(e[0]) .val()) != '')) {
        if (jQuery.trim(f) == '') {
            return false
        }
    }
    return true
}, 'you should input the answer');
function checkSex(e, f, d) {
    if (!checkSexByCardId(e, f, d)) {
        if (!confirm('性别与身份证中的性别不符，是否继续?')) {
            return false
        } else {
            return true
        }
    } else {
        return true
    }
}
function checkSexByCardId(g, j, i) {
    function h(a, e) {
        var b = null;
        if (e.length == 15) {
            b = e.substring(14, 15)
        } else {
            if (e.length == 18) {
                b = e.substring(16, 17)
            } else {
                return true
            }
        }
        if (b == 'x' || b == 'X') {
            b = '10'
        }
        var c = parseInt(b);
        var d = c % 2;
        if (d === 0 && a === 'F') {
            return true
        } else {
            if (d === 1 && a === 'M') {
                return true
            } else {
                return false
            }
        }
    }
    var f = $(i) .val();
    if (checkIfSecIdCard($(j) .val()) && validateSecIdCard(f)) {
        if (f !== '') {
            return h(g, f)
        } else {
            return true
        }
    } else {
        if (checkIfFirIdCard($(j) .val()) && validateFirIdCard(f)) {
            if (f !== '') {
                return h(g, f)
            } else {
                return true
            }
        } else {
            return true
        }
    }
}
function checkBirdDateByCardId(g, j, h) {
    var i = null;
    var f = $(h) .val();
    if (checkIfSecIdCard($(j) .val()) && f !== '' && validateSecIdCard(f)) {
        i = f.substring(6, 14)
    } else {
        if (checkIfFirIdCard($(j) .val()) && f !== '' && validateFirIdCard(f)) {
            if (f.length == 15) {
                i = '19' + f.substring(6, 12)
            } else {
                if (f.length == 18) {
                    i = f.substring(6, 14)
                }
            }
        } else {
            return true
        }
    }
    if (g !== '') {
        g = g.replace(/-/g, '');
        if (g != i) {
            return false
        } else {
            return true
        }
    } else {
        return true
    }
}
function checkBirdate(e, f, d) {
    if (!checkBirdDateByCardId(e, f, d)) {
        if (!confirm('出生日期与身份证中的出生日期不符，是否继续?')) {
            return false
        } else {
            return true
        }
    } else {
        return true
    }
}
jQuery.validator.addMethod('checkPwdValidate', function (c, d) {
    return this.optional(d) || /(?![a-z]+$|[0-9]+$|_+$)^[a-zA-Z0-9_]{6,}$/.test(c)
}, 'contain writespace');
jQuery.validator.addMethod('checkConfirmPassWard', function (f, d, e) {
    if ($(e) .val() != null) {
        return $(e) .val() == f
    }
    return true
}, 'contain writespace');
jQuery.validator.addMethod('IVR_passwd_format', function (f, d) {
    var e = /^[0-9]{6}$/;
    return this.optional(d) || e.test(f)
}, '验证码错误!.');
jQuery.validator.addMethod('checkStation', function (c, d) {
    if ((!c || trim(c) == '' || trim(c) == '简拼/全拼/汉字' || trim(c) == '简拼/全拼/汉字或↑↓')) {
        return false
    }
    return true
}, 'wrong username.');
jQuery.validator.addMethod('checkAnsyUserName', function (l, h, k) {
    var i = k[0];
    var g = $('#' + k[1]) .val();
    var j = true;
    $.ajax({
        url: i + '?user_name=' + l,
        type: 'get',
        async: false,
        success: function (b, a) {
            if (b.data == true) {
                j = false
            } else {
                j = true
            }
        },
        error: function (a, b, c) {
            j = false
        }
    });
    return j
}, 'wrong cardNo');
function checkPwdRank(j, i, f) {
    var h = $(j);
    var g = h.val();
    if (g.length <= 6 || new RegExp('^[a-zA-Z]{6,}$') .test(g) || new RegExp('^[0-9]{6,}$') .test(g) || new RegExp('^[_]{6,}$') .test(g)) {
        $('#' + i) .attr('title', '危险');
        $('#' + f) .html('危险');
        $('#' + i) .removeClass('rank-a');
        $('#' + i) .removeClass('rank-b');
        $('#' + i) .removeClass('rank-c');
        $('#' + i) .addClass('rank-a')
    } else {
        if (g.length > 6 && new RegExp('[a-zA-Z]') .test(g) && new RegExp('[0-9]') .test(g) && new RegExp('[_]') .test(g)) {
            $('#' + i) .attr('title', '安全');
            $('#' + f) .html('安全');
            $('#' + i) .removeClass('rank-a');
            $('#' + i) .removeClass('rank-b');
            $('#' + i) .removeClass('rank-c');
            $('#' + i) .addClass('rank-c')
        } else {
            $('#' + i) .attr('title', '一般');
            $('#' + f) .html('一般');
            $('#' + i) .removeClass('rank-a');
            $('#' + i) .removeClass('rank-b');
            $('#' + i) .removeClass('rank-c');
            $('#' + i) .addClass('rank-b')
        }
    }
}
Array.prototype.unique = function () {
    var f = {
    },
    d = this.length;
    for (var e = 0; e < d; e++) {
        if (typeof f[this[e]] == 'undefined') {
            f[this[e]] = 1
        }
    }
    this.length = 0;
    d = 0;
    for (var e in f) {
        this[d++] = e
    }
    return this
};
function checkSearchPwdRank(p, m, i) {
    var k = $(p);
    var j = k.val();
    if (j.length < 6) {
        $('#' + m) .attr('title', '危险');
        $('#' + i) .html('危险');
        $('#' + m) .removeClass('rank-a');
        $('#' + m) .removeClass('rank-b');
        $('#' + m) .removeClass('rank-c');
        $('#' + m) .addClass('rank-a')
    } else {
        var o = [
        ];
        for (var n = 0; n < 6; n++) {
            o.push(j.charAt(n))
        }
        o = o.unique();
        var l = o.length;
        if (l == 1) {
            $('#' + m) .attr('title', '危险');
            $('#' + i) .html('危险');
            $('#' + m) .removeClass('rank-a');
            $('#' + m) .removeClass('rank-b');
            $('#' + m) .removeClass('rank-c');
            $('#' + m) .addClass('rank-a')
        } else {
            if (l > 1 && l < 5) {
                $('#' + m) .attr('title', '一般');
                $('#' + i) .html('一般');
                $('#' + m) .removeClass('rank-a');
                $('#' + m) .removeClass('rank-b');
                $('#' + m) .removeClass('rank-c');
                $('#' + m) .addClass('rank-b')
            } else {
                $('#' + m) .attr('title', '安全');
                $('#' + i) .html('安全');
                $('#' + m) .removeClass('rank-a');
                $('#' + m) .removeClass('rank-b');
                $('#' + m) .removeClass('rank-c');
                $('#' + m) .addClass('rank-c')
            }
        }
    }
}
jQuery.validator.addMethod('checkDetailAddress', function (c, d) {
    return this.optional(d) || /^[0-9a-zA-Z\u3400-\u9FFF\#]+$/.test(c)
}, 'wrong name.');
jQuery.validator.addMethod('checkAddressName', function (c, d) {
    if (/^[-]+$/.test(c)) {
        return false
    }
    return this.optional(d) || /^[a-z A-Z·.．\u3400-\u9FFF\-]+$/.test(c) || /^[a-zA-Z·.．\u3400-\u9FFF]+$/.test(c)
}, 'wrong name.');
jQuery.validator.addMethod('checkAddressSelect', function (c, d) {
    if ('' == c) {
        return false
    }
    if (c) {
        return true
    }
    return this.optional(d)
}, 'wrong name.');
var login_messages = {
    randCodeError: '验证码错误!',
    randCodeExpired: '验证码失效',
    randCodeLentgh: '验证码长度为4位!',
    randCodeFormat: '验证码只能由数字或字母组成!',
    randCodeEmpty: '验证码不能为空!',
    userNameEmpty: '登录名必须填写!',
    userNameFormat: '登录名格式不正确，请重新输入!',
    passwordEmpty: '密码必须填写,且不少于6位!',
    passwordLength: '密码长度不能少于6位!',
    pleaseClickCaptcha: '请点击验证码',
    pleaseClickLeftCaptcha: '请点击左侧验证码',
    pleaseClickCaptchaRight: '请正确点击验证码',
    loginError: '当前访问用户过多,请稍候重试!'
};
