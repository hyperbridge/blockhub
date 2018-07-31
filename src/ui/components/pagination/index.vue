<template>
    <div class="pagination-container">
        <div class="pagination-container__nav">
            <ul>
                <li>
                    <a href="#3" class="first">
                        <i class="fas fa-angle-double-left"></i>
                    </a>
                </li>
                <li>
                    <a href="#3" class="prew">
                        <i class="fas fa-angle-left"></i>
                    </a>
                </li>
                <li>
                    <a href="#3">1</a>
                </li>
                <li>
                    <a href="#3">2</a>
                </li>
                <li>
                    <a href="#3">3</a>
                </li>
                <li class="active">
                    <a href="#3">4</a>
                </li>
                <li>
                    <a href="#3">5</a>
                </li>
                <li>
                    <a href="#3">6</a>
                </li>
                <li>
                    <a href="#3">7</a>
                </li>
                <li>
                    <a href="#3">8</a>
                </li>
                <li>
                    <a href="#3" class="next">
                        <i class="fas fa-angle-right"></i>
                    </a>
                </li>
                <li>
                    <a href="#3" class="last">
                        <i class="fas fa-angle-double-right"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
    export default {
        props: ['total_page']
    }
</script>

<style lang="scss" scoped>

    .pagination-container{
        margin-top: 40px;
        text-align: center;
        width: auto;
        .pagination-container__nav{
            padding: 10px;
            text-align: center;
            width: auto;
            display: inline-block;
            position: relative;
            background: #2E2F4A;
            border-radius: 5px 5px 0 0;
            &:after {
                 position: absolute;
                 content: "";
                 height: 42px;
                 bottom: 0;
                 right: -39px;
                 border: 21px solid transparent;
                 border-bottom: 21px solid #2E2F4A;
                 border-left: 21px solid #2E2F4A;
             }
            &:before {
                 position: absolute;
                 content: "";
                 height: 42px;
                 bottom: 0;
                 left: -39px;
                 border: 21px solid transparent;
                 border-bottom: 21px solid #2E2F4A;
                 border-right: 21px solid #2E2F4A;
             }
            ul{
                padding: 0;
                margin: 0;
                display: flex;
                justify-content: center;
                flex-wrap: nowrap;
                li{
                    list-style: none;
                    display: inline-block;
                    margin: 0 3px;
                    width: 22px;
                    height: 22px;
                    line-height: 22px;
                    text-align: center;
                    a{
                        color: #A2A3BE;
                        font-size: 14px;
                        &.first,
                        &.last,
                        &.prew,
                        &.next{
                             color: #fff;
                         }
                    }
                    &.active,
                    &:hover{
                         background: rgba(255, 255, 255, .15);
                         border-radius: 3px;
                         font-weight: bold;
                         cursor: pointer;
                        a{
                            color: #fff;
                            text-decoration: none;
                        }
                    }
                }
            }
        }
    }
</style>
