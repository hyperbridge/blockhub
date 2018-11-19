import offers from '@/db/seed/offers.json';
import bids from '@/db/seed/bids.json';
import identities from '../seed/identities';
import assets from '../seed/assets';

const bidsPopulated = bids.map(bid => ({ ...bid, user: identities.find(idt => idt.id == bid.user )}));

export default offers.map((offer, index) => ({
    ...offer,
    asset: assets[index],
    bids: offer.bids.map(id => bidsPopulated.find(bid => bid.id == id)),
    seller: identities.find(idt => idt.id == offer.seller)
}));
