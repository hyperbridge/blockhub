import Vue from 'vue';

Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(value).format('MMMM D, YYYY')
    }
});

Vue.filter('formatTime', function(value) {
    if (value) {
        return moment(value).format('hh:mm:ss') + ' GMT'
    }
});

Vue.filter('timeAgo', (date) => moment(date).fromNow());

Vue.filter('timeAgoShort', (date) => moment(date).fromNow().replace('ago', ''));

Vue.filter('statusIcon', status => {
    const getClass = status => {
        switch(status) {
            case 'info': return 'info';
            case 'success': return 'check';
            case 'success-circle': return 'check-circle';
            case 'warning': return 'exclamation';
            case 'danger': return 'exclamation-triangle';
            case 'danger-circle': return 'times-circle';
            case 'settings': return 'cog';
            default: return '';
        }
    }
    const statusClass = getClass(status);
    return statusClass.length ?  'fa-' + statusClass : '';
});

