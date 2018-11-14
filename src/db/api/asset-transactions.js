import transactions from '../seed/asset-transactions';
import identities from '../seed/identities';
import messages from '../seed/messages';
import assets from '../seed/assets';

export default transactions.map(trx => ({
    ...trx,
    contractorOffer: trx.contractorOffer.map(id => assets.find(asset => asset.id == id)),
    yourOffer: trx.yourOffer.map(id => assets.find(asset => asset.id == id)),
    contractor: identities.find(idt => idt.id === trx.contractor),
    you: identities.find(idt => idt.id === trx.you),
    messages: trx.messages
        .map(id => messages.find(asset => asset.id == id))
        .map(msg => ({
            ...msg,
            author: identities.find(idt => idt.id == msg.author)
        }))
}));
