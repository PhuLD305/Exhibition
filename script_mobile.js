(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"id":"rootPlayer","minHeight":0,"class":"Player","backgroundColor":["#FFFFFF"],"hash": "db11d3ac3f487da38547a42eca8e7c22e4d6acbe9416b5164023693df44b9171", "definitions": [{"vfov":180,"id":"panorama_3EE48F2F_32B8_C35E_41A3_17F35AD3A3DE","thumbnailUrl":"media/panorama_3EE48F2F_32B8_C35E_41A3_17F35AD3A3DE_t.jpg","label":trans('panorama_3EE48F2F_32B8_C35E_41A3_17F35AD3A3DE.label'),"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"height":4608,"colCount":54,"class":"TiledImageResourceLevel","url":"media/panorama_3EE48F2F_32B8_C35E_41A3_17F35AD3A3DE_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","width":27648,"rowCount":9},{"height":2560,"colCount":30,"class":"TiledImageResourceLevel","url":"media/panorama_3EE48F2F_32B8_C35E_41A3_17F35AD3A3DE_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","width":15360,"rowCount":5},{"height":1536,"colCount":18,"class":"TiledImageResourceLevel","url":"media/panorama_3EE48F2F_32B8_C35E_41A3_17F35AD3A3DE_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","width":9216,"rowCount":3},{"height":1024,"colCount":12,"class":"TiledImageResourceLevel","url":"media/panorama_3EE48F2F_32B8_C35E_41A3_17F35AD3A3DE_0/{face}/3/{row}_{column}.jpg","tags":"ondemand","width":6144,"rowCount":2},{"height":512,"colCount":6,"class":"TiledImageResourceLevel","url":"media/panorama_3EE48F2F_32B8_C35E_41A3_17F35AD3A3DE_0/{face}/4/{row}_{column}.jpg","tags":["ondemand","preload"],"width":3072,"rowCount":1}]},"thumbnailUrl":"media/panorama_3EE48F2F_32B8_C35E_41A3_17F35AD3A3DE_t.jpg"}],"class":"Panorama","data":{"label":"View 1"},"hfov":360,"hfovMax":130},{"id":"panorama_3866FF37_32B8_C34D_41A4_E99151CD699F_camera","initialSequence":"this.sequence_384FAD74_32B8_47C3_41BE_BB6CDE01E2BB","class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":3.78,"pitch":-42.59},"enterPointingToHorizon":true,"idleSequence":"this.sequence_384FAD74_32B8_47C3_41BE_BB6CDE01E2BB"},{"vfov":180,"id":"panorama_3865A31A_32B8_4347_41BA_7EEF534B9D49","thumbnailUrl":"media/panorama_3865A31A_32B8_4347_41BA_7EEF534B9D49_t.jpg","label":trans('panorama_3865A31A_32B8_4347_41BA_7EEF534B9D49.label'),"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"height":4608,"colCount":54,"class":"TiledImageResourceLevel","url":"media/panorama_3865A31A_32B8_4347_41BA_7EEF534B9D49_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","width":27648,"rowCount":9},{"height":2560,"colCount":30,"class":"TiledImageResourceLevel","url":"media/panorama_3865A31A_32B8_4347_41BA_7EEF534B9D49_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","width":15360,"rowCount":5},{"height":1536,"colCount":18,"class":"TiledImageResourceLevel","url":"media/panorama_3865A31A_32B8_4347_41BA_7EEF534B9D49_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","width":9216,"rowCount":3},{"height":1024,"colCount":12,"class":"TiledImageResourceLevel","url":"media/panorama_3865A31A_32B8_4347_41BA_7EEF534B9D49_0/{face}/3/{row}_{column}.jpg","tags":"ondemand","width":6144,"rowCount":2},{"height":512,"colCount":6,"class":"TiledImageResourceLevel","url":"media/panorama_3865A31A_32B8_4347_41BA_7EEF534B9D49_0/{face}/4/{row}_{column}.jpg","tags":["ondemand","preload"],"width":3072,"rowCount":1}]},"thumbnailUrl":"media/panorama_3865A31A_32B8_4347_41BA_7EEF534B9D49_t.jpg"}],"class":"Panorama","data":{"label":"View 7"},"hfov":360,"hfovMax":130},{"id":"panorama_386228D3_32B8_4EC6_41AE_0A7CAC062547_camera","initialSequence":"this.sequence_384F3D75_32B8_47CD_4177_580C4DBA959F","class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":3.18,"pitch":-32.05},"enterPointingToHorizon":true,"idleSequence":"this.sequence_384F3D75_32B8_47CD_4177_580C4DBA959F"},{"id":"Container_22F7AC7F_32D8_C5BE_41B0_541118CA7257_mobile","minHeight":10,"class":"Container","right":"75.25%","overflow":"scroll","scrollBarWidth":5,"data":{"name":"Container4294"},"scrollBarColor":"#000000","bottom":"0%","backgroundOpacity":0,"width":"24.736%","scrollBarMargin":1,"height":"100%","layout":"absolute","gap":5,"children":["this.ThumbnailList_3D3FB981_32D9_CF45_41BC_916BB9554372_mobile"],"propagateClick":false,"minWidth":10},{"id":"MainViewer_mobile","toolTipBorderColor":"#767676","data":{"name":"Main Viewer"},"progressBottom":10,"toolTipFontFamily":"Arial","playbackBarBorderSize":0,"toolTipTextShadowBlurRadius":1,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipBorderRadius":1,"progressBackgroundColorRatios":[0],"subtitlesTextShadowOpacity":1,"playbackBarHeight":10,"progressBorderSize":0,"progressRight":"33%","progressHeight":2,"playbackBarHeadWidth":6,"progressBarBorderRadius":2,"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderSize":0,"vrPointerColor":"#FFFFFF","subtitlesTextShadowColor":"#000000","toolTipTextShadowColor":"#000000","progressBarBorderSize":0,"width":"100%","subtitlesTextShadowVerticalLength":1,"toolTipShadowBlurRadius":1,"toolTipShadowColor":"#333138","vrThumbstickRotationStep":20,"height":"100%","playbackBarProgressBorderRadius":0,"playbackBarRight":0,"subtitlesFontFamily":"Arial","playbackBarProgressBackgroundColor":["#3399FF"],"surfaceReticleColor":"#FFFFFF","subtitlesBottom":50,"firstTransitionDuration":0,"progressBarBackgroundColorDirection":"horizontal","progressBarBorderColor":"#000000","progressBorderRadius":2,"progressBarBackgroundColorRatios":[0],"progressOpacity":0.7,"toolTipPaddingLeft":3,"toolTipBackgroundColor":"#F6F6F6","progressLeft":"33%","minHeight":25,"playbackBarBackgroundOpacity":1,"minWidth":50,"subtitlesFontColor":"#FFFFFF","subtitlesFontSize":"3vmin","toolTipFontColor":"#606060","playbackBarHeadShadowOpacity":0.7,"playbackBarHeadShadowBlurRadius":1.5,"playbackBarLeft":0,"playbackBarHeadHeight":15,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","playbackBarHeadShadowColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","vrPointerSelectionColor":"#FF6600","playbackBarBorderRadius":0,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadBorderSize":0,"playbackBarProgressBorderColor":"#000000","vrPointerSelectionTime":2000,"playbackBarHeadShadow":true,"progressBarBackgroundColor":["#3399FF"],"progressBorderColor":"#000000","playbackBarHeadBorderRadius":0,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarHeadBorderColor":"#000000","subtitlesGap":0,"toolTipPaddingRight":3,"subtitlesBackgroundColor":"#000000","subtitlesTop":0,"playbackBarBottom":5,"class":"ViewerArea","subtitlesTextShadowHorizontalLength":1,"propagateClick":false,"progressBackgroundColor":["#000000"],"toolTipFontSize":"1.11vmin","subtitlesBorderColor":"#FFFFFF"},{"vfov":180,"id":"panorama_3866FF37_32B8_C34D_41A4_E99151CD699F","thumbnailUrl":"media/panorama_3866FF37_32B8_C34D_41A4_E99151CD699F_t.jpg","label":trans('panorama_3866FF37_32B8_C34D_41A4_E99151CD699F.label'),"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"height":4608,"colCount":54,"class":"TiledImageResourceLevel","url":"media/panorama_3866FF37_32B8_C34D_41A4_E99151CD699F_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","width":27648,"rowCount":9},{"height":2560,"colCount":30,"class":"TiledImageResourceLevel","url":"media/panorama_3866FF37_32B8_C34D_41A4_E99151CD699F_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","width":15360,"rowCount":5},{"height":1536,"colCount":18,"class":"TiledImageResourceLevel","url":"media/panorama_3866FF37_32B8_C34D_41A4_E99151CD699F_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","width":9216,"rowCount":3},{"height":1024,"colCount":12,"class":"TiledImageResourceLevel","url":"media/panorama_3866FF37_32B8_C34D_41A4_E99151CD699F_0/{face}/3/{row}_{column}.jpg","tags":"ondemand","width":6144,"rowCount":2},{"height":512,"colCount":6,"class":"TiledImageResourceLevel","url":"media/panorama_3866FF37_32B8_C34D_41A4_E99151CD699F_0/{face}/4/{row}_{column}.jpg","tags":["ondemand","preload"],"width":3072,"rowCount":1}]},"thumbnailUrl":"media/panorama_3866FF37_32B8_C34D_41A4_E99151CD699F_t.jpg"}],"class":"Panorama","data":{"label":"View 2"},"hfov":360,"hfovMax":130},{"vfov":180,"id":"panorama_386228D3_32B8_4EC6_41AE_0A7CAC062547","thumbnailUrl":"media/panorama_386228D3_32B8_4EC6_41AE_0A7CAC062547_t.jpg","label":trans('panorama_386228D3_32B8_4EC6_41AE_0A7CAC062547.label'),"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"height":4608,"colCount":54,"class":"TiledImageResourceLevel","url":"media/panorama_386228D3_32B8_4EC6_41AE_0A7CAC062547_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","width":27648,"rowCount":9},{"height":2560,"colCount":30,"class":"TiledImageResourceLevel","url":"media/panorama_386228D3_32B8_4EC6_41AE_0A7CAC062547_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","width":15360,"rowCount":5},{"height":1536,"colCount":18,"class":"TiledImageResourceLevel","url":"media/panorama_386228D3_32B8_4EC6_41AE_0A7CAC062547_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","width":9216,"rowCount":3},{"height":1024,"colCount":12,"class":"TiledImageResourceLevel","url":"media/panorama_386228D3_32B8_4EC6_41AE_0A7CAC062547_0/{face}/3/{row}_{column}.jpg","tags":"ondemand","width":6144,"rowCount":2},{"height":512,"colCount":6,"class":"TiledImageResourceLevel","url":"media/panorama_386228D3_32B8_4EC6_41AE_0A7CAC062547_0/{face}/4/{row}_{column}.jpg","tags":["ondemand","preload"],"width":3072,"rowCount":1}]},"thumbnailUrl":"media/panorama_386228D3_32B8_4EC6_41AE_0A7CAC062547_t.jpg"}],"class":"Panorama","data":{"label":"View 6"},"hfov":360,"hfovMax":130},{"vfov":180,"id":"panorama_3864B354_32B8_43C2_41B3_B6D8C78BA9B1","thumbnailUrl":"media/panorama_3864B354_32B8_43C2_41B3_B6D8C78BA9B1_t.jpg","label":trans('panorama_3864B354_32B8_43C2_41B3_B6D8C78BA9B1.label'),"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"height":4608,"colCount":54,"class":"TiledImageResourceLevel","url":"media/panorama_3864B354_32B8_43C2_41B3_B6D8C78BA9B1_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","width":27648,"rowCount":9},{"height":2560,"colCount":30,"class":"TiledImageResourceLevel","url":"media/panorama_3864B354_32B8_43C2_41B3_B6D8C78BA9B1_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","width":15360,"rowCount":5},{"height":1536,"colCount":18,"class":"TiledImageResourceLevel","url":"media/panorama_3864B354_32B8_43C2_41B3_B6D8C78BA9B1_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","width":9216,"rowCount":3},{"height":1024,"colCount":12,"class":"TiledImageResourceLevel","url":"media/panorama_3864B354_32B8_43C2_41B3_B6D8C78BA9B1_0/{face}/3/{row}_{column}.jpg","tags":"ondemand","width":6144,"rowCount":2},{"height":512,"colCount":6,"class":"TiledImageResourceLevel","url":"media/panorama_3864B354_32B8_43C2_41B3_B6D8C78BA9B1_0/{face}/4/{row}_{column}.jpg","tags":["ondemand","preload"],"width":3072,"rowCount":1}]},"thumbnailUrl":"media/panorama_3864B354_32B8_43C2_41B3_B6D8C78BA9B1_t.jpg"}],"class":"Panorama","data":{"label":"View 4"},"hfov":360,"hfovMax":130},{"id":"panorama_3865A31A_32B8_4347_41BA_7EEF534B9D49_camera","initialSequence":"this.sequence_384F1D75_32B8_47CD_4197_1A47AF6F97BB","class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":1.52,"pitch":-58.96},"enterPointingToHorizon":true,"idleSequence":"this.sequence_384F1D75_32B8_47CD_4197_1A47AF6F97BB"},{"vfov":180,"id":"panorama_3863C91A_32B8_CF47_41C0_06CB1DC70292","thumbnailUrl":"media/panorama_3863C91A_32B8_CF47_41C0_06CB1DC70292_t.jpg","label":trans('panorama_3863C91A_32B8_CF47_41C0_06CB1DC70292.label'),"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"height":4608,"colCount":54,"class":"TiledImageResourceLevel","url":"media/panorama_3863C91A_32B8_CF47_41C0_06CB1DC70292_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","width":27648,"rowCount":9},{"height":2560,"colCount":30,"class":"TiledImageResourceLevel","url":"media/panorama_3863C91A_32B8_CF47_41C0_06CB1DC70292_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","width":15360,"rowCount":5},{"height":1536,"colCount":18,"class":"TiledImageResourceLevel","url":"media/panorama_3863C91A_32B8_CF47_41C0_06CB1DC70292_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","width":9216,"rowCount":3},{"height":1024,"colCount":12,"class":"TiledImageResourceLevel","url":"media/panorama_3863C91A_32B8_CF47_41C0_06CB1DC70292_0/{face}/3/{row}_{column}.jpg","tags":"ondemand","width":6144,"rowCount":2},{"height":512,"colCount":6,"class":"TiledImageResourceLevel","url":"media/panorama_3863C91A_32B8_CF47_41C0_06CB1DC70292_0/{face}/4/{row}_{column}.jpg","tags":["ondemand","preload"],"width":3072,"rowCount":1}]},"thumbnailUrl":"media/panorama_3863C91A_32B8_CF47_41C0_06CB1DC70292_t.jpg"}],"class":"Panorama","data":{"label":"View 3"},"hfov":360,"hfovMax":130},{"id":"panorama_3863C91A_32B8_CF47_41C0_06CB1DC70292_camera","initialSequence":"this.sequence_384F9D75_32B8_47CD_41B3_0EC31BC35160","class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":-31.01,"pitch":-84.04},"enterPointingToHorizon":true,"idleSequence":"this.sequence_384F9D75_32B8_47CD_41B3_0EC31BC35160"},{"id":"panorama_3EE48F2F_32B8_C35E_41A3_17F35AD3A3DE_camera","initialSequence":"this.sequence_384BFD74_32B8_47C3_41BE_38B84B43AEBD","class":"PanoramaCamera","displayOriginPosition":{"class":"RotationalCameraDisplayPosition","yaw":-134.71,"stereographicFactor":1,"pitch":-90,"hfov":165},"initialPosition":{"class":"PanoramaCameraPosition","yaw":-134.71,"pitch":-89.99},"enterPointingToHorizon":true,"displayMovements":[{"class":"TargetRotationalCameraDisplayMovement","duration":1000},{"targetPitch":-89.99,"targetStereographicFactor":0,"class":"TargetRotationalCameraDisplayMovement","duration":3000,"easing":"cubic_in_out"}],"idleSequence":"this.sequence_384BFD74_32B8_47C3_41BE_38B84B43AEBD"},{"id":"MainViewer_mobilePanoramaPlayer","mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer_mobile","class":"PanoramaPlayer","touchControlMode":"drag_rotation","aaEnabled":true,"arrowKeysAction":"translate","displayPlaybackBar":true},{"id":"mainPlayList","class":"PlayList","items":[{"class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_3EE48F2F_32B8_C35E_41A3_17F35AD3A3DE_camera","media":"this.panorama_3EE48F2F_32B8_C35E_41A3_17F35AD3A3DE","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_3866FF37_32B8_C34D_41A4_E99151CD699F_camera","media":"this.panorama_3866FF37_32B8_C34D_41A4_E99151CD699F","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_3863C91A_32B8_CF47_41C0_06CB1DC70292_camera","media":"this.panorama_3863C91A_32B8_CF47_41C0_06CB1DC70292","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_3864B354_32B8_43C2_41B3_B6D8C78BA9B1_camera","media":"this.panorama_3864B354_32B8_43C2_41B3_B6D8C78BA9B1","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 4)"},{"class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_38622D7B_32B8_47C6_41A3_30A0092F4831_camera","media":"this.panorama_38622D7B_32B8_47C6_41A3_30A0092F4831","begin":"this.setEndToItemIndex(this.mainPlayList, 4, 5)"},{"class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_386228D3_32B8_4EC6_41AE_0A7CAC062547_camera","media":"this.panorama_386228D3_32B8_4EC6_41AE_0A7CAC062547","begin":"this.setEndToItemIndex(this.mainPlayList, 5, 6)"},{"class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","end":"this.trigger('tourEnded')","camera":"this.panorama_3865A31A_32B8_4347_41BA_7EEF534B9D49_camera","media":"this.panorama_3865A31A_32B8_4347_41BA_7EEF534B9D49","begin":"this.setEndToItemIndex(this.mainPlayList, 6, 0)"}]},{"id":"ThumbnailList_3D3FB981_32D9_CF45_41BC_916BB9554372_mobile_playlist","class":"PlayList","items":[{"camera":"this.panorama_3EE48F2F_32B8_C35E_41A3_17F35AD3A3DE_camera","class":"PanoramaPlayListItem","media":"this.panorama_3EE48F2F_32B8_C35E_41A3_17F35AD3A3DE","player":"this.MainViewer_mobilePanoramaPlayer"},{"camera":"this.panorama_3866FF37_32B8_C34D_41A4_E99151CD699F_camera","class":"PanoramaPlayListItem","media":"this.panorama_3866FF37_32B8_C34D_41A4_E99151CD699F","player":"this.MainViewer_mobilePanoramaPlayer"},{"camera":"this.panorama_3863C91A_32B8_CF47_41C0_06CB1DC70292_camera","class":"PanoramaPlayListItem","media":"this.panorama_3863C91A_32B8_CF47_41C0_06CB1DC70292","player":"this.MainViewer_mobilePanoramaPlayer"},{"camera":"this.panorama_3864B354_32B8_43C2_41B3_B6D8C78BA9B1_camera","class":"PanoramaPlayListItem","media":"this.panorama_3864B354_32B8_43C2_41B3_B6D8C78BA9B1","player":"this.MainViewer_mobilePanoramaPlayer"},{"camera":"this.panorama_38622D7B_32B8_47C6_41A3_30A0092F4831_camera","class":"PanoramaPlayListItem","media":"this.panorama_38622D7B_32B8_47C6_41A3_30A0092F4831","player":"this.MainViewer_mobilePanoramaPlayer"},{"camera":"this.panorama_386228D3_32B8_4EC6_41AE_0A7CAC062547_camera","class":"PanoramaPlayListItem","media":"this.panorama_386228D3_32B8_4EC6_41AE_0A7CAC062547","player":"this.MainViewer_mobilePanoramaPlayer"},{"camera":"this.panorama_3865A31A_32B8_4347_41BA_7EEF534B9D49_camera","class":"PanoramaPlayListItem","media":"this.panorama_3865A31A_32B8_4347_41BA_7EEF534B9D49","player":"this.MainViewer_mobilePanoramaPlayer"}]},{"id":"panorama_3864B354_32B8_43C2_41B3_B6D8C78BA9B1_camera","initialSequence":"this.sequence_384FFD75_32B8_47CD_41A5_6B957EBEC303","class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":6.81,"pitch":-58.04},"enterPointingToHorizon":true,"idleSequence":"this.sequence_384FFD75_32B8_47CD_41A5_6B957EBEC303"},{"vfov":180,"id":"panorama_38622D7B_32B8_47C6_41A3_30A0092F4831","thumbnailUrl":"media/panorama_38622D7B_32B8_47C6_41A3_30A0092F4831_t.jpg","label":trans('panorama_38622D7B_32B8_47C6_41A3_30A0092F4831.label'),"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"height":4608,"colCount":54,"class":"TiledImageResourceLevel","url":"media/panorama_38622D7B_32B8_47C6_41A3_30A0092F4831_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","width":27648,"rowCount":9},{"height":2560,"colCount":30,"class":"TiledImageResourceLevel","url":"media/panorama_38622D7B_32B8_47C6_41A3_30A0092F4831_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","width":15360,"rowCount":5},{"height":1536,"colCount":18,"class":"TiledImageResourceLevel","url":"media/panorama_38622D7B_32B8_47C6_41A3_30A0092F4831_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","width":9216,"rowCount":3},{"height":1024,"colCount":12,"class":"TiledImageResourceLevel","url":"media/panorama_38622D7B_32B8_47C6_41A3_30A0092F4831_0/{face}/3/{row}_{column}.jpg","tags":"ondemand","width":6144,"rowCount":2},{"height":512,"colCount":6,"class":"TiledImageResourceLevel","url":"media/panorama_38622D7B_32B8_47C6_41A3_30A0092F4831_0/{face}/4/{row}_{column}.jpg","tags":["ondemand","preload"],"width":3072,"rowCount":1}]},"thumbnailUrl":"media/panorama_38622D7B_32B8_47C6_41A3_30A0092F4831_t.jpg"}],"class":"Panorama","data":{"label":"View 5"},"hfov":360,"hfovMax":130},{"id":"panorama_38622D7B_32B8_47C6_41A3_30A0092F4831_camera","initialSequence":"this.sequence_384FDD75_32B8_47CD_41AD_D4A589400E47","class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":179.35,"pitch":-85.8},"enterPointingToHorizon":true,"idleSequence":"this.sequence_384FDD75_32B8_47CD_41AD_D4A589400E47"},{"id":"ThumbnailList_3D3FB981_32D9_CF45_41BC_916BB9554372_mobile","backgroundColor":["#000000"],"itemThumbnailScaleMode":"fit_outside","toolTipBorderColor":"#767676","itemThumbnailBorderRadius":5,"right":"0%","itemThumbnailShadowColor":"#000000","verticalAlign":"middle","itemThumbnailHeight":20,"itemThumbnailShadowSpread":1,"toolTipFontFamily":"Arial","toolTipTextShadowBlurRadius":1,"data":{"name":"ThumbnailList1355"},"toolTipBorderRadius":1,"paddingLeft":10,"paddingRight":10,"itemLabelFontFamily":"Arial","toolTipShadowBlurRadius":1,"width":"100%","toolTipTextShadowColor":"#000000","toolTipShadowColor":"#333333","scrollBarMargin":1,"itemThumbnailWidth":40,"height":"100%","gap":5,"itemThumbnailBorderSize":0,"itemLabelFontColor":"#FFFFFF","layout":"vertical","itemLabelGap":2,"toolTipPaddingLeft":3,"itemThumbnailShadow":true,"itemBorderRadius":0,"minHeight":1,"itemPaddingTop":3,"itemLabelFontWeight":"normal","itemPaddingLeft":3,"itemThumbnailShadowBlurRadius":4,"toolTipBackgroundColor":"#F6F6F6","toolTipFontColor":"#606060","minWidth":1,"itemLabelFontStyle":"normal","itemBackgroundColorRatios":[],"backgroundColorRatios":[0],"itemPaddingRight":3,"scrollBarWidth":5,"itemLabelTextDecoration":"none","itemBackgroundOpacity":0,"scrollBarColor":"#FFFFFF","itemBackgroundColorDirection":"vertical","top":"0%","itemBackgroundColor":[],"itemPaddingBottom":3,"itemThumbnailShadowOpacity":0.8,"backgroundOpacity":0.02,"itemThumbnailOpacity":1,"itemLabelFontSize":7,"playList":"this.ThumbnailList_3D3FB981_32D9_CF45_41BC_916BB9554372_mobile_playlist","selectedItemLabelFontWeight":"bold","toolTipPaddingRight":3,"class":"ThumbnailList","horizontalAlign":"center","paddingTop":5,"toolTipFontSize":6,"paddingBottom":5,"propagateClick":false},{"id":"sequence_384FAD74_32B8_47C3_41BE_BB6CDE01E2BB","class":"PanoramaCameraSequence","movements":[{"pitchSpeed":5.32,"class":"TargetPanoramaCameraMovement","targetPitch":0,"easing":"cubic_in_out"},{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":2.66},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":2.66},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":2.66}]},{"id":"sequence_384F3D75_32B8_47CD_4177_580C4DBA959F","class":"PanoramaCameraSequence","movements":[{"pitchSpeed":5.32,"class":"TargetPanoramaCameraMovement","targetPitch":0,"easing":"cubic_in_out"},{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":2.66},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":2.66},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":2.66}]},{"id":"sequence_384F1D75_32B8_47CD_4197_1A47AF6F97BB","class":"PanoramaCameraSequence","movements":[{"pitchSpeed":5.32,"class":"TargetPanoramaCameraMovement","targetPitch":0,"easing":"cubic_in_out"},{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":2.66},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":2.66},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":2.66}]},{"id":"sequence_384F9D75_32B8_47CD_41B3_0EC31BC35160","class":"PanoramaCameraSequence","movements":[{"pitchSpeed":5.32,"class":"TargetPanoramaCameraMovement","targetPitch":0,"easing":"cubic_in_out"},{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":2.66},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":2.66},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":2.66}]},{"id":"sequence_384BFD74_32B8_47C3_41BE_38B84B43AEBD","class":"PanoramaCameraSequence","movements":[{"pitchSpeed":5.32,"class":"TargetPanoramaCameraMovement","targetPitch":0,"easing":"cubic_in_out"},{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":2.66},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":2.66},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":2.66}]},{"id":"sequence_384FFD75_32B8_47CD_41A5_6B957EBEC303","class":"PanoramaCameraSequence","movements":[{"pitchSpeed":5.32,"class":"TargetPanoramaCameraMovement","targetPitch":0,"easing":"cubic_in_out"},{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":2.66},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":2.66},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":2.66}]},{"id":"sequence_384FDD75_32B8_47CD_41AD_D4A589400E47","class":"PanoramaCameraSequence","movements":[{"pitchSpeed":5.32,"class":"TargetPanoramaCameraMovement","targetPitch":0,"easing":"cubic_in_out"},{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":2.66},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":2.66},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":2.66}]}],"data":{"history":{},"defaultLocale":"en","textToSpeechConfig":{"speechOnInfoWindow":false,"speechOnTooltip":false,"volume":1,"rate":1,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"pitch":1},"locales":{"en":"locale/en.txt"},"name":"Player736"},"children":["this.MainViewer_mobile","this.Container_22F7AC7F_32D8_C5BE_41B0_541118CA7257_mobile"],"scripts":{"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getMainViewer":TDV.Tour.Script.getMainViewer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"playAudioList":TDV.Tour.Script.playAudioList,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"shareSocial":TDV.Tour.Script.shareSocial,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getKey":TDV.Tour.Script.getKey,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"textToSpeech":TDV.Tour.Script.textToSpeech,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"showPopupImage":TDV.Tour.Script.showPopupImage,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"showWindow":TDV.Tour.Script.showWindow,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"downloadFile":TDV.Tour.Script.downloadFile,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"init":TDV.Tour.Script.init,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"startMeasurement":TDV.Tour.Script.startMeasurement,"createTween":TDV.Tour.Script.createTween,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"translate":TDV.Tour.Script.translate,"getOverlays":TDV.Tour.Script.getOverlays,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"mixObject":TDV.Tour.Script.mixObject,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"resumePlayers":TDV.Tour.Script.resumePlayers,"setLocale":TDV.Tour.Script.setLocale,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"clone":TDV.Tour.Script.clone,"getComponentByName":TDV.Tour.Script.getComponentByName,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"historyGoBack":TDV.Tour.Script.historyGoBack,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"historyGoForward":TDV.Tour.Script.historyGoForward,"setMapLocation":TDV.Tour.Script.setMapLocation,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"executeJS":TDV.Tour.Script.executeJS,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"initAnalytics":TDV.Tour.Script.initAnalytics,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"initQuiz":TDV.Tour.Script.initQuiz,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"registerKey":TDV.Tour.Script.registerKey,"cloneBindings":TDV.Tour.Script.cloneBindings,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"quizShowScore":TDV.Tour.Script.quizShowScore,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"unregisterKey":TDV.Tour.Script.unregisterKey,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"isPanorama":TDV.Tour.Script.isPanorama,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"setValue":TDV.Tour.Script.setValue,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"openLink":TDV.Tour.Script.openLink,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"quizStart":TDV.Tour.Script.quizStart,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getMediaByName":TDV.Tour.Script.getMediaByName,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getPixels":TDV.Tour.Script.getPixels,"quizFinish":TDV.Tour.Script.quizFinish,"existsKey":TDV.Tour.Script.existsKey,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem},"defaultMenu":["fullscreen","mute","rotation"],"backgroundColorRatios":[0],"left":589.65,"scrollBarColor":"#000000","width":"100%","height":"100%","scrollBarMargin":2,"watermark":false,"gap":10,"propagateClick":false,"layout":"absolute","start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_3D3FB981_32D9_CF45_41BC_916BB9554372_mobile_playlist])","minWidth":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.2.12.js.map
})();
//Generated with v2023.2.12, Wed May 1 2024