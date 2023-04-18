import { Camera, Scene, WebGLRenderer } from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { Engine } from "@vis-three/core";
import { CSS3DRenderer } from "three/examples/jsm/renderers/CSS3DRenderer";
import { CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer";
import { Screenshot, WebGLRendererEngine } from "@vis-three/plugin-webgl-renderer";
import { EffectComposerEngine } from "@vis-three/plugin-effect-composer";
import { OrbitControlsEngine, VisOrbitControls } from "@vis-three/plugin-orbit-controls";
import { RenderManager, RenderManagerEngine } from "@vis-three/plugin-render-manager";
import { PointerManager, PointerManagerEngine } from "@vis-three/plugin-pointer-manager";
import { CSS2DRendererEngine } from "@vis-three/plugin-css2d-renderer";
import { CSS3DRendererEngine } from "@vis-three/plugin-css3d-renderer";
import { EventManager, EventManagerEngine } from "@vis-three/plugin-event-manager";
export declare class DisplayEngine extends Engine implements WebGLRendererEngine, EffectComposerEngine, OrbitControlsEngine, RenderManagerEngine, PointerManagerEngine, EventManagerEngine, CSS2DRendererEngine, CSS3DRendererEngine {
    dom: HTMLElement;
    webGLRenderer: WebGLRenderer;
    currentCamera: Camera;
    scene: Scene;
    orbitControls: VisOrbitControls;
    effectComposer: EffectComposer;
    renderManager: RenderManager;
    pointerManager: PointerManager;
    eventManager: EventManager;
    css3DRenderer: CSS3DRenderer;
    css2DRenderer: CSS2DRenderer;
    play: () => this;
    stop: () => this;
    render: () => this;
    getScreenshot: (params?: Screenshot | undefined) => Promise<string>;
    constructor();
}