import { Engine, ENGINE_EVENT, Plugin, SetDomEvent } from "@vis-three/core";
import { PointerManager, PointerManagerParameters } from "./PointerManager";

export * from "./PointerManager";

export interface PointerManagerEngine extends Engine {
  pointerManager: PointerManager;
}

export const PointerManagerPlugin: Plugin<PointerManagerEngine> = function (
  params: PointerManagerParameters
) {
  let setDomFun: ((event: SetDomEvent) => void) | undefined;

  return {
    name: "PointerManagerPlugin",
    install(engine) {
      const pointerManager = new PointerManager(
        Object.assign(params || {}, {
          dom: engine.dom,
        })
      );

      setDomFun = (event) => {
        pointerManager.setDom(event.dom);
      };

      engine.addEventListener<SetDomEvent>(ENGINE_EVENT.SETDOM, setDomFun);

      engine.pointerManager = pointerManager;
    },

    dispose(engine) {
      engine.removeEventListener<SetDomEvent>(ENGINE_EVENT.SETDOM, setDomFun!);
      setDomFun = undefined;
    },
  };
};
