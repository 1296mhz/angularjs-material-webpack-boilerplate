class AppCtrl {
    constructor($mdSidenav) {
        this.$mdSidenav = $mdSidenav;
        this.title = 'AngularJS Material webpack boilerplate';
        this.toggleLeft = this.buildToggler('left');

        this.links = [
            {
                "uisref": "root",
                "icon": "icon-home"

            },
            {
                "uisref": "home",
                "icon": "icon-home"

            },
            {
                "uisref": "about",
                "icon": "icon-home"
            }
        ];


    }

    buildToggler(componentId) {
        return function () {
            this.$mdSidenav(componentId).toggle();
        };
    }
}

export default AppCtrl;