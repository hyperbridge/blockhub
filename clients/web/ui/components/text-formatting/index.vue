<template>
    <div class="text-formatting">
        <div class="text-formatting__description">
            <div class="h3 font-weight-bold">
                Text formatting
            </div>
            <p>
                These markup tags allow you to add the formatting to the text of your comments and posts,
                similar to HTML
            </p>
        </div>
        <div class="text-formatting__columns-header">
            <div>
                Syntax
            </div>
            <div>
                Example
            </div>
        </div>
        <div class="text-formatting__item">
            <div class="text-formatting__syntax">
                [h1] Header text [/h1]
            </div>
            <div class="text-formatting__example">
                <h1 class="p-0 m-0 text-white">
                    Header text
                </h1>
            </div>
        </div>
        <div class="text-formatting__item">
            <div class="text-formatting__syntax">
                [strong] Bold text [/d]
            </div>
            <div class="text-formatting__example">
                <strong>Bold text</strong>
            </div>
        </div>
        <div class="text-formatting__item">
            <div class="text-formatting__syntax">
                [u] Underline text [/u]
            </div>
            <div class="text-formatting__example">
                <u>Underline text</u>
            </div>
        </div>
        <div class="text-formatting__item">
            <div class="text-formatting__syntax">
                [i] Italic text [/i]
            </div>
            <div class="text-formatting__example">
                <i>Italic text</i>
            </div>
        </div>
        <div class="text-formatting__item">
            <div class="text-formatting__syntax">
                [strike] Strike text [/i]
            </div>
            <div class="text-formatting__example">
                <strike>Strike text</strike>
            </div>
        </div>
        <div class="text-formatting__item">
            <div class="text-formatting__syntax">
                [spoiler] Spoiler text [/i]
            </div>
            <div class="text-formatting__example">
                <details>Spoiler text</details>
            </div>
        </div>
        <div class="text-formatting__item">
            <div class="text-formatting__syntax">
                [url=google.com] Url link [/i]
            </div>
            <div class="text-formatting__example">
                <c-button
                    status="plain"
                    href="https://google.com.ua/">
                    Url link
                </c-button>
            </div>
        </div>
        <div class="text-formatting__item">
            <div class="text-formatting__syntax">
                [list]<br>
                <span class="d-block pl-3">[*] Bullet Item 1</span>
                <span class="d-block pl-3">[*] Bullet Item 2</span>
                <span class="d-block pl-3">[*] Bullet Item 3</span>
                <span class="d-block pl-3">[*] Bullet Item 4</span>
                [/list]
            </div>
            <div class="text-formatting__example">
                <ul>
                    <li>Bullet Item 1</li>
                    <li>Bullet Item 2</li>
                    <li>Bullet Item 3</li>
                    <li>Bullet Item 4</li>
                </ul>
            </div>
        </div>
        <div class="text-formatting__item">
            <div class="text-formatting__syntax">
                [olist]<br>
                <span class="d-block pl-3">[*] Ordered Item 1</span>
                <span class="d-block pl-3">[*] Ordered Item 2</span>
                <span class="d-block pl-3">[*] Ordered Item 3</span>
                <span class="d-block pl-3">[*] Ordered Item 4</span>
                [/olist]
            </div>
            <div class="text-formatting__example">
                <ol style="padding-left: 15px">
                    <li>Ordered Item 1</li>
                    <li>Ordered Item 2</li>
                    <li>Ordered Item 3</li>
                    <li>Ordered Item 4</li>
                </ol>
            </div>
        </div>
        <div class="text-formatting__item">
            <div class="text-formatting__syntax">
                [quote=author]
                Quoted text
                [/quote]
            </div>
            <div class="text-formatting__example">
                <blockquote>
                    <div>
                        <i>Original posted by <strong>author</strong></i>
                    </div>
                    Quoted text
                </blockquote>
            </div>
        </div>
        <div class="text-formatting__item">
            <div class="text-formatting__syntax">
                [code]<br>
                function HelloWorld(){<br>
                condole.log('Hello World')<br>
                }<br>
                [/code]
            </div>
            <div class="text-formatting__example">
                <code>
                    function HelloWorld(){<br>
                    condole.log('Hello World')<br>
                    }
                </code>
            </div>
        </div>
        <div class="text-formatting__item">
            <div class="text-formatting__syntax">
                [table]
                <span class="ml-2 d-block">[tr]</span>
                <span class="ml-4 d-block">[td] Name [/td]</span>
                <span class="ml-4 d-block">[td] Age [/td]</span>
                <span class="ml-2 d-block">[/tr]</span>

                <span class="ml-2 d-block">[tr]</span>
                <span class="ml-4 d-block">[td] Josh [/td]</span>
                <span class="ml-4 d-block">[td] 23 [/td]</span>
                <span class="ml-2 d-block">[/tr]</span>

                <span class="ml-2 d-block">[tr]</span>
                <span class="ml-4 d-block">[td] Alan [/td]</span>
                <span class="ml-4 d-block">[td] 37 [/td]</span>
                <span class="ml-2 d-block">[/tr]</span>
                [/table]
            </div>
            <div class="text-formatting__example">
                <c-table-simple :bordered="true">
                    <tbody>
                        <tr>
                            <td>
                                Name
                            </td>
                            <td>
                                Age
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Josh
                            </td>
                            <td>
                                23
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Alan
                            </td>
                            <td>
                                37
                            </td>
                        </tr>
                    </tbody>
                </c-table-simple>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        'c-table-simple': () => import('~/components/table-simple').then(m => m.default || m)
    }
}
</script>

<style lang="scss" scoped>
    .text-formatting{
        display: flex;
        /*flex-direction: column;*/
        flex-wrap: wrap;
        padding: 5px;
        color: #fff;
    }
    .text-formatting__columns-header{
        display: flex;
        padding: 3px 5px;
        background: rgba(0, 0, 0, .2);
        color: rgba(255, 255, 255, .8);
        margin: 15px 0 10px;
        width: 100%;
        div{
            width: 50%;
        }
    }
    .text-formatting__item{
        display: flex;
        padding: 0 0px 10px;
        margin: 5px 0;
        align-items: center;
        width: 100%;
        border-bottom: 1px solid rgba(255, 255, 255, .05);
        .text-formatting__syntax,
        .text-formatting__example{
            width: 50%;
            padding: 0 5px;
        }
        &:last-child{
            border: unset;
        }
    }
</style>
