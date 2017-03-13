sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		createLocalDataModel : function() {
			var oModel = new JSONModel("./model/customers.json");
			return oModel;
		},
			createCountryDataModel : function() {
			var oModel = new JSONModel("./model/selection.json");
			return oModel;
		}

	};

});