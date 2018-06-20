let HomeComponent = {
    template: require('./home.component.html'),
    controller: _homeController
};

function _homeController() {
    this.greeting = 'hello';

    this.toggleGreeting = function () {
        this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello'
    }
}

export default HomeComponent;