import prospectors from '../seed/prospectors';
import assets from '../seed/assets';
import identities from '../seed/identities';

export default prospectors.map((prospector, i) => ({
    ...prospector,
    asset: assets.find(a => a.id == prospector.asset),
    user: identities.find(idt => idt.id == prospector.user)
}));
