"use strict";

{
	// In the C3 runtime's worker mode, all the runtime scripts (e.g. plugin.js, instance.js, actions.js)
	// are loaded in a Web Worker, which has no access to the document so cannot make DOM calls. To help
	// plugins use DOM elements the runtime internally manages a postMessage() bridge wrapped in some helper
	// classes designed to manage DOM elements. Then this script (domSide.js) is loaded in the main document
	// (aka the main thread) where it can make any DOM calls on behalf of the runtime. Conceptually the two
	// ends of the messaging bridge are the "Runtime side" in a Web Worker, and the "DOM side" with access
	// to the Document Object Model (DOM). The addon's plugin.js specifies to load this script on the
	// DOM side by making the call: this._info.SetDOMSideScripts(["c3runtime/domSide.js"])
	// Note that when NOT in worker mode, this entire framework is still used identically, just with both
	// the runtime and the DOM side in the main thread. This allows non-worker mode to work the same with
	// no additional code changes necessary. However it's best to imagine that the runtime side is in a
	// Web Worker, since that is when it is necessary to separate DOM calls from the runtime.
	
	// NOTE: use a unique DOM component ID to ensure it doesn't clash with anything else
	// This must also match the ID in instance.js and plugin.js.
	const DOM_COMPONENT_ID = "Nagyv_Reactpluginexample";

	const HANDLER_CLASS = class MyDOMHandler extends DOMElementHandler
	{
		constructor(iRuntime)
		{
			super(iRuntime, DOM_COMPONENT_ID);
		}

		AssureContainer(elementId) {
			if(!document.getElementById(elementId)) {
				const elem = document.createElement('div')
				elem.id = elementId
				elem.style.position = 'absolute'
				document.body.appendChild(elem)
				return elem
			} else {
				return document.getElementById(elementId)
			}
		}

		CreateElement(elementId, e)
		{
			const elem = this.AssureContainer(`ReactContainer-${elementId}`)

			// The create message includes the state retrieved by GetElementState() in instance.js,
			// so also update the element state based on those details.
			this.UpdateState(elem, e);

			window.Nagyv_Reactpluginexample.Setup(`ReactContainer-${elementId}`, e.config)

			return elem;
		}

		UpdateState(elem, e)
		{
			// Update the state of the DOM element 'elem' with the state 'e'. The state has been
			// retrieved by calling GetElementState() in instance.js, which includes all necessary
			// details to set the correct state of the DOM element.
			// NOTE: the runtime automatically manages the position, size and visibility of the DOM
			// element, so this only needs to handle state unique to the element, such as the button
      // text in this case.
		}
	};
	
	RuntimeInterface.AddDOMHandlerClass(HANDLER_CLASS);
}