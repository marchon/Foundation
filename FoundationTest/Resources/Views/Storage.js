({
	app: Ti.UI.currentWindow.app,
	win: Ti.UI.currentWindow,
	
	storageSetTest: function() {
		
		var win = this.app.foundation.UI.createWindow('testResult', {viewless: true});
		
		var stringValue = 'test string';
		this.app.foundation.Storage.set('stringValue', stringValue);
		win.add(Ti.UI.createLabel({title: 'string value set', top: 10}));
		
		var numberAsString = '12.34';
		this.app.foundation.Storage.set('numberAsString', numberAsString);
		win.add(Ti.UI.createLabel({title: 'float number (as string) set', top: 30}));

		var integer = 12;
		this.app.foundation.Storage.set('integer', integer);
		win.add(Ti.UI.createLabel({title: 'integer set', top: 50}));
				
		var floatValue = 12.34;
		this.app.foundation.Storage.set('floatValue', floatValue);
		win.add(Ti.UI.createLabel({title: 'float number set', top: 70}));		
		
		var arrayValue = [1,2,3,4];
		this.app.foundation.Storage.set('arrayValue', arrayValue);
		win.add(Ti.UI.createLabel({title: 'array set', top: 90}));

		var objectLiteral = {a: 'b', c: 2};
		this.app.foundation.Storage.set('objectLiteral', objectLiteral);
		win.add(Ti.UI.createLabel({title: 'object literal set', top: 110}));		
		
		var closeButton = Ti.UI.createButton({title: 'Close', bottom: 10});
		closeButton.addEventListener('click', function() {
			win.close();
		})
		win.add(closeButton);
		win.open();
	},	

	storageGetTest: function() {
		
		var win = this.app.foundation.UI.createWindow('testResult', {viewless: true});
		
		var result = 'failed';
		
		var stringValue = 'test string';
		var value = this.app.foundation.Storage.get('stringValue');
		result = stringValue === value ? 'passed' : 'failed';
		win.add(Ti.UI.createLabel({title: 'string value: ' + result, top: 10}));
		
		var numberAsString = '12.34';
		value = this.app.foundation.Storage.get('numberAsString');
		result = numberAsString === value ? 'passed' : 'failed';
		win.add(Ti.UI.createLabel({title: 'float number (as string): ' + result, top: 30}));

		var integer = 12;
		value = this.app.foundation.Storage.get('integer');
		result = integer === value ? 'passed' : 'failed';
		win.add(Ti.UI.createLabel({title: 'integer: ' + result, top: 50}));
				
		var floatValue = 12.34;
		value = this.app.foundation.Storage.get('floatValue');
		result = floatValue === value ? 'passed' : 'failed';
		win.add(Ti.UI.createLabel({title: 'float number: ' + result, top: 70}));		
		
		result = 'passed';
		var arrayValue = [1,2,3,4];
		value = this.app.foundation.Storage.get('arrayValue');
		if(value instanceof Array) {
			if(value.length != arrayValue.length) {
				result = 'failed (array length does not match)';
			}
			else {
				for(var i in value) {
					if(value[i] != arrayValue[i]) {
						result = 'failed (value at index '+i+' does not match)';
						break;
					}
				}				
			}
		}
		else {
			result = 'failed (return value is not an array)'
		}
		win.add(Ti.UI.createLabel({title: 'array: ' + result, top: 90}));

		var result = 'passed';
		var objectLiteral = {a: 'b', c: 2};
		value = this.app.foundation.Storage.get('objectLiteral');
		if(value instanceof Object) {
			for(var i in value) {
				if(!objectLiteral[i]) {
					result = 'failed (values don\'t match)';
					break;
				}
				else if(value[i] != objectLiteral[i]) {
					result = 'failed (value with key '+i+' does not match)';
					break;
				}
			}
		}
		else {
			result = 'failed (return value is not object)';
		}
		win.add(Ti.UI.createLabel({title: 'object literal: ' + result, top: 110}));		
		
		var closeButton = Ti.UI.createButton({title: 'Close', bottom: 10});
		closeButton.addEventListener('click', function() {
			win.close();
		})
		win.add(closeButton);
		win.open();
	},	

	persistentStorageSetTest: function() {
		
		var win = this.app.foundation.UI.createWindow('testResult', {viewless: true});
		
		var stringValue = 'test string';
		this.app.foundation.PersistentStorage.set('stringValue', stringValue);
		win.add(Ti.UI.createLabel({title: 'string value set', top: 10}));
		
		var numberAsString = '12.34';
		this.app.foundation.PersistentStorage.set('numberAsString', numberAsString);
		win.add(Ti.UI.createLabel({title: 'float number (as string) set', top: 30}));

		var integer = 12;
		this.app.foundation.PersistentStorage.set('integer', integer);
		win.add(Ti.UI.createLabel({title: 'integer set', top: 50}));
				
		var floatValue = 12.34;
		this.app.foundation.PersistentStorage.set('floatValue', floatValue);
		win.add(Ti.UI.createLabel({title: 'float number set', top: 70}));		
		
		var arrayValue = [1,2,3,4];
		this.app.foundation.PersistentStorage.set('arrayValue', arrayValue);
		win.add(Ti.UI.createLabel({title: 'array set', top: 90}));

		var objectLiteral = {a: 'b', c: 2};
		this.app.foundation.PersistentStorage.set('objectLiteral', objectLiteral);
		win.add(Ti.UI.createLabel({title: 'object literal set', top: 110}));		
		
		var closeButton = Ti.UI.createButton({title: 'Close', bottom: 10});
		closeButton.addEventListener('click', function() {
			win.close();
		})
		win.add(closeButton);
		win.open();
	},	

	persistentStorageGetTest: function() {
		
		var win = this.app.foundation.UI.createWindow('testResult', {viewless: true});
		
		var result = 'failed';
		
		var stringValue = 'test string';
		var value = this.app.foundation.PersistentStorage.get('stringValue');
		result = stringValue === value ? 'passed' : 'failed';
		win.add(Ti.UI.createLabel({title: 'string value: ' + result, top: 10}));
		
		var numberAsString = '12.34';
		value = this.app.foundation.PersistentStorage.get('numberAsString');
		result = numberAsString === value ? 'passed' : 'failed';
		win.add(Ti.UI.createLabel({title: 'float number (as string): ' + result, top: 30}));

		var integer = 12;
		value = this.app.foundation.PersistentStorage.get('integer');
		result = integer === value ? 'passed' : 'failed';
		win.add(Ti.UI.createLabel({title: 'integer: ' + result, top: 50}));
				
		var floatValue = 12.34;
		value = this.app.foundation.PersistentStorage.get('floatValue');
		result = floatValue === value ? 'passed' : 'failed';
		win.add(Ti.UI.createLabel({title: 'float number: ' + result, top: 70}));		
		
		result = 'passed';
		var arrayValue = [1,2,3,4];
		value = this.app.foundation.PersistentStorage.get('arrayValue');
		if(value instanceof Array) {
			if(value.length != arrayValue.length) {
				result = 'failed (array length does not match)';
			}
			else {
				for(var i in value) {
					if(value[i] != arrayValue[i]) {
						result = 'failed (value at index '+i+' does not match)';
						break;
					}
				}				
			}
		}
		else {
			result = 'failed (return value is not an array)'
		}
		win.add(Ti.UI.createLabel({title: 'array: ' + result, top: 90}));

		var result = 'passed';
		var objectLiteral = {a: 'b', c: 2};
		value = this.app.foundation.PersistentStorage.get('objectLiteral');
		if(value instanceof Object) {
			for(var i in value) {
				if(!objectLiteral[i]) {
					result = 'failed (values don\'t match)';
					break;
				}
				else if(value[i] != objectLiteral[i]) {
					result = 'failed (value with key '+i+' does not match)';
					break;
				}
			}
		}
		else {
			result = 'failed (return value is not object)';
		}
		win.add(Ti.UI.createLabel({title: 'object literal: ' + result, top: 110}));		
		
		var closeButton = Ti.UI.createButton({title: 'Close', bottom: 10});
		closeButton.addEventListener('click', function() {
			win.close();
		})
		win.add(closeButton);
		win.open();
	},
	
	init: function() {
		
		var data = [
			{title: 'Runtime Storage (store values)', fn: 'storageSetTest', hasChild: true},
			{title: 'Runtime Storage (retrieve values)', fn: 'storageGetTest', hasChild: true},
			{title: 'Persistent Storage (store values)', fn: 'persistentStorageSetTest', hasChild: true},
			{title: 'Persistent Storage (retrieve values)', fn: 'persistentStorageGetTest', hasChild: true}
		];
		
		var table = Ti.UI.createTableView({
			data: data
		});

		var self = this;
		table.addEventListener('click', function(e) {
			if(typeof self[e.rowData.fn] == 'function') {
				self[e.rowData.fn].apply(self);
			}
		});
		
		this.win.add(table);
		
	}
}).init();