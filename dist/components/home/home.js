System.register(['angular2/angular2', '../../components/weather/weather', '../../components/lineChartWatt/lineChartWatt', '../../components/lineChartVolt/lineChartVolt', '../../components/estimate/estimate', '../../components/savings/savings', '../../components/systemInfo/systemInfo'], function(exports_1) {
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
    var angular2_1, weather_1, lineChartWatt_1, lineChartVolt_1, estimate_1, savings_1, systemInfo_1;
    var Home;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (weather_1_1) {
                weather_1 = weather_1_1;
            },
            function (lineChartWatt_1_1) {
                lineChartWatt_1 = lineChartWatt_1_1;
            },
            function (lineChartVolt_1_1) {
                lineChartVolt_1 = lineChartVolt_1_1;
            },
            function (estimate_1_1) {
                estimate_1 = estimate_1_1;
            },
            function (savings_1_1) {
                savings_1 = savings_1_1;
            },
            function (systemInfo_1_1) {
                systemInfo_1 = systemInfo_1_1;
            }],
        execute: function() {
            Home = (function () {
                function Home() {
                }
                Home = __decorate([
                    angular2_1.Component({
                        selector: 'home',
                        templateUrl: 'Photovoltaic-solar-power-plant/src/components/home/home.html',
                        directives: [angular2_1.CORE_DIRECTIVES, weather_1.Weather, lineChartWatt_1.LineChartWatt, lineChartVolt_1.LineChartVolt, estimate_1.Estimate, savings_1.Savings, systemInfo_1.SystemInfo]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Home);
                return Home;
            })();
            exports_1("Home", Home);
        }
    }
});
