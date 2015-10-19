System.register(['angular2/angular2', '../../services/estimateService', '../../services/feedService'], function(exports_1) {
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
    var angular2_1, estimateService_1, feedService_1;
    var Savings;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (estimateService_1_1) {
                estimateService_1 = estimateService_1_1;
            },
            function (feedService_1_1) {
                feedService_1 = feedService_1_1;
            }],
        execute: function() {
            Savings = (function () {
                function Savings(estimateService, feedService) {
                    var _this = this;
                    this.estimateService = estimateService;
                    this.feedService = feedService;
                    estimateService
                        .getPriceRate()
                        .subscribe(function (data) { return _this.parseToNumber(data); }, function (err) { return _this.logError(err); }, function () { return console.log('getPriceRate() Complete'); });
                    feedService
                        .getTotalWattFeed()
                        .subscribe(function (data) { return _this.getComulativeWatts(data); }, function (err) { return _this.logError(err); }, function () { return console.log('getTotalWattFeed() Complete'); });
                }
                Savings.prototype.parseToNumber = function (data) {
                    var priceStr = data.results[0].rate;
                    this.price = priceStr.substring(0, 5);
                };
                Savings.prototype.getComulativeWatts = function (data) {
                    this.watts = data.feeds[data.feeds.length - 1].field2;
                };
                Savings.prototype.logError = function (err) {
                    console.error('There was an error: ' + err);
                };
                Savings = __decorate([
                    angular2_1.Component({
                        selector: 'savings',
                        templateUrl: 'src/components/savings/savings.html',
                        bindings: [estimateService_1.EstimateService, feedService_1.FeedService]
                    }), 
                    __metadata('design:paramtypes', [estimateService_1.EstimateService, feedService_1.FeedService])
                ], Savings);
                return Savings;
            })();
            exports_1("Savings", Savings);
        }
    }
});
