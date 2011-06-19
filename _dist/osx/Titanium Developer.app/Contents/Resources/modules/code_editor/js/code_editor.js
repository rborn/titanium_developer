CodeEditor = {};

//
// Setup main view
//
CodeEditor.setupView = function()
{
	// set default UI state
	TiUI.setBackgroundColor('#161616');
	TiDev.contentLeft.show();
	TiDev.contentLeftHideButton.show();
	TiDev.contentLeftShowButton.hide();		
	
};

// setup event handler
CodeEditor.eventHandler = function(event)
{
	if (event == 'focus')
	{
		CodeEditor.setupView();
	}
	else if (event == 'load')
	{
		CodeEditor.setupView();
	}
	else if (event == 'blur')
	{
		$('#tiui_content_submenu').hide();
	}
};


// register module
TiDev.registerModule({
	name:'code_editor',
	displayName: 'Code Editor',
	perspectives:['projects'],
	html:'code_editor.html',
	idx:2,
	//active:true,
	callback:CodeEditor.eventHandler
});
