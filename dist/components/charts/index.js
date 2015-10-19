System.register(['./charts/charts', './ng2-charts-config'], function(exports_1) {
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (charts_1_1) {
                exportStar_1(charts_1_1);
            },
            function (ng2_charts_config_1_1) {
                exportStar_1(ng2_charts_config_1_1);
            }],
        execute: function() {
        }
    }
});
