<template>
    <div>
        <ul class="reset-list flex-center-between margin-bottom-10">
            <li
                v-for="title in ['Latest bid', 'Bids', 'Buyout', 'Market value', 'Created by']"
                :key="title"
            >
                {{ title }}
            </li>
        </ul>
        <ul class="reset-list">
            <router-link
                v-for="[id, offer] in offersMap" :key="id"
                tag="li"
                class="offer"
                :to="{
                    name: 'Marketplace Asset Offer',
                    params: { assetId, offerId: offer.id }
                }"
            >
                <span>
                    <span class="offer__max-bid">
                        {{ offer.bids[offer.bids.length - 1].value }}
                    </span>$
                </span>
                <span class="offer__bids-count">
                    <i class="fas fa-gavel"></i>
                    {{ offer.bids.length }}
                </span>
                <span>{{ offer.buyout }}</span>
                <span>{{ offer.marketValue }}</span>
                <div class="flex-center">
                    <c-user
                        :user="offer.seller"
                        class="margin-left-5"
                    />
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['offersMap', 'offers', 'assetId'],
        components: {
            'c-user': (resolve) => require(['@/ui/components/user/simple'], resolve),
        }
    }
</script>

<style lang="scss" scoped>
    .offers__title {
        margin-top: 30px;
        font-size: 25px;
    }
    .offer {
        padding: 10px;
        border-radius: 5px;
        background: #343555;
        box-shadow: 2px 0  20px 0 rgba(1,1,1,.15);
        margin-bottom: 20px;
        list-style-type: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .offer__max-bid {
        font-size: 16px;
        margin: 0 1px 0 5px;
    }
    .offer__bids-count {
        background: rgba(1, 1, 1, 0.15);
        border-radius: 4px;
        padding: 2px 4px;
        min-width: 24px;
        height: 24px;
        text-align: center;
        .fas {
            opacity: .15;
            margin-right: 5px;
        }
    }
</style>

