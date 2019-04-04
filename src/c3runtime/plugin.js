"use strict";
{
    const DOM_COMPONENT_ID = "Nagyv_Reactpluginexample";
    
    C3.Plugins.Nagyv_Reactpluginexample = class MyPlugin extends C3.SDKDOMPluginBase
    {
        constructor(opts)
        {
            super(opts, DOM_COMPONENT_ID);

            // Calls to PostToRuntimeElement() in domSide.js are forwarded to the plugin here.
			// The relevant instance is passed as an argument. Generally these messages need to be handled by the
			// instances themselves, so the handlers here just forward messages to instance calls.
			
			// Forward "click" messages to the _OnClick method of the relevant instance.
			// Note this also forwards the optional extra details object as the argument 'e', but in this
			// case it's not used for the click handler.
			// this.AddElementMessageHandler("click", (sdkInst, e) => sdkInst._OnClick(e));
        }

        Release()
        {
            super.Release();
        }
    };
}