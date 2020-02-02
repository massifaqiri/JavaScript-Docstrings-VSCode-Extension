/**
 * @file This belongs to the JavaScript Docstrings vscode extension. The JavaScript Docstrings provides standard documentation for functions, variables, classes and etc.  
 * @author Massi Faqiri <faqima01@luther.edu>
 * @copyright Massi Faqiri 2020
 * @license MIT 
 */

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in the code below
const vscode = require('vscode');
// this method is called when the extension is activated
// the extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	// The command has been defined in the package.json file
	// This is for JSDocs: Class command.
	let extClass = vscode.commands.registerCommand('extension.class', function () {
		// Variables to get the location of the cursor 
		var editor = vscode.window.activeTextEditor;
		var selection = editor.selection;
		var selectionAnchor = selection.anchor;
		var line = selectionAnchor.line;
		var char = selectionAnchor.character;

		// Handling first line error
		if (line == 0) {
			vscode.window.showErrorMessage('Please make sure your selection or cursor is not at the first line.');
			return;
		}

		// The desired position
		var desiredPos = new vscode.Position(line-1, char);
		
		// Display a success message box to the user
		vscode.window.showInformationMessage('Tip: Place it right above the class.');

		// Insert the docstring in the desired position.
		editor.edit(editBuilder => {
			let commentStr = `/**
* Brief description of the class here.
* @extends ParentClassNameHereIfAny
*/`;
		editBuilder.insert(desiredPos, commentStr);
		})
	});

// ************************JSDOcs: Function***********************************************

	// The command has been defined in the package.json file
	// This is for JSDocs: Function command.
	let extFunction = vscode.commands.registerCommand('extension.function', function () {
		// Variables to get the location of the cursor 
		var editor = vscode.window.activeTextEditor;
		var selection = editor.selection;
		var selectionAnchor = selection.anchor;
		var line = selectionAnchor.line;
		var char = selectionAnchor.character;

		// Handling first line error
		if (line == 0) {
			vscode.window.showErrorMessage('Please make sure your selection or cursor is not at the first line.');
			return;
		}

		// The desired position
		var desiredPos = new vscode.Position(line-1, char);
		
		// Display a success message box to the user
		vscode.window.showInformationMessage('Tip: Place it right above the function.');

		// Insert the docstring in the desired position.
		editor.edit(editBuilder => {
			let commentStr = `/** 
* Brief description of the function here.
* @summary If the description is long, write your summary here. Otherwise, feel free to remove this.
* @param {ParamDataTypeHere} parameterNameHere - Brief description of the parameter here. Note: For other notations of data types, please refer to JSDocs: DataTypes command.
* @return {ReturnValueDataTypeHere} Brief description of the returning value here.
*/`;
		editBuilder.insert(desiredPos, commentStr);
		})
	});

// ************************JSDOcs: Author***********************************************

	// The command has been defined in the package.json file
	// This is for JSDocs: Author command.
	let extAuthor = vscode.commands.registerCommand('extension.author', function () {
		// Variables to get the location of the cursor 
		var editor = vscode.window.activeTextEditor;
		var selection = editor.selection;
		var selectionAnchor = selection.anchor;
		var line = selectionAnchor.line;
		var char = selectionAnchor.character;

		// Handling first line error
		if (line == 0) {
			vscode.window.showErrorMessage('Please make sure your selection or cursor is not at the first line.');
			return;
		}

		// The desired position
		var desiredPos = new vscode.Position(line-1, char);
		
		// Display a success message box to the user
		vscode.window.showInformationMessage('Tip: Place it above any item that you would like.');

		// Insert the docstring in the desired position.
		editor.edit(editBuilder => {
			let commentStr = `/**
* @author FirstName LastName <optionalEmail@example.com>
*/`;
		editBuilder.insert(desiredPos, commentStr);
		})
	});

// ************************JSDOcs: Constant Variable***********************************************

	// The command has been defined in the package.json file
	// This is for JSDocs: Constant Variable command.
	let extConstant = vscode.commands.registerCommand('extension.constantVariable', function () {
		// Variables to get the location of the cursor 
		var editor = vscode.window.activeTextEditor;
		var selection = editor.selection;
		var selectionAnchor = selection.anchor;
		var line = selectionAnchor.line;
		var char = selectionAnchor.character;

		// Handling first line error
		if (line == 0) {
			vscode.window.showErrorMessage('Please make sure your selection or cursor is not at the first line.');
			return;
		}

		// The desired position
		var desiredPos = new vscode.Position(line-1, char);
		
		// Display a success message box to the user
		vscode.window.showInformationMessage('Tip: Place it above the desired constant variable.');

		// Insert the docstring in the desired position.
		editor.edit(editBuilder => {
			let commentStr =`/** @constant {constantDataTypeHere} */`;
		editBuilder.insert(desiredPos, commentStr);
		})
	});

// ************************JSDOcs: Header***********************************************

	// The command has been defined in the package.json file
	// This is for JSDocs: Header command.
	let extHeader = vscode.commands.registerCommand('extension.header', function () {
		// Variables to get the location of the cursor 
		var editor = vscode.window.activeTextEditor;
		var selection = editor.selection;
		var selectionAnchor = selection.anchor;
		var line = selectionAnchor.line;
		var char = selectionAnchor.character;

		// Handling first line error
		if (line == 0) {
			vscode.window.showErrorMessage('Please make sure your selection or cursor is not at the first line.');
			return;
		}

		// The desired position
		var desiredPos = new vscode.Position(line-1, char);
		
		// Display a success message box to the user
		vscode.window.showInformationMessage('Tip: Place it on the first or second line.');

		// Insert the docstring in the desired position.
		editor.edit(editBuilder => {
			let commentStr = `/**
* @file Brief description of the file here
* @author FirstName LastName <optionalEmail@example.com>
* @copyright FirstName LastName Year
* @license LicenseHereIfApplicable
*/`;
		editBuilder.insert(desiredPos, commentStr);
		})
	});

// ************************JSDocs: Deprecated Notation***********************************************

	// The command has been defined in the package.json file
	// This is for JSDocs: Deprecated Notation command.
	let extDeprecated = vscode.commands.registerCommand('extension.deprecated', function () {
		// Variables to get the location of the cursor 
		var editor = vscode.window.activeTextEditor;
		var selection = editor.selection;
		var selectionAnchor = selection.anchor;
		var line = selectionAnchor.line;
		var char = selectionAnchor.character;

		// Handling first line error
		if (line == 0) {
			vscode.window.showErrorMessage('Please make sure your selection or cursor is not at the first line.');
			return;
		}

		// The desired position
		var desiredPos = new vscode.Position(line-1, char);
		
		// Display a success message box to the user
		vscode.window.showInformationMessage('Tip: Place it above the desired deprecated item.');

		// Insert the docstring in the desired position.
		editor.edit(editBuilder => {
			let commentStr = `/**
* @deprecated brief or no comment here
*/`;
		editBuilder.insert(desiredPos, commentStr);
		})
	});

// ************************JSDocs: Generator Function***********************************************

	// The command has been defined in the package.json file
	// This is for JSDocs: Generator Function command.
	let extGenerator = vscode.commands.registerCommand('extension.generator', function () {
		// Variables to get the location of the cursor 
		var editor = vscode.window.activeTextEditor;
		var selection = editor.selection;
		var selectionAnchor = selection.anchor;
		var line = selectionAnchor.line;
		var char = selectionAnchor.character;

		// Handling first line error
		if (line == 0) {
			vscode.window.showErrorMessage('Please make sure your selection or cursor is not at the first line.');
			return;
		}

		// The desired position
		var desiredPos = new vscode.Position(line-1, char);
		
		// Display a success message box to the user
		vscode.window.showInformationMessage('Tip: Place it above the desired generator function.');

		// Insert the docstring in the desired position.
		editor.edit(editBuilder => {
			let commentStr = `/**
* Brief description of the function here.
* @generator
* @function functionNameHere
* @yields {yieldDataType} Brief description of yielded items here.
*/`;
		editBuilder.insert(desiredPos, commentStr);
		})
	});

// ************************JSDocs: Global Variable***********************************************

	// The command has been defined in the package.json file
	// This is for JSDocs: Global Variable command.
	let extGlobal = vscode.commands.registerCommand('extension.globalVariable', function () {
		// Variables to get the location of the cursor 
		var editor = vscode.window.activeTextEditor;
		var selection = editor.selection;
		var selectionAnchor = selection.anchor;
		var line = selectionAnchor.line;
		var char = selectionAnchor.character;

		// Handling first line error
		if (line == 0) {
			vscode.window.showErrorMessage('Please make sure your selection or cursor is not at the first line.');
			return;
		}

		// The desired position
		var desiredPos = new vscode.Position(line-1, char);
		
		// Display a success message box to the user
		vscode.window.showInformationMessage('Tip: Place it above the desired global variable.');

		// Insert the docstring in the desired position.
		editor.edit(editBuilder => {
			let commentStr = `/** @global */`;
		editBuilder.insert(desiredPos, commentStr);
		})
	});

// ************************JSDOcs: ReadOnly***********************************************

	// The command has been defined in the package.json file
	// This is for JSDocs: ReadOnly command.
	let extReadOnly = vscode.commands.registerCommand('extension.readOnly', function () {
		// Variables to get the location of the cursor 
		var editor = vscode.window.activeTextEditor;
		var selection = editor.selection;
		var selectionAnchor = selection.anchor;
		var line = selectionAnchor.line;
		var char = selectionAnchor.character;

		// Handling first line error
		if (line == 0) {
			vscode.window.showErrorMessage('Please make sure your selection or cursor is not at the first line.');
			return;
		}

		// The desired position
		var desiredPos = new vscode.Position(line-1, char);
		
		// Display a success message box to the user
		vscode.window.showInformationMessage('Tip: Place it above the desired read-only item.');

		// Insert the docstring in the desired position.
		editor.edit(editBuilder => {
			let commentStr = `/**
* Brief description here.
* @readonly
*/`;
		editBuilder.insert(desiredPos, commentStr);
		})
	});

// ************************JSDOcs: this Keyword***********************************************

	// The command has been defined in the package.json file
	// This is for JSDocs: this Keyword command.
	let extThisKeyword = vscode.commands.registerCommand('extension.thisKeyword', function () {
		// Variables to get the location of the cursor 
		var editor = vscode.window.activeTextEditor;
		var selection = editor.selection;
		var selectionAnchor = selection.anchor;
		var line = selectionAnchor.line;
		var char = selectionAnchor.character;

		// Handling first line error
		if (line == 0) {
			vscode.window.showErrorMessage('Please make sure your selection or cursor is not at the first line.');
			return;
		}

		// The desired position
		var desiredPos = new vscode.Position(line-1, char);
		
		// Display a success message box to the user
		vscode.window.showInformationMessage('Tip: Place it above the place where this keyword is used.');

		// Insert the docstring in the desired position.
		editor.edit(editBuilder => {
			let commentStr = `/** @this itsReferenceNameHere */`;
		editBuilder.insert(desiredPos, commentStr);
		})
	});

// ************************JSDOcs: todo***********************************************

	// The command has been defined in the package.json file
	// This is for JSDocs: Todo command.
	let extToDo = vscode.commands.registerCommand('extension.toDo', function () {
		// Variables to get the location of the cursor 
		var editor = vscode.window.activeTextEditor;
		var selection = editor.selection;
		var selectionAnchor = selection.anchor;
		var line = selectionAnchor.line;
		var char = selectionAnchor.character;

		// Handling first line error
		if (line == 0) {
			vscode.window.showErrorMessage('Please make sure your selection or cursor is not at the first line.');
			return;
		}

		// The desired position
		var desiredPos = new vscode.Position(line-1, char);
		
		// Display a success message box to the user
		vscode.window.showInformationMessage('Tip: Place it anywhere you would like.');

		// Insert the docstring in the desired position.
		editor.edit(editBuilder => {
			let commentStr = `/**
* @todo Brief description of the todo here.
*/`;
		editBuilder.insert(desiredPos, commentStr);
		})
	});

// ************************JSDOcs: DataTypes***********************************************

	// The command has been defined in the package.json file
	// This is for JSDocs: Constant Variable command.
	let extDataTypes = vscode.commands.registerCommand('extension.dataTypes', function () {
		// Variables to get the location of the cursor 
		var editor = vscode.window.activeTextEditor;
		var selection = editor.selection;
		var selectionAnchor = selection.anchor;
		var line = selectionAnchor.line;
		var char = selectionAnchor.character;

		// Handling first line error
		if (line == 0) {
			vscode.window.showErrorMessage('Please make sure your selection or cursor is not at the first line.');
			return;
		}

		// The desired position
		var desiredPos = new vscode.Position(line-1, char);
		
		// Display a success message box to the user
		vscode.window.showInformationMessage('Tip: Choose from the given list and use it appropriately.');

		// Insert the docstring in the desired position.
		editor.edit(editBuilder => {
			let commentStr = `/**
* {DataTypeHere} - Note: used for usual data type declaration.
* {(OneDataType|AnotherDataType)} - Note: used for cases where data type could be either of the two.
* {DataType[]} - Note: used for an array of DataType instances.
* {?DataTypeHere} - Note: used for data types which could be the data type mentioned or null.
* {DataTypeHere} [parameterNameHere] - Note: used for optional parameters.
* {Object.<KeyDataType, ValueDataType>} - Note: used for an object with KeyDataType keys and ValueDataType values
*/`;
		editBuilder.insert(desiredPos, commentStr);
		})
	});

// ************************JSDOcs: Object***********************************************

	// The command has been defined in the package.json file
	// This is for JSDocs: Constant Variable command.
	let extObject = vscode.commands.registerCommand('extension.object', function () {
		// Variables to get the location of the cursor 
		var editor = vscode.window.activeTextEditor;
		var selection = editor.selection;
		var selectionAnchor = selection.anchor;
		var line = selectionAnchor.line;
		var char = selectionAnchor.character;

		// Handling first line error
		if (line == 0) {
			vscode.window.showErrorMessage('Please make sure your selection or cursor is not at the first line.');
			return;
		}

		// The desired position
		var desiredPos = new vscode.Position(line-1, char);
		
		// Display a success message box to the user
		vscode.window.showInformationMessage('Tip: Place it above the object.');

		// Insert the docstring in the desired position.
		editor.edit(editBuilder => {
			let commentStr = `/**
* Brief description of the object here.
* @property {DataTypeHere} KeyNameHere - Brief description of the key here.
* @property {DataTypeHere} [OptionalKeyHereIfAny] - Brief description of the optional key here, if applicable.
* @property {DataTypeHere} ParentKeyName.NameOfAnotherKeyInsideIt - Brief description of the key here. Use this for keys inside other keys.
*/`;
		editBuilder.insert(desiredPos, commentStr);
		})
	});

// ************************JSDOcs: Version***********************************************

	// The command has been defined in the package.json file
	// This is for JSDocs: Version command.
	let extVersion = vscode.commands.registerCommand('extension.version', function () {
		// Variables to get the location of the cursor 
		var editor = vscode.window.activeTextEditor;
		var selection = editor.selection;
		var selectionAnchor = selection.anchor;
		var line = selectionAnchor.line;
		var char = selectionAnchor.character;

		// Handling first line error
		if (line == 0) {
			vscode.window.showErrorMessage('Please make sure your selection or cursor is not at the first line.');
			return;
		}

		// The desired position
		var desiredPos = new vscode.Position(line-1, char);
		
		// Display a success message box to the user
		vscode.window.showInformationMessage('Tip: Place it anywhere you would like to specify its version.');

		// Insert the docstring in the desired position.
		editor.edit(editBuilder => {
			let commentStr = `/** @version versionNumberHere */`;
		editBuilder.insert(desiredPos, commentStr);
		})
	});

// ************************JSDOcs: Link***********************************************

	// The command has been defined in the package.json file
	// This is for JSDocs: Link command.
	let extLink = vscode.commands.registerCommand('extension.link', function () {
		// Variables to get the location of the cursor 
		var editor = vscode.window.activeTextEditor;
		var selection = editor.selection;
		var selectionAnchor = selection.anchor;
		var line = selectionAnchor.line;
		var char = selectionAnchor.character;

		// Handling first line error
		if (line == 0) {
			vscode.window.showErrorMessage('Please make sure your selection or cursor is not at the first line.');
			return;
		}

		// The desired position
		var desiredPos = new vscode.Position(line-1, char);
		
		// Display a success message box to the user
		vscode.window.showInformationMessage('Tip: Place it anywhere you would like to refer to a link, inside or outside.');

		// Insert the docstring in the desired position.
		editor.edit(editBuilder => {
			let commentStr = `/** Your note here, if you want: {@link https://www.yourLink.com} */`;
		editBuilder.insert(desiredPos, commentStr);
		})
	});

	context.subscriptions.push(extClass);
	context.subscriptions.push(extFunction);
	context.subscriptions.push(extAuthor);
	context.subscriptions.push(extConstant);
	context.subscriptions.push(extHeader);
	context.subscriptions.push(extDeprecated);
	context.subscriptions.push(extGenerator);
	context.subscriptions.push(extGlobal);
	context.subscriptions.push(extReadOnly);
	context.subscriptions.push(extThisKeyword);
	context.subscriptions.push(extToDo);
	context.subscriptions.push(extDataTypes);
	context.subscriptions.push(extObject);
	context.subscriptions.push(extVersion);
	context.subscriptions.push(extLink);

}
exports.activate = activate;

// this method is called when the extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
