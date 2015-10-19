System.register(['angular2/angular2', '../../components/charts/index', '../../services/feedService'], function(exports_1) {
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
    var angular2_1, index_1, feedService_1;
    var LineChartWatt;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (feedService_1_1) {
                feedService_1 = feedService_1_1;
            }],
        execute: function() {
            LineChartWatt = (function () {
                function LineChartWatt(feedService) {
                    var _this = this;
                    this.feedService = feedService;
                    this.lineChartType = 'Line';
                    this.lineChartLabels = [];
                    this.lineChartData = [[]];
                    this.lineChartOptions = {
                        pointHitDetectionRadius: 1
                    };
                    this.lastData = 0;
                    feedService
                        .getTotalWattFeed()
                        .subscribe(function (data) { return _this.digestData(data); }, function (err) { return _this.logError(err); }, function () { return console.log('getTotalWattFeed() Complete'); });
                    setInterval(function () {
                        feedService
                            .getTotalWattFeed()
                            .subscribe(function (data) { return _this.digestData(data); }, function (err) { return _this.logError(err); }, function () { return console.log('getTotalWattFeed() Complete'); });
                    }, 30000);
                }
                LineChartWatt.prototype.chartClicked = function (e) {
                    console.log(e);
                };
                LineChartWatt.prototype.chartHovered = function (e) {
                    console.log(e);
                };
                LineChartWatt.prototype.digestData = function (data) {
                    if (this.lastData != data.feeds[data.feeds.length - 1].entry_id) {
                        //clear labels and data
                        if (this.lineChartLabels.length > 0) {
                            this.lineChartLabels = [];
                        }
                        this.lineChartData = [[]];
                        for (var i = data.feeds.length - 50; i < data.feeds.length; i++) {
                            //set labels
                            var date = new Date(data.feeds[i].created_at);
                            this.lineChartLabels.push(date.getDate() + '/' + (date.getMonth() + 1) + ' ' + date.getHours() + ':' + date.getMinutes());
                            console.log('created at: ' + new Date(data.feeds[i].created_at));
                            //set chart data
                            this.lineChartData[0].push(data.feeds[i].field2);
                        }
                        this.lastData = data.feeds[data.feeds.length - 1].entry_id;
                    }
                };
                LineChartWatt.prototype.logError = function (err) {
                    console.error('There was an error: ' + err);
                };
                LineChartWatt = __decorate([
                    angular2_1.Component({
                        selector: 'line-chart-watt',
                        templateUrl: 'Photovoltaic-solar-power-plant/src/components/lineChartWatt/lineChartWatt.html',
                        directives: [index_1.charts, angular2_1.NgClass, angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES],
                        bindings: [feedService_1.FeedService]
                    }), 
                    __metadata('design:paramtypes', [feedService_1.FeedService])
                ], LineChartWatt);
                return LineChartWatt;
            })();
            exports_1("LineChartWatt", LineChartWatt);
        }
    }
});
