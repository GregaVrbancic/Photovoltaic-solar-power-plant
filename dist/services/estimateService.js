System.register(['angular2/angular2', 'angular2/http', '../properties'], function(exports_1) {
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
    var angular2_1, http_1, properties_1;
    var EstimateService;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (properties_1_1) {
                properties_1 = properties_1_1;
            }],
        execute: function() {
            EstimateService = (function () {
                function EstimateService(http) {
                    this.http = http;
                    this.ESTIMATE_API = properties_1._properties.estimateAPI;
                    this.PRICE_RATE_API = properties_1._properties.priceRateAPI;
                }
                EstimateService.prototype.getPriceRate = function () {
                    return this.http.get(this.PRICE_RATE_API)
                        .map(function (res) { return res.json(); });
                };
                EstimateService.prototype.getEstimation = function () {
                    return this.http.get(this.ESTIMATE_API)
                        .map(function (res) { return res.json(); });
                };
                EstimateService = __decorate([
                    angular2_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], EstimateService);
                return EstimateService;
            })();
            exports_1("EstimateService", EstimateService);
        }
    }
});
