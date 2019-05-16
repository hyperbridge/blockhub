import offers from '@/db/seed/offers.json';
import bids from '@/db/seed/bids.json';
import profiles from '../seed/profiles';
import assets from '../seed/assets';

const bidsPopulated = bids.map(bid => ({ ...bid, user: profiles.find(idt => idt.id == bid.user )}));

export default offers.map((offer, index) => ({
    ...{},
    asset: assets[index],
    bids: [], //offer.bids.map(id => bidsPopulated.find(bid => bid.id == id)),
    seller: profiles.find(idt => idt.id == offer.seller)
}));
