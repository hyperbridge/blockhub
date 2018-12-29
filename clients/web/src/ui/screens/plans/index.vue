<template>
    <c-layout navigationKey="store" :showLeftPanel="false" :showRightPanel="false">
        <div class="row">
            <div class="col-1"></div>
            <div class="col-3 text-white" style="margin: 0; padding: 0;">
                <c-option-block shadow 
                    image="https://eu.shop.battle.net/static/4.6.2/images/family-icons/world-of-warcraft.svg"
                    title="Gamer" 
                    subtitle="Massively Multiplayer RPG"
                    notification="Pre-Purchase now!"
                    :list="list"
                />
            </div>
            <div class="col-3 text-white" style="margin: 0; padding: 0;">
                <c-option-block shadow 
                    image="https://eu.shop.battle.net/static/4.6.2/images/family-icons/world-of-warcraft.svg"
                    title="Indie" 
                    subtitle="Massively Multiplayer RPG"
                    notification="Pre-Purchase now!"
                    :list="list"
                />
            </div>
            <div class="col-3 text-white" style="margin: 0; padding: 0;">
                <c-option-block shadow 
                    image="https://eu.shop.battle.net/static/4.6.2/images/family-icons/world-of-warcraft.svg"
                    title="Studio" 
                    subtitle="Massively Multiplayer RPG"
                    notification="Pre-Purchase now!"
                    :list="list"
                />
            </div>
        </div>
    </c-layout>
</template>

<script>
export default {
    components: {
        'c-option-block': (resolve) => require(['@/ui/components/option-block'], resolve)
    },
    data() {
        return {
            list: [
                {
                    id: '23423',
                    name: 'Digital Deluxe Edition',
                    price: '99.99',
                    image: 'https://bnetproduct-a.akamaihd.net//faa/1f29ed14601b9f480e4e37d75770b23a-upsell-bfa-dd.jpg',
                },
                {
                    id: '134',
                    name: 'Standard Edition',
                    price: '32.99',
                    image: 'https://bnetproduct-a.akamaihd.net//ffb/d843fb3f8393a4976d4c4beaceb1ca06-prod-thumb.jpg',
                },
                {
                    id: '3564',
                    name: 'Demo Edition',
                    price: '19.99',
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
</style>
