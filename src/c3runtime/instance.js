"use strict";
{
    const DOM_COMPONENT_ID = "Nagyv_Reactpluginexample";

    C3.Plugins.Nagyv_Reactpluginexample.Instance = class MyInstance extends C3.SDKDOMInstanceBase
    {
        constructor(inst, properties)
        {
            super(inst, DOM_COMPONENT_ID);

            // Create an element for this instance. The runtime handles this and will result in a call
			// to CreateElement() in domSide.js where the real DOM calls are made.
			this.CreateElement();
        }

        GetElementState()
		{
			// Return JSON with the state of the element. This is passed along to both CreateElement()
			// and UpdateState() in domSide.js. It provides a convenient way to send all the DOM element
			// state in one go, ensuring any changes are reflected in the real element.
			return {
                config: {
                    name: "Dolly"
                }
            };
        }
        
        Draw(renderer)
		{
			// not used - a DOM element is positioned at this instance instead
		}

        Release()
        {
            super.Release();
        }

        SaveToJson()
        {
            return {
                // data to be saved for savegames
            };
        }

        LoadFromJson(o)
        {
            // load state for savegames
        }
    };
}