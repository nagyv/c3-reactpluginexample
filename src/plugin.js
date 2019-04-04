"use strict";
{

    const PLUGIN_ID = "Nagyv_Reactpluginexample";
    const PLUGIN_VERSION = "0.0.0.0";
    const PLUGIN_CATEGORY = "general";

    const PLUGIN_CLASS = SDK.Plugins.Nagyv_Reactpluginexample = class MyPlugin extends SDK.IPluginBase
    {
        constructor()
        {
            super(PLUGIN_ID);

            SDK.Lang.PushContext("plugins." + PLUGIN_ID.toLowerCase());

            this._info.SetName(lang(".name"));
            this._info.SetDescription(lang(".description"));
            this._info.SetVersion(PLUGIN_VERSION);
            this._info.SetCategory(PLUGIN_CATEGORY);
            this._info.SetAuthor(".author");
            this._info.SetHelpUrl(lang(".help-url"));
            this._info.SetPluginType("world");			// mark as world plugin since it's placed in the layout
			this._info.SetIsResizable(true);			// allow to be resized
            // this._info.SetIsSingleGlobal(true);

            // Load domSide.js in the document context (main thread).
			// This is important for supporting the runtime's web worker mode.
            this._info.SetDOMSideScripts(["c3runtime/domSide.js"]);

            this._info.SetSupportedRuntimes(["c3"]);

            this._info.AddFileDependency({
				filename: "ui/index.js",
				type: "external-script"
			});
            
            // SDK.Lang.PushContext(".properties");
            // SDK.Lang.PopContext(); //.properties

            SDK.Lang.PopContext();
        }
    };

    PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}