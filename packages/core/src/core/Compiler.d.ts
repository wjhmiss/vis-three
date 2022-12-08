import { SymbolConfig } from "../middleware/common/CommonConfig";
import { EngineSupport } from "../engine/EngineSupport";
import { MODULETYPE } from "../middleware/constants/MODULETYPE";
import { ProxyNotice } from "./DataContainer";
import { Processor } from "./Processor";
export type CompilerTarget<C extends SymbolConfig> = Record<string, C>;
export type BasicCompiler = Compiler<SymbolConfig, object>;
export declare abstract class Compiler<C extends SymbolConfig, O extends object> {
    static processors: Map<string, Processor<SymbolConfig, object>>;
    static processor: <C_1 extends SymbolConfig, T extends object>(processor: Processor<C_1, T>) => void;
    abstract MODULE: MODULETYPE;
    target: CompilerTarget<C>;
    map: Map<SymbolConfig["vid"], O>;
    weakMap: WeakMap<O, SymbolConfig["vid"]>;
    engine: EngineSupport;
    private cacheCompile?;
    getMap(): Map<SymbolConfig["vid"], O>;
    useEngine(engine: EngineSupport): this;
    setTarget(target: CompilerTarget<C>): this;
    add(config: C): O | null;
    remove(config: C): this;
    cover(config: C): this;
    compile(vid: SymbolConfig["vid"], notice: Omit<ProxyNotice, "path"> & {
        path: string[];
    }): this;
    compileAll(): this;
    dispose(): this;
    getObjectSymbol(object: O): string | null;
    getObjectBySymbol(vid: string): O | null;
}