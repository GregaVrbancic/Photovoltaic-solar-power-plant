System.register(['angular2/angular2', '../../services/feedService'], function(exports_1) {
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
    var angular2_1, feedService_1;
    var SystemInfo;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (feedService_1_1) {
                feedService_1 = feedService_1_1;
            }],
        execute: function() {
            SystemInfo = (function () {
                function SystemInfo(feedService) {
                    var _this = this;
                    this.feedService = feedService;
                    feedService
                        .getTotalWattFeed()
                        .subscribe(function (data) { return _this.system = data; }, function (err) { return _this.logError(err); }, function () { return console.log('getTotalWattFeed() Complete'); });
                }
                SystemInfo.prototype.logError = function (err) {
                    console.error('There was an error: ' + err);
                };
                SystemInfo = __decorate([
                    angular2_1.Component({
                        selector: 'system-info',
                        templateUrl: 'src/components/systemInfo/systemInfo.html',
                        bindings: [feedService_1.FeedService]
                    }), 
                    __metadata('design:paramtypes', [feedService_1.FeedService])
                ], SystemInfo);
                return SystemInfo;
            })();
            exports_1("SystemInfo", SystemInfo);
        }
    }
});
