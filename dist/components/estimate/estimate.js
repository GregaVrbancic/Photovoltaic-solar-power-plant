System.register(['angular2/angular2', '../../services/estimateService'], function(exports_1) {
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
    var angular2_1, estimateService_1;
    var Estimate;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (estimateService_1_1) {
                estimateService_1 = estimateService_1_1;
            }],
        execute: function() {
            Estimate = (function () {
                function Estimate(estimateService) {
                    var _this = this;
                    this.estimateService = estimateService;
                    this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Avg', 'Sep', 'Oct', 'Nov', 'Dec'];
                    estimateService
                        .getEstimation()
                        .subscribe(function (data) { return _this.estimation = data; }, function (err) { return _this.logError(err); }, function () { return console.log('getEstimation() Complete'); });
                    setInterval(function () {
                    }, 2000);
                }
                Estimate.prototype.logError = function (err) {
                    console.error('There was an error: ' + err);
                };
                Estimate = __decorate([
                    angular2_1.Component({
                        selector: 'estimate',
                        templateUrl: 'Photovoltaic-solar-power-plant/src/components/estimate/estimate.html',
                        bindings: [estimateService_1.EstimateService],
                        directives: [angular2_1.NgFor]
                    }), 
                    __metadata('design:paramtypes', [estimateService_1.EstimateService])
                ], Estimate);
                return Estimate;
            })();
            exports_1("Estimate", Estimate);
        }
    }
});
