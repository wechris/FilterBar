sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("sap.training.filterbar.controller.Main", {
		onInit: function() {
			this._oTable = this.getView().byId("idProductsTable");
		},

		onSearch: function(oEvent) {
			var aSelectionSet = oEvent.getParameter("selectionSet");

			var oFilter = new sap.ui.model.Filter(
				aSelectionSet
				.map(function(oItem) {
					if (oItem.getValue) {
						var sValue = oItem.getValue();
						return new Filter("CompanyName", FilterOperator.Contains, sValue);
					}
					if (oItem.getSelectedKey) {
						var sValue = oItem.getSelectedKey();
						if (oItem.getId().indexOf("country") > 0) {
							return new Filter("Country", FilterOperator.Contains, sValue);
						} else {
							return new Filter("ContactTitle", FilterOperator.Contains, sValue);
						}
					}
				}), true);

			this._oTable.getBinding("items").filter(oFilter, true);
		},

		onReset: function(oEvent) {
			this._oTable.getBinding("items").filter([]);
		}

	});

});