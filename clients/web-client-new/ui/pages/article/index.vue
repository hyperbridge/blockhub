<template>
    <c-layout>
        <div class="article-page">
            <!--Page header-->
            <div class="row article-page__nav">
                <div class="col-12">
                    <nav>
                        <ul>
                            <li>
                                <a href="#">Shows</a>
                            </li>
                            <li>
                                <a href="#">This day un History</a>
                            </li>
                            <li>
                                <a href="#">Schedule</a>
                            </li>
                            <li>
                                <a href="#">Topics</a>
                            </li>
                            <li>
                                <a href="#">Stories</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="row align-items-center article-page__header">
                <div class="col-auto border-right">
                    <div class="h4 p-o m-0">
                        THIS DAY IN HISTORY
                    </div>
                </div>
                <div class="col-auto">
                    <div class="datepicker-icon">
                        <c-datepicker
                            v-model="date"
                            :full-month-name="true"
                            format="MMMM d"
                            placeholder="Choose date"
                            input-class="clean-date-input clean-date-input--arrow form-calendar__text"
                            name="article-date"
                            calendar-class="form-calendar"
                            minimumView="day"
                            maximumView="month" />
                    </div>
                </div>
            </div>
            <!--End Page Header-->
            <!--Page Content-->
            <div class="row">
                <div class="col-12">
                    <h1>HTML Ipsum Presents</h1>

                    <p>
                        <strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac
                        turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
                        Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris
                        placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat
                        wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit
                        eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a
                            href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.
                    </p>

                    <h2>Header Level 2</h2>

                    <ol>
                        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                        <li>Aliquam tincidunt mauris eu risus.</li>
                    </ol>

                    <blockquote>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at
                            felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend,
                            libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam.
                            Vivamus pretium ornare est.
                        </p>
                    </blockquote>

                    <h3>Header Level 3</h3>

                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                        <li>Aliquam tincidunt mauris eu risus.</li>
                    </ul>
                    <pre>
                        <code>
                            #header h1 a {
                              display: block;
                              width: 300px;
                              height: 80px;
                            }
                        </code>
                    </pre>
                </div>
            </div>
            <!--End Page Content-->
            <!--Also in this day-->
            <div class="row also-in-day">
                <div class="col-12">
                    <div class="h1 my-5 p-0">
                        Also, in this day!
                    </div>
                </div>
                <!--Also in this day list-->
                <!--Also in this day list item-->
                <div class="col-12">
                    <ul class="tags-line">
                        <li>
                            <c-button status="plain">
                                ART
                            </c-button>
                        </li>
                        <li>
                            <c-button status="plain">
                                Literature
                            </c-button>
                        </li>
                        <li>
                            <c-button status="plain">
                                History
                            </c-button>
                        </li>
                    </ul>
                </div>
                <div class="col-12">
                    <div class="also-in-day__item">
                        <div class="h2 mt-2 mb-3">
                            Vivamus vitae nisl leo.
                        </div>
                        <p>
                            Praesent efficitur nisl nec tellus tincidunt tristique. Nam non metus ac orci feugiat
                            volutpat
                            in in lacus. Integer malesuada tristique tortor id mollis. Fusce feugiat mi id lacus aliquam
                            molestie. Ut tempus posuere libero, sit amet tincidunt nisl ultrices sit amet. Maecenas
                            mattis
                            mauris in dui porttitor vulputate efficitur eget nunc. Pellentesque sit amet justo mi.
                            Vivamus
                            ultrices eget magna non volutpat. Class aptent taciti sociosqu ad litora torquent per
                            conubia
                            nostra, per inceptos himenaeos. Phasellus quis orci interdum, volutpat est eu, placerat
                            erat.
                        </p>
                        <div class="w-100 text-right">
                            <c-button
                                status="second-info"
                                size="sm">
                                Read more
                            </c-button>
                        </div>
                    </div>
                </div>
                <!--Also in this day list item-->
                <div class="col-12">
                    <ul class="tags-line">
                        <li>
                            <c-button status="plain">
                                ART
                            </c-button>
                        </li>
                        <li>
                            <c-button status="plain">
                                Literature
                            </c-button>
                        </li>
                        <li>
                            <c-button status="plain">
                                History
                            </c-button>
                        </li>
                    </ul>
                </div>
                <div class="col-12">
                    <div class="also-in-day__item">
                        <div class="h2 mt-2 mb-3">
                            Nunc in condimentum felis, in dignissim ipsum.
                        </div>
                        <p>
                            Curabitur semper lacus nisi, sit amet venenatis nisl efficitur malesuada. Donec ac dui
                            velit. Mauris sagittis volutpat dui sed suscipit. Cras faucibus lacinia semper. Vivamus
                            felis metus, dignissim quis hendrerit ut, rutrum vitae ligula. Etiam euismod felis at
                            egestas fringilla. Integer facilisis, nisi eget dignissim suscipit, velit turpis fermentum
                            tellus, quis vestibulum nibh felis sit amet elit. Vivamus a rhoncus purus. Donec et dictum
                            quam. Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes,
                            nascetur ridiculus mus.
                        </p>
                        <div class="w-100 text-right">
                            <c-button
                                status="second-info"
                                size="sm">
                                Read more
                            </c-button>
                        </div>
                    </div>
                </div>
                <!--End List-->
            </div>
            <!--Citation Information-->
            <div class="row citation-information">
                <div class="col-12">
                    <div class="h1 my-5 p-0">
                        Citation Information
                    </div>
                    <template v-for="(item, index) in citation">
                        <div
                            class="h4"
                            :class=" index == 0 ? '' : 'mt-4'">
                            {{ item.title }}
                        </div>
                        <div>
                            {{ item.text }}
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-datepicker': resolve => require(['vuejs-datepicker'], resolve)
    },
    data() {
        return {
            date: '2019-02-04T22:07:00.000Z',
            citation: [
                {
                    title: 'Article Title',
                    text: 'Great Tokyo Fire continues to blaze'
                },
                {
                    title: 'Author',
                    text: 'History.com Editors'
                },
                {
                    title: 'Website Name',
                    text: 'HISTORY'
                },
                {
                    title: 'URL',
                    text: 'https://www.history.com/this-day-in-history/great-tokyo-fire-continues-to-blaze'
                },
                {
                    title: 'Access Date',
                    text: 'February 10, 2019'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
    input.clean-date-input {
        background-color: transparent !important;
        color: #fff !important;
        border: unset !important;
        box-shadow: none !important;
        font-size: 1.5rem;
        text-transform: uppercase;
        &:focus,
        &:active {
            background-color: transparent !important;
        }
        &:hover {
            cursor: pointer;
        }
    }

    .clean-date-input--arrow {
        padding-right: 30px;
    }

    .datepicker-icon {
        position: relative;
        display: inline-flex;
        width: 150px;
        &:before {
            content: "\f107";
            font-family: 'Font Awesome 5 Free';
            font-weight: 900;
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            width: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: #fff;
            font-size: 16px;
        }
    }
</style>

<style lang="scss" scoped>
    .article-page__header {
        padding: 10px 0;
        background: rgba(0, 0, 0, .2);
        margin-bottom: 30px;
    }

    .article-page__nav {
        ul {
            display: flex;
            align-items: center;
            padding: 0;
            margin: 0 0 10px;
            li {
                list-style: none;
                margin-right: 20px;
                a {
                    font-size: 14px;
                    text-transform: uppercase;
                    color: #fff;
                    font-weight: bold;
                    opacity: .7;
                    &:hover {
                        opacity: 1;
                        text-decoration: none;
                    }
                }
            }
        }
    }

    .also-in-day__item {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid rgba(255, 255, 255, .1);
    }

    .tags-line {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: 0;
        margin: 0;
        li {
            list-style: none;
            &:after {
                content: ",";
            }
            a {
                padding-right: 2px !important;
            }
            &:first-child {
                a {
                    padding-left: 0 !important;
                }
            }
            &:last-child {
                &:after {
                    display: none;
                }
            }
        }
    }
</style>
