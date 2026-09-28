sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/ndbs/salesorderdata/salesorderdata/test/integration/pages/SalesOrderList.gen",
	"com/ndbs/salesorderdata/salesorderdata/test/integration/pages/SalesOrderObjectPage.gen"
], function (JourneyRunner, SalesOrderListGenerated, SalesOrderObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/ndbs/salesorderdata/salesorderdata') + '/test/flp.html#app-preview',
        pages: {
			onTheSalesOrderListGenerated: SalesOrderListGenerated,
			onTheSalesOrderObjectPageGenerated: SalesOrderObjectPageGenerated
        },
        async: true
    });

    return runner;
});

