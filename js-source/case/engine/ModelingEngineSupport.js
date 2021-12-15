import { ModelingEngine } from "../../main";
import { VISTRANSFORMEVENTTYPE } from "../../optimize/VisTransformControls";
import { CameraCompiler } from "../camera/CameraCompiler";
import { MODULETYPE } from "../constants/MODULETYPE";
import { GeometryCompiler } from "../geometry/GeometryCompiler";
import { LightCompiler } from "../light/LightCompiler";
import { MaterialCompiler } from "../material/MaterialCompiler";
import { ModelCompiler } from "../model/ModelCompiler";
import { RendererCompiler } from "../render/RendererCompiler";
import { SceneCompiler } from "../scene/SceneCompiler";
import { TextureCompiler } from "../texture/TextureCompiler";
export class ModelingEngineSupport extends ModelingEngine {
    compilerMap;
    resourceManager;
    dataSupportManager;
    objectConfigMap;
    constructor(parameters) {
        super(parameters.dom);
        // 所有support
        const dataSupportManager = parameters.dataSupportManager;
        const textureDataSupport = dataSupportManager.getDataSupport(MODULETYPE.TEXTURE);
        const materialDataSupport = dataSupportManager.getDataSupport(MODULETYPE.MATERIAL);
        const cameraDataSupport = dataSupportManager.getDataSupport(MODULETYPE.CAMERA);
        const lightDataSupport = dataSupportManager.getDataSupport(MODULETYPE.LIGHT);
        const geometryDataSupport = dataSupportManager.getDataSupport(MODULETYPE.GEOMETRY);
        const modelDataSupport = dataSupportManager.getDataSupport(MODULETYPE.MODEL);
        const rendererDataSupport = dataSupportManager.getDataSupport(MODULETYPE.RENDERER);
        const sceneDataSupport = dataSupportManager.getDataSupport(MODULETYPE.SCENE);
        // 物体配置数据
        const cameraSupportData = cameraDataSupport.getData();
        const lightSupportData = lightDataSupport.getData();
        const modelSupportData = modelDataSupport.getData();
        const textureCompiler = new TextureCompiler({
            target: textureDataSupport.getData()
        });
        const materialCompiler = new MaterialCompiler({
            target: materialDataSupport.getData()
        });
        const cameraCompiler = new CameraCompiler({
            target: cameraSupportData,
            scene: this.scene
        });
        const lightCompiler = new LightCompiler({
            scene: this.scene,
            target: lightSupportData
        });
        const geometryCompiler = new GeometryCompiler({
            target: geometryDataSupport.getData()
        });
        const modelCompiler = new ModelCompiler({
            scene: this.scene,
            target: modelSupportData
        });
        const rendererCompiler = new RendererCompiler({
            target: rendererDataSupport.getData(),
            glRenderer: this.renderer
        });
        const sceneCompiler = new SceneCompiler({
            target: sceneDataSupport.getData(),
            scene: this.scene
        });
        const resourceManager = parameters.resourceManager;
        // 建立编译器链接
        sceneCompiler.linkTextureMap(textureCompiler.getMap());
        materialCompiler.linkTextureMap(textureCompiler.getMap());
        modelCompiler.linkGeometryMap(geometryCompiler.getMap());
        modelCompiler.linkMaterialMap(materialCompiler.getMap());
        textureCompiler.linkRescourceMap(resourceManager.getMappingResourceMap());
        geometryCompiler.linkRescourceMap(resourceManager.getMappingResourceMap());
        // 添加通知
        textureDataSupport.addCompiler(textureCompiler);
        materialDataSupport.addCompiler(materialCompiler);
        cameraDataSupport.addCompiler(cameraCompiler);
        lightDataSupport.addCompiler(lightCompiler);
        geometryDataSupport.addCompiler(geometryCompiler);
        modelDataSupport.addCompiler(modelCompiler);
        rendererDataSupport.addCompiler(rendererCompiler);
        sceneDataSupport.addCompiler(sceneCompiler);
        // 引擎操作更新support —— 同步变换操作
        const tempMap = new Map();
        cameraCompiler.getMap().forEach((camera, vid) => {
            tempMap.set(vid, camera);
        });
        lightCompiler.getMap().forEach((light, vid) => {
            tempMap.set(vid, light);
        });
        modelCompiler.getMap().forEach((model, vid) => {
            tempMap.set(vid, model);
        });
        const objectConfigMap = new WeakMap();
        Object.keys(cameraSupportData).forEach(vid => {
            objectConfigMap.set(tempMap.get(vid), cameraSupportData[vid]);
        });
        Object.keys(lightSupportData).forEach(vid => {
            objectConfigMap.set(tempMap.get(vid), lightSupportData[vid]);
        });
        Object.keys(modelSupportData).forEach(vid => {
            objectConfigMap.set(tempMap.get(vid), modelSupportData[vid]);
        });
        tempMap.clear(); // 清除缓存
        this.transformControls.addEventListener(VISTRANSFORMEVENTTYPE.OBJECTCHANGED, (event) => {
            const e = event;
            const mode = e.mode;
            e.transObjectSet.forEach(object => {
                const config = objectConfigMap.get(object);
                if (config && config[mode]) {
                    config[mode].x = object[mode].x;
                    config[mode].y = object[mode].y;
                    config[mode].z = object[mode].z;
                }
                else {
                    // TODO: 这里不应该会出现选不到的物体，需要做优化 例如 helper的children等
                    console.warn(`can not font config in this object: '${object}'`);
                }
            });
        });
        // 缓存编译器
        const compilerMap = new Map();
        compilerMap.set(MODULETYPE.TEXTURE, textureCompiler);
        compilerMap.set(MODULETYPE.MATERIAL, materialCompiler);
        compilerMap.set(MODULETYPE.CAMERA, cameraCompiler);
        compilerMap.set(MODULETYPE.LIGHT, lightCompiler);
        compilerMap.set(MODULETYPE.MODEL, modelCompiler);
        compilerMap.set(MODULETYPE.GEOMETRY, geometryCompiler);
        compilerMap.set(MODULETYPE.RENDERER, rendererCompiler);
        compilerMap.set(MODULETYPE.SCENE, sceneCompiler);
        this.compilerMap = compilerMap;
        this.dataSupportManager = parameters.dataSupportManager;
        this.resourceManager = parameters.resourceManager;
        this.objectConfigMap = objectConfigMap;
    }
    getDataSupportManager() {
        return this.dataSupportManager;
    }
    getResourceManager() {
        return this.resourceManager;
    }
    getCompiler(module) {
        return this.compilerMap.get(module);
    }
}
//# sourceMappingURL=ModelingEngineSupport.js.map