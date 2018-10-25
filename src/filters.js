import Vue from 'vue';

Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(value).format('MMMM D, YYYY')
    }
});

Vue.filter('customDate', (val, dateFormat = 'MMMM D, YYYY') => moment(val).format(dateFormat));

Vue.filter('formatTime', function(value) {
    if (value) {
        return moment(value).format('hh:mm:ss') + ' GMT'
    }
});

Vue.filter('addTime', (val, type = 'days', number) => moment(val).add(type, number));

Vue.filter('timeAgo', (date) => moment(date).fromNow());

Vue.filter('timeAgoShort', (date) => moment(date).fromNow().replace(/ ago|in /, ''));

Vue.filter('timeAgoSShort', date => moment(date).fromNow()
    .replace(/ ago|in /, '')
    .replace('hours', 'hrs')
    .replace('minutes', 'mins')
    .replace('years', 'yrs')
);

Vue.filter('statusIcon', status => {
    const getClass = status => {
        switch(status) {
            case 'info': return 'info';
            case 'success': return 'check';
            case 'success-circle': return 'check-circle';
            case 'warning': return 'exclamation';
            case 'danger': return 'times';
            case 'danger-circle': return 'times-circle';
            case 'settings': return 'cog';
            case 'support': return 'life-ring';
            case 'share': return 'share';
            default: return '';
        }
    }
    const statusClass = getClass(status);
    return statusClass.length ?  'fa-' + statusClass : '';
});

Vue.filter('upperFirstChar', (value) => value.charAt(0).toUpperCase() + value.substring(1, value.length));

Vue.filter('highlightPhrase', (value, phrase, tag = 'strong') => {
    if (!phrase) return value;

    const valueLowered = value.toLowerCase();
    const phraseLowered = phrase.toLowerCase();

    const cut = (start, end) => value.substring(start, end);

    const firstCharIndex = valueLowered.indexOf(phraseLowered);
    if (firstCharIndex < 0) return value;

    const phraseEndPos = firstCharIndex + phrase.length;
    let valueWithPhrase =
        cut(0, firstCharIndex) +
        `<${tag}>` + cut(firstCharIndex, phraseEndPos) + `</${tag}>` +
        cut(phraseEndPos, value.length);

    return valueWithPhrase;
});

Vue.filter('roundNum', num => Math.round(num * 100) / 100);

Vue.filter('space', val => val.replace(/-|_/g, ' '));

