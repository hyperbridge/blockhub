export default (route: string): string => route.replace(/\{/g, ':').replace(/\}/g, '')
