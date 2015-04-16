define(['backbone'], function(Backbone) {

    return Backbone.Model.extend({

	sortkeyDelimiter: '    ',

	sortkey: function (sortfield) {
            if (this.parent) {
                return this.parent.sortkey(sortfield) + this.sortkeyDelimiter + this.get(sortfield);
            }
            return this.get(sortfield);
	}
    });

   
});
