({
	text: Ti.UI.currentTab.title,
	app: Ti.UI.currentWindow.app,
	win: Ti.UI.currentWindow,
	label: null,
	tabIndex: 1,
	
	newWindowTest: function() {
		var win = this.app.foundation.UI.createWindow('WindowTest', {modal: true});
		win.open();
	},
	
	newViewlessWindowTest: function() {
		var win = this.app.foundation.UI.createWindow('viewlessTest', {viewless: true, modal: true, layout: 'vertical'});		
		var label1 = Ti.UI.createLabel({text: 'New viewless window created!', top: 40});
		var closeButton = Ti.UI.createButton({title: 'Close', top: 80});
		
		closeButton.addEventListener('click', function() {
			win.close()
		});
		
		win.add(label1);
		win.add(closeButton);
		win.open();
		
	},
	
	createTabTest: function() {
		
		this.app.foundation.UI.createTab('New Tab ' + this.tabIndex, {}, {file: 'WindowTest.js', hideCloseButton: true});
		this.tabIndex++;
	},
	
	init: function() {
		
		var data = [
			{title: 'Window', fn: 'newWindowTest', fn: 'newWindowTest', hasChild: true},
			{title: 'Viewless window', fn: 'newViewlessWindowTest', hasChild: true},
			{title: 'Create Tab', fn: 'createTabTest', hasChild: true}
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
		
		alert(this.text + ' init (you should see this alert only once)');
		// this.label = Ti.UI.createLabel({text: this.text, color: '#999'});
		// this.win.add(this.label);
	}
}).init();