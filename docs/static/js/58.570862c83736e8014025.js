(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/settings/index.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/settings/index.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");
/* harmony import */ var babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        'c-layout': function cLayout(resolve) {
            return Promise.resolve(/*! AMD require */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/layouts/default */ "./src/ui/layouts/default/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-block': function cBlock(resolve) {
            return __webpack_require__.e(/*! AMD require */ 95).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/block */ "./src/ui/components/block/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-benchmark': function cBenchmark(resolve) {
            return __webpack_require__.e(/*! AMD require */ 145).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/benchmark */ "./src/ui/components/benchmark/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-inline-ntf': function cInlineNtf(resolve) {
            return __webpack_require__.e(/*! AMD require */ 146).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/notification/inline.vue */ "./src/ui/components/notification/inline.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-switch': function cSwitch(resolve) {
            return Promise.resolve(/*! AMD require */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/switch */ "./src/ui/components/switch/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-checkbox': function cCheckbox(resolve) {
            return __webpack_require__.e(/*! AMD require */ 100).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/checkbox */ "./src/ui/components/checkbox/index.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        },
        'c-checkbox-group': function cCheckboxGroup(resolve) {
            return __webpack_require__.e(/*! AMD require */ 147).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! @/ui/components/checkbox/group.vue */ "./src/ui/components/checkbox/group.vue")]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
        }
    },
    data: function data() {
        return {
            systemPermissions: false,
            languages: {
                "ab": {
                    "name": "Abkhaz",
                    "nativeName": "аҧсуа"
                },
                "aa": {
                    "name": "Afar",
                    "nativeName": "Afaraf"
                },
                "af": {
                    "name": "Afrikaans",
                    "nativeName": "Afrikaans"
                },
                "ak": {
                    "name": "Akan",
                    "nativeName": "Akan"
                },
                "sq": {
                    "name": "Albanian",
                    "nativeName": "Shqip"
                },
                "am": {
                    "name": "Amharic",
                    "nativeName": "አማርኛ"
                },
                "ar": {
                    "name": "Arabic",
                    "nativeName": "العربية"
                },
                "an": {
                    "name": "Aragonese",
                    "nativeName": "Aragonés"
                },
                "hy": {
                    "name": "Armenian",
                    "nativeName": "Հայերեն"
                },
                "bs": {
                    "name": "Bosnian",
                    "nativeName": "bosanski jezik"
                },
                "br": {
                    "name": "Breton",
                    "nativeName": "brezhoneg"
                },
                "bg": {
                    "name": "Bulgarian",
                    "nativeName": "български език"
                },
                "my": {
                    "name": "Burmese",
                    "nativeName": "ဗမာစာ"
                },
                "ca": {
                    "name": "Catalan; Valencian",
                    "nativeName": "Català"
                },
                "ch": {
                    "name": "Chamorro",
                    "nativeName": "Chamoru"
                },
                "ce": {
                    "name": "Chechen",
                    "nativeName": "нохчийн мотт"
                },
                "ny": {
                    "name": "Chichewa; Chewa; Nyanja",
                    "nativeName": "chiCheŵa, chinyanja"
                },
                "zh": {
                    "name": "Chinese",
                    "nativeName": "中文 (Zhōngwén), 汉语, 漢語"
                },
                "cv": {
                    "name": "Chuvash",
                    "nativeName": "чӑваш чӗлхи"
                },
                "kw": {
                    "name": "Cornish",
                    "nativeName": "Kernewek"
                },
                "co": {
                    "name": "Corsican",
                    "nativeName": "corsu, lingua corsa"
                },
                "cr": {
                    "name": "Cree",
                    "nativeName": "ᓀᐦᐃᔭᐍᐏᐣ"
                },
                "hr": {
                    "name": "Croatian",
                    "nativeName": "hrvatski"
                },
                "cs": {
                    "name": "Czech",
                    "nativeName": "česky, čeština"
                },
                "da": {
                    "name": "Danish",
                    "nativeName": "dansk"
                },
                "dv": {
                    "name": "Divehi; Dhivehi; Maldivian;",
                    "nativeName": "ދިވެހި"
                },
                "nl": {
                    "name": "Dutch",
                    "nativeName": "Nederlands, Vlaams"
                },
                "en": {
                    "name": "English",
                    "nativeName": "English"
                },
                "eo": {
                    "name": "Esperanto",
                    "nativeName": "Esperanto"
                },
                "et": {
                    "name": "Estonian",
                    "nativeName": "eesti, eesti keel"
                },
                "ee": {
                    "name": "Ewe",
                    "nativeName": "Eʋegbe"
                },
                "fo": {
                    "name": "Faroese",
                    "nativeName": "føroyskt"
                },
                "fj": {
                    "name": "Fijian",
                    "nativeName": "vosa Vakaviti"
                },
                "fi": {
                    "name": "Finnish",
                    "nativeName": "suomi, suomen kieli"
                },
                "fr": {
                    "name": "French",
                    "nativeName": "français, langue française"
                },
                "ff": {
                    "name": "Fula; Fulah; Pulaar; Pular",
                    "nativeName": "Fulfulde, Pulaar, Pular"
                },
                "gl": {
                    "name": "Galician",
                    "nativeName": "Galego"
                },
                "ka": {
                    "name": "Georgian",
                    "nativeName": "ქართული"
                },
                "de": {
                    "name": "German",
                    "nativeName": "Deutsch"
                },
                "el": {
                    "name": "Greek, Modern",
                    "nativeName": "Ελληνικά"
                },
                "gn": {
                    "name": "Guaraní",
                    "nativeName": "Avañeẽ"
                },
                "gu": {
                    "name": "Gujarati",
                    "nativeName": "ગુજરાતી"
                },
                "ht": {
                    "name": "Haitian; Haitian Creole",
                    "nativeName": "Kreyòl ayisyen"
                },
                "ha": {
                    "name": "Hausa",
                    "nativeName": "Hausa, هَوُسَ"
                },
                "he": {
                    "name": "Hebrew (modern)",
                    "nativeName": "עברית"
                },
                "hz": {
                    "name": "Herero",
                    "nativeName": "Otjiherero"
                },
                "hi": {
                    "name": "Hindi",
                    "nativeName": "हिन्दी, हिंदी"
                },
                "ho": {
                    "name": "Hiri Motu",
                    "nativeName": "Hiri Motu"
                },
                "hu": {
                    "name": "Hungarian",
                    "nativeName": "Magyar"
                },
                "ia": {
                    "name": "Interlingua",
                    "nativeName": "Interlingua"
                },
                "id": {
                    "name": "Indonesian",
                    "nativeName": "Bahasa Indonesia"
                },
                "ie": {
                    "name": "Interlingue",
                    "nativeName": "Originally called Occidental; then Interlingue after WWII"
                },
                "ga": {
                    "name": "Irish",
                    "nativeName": "Gaeilge"
                },
                "ig": {
                    "name": "Igbo",
                    "nativeName": "Asụsụ Igbo"
                },
                "ik": {
                    "name": "Inupiaq",
                    "nativeName": "Iñupiaq, Iñupiatun"
                },
                "io": {
                    "name": "Ido",
                    "nativeName": "Ido"
                },
                "is": {
                    "name": "Icelandic",
                    "nativeName": "Íslenska"
                },
                "it": {
                    "name": "Italian",
                    "nativeName": "Italiano"
                },
                "iu": {
                    "name": "Inuktitut",
                    "nativeName": "ᐃᓄᒃᑎᑐᑦ"
                },
                "ja": {
                    "name": "Japanese",
                    "nativeName": "日本語 (にほんご／にっぽんご)"
                },
                "jv": {
                    "name": "Javanese",
                    "nativeName": "basa Jawa"
                },
                "kl": {
                    "name": "Kalaallisut, Greenlandic",
                    "nativeName": "kalaallisut, kalaallit oqaasii"
                },
                "kn": {
                    "name": "Kannada",
                    "nativeName": "ಕನ್ನಡ"
                },
                "kr": {
                    "name": "Kanuri",
                    "nativeName": "Kanuri"
                },
                "ks": {
                    "name": "Kashmiri",
                    "nativeName": "कश्मीरी, كشميري‎"
                },
                "kk": {
                    "name": "Kazakh",
                    "nativeName": "Қазақ тілі"
                },
                "km": {
                    "name": "Khmer",
                    "nativeName": "ភាសាខ្មែរ"
                },
                "ki": {
                    "name": "Kikuyu, Gikuyu",
                    "nativeName": "Gĩkũyũ"
                },
                "rw": {
                    "name": "Kinyarwanda",
                    "nativeName": "Ikinyarwanda"
                },
                "ky": {
                    "name": "Kirghiz, Kyrgyz",
                    "nativeName": "кыргыз тили"
                },
                "kv": {
                    "name": "Komi",
                    "nativeName": "коми кыв"
                },
                "kg": {
                    "name": "Kongo",
                    "nativeName": "KiKongo"
                },
                "ko": {
                    "name": "Korean",
                    "nativeName": "한국어 (韓國語), 조선말 (朝鮮語)"
                },
                "ku": {
                    "name": "Kurdish",
                    "nativeName": "Kurdî, كوردی‎"
                },
                "kj": {
                    "name": "Kwanyama, Kuanyama",
                    "nativeName": "Kuanyama"
                },
                "la": {
                    "name": "Latin",
                    "nativeName": "latine, lingua latina"
                },
                "lb": {
                    "name": "Luxembourgish, Letzeburgesch",
                    "nativeName": "Lëtzebuergesch"
                },
                "lg": {
                    "name": "Luganda",
                    "nativeName": "Luganda"
                },
                "li": {
                    "name": "Limburgish, Limburgan, Limburger",
                    "nativeName": "Limburgs"
                },
                "ln": {
                    "name": "Lingala",
                    "nativeName": "Lingála"
                },
                "lo": {
                    "name": "Lao",
                    "nativeName": "ພາສາລາວ"
                },
                "lt": {
                    "name": "Lithuanian",
                    "nativeName": "lietuvių kalba"
                },
                "lu": {
                    "name": "Luba-Katanga",
                    "nativeName": ""
                },
                "lv": {
                    "name": "Latvian",
                    "nativeName": "latviešu valoda"
                },
                "gv": {
                    "name": "Manx",
                    "nativeName": "Gaelg, Gailck"
                },
                "mk": {
                    "name": "Macedonian",
                    "nativeName": "македонски јазик"
                },
                "mg": {
                    "name": "Malagasy",
                    "nativeName": "Malagasy fiteny"
                },
                "ml": {
                    "name": "Malayalam",
                    "nativeName": "മലയാളം"
                },
                "mt": {
                    "name": "Maltese",
                    "nativeName": "Malti"
                },
                "mi": {
                    "name": "Māori",
                    "nativeName": "te reo Māori"
                },
                "mr": {
                    "name": "Marathi (Marāṭhī)",
                    "nativeName": "मराठी"
                },
                "mh": {
                    "name": "Marshallese",
                    "nativeName": "Kajin M̧ajeļ"
                },
                "mn": {
                    "name": "Mongolian",
                    "nativeName": "монгол"
                },
                "na": {
                    "name": "Nauru",
                    "nativeName": "Ekakairũ Naoero"
                },
                "nv": {
                    "name": "Navajo, Navaho",
                    "nativeName": "Diné bizaad, Dinékʼehǰí"
                },
                "nb": {
                    "name": "Norwegian Bokmål",
                    "nativeName": "Norsk bokmål"
                },
                "nd": {
                    "name": "North Ndebele",
                    "nativeName": "isiNdebele"
                },
                "ne": {
                    "name": "Nepali",
                    "nativeName": "नेपाली"
                },
                "ng": {
                    "name": "Ndonga",
                    "nativeName": "Owambo"
                },
                "nn": {
                    "name": "Norwegian Nynorsk",
                    "nativeName": "Norsk nynorsk"
                },
                "no": {
                    "name": "Norwegian",
                    "nativeName": "Norsk"
                },
                "ii": {
                    "name": "Nuosu",
                    "nativeName": "ꆈꌠ꒿ Nuosuhxop"
                },
                "nr": {
                    "name": "South Ndebele",
                    "nativeName": "isiNdebele"
                },
                "oc": {
                    "name": "Occitan",
                    "nativeName": "Occitan"
                },
                "oj": {
                    "name": "Ojibwe, Ojibwa",
                    "nativeName": "ᐊᓂᔑᓈᐯᒧᐎᓐ"
                },
                "om": {
                    "name": "Oromo",
                    "nativeName": "Afaan Oromoo"
                },
                "or": {
                    "name": "Oriya",
                    "nativeName": "ଓଡ଼ିଆ"
                },
                "os": {
                    "name": "Ossetian, Ossetic",
                    "nativeName": "ирон æвзаг"
                },
                "pa": {
                    "name": "Panjabi, Punjabi",
                    "nativeName": "ਪੰਜਾਬੀ, پنجابی‎"
                },
                "pi": {
                    "name": "Pāli",
                    "nativeName": "पाऴि"
                },
                "fa": {
                    "name": "Persian",
                    "nativeName": "فارسی"
                },
                "pl": {
                    "name": "Polish",
                    "nativeName": "polski"
                },
                "ps": {
                    "name": "Pashto, Pushto",
                    "nativeName": "پښتو"
                },
                "pt": {
                    "name": "Portuguese",
                    "nativeName": "Português"
                },
                "qu": {
                    "name": "Quechua",
                    "nativeName": "Runa Simi, Kichwa"
                },
                "rm": {
                    "name": "Romansh",
                    "nativeName": "rumantsch grischun"
                },
                "rn": {
                    "name": "Kirundi",
                    "nativeName": "kiRundi"
                },
                "ro": {
                    "name": "Romanian, Moldavian, Moldovan",
                    "nativeName": "română"
                },
                "ru": {
                    "name": "Russian",
                    "nativeName": "русский язык"
                },
                "sa": {
                    "name": "Sanskrit (Saṁskṛta)",
                    "nativeName": "संस्कृतम्"
                },
                "sc": {
                    "name": "Sardinian",
                    "nativeName": "sardu"
                },
                "sd": {
                    "name": "Sindhi",
                    "nativeName": "सिन्धी, سنڌي، سندھی‎"
                },
                "se": {
                    "name": "Northern Sami",
                    "nativeName": "Davvisámegiella"
                },
                "sm": {
                    "name": "Samoan",
                    "nativeName": "gagana faa Samoa"
                },
                "sg": {
                    "name": "Sango",
                    "nativeName": "yângâ tî sängö"
                },
                "sr": {
                    "name": "Serbian",
                    "nativeName": "српски језик"
                },
                "gd": {
                    "name": "Scottish Gaelic; Gaelic",
                    "nativeName": "Gàidhlig"
                },
                "sn": {
                    "name": "Shona",
                    "nativeName": "chiShona"
                },
                "si": {
                    "name": "Sinhala, Sinhalese",
                    "nativeName": "සිංහල"
                },
                "tt": {
                    "name": "Tatar",
                    "nativeName": "татарча, tatarça, تاتارچا‎"
                },
                "tw": {
                    "name": "Twi",
                    "nativeName": "Twi"
                },
                "ty": {
                    "name": "Tahitian",
                    "nativeName": "Reo Tahiti"
                },
                "ug": {
                    "name": "Uighur, Uyghur",
                    "nativeName": "Uyƣurqə, ئۇيغۇرچە‎"
                },
                "uk": {
                    "name": "Ukrainian",
                    "nativeName": "українська"
                }
            }
        };
    },

    methods: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapMutations"])(['UPDATE_CLIENT_SETTINGS']), {
        updateClientSettings: function updateClientSettings(prop) {
            this.$store.commit('network/UPDATE_CLIENT_SETTINGS', prop);
        },
        clearDatabase: function clearDatabase() {
            debugger;
            var DBDeleteRequest = window.indexedDB.deleteDatabase("LokiCatalog");

            DBDeleteRequest.onerror = function (event) {
                console.log("Error deleting database.");
            };

            DBDeleteRequest.onsuccess = function (event) {
                console.log("Database deleted successfully.");

                console.log(event.result); // should be undefined
            };
        },
        requestNotifPerm: function requestNotifPerm() {
            var _this = this;

            return babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
                var permission;
                return babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return Notification.requestPermission();

                            case 2:
                                permission = _context.sent;

                                if (permission === 'granted') _this.systemPermissions = true;

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this);
            }))();
        }
    }),
    mounted: function mounted() {
        this.systemPermissions = Notification.permission === 'granted';
    },

    computed: {
        settings: function settings() {
            return this.$store.state.network.account.settings;
        }
    }
});

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/settings/index.vue?vue&type=style&index=0&id=4b69fb9a&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader!./node_modules/css-loader??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/settings/index.vue?vue&type=style&index=0&id=4b69fb9a&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/settings/index.vue?vue&type=template&id=4b69fb9a&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/ui/screens/settings/index.vue?vue&type=template&id=4b69fb9a&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('c-layout',{attrs:{"navigationKey":"settings-navigation"}},[_c('div',{staticClass:"content",attrs:{"id":"content"}},[_c('c-block',{staticClass:"margin-bottom-30",attrs:{"title":"Client Settings"}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 col-md-6 col-lg-6"},[_c('div',{staticClass:"settings_item"},[_c('c-switch'),_vm._v(" "),_c('div',{staticClass:"text"},[_c('h4',[_vm._v("Open BlockHub on system startup")]),_vm._v(" "),_c('p',[_vm._v("Turn on if you want the application to load automatically\n                            when you turn on your computer")])])],1)]),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-6 col-lg-6"},[_c('div',{staticClass:"settings_item"},[_c('c-switch'),_vm._v(" "),_c('div',{staticClass:"text"},[_c('h4',[_vm._v("Show system warnings")]),_vm._v(" "),_c('p',[_vm._v("Queues for games that mickey nex to Ogopogo in freezie Serviette, eh?")])])],1)]),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-6 col-lg-6"},[_c('div',{staticClass:"settings_item"},[_c('c-switch'),_vm._v(" "),_c('div',{staticClass:"text"},[_c('h4',[_vm._v("Enable Ethereum connection")]),_vm._v(" "),_c('p',[_vm._v("Turn on if you want the application to enable Ethereum connection")])])],1)]),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-6 col-lg-6"},[_c('div',{staticClass:"settings_item"},[_c('c-switch',{attrs:{"checked":_vm.settings.client.pagination},on:{"change":function($event){_vm.updateClientSettings('pagination')}}}),_vm._v(" "),_c('div',{staticClass:"text"},[_c('h4',[_vm._v("Pagination Mode")]),_vm._v(" "),_c('p',[_vm._v("Turn on if you want to switch between "),_c('i',[_vm._v("pagination")]),_vm._v(" or "),_c('i',[_vm._v("load more")]),_vm._v(" navigation mode")])])],1)]),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-6 col-lg-6"},[_c('div',{staticClass:"settings_item"},[_c('c-switch',{attrs:{"checked":_vm.systemPermissions},on:{"change":function($event){_vm.requestNotifPerm()}}}),_vm._v(" "),_c('div',{staticClass:"text"},[_c('h4',[_vm._v("System notifications")]),_vm._v(" "),_c('p',[_vm._v("Enable system notifications from BlockHub App")])])],1)])])]),_vm._v(" "),_c('c-block',{staticClass:"margin-bottom-30",attrs:{"title":"Performance Settings"}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 col-md-6 col-lg-6"},[_c('div',{staticClass:"settings_item"},[_c('c-switch',{attrs:{"checked":_vm.settings.client.animations},on:{"change":function($event){_vm.updateClientSettings('animations')}}}),_vm._v(" "),_c('div',{staticClass:"text"},[_c('h4',[_vm._v("Enable animations")]),_vm._v(" "),_c('p',[_vm._v("Turn on if you want to enable animations and transitions")])])],1)]),_vm._v(" "),_c('div',{staticClass:"col-12 col-md-6 col-lg-6"},[_c('div',{staticClass:"settings_item"},[_c('c-switch',{attrs:{"checked":_vm.settings.client.autoplay},on:{"change":function($event){_vm.updateClientSettings('autoplay')}}}),_vm._v(" "),_c('div',{staticClass:"text"},[_c('h4',[_vm._v("Enable autoplay")]),_vm._v(" "),_c('p',[_vm._v("Turn on if you want to play videos automatically")])])],1)]),_vm._v(" "),_c('c-benchmark',{staticClass:"col-12 d-flex justify-content-between align-items-center",attrs:{"settings":_vm.settings}})],1)]),_vm._v(" "),_c('c-block',{staticClass:"margin-bottom-30",attrs:{"title":"Advanced"}},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12 d-flex justify-content-between align-items-center"},[_c('div',[_vm._v("\n                        Advanced settings can be managed here. These are primarily for developers @BlockHub.\n                        "),_c('br'),_c('strong',[_vm._v("Warning:")]),_vm._v(" Only use these if you know what you're doing.\n                    ")]),_vm._v(" "),_c('div',[_c('c-button',{attrs:{"status":"warning"},on:{"click":_vm.clearDatabase}},[_vm._v("DELETE DATABASE")])],1)])])]),_vm._v(" "),_c('c-block',{staticClass:"margin-bottom-30",attrs:{"title":"Game Activity"}},[_c('c-inline-ntf',{attrs:{"type":"warning"}},[_c('div',{staticClass:"h4 font-weight-bold p-0 m-0"},[_vm._v("No game activity!")]),_vm._v(" "),_c('div',{staticClass:"h5 p-0 m-0"},[_vm._v("What are you playing!?")])]),_vm._v(" "),_c('div',{staticClass:"h5 margin-top-20"},[_vm._v("\n                Not seeing your game? "),_c('c-button',{attrs:{"status":"plain"}},[_vm._v("Add it!")])],1),_vm._v(" "),_c('div',{staticClass:"margin-top-20"},[_c('c-switch',{attrs:{"label":"Display currently running games as a status message"}})],1)],1),_vm._v(" "),_c('c-block',{staticClass:"margin-bottom-30",attrs:{"title":"Added games"}},[_c('div',{staticClass:"games-list"},[_c('div',{staticClass:"games-list__item"},[_c('div',{staticClass:"icon"},[_c('i',{staticClass:"fas fa-check-circle"})]),_vm._v(" "),_c('div',[_c('h3',{staticClass:"p-0 m-0"},[_vm._v("World of Warcraft")]),_vm._v(" "),_c('span',[_vm._v("Last played 6 hours ago")])])]),_vm._v(" "),_c('div',{staticClass:"games-list__item"},[_c('div',{staticClass:"icon"},[_c('i',{staticClass:"fas fa-check-circle"})]),_vm._v(" "),_c('div',[_c('h3',{staticClass:"p-0 m-0"},[_vm._v("Might & Magic: Heroes VI")]),_vm._v(" "),_c('span',[_vm._v("Last played 2 days ago")])])])]),_vm._v(" "),_c('div',{staticClass:"h5 d-none"},[_vm._v("\n                No added games yet.\n            ")])]),_vm._v(" "),_c('c-block',{staticClass:"margin-bottom-30",attrs:{"title":"Language Preferences"}},[_c('h3',[_vm._v("Primary language")]),_vm._v(" "),_c('p',[_vm._v("\n                When possible, display content in this language:\n            ")]),_vm._v(" "),_c('select',{staticClass:"form-control",staticStyle:{"width":"300px"}},_vm._l((_vm.languages),function(lang,index){return _c('option',{key:index,attrs:{"id":['select_' + lang.name.toLowerCase() ]}},[_vm._v("\n                    "+_vm._s(lang.nativeName)+"\n                ")])})),_vm._v(" "),_c('hr'),_vm._v(" "),_c('h3',[_vm._v("Secondary Languages")]),_vm._v(" "),_c('p',[_vm._v("\n                Additionally, show me content only available on this languages:\n            ")]),_vm._v(" "),_c('c-checkbox-group',_vm._l((_vm.languages),function(lang,index){return _c('c-checkbox',{key:index,staticClass:"lang-checkbox",attrs:{"id":lang.name.toLowerCase()}},[_vm._v("\n                    "+_vm._s(lang.nativeName)+"\n                ")])})),_vm._v(" "),_c('div',{staticClass:"text-right"},[_c('c-button',{staticClass:"margin-top-30",attrs:{"status":"success"}},[_vm._v("\n                    Save\n                ")])],1)],1)],1)])}
var staticRenderFns = []



/***/ }),

/***/ "./src/ui/screens/settings/index.vue":
/*!*******************************************!*\
  !*** ./src/ui/screens/settings/index.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_4b69fb9a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4b69fb9a&scoped=true */ "./src/ui/screens/settings/index.vue?vue&type=template&id=4b69fb9a&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/ui/screens/settings/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_4b69fb9a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=4b69fb9a&lang=scss&scoped=true */ "./src/ui/screens/settings/index.vue?vue&type=style&index=0&id=4b69fb9a&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_4b69fb9a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_4b69fb9a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4b69fb9a",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui/screens/settings/index.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./src/ui/screens/settings/index.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/settings/index.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui/screens/settings/index.vue?vue&type=style&index=0&id=4b69fb9a&lang=scss&scoped=true":
/*!****************************************************************************************************!*\
  !*** ./src/ui/screens/settings/index.vue?vue&type=style&index=0&id=4b69fb9a&lang=scss&scoped=true ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4b69fb9a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader??ref--10-2!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=4b69fb9a&lang=scss&scoped=true */ "./node_modules/extract-text-webpack-plugin/dist/loader.js??ref--10-0!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js??ref--10-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/settings/index.vue?vue&type=style&index=0&id=4b69fb9a&lang=scss&scoped=true");
/* harmony import */ var _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4b69fb9a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4b69fb9a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4b69fb9a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4b69fb9a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_extract_text_webpack_plugin_dist_loader_js_ref_10_0_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_10_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4b69fb9a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/ui/screens/settings/index.vue?vue&type=template&id=4b69fb9a&scoped=true":
/*!*************************************************************************************!*\
  !*** ./src/ui/screens/settings/index.vue?vue&type=template&id=4b69fb9a&scoped=true ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4b69fb9a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=4b69fb9a&scoped=true */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/ui/screens/settings/index.vue?vue&type=template&id=4b69fb9a&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4b69fb9a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4b69fb9a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=58.570862c83736e8014025.js.map