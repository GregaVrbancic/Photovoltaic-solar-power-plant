System.register(['angular2/angular2', '../../services/weatherService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var angular2_1, weatherService_1;
    var Weather;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (weatherService_1_1) {
                weatherService_1 = weatherService_1_1;
            }],
        execute: function() {
            Weather = (function () {
                function Weather(weatherService) {
                    var _this = this;
                    this.weatherService = weatherService;
                    weatherService
                        .getCurrentWeather()
                        .subscribe(function (data) { return _this.weather = data; }, function (err) { return _this.logError(err); }, function () { return console.log('getCurrentWeather() Complete'); });
                    setInterval(function () {
                        weatherService
                            .getCurrentWeather()
                            .subscribe(function (data) { return _this.weather = data; }, function (err) { return _this.logError(err); }, function () { return console.log('getCurrentWeather() Complete'); });
                    }, 30000);
                }
                Weather.prototype.logError = function (err) {
                    console.error('There was an error: ' + err);
                };
                Weather = __decorate([
                    angular2_1.Component({
                        selector: 'weather',
                        templateUrl: 'src/components/weather/weather.html',
                        bindings: [weatherService_1.WeatherService]
                    }), 
                    __metadata('design:paramtypes', [weatherService_1.WeatherService])
                ], Weather);
                return Weather;
            })();
            exports_1("Weather", Weather);
        }
    }
});
