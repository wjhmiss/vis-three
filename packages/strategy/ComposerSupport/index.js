import { MODULETYPE, PLUGINS } from "@vis-three/middleware";
import { EFFECT_COMPOSER_PLUGIN, } from "@vis-three/plugin-effect-composer";
import { transPkgName } from "@vis-three/utils";
import PassModule from "@vis-three/module-pass";
import { name as pkgname } from "./package.json";
export const name = transPkgName(pkgname);
export const ComposerSupportStrategy = function () {
    return {
        name,
        condition: [...PLUGINS, EFFECT_COMPOSER_PLUGIN],
        exec(engine) {
            const compiler = engine.compilerManager.getCompiler(MODULETYPE.PASS);
            if (!compiler) {
                engine.registModule(PassModule);
            }
            compiler.useEngine(engine);
        },
        rollback(engine) { },
    };
};
