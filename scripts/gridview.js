define([
    'marionette',
    'gridrowview'
], function(Marionette, GridRowView) {

    return Marionette.CompositeView.extend({
        template: '#gridview_template',
        childViewContainer: "tbody",
        childView: GridRowView,
        childViewOptions: function () {
            return { gridView: this };
        },
	events: {
	    'click #id': 'idSort',
	    'click #title': 'titleSort',
	    'click #tel': 'telSort',
	    'click #city': 'citySort'
	},
	initialize : function() {
	    console.log("initialize GrigView");
	},
	idSort: function () {
	    this.sortBy('id');
	},
	titleSort: function () {
	    this.sortBy('title');
	},
	telSort: function () {
	    this.sortBy('tel');
	},
	citySort: function () {
	    this.sortBy('city');
	},
	sortBy: function (field) {
	    this.collection.sortField = field;
	    this.collection.sort();
	    this.render();
	}
    });


});
