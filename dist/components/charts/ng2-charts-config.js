System.register([], function(exports_1) {
    var Ng2ChartsTheme, Ng2ChartsConfig;
    return {
        setters:[],
        execute: function() {
            (function (Ng2ChartsTheme) {
                Ng2ChartsTheme[Ng2ChartsTheme["BS3"] = 1] = "BS3";
                Ng2ChartsTheme[Ng2ChartsTheme["BS4"] = 2] = "BS4";
            })(Ng2ChartsTheme || (Ng2ChartsTheme = {}));
            exports_1("Ng2ChartsTheme", Ng2ChartsTheme);
            Ng2ChartsConfig = (function () {
                function Ng2ChartsConfig() {
                }
                Object.defineProperty(Ng2ChartsConfig, "theme", {
                    get: function () {
                        // hack as for now
                        var w = window;
                        if (w && w.__theme === 'bs4') {
                            return Ng2ChartsTheme.BS4;
                        }
                        return (this._theme || Ng2ChartsTheme.BS3);
                    },
                    set: function (v) {
                        this._theme = v;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Ng2ChartsConfig;
            })();
            exports_1("Ng2ChartsConfig", Ng2ChartsConfig);
        }
    }
});
