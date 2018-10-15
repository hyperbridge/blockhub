<template>
    <c-layout navigationKey="settings">
        <div class="content" id="content">
            <c-block class="margin-bottom-30" title="Client Settings">
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="settings_item">
                            <c-switch />
                            <div class="text">
                                <h4>Open BlockHub on system startup</h4>
                                <p>Turn on if you want the application to load automatically
                                when you turn on your computer</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="settings_item">
                            <c-switch />
                            <div class="text">
                                <h4>Show system warnings</h4>
                                <p>Queues for games that mickey nex to Ogopogo in freezie Serviette, eh?</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="settings_item">
                            <c-switch />
                            <div class="text">
                                <h4>Enable Ethereum connection</h4>
                                <p>Turn on if you want the application to enable Ethereum connection</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="settings_item">
                            <c-switch
                                :checked="settings.client.pagination"
                                @change="updateClientSettings('pagination')"
                            />
                            <div class="text">
                                <h4>Pagination Mode</h4>
                                <p>Turn on if you want to switch between <i>pagination</i> or <i>load more</i> navigation mode</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="settings_item">
                            <c-switch
                                :checked="systemPermissions"
                                @change="requestNotifPerm()"
                            />
                            <div class="text">
                                <h4>System notifications</h4>
                                <p>Enable system notifications from BlockHub App</p>
                            </div>
                        </div>
                    </div>
                </div>
            </c-block>
            <c-block class="margin-bottom-30" title="Performance Settings">
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="settings_item">
                            <c-switch
                                @change="updateClientSettings('animations')"
                                :checked="settings.client.animations"
                            />
                            <div class="text">
                                <h4>Enable animations</h4>
                                <p>Turn on if you want to enable animations and transitions</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="settings_item">
                            <c-switch
                                @change="updateClientSettings('autoplay')"
                                :checked="settings.client.autoplay"
                            />
                            <div class="text">
                                <h4>Enable autoplay</h4>
                                <p>Turn on if you want to play videos automatically</p>
                            </div>
                        </div>
                    </div>
                    <c-benchmark
                        :settings="settings"
                        class="col-12 d-flex justify-content-between align-items-center"
                    />
                </div>
            </c-block>
            <c-block class="margin-bottom-30" title="Advanced">
                <div class="row">
                    <div class="col-12 d-flex justify-content-between align-items-center">
                        <div>
                            Advanced settings can be managed here. These are primarily for developers @BlockHub.
                            <br /><strong>Warning:</strong> Only use these if you know what you're doing.
                        </div>
                        <div>
                            <c-button @click="clearDatabase" status="warning">DELETE DATABASE</c-button>
                        </div>
                    </div>
                </div>
            </c-block>
            <c-block class="margin-bottom-30" title="Game Activity">
                <c-inline-ntf type="warning">
                    <div class="h4 font-weight-bold p-0 m-0">No game activity!</div>
                    <div class="h5 p-0 m-0">What are you playing!?</div>
                </c-inline-ntf>
                <div class="h5 margin-top-20">
                    Not seeing your game? <c-button status="plain">Add it!</c-button>
                </div>
                <div class="margin-top-20">
                    <c-switch label="Display currently running games as a status message" />
                </div>
            </c-block>
            <c-block class="margin-bottom-30" title="Added games">
                <div class="games-list">
                    <div class="games-list__item">
                        <div class="icon">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <div>
                            <h3 class="p-0 m-0">World of Warcraft</h3>
                            <span>Last played 6 hours ago</span>
                        </div>
                    </div>
                    <div class="games-list__item">
                        <div class="icon">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <div>
                            <h3 class="p-0 m-0">Might & Magic: Heroes VI</h3>
                            <span>Last played 2 days ago</span>
                        </div>
                    </div>
                </div>
                <div class="h5 d-none">
                    No added games yet.
                </div>
            </c-block>
            <c-block class="margin-bottom-30" title="Language Preferences">
                <h3>Primary language</h3>
                <p>
                    When possible, display content in this language:
                </p>
                <select class="form-control" style="width: 300px">
                    <option v-for="(lang, index) in languages" :key="index" :id="['select_' + lang.name.toLowerCase() ]">
                        {{ lang.nativeName }}
                    </option>
                </select>
                <hr>
                <h3>Secondary Languages</h3>
                <p>
                    Additionally, show me content only available on this languages:
                </p>
                <c-checkbox-group>
                    <c-checkbox class="lang-checkbox" v-for="(lang, index) in languages" :key="index" :id="lang.name.toLowerCase()" >
                        {{ lang.nativeName }}
                    </c-checkbox>
                </c-checkbox-group>
                <div class="text-right">
                    <c-button status="success" class="margin-top-30">
                        Save
                    </c-button>
                </div>
            </c-block>
        </div>
    </c-layout>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    components: {
        'c-layout': (resolve) => require(['@/ui/layouts/default'], resolve),
        'c-block': (resolve) => require(['@/ui/components/block'], resolve),
        'c-benchmark': (resolve) => require(['@/ui/components/benchmark'], resolve),
        'c-inline-ntf': (resolve) => require(['@/ui/components/notification/inline.vue'], resolve),
        'c-switch': (resolve) => require(['@/ui/components/switch'], resolve),
        'c-checkbox': (resolve) => require(['@/ui/components/checkbox'], resolve),
        'c-checkbox-group': (resolve) => require(['@/ui/components/checkbox/group.vue'], resolve),
    },
    data() {
        return {
            systemPermissions: false,
            languages: {
                "ab":{
                    "name":"Abkhaz",
                    "nativeName":"аҧсуа"
                },
                "aa":{
                    "name":"Afar",
                    "nativeName":"Afaraf"
                },
                "af":{
                    "name":"Afrikaans",
                    "nativeName":"Afrikaans"
                },
                "ak":{
                    "name":"Akan",
                    "nativeName":"Akan"
                },
                "sq":{
                    "name":"Albanian",
                    "nativeName":"Shqip"
                },
                "am":{
                    "name":"Amharic",
                    "nativeName":"አማርኛ"
                },
                "ar":{
                    "name":"Arabic",
                    "nativeName":"العربية"
                },
                "an":{
                    "name":"Aragonese",
                    "nativeName":"Aragonés"
                },
                "hy":{
                    "name":"Armenian",
                    "nativeName":"Հայերեն"
                },
                "bs":{
                    "name":"Bosnian",
                    "nativeName":"bosanski jezik"
                },
                "br":{
                    "name":"Breton",
                    "nativeName":"brezhoneg"
                },
                "bg":{
                    "name":"Bulgarian",
                    "nativeName":"български език"
                },
                "my":{
                    "name":"Burmese",
                    "nativeName":"ဗမာစာ"
                },
                "ca":{
                    "name":"Catalan; Valencian",
                    "nativeName":"Català"
                },
                "ch":{
                    "name":"Chamorro",
                    "nativeName":"Chamoru"
                },
                "ce":{
                    "name":"Chechen",
                    "nativeName":"нохчийн мотт"
                },
                "ny":{
                    "name":"Chichewa; Chewa; Nyanja",
                    "nativeName":"chiCheŵa, chinyanja"
                },
                "zh":{
                    "name":"Chinese",
                    "nativeName":"中文 (Zhōngwén), 汉语, 漢語"
                },
                "cv":{
                    "name":"Chuvash",
                    "nativeName":"чӑваш чӗлхи"
                },
                "kw":{
                    "name":"Cornish",
                    "nativeName":"Kernewek"
                },
                "co":{
                    "name":"Corsican",
                    "nativeName":"corsu, lingua corsa"
                },
                "cr":{
                    "name":"Cree",
                    "nativeName":"ᓀᐦᐃᔭᐍᐏᐣ"
                },
                "hr":{
                    "name":"Croatian",
                    "nativeName":"hrvatski"
                },
                "cs":{
                    "name":"Czech",
                    "nativeName":"česky, čeština"
                },
                "da":{
                    "name":"Danish",
                    "nativeName":"dansk"
                },
                "dv":{
                    "name":"Divehi; Dhivehi; Maldivian;",
                    "nativeName":"ދިވެހި"
                },
                "nl":{
                    "name":"Dutch",
                    "nativeName":"Nederlands, Vlaams"
                },
                "en":{
                    "name":"English",
                    "nativeName":"English"
                },
                "eo":{
                    "name":"Esperanto",
                    "nativeName":"Esperanto"
                },
                "et":{
                    "name":"Estonian",
                    "nativeName":"eesti, eesti keel"
                },
                "ee":{
                    "name":"Ewe",
                    "nativeName":"Eʋegbe"
                },
                "fo":{
                    "name":"Faroese",
                    "nativeName":"føroyskt"
                },
                "fj":{
                    "name":"Fijian",
                    "nativeName":"vosa Vakaviti"
                },
                "fi":{
                    "name":"Finnish",
                    "nativeName":"suomi, suomen kieli"
                },
                "fr":{
                    "name":"French",
                    "nativeName":"français, langue française"
                },
                "ff":{
                    "name":"Fula; Fulah; Pulaar; Pular",
                    "nativeName":"Fulfulde, Pulaar, Pular"
                },
                "gl":{
                    "name":"Galician",
                    "nativeName":"Galego"
                },
                "ka":{
                    "name":"Georgian",
                    "nativeName":"ქართული"
                },
                "de":{
                    "name":"German",
                    "nativeName":"Deutsch"
                },
                "el":{
                    "name":"Greek, Modern",
                    "nativeName":"Ελληνικά"
                },
                "gn":{
                    "name":"Guaraní",
                    "nativeName":"Avañeẽ"
                },
                "gu":{
                    "name":"Gujarati",
                    "nativeName":"ગુજરાતી"
                },
                "ht":{
                    "name":"Haitian; Haitian Creole",
                    "nativeName":"Kreyòl ayisyen"
                },
                "ha":{
                    "name":"Hausa",
                    "nativeName":"Hausa, هَوُسَ"
                },
                "he":{
                    "name":"Hebrew (modern)",
                    "nativeName":"עברית"
                },
                "hz":{
                    "name":"Herero",
                    "nativeName":"Otjiherero"
                },
                "hi":{
                    "name":"Hindi",
                    "nativeName":"हिन्दी, हिंदी"
                },
                "ho":{
                    "name":"Hiri Motu",
                    "nativeName":"Hiri Motu"
                },
                "hu":{
                    "name":"Hungarian",
                    "nativeName":"Magyar"
                },
                "ia":{
                    "name":"Interlingua",
                    "nativeName":"Interlingua"
                },
                "id":{
                    "name":"Indonesian",
                    "nativeName":"Bahasa Indonesia"
                },
                "ie":{
                    "name":"Interlingue",
                    "nativeName":"Originally called Occidental; then Interlingue after WWII"
                },
                "ga":{
                    "name":"Irish",
                    "nativeName":"Gaeilge"
                },
                "ig":{
                    "name":"Igbo",
                    "nativeName":"Asụsụ Igbo"
                },
                "ik":{
                    "name":"Inupiaq",
                    "nativeName":"Iñupiaq, Iñupiatun"
                },
                "io":{
                    "name":"Ido",
                    "nativeName":"Ido"
                },
                "is":{
                    "name":"Icelandic",
                    "nativeName":"Íslenska"
                },
                "it":{
                    "name":"Italian",
                    "nativeName":"Italiano"
                },
                "iu":{
                    "name":"Inuktitut",
                    "nativeName":"ᐃᓄᒃᑎᑐᑦ"
                },
                "ja":{
                    "name":"Japanese",
                    "nativeName":"日本語 (にほんご／にっぽんご)"
                },
                "jv":{
                    "name":"Javanese",
                    "nativeName":"basa Jawa"
                },
                "kl":{
                    "name":"Kalaallisut, Greenlandic",
                    "nativeName":"kalaallisut, kalaallit oqaasii"
                },
                "kn":{
                    "name":"Kannada",
                    "nativeName":"ಕನ್ನಡ"
                },
                "kr":{
                    "name":"Kanuri",
                    "nativeName":"Kanuri"
                },
                "ks":{
                    "name":"Kashmiri",
                    "nativeName":"कश्मीरी, كشميري‎"
                },
                "kk":{
                    "name":"Kazakh",
                    "nativeName":"Қазақ тілі"
                },
                "km":{
                    "name":"Khmer",
                    "nativeName":"ភាសាខ្មែរ"
                },
                "ki":{
                    "name":"Kikuyu, Gikuyu",
                    "nativeName":"Gĩkũyũ"
                },
                "rw":{
                    "name":"Kinyarwanda",
                    "nativeName":"Ikinyarwanda"
                },
                "ky":{
                    "name":"Kirghiz, Kyrgyz",
                    "nativeName":"кыргыз тили"
                },
                "kv":{
                    "name":"Komi",
                    "nativeName":"коми кыв"
                },
                "kg":{
                    "name":"Kongo",
                    "nativeName":"KiKongo"
                },
                "ko":{
                    "name":"Korean",
                    "nativeName":"한국어 (韓國語), 조선말 (朝鮮語)"
                },
                "ku":{
                    "name":"Kurdish",
                    "nativeName":"Kurdî, كوردی‎"
                },
                "kj":{
                    "name":"Kwanyama, Kuanyama",
                    "nativeName":"Kuanyama"
                },
                "la":{
                    "name":"Latin",
                    "nativeName":"latine, lingua latina"
                },
                "lb":{
                    "name":"Luxembourgish, Letzeburgesch",
                    "nativeName":"Lëtzebuergesch"
                },
                "lg":{
                    "name":"Luganda",
                    "nativeName":"Luganda"
                },
                "li":{
                    "name":"Limburgish, Limburgan, Limburger",
                    "nativeName":"Limburgs"
                },
                "ln":{
                    "name":"Lingala",
                    "nativeName":"Lingála"
                },
                "lo":{
                    "name":"Lao",
                    "nativeName":"ພາສາລາວ"
                },
                "lt":{
                    "name":"Lithuanian",
                    "nativeName":"lietuvių kalba"
                },
                "lu":{
                    "name":"Luba-Katanga",
                    "nativeName":""
                },
                "lv":{
                    "name":"Latvian",
                    "nativeName":"latviešu valoda"
                },
                "gv":{
                    "name":"Manx",
                    "nativeName":"Gaelg, Gailck"
                },
                "mk":{
                    "name":"Macedonian",
                    "nativeName":"македонски јазик"
                },
                "mg":{
                    "name":"Malagasy",
                    "nativeName":"Malagasy fiteny"
                },
                "ml":{
                    "name":"Malayalam",
                    "nativeName":"മലയാളം"
                },
                "mt":{
                    "name":"Maltese",
                    "nativeName":"Malti"
                },
                "mi":{
                    "name":"Māori",
                    "nativeName":"te reo Māori"
                },
                "mr":{
                    "name":"Marathi (Marāṭhī)",
                    "nativeName":"मराठी"
                },
                "mh":{
                    "name":"Marshallese",
                    "nativeName":"Kajin M̧ajeļ"
                },
                "mn":{
                    "name":"Mongolian",
                    "nativeName":"монгол"
                },
                "na":{
                    "name":"Nauru",
                    "nativeName":"Ekakairũ Naoero"
                },
                "nv":{
                    "name":"Navajo, Navaho",
                    "nativeName":"Diné bizaad, Dinékʼehǰí"
                },
                "nb":{
                    "name":"Norwegian Bokmål",
                    "nativeName":"Norsk bokmål"
                },
                "nd":{
                    "name":"North Ndebele",
                    "nativeName":"isiNdebele"
                },
                "ne":{
                    "name":"Nepali",
                    "nativeName":"नेपाली"
                },
                "ng":{
                    "name":"Ndonga",
                    "nativeName":"Owambo"
                },
                "nn":{
                    "name":"Norwegian Nynorsk",
                    "nativeName":"Norsk nynorsk"
                },
                "no":{
                    "name":"Norwegian",
                    "nativeName":"Norsk"
                },
                "ii":{
                    "name":"Nuosu",
                    "nativeName":"ꆈꌠ꒿ Nuosuhxop"
                },
                "nr":{
                    "name":"South Ndebele",
                    "nativeName":"isiNdebele"
                },
                "oc":{
                    "name":"Occitan",
                    "nativeName":"Occitan"
                },
                "oj":{
                    "name":"Ojibwe, Ojibwa",
                    "nativeName":"ᐊᓂᔑᓈᐯᒧᐎᓐ"
                },
                "om":{
                    "name":"Oromo",
                    "nativeName":"Afaan Oromoo"
                },
                "or":{
                    "name":"Oriya",
                    "nativeName":"ଓଡ଼ିଆ"
                },
                "os":{
                    "name":"Ossetian, Ossetic",
                    "nativeName":"ирон æвзаг"
                },
                "pa":{
                    "name":"Panjabi, Punjabi",
                    "nativeName":"ਪੰਜਾਬੀ, پنجابی‎"
                },
                "pi":{
                    "name":"Pāli",
                    "nativeName":"पाऴि"
                },
                "fa":{
                    "name":"Persian",
                    "nativeName":"فارسی"
                },
                "pl":{
                    "name":"Polish",
                    "nativeName":"polski"
                },
                "ps":{
                    "name":"Pashto, Pushto",
                    "nativeName":"پښتو"
                },
                "pt":{
                    "name":"Portuguese",
                    "nativeName":"Português"
                },
                "qu":{
                    "name":"Quechua",
                    "nativeName":"Runa Simi, Kichwa"
                },
                "rm":{
                    "name":"Romansh",
                    "nativeName":"rumantsch grischun"
                },
                "rn":{
                    "name":"Kirundi",
                    "nativeName":"kiRundi"
                },
                "ro":{
                    "name":"Romanian, Moldavian, Moldovan",
                    "nativeName":"română"
                },
                "ru":{
                    "name":"Russian",
                    "nativeName":"русский язык"
                },
                "sa":{
                    "name":"Sanskrit (Saṁskṛta)",
                    "nativeName":"संस्कृतम्"
                },
                "sc":{
                    "name":"Sardinian",
                    "nativeName":"sardu"
                },
                "sd":{
                    "name":"Sindhi",
                    "nativeName":"सिन्धी, سنڌي، سندھی‎"
                },
                "se":{
                    "name":"Northern Sami",
                    "nativeName":"Davvisámegiella"
                },
                "sm":{
                    "name":"Samoan",
                    "nativeName":"gagana faa Samoa"
                },
                "sg":{
                    "name":"Sango",
                    "nativeName":"yângâ tî sängö"
                },
                "sr":{
                    "name":"Serbian",
                    "nativeName":"српски језик"
                },
                "gd":{
                    "name":"Scottish Gaelic; Gaelic",
                    "nativeName":"Gàidhlig"
                },
                "sn":{
                    "name":"Shona",
                    "nativeName":"chiShona"
                },
                "si":{
                    "name":"Sinhala, Sinhalese",
                    "nativeName":"සිංහල"
                },
                "tt":{
                    "name":"Tatar",
                    "nativeName":"татарча, tatarça, تاتارچا‎"
                },
                "tw":{
                    "name":"Twi",
                    "nativeName":"Twi"
                },
                "ty":{
                    "name":"Tahitian",
                    "nativeName":"Reo Tahiti"
                },
                "ug":{
                    "name":"Uighur, Uyghur",
                    "nativeName":"Uyƣurqə, ئۇيغۇرچە‎"
                },
                "uk":{
                    "name":"Ukrainian",
                    "nativeName":"українська"
                }
            }
        }
    },
    methods: {
        ...mapMutations(['UPDATE_CLIENT_SETTINGS']),
        updateClientSettings(prop) {
            this.$store.commit('application/UPDATE_CLIENT_SETTINGS', prop);
        },
        clearDatabase() {
            window.resetSettings()
        },
        async requestNotifPerm() {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') this.systemPermissions = true;
        }
    },
    mounted() {
        this.systemPermissions = Notification.permission === 'granted';
    },
    computed: {
        settings() {
            return this.$store.state.application.account.settings;
        }
    }
}
</script>

<style lang="scss" scoped>
    .console-log {
        width: 100%;
        height: 500px;
        overflow-y: scroll;
        padding: 20px 20px 60px 20px;
    }
    .settings_item{
        display: flex;
        width: 100%;
        justify-content: flex-start;
        align-items: flex-start;
        color: #C6C6D6;
        margin-bottom: 30px;
        .switch{
            margin: 1px 10px 0 0;
            padding: 0;
        }
        .text{
            h4{
                font-size: 21px;
                color: #C6C6D6;
                font-weight: bold;
                margin-bottom: 5px;
            }
        }
    }
    .games-list{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .games-list__item{
        display: flex;
        width: 100%;
        align-items: center;
        margin-bottom: 15px;
        padding-bottom: 15px;
        border-bottom: 1px solid rgba(255, 255, 255, .1);
        &:last-child{
            padding-bottom: 0;
            margin-bottom: 0;
            border-bottom: unset;
        }
        .icon{
            font-size: 30px;
            color: #43C981;
            margin-right: 15px;
            width: auto;
            height: auto;
        }
    }
    .lang-checkbox{
        width: calc( 100%/4 );
        display: inline-flex!important;
    }
</style>
