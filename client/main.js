/**
 * Cordova and dom ready callback
 *
 * @author Victor Huerta
 */
function onReady() {
    angular.bootstrap(document, ['vhuerta.resume']);
}

if(Meteor.isCordova) {
    angular.element(document).on("deviceready", onReady);
}
else {
    angular.element(document).ready(onReady);
}
