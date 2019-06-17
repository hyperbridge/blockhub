<template>
    <c-layout>
        <div class="identity-page">
            <c-block title="Badges">
                <div class="identity-page__description margin-bottom-30">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet arcu nec tortor consectetur
                        faucibus. Fusce consequat fermentum fermentum. Nulla semper nisi id augue lobortis, a suscipit
                        dui feugiat. Duis feugiat dictum porta. Sed suscipit elementum accumsan. Morbi fringilla sem
                        elit, ac elementum tellus egestas quis.
                    </p>
                </div>
                <div>
                    <ul class="badge-list">
                        <li
                            v-for="(badge, idx) in badges"
                            :key="`badge-${idx}`"
                            class="badge-list__item"
                            :class="{'badge-list__item--disabled': badge.disabled}">
                            <div class="badge-list__item-icon">
                                <i :class="`fas ${badge.icon}`" />
                            </div>
                            <div class="badge-list__item-text">
                                <div class="h5 font-weight-bold">
                                    {{ badge.title }}
                                </div>
                                <p>
                                    {{ badge.description }}
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </c-block>
        </div>
    </c-layout>
</template>

<script>
export default {
    head() {
        return {
            title: `Identity | BlockHub`,
            meta: [
                { hid: 'description', name: 'description', content: `BlockHub identity` },
                { hid: 'keywords', name: 'keywords', content: 'identity, Ethereum, blockchain, game, indie, developer' }
            ]
        }
    },
    data() {
        return {
            badges: [
                {
                    icon: 'fa-shield-alt',
                    title: 'Duis feugiat dictum porta',
                    description: 'Sed suscipit elementum accumsan. Morbi fringilla sem elit, ac elementum tellus egestas quis.',
                    disabled: false
                },
                {
                    icon: 'fa-leaf',
                    title: 'Nullam in libero',
                    description: 'Quisque ornare nisl a vestibulum feugiat. Proin nisl lorem, lacinia non mi nec, cursus sollicitudin nunc.',
                    disabled: true
                },
                {
                    icon: 'fa-crown',
                    title: 'Proin ac tellus tempus',
                    description: 'Nunc maximus nunc est. Nullam vulputate nisi eros, eget porta ex porta vitae.',
                    disabled: true
                },
                {
                    icon: 'fa-cannabis',
                    title: 'Suspendisse ac lorem rutrum',
                    description: 'Vivamus convallis, ligula id tincidunt egestas, nunc odio ultrices leo, in luctus nisi magna ut quam.',
                    disabled: false
                },
                {
                    icon: 'fa-certificate',
                    title: 'Class aptent taciti sociosqu ad',
                    description: 'Aliquam fringilla aliquet pellentesque. Class aptent taciti per conubia nostra, per inceptos himenaeos.',
                    disabled: false
                },
                {
                    icon: 'fa-bolt',
                    title: 'Sed vestibulum molestie',
                    description: 'Nulla in nibh nec urna laoreet gravida vel suscipit nulla',
                    disabled: false
                },
                {
                    icon: 'fa-award',
                    title: 'Ut lacinia nec ante vitae cursus',
                    description: 'Sed varius nisl vitae leo rhoncus, accumsan tincidunt orci sagittis. Donec dictum, lectus at accumsan rutrum.',
                    disabled: true
                },
                {
                    icon: 'fa-bell',
                    title: 'Suspendisse a varius nisi',
                    description: 'Quisque ornare nisl a vestibulum feugiat. Proin nisl lorem, lacinia non mi nec, cursus sollicitudin nunc.',
                    disabled: true
                },
                {
                    icon: 'fa-cookie',
                    title: 'Morbi lobortis laoreet neque',
                    description: 'Vestibulum ornare porttitor libero. Morbi lobortis laoreet neque a rhoncus.',
                    disabled: true
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .badge-list{
        padding: 0;
        margin: 0;
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        margin: 0 -10px;
        flex-wrap: wrap;
    }
    .badge-list__item{
        list-style: none;
        width: calc( 50% - 20px);
        margin: 10px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        &--disabled{
            .badge-list__item-icon{
                &:after{
                    content: "";
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    background: rgba(0, 0, 0, .6);
                }
            }
            .badge-list__item-text{
                opacity: .5;
            }
        }
    }
    .badge-list__item-icon{
        margin-right: 20px;
        flex-basis: 40px;
        width: 40px;
        height: 40px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 21px;
        border-radius: 5px;
        background: rgba(255, 255, 255, .05);
        border: 1px solid rgba(0, 0, 0, .1);
        position: relative;
        overflow: hidden;
    }
    .badge-list__item-text{
        width: calc( 100% - 60px )
    }
</style>
