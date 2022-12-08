import { defineProcessor } from "../../../core/Processor";
import { EngineSupport } from "../../../engine/EngineSupport";
import { CSS3DSprite } from "../../../extends/object/CSS3DSprite";
import { CONFIGTYPE } from "../../constants/configType";
import {
  ObjectCommands,
  objectCommands,
  objectCreate,
  objectDispose,
} from "../../object/ObjectProcessor";
import { CSS3DSpriteConfig } from "../CSS3DConfig";
import { getElement } from "./common";

export default defineProcessor<CSS3DSpriteConfig, CSS3DSprite>({
  configType: CONFIGTYPE.CSS3DSPRITE,
  commands: {
    add: (
      objectCommands as unknown as ObjectCommands<
        CSS3DSpriteConfig,
        CSS3DSprite
      >
    ).add,
    set: {
      element({ target, value, engine }) {
        target.element.innerHTML = "";
        target.element.appendChild(getElement(value, engine));
      },
      ...(<ObjectCommands<CSS3DSpriteConfig, CSS3DSprite>>objectCommands.set),
    },
    delete: (
      objectCommands as unknown as ObjectCommands<
        CSS3DSpriteConfig,
        CSS3DSprite
      >
    ).delete,
  },
  create(config: CSS3DSpriteConfig, engine: EngineSupport): CSS3DSprite {
    return objectCreate(
      new CSS3DSprite(getElement(config.element, engine)),
      config,
      {
        element: true,
      },
      engine
    );
  },
  dispose: objectDispose,
});