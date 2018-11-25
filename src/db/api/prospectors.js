import prospectors from '../seed/prospectors';
import assets from '../seed/assets';
import profiles from '../seed/profiles';

export default prospectors.map((prospector, i) => ({
    ...prospector,
    asset: assets.find(a => a.id == prospector.asset),
    user: profiles.find(idt => idt.id == prospector.user)
}));
