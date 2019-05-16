import transactions from '../seed/asset-transactions';
import profiles from '../seed/profiles';
import messages from '../seed/messages';
import assets from '../seed/assets';

export default transactions.map(trx => ({
    ...trx,
    contractorOffer: trx.contractorOffer.map(id => assets.find(asset => asset.id == id)),
    yourOffer: trx.yourOffer.map(id => assets.find(asset => asset.id == id)),
    contractor: profiles.find(idt => idt.id === trx.contractor),
    you: profiles.find(idt => idt.id === trx.you),
    messages: trx.messages
        .map(id => messages.find(asset => asset.id == id))
        .map(msg => ({
            ...msg,
            author: profiles.find(idt => idt.id == msg.author)
        }))
}));
