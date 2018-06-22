class AppCtrl {
    constructor($mdSidenav) {
        this.$mdSidenav = $mdSidenav;
        this.title = 'AngularJS Material webpack boilerplate';
        this.toggleLeft = this.buildToggler('left');

        this.links = [
            {
                "uisref": "root",
                "icon": "favorite"

            },
            {
                "uisref": "home",
                "icon": "home"

            },
            {
                "uisref": "about",
                "icon": "account_box"
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